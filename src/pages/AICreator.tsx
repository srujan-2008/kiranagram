import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, User, Mail, Phone, Calendar, Instagram, Youtube, Facebook, CreditCard, Upload, CheckCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = ["Personal", "Social Media", "Documents", "Bank Details", "Review"];

const AICreator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
            <Clock className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-2xl font-display font-bold mb-3">Application Submitted!</h1>
          <p className="text-muted-foreground mb-6">Your AI Creator application is under review. Admin will verify your details within 2 minutes.</p>
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 bg-card/80 backdrop-blur-xl border-b border-border">
        <div className="flex items-center gap-3 px-4 py-3">
          <Link to="/" className="p-2 hover:bg-muted rounded-lg"><ArrowLeft className="w-5 h-5" /></Link>
          <h1 className="font-display font-bold text-lg">Become AI Creator</h1>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-6 pb-32">
        {/* Progress */}
        <div className="flex items-center gap-2 mb-8">
          {steps.map((step, i) => (
            <div key={step} className="flex-1">
              <div className={cn("h-1 rounded-full", i <= currentStep ? "bg-primary" : "bg-muted")} />
              <p className={cn("text-xs mt-1 hidden sm:block", i <= currentStep ? "text-primary" : "text-muted-foreground")}>{step}</p>
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="space-y-5">
          {currentStep === 0 && (
            <>
              <h2 className="text-xl font-bold mb-4">Personal Details</h2>
              {[{ icon: User, label: "Full Name", placeholder: "Enter your name" },
                { icon: Calendar, label: "Age", placeholder: "Enter your age", type: "number" },
                { icon: Mail, label: "Email", placeholder: "Enter your email", type: "email" },
                { icon: Phone, label: "Mobile", placeholder: "Enter mobile number", type: "tel" }]
                .map(({ icon: Icon, label, placeholder, type }) => (
                  <div key={label}>
                    <label className="block text-sm font-medium mb-2">{label}</label>
                    <div className="relative">
                      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input type={type || "text"} placeholder={placeholder} className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
                    </div>
                  </div>
                ))}
            </>
          )}

          {currentStep === 1 && (
            <>
              <h2 className="text-xl font-bold mb-4">Social Media</h2>
              {[{ icon: Instagram, label: "Instagram", placeholder: "@username" },
                { icon: Youtube, label: "YouTube", placeholder: "Channel URL" },
                { icon: Facebook, label: "Facebook", placeholder: "Profile URL" }]
                .map(({ icon: Icon, label, placeholder }) => (
                  <div key={label}>
                    <label className="block text-sm font-medium mb-2">{label}</label>
                    <div className="relative">
                      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input type="text" placeholder={placeholder} className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
                    </div>
                  </div>
                ))}
            </>
          )}

          {currentStep === 2 && (
            <>
              <h2 className="text-xl font-bold mb-4">Document Verification</h2>
              {["Aadhaar Card - Front", "Aadhaar Card - Back", "PAN Card - Front", "PAN Card - Back"].map((doc) => (
                <div key={doc}>
                  <label className="block text-sm font-medium mb-2">{doc}</label>
                  <label className="flex items-center justify-center gap-2 w-full h-24 border-2 border-dashed border-border rounded-xl cursor-pointer hover:bg-muted/50">
                    <Upload className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Upload Image</span>
                    <input type="file" accept="image/*" className="hidden" />
                  </label>
                </div>
              ))}
            </>
          )}

          {currentStep === 3 && (
            <>
              <h2 className="text-xl font-bold mb-4">Bank Details</h2>
              {["Account Holder Name", "Bank Name", "Account Number", "IFSC Code"].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium mb-2">{field}</label>
                  <div className="relative">
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input type="text" placeholder={`Enter ${field.toLowerCase()}`} className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  </div>
                </div>
              ))}
            </>
          )}

          {currentStep === 4 && (
            <>
              <h2 className="text-xl font-bold mb-4">Review & Submit</h2>
              <div className="p-4 bg-muted/50 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-green-500"><CheckCircle className="w-5 h-5" /><span>Personal details completed</span></div>
                <div className="flex items-center gap-2 text-green-500"><CheckCircle className="w-5 h-5" /><span>Social media linked</span></div>
                <div className="flex items-center gap-2 text-green-500"><CheckCircle className="w-5 h-5" /><span>Documents uploaded</span></div>
                <div className="flex items-center gap-2 text-green-500"><CheckCircle className="w-5 h-5" /><span>Bank details added</span></div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">By submitting, you agree to our Terms and Privacy Policy.</p>
            </>
          )}
        </div>

        {/* Navigation */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-card border-t border-border flex gap-3">
          {currentStep > 0 && <button onClick={handleBack} className="flex-1 py-3 border border-border rounded-xl font-medium">Back</button>}
          <button onClick={handleNext} className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground rounded-xl font-medium">
            {currentStep === steps.length - 1 ? "Submit Application" : "Continue"}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AICreator;
