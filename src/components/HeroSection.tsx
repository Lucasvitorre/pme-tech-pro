import WhatsAppButton from "./WhatsAppButton";
import { Shield, Zap, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container relative z-10 text-center text-white px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Sua TI <span className="text-primary-glow">Funciona</span>?
            <br />
            <span className="text-3xl md:text-5xl font-semibold">
              Livre-se de Problemas e Ganhe Produtividade
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Suporte especializado para pequenas e médias empresas. 
            <strong className="text-white"> Tranquilidade, segurança e eficiência</strong> para seu negócio crescer.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
            <div className="flex items-center gap-2 text-white/90">
              <Shield className="h-6 w-6 text-trust-glow" />
              <span className="font-medium">100% Seguro</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Zap className="h-6 w-6 text-primary-glow" />
              <span className="font-medium">Suporte Rápido</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Users className="h-6 w-6 text-trust-glow" />
              <span className="font-medium">Foco em PMEs</span>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="mt-12">
            <WhatsAppButton 
              className="text-lg px-12 py-4 hover:scale-110"
              message="Olá! Quero saber como vocês podem ajudar minha empresa com TI. Tenho interesse em uma consultoria gratuita."
            />
          </div>

          {/* Secondary Message */}
          <p className="text-white/80 text-sm">
            ✅ Consultoria gratuita • ⚡ Resposta em minutos • 🛡️ Sem compromisso
          </p>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;