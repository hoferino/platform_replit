import DocumentManager from '../DocumentManager';

export default function DocumentManagerExample() {
  const mockCategories = [
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
    },
    {
      title: "Betriebsdokumente",
      required: 5,
      completed: 3,
      documents: [
        { id: "11", name: "Organisationsstruktur", type: "pdf", status: "approved" as const, uploadedAt: "2024-01-16", size: "1.5 MB" },
        { id: "12", name: "Mitarbeiterliste", type: "xlsx", status: "uploaded" as const, uploadedAt: "2024-01-11", size: "0.9 MB" },
        { id: "13", name: "Prozessdokumentation", type: "docx", status: "approved" as const, uploadedAt: "2024-01-09", size: "2.1 MB" },
        { id: "14", name: "IT-Infrastruktur", type: "pdf", status: "pending" as const },
        { id: "15", name: "Kundenverträge", type: "pdf", status: "pending" as const }
      ]
    },
    {
      title: "Due Diligence",
      required: 3,
      completed: 1,
      documents: [
        { id: "16", name: "Management Präsentation", type: "pptx", status: "uploaded" as const, uploadedAt: "2024-01-17", size: "4.2 MB" },
        { id: "17", name: "Risikobewertung", type: "pdf", status: "pending" as const },
        { id: "18", name: "Marktanalyse", type: "pdf", status: "pending" as const }
      ]
    }
  ];

  return <DocumentManager categories={mockCategories} />;
}