import { Search, Command, Sun, Moon, Bell, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import avatar2 from "@/assets/avatar-2.jpg";

export function Header() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-30 bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="flex items-center justify-between px-4 py-3 lg:px-6">
        {/* Mobile Logo */}
        <Link to="/" className="lg:hidden flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">K</span>
          </div>
          <span className="font-display font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Kiranagram</span>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-xl mx-4">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search creators, assets, or inspiration..."
              className="w-full pl-12 pr-16 py-3 bg-muted/50 border border-border rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground">
              <Command className="w-3 h-3" />
              <span>K</span>
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 lg:gap-3">
          <button className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors">
            <Search className="w-5 h-5 text-muted-foreground" />
          </button>
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
          <button className="relative p-2 hover:bg-muted rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
          </button>
          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
            <Settings className="w-5 h-5 text-muted-foreground" />
          </button>
          <Link to="/profile" className="hidden lg:block">
            <img
              src={avatar2}
              alt="Profile"
              className="w-9 h-9 rounded-full object-cover ring-2 ring-primary/50"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
