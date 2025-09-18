import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, AlertTriangle, CheckCircle, Info, X } from "lucide-react";
import { MobileLayout } from "@/components/layout/MobileLayout";
import { useState } from "react";

interface Alert {
  id: number;
  type: "critical" | "warning" | "info" | "success";
  title: string;
  message: string;
  timestamp: string;
  dismissed: boolean;
}

const initialAlerts: Alert[] = [
  {
    id: 1,
    type: "critical",
    title: "Watering Required",
    message: "Soil moisture in Field A has dropped below optimal levels. Immediate watering recommended.",
    timestamp: "2 hours ago",
    dismissed: false
  },
  {
    id: 2,
    type: "warning", 
    title: "Weather Alert",
    message: "Heavy rain expected in 24 hours. Consider harvesting mature crops.",
    timestamp: "4 hours ago",
    dismissed: false
  },
  {
    id: 3,
    type: "info",
    title: "Fertilizer Reminder",
    message: "Scheduled phosphorus application for Field B is due tomorrow.",
    timestamp: "1 day ago",
    dismissed: false
  },
  {
    id: 4,
    type: "success",
    title: "Optimal Conditions",
    message: "Soil conditions in Field C are perfect for corn planting.",
    timestamp: "2 days ago",
    dismissed: false
  },
  {
    id: 5,
    type: "warning",
    title: "Market Price Alert",
    message: "Tomato prices have increased by 15%. Good time to sell excess produce.",
    timestamp: "3 days ago",
    dismissed: false
  }
];

const Alerts = () => {
  const [alerts, setAlerts] = useState<Alert[]>(initialAlerts);

  const getAlertIcon = (type: Alert["type"]) => {
    switch (type) {
      case "critical":
        return <AlertTriangle className="h-5 w-5 text-destructive" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-warning" />;
      case "info":
        return <Info className="h-5 w-5 text-info" />;
      case "success":
        return <CheckCircle className="h-5 w-5 text-success" />;
    }
  };

  const getAlertBadge = (type: Alert["type"]) => {
    switch (type) {
      case "critical":
        return <Badge variant="destructive">Critical</Badge>;
      case "warning":
        return <Badge className="bg-warning text-warning-foreground">Warning</Badge>;
      case "info":
        return <Badge className="bg-info text-info-foreground">Info</Badge>;
      case "success":
        return <Badge className="bg-success text-success-foreground">Success</Badge>;
    }
  };

  const dismissAlert = (id: number) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === id ? { ...alert, dismissed: true } : alert
    ));
  };

  const activeAlerts = alerts.filter(alert => !alert.dismissed);
  const criticalCount = activeAlerts.filter(alert => alert.type === "critical").length;
  const warningCount = activeAlerts.filter(alert => alert.type === "warning").length;

  return (
    <MobileLayout>
      <div className="p-4 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Bell className="h-6 w-6 text-primary" />
            Farm Alerts
          </h1>
          <p className="text-muted-foreground">
            {activeAlerts.length} active alerts
          </p>
        </div>

        {/* Alert Summary */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="p-4 text-center">
            <div className="text-lg font-bold text-destructive">{criticalCount}</div>
            <div className="text-xs text-muted-foreground">Critical</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-lg font-bold text-warning">{warningCount}</div>
            <div className="text-xs text-muted-foreground">Warnings</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-lg font-bold text-success">
              {activeAlerts.filter(a => a.type === "success").length}
            </div>
            <div className="text-xs text-muted-foreground">Good News</div>
          </Card>
        </div>

        {/* Alerts List */}
        <div className="space-y-3">
          {activeAlerts.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">All caught up!</h3>
                <p className="text-muted-foreground">No active alerts at the moment.</p>
              </CardContent>
            </Card>
          ) : (
            activeAlerts.map((alert) => (
              <Card key={alert.id} className={`border-l-4 ${
                alert.type === "critical" ? "border-l-destructive" :
                alert.type === "warning" ? "border-l-warning" :
                alert.type === "info" ? "border-l-info" :
                "border-l-success"
              }`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getAlertIcon(alert.type)}
                      <CardTitle className="text-base">{alert.title}</CardTitle>
                    </div>
                    <div className="flex items-center gap-2">
                      {getAlertBadge(alert.type)}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => dismissAlert(alert.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    {alert.message}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {alert.timestamp}
                  </p>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Alert Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Push Notifications</span>
              <Button variant="outline" size="sm">Enabled</Button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Email Alerts</span>
              <Button variant="outline" size="sm">Disabled</Button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Critical Alerts Only</span>
              <Button variant="outline" size="sm">Configure</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MobileLayout>
  );
};

export default Alerts;