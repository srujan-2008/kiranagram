import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Settings from "./pages/Settings";
import AICreator from "./pages/AICreator";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import CreatorEarnings from "./pages/CreatorEarnings";
import CreatorPrompts from "./pages/CreatorPrompts";
import AddNewPrompt from "./pages/AddNewPrompt";
import EditCreatorProfile from "./pages/EditCreatorProfile";
import BecomePublisher from "./pages/BecomePublisher";
import Messages from "./pages/Messages";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/ai-creator" element={<AICreator />} />
            <Route path="/ai-creator/earnings" element={<CreatorEarnings />} />
            <Route path="/ai-creator/prompts" element={<CreatorPrompts />} />
            <Route path="/ai-creator/add-prompt" element={<AddNewPrompt />} />
            <Route path="/ai-creator/edit-profile" element={<EditCreatorProfile />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/become-publisher" element={<BecomePublisher />} />
            <Route path="/messages" element={<Messages />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
