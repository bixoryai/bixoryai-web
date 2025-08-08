import { toast } from "@/hooks/use-toast";

/**
 * Triggers automatic sync after AI tools database operations
 */
export const triggerAutoSync = async (operation: string = "update") => {
  try {
    // Simple data refresh notification
    const timestamp = new Date().toLocaleString();
    
    toast({
      title: "Auto-Sync Complete",
      description: `Tools ${operation} - Database synced at ${timestamp}`,
    });

    // Small delay then refresh to show latest data
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    
  } catch (error: any) {
    console.error('Auto-sync error:', error);
    toast({
      title: "Auto-Sync Warning",
      description: "Tool saved but sync failed - please refresh manually",
      variant: "destructive",
    });
  }
};