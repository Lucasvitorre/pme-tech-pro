import WhatsAppButton from "./WhatsAppButton";
import { CheckCircle, Clock, Shield } from "lucide-react";

const FinalCTASection = () => {
  const benefits = [
    {
      icon: CheckCircle,
      text: "Diagnóstico gratuito da sua TI"
    },
    {
      icon: Clock,
      text: "Resposta em até 2 horas"
    },
    {
      icon: Shield,
      text: "Sem compromisso ou taxas ocultas"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para <span className="text-primary-glow">Transformar</span> Sua TI?
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Pare de perder tempo com problemas técnicos. 
            <br />
            <strong>Fale agora com nosso especialista e descubra como podemos ajudar.</strong>
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-white/90">
                <benefit.icon className="h-5 w-5 text-trust-glow" />
                <span className="font-medium text-sm md:text-base">{benefit.text}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <WhatsAppButton 
              className="text-xl px-12 py-5 hover:scale-110"
              message="Olá! Quero agendar um diagnóstico gratuito da TI da minha empresa. Quando podemos conversar?"
            />
            
            <p className="text-white/70 text-sm">
              ⚡ <strong>Atendimento imediato</strong> • 📱 Resposta garantida • 🆓 Consultoria sem custo
            </p>
          </div>

          <div className="mt-12 p-6 bg-white/10 rounded-xl border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-3">🎯 O que você ganha com nossa consultoria:</h3>
            <div className="grid md:grid-cols-2 gap-2 text-left text-sm text-white/90">
              <div>✅ Análise completa da sua infraestrutura</div>
              <div>✅ Identificação de vulnerabilidades</div>
              <div>✅ Plano personalizado de melhorias</div>
              <div>✅ Orçamento sem compromisso</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;