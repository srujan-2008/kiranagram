import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { RightSidebar } from "./RightSidebar";

interface MainLayoutProps {
  children: React.ReactNode;
  showRightSidebar?: boolean;
}

export function MainLayout({ children, showRightSidebar = true }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Cyber grid overlay */}
      <div className="fixed inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-30 pointer-events-none" />
      
      <div className="flex w-full relative">
        <Sidebar />
        
        <div className="flex-1 flex flex-col min-h-screen lg:ml-0">
          <Header />
          
          <div className="flex-1 flex gap-6 p-4 lg:p-6">
            <main className="flex-1 min-w-0 animate-fade-in">
              {children}
            </main>
            
            {showRightSidebar && <RightSidebar />}
          </div>
        </div>
      </div>
    </div>
  );
}
