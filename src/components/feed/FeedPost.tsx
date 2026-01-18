import { MoreHorizontal, Heart, MessageCircle, Share, Bookmark, BadgeCheck, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeedPostProps {
  author: {
    name: string;
    username: string;
    avatar: string;
    isPro?: boolean;
    earnings?: string;
    isVerified?: boolean;
  };
  image: string;
  tags?: string[];
  badge?: string;
  likes?: number;
  comments?: number;
}

export function FeedPost({ author, image, tags, badge, likes = 0, comments = 0 }: FeedPostProps) {
  return (
    <div className="glass-card overflow-hidden animate-scale-in">
      {/* Author Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="story-ring">
            <img
              src={author.avatar}
              alt={author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm">{author.name}</span>
              {author.isVerified && (
                <BadgeCheck className="w-4 h-4 text-primary fill-primary/20" />
              )}
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              {author.isPro && <span className="badge-pro text-[10px]">PRO</span>}
              {author.earnings && (
                <span className="flex items-center gap-1 text-green-400">
                  <TrendingUp className="w-3 h-3" />
                  {author.earnings}
                </span>
              )}
            </div>
          </div>
        </div>
        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
          <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="px-4 pb-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "px-3 py-1 text-xs font-medium rounded-full",
                tag === "DESIGN" && "bg-pink-500/20 text-pink-400",
                tag === "MKT" && "bg-blue-500/20 text-blue-400",
                tag === "DEV" && "bg-green-500/20 text-green-400",
                !["DESIGN", "MKT", "DEV"].includes(tag) && "bg-muted text-muted-foreground"
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt="Post"
          className="w-full aspect-[4/5] object-cover"
        />
        {badge && (
          <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold bg-primary/90 text-primary-foreground rounded-full flex items-center gap-1">
            <span className="text-sm">🔥</span> {badge}
          </span>
        )}
        
        {/* Ethical AI Badge */}
        <div className="absolute bottom-3 left-3">
          <span className="px-3 py-1 text-xs font-medium bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30 backdrop-blur-sm">
            ✨ Ethical AI
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-muted-foreground hover:text-destructive transition-colors group">
            <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm">{likes > 0 ? likes : ""}</span>
          </button>
          <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm">{comments > 0 ? comments : ""}</span>
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Share className="w-5 h-5" />
          </button>
        </div>
        <button className="text-muted-foreground hover:text-primary transition-colors">
          <Bookmark className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
