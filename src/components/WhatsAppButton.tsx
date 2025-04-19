import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="icon"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={() => window.open("https://wa.me/16175550123", "_blank")}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </Button>
    </div>
  );
};

export default WhatsAppButton; 