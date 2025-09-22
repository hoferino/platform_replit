import { useState } from "react";
import DealStatusCard from "./DealStatusCard";
import KPIDashboard from "./KPIDashboard"; 
import DocumentManager from "./DocumentManager";
import DealTimeline from "./DealTimeline";
import TodoList from "./TodoList";
import ThemeToggle from "./ThemeToggle";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel
} from "@/components/ui/sidebar";
import { 
  LayoutDashboard, 
  FileText, 
  TrendingUp, 
  History, 
  CheckSquare,
  Building2,
  User,
  Settings
} from "lucide-react";

const sidebarItems = [
  { title: "Dashboard", icon: LayoutDashboard, id: "dashboard" },
  { title: "KPI Metriken", icon: TrendingUp, id: "kpi" },
  { title: "Dokumente", icon: FileText, id: "documents" },
  { title: "Timeline", icon: History, id: "timeline" },
  { title: "To-Dos", icon: CheckSquare, id: "todos" },
];

export default function ClientDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");

  // Mock data - todo: remove mock functionality
  const mockDeal = {
    name: "TechCorp Acquisition",
    currentPhase: "Due Diligence",
    progress: 68,
    milestones: [
      { id: "1", name: "Vorbereitung", progress: 25, completed: true },
      { id: "2", name: "Marketing", progress: 50, completed: true },
      { id: "3", name: "Due Diligence", progress: 75, completed: false },
      { id: "4", name: "Verhandlung", progress: 90, completed: false },
      { id: "5", name: "Closing", progress: 100, completed: false }
    ],
    nextSteps: [
      "Finanzielle Unterlagen prüfen",
      "Rechtliche Due Diligence abschließen", 
      "Management Präsentation vorbereiten"
    ],
    daysRemaining: 45,
    value: "€12.5M"
  };

  const mockKPIMetrics = [
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

  const mockDocumentCategories = [
    {
      title: "Finanzielle Unterlagen",
      required: 6,
      completed: 4,
      documents: [
        { id: "1", name: "Jahresabschluss 2023", type: "pdf", status: "approved" as const, uploadedAt: "2024-01-15", size: "2.4 MB" },
        { id: "2", name: "Umsatzprognose 2024", type: "xlsx", status: "uploaded" as const, uploadedAt: "2024-01-12", size: "1.8 MB" },
        { id: "3", name: "Cashflow-Analyse", type: "pdf", status: "pending" as const },
        { id: "4", name: "Bilanzierungsrichtlinien", type: "docx", status: "pending" as const },
        { id: "5", name: "Steuerunterlagen", type: "pdf", status: "approved" as const, uploadedAt: "2024-01-10", size: "3.2 MB" },
        { id: "6", name: "Wirtschaftsprüferbericht", type: "pdf", status: "approved" as const, uploadedAt: "2024-01-08", size: "5.1 MB" }
      ]
    },
    {
      title: "Rechtliche Dokumente", 
      required: 4,
      completed: 2,
      documents: [
        { id: "7", name: "Gesellschaftsvertrag", type: "pdf", status: "approved" as const, uploadedAt: "2024-01-14", size: "1.2 MB" },
        { id: "8", name: "Handelsregisterauszug", type: "pdf", status: "uploaded" as const, uploadedAt: "2024-01-13", size: "0.8 MB" },
        { id: "9", name: "Patentdokumentation", type: "pdf", status: "pending" as const },
        { id: "10", name: "Compliance-Bericht", type: "docx", status: "pending" as const }
      ]
    }
  ];

  const mockTimelinePhases = [
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
    }
  ];

  const mockTodos = [
    {
      id: "1",
      title: "Finanzielle Due Diligence abschließen", 
      description: "Überprüfung der Jahresabschlüsse und Cashflow-Projektionen mit dem Wirtschaftsprüfer",
      priority: "high" as const,
      dueDate: "25.01.2024",
      assignee: "Max Müller",
      category: "Due Diligence",
      completed: false
    },
    {
      id: "2",
      title: "Management Präsentation vorbereiten",
      description: "Vorbereitung der Präsentation für das nächste Käufermeeting mit Fokus auf Synergien",
      priority: "high" as const,
      dueDate: "22.01.2024",
      assignee: "Anna Schmidt", 
      category: "Präsentation",
      completed: false
    },
    {
      id: "3",
      title: "Rechtliche Dokumente aktualisieren",
      description: "Update der Gesellschaftsverträge und Compliance-Dokumentation",
      priority: "medium" as const,
      dueDate: "30.01.2024", 
      assignee: "Dr. Weber",
      category: "Legal",
      completed: false
    }
  ];

  const renderMainContent = () => {
    switch (activeSection) {
      case "kpi":
        return (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold" data-testid="text-section-title">Live KPI-Metriken</h1>
            <KPIDashboard metrics={mockKPIMetrics} />
          </div>
        );
      case "documents":
        return (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold" data-testid="text-section-title">Dokumenten Management</h1>
            <DocumentManager categories={mockDocumentCategories} />
          </div>
        );
      case "timeline":
        return (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold" data-testid="text-section-title">Deal-Fortschritts-Zeitleiste</h1>
            <DealTimeline phases={mockTimelinePhases} dealName={mockDeal.name} />
          </div>
        );
      case "todos":
        return (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold" data-testid="text-section-title">Offene To-Dos</h1>
            <TodoList todos={mockTodos} />
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold" data-testid="text-section-title">M&A Dashboard</h1>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <DealStatusCard 
              dealName={mockDeal.name} 
              currentPhase={mockDeal.currentPhase} 
              progress={mockDeal.progress} 
              milestones={mockDeal.milestones}
              nextSteps={mockDeal.nextSteps} 
              daysRemaining={mockDeal.daysRemaining} 
              value={mockDeal.value} 
            />
              <TodoList todos={mockTodos} />
            </div>
            <KPIDashboard metrics={mockKPIMetrics} />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <DealTimeline phases={mockTimelinePhases} dealName={mockDeal.name} />
              <DocumentManager categories={mockDocumentCategories.slice(0, 1)} />
            </div>
          </div>
        );
    }
  };

  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "4rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <Sidebar data-testid="sidebar-main">
          <SidebarHeader className="border-b border-sidebar-border p-4">
            <div className="flex items-center gap-3">
              <Building2 className="h-6 w-6 text-sidebar-primary" />
              <div>
                <h2 className="font-semibold text-sidebar-foreground">M&A Workflow</h2>
                <p className="text-xs text-muted-foreground">Client Portal</p>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        onClick={() => {
                          setActiveSection(item.id);
                          console.log(`Navigated to: ${item.title}`);
                        }}
                        isActive={activeSection === item.id}
                        data-testid={`button-nav-${item.id}`}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Account</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton data-testid="button-nav-profile">
                      <User className="h-4 w-4" />
                      <span>Profil</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton data-testid="button-nav-settings">
                      <Settings className="h-4 w-4" />
                      <span>Einstellungen</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <div className="flex flex-col flex-1 overflow-hidden">
          <header className="flex items-center justify-between p-4 border-b border-border bg-background">
            <div className="flex items-center gap-4">
              <SidebarTrigger data-testid="button-sidebar-toggle" />
              <div>
                <h1 className="font-semibold">TechCorp Acquisition</h1>
                <p className="text-sm text-muted-foreground">Due Diligence Phase • 68% Complete</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-medium">Max Mustermann</p>
                <p className="text-xs text-muted-foreground">Client</p>
              </div>
              <ThemeToggle />
            </div>
          </header>

          <main className="flex-1 overflow-auto p-6" data-testid="main-content">
            {renderMainContent()}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}