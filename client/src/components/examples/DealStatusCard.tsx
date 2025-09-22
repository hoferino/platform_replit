import DealStatusCard from '../DealStatusCard';

export default function DealStatusCardExample() {
  const mockMilestones = [
    { id: "1", name: "Vorbereitung", progress: 25, completed: true },
    { id: "2", name: "Marketing", progress: 50, completed: true },
    { id: "3", name: "Due Diligence", progress: 75, completed: false },
    { id: "4", name: "Verhandlung", progress: 90, completed: false },
    { id: "5", name: "Closing", progress: 100, completed: false }
  ];

  return (
    <DealStatusCard
      dealName="TechCorp Acquisition"
      currentPhase="Due Diligence"
      progress={68}
      milestones={mockMilestones}
      nextSteps={[
        "Finanzielle Unterlagen prüfen",
        "Rechtliche Due Diligence abschließen",
        "Management Präsentation vorbereiten"
      ]}
      daysRemaining={45}
      value="€12.5M"
    />
  );
}