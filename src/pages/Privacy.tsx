import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => (
  <div className="min-h-screen bg-background">
    <header className="sticky top-0 z-30 bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="flex items-center gap-3 px-4 py-3">
        <Link to="/settings" className="p-2 hover:bg-muted rounded-lg"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="font-display font-bold text-lg">Privacy Policy</h1>
      </div>
    </header>
    <div className="max-w-3xl mx-auto px-4 py-8 prose prose-invert prose-sm">
      <p className="text-muted-foreground">Last updated: January 2025</p>
      <h2>1. Information We Collect</h2>
      <p>We collect information you provide directly, including name, email, phone number, and profile information when you create an account.</p>
      <h2>2. How We Use Your Information</h2>
      <p>We use your information to provide and improve our services, process transactions, send notifications, and ensure platform security.</p>
      <h2>3. Information Sharing</h2>
      <p>We do not sell your personal information. We may share data with service providers who assist in operating our platform.</p>
      <h2>4. Data Security</h2>
      <p>We implement industry-standard security measures to protect your data from unauthorized access.</p>
      <h2>5. Your Rights</h2>
      <p>You have the right to access, update, or delete your personal information at any time through your account settings.</p>
      <h2>6. Contact Us</h2>
      <p>For questions about this policy, contact us at privacy@kiranagram.com</p>
    </div>
  </div>
);

export default Privacy;
