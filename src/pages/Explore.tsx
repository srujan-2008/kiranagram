import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Search, Heart, MessageCircle, Grid, Film, Bookmark, User } from "lucide-react";
import { cn } from "@/lib/utils";
import cyberGirl from "@/assets/cyber-girl.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import heroBanner from "@/assets/hero-banner.jpg";

const exploreItems = [
  { id: 1, image: cyberGirl, likes: 2400, comments: 89, isVideo: false },
  { id: 2, image: avatar1, likes: 1800, comments: 45, isVideo: true },
  { id: 3, image: avatar2, likes: 3200, comments: 127, isVideo: false },
  { id: 4, image: avatar3, likes: 1500, comments: 32, isVideo: false },
  { id: 5, image: heroBanner, likes: 4100, comments: 203, isVideo: true },
  { id: 6, image: cyberGirl, likes: 2800, comments: 95, isVideo: false },
  { id: 7, image: avatar1, likes: 890, comments: 21, isVideo: false },
  { id: 8, image: avatar2, likes: 5600, comments: 312, isVideo: true },
  { id: 9, image: avatar3, likes: 1200, comments: 54, isVideo: false },
  { id: 10, image: heroBanner, likes: 7800, comments: 456, isVideo: false },
  { id: 11, image: cyberGirl, likes: 3400, comments: 178, isVideo: true },
  { id: 12, image: avatar1, likes: 2100, comments: 67, isVideo: false },
];

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const formatCount = (count: number) => {
    if (count >= 1000) {
      return (count / 1000).toFixed(1).replace('.0', '') + 'K';
    }
    return count.toString();
  };

  return (
    <MainLayout showRightSidebar={false}>
      <div className="max-w-4xl mx-auto pb-20 md:pb-0">
        {/* Search Bar - Instagram Style */}
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm px-3 py-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="w-full pl-9 pr-4 py-2 bg-muted/60 border-0 rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
            />
          </div>
        </div>

        {/* Instagram-Style Masonry Grid */}
        <div className="px-0.5">
          <div className="grid grid-cols-3 gap-0.5">
            {exploreItems.map((item, index) => {
              // Create Instagram-like layout with some larger tiles
              const isLarge = index % 9 === 0 || index % 9 === 5;
              
              return (
                <div
                  key={item.id}
                  className={cn(
                    "relative aspect-square overflow-hidden cursor-pointer group",
                    isLarge && "col-span-2 row-span-2"
                  )}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Video indicator */}
                  {item.isVideo && (
                    <div className="absolute top-2 right-2">
                      <Film className="w-5 h-5 text-white drop-shadow-lg" />
                    </div>
                  )}

                  {/* Hover overlay with stats - Instagram style */}
                  <div className={cn(
                    "absolute inset-0 bg-black/40 flex items-center justify-center gap-6 transition-opacity duration-200",
                    hoveredItem === item.id ? "opacity-100" : "opacity-0"
                  )}>
                    <div className="flex items-center gap-1.5 text-white font-semibold">
                      <Heart className="w-5 h-5 fill-white" />
                      <span>{formatCount(item.likes)}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-white font-semibold">
                      <MessageCircle className="w-5 h-5 fill-white" />
                      <span>{formatCount(item.comments)}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Load More Indicator */}
        <div className="py-8 flex justify-center">
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    </MainLayout>
  );
};

export default Explore;