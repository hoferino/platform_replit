import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Plus, 
  Calendar, 
  User, 
  AlertCircle, 
  Clock,
  Filter
} from "lucide-react";

interface Todo {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
  assignee: string;
  category: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
}

export default function TodoList({ todos }: TodoListProps) {
  const [completedTodos, setCompletedTodos] = useState<Record<string, boolean>>({});
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');

  const handleToggleTodo = (todoId: string) => {
    console.log(`Toggling todo: ${todoId}`);
    setCompletedTodos(prev => ({
      ...prev,
      [todoId]: !prev[todoId]
    }));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-chart-5 text-white';
      case 'medium': return 'bg-chart-4 text-white';
      case 'low': return 'bg-chart-3 text-white';
      default: return 'bg-muted';
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case 'high': return 'Hoch';
      case 'medium': return 'Mittel';
      case 'low': return 'Niedrig';
      default: return priority;
    }
  };

  const isOverdue = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate.split('.').reverse().join('-'));
    return due < today;
  };

  const filteredTodos = todos.filter(todo => {
    const isCompleted = completedTodos[todo.id] || todo.completed;
    switch (filter) {
      case 'pending': return !isCompleted;
      case 'completed': return isCompleted;
      default: return true;
    }
  });

  const pendingCount = todos.filter(todo => !(completedTodos[todo.id] || todo.completed)).length;

  return (
    <Card className="hover-elevate" data-testid="card-todo-list">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CardTitle data-testid="text-todo-title">Offene To-Dos</CardTitle>
            <Badge variant="outline" data-testid="badge-pending-count">
              {pendingCount} offen
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
              data-testid="button-filter-all"
            >
              Alle
            </Button>
            <Button
              size="sm"
              variant={filter === 'pending' ? 'default' : 'outline'}
              onClick={() => setFilter('pending')}
              data-testid="button-filter-pending"
            >
              Offen
            </Button>
            <Button
              size="sm"
              variant={filter === 'completed' ? 'default' : 'outline'}
              onClick={() => setFilter('completed')}
              data-testid="button-filter-completed"
            >
              Erledigt
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button className="w-full" variant="outline" data-testid="button-add-todo">
          <Plus className="h-4 w-4 mr-2" />
          Neues To-Do hinzufügen
        </Button>

        <div className="space-y-3">
          {filteredTodos.map((todo, index) => {
            const isCompleted = completedTodos[todo.id] || todo.completed;
            const overdue = !isCompleted && isOverdue(todo.dueDate);

            return (
              <div 
                key={todo.id}
                className={`flex gap-3 p-3 border rounded-md hover-elevate ${isCompleted ? 'opacity-60' : ''}`}
                data-testid={`row-todo-${index}`}
              >
                <Checkbox
                  checked={isCompleted}
                  onCheckedChange={() => handleToggleTodo(todo.id)}
                  data-testid={`checkbox-todo-${todo.id}`}
                />

                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h4 
                      className={`font-medium text-sm ${isCompleted ? 'line-through' : ''}`}
                      data-testid={`text-todo-title-${index}`}
                    >
                      {todo.title}
                    </h4>
                    <div className="flex items-center gap-1">
                      {overdue && (
                        <AlertCircle className="h-3 w-3 text-chart-5" />
                      )}
                      <Badge 
                        className={getPriorityColor(todo.priority)}
                        data-testid={`badge-todo-priority-${index}`}
                      >
                        {getPriorityText(todo.priority)}
                      </Badge>
                    </div>
                  </div>

                  <p 
                    className={`text-xs text-muted-foreground ${isCompleted ? 'line-through' : ''}`}
                    data-testid={`text-todo-description-${index}`}
                  >
                    {todo.description}
                  </p>

                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        <span 
                          className={overdue ? 'text-chart-5 font-medium' : 'text-muted-foreground'}
                          data-testid={`text-todo-due-date-${index}`}
                        >
                          {todo.dueDate}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3 text-muted-foreground" />
                        <span className="text-muted-foreground" data-testid={`text-todo-assignee-${index}`}>
                          {todo.assignee}
                        </span>
                      </div>
                    </div>
                    <Badge 
                      variant="outline"
                      className="text-xs"
                      data-testid={`badge-todo-category-${index}`}
                    >
                      {todo.category}
                    </Badge>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredTodos.length === 0 && (
            <div 
              className="text-center py-8 text-muted-foreground"
              data-testid="text-no-todos"
            >
              <Clock className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>Keine To-Dos gefunden</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}