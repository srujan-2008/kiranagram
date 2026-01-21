import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { 
  Search, 
  Sparkles, 
  Flame, 
  Zap, 
  Palette, 
  Wand2, 
  Camera,
  Shuffle,
  ChevronRight,
  Heart,
  Eye,
  Crown
} from "lucide-react";
import { cn } from "@/lib/utils";
import cyberGirl from "@/assets/cyber-girl.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import heroBanner from "@/assets/hero-banner.jpg";

const styleCategories = [
  { id: "all", label: "For You", icon: Sparkles, gradient: "from-primary to-secondary" },
  { id: "trending", label: "Hot Now", icon: Flame, gradient: "from-orange-500 to-red-500" },
  { id: "neon", label: "Neon Glow", icon: Zap, gradient: "from-cyan-400 to-blue-500" },
  { id: "artistic", label: "Artistic", icon: Palette, gradient: "from-purple-500 to-pink-500" },
  { id: "fantasy", label: "Fantasy", icon: Wand2, gradient: "from-emerald-400 to-teal-500" },
  { id: "portrait", label: "Portraits", icon: Camera, gradient: "from-amber-400 to-orange-500" },
];

const spotlightArt = {
  image: cyberGirl,
  title: "Ethereal Dreams",
  creator: "NeonMaster",
  creatorAvatar: avatar1,
  views: "24.5K",
  likes: "8.2K",
  style: "Cyberpunk Noir",
};

const featuredStyles = [
  { id: 1, name: "Neon Cyberpunk", image: cyberGirl, uses: "12.4K", color: "from-cyan-500/20 to-purple-500/20" },
  { id: 2, name: "Soft Dreamy", image: avatar2, uses: "8.9K", color: "from-pink-500/20 to-rose-500/20" },
  { id: 3, name: "Dark Fantasy", image: heroBanner, uses: "15.2K", color: "from-emerald-500/20 to-teal-500/20" },
];

const discoveryGrid = [
  { id: 1, image: cyberGirl, creator: "NeonDreamer", style: "Cyber Noir", likes: 2400, size: "large" },
  { id: 2, image: avatar1, creator: "SynthArt", style: "Neon Portrait", likes: 1800, size: "small" },
  { id: 3, image: avatar2, creator: "PixelMist", style: "Soft Glow", likes: 3200, size: "small" },
  { id: 4, image: heroBanner, creator: "CyberScape", style: "Future City", likes: 4100, size: "medium" },
  { id: 5, image: avatar3, creator: "CodexAI", style: "Digital Soul", likes: 1500, size: "small" },
  { id: 6, image: cyberGirl, creator: "SynthWave", style: "Retro Future", likes: 2800, size: "medium" },
  { id: 7, image: avatar1, creator: "GlowArtist", style: "Neon Dreams", likes: 890, size: "small" },
  { id: 8, image: avatar2, creator: "DigitalMuse", style: "Ethereal", likes: 5600, size: "small" },
];

const topCreators = [
  { id: 1, name: "NeonMaster", avatar: avatar1, followers: "45.2K", artworks: 234 },
  { id: 2, name: "CyberQueen", avatar: avatar2, followers: "38.9K", artworks: 189 },
  { id: 3, name: "PixelWizard", avatar: avatar3, followers: "32.1K", artworks: 156 },
];

const Explore = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isShuffling, setIsShuffling] = useState(false);

  const handleShuffle = () => {
    setIsShuffling(true);
    setTimeout(() => setIsShuffling(false), 500);
  };

  const formatCount = (count: number) => {
    if (count >= 1000) {
      return (count / 1000).toFixed(1).replace('.0', '') + 'K';
    }
    return count.toString();
  };

  return (
    <MainLayout showRightSidebar={false}>
      <div className="max-w-6xl mx-auto pb-20 md:pb-8 px-3 md:px-4 overflow-x-hidden">
        
        {/* Search & Shuffle - Static header area */}
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 md:w-5 h-4 md:h-5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Discover AI styles, creators..."
              className="w-full pl-10 md:pl-12 pr-4 py-2.5 md:py-3 bg-card border border-border rounded-xl md:rounded-2xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
            />
          </div>
          <button 
            onClick={handleShuffle}
            className={cn(
              "p-2.5 md:p-3 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary to-secondary text-primary-foreground transition-all hover:scale-105 active:scale-95 flex-shrink-0",
              isShuffling && "animate-spin"
            )}
          >
            <Shuffle className="w-4 md:w-5 h-4 md:h-5" />
          </button>
        </div>

        {/* Style Categories - Horizontal Scroll */}
        <div className="flex gap-2 overflow-x-auto pb-3 md:pb-4 scrollbar-hide -mx-3 px-3 mb-4 md:mb-6">
          {styleCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-xl md:rounded-2xl text-xs md:text-sm font-medium transition-all whitespace-nowrap flex-shrink-0",
                activeCategory === cat.id
                  ? `bg-gradient-to-r ${cat.gradient} text-white shadow-lg`
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              )}
            >
              <cat.icon className="w-3.5 md:w-4 h-3.5 md:h-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Spotlight Section */}
        <div className="relative mb-6 md:mb-8 rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer">
          <div className="aspect-[16/9] md:aspect-[3/1]">
            <img 
              src={spotlightArt.image} 
              alt={spotlightArt.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          {/* Spotlight Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
          
          {/* Spotlight Badge */}
          <div className="absolute top-3 left-3 md:top-4 md:left-4 flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-primary/90 text-primary-foreground text-[10px] md:text-xs font-semibold backdrop-blur-sm">
            <Crown className="w-3 md:w-3.5 h-3 md:h-3.5" />
            Today's Spotlight
          </div>
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
            <div className="flex items-end justify-between gap-3 md:gap-4">
              <div className="flex-1 min-w-0">
                <p className="text-[10px] md:text-xs text-primary font-medium mb-0.5 md:mb-1">{spotlightArt.style}</p>
                <h2 className="text-base md:text-2xl font-display font-bold mb-1.5 md:mb-2 truncate">{spotlightArt.title}</h2>
                <div className="flex items-center gap-2 md:gap-3">
                  <img 
                    src={spotlightArt.creatorAvatar} 
                    alt={spotlightArt.creator}
                    className="w-6 md:w-8 h-6 md:h-8 rounded-full border-2 border-primary"
                  />
                  <span className="text-xs md:text-sm font-medium">{spotlightArt.creator}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm">
                <div className="flex items-center gap-1 md:gap-1.5 text-muted-foreground">
                  <Eye className="w-3.5 md:w-4 h-3.5 md:h-4" />
                  <span className="text-[10px] md:text-sm">{spotlightArt.views}</span>
                </div>
                <div className="flex items-center gap-1 md:gap-1.5 text-muted-foreground">
                  <Heart className="w-3.5 md:w-4 h-3.5 md:h-4" />
                  <span className="text-[10px] md:text-sm">{spotlightArt.likes}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Styles */}
        <div className="mb-6 md:mb-8">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <h3 className="text-base md:text-lg font-display font-semibold">Trending Styles</h3>
            <button className="flex items-center gap-1 text-xs md:text-sm text-primary hover:underline">
              See all <ChevronRight className="w-3.5 md:w-4 h-3.5 md:h-4" />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2 md:gap-3">
            {featuredStyles.map((style) => (
              <div 
                key={style.id}
                className={cn(
                  "relative rounded-xl md:rounded-2xl overflow-hidden cursor-pointer group",
                  "bg-gradient-to-br",
                  style.color
                )}
              >
                <div className="aspect-[4/5]">
                  <img 
                    src={style.image} 
                    alt={style.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3">
                  <p className="font-semibold text-xs md:text-sm truncate">{style.name}</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground">{style.uses} uses</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Creators */}
        <div className="mb-6 md:mb-8">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <h3 className="text-base md:text-lg font-display font-semibold">Top Creators</h3>
            <button className="flex items-center gap-1 text-xs md:text-sm text-primary hover:underline">
              See all <ChevronRight className="w-3.5 md:w-4 h-3.5 md:h-4" />
            </button>
          </div>
          <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-3 px-3">
            {topCreators.map((creator, index) => (
              <div 
                key={creator.id}
                className="flex-shrink-0 w-24 md:w-28 flex flex-col items-center p-3 md:p-4 rounded-xl md:rounded-2xl bg-card border border-border hover:border-primary/50 transition-all cursor-pointer group"
              >
                <div className="relative mb-2">
                  <div className={cn(
                    "w-12 md:w-16 h-12 md:h-16 rounded-full p-0.5",
                    index === 0 ? "bg-gradient-to-r from-primary to-secondary" : "bg-gradient-to-r from-muted to-muted-foreground/30"
                  )}>
                    <img 
                      src={creator.avatar} 
                      alt={creator.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  {index === 0 && (
                    <div className="absolute -top-1 -right-1 w-5 md:w-6 h-5 md:h-6 rounded-full bg-primary flex items-center justify-center">
                      <Crown className="w-3 md:w-3.5 h-3 md:h-3.5 text-primary-foreground" />
                    </div>
                  )}
                </div>
                <p className="text-xs md:text-sm font-semibold truncate w-full text-center">{creator.name}</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">{creator.followers}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Discovery Grid - Unique Layout */}
        <div className="mb-6">
          <h3 className="text-base md:text-lg font-display font-semibold mb-3 md:mb-4">Discover Art</h3>
          <div className={cn(
            "grid gap-2 md:gap-3 transition-opacity duration-300",
            isShuffling && "opacity-50"
          )} style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridAutoRows: '90px'
          }}>
            {discoveryGrid.map((item, index) => {
              // Simpler grid for mobile - all same size
              const sizeClasses = {
                large: "col-span-2 row-span-2",
                medium: "col-span-1 row-span-2",
                small: "col-span-1 row-span-2"
              };
              
              return (
                <div
                  key={item.id}
                  className={cn(
                    "relative rounded-xl md:rounded-2xl overflow-hidden cursor-pointer group",
                    sizeClasses[item.size as keyof typeof sizeClasses]
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <img
                    src={item.image}
                    alt={item.style}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Content on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-[10px] md:text-xs text-primary font-medium">{item.style}</p>
                    <p className="text-xs md:text-sm font-semibold truncate">{item.creator}</p>
                    <div className="flex items-center gap-1 md:gap-1.5 text-[10px] md:text-xs text-muted-foreground mt-0.5 md:mt-1">
                      <Heart className="w-3 md:w-3.5 h-3 md:h-3.5" />
                      <span>{formatCount(item.likes)}</span>
                    </div>
                  </div>
                  
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 rounded-xl md:rounded-2xl ring-2 ring-primary/0 group-hover:ring-primary/50 transition-all duration-300" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Load More */}
        <div className="flex justify-center pb-4">
          <button className="px-6 md:px-8 py-2.5 md:py-3 rounded-xl md:rounded-2xl bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all font-medium text-sm md:text-base">
            Explore More
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Explore;