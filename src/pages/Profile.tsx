import { MainLayout } from "@/components/layout/MainLayout";
import {
  Settings,
  Share2,
  Edit,
  Grid,
  Bookmark,
  Heart,
  Users,
  Award,
  Link as LinkIcon,
  MapPin,
  Calendar,
  BadgeCheck,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import avatar2 from "@/assets/avatar-2.jpg";
import cyberGirl from "@/assets/cyber-girl.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import heroBanner from "@/assets/hero-banner.jpg";

const tabs = [
  { id: "posts", label: "Posts", icon: Grid },
  { id: "saved", label: "Saved", icon: Bookmark },
  { id: "liked", label: "Liked", icon: Heart },
];

const stats = [
  { label: "Posts", value: "248" },
  { label: "Followers", value: "12.4K" },
  { label: "Following", value: "1,892" },
];

const posts = [
  { id: 1, image: cyberGirl, likes: 2489, comments: 156 },
  { id: 2, image: avatar1, likes: 1823, comments: 89 },
  { id: 3, image: avatar3, likes: 3241, comments: 234 },
  { id: 4, image: heroBanner, likes: 4521, comments: 312 },
  { id: 5, image: avatar2, likes: 1672, comments: 78 },
  { id: 6, image: cyberGirl, likes: 2891, comments: 167 },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <MainLayout showRightSidebar={false}>
      <div className="max-w-4xl mx-auto">
        {/* Cover Photo */}
        <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden mb-16">
          <img
            src={heroBanner}
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </div>

        {/* Profile Info */}
        <div className="relative px-4 -mt-24">
          {/* Avatar */}
          <div className="flex flex-col md:flex-row md:items-end gap-4">
            <div className="relative">
              <div className="story-ring p-1">
                <img
                  src={avatar2}
                  alt="Profile"
                  className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-background"
                />
              </div>
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background" />
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-display font-bold">Elara Vance</h1>
                  <BadgeCheck className="w-6 h-6 text-primary fill-primary/20" />
                </div>
                <span className="badge-pro w-fit">PRO</span>
              </div>
              <p className="text-muted-foreground mb-4">@elaravance</p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-primary/30 transition-all">
                  <Users className="w-4 h-4" />
                  Follow
                </button>
                <button className="flex items-center gap-2 px-5 py-2.5 glass-card hover:bg-muted/50 rounded-xl font-medium text-sm transition-all">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
                <button className="p-2.5 glass-card hover:bg-muted/50 rounded-xl transition-all">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2.5 glass-card hover:bg-muted/50 rounded-xl transition-all">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-6 md:gap-8 py-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-xl md:text-2xl font-display font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div className="mt-6 space-y-4">
            <p className="text-foreground max-w-xl">
              AI Artist & Digital Creator 🎨 Exploring the intersection of technology and creativity. Building the future, one prompt at a time. ✨
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                San Francisco, CA
              </span>
              <span className="flex items-center gap-1">
                <LinkIcon className="w-4 h-4" />
                <a href="#" className="text-primary hover:underline">elaravance.art</a>
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Joined March 2023
              </span>
              <span className="flex items-center gap-1">
                <Award className="w-4 h-4 text-primary" />
                Top 1% Creator
              </span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8 border-b border-border">
          <div className="flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors relative",
                  activeTab === tab.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 mt-4">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={post.image}
                alt="Post"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                <span className="flex items-center gap-2 text-foreground font-medium">
                  <Heart className="w-5 h-5 fill-current" />
                  {(post.likes / 1000).toFixed(1)}K
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
