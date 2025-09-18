import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User, Globe } from "lucide-react";
import { MobileLayout } from "@/components/layout/MobileLayout";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hello! I'm your AI farming assistant. I can help you with crop recommendations, soil analysis, and farming advice in multiple languages. How can I help you today?",
    sender: "ai",
    timestamp: new Date()
  }
];

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: getAIResponse(inputText),
        sender: "ai", 
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes("soil") || input.includes("ph")) {
      return "Based on your current soil analysis, your pH level is 6.8 which is good for most crops. I recommend maintaining this level through organic matter additions.";
    } else if (input.includes("crop") || input.includes("plant")) {
      return "For your current soil conditions, I recommend tomatoes, corn, or wheat. Tomatoes show 92% compatibility with your farm conditions.";
    } else if (input.includes("water") || input.includes("irrigation")) {
      return "Your current soil moisture is at 65% which is optimal. Continue your current watering schedule but monitor for changes in weather patterns."; 
    } else if (input.includes("fertilizer") || input.includes("nutrient")) {
      return "Your phosphorus levels are medium. Consider adding phosphorus-rich fertilizer in the next 2-3 days for better crop development.";
    } else {
      return "I understand your question. Based on your farm's data, I recommend focusing on soil health and following the crop rotation schedule. Would you like specific advice on any particular aspect?";
    }
  };

  const quickQuestions = [
    "What crops should I plant?",
    "How is my soil health?",
    "When should I water?",
    "Fertilizer recommendations?"
  ];

  return (
    <MobileLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-border bg-card">
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" />
            <div>
              <h1 className="text-lg font-bold text-foreground">AI Farm Assistant</h1>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Globe className="h-3 w-3" />
                <span>Multilingual Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-3 ${
                message.sender === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                message.sender === "user" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary text-secondary-foreground"
              }`}>
                {message.sender === "user" ? (
                  <User className="h-4 w-4" />
                ) : (
                  <Bot className="h-4 w-4" />
                )}
              </div>
              <Card className={`max-w-[80%] ${
                message.sender === "user" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-card"
              }`}>
                <CardContent className="p-3">
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
                <Bot className="h-4 w-4" />
              </div>
              <Card className="bg-card">
                <CardContent className="p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: "0.1s"}}></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: "0.2s"}}></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Quick Questions */}
        {messages.length === 1 && (
          <div className="p-4 border-t border-border">
            <p className="text-sm text-muted-foreground mb-3">Quick questions:</p>
            <div className="grid grid-cols-2 gap-2">
              {quickQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-xs h-auto p-2 text-left"
                  onClick={() => setInputText(question)}
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="p-4 border-t border-border bg-card">
          <div className="flex gap-2">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about crops, soil, weather..."
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1"
            />
            <Button 
              onClick={handleSendMessage}
              size="icon"
              disabled={!inputText.trim() || isTyping}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Chat;