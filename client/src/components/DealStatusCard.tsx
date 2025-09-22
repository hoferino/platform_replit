import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { TrendingUp, Clock } from "lucide-react";

interface Milestone {
  id: string;
  name: string;
  progress: number;
  completed: boolean;
}

interface DealStatusCardProps {
  dealName: string;
  currentPhase: string;
  progress: number;
  milestones: Milestone[];
  nextSteps: string[];
  daysRemaining: number;
  value: string;
}

export default function DealStatusCard({
  dealName,
  currentPhase,
  progress,
  milestones,
  nextSteps,
  daysRemaining,
  value
}: DealStatusCardProps) {
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});
  const getPhaseColor = (phase: string) => {
    switch (phase.toLowerCase()) {
      case 'due diligence': return 'bg-chart-2';
      case 'negotiation': return 'bg-chart-4';
      case 'closing': return 'bg-chart-3';
      default: return 'bg-primary';
    }
  };

  const handleStepToggle = (stepIndex: number) => {
    console.log(`Toggling step: ${stepIndex}`);
    setCompletedSteps(prev => ({
      ...prev,
      [stepIndex]: !prev[stepIndex]
    }));
  };

  const incompleteMilestones = milestones?.filter(milestone => !milestone.completed) || [];

  return (
    <Card className="hover-elevate" data-testid="card-deal-status">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold" data-testid="text-deal-name">
            {dealName}
          </CardTitle>
          <Badge 
            className={`${getPhaseColor(currentPhase)} text-white`}
            data-testid="badge-current-phase"
          >
            {currentPhase}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Deal-Fortschritt</span>
            <span className="font-medium" data-testid="text-progress">{progress}%</span>
          </div>
          <div className="relative">
            <Progress 
              value={progress} 
              className="h-3" 
              data-testid="progress-deal"
            />
            {/* Milestone markers */}
            <div className="absolute top-0 left-0 w-full h-3 flex items-center">
              {milestones?.map((milestone, index) => (
                <div
                  key={milestone.id}
                  className={`absolute w-2 h-2 rounded-full border-2 border-background ${
                    milestone.completed ? 'bg-chart-3' : 'bg-muted-foreground'
                  }`}
                  style={{ left: `${milestone.progress}%`, transform: 'translateX(-50%)' }}
                  title={milestone.name}
                />
              ))}
            </div>
          </div>
          {/* Milestone legend */}
          <div className="flex flex-wrap gap-2 text-xs">
            {milestones?.map((milestone) => (
              <div key={milestone.id} className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${milestone.completed ? 'bg-chart-3' : 'bg-muted-foreground'}`} />
                <span className={milestone.completed ? 'text-chart-3' : 'text-muted-foreground'}>
                  {milestone.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              Zeit verbleibend
            </div>
            <div className="text-lg font-semibold" data-testid="text-days-remaining">
              {daysRemaining} Tage
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="h-4 w-4" />
              Deal-Wert
            </div>
            <div className="text-lg font-semibold" data-testid="text-deal-value">
              {value}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-medium text-sm text-muted-foreground">Ausstehende Meilensteine</h4>
          <div className="space-y-3">
            {incompleteMilestones.map((milestone, index) => (
              <div 
                key={milestone.id} 
                className="flex items-start gap-3"
                data-testid={`milestone-${milestone.id}`}
              >
                <Checkbox
                  checked={completedSteps[index] || false}
                  onCheckedChange={() => handleStepToggle(index)}
                  data-testid={`checkbox-milestone-${milestone.id}`}
                  className="mt-0.5"
                />
                <div className="flex-1 space-y-1">
                  <div className="text-sm font-medium">{milestone.name}</div>
                  <div className="text-xs text-muted-foreground">
                    Fortschritt: {milestone.progress}%
                  </div>
                </div>
              </div>
            ))}
            {incompleteMilestones.length === 0 && (
              <div className="text-sm text-muted-foreground italic">
                Alle Meilensteine erreicht
              </div>
            )}
          </div>
        </div>

        <Button className="w-full" data-testid="button-view-details">
          Deal-Details anzeigen
        </Button>
      </CardContent>
    </Card>
  );
}