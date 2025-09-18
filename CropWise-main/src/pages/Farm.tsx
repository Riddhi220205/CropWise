import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle, Clock, RotateCcw } from "lucide-react";
import { MobileLayout } from "@/components/layout/MobileLayout";

const farmTasks = [
  {
    id: 1,
    task: "Water tomato plants",
    priority: "High",
    dueDate: "Today",
    status: "pending",
    area: "Field A"
  },
  {
    id: 2,
    task: "Apply phosphorus fertilizer",
    priority: "Medium",    
    dueDate: "Tomorrow",
    status: "pending",
    area: "Field B"
  },
  {
    id: 3,
    task: "Harvest corn crop",
    priority: "High",
    dueDate: "3 days",
    status: "completed",
    area: "Field C"
  }
];

const cropRotationHistory = [
  { year: "2024", crop: "Tomatoes", yield: "Good", field: "Field A" },
  { year: "2023", crop: "Corn", yield: "Excellent", field: "Field A" },
  { year: "2022", crop: "Wheat", yield: "Average", field: "Field A" },
  { year: "2024", crop: "Peppers", yield: "Good", field: "Field B" },
  { year: "2023", crop: "Soybeans", yield: "Good", field: "Field B" }
];

const Farm = () => {
  return (
    <MobileLayout>
      <div className="p-4 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">Farm Management</h1>
          <p className="text-muted-foreground">Tasks and crop rotation history</p>
        </div>

        {/* Priority Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Priority Tasks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {farmTasks.map((task) => (
              <div
                key={task.id}
                className={`p-3 rounded-lg border ${
                  task.status === "completed" 
                    ? "bg-success/10 border-success/20" 
                    : "bg-card"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-start gap-2">
                    {task.status === "completed" ? (
                      <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    ) : (
                      <Clock className="h-4 w-4 text-warning mt-0.5" />
                    )}
                    <div>
                      <p className={`text-sm font-medium ${
                        task.status === "completed" ? "line-through text-muted-foreground" : ""
                      }`}>
                        {task.task}
                      </p>
                      <p className="text-xs text-muted-foreground">{task.area}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <Badge 
                      variant={task.priority === "High" ? "destructive" : "secondary"}
                      className="text-xs"
                    >
                      {task.priority}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{task.dueDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Field Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Field Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-3">
              <div className="p-3 bg-primary/5 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm">Field A</span>
                  <Badge variant="default">Active</Badge>
                </div>
                <p className="text-xs text-muted-foreground">Current: Tomatoes</p>
                <p className="text-xs text-muted-foreground">Size: 2.5 acres</p>
              </div>
              <div className="p-3 bg-warning/5 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm">Field B</span>
                  <Badge variant="outline">Preparation</Badge>
                </div>
                <p className="text-xs text-muted-foreground">Next: Corn</p>
                <p className="text-xs text-muted-foreground">Size: 3.0 acres</p>
              </div>
              <div className="p-3 bg-success/5 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm">Field C</span>
                  <Badge variant="secondary">Harvested</Badge>
                </div>
                <p className="text-xs text-muted-foreground">Previous: Corn</p>
                <p className="text-xs text-muted-foreground">Size: 2.0 acres</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Crop Rotation History */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RotateCcw className="h-5 w-5 text-primary" />
              Crop Rotation History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {cropRotationHistory.map((entry, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div>
                    <p className="text-sm font-medium">{entry.crop}</p>
                    <p className="text-xs text-muted-foreground">{entry.field} • {entry.year}</p>
                  </div>
                  <Badge 
                    variant={
                      entry.yield === "Excellent" ? "default" :
                      entry.yield === "Good" ? "secondary" : "outline"
                    }
                  >
                    {entry.yield}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MobileLayout>
  );
};

export default Farm;