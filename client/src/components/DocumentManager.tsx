import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Upload, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Clock,
  Download,
  Eye
} from "lucide-react";

interface Document {
  id: string;
  name: string;
  type: string;
  status: 'pending' | 'uploaded' | 'approved' | 'rejected';
  uploadedAt?: string;
  size?: string;
}

interface DocumentCategory {
  title: string;
  documents: Document[];
  required: number;
  completed: number;
}

interface DocumentManagerProps {
  categories: DocumentCategory[];
}

export default function DocumentManager({ categories }: DocumentManagerProps) {
  const [uploadingFiles, setUploadingFiles] = useState<Record<string, boolean>>({});

  const handleFileUpload = (docId: string) => {
    console.log(`Uploading file for document: ${docId}`);
    setUploadingFiles(prev => ({ ...prev, [docId]: true }));
    
    // Simulate upload
    setTimeout(() => {
      setUploadingFiles(prev => ({ ...prev, [docId]: false }));
    }, 2000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'uploaded': return <CheckCircle2 className="h-4 w-4 text-chart-3" />;
      case 'approved': return <CheckCircle2 className="h-4 w-4 text-chart-3" />;
      case 'rejected': return <AlertCircle className="h-4 w-4 text-chart-5" />;
      case 'pending': return <Clock className="h-4 w-4 text-chart-4" />;
      default: return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'uploaded': return 'bg-chart-3';
      case 'approved': return 'bg-chart-3';
      case 'rejected': return 'bg-chart-5';
      case 'pending': return 'bg-chart-4';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold" data-testid="text-document-title">
          Dokumenten Management
        </h2>
        <Button variant="outline" data-testid="button-upload-all">
          <Upload className="h-4 w-4 mr-2" />
          Alle hochladen
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Document Categories - Left Side */}
        <div className="lg:col-span-2 space-y-6">
          {categories.map((category, categoryIndex) => {
            const completionPercentage = Math.round((category.completed / category.required) * 100);

            return (
              <Card key={categoryIndex} className="hover-elevate" data-testid={`card-document-category-${categoryIndex}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{category.title}</CardTitle>
                    <Badge variant="outline" data-testid={`badge-document-progress-${categoryIndex}`}>
                      {category.completed}/{category.required}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <Progress 
                      value={completionPercentage} 
                      className="h-2" 
                      data-testid={`progress-document-category-${categoryIndex}`}
                    />
                    <div className="text-xs text-muted-foreground">
                      {completionPercentage}% abgeschlossen
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {category.documents.map((doc, docIndex) => (
                    <div 
                      key={doc.id} 
                      className="flex items-center justify-between p-3 border rounded-md hover-elevate"
                      data-testid={`row-document-${categoryIndex}-${docIndex}`}
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium truncate" data-testid={`text-document-name-${doc.id}`}>
                            {doc.name}
                          </div>
                          {doc.size && (
                            <div className="text-xs text-muted-foreground">
                              {doc.size}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {doc.status === 'pending' ? (
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleFileUpload(doc.id)}
                            disabled={uploadingFiles[doc.id]}
                            data-testid={`button-upload-${doc.id}`}
                          >
                            {uploadingFiles[doc.id] ? (
                              <div className="flex items-center gap-1">
                                <div className="animate-spin h-3 w-3 border border-current border-t-transparent rounded-full" />
                                <span>...</span>
                              </div>
                            ) : (
                              <>
                                <Upload className="h-3 w-3 mr-1" />
                                Upload
                              </>
                            )}
                          </Button>
                        ) : (
                          <div className="flex gap-1">
                            <Button 
                              size="sm" 
                              variant="ghost"
                              data-testid={`button-view-${doc.id}`}
                            >
                              <Eye className="h-3 w-3" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="ghost"
                              data-testid={`button-download-${doc.id}`}
                            >
                              <Download className="h-3 w-3" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Document Status Checklist - Right Side */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4" data-testid="card-document-checklist">
            <CardHeader>
              <CardTitle className="text-base">Dokumentenstatus</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {categories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-muted-foreground">{category.title}</h4>
                    <span className="text-xs text-muted-foreground">
                      {category.completed}/{category.required}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {category.documents.map((doc, docIndex) => (
                      <div 
                        key={doc.id}
                        className="flex items-center gap-3 text-sm"
                        data-testid={`checklist-document-${doc.id}`}
                      >
                        {getStatusIcon(doc.status)}
                        <span className={`flex-1 truncate ${doc.status === 'approved' ? 'text-chart-3' : doc.status === 'rejected' ? 'text-chart-5' : ''}`}>
                          {doc.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  {categoryIndex < categories.length - 1 && <div className="border-t pt-2" />}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}