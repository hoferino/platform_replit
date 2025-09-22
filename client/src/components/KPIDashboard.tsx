import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Target, Users, Clock, Activity } from "lucide-react";

interface KPIMetric {
  title: string;
  value: string;
  target?: string;
  progress?: number;
  trend: 'up' | 'down' | 'neutral';
  change: string;
  icon: 'target' | 'users' | 'clock' | 'activity';
}

interface KPIDashboardProps {
  metrics: KPIMetric[];
}

export default function KPIDashboard({ metrics }: KPIDashboardProps) {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'target': return Target;
      case 'users': return Users;
      case 'clock': return Clock;
      case 'activity': return Activity;
      default: return Activity;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-chart-3';
      case 'down': return 'text-chart-5';
      default: return 'text-muted-foreground';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return TrendingUp;
      case 'down': return TrendingDown;
      default: return TrendingUp;
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold" data-testid="text-kpi-title">Live KPI-Metriken</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const IconComponent = getIcon(metric.icon);
          const TrendIcon = getTrendIcon(metric.trend);
          
          return (
            <Card key={index} className="hover-elevate" data-testid={`card-kpi-${index}`}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <IconComponent className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-baseline gap-2">
                    <div className="text-2xl font-bold" data-testid={`text-kpi-value-${index}`}>
                      {metric.value}
                    </div>
                    {metric.target && (
                      <div className="text-sm text-muted-foreground">
                        / {metric.target}
                      </div>
                    )}
                  </div>

                  {metric.progress !== undefined && (
                    <div className="space-y-1">
                      <Progress 
                        value={metric.progress} 
                        className="h-1" 
                        data-testid={`progress-kpi-${index}`}
                      />
                      <div className="text-xs text-muted-foreground">
                        {metric.progress}% vom Ziel erreicht
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <TrendIcon className={`h-3 w-3 ${getTrendColor(metric.trend)}`} />
                    <span className={`text-xs ${getTrendColor(metric.trend)}`} data-testid={`text-kpi-change-${index}`}>
                      {metric.change}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}