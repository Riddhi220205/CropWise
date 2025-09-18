import { Home, Sprout, MessageCircle, Calendar, Bell } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Sprout, label: "Crops", path: "/crops" },
  { icon: Calendar, label: "Farm", path: "/farm" },
  { icon: MessageCircle, label: "AI Chat", path: "/chat" },
  { icon: Bell, label: "Alerts", path: "/alerts" },
];

export const MobileNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="flex justify-around items-center py-2">
        {navItems.map(({ icon: Icon, label, path }) => (
          <button
            key={path}
            onClick={() => navigate(path)}
            className={cn(
              "flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition-colors",
              location.pathname === path
                ? "text-primary bg-primary/10"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Icon className="h-5 w-5" />
            <span className="text-xs font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};