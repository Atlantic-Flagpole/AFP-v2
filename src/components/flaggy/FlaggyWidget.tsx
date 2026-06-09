'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { X, Send, MessageCircle, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'flaggy';
  timestamp: Date;
}

const SUGGESTED_TOPICS = [
  { label: "What size do I need?", prompt: "Help me choose the right flagpole size for my home" },
  { label: "Tell me about Forever Warranty™", prompt: "What is Forever Warranty™?" },
  { label: "Product recommendations", prompt: "What's the best flagpole for a residential home?" },
  { label: "Installation info", prompt: "How long does installation take?" },
  { label: "JUNEBUG promo", prompt: "Tell me about the JUNEBUG promotion" },
  { label: "Material specs", prompt: "Why aircraft aluminum? What makes your flagpoles special?" },
];

export default function FlaggyWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Initial greeting when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addFlaggyMessage(
        "🇺🇸 Hey there, Patriot! I'm Flaggy, your friendly flagpole expert. How can I help you today? Need sizing advice, product info, or have questions about our Forever Warranty™?"
      );
    }
  }, [isOpen]);

  const addFlaggyMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'flaggy',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage = message.trim();
    setMessage('');
    addUserMessage(userMessage);
    setShowSuggestions(false);

    setIsLoading(true);
    try {
      const response = await fetch('/api/flaggy-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      addFlaggyMessage(data.reply);
    } catch (error) {
      console.error('Error:', error);
      addFlaggyMessage(
        "Oops! I'm having trouble right now. Can you try asking me something else? Or feel free to contact our human team for support! 🦅"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestion = async (prompt: string) => {
    setMessage('');
    addUserMessage(prompt);
    setShowSuggestions(false);

    setIsLoading(true);
    try {
      const response = await fetch('/api/flaggy-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: prompt }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      addFlaggyMessage(data.reply);
    } catch (error) {
      console.error('Error:', error);
      addFlaggyMessage(
        "Oops! Something went wrong. Try again or contact our team! 🦅"
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-accent to-red-600 text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-40 animate-pulse"
        title="Chat with Flaggy"
      >
        <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
        <MessageCircle className="w-8 h-8 relative z-10" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-navy/10">
      {/* Header */}
      <div className="bg-gradient-to-r from-accent to-red-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-lg">
            🦅
          </div>
          <div>
            <h3 className="font-black text-white">Flaggy</h3>
            <p className="text-xs text-white/80">Your flagpole expert</p>
          </div>
        </div>
        <button
          onClick={() => {
            setIsOpen(false);
            setMessages([]);
            setShowSuggestions(true);
          }}
          className="p-1 hover:bg-white/20 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-4 py-3 rounded-lg ${
                msg.sender === 'user'
                  ? 'bg-accent text-white rounded-br-none'
                  : 'bg-white text-navy border border-navy/10 rounded-bl-none'
              }`}
            >
              <p className="text-sm leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white text-navy border border-navy/10 px-4 py-3 rounded-lg rounded-bl-none flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-sm">Flaggy is thinking...</span>
            </div>
          </div>
        )}

        {/* Suggestions */}
        {showSuggestions && messages.length === 1 && (
          <div className="space-y-2">
            <p className="text-xs font-bold text-navy/60 uppercase tracking-widest px-1">Popular topics:</p>
            <div className="grid grid-cols-2 gap-2">
              {SUGGESTED_TOPICS.map((topic) => (
                <button
                  key={topic.label}
                  onClick={() => handleSuggestion(topic.prompt)}
                  className="text-xs font-bold text-navy bg-white border border-navy/20 rounded-lg px-3 py-2 hover:bg-navy/5 transition-colors"
                >
                  {topic.label}
                </button>
              ))}
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-navy/10 p-3 bg-white rounded-b-2xl">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me about flagpoles..."
            className="flex-1 px-4 py-2 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-sm"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !message.trim()}
            className="w-10 h-10 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-50 flex items-center justify-center"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-xs text-navy/40 mt-2 text-center">Powered by AI • Made in USA 🇺🇸</p>
      </div>
    </div>
  );
}
