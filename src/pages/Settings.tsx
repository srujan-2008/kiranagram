import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Bell,
  Shield,
  Moon,
  Globe,
  HelpCircle,
  FileText,
  LogOut,
  ChevronRight,
  Smartphone,
  Eye,
  Lock,
  CreditCard,
} from "lucide-react";
import { useTheme } from "next-themes";
import { MainLayout } from "@/components/layout/MainLayout";

const Settings = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const handleLogout = () => {
    navigate("/login");
  };

  const settingsSections = [
    {
      title: "Account",
      items: [
        { icon: User, label: "Edit Profile", link: "/edit-profile" },
        { icon: Lock, label: "Change Password", link: "#" },
        { icon: Smartphone, label: "Two-Factor Authentication", link: "#" },
        { icon: CreditCard, label: "Payment Methods", link: "#" },
      ],
    },
    {
      title: "Preferences",
      items: [
        { icon: Bell, label: "Notifications", link: "#" },
        { icon: Eye, label: "Privacy", link: "#" },
        { icon: Globe, label: "Language", value: "English", link: "#" },
        {
          icon: Moon,
          label: "Dark Mode",
          toggle: true,
          checked: theme === "dark",
          onChange: () => setTheme(theme === "dark" ? "light" : "dark"),
        },
      ],
    },
    {
      title: "Security",
      items: [
        { icon: Shield, label: "Security Settings", link: "#" },
        { icon: Smartphone, label: "Active Sessions", link: "#" },
      ],
    },
    {
      title: "Support",
      items: [
        { icon: HelpCircle, label: "Help Center", link: "#" },
        { icon: FileText, label: "Terms of Service", link: "/terms" },
        { icon: FileText, label: "Privacy Policy", link: "/privacy" },
      ],
    },
  ];

  return (
    <MainLayout showRightSidebar={false}>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-xl font-display font-bold mb-4 px-2">Settings</h1>
        
        {settingsSections.map((section) => (
          <div key={section.title} className="py-3">
            <h2 className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              {section.title}
            </h2>
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              {section.items.map((item, index) => (
                <div key={item.label}>
                  {item.toggle ? (
                    <button
                      onClick={item.onChange}
                      className="w-full flex items-center justify-between px-4 py-3.5 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 text-muted-foreground" />
                        <span className="text-sm">{item.label}</span>
                      </div>
                      <div
                        className={`w-11 h-6 rounded-full transition-colors ${
                          item.checked ? "bg-primary" : "bg-muted"
                        } relative`}
                      >
                        <div
                          className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                            item.checked ? "translate-x-5" : "translate-x-0.5"
                          }`}
                        />
                      </div>
                    </button>
                  ) : (
                    <Link
                      to={item.link}
                      className="flex items-center justify-between px-4 py-3.5 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 text-muted-foreground" />
                        <span className="text-sm">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.value && (
                          <span className="text-sm text-muted-foreground">{item.value}</span>
                        )}
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </Link>
                  )}
                  {index < section.items.length - 1 && (
                    <div className="h-px bg-border ml-12" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Logout Button */}
        <div className="px-2 py-6">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 py-3 bg-destructive/10 text-destructive hover:bg-destructive/20 rounded-xl font-medium transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Log Out
          </button>
        </div>

        {/* Version */}
        <p className="text-center text-xs text-muted-foreground pb-8">
          Kiranagram v1.0.0
        </p>
      </div>
    </MainLayout>
  );
};

export default Settings;