import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Droplets, Thermometer, Leaf, TrendingUp } from "lucide-react";
import { MobileLayout } from "@/components/layout/MobileLayout";

const soilData = {
  ph: { value: 6.8, status: "Good", color: "text-primary" },
  moisture: { value: 65, status: "Optimal", color: "text-primary" },
  nitrogen: { value: 78, status: "High", color: "text-primary" },
  phosphorus: { value: 45, status: "Medium", color: "text-warning" },
  potassium: { value: 82, status: "High", color: "text-primary" }
};

const Home = () => {
  return (
    <MobileLayout>
      <div className="p-4 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-foreground">CropWise</h1>
          <p className="text-muted-foreground">Smart Farming Dashboard</p>
        </div>

        {/* Soil Health Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" />
              Soil Health Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">pH Level</span>
                  <span className={`text-sm font-medium ${soilData.ph.color}`}>
                    {soilData.ph.value}
                  </span>
                </div>
                <Progress value={((soilData.ph.value - 6) / 2) * 100} className="h-2" />
                <p className="text-xs text-muted-foreground">{soilData.ph.status}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm flex items-center gap-1">
                    <Droplets className="h-3 w-3" />
                    Moisture
                  </span>
                  <span className={`text-sm font-medium ${soilData.moisture.color}`}>
                    {soilData.moisture.value}%
                  </span>
                </div>
                <Progress value={soilData.moisture.value} className="h-2" />
                <p className="text-xs text-muted-foreground">{soilData.moisture.status}</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium">NPK Levels</h4>
              <div className="space-y-3">
                {[
                  { name: "Nitrogen (N)", value: soilData.nitrogen.value, status: soilData.nitrogen.status, color: soilData.nitrogen.color },
                  { name: "Phosphorus (P)", value: soilData.phosphorus.value, status: soilData.phosphorus.status, color: soilData.phosphorus.color },
                  { name: "Potassium (K)", value: soilData.potassium.value, status: soilData.potassium.status, color: soilData.potassium.color }
                ].map((nutrient) => (
                  <div key={nutrient.name} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{nutrient.name}</span>
                      <span className={`text-sm font-medium ${nutrient.color}`}>
                        {nutrient.value}%
                      </span>
                    </div>
                    <Progress value={nutrient.value} className="h-2" />
                    <p className="text-xs text-muted-foreground">{nutrient.status}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <Thermometer className="h-8 w-8 text-info mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Temperature</p>
              <p className="text-lg font-bold">24°C</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 text-success mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Growth Rate</p>
              <p className="text-lg font-bold">+12%</p>
            </CardContent>
          </Card>
        </div>

        {/* Today's Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-primary/10 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium">Optimal Planting Conditions</p>
                  <p className="text-xs text-muted-foreground">Soil conditions are ideal for tomato planting</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-warning/10 rounded-lg">
                <div className="w-2 h-2 bg-warning rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium">Phosphorus Supplement</p>
                  <p className="text-xs text-muted-foreground">Consider adding phosphorus fertilizer</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MobileLayout>
  );
};

export default Home;