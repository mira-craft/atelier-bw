import { ReactNode } from "react";
import MusealNav from "./MusealNav";

interface MusealLayoutProps {
  children: ReactNode;
  fullscreen?: boolean;
}

const MusealLayout = ({ children, fullscreen = false }: MusealLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <MusealNav />
      <main className={fullscreen ? "" : "ml-nav"}>
        {children}
      </main>
    </div>
  );
};

export default MusealLayout;
