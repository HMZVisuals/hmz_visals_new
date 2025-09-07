import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/27123456789?text=Hi! I'm interested in your 360° photo booth service. Can you help me with more information?"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center glass-card p-4 rounded-full hover:scale-110 transition-all duration-300 shadow-glow animate-float group-hover:rounded-2xl group-hover:pr-6"
      >
        <MessageCircle className="h-6 w-6 text-secondary" />
        <span className="ml-3 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with us!
        </span>
      </a>

      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
      >
        <X className="h-3 w-3 text-white" />
      </button>

      {/* Pulse effect */}
      <div className="absolute inset-0 rounded-full animate-ping bg-secondary/30 -z-10"></div>
    </div>
  );
};

export default FloatingWhatsApp;