import TodoList from '../TodoList';

export default function TodoListExample() {
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
    },
    {
      id: "4",
      title: "Käufer-Feedback verarbeiten",
      description: "Analyse und Beantwortung der Fragen aus der ersten Due Diligence Runde",
      priority: "medium" as const,
      dueDate: "28.01.2024", 
      assignee: "Max Müller",
      category: "Kommunikation",
      completed: false
    },
    {
      id: "5",
      title: "IT-Infrastruktur Dokumentation",
      description: "Zusammenstellung der IT-Systemdokumentation für technische Due Diligence",
      priority: "low" as const,
      dueDate: "05.02.2024",
      assignee: "Tech Team",
      category: "IT",
      completed: false
    },
    {
      id: "6",
      title: "Teaser Update erstellen",
      description: "Aktualisierung des Executive Summary mit neuesten Finanzzahlen",
      priority: "low" as const,
      dueDate: "15.01.2024",
      assignee: "Anna Schmidt", 
      category: "Marketing",
      completed: true
    }
  ];

  return <TodoList todos={mockTodos} />;
}