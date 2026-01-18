import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Compass,
  Film,
  MessageCircle,
  ShoppingBag,
  Brain,
  Sparkles,
  User,
  Plus,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import avatar2 from "@/assets/avatar-2.jpg";

interface NavItem {
  icon: React.ElementType;
  label: string;
  path: string;
  badge?: number;
  isPro?: boolean;
  isHighlight?: boolean;
}

const navItems: NavItem[] = [
  { icon: Home, label: "Feed", path: "/", isHighlight: true },
  { icon: Compass, label: "Discover", path: "/explore" },
  { icon: Film, label: "Reels", path: "/reels" },
  { icon: MessageCircle, label: "Chat", path: "/chat", badge: 2 },
  { icon: ShoppingBag, label: "Market", path: "/market" },
];

const secondaryItems: NavItem[] = [
  { icon: Brain, label: "Neural Analytics", path: "/analytics", isHighlight: true },
  { icon: Sparkles, label: "AI Creator Page", path: "/creator", isPro: true },
  { icon: User, label: "Profile", path: "/profile" },
];

export function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 glass-card"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:sticky top-0 left-0 h-screen w-64 glass-card border-r border-border/30 z-50 transition-transform duration-300 flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Logo */}
        <div className="p-6 border-b border-border/30">
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-display font-bold gradient-text">
              KIRANAGRAM
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative",
                isActive(item.path)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              {isActive(item.path) && (
                <span className="absolute left-0 w-1 h-8 bg-primary rounded-r-full" />
              )}
              <item.icon className={cn(
                "w-5 h-5 transition-colors",
                item.isHighlight && isActive(item.path) && "text-primary"
              )} />
              <span className="font-medium">{item.label}</span>
              {item.badge && (
                <span className="ml-auto px-2 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}

          <div className="pt-4 pb-2">
            <span className="px-4 text-xs font-semibold text-primary/70 uppercase tracking-wider">
              Neural Analytics
            </span>
          </div>

          {secondaryItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative",
                isActive(item.path)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
                item.isPro && "bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/30"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
              {item.isPro && (
                <span className="badge-pro">PRO</span>
              )}
            </Link>
          ))}
        </nav>

        {/* Create Button */}
        <div className="p-4">
          <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]">
            <Plus className="w-5 h-5" />
            <span>Create New</span>
          </button>
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-border/30">
          <Link
            to="/profile"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-2 rounded-xl hover:bg-muted/50 transition-colors"
          >
            <div className="story-ring">
              <img
                src={avatar2}
                alt="User"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm truncate">Elara Vance</p>
              <p className="text-xs text-muted-foreground truncate">@elaravance</p>
            </div>
          </Link>
        </div>
      </aside>
    </>
  );
}
