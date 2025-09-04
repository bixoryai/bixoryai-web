import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { 
  Settings, 
  Database, 
  Search, 
  Calendar,
  Users,
  BarChart3,
  Play,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  RefreshCw
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AdminJob {
  id: string;
  job_type: string;
  status: string;
  scheduled_at: string | null;
  started_at: string | null;
  completed_at: string | null;
  error_message: string | null;
  result: any;
  created_at: string;
}

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalTools: 0,
    recentJobs: 0,
    completedJobs: 0,
    failedJobs: 0
  });
  const [recentJobs, setRecentJobs] = useState<AdminJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [runningResearch, setRunningResearch] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Fetch tools count
      const { count: toolsCount } = await supabase
        .from('ai_tools')
        .select('*', { count: 'exact', head: true });

      // Fetch recent jobs
      const { data: jobs, error: jobsError } = await supabase
        .from('admin_jobs')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);

      if (jobsError) throw jobsError;

      // Calculate job stats
      const recentJobsCount = jobs?.filter(job => {
        const createdAt = new Date(job.created_at);
        const dayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
        return createdAt > dayAgo;
      }).length || 0;

      const completedJobsCount = jobs?.filter(job => job.status === 'completed').length || 0;
      const failedJobsCount = jobs?.filter(job => job.status === 'failed').length || 0;

      setStats({
        totalTools: toolsCount || 0,
        recentJobs: recentJobsCount,
        completedJobs: completedJobsCount,
        failedJobs: failedJobsCount
      });

      setRecentJobs(jobs || []);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      toast({
        title: "Error",
        description: "Failed to load dashboard data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const runResearchAgent = async () => {
    setRunningResearch(true);
    try {
      // Create job record
      const { data: job, error: jobError } = await supabase
        .from('admin_jobs')
        .insert([{
          job_type: 'research_agent_manual',
          status: 'running',
          started_at: new Date().toISOString()
        }])
        .select()
        .single();

      if (jobError) throw jobError;

      // Call research agent
      const { data, error } = await supabase.functions.invoke('ai-research-agent', {
        body: { 
          category: 'all',
          jobId: job.id 
        }
      });

      if (error) throw error;

      // Update job status
      await supabase
        .from('admin_jobs')
        .update({
          status: 'completed',
          completed_at: new Date().toISOString(),
          result: data
        })
        .eq('id', job.id);

      toast({
        title: "Success",
        description: `Tool finder completed. Found ${data?.newTools || 0} new tools.`,
      });

      fetchDashboardData();
    } catch (error: any) {
      console.error('Error running research agent:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to run tool finder",
        variant: "destructive",
      });
    } finally {
      setRunningResearch(false);
    }
  };

  const syncAITools = async () => {
    setSyncing(true);
    try {
      // Create job record
      const { data: job, error: jobError } = await supabase
        .from('admin_jobs')
        .insert([{
          job_type: 'sync_ai_tools',
          status: 'running',
          started_at: new Date().toISOString()
        }])
        .select()
        .single();

      if (jobError) throw jobError;

      // Call the seed-database function for comprehensive sync
      const { data: syncResult, error: syncError } = await supabase.functions.invoke('seed-database');

      if (syncError) throw syncError;

      // Fetch updated tools data for verification
      const { data: toolsData, error: fetchError } = await supabase
        .from('ai_tools')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;

      // Update job status
      await supabase
        .from('admin_jobs')
        .update({
          status: 'completed',
          completed_at: new Date().toISOString(),
          result: { 
            syncedTools: toolsData?.length || 0,
            seedResult: syncResult 
          }
        })
        .eq('id', job.id);

      toast({
        title: "Success",
        description: `AI tools synced successfully. ${toolsData?.length || 0} tools in database.`,
      });

      fetchDashboardData();
    } catch (error: any) {
      console.error('Error syncing AI tools:', error);
      
      // Update job status to failed if we have the job ID
      try {
        await supabase
          .from('admin_jobs')
          .update({
            status: 'failed',
            completed_at: new Date().toISOString(),
            error_message: error.message
          })
          .eq('job_type', 'sync_ai_tools')
          .eq('status', 'running');
      } catch (updateError) {
        console.error('Failed to update job status:', updateError);
      }

      toast({
        title: "Error",
        description: error.message || "Failed to sync AI tools",
        variant: "destructive",
      });
    } finally {
      setSyncing(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'failed':
        return <XCircle className="h-4 w-4 text-red-500" />;
      case 'running':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-primary">
          <section className="pt-24 pb-20">
            <div className="container mx-auto px-6">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                  <div className="h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg animate-pulse mb-4"></div>
                  <div className="h-6 bg-gray-700 rounded-lg animate-pulse max-w-md mx-auto"></div>
                </div>
                
                {/* Skeleton Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {[...Array(4)].map((_, i) => (
                    <Card key={i} className="bg-primary/80 border-gray-700">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="h-4 bg-gray-700 rounded animate-pulse mb-2"></div>
                            <div className="h-8 bg-gray-600 rounded animate-pulse w-16"></div>
                          </div>
                          <div className="h-8 w-8 bg-gray-700 rounded animate-pulse"></div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {/* Skeleton Navigation Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {[...Array(4)].map((_, i) => (
                    <Card key={i} className="bg-primary/80 border-gray-700">
                      <CardHeader>
                        <div className="h-6 bg-gray-700 rounded animate-pulse"></div>
                      </CardHeader>
                      <CardContent>
                        <div className="h-4 bg-gray-700 rounded animate-pulse mb-4"></div>
                        <div className="h-10 bg-gray-600 rounded animate-pulse"></div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-blue-900">
        <section className="pt-24 pb-20">
          <div className="container mx-auto px-6 mt-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Admin Dashboard
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Manage your AI tools platform and monitor system status
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
                <Card className="bg-gradient-to-br from-primary/90 to-primary/70 border-gray-700/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-300 text-sm font-medium mb-1">Total AI Tools</p>
                        <p className="text-2xl md:text-3xl font-bold text-white group-hover:text-accent transition-colors">
                          {stats.totalTools}
                        </p>
                      </div>
                      <div className="bg-accent/10 p-3 rounded-full group-hover:bg-accent/20 transition-colors">
                        <Database className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/90 to-primary/70 border-gray-700/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-300 text-sm font-medium mb-1">Recent Jobs (24h)</p>
                        <p className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {stats.recentJobs}
                        </p>
                      </div>
                      <div className="bg-blue-500/10 p-3 rounded-full group-hover:bg-blue-500/20 transition-colors">
                        <BarChart3 className="h-6 w-6 md:h-8 md:w-8 text-blue-400" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/90 to-primary/70 border-gray-700/50 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-300 text-sm font-medium mb-1">Completed Jobs</p>
                        <p className="text-2xl md:text-3xl font-bold text-white group-hover:text-green-400 transition-colors">
                          {stats.completedJobs}
                        </p>
                      </div>
                      <div className="bg-green-500/10 p-3 rounded-full group-hover:bg-green-500/20 transition-colors">
                        <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-green-400" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/90 to-primary/70 border-gray-700/50 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-300 text-sm font-medium mb-1">Failed Jobs</p>
                        <p className="text-2xl md:text-3xl font-bold text-white group-hover:text-red-400 transition-colors">
                          {stats.failedJobs}
                        </p>
                        {stats.failedJobs > 0 && (
                          <p className="text-red-400 text-xs mt-1">Requires attention</p>
                        )}
                      </div>
                      <div className="bg-red-500/10 p-3 rounded-full group-hover:bg-red-500/20 transition-colors">
                        <XCircle className="h-6 w-6 md:h-8 md:w-8 text-red-400" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Admin Navigation */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mb-8">
                <Card className="bg-gradient-to-br from-primary/90 to-blue-900/50 border-gray-700/50 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 group cursor-pointer" 
                      onClick={() => navigate('/admin-tools')}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-white flex items-center gap-3 group-hover:text-accent transition-colors">
                      <div className="bg-accent/10 p-2 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <Database className="h-5 w-5 text-accent" />
                      </div>
                      <span className="text-lg">AI Tools Manager</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">Add, edit, sync, and manage AI tools with duplicate detection</p>
                    <Button 
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate('/admin-tools');
                      }}
                      className="w-full bg-secondary hover:bg-secondary/90 text-white font-medium"
                    >
                      Open Tools Manager
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/90 to-blue-900/50 border-gray-700/50 hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-400/20 transition-all duration-300 group cursor-pointer"
                      onClick={() => navigate('/admin-test')}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-white flex items-center gap-3 group-hover:text-blue-400 transition-colors">
                      <div className="bg-blue-500/10 p-2 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                        <Search className="h-5 w-5 text-blue-400" />
                      </div>
                      <span className="text-lg">Tool Finder Test</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">Test the autonomous AI tool finder functionality</p>
                    <Button 
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate('/admin-test');
                      }}
                      className="w-full bg-secondary hover:bg-secondary/90 text-white font-medium"
                    >
                      Open Test Interface
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/90 to-blue-900/50 border-gray-700/50 hover:border-green-400/30 hover:shadow-xl hover:shadow-green-400/20 transition-all duration-300 group">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-white flex items-center gap-3 group-hover:text-green-400 transition-colors">
                      <div className="bg-green-500/10 p-2 rounded-lg group-hover:bg-green-500/20 transition-colors">
                        <Play className="h-5 w-5 text-green-400" />
                      </div>
                      <span className="text-lg">Quick Tool Discovery</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">Run the AI tool finder to discover new tools</p>
                    <Button 
                      onClick={runResearchAgent}
                      disabled={runningResearch}
                      className="w-full bg-secondary hover:bg-secondary/90 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium relative"
                    >
                      {runningResearch ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                          Running...
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          Run Agent
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/90 to-blue-900/50 border-gray-700/50 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-400/20 transition-all duration-300 group">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-white flex items-center gap-3 group-hover:text-cyan-400 transition-colors">
                      <div className="bg-cyan-500/10 p-2 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                        <RefreshCw className="h-5 w-5 text-cyan-400" />
                      </div>
                      <span className="text-lg">Sync AI Tools</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">Force refresh frontend data from database</p>
                    <Button 
                      onClick={syncAITools}
                      disabled={syncing}
                      className="w-full bg-secondary hover:bg-secondary/90 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium relative"
                    >
                      {syncing ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                          Syncing...
                        </>
                      ) : (
                        <>
                          <RefreshCw className="h-4 w-4 mr-2" />
                          Sync Tools
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Jobs Activity */}
              <Card className="bg-gradient-to-br from-primary/90 to-blue-900/50 border-gray-700/50">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <div className="bg-blue-500/10 p-2 rounded-lg">
                      <Clock className="h-5 w-5 text-blue-400" />
                    </div>
                    Recent Job Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {recentJobs.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="bg-gray-700/30 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Clock className="h-8 w-8 text-gray-500" />
                      </div>
                      <p className="text-gray-400 text-lg mb-2">No recent jobs</p>
                      <p className="text-gray-500 text-sm">Job history will appear here once agents start running</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {recentJobs.slice(0, 5).map((job, index) => (
                        <div key={job.id} className={`flex items-center justify-between p-4 bg-gradient-to-r from-primary/60 to-primary/40 rounded-lg border border-gray-600/50 hover:shadow-lg transition-all duration-300 ${index === 0 ? 'ring-1 ring-accent/20' : ''}`}>
                          <div className="flex items-center gap-4">
                            <div className="flex-shrink-0">
                              {getStatusIcon(job.status)}
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-white font-medium capitalize truncate">
                                {job.job_type.replace(/_/g, ' ')}
                              </p>
                              <p className="text-gray-400 text-sm">
                                {new Date(job.created_at).toLocaleDateString()} at{' '}
                                {new Date(job.created_at).toLocaleTimeString([], { 
                                  hour: '2-digit', 
                                  minute: '2-digit' 
                                })}
                              </p>
                            </div>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium capitalize ${
                              job.status === 'completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                              job.status === 'failed' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                              job.status === 'running' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                              'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                            }`}>
                              {job.status}
                            </div>
                            {job.error_message && (
                              <p className="text-red-400 text-xs mt-1 max-w-40 truncate" title={job.error_message}>
                                {job.error_message}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                      {recentJobs.length > 5 && (
                        <div className="text-center pt-4">
                          <Button 
                            variant="outline" 
                            className="text-gray-400 border-gray-600 hover:bg-gray-700/50"
                          >
                            View All Jobs ({recentJobs.length})
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;