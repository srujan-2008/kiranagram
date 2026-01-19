import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => (
  <div className="min-h-screen bg-background">
    <header className="sticky top-0 z-30 bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="flex items-center gap-3 px-4 py-3">
        <Link to="/settings" className="p-2 hover:bg-muted rounded-lg"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="font-display font-bold text-lg">Terms of Service</h1>
      </div>
    </header>
    <div className="max-w-3xl mx-auto px-4 py-8 prose prose-invert prose-sm">
      <p className="text-muted-foreground">Last updated: January 2025</p>
      <h2>1. Acceptance of Terms</h2>
      <p>By accessing Kiranagram, you agree to be bound by these Terms of Service and all applicable laws.</p>
      <h2>2. User Accounts</h2>
      <p>You are responsible for maintaining the confidentiality of your account credentials and all activities under your account.</p>
      <h2>3. Content Guidelines</h2>
      <p>Users must not upload content that is illegal, harmful, or violates intellectual property rights. AI-generated content must be clearly labeled.</p>
      <h2>4. AI Creator Program</h2>
      <p>Creators must provide accurate verification documents. Earnings are subject to platform fees and payment processing times.</p>
      <h2>5. Intellectual Property</h2>
      <p>You retain ownership of content you create. By posting, you grant Kiranagram a license to display and distribute your content.</p>
      <h2>6. Termination</h2>
      <p>We reserve the right to suspend or terminate accounts that violate these terms.</p>
      <h2>7. Contact</h2>
      <p>Questions? Contact us at legal@kiranagram.com</p>
    </div>
  </div>
);

export default Terms;
