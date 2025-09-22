import KPIDashboard from '../KPIDashboard';

export default function KPIDashboardExample() {
  const mockMetrics = [
    {
      title: "LOIs vs. Ziel",
      value: "8",
      target: "12",
      progress: 67,
      trend: "up" as const,
      change: "+25% diese Woche",
      icon: "target" as const
    },
    {
      title: "Käuferinteresse",
      value: "24",
      trend: "up" as const,
      change: "+12% seit letztem Monat",
      icon: "users" as const
    },
    {
      title: "Zeit bis Abschluss",
      value: "45 Tage",
      trend: "down" as const,
      change: "-3 Tage vs. Planung",
      icon: "clock" as const
    },
    {
      title: "Deal Health Score",
      value: "8.2",
      target: "10",
      progress: 82,
      trend: "up" as const,
      change: "+0.5 diese Woche",
      icon: "activity" as const
    }
  ];

  return <KPIDashboard metrics={mockMetrics} />;
}