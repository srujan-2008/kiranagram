import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Search, Filter, Grid, List, Sparkles, TrendingUp, Clock, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import cyberGirl from "@/assets/cyber-girl.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import heroBanner from "@/assets/hero-banner.jpg";

const categories = [
  { id: "all", label: "All", icon: Sparkles },
  { id: "trending", label: "Trending", icon: TrendingUp },
  { id: "recent", label: "Recent", icon: Clock },
  { id: "top", label: "Top Rated", icon: Star },
];

const exploreItems = [
  { id: 1, image: cyberGirl, title: "Cyber Portrait", creator: "NeonDreamer", likes: 2.4, views: 12.5 },
  { id: 2, image: avatar1, title: "Neon Dreams", creator: "SynthArt", likes: 1.8, views: 8.2 },
  { id: 3, image: avatar2, title: "Digital Muse", creator: "PixelMist", likes: 3.2, views: 15.1 },
  { id: 4, image: avatar3, title: "AI Entity", creator: "CodexAI", likes: 1.5, views: 6.8 },
  { id: 5, image: heroBanner, title: "Neon City", creator: "CyberScape", likes: 4.1, views: 22.3 },
  { id: 6, image: cyberGirl, title: "Future Self", creator: "SynthWave", likes: 2.8, views: 11.7 },
];

const Explore = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <MainLayout showRightSidebar={false}>
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-display font-bold mb-1">Explore</h1>
            <p className="text-muted-foreground">Discover AI-generated art from creators worldwide</p>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search artwork..."
              className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border/50 rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground glow-primary"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>

          {/* View Mode & Filter */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={cn(
                "p-2 rounded-lg transition-colors",
                viewMode === "grid" ? "bg-primary/20 text-primary" : "text-muted-foreground hover:bg-muted"
              )}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={cn(
                "p-2 rounded-lg transition-colors",
                viewMode === "list" ? "bg-primary/20 text-primary" : "text-muted-foreground hover:bg-muted"
              )}
            >
              <List className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 glass-card hover:bg-muted/50 transition-all rounded-xl">
              <Filter className="w-4 h-4" />
              <span className="text-sm">Filters</span>
            </button>
          </div>
        </div>

        {/* Grid */}
        <div
          className={cn(
            "grid gap-4",
            viewMode === "grid"
              ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
              : "grid-cols-1"
          )}
        >
          {exploreItems.map((item, index) => (
            <div
              key={item.id}
              className="group glass-card overflow-hidden animate-scale-in cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="font-semibold text-sm truncate">{item.title}</p>
                  <p className="text-xs text-muted-foreground">by {item.creator}</p>
                </div>
              </div>
              <div className="p-3 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{item.likes}k likes</span>
                <span className="text-xs text-muted-foreground">{item.views}k views</span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center py-8">
          <button className="px-8 py-3 glass-card hover:bg-muted/50 transition-all rounded-xl font-medium">
            Load More
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Explore;
