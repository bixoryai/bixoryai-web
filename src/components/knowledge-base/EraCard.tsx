import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface EraCardProps {
  period: string;
  title: string;
  icon: LucideIcon;
  iconGradient: string;
  children: ReactNode;
}

export const EraCard = ({ period, title, icon: Icon, iconGradient, children }: EraCardProps) => {
  return (
    <div className="bg-card-gradient/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${iconGradient} flex items-center justify-center border border-white/10`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
        <div>
          <span className="text-xs text-accent font-medium">{period}</span>
          <h2 className="text-xl md:text-2xl font-bold text-white">{title}</h2>
        </div>
      </div>
      {children}
    </div>
  );
};

interface MilestoneItemProps {
  color: string;
  title: string;
  description: string;
}

export const MilestoneItem = ({ color, title, description }: MilestoneItemProps) => {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
      <div className={`w-2 h-2 rounded-full ${color} mt-2 flex-shrink-0`}></div>
      <div>
        <span className="text-sm font-medium text-white">{title}</span>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
};

interface InsightBoxProps {
  title: string;
  description: string;
  gradient: string;
  titleColor: string;
}

export const InsightBox = ({ title, description, gradient, titleColor }: InsightBoxProps) => {
  return (
    <div className={`bg-gradient-to-br ${gradient} border border-opacity-20 rounded-xl p-4`}>
      <h4 className={`text-sm font-semibold ${titleColor} mb-2`}>{title}</h4>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
};