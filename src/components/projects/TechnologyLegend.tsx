
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Code, Database, Wrench } from "lucide-react";

const TechnologyLegend = () => {
  const legendItems = [
    {
      category: "AI Models",
      color: "bg-purple-100 text-purple-800",
      icon: <Cpu className="h-3 w-3" />,
      examples: ["GPT-4", "PyTorch", "TensorFlow"]
    },
    {
      category: "Frameworks",
      color: "bg-blue-100 text-blue-800",
      icon: <Wrench className="h-3 w-3" />,
      examples: ["React", "Next.js", "FastAPI"]
    },
    {
      category: "Languages",
      color: "bg-green-100 text-green-800",
      icon: <Code className="h-3 w-3" />,
      examples: ["Python", "TypeScript", "JavaScript"]
    },
    {
      category: "Databases",
      color: "bg-orange-100 text-orange-800",
      icon: <Database className="h-3 w-3" />,
      examples: ["MongoDB", "PostgreSQL", "Redis"]
    }
  ];

  return (
    <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-gray-700/50 backdrop-blur-sm mb-8">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-bold text-white flex items-center gap-2">
          <Code className="h-5 w-5 text-[#00F0FF]" />
          Technology Color Guide
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {legendItems.map((item) => (
            <div key={item.category} className="space-y-2">
              <div className="flex items-center gap-2">
                {item.icon}
                <span className="text-sm font-medium text-gray-300">{item.category}</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {item.examples.map((tech) => (
                  <Badge 
                    key={tech} 
                    className={`text-xs ${item.color} border border-gray-600/30`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TechnologyLegend;
