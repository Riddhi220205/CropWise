import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Droplets, DollarSign, Leaf, TrendingUp } from "lucide-react";
import { MobileLayout } from "@/components/layout/MobileLayout";

const cropRecommendations = [
  {
    name: "Tomatoes",
    suitability: 92,
    yield: "8-12 tons/acre",
    waterNeed: "Medium",
    marketDemand: "High",
    sustainability: 85,
    season: "Summer"
  },
  {
    name: "Corn",
    suitability: 88,
    yield: "6-9 tons/acre", 
    waterNeed: "High",
    marketDemand: "Medium",
    sustainability: 78,
    season: "Spring"
  },
  {
    name: "Wheat",
    suitability: 75,
    yield: "4-6 tons/acre",
    waterNeed: "Low",
    marketDemand: "High",
    sustainability: 90,
    season: "Winter"
  }
];

const Crops = () => {
  return (
    <MobileLayout>
      <div className="p-4 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">Crop Recommendations</h1>
          <p className="text-muted-foreground">AI-powered suggestions for your farm</p>
        </div>

        {/* Crop Cards */}
        <div className="space-y-4">
          {cropRecommendations.map((crop, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{crop.name}</CardTitle>
                  <Badge variant={crop.suitability > 85 ? "default" : "secondary"}>
                    {crop.suitability}% Match
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Suitability Bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Suitability</span>
                    <span className="text-sm font-medium">{crop.suitability}%</span>
                  </div>
                  <Progress value={crop.suitability} className="h-2" />
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4 text-success" />
                      <span className="text-sm text-muted-foreground">Projected Yield</span>
                    </div>
                    <p className="text-sm font-medium">{crop.yield}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1">
                      <Droplets className="h-4 w-4 text-info" />
                      <span className="text-sm text-muted-foreground">Water Needs</span>
                    </div>
                    <p className="text-sm font-medium">{crop.waterNeed}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-warning" />
                      <span className="text-sm text-muted-foreground">Market Demand</span>
                    </div>
                    <p className="text-sm font-medium">{crop.marketDemand}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1">
                      <Leaf className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Sustainability</span>
                    </div>
                    <p className="text-sm font-medium">{crop.sustainability}%</p>
                  </div>
                </div>

                {/* Season Badge */}
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="text-sm text-muted-foreground">Best Season</span>
                  <Badge variant="outline">{crop.season}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Current Season Info */}
        <Card className="bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg">Current Season Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Based on current weather patterns and soil conditions, summer crops show the highest success rate.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-sm font-medium">Summer season is optimal</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </MobileLayout>
  );
};

export default Crops;