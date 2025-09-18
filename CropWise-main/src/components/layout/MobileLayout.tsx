import { ReactNode } from "react";
import { MobileNavigation } from "./MobileNavigation";

interface MobileLayoutProps {
  children: ReactNode;
}

export const MobileLayout = ({ children }: MobileLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 pb-20">
        {children}
      </main>
      <MobileNavigation />
    </div>
  );
};