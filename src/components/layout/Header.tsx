import { Sun, Moon, Bell, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";

export function Header() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-30 bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="flex items-center justify-between px-4 py-3 lg:px-6">
        {/* Mobile Logo - No hamburger menu */}
        <Link to="/" className="lg:hidden flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">K</span>
          </div>
          <span className="font-display font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Kiranagram</span>
        </Link>

        {/* Spacer for desktop layout */}
        <div className="hidden lg:flex flex-1" />

        {/* Right Actions */}
        <div className="flex items-center gap-2 lg:gap-3">
          {/* Theme toggle - visible on all screens */}
          <button 
            onClick={toggleTheme}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-muted-foreground" />
            ) : (
              <Moon className="w-5 h-5 text-muted-foreground" />
            )}
          </button>
          
          {/* Notifications - visible on all screens */}
          <button className="relative p-2 hover:bg-muted rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
          </button>
          
          {/* Messages - LinkedIn style chat icon */}
          <Link to="/messages" className="relative p-2 hover:bg-muted rounded-lg transition-colors">
            <MessageSquare className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
          </Link>
        </div>
      </div>
    </header>
  );
}
