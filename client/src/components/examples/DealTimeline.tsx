import DealTimeline from '../DealTimeline';

export default function DealTimelineExample() {
  const mockPhases = [
    {
      id: "1",
      title: "Vorbereitungsphase",
      description: "Erste Bewertung und Dokumentenvorbereitung für den M&A-Prozess",
      status: "completed" as const,
      startDate: "01.12.2023",
      endDate: "15.12.2023",
      completionDate: "14.12.2023",
      progress: 100
    },
    {
      id: "2", 
      title: "Marketing & Buyer Outreach",
      description: "Identifikation und Ansprache potenzieller Käufer, Erstellung des Teaser",
      status: "completed" as const,
      startDate: "16.12.2023",
      endDate: "15.01.2024",
      completionDate: "12.01.2024",
      progress: 100
    },
    {
      id: "3",
      title: "Due Diligence",
      description: "Detaillierte Prüfung der Unternehmensunterlagen durch interessierte Käufer",
      status: "current" as const,
      startDate: "16.01.2024",
      endDate: "29.02.2024",
      progress: 68
    },
    {
      id: "4",
      title: "Verhandlung & LOI",
      description: "Verhandlung der Kaufbedingungen und Abschluss des Letter of Intent",
      status: "upcoming" as const,
      startDate: "01.03.2024",
      endDate: "31.03.2024",
      progress: 0
    },
    {
      id: "5",
      title: "Finale Verhandlung",
      description: "Abschluss der finalen Verhandlungen und Vertragsgestaltung",
      status: "upcoming" as const,
      startDate: "01.04.2024", 
      endDate: "30.04.2024",
      progress: 0
    },
    {
      id: "6",
      title: "Closing",
      description: "Finale Vertragsunterzeichnung und Eigentumsübertragung",
      status: "upcoming" as const,
      startDate: "01.05.2024",
      endDate: "15.05.2024", 
      progress: 0
    }
  ];

  return <DealTimeline phases={mockPhases} dealName="TechCorp Acquisition" />;
}