import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { 
  Search, 
  Edit, 
  MoreHorizontal, 
  Send, 
  Image, 
  Smile, 
  ArrowLeft,
  Phone,
  Video,
  Circle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import cyberGirl from "@/assets/cyber-girl.jpg";

const conversations = [
  {
    id: 1,
    name: "NeonMaster",
    avatar: avatar1,
    lastMessage: "That AI style looks amazing! 🔥",
    time: "2m",
    unread: 3,
    online: true,
  },
  {
    id: 2,
    name: "CyberQueen",
    avatar: avatar2,
    lastMessage: "Thanks for the collaboration!",
    time: "15m",
    unread: 0,
    online: true,
  },
  {
    id: 3,
    name: "PixelWizard",
    avatar: avatar3,
    lastMessage: "Check out my new prompt",
    time: "1h",
    unread: 1,
    online: false,
  },
  {
    id: 4,
    name: "SynthArtist",
    avatar: cyberGirl,
    lastMessage: "Would love to work together",
    time: "3h",
    unread: 0,
    online: false,
  },
  {
    id: 5,
    name: "DigitalMuse",
    avatar: avatar1,
    lastMessage: "Great work on the portrait!",
    time: "1d",
    unread: 0,
    online: true,
  },
];

const chatMessages = [
  { id: 1, sender: "other", text: "Hey! Love your recent AI art pieces 🎨", time: "10:30 AM" },
  { id: 2, sender: "me", text: "Thank you so much! I've been experimenting with new styles", time: "10:32 AM" },
  { id: 3, sender: "other", text: "That AI style looks amazing! 🔥", time: "10:35 AM" },
  { id: 4, sender: "other", text: "Would you be interested in a collaboration?", time: "10:35 AM" },
];

const Messages = () => {
  const { t } = useTranslation();
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const selectedConversation = conversations.find(c => c.id === selectedChat);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle send message
      setMessage("");
    }
  };

  return (
    <MainLayout showRightSidebar={false}>
      <div className="max-w-4xl mx-auto h-[calc(100vh-120px)] md:h-[calc(100vh-80px)] flex overflow-hidden">
        {/* Conversations List */}
        <div className={cn(
          "w-full md:w-80 lg:w-96 border-r border-border flex flex-col bg-card/50",
          selectedChat ? "hidden md:flex" : "flex"
        )}>
          {/* Header */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-display font-bold">{t('messages.title')}</h1>
              <button className="p-2 hover:bg-muted rounded-xl transition-colors">
                <Edit className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('messages.searchPlaceholder')}
                className="w-full pl-10 pr-4 py-2.5 bg-muted/50 border border-border rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>

          {/* Conversations */}
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelectedChat(conv.id)}
                className={cn(
                  "w-full flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors text-left",
                  selectedChat === conv.id && "bg-primary/10"
                )}
              >
                <div className="relative">
                  <img
                    src={conv.avatar}
                    alt={conv.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {conv.online && (
                    <Circle className="absolute bottom-0 right-0 w-3.5 h-3.5 fill-green-500 text-green-500 border-2 border-background rounded-full" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-semibold text-sm truncate">{conv.name}</span>
                    <span className="text-xs text-muted-foreground">{conv.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                </div>
                {conv.unread > 0 && (
                  <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                    {conv.unread}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className={cn(
          "flex-1 flex flex-col",
          !selectedChat ? "hidden md:flex" : "flex"
        )}>
          {selectedChat ? (
            <>
              {/* Chat Header */}
              <div className="flex items-center gap-3 p-4 border-b border-border bg-card/50">
                <button 
                  onClick={() => setSelectedChat(null)}
                  className="md:hidden p-2 hover:bg-muted rounded-xl transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div className="relative">
                  <img
                    src={selectedConversation?.avatar}
                    alt={selectedConversation?.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  {selectedConversation?.online && (
                    <Circle className="absolute bottom-0 right-0 w-3 h-3 fill-green-500 text-green-500 border-2 border-background rounded-full" />
                  )}
                </div>
                <div className="flex-1">
                  <h2 className="font-semibold">{selectedConversation?.name}</h2>
                  <p className="text-xs text-muted-foreground">
                    {selectedConversation?.online ? t('messages.online') : t('messages.offline')}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-muted rounded-xl transition-colors">
                    <Phone className="w-5 h-5 text-muted-foreground" />
                  </button>
                  <button className="p-2 hover:bg-muted rounded-xl transition-colors">
                    <Video className="w-5 h-5 text-muted-foreground" />
                  </button>
                  <button className="p-2 hover:bg-muted rounded-xl transition-colors">
                    <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={cn(
                      "flex",
                      msg.sender === "me" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div className={cn(
                      "max-w-[70%] px-4 py-2.5 rounded-2xl",
                      msg.sender === "me"
                        ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground"
                        : "bg-muted"
                    )}>
                      <p className="text-sm">{msg.text}</p>
                      <p className={cn(
                        "text-[10px] mt-1",
                        msg.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"
                      )}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border bg-card/50">
                <div className="flex items-center gap-3">
                  <button className="p-2 hover:bg-muted rounded-xl transition-colors">
                    <Image className="w-5 h-5 text-muted-foreground" />
                  </button>
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      placeholder={t('messages.typePlaceholder')}
                      className="w-full px-4 py-2.5 bg-muted/50 border border-border rounded-2xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 pr-12"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2">
                      <Smile className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                    </button>
                  </div>
                  <button 
                    onClick={handleSendMessage}
                    className="p-3 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transition-all"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <Send className="w-10 h-10 text-muted-foreground" />
                </div>
                <h2 className="text-xl font-display font-semibold mb-2">{t('messages.selectChat')}</h2>
                <p className="text-muted-foreground text-sm">{t('messages.selectChatDesc')}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Messages;
