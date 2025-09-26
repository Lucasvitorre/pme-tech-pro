import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
  variant?: "fixed" | "inline";
}

const WhatsAppButton = ({ 
  phoneNumber = "5511999999999", 
  message = "Olá! Gostaria de saber mais sobre os serviços de TI para minha empresa.",
  className = "",
  variant = "inline"
}: WhatsAppButtonProps) => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  if (variant === "fixed") {
    return (
      <Button
        onClick={handleWhatsAppClick}
        className={`fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-whatsapp hover:bg-whatsapp/90 shadow-elevated hover:shadow-glow transition-all duration-300 hover:scale-110 ${className}`}
        size="icon"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className={`bg-whatsapp hover:bg-whatsapp/90 text-white font-semibold px-8 py-3 rounded-lg shadow-trust hover:shadow-glow transition-all duration-300 hover:scale-105 ${className}`}
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      Falar com Especialista
    </Button>
  );
};

export default WhatsAppButton;