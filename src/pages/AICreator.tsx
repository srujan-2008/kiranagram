import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, ArrowRight, User, Mail, Phone, Calendar, Instagram, Youtube, Facebook, 
  Upload, CheckCircle, Clock, Camera, IndianRupee, Plus, FileText, Edit, 
  Heart, MessageCircle, TrendingUp
} from "lucide-react";
import { cn } from "@/lib/utils";
import { MainLayout } from "@/components/layout/MainLayout";

const steps = ["Personal", "Social Media", "Documents", "Review"];

const AICreator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [dashboardView, setDashboardView] = useState<"main" | "add" | "prompts" | "edit">("main");
  const [aadhaarPhoto, setAadhaarPhoto] = useState<string | null>(null);
  const [selfiePhoto, setSelfiePhoto] = useState<string | null>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsSubmitted(true);
      // Simulate admin approval after 2 minutes (using 5 seconds for demo)
      setTimeout(() => setIsApproved(true), 5000);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleAadhaarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setAadhaarPhoto(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const openCamera = async () => {
    setIsCameraOpen(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Camera access denied:", err);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
      ctx?.drawImage(videoRef.current, 0, 0);
      setSelfiePhoto(canvasRef.current.toDataURL("image/jpeg"));
      const stream = videoRef.current.srcObject as MediaStream;
      stream?.getTracks().forEach(track => track.stop());
      setIsCameraOpen(false);
    }
  };

  // Waiting for approval state
  if (isSubmitted && !isApproved) {
    return (
      <MainLayout showRightSidebar={false}>
        <div className="flex items-center justify-center min-h-[60vh] p-4">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
              <Clock className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-2xl font-display font-bold mb-3">Application Under Review</h1>
            <p className="text-muted-foreground mb-6">
              Admin is verifying your Aadhaar, PAN, and other details. This usually takes about 2 minutes.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
              <span>Checking documents...</span>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  // Dashboard after approval
  if (isApproved) {
    return (
      <MainLayout showRightSidebar={false}>
        <div className="max-w-4xl mx-auto px-2 md:px-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-display font-bold">AI Creator Dashboard</h1>
              <p className="text-sm text-muted-foreground">Welcome back, Creator!</p>
            </div>
          </div>

          {dashboardView === "main" && (
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <button
                onClick={() => setDashboardView("add")}
                className="p-4 md:p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all text-left group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <Plus className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Add New Prompt</h3>
                <p className="text-xs text-muted-foreground">Submit new AI style</p>
              </button>

              <button
                onClick={() => setDashboardView("prompts")}
                className="p-4 md:p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all text-left group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-3 group-hover:bg-secondary/20 transition-colors">
                  <FileText className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-1">My Prompts</h3>
                <p className="text-xs text-muted-foreground">View your styles</p>
              </button>

              <div className="p-4 md:p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-3">
                  <IndianRupee className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="font-semibold mb-1">Earnings</h3>
                <p className="text-2xl font-bold text-green-500">₹2,450</p>
                <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Heart className="w-3 h-3" /> 1.2k</span>
                  <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" /> 348</span>
                </div>
              </div>

              <button
                onClick={() => setDashboardView("edit")}
                className="p-4 md:p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all text-left group"
              >
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-3 group-hover:bg-muted/80 transition-colors">
                  <Edit className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-semibold mb-1">Edit Profile</h3>
                <p className="text-xs text-muted-foreground">Update creator info</p>
              </button>
            </div>
          )}

          {dashboardView === "add" && (
            <div className="space-y-4">
              <button onClick={() => setDashboardView("main")} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4" /> Back to Dashboard
              </button>
              <h2 className="text-lg font-bold">Submit New Prompt</h2>
              <div>
                <label className="block text-sm font-medium mb-2">Style Name</label>
                <input type="text" placeholder="e.g., Neon Cyberpunk" className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Prompt Text</label>
                <textarea rows={4} placeholder="Describe your AI style prompt..." className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-sm resize-none" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Sample Image</label>
                <label className="flex items-center justify-center gap-2 w-full h-32 border-2 border-dashed border-border rounded-xl cursor-pointer hover:bg-muted/50">
                  <Upload className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Upload sample</span>
                  <input type="file" accept="image/*" className="hidden" />
                </label>
              </div>
              <button className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-medium">
                Submit for Review
              </button>
            </div>
          )}

          {dashboardView === "prompts" && (
            <div className="space-y-4">
              <button onClick={() => setDashboardView("main")} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4" /> Back to Dashboard
              </button>
              <h2 className="text-lg font-bold">My Prompts</h2>
              <div className="space-y-3">
                {[
                  { name: "Neon Cyberpunk", status: "approved", likes: 234, remixes: 45 },
                  { name: "Vintage Film", status: "pending", likes: 0, remixes: 0 },
                  { name: "Dream Watercolor", status: "approved", likes: 567, remixes: 89 },
                ].map((prompt, i) => (
                  <div key={i} className="p-4 bg-card border border-border rounded-xl flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{prompt.name}</h3>
                      <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Heart className="w-3 h-3" /> {prompt.likes}</span>
                        <span className="flex items-center gap-1"><TrendingUp className="w-3 h-3" /> {prompt.remixes} remixes</span>
                      </div>
                    </div>
                    <span className={cn(
                      "text-xs px-2 py-1 rounded-full",
                      prompt.status === "approved" ? "bg-green-500/20 text-green-500" : "bg-yellow-500/20 text-yellow-500"
                    )}>
                      {prompt.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {dashboardView === "edit" && (
            <div className="space-y-4">
              <button onClick={() => setDashboardView("main")} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4" /> Back to Dashboard
              </button>
              <h2 className="text-lg font-bold">Edit Creator Profile</h2>
              {[
                { label: "Display Name", placeholder: "Your creator name" },
                { label: "Bio", placeholder: "Tell us about your AI art style" },
                { label: "Instagram", placeholder: "@username" },
                { label: "YouTube", placeholder: "Channel URL" },
              ].map(({ label, placeholder }) => (
                <div key={label}>
                  <label className="block text-sm font-medium mb-2">{label}</label>
                  <input type="text" placeholder={placeholder} className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-sm" />
                </div>
              ))}
              <button className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-medium">
                Save Changes
              </button>
            </div>
          )}
        </div>
      </MainLayout>
    );
  }

  // Registration flow
  return (
    <MainLayout showRightSidebar={false}>
      <div className="max-w-2xl mx-auto px-2 md:px-0">
        {/* Progress */}
        <div className="flex items-center gap-2 mb-6 md:mb-8">
          {steps.map((step, i) => (
            <div key={step} className="flex-1">
              <div className={cn("h-1.5 rounded-full transition-colors", i <= currentStep ? "bg-primary" : "bg-muted")} />
              <p className={cn("text-xs mt-1.5 hidden sm:block", i <= currentStep ? "text-primary font-medium" : "text-muted-foreground")}>{step}</p>
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="space-y-5 pb-24">
          {currentStep === 0 && (
            <>
              <h2 className="text-xl font-bold mb-4">Personal Details</h2>
              {[
                { icon: User, label: "Full Name", placeholder: "Enter your name" },
                { icon: Calendar, label: "Date of Birth", placeholder: "DD/MM/YYYY", type: "date" },
                { icon: Mail, label: "Email", placeholder: "Enter your email", type: "email" },
                { icon: Phone, label: "Mobile Number", placeholder: "Enter mobile number", type: "tel" },
              ].map(({ icon: Icon, label, placeholder, type }) => (
                <div key={label}>
                  <label className="block text-sm font-medium mb-2">{label}</label>
                  <div className="relative">
                    <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input 
                      type={type || "text"} 
                      placeholder={placeholder} 
                      className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" 
                    />
                  </div>
                </div>
              ))}
            </>
          )}

          {currentStep === 1 && (
            <>
              <h2 className="text-xl font-bold mb-4">Social Media Links</h2>
              {[
                { icon: Instagram, label: "Instagram", placeholder: "@username" },
                { icon: Youtube, label: "YouTube", placeholder: "Channel URL" },
                { icon: Facebook, label: "Facebook", placeholder: "Profile URL" },
              ].map(({ icon: Icon, label, placeholder }) => (
                <div key={label}>
                  <label className="block text-sm font-medium mb-2">{label}</label>
                  <div className="relative">
                    <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input 
                      type="text" 
                      placeholder={placeholder} 
                      className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" 
                    />
                  </div>
                </div>
              ))}
            </>
          )}

          {currentStep === 2 && (
            <>
              <h2 className="text-xl font-bold mb-4">Document Verification</h2>
              
              {/* PAN Number */}
              <div>
                <label className="block text-sm font-medium mb-2">PAN Card Number</label>
                <input 
                  type="text" 
                  placeholder="ABCDE1234F" 
                  maxLength={10}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-sm uppercase focus:outline-none focus:ring-2 focus:ring-primary/50" 
                />
              </div>

              {/* Aadhaar Number */}
              <div>
                <label className="block text-sm font-medium mb-2">Aadhaar Number</label>
                <input 
                  type="text" 
                  placeholder="1234 5678 9012" 
                  maxLength={14}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" 
                />
              </div>

              {/* Aadhaar Photo Upload */}
              <div>
                <label className="block text-sm font-medium mb-2">Upload Aadhaar Card Photo</label>
                {aadhaarPhoto ? (
                  <div className="relative">
                    <img src={aadhaarPhoto} alt="Aadhaar" className="w-full h-40 object-cover rounded-xl" />
                    <button 
                      onClick={() => setAadhaarPhoto(null)}
                      className="absolute top-2 right-2 p-1 bg-background/80 rounded-full text-xs"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <label className="flex items-center justify-center gap-2 w-full h-28 border-2 border-dashed border-border rounded-xl cursor-pointer hover:bg-muted/50 transition-colors">
                    <Upload className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Upload Aadhaar Photo</span>
                    <input type="file" accept="image/*" onChange={handleAadhaarUpload} className="hidden" />
                  </label>
                )}
              </div>

              {/* Live Selfie Capture */}
              <div>
                <label className="block text-sm font-medium mb-2">Live Photo Verification</label>
                {isCameraOpen ? (
                  <div className="space-y-3">
                    <video ref={videoRef} autoPlay playsInline className="w-full h-48 object-cover rounded-xl bg-muted" />
                    <canvas ref={canvasRef} className="hidden" />
                    <button 
                      onClick={capturePhoto}
                      className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-medium flex items-center justify-center gap-2"
                    >
                      <Camera className="w-5 h-5" /> Capture Photo
                    </button>
                  </div>
                ) : selfiePhoto ? (
                  <div className="relative">
                    <img src={selfiePhoto} alt="Selfie" className="w-full h-48 object-cover rounded-xl" />
                    <button 
                      onClick={() => setSelfiePhoto(null)}
                      className="absolute top-2 right-2 p-1 bg-background/80 rounded-full text-xs"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={openCamera}
                    className="flex items-center justify-center gap-2 w-full h-28 border-2 border-dashed border-primary/50 rounded-xl cursor-pointer hover:bg-primary/5 transition-colors"
                  >
                    <Camera className="w-6 h-6 text-primary" />
                    <span className="text-sm text-primary font-medium">Open Camera for Live Photo</span>
                  </button>
                )}
              </div>
            </>
          )}

          {currentStep === 3 && (
            <>
              <h2 className="text-xl font-bold mb-4">Review & Submit</h2>
              <div className="p-4 bg-muted/50 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-green-500">
                  <CheckCircle className="w-5 h-5" />
                  <span>Personal details completed</span>
                </div>
                <div className="flex items-center gap-2 text-green-500">
                  <CheckCircle className="w-5 h-5" />
                  <span>Social media linked</span>
                </div>
                <div className="flex items-center gap-2 text-green-500">
                  <CheckCircle className="w-5 h-5" />
                  <span>Documents verified</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                By submitting, you agree to our <Link to="/terms" className="text-primary underline">Terms</Link> and <Link to="/privacy" className="text-primary underline">Privacy Policy</Link>.
              </p>
            </>
          )}
        </div>

        {/* Navigation */}
        <div className="fixed bottom-16 md:bottom-0 left-0 right-0 p-4 bg-card/95 backdrop-blur-sm border-t border-border flex gap-3 z-20">
          {currentStep > 0 && (
            <button onClick={handleBack} className="flex-1 py-3 border border-border rounded-xl font-medium hover:bg-muted/50 transition-colors">
              Back
            </button>
          )}
          <button 
            onClick={handleNext} 
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
          >
            {currentStep === steps.length - 1 ? "Submit Application" : "Continue"}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default AICreator;