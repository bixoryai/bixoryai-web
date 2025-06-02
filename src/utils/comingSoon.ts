
import { toast } from "@/hooks/use-toast";

export const showComingSoonToast = (featureName?: string) => {
  toast({
    title: "Coming Soon! 🚀",
    description: featureName 
      ? `${featureName} is currently under development. Stay tuned for updates!`
      : "This feature is currently under development. Stay tuned for updates!",
    duration: 3000,
  });
};
