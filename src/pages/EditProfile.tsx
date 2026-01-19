import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Camera, User, Mail, Phone, MapPin, Link as LinkIcon, Save } from "lucide-react";
import avatar2 from "@/assets/avatar-2.jpg";
import heroBanner from "@/assets/hero-banner.jpg";

const EditProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "Elara Vance",
    username: "elaravance",
    email: "elara@example.com",
    phone: "+1 234 567 8900",
    location: "San Francisco, CA",
    website: "elaravance.art",
    bio: "AI Artist & Digital Creator 🎨 Exploring the intersection of technology and creativity. Building the future, one prompt at a time. ✨",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save profile logic here
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-card/80 backdrop-blur-xl border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Link to="/profile" className="p-2 hover:bg-muted rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-display font-bold text-lg">Edit Profile</h1>
          </div>
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-all"
          >
            <Save className="w-4 h-4" />
            Save
          </button>
        </div>
      </header>

      <div className="max-w-2xl mx-auto pb-20">
        {/* Cover Photo */}
        <div className="relative h-32 sm:h-48">
          <img
            src={heroBanner}
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
            <button className="p-3 bg-background/80 rounded-full hover:bg-background transition-colors">
              <Camera className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Avatar */}
        <div className="relative px-4 -mt-16">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32">
            <img
              src={avatar2}
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-background"
            />
            <button className="absolute bottom-0 right-0 p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
              <Camera className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-4 py-6 space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">Username</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">@</span>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">Phone</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">Location</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">Website</label>
            <div className="relative">
              <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
            />
            <p className="text-xs text-muted-foreground mt-1">{formData.bio.length}/160 characters</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
