import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Clock, AlertTriangle } from "lucide-react";

interface TimelinePhase {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming' | 'delayed';
  startDate: string;
  endDate: string;
  completionDate?: string;
  progress: number;
}

interface DealTimelineProps {
  phases: TimelinePhase[];
  dealName: string;
}

export default function DealTimeline({ phases, dealName }: DealTimelineProps) {
  const getStatusIcon = (status: string, progress: number) => {
    switch (status) {
      case 'completed': 
        return <CheckCircle2 className="h-5 w-5 text-chart-3 fill-chart-3" />;
      case 'current': 
        return progress > 50 ? 
          <Circle className="h-5 w-5 text-chart-2 fill-chart-2/20" /> :
          <Clock className="h-5 w-5 text-chart-2" />;
      case 'delayed': 
        return <AlertTriangle className="h-5 w-5 text-chart-5" />;
      default: 
        return <Circle className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-chart-3';
      case 'current': return 'bg-chart-2';
      case 'delayed': return 'bg-chart-5';
      case 'upcoming': return 'bg-muted';
      default: return 'bg-muted';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Abgeschlossen';
      case 'current': return 'Aktuell';
      case 'delayed': return 'Verzögert';
      case 'upcoming': return 'Geplant';
      default: return 'Unbekannt';
    }
  };

  const getConnectorColor = (status: string, nextStatus?: string) => {
    if (status === 'completed') return 'bg-chart-3';
    if (status === 'current' && nextStatus) return 'bg-gradient-to-b from-chart-2 to-muted';
    return 'bg-muted';
  };

  return (
    <Card className="hover-elevate" data-testid="card-deal-timeline">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span data-testid="text-timeline-title">Deal-Fortschritts-Zeitleiste</span>
          <Badge variant="outline" data-testid="text-timeline-deal-name">{dealName}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {phases.map((phase, index) => {
            const isLast = index === phases.length - 1;
            const nextPhase = phases[index + 1];

            return (
              <div key={phase.id} className="relative">
                {/* Timeline connector */}
                {!isLast && (
                  <div 
                    className={`absolute left-6 top-12 w-0.5 h-16 ${getConnectorColor(phase.status, nextPhase?.status)}`}
                  />
                )}

                <div 
                  className="flex gap-4 pb-8"
                  data-testid={`timeline-phase-${index}`}
                >
                  {/* Status icon */}
                  <div className="flex-shrink-0 mt-1">
                    {getStatusIcon(phase.status, phase.progress)}
                  </div>

                  {/* Phase content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h3 className="font-medium" data-testid={`text-phase-title-${index}`}>
                        {phase.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <Badge 
                          className={`${getStatusColor(phase.status)} text-white text-xs`}
                          data-testid={`badge-phase-status-${index}`}
                        >
                          {getStatusText(phase.status)}
                        </Badge>
                        {phase.status === 'current' && (
                          <Badge variant="outline" data-testid={`badge-phase-progress-${index}`}>
                            {phase.progress}%
                          </Badge>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground" data-testid={`text-phase-description-${index}`}>
                      {phase.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div className="space-y-1">
                        <div className="text-muted-foreground">Geplanter Start</div>
                        <div className="font-medium" data-testid={`text-phase-start-${index}`}>
                          {phase.startDate}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-muted-foreground">
                          {phase.completionDate ? 'Abgeschlossen am' : 'Geplantes Ende'}
                        </div>
                        <div className="font-medium" data-testid={`text-phase-end-${index}`}>
                          {phase.completionDate || phase.endDate}
                        </div>
                      </div>
                    </div>

                    {/* Progress bar for current phase */}
                    {phase.status === 'current' && phase.progress > 0 && (
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-chart-2 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${phase.progress}%` }}
                          data-testid={`progress-phase-${index}`}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}