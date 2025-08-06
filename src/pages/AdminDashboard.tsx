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
  AlertCircle
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
        description: `Research agent completed. Found ${data?.newTools || 0} new tools.`,
      });

      fetchDashboardData();
    } catch (error: any) {
      console.error('Error running research agent:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to run research agent",
        variant: "destructive",
      });
    } finally {
      setRunningResearch(false);
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
        <div className="min-h-screen bg-primary flex items-center justify-center">
          <div className="text-white text-xl">Loading dashboard...</div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-primary">
        <section className="pt-24 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse">
                    BIXORY AI
                  </span>{" "}
                  Admin Dashboard
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Manage your AI tools platform and monitor system status
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="bg-primary/80 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-300 text-sm">Total AI Tools</p>
                        <p className="text-3xl font-bold text-white">{stats.totalTools}</p>
                      </div>
                      <Database className="h-8 w-8 text-accent" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary/80 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-300 text-sm">Recent Jobs (24h)</p>
                        <p className="text-3xl font-bold text-white">{stats.recentJobs}</p>
                      </div>
                      <BarChart3 className="h-8 w-8 text-accent" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary/80 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-300 text-sm">Completed Jobs</p>
                        <p className="text-3xl font-bold text-white">{stats.completedJobs}</p>
                      </div>
                      <CheckCircle className="h-8 w-8 text-green-500" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary/80 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-300 text-sm">Failed Jobs</p>
                        <p className="text-3xl font-bold text-white">{stats.failedJobs}</p>
                      </div>
                      <XCircle className="h-8 w-8 text-red-500" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <Card className="bg-primary/80 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Database className="h-5 w-5" />
                      Manage AI Tools
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">Add, edit, and categorize AI tools in the database</p>
                    <Button 
                      onClick={() => navigate('/admin-tools')}
                      className="w-full bg-secondary hover:bg-secondary/90"
                    >
                      Open Tools Manager
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-primary/80 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Search className="h-5 w-5" />
                      Research Agent
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">Run the AI research agent to discover new tools</p>
                    <Button 
                      onClick={runResearchAgent}
                      disabled={runningResearch}
                      className="w-full bg-secondary hover:bg-secondary/90"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      {runningResearch ? 'Running...' : 'Run Research Agent'}
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-primary/80 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      User Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">Manage user accounts and permissions</p>
                    <Button 
                      disabled
                      className="w-full bg-gray-600 hover:bg-gray-600 cursor-not-allowed"
                    >
                      Coming Soon
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Jobs */}
              <Card className="bg-primary/80 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Recent Jobs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {recentJobs.length === 0 ? (
                    <p className="text-gray-300 text-center py-8">No recent jobs</p>
                  ) : (
                    <div className="space-y-4">
                      {recentJobs.map((job) => (
                        <div key={job.id} className="flex items-center justify-between p-4 bg-primary/60 rounded-lg border border-gray-600">
                          <div className="flex items-center gap-3">
                            {getStatusIcon(job.status)}
                            <div>
                              <p className="text-white font-medium">{job.job_type.replace(/_/g, ' ')}</p>
                              <p className="text-gray-400 text-sm">
                                {new Date(job.created_at).toLocaleString()}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-white capitalize">{job.status}</p>
                            {job.error_message && (
                              <p className="text-red-400 text-xs">{job.error_message}</p>
                            )}
                          </div>
                        </div>
                      ))}
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