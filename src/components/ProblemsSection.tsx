import { AlertTriangle, Clock, Shield } from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Sistema Lento e Travando",
      description: "Computadores lentos prejudicam a produtividade e geram frustração na equipe.",
      impact: "Até 40% de perda de produtividade"
    },
    {
      icon: AlertTriangle,
      title: "Vírus e Perda de Dados",
      description: "Ameaças digitais podem destruir anos de trabalho em poucos minutos.",
      impact: "Prejuízo médio de R$ 50.000"
    },
    {
      icon: Shield,
      title: "Suporte Técnico Demorado",
      description: "Ficar horas esperando solução enquanto o negócio para é inaceitável.",
      impact: "Cada hora parada custa caro"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Cansado de <span className="text-destructive">Apagar Incêndios</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Problemas de TI não resolvidos custam tempo, dinheiro e oportunidades. 
            Conheça os 3 principais vilões da produtividade empresarial:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
                  <problem.icon className="w-8 h-8 text-destructive" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground">
                  {problem.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
                
                <div className="bg-destructive/5 px-4 py-2 rounded-lg border border-destructive/20">
                  <span className="text-sm font-semibold text-destructive">
                    💰 {problem.impact}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            <strong className="text-foreground">Estes problemas te soam familiar?</strong> Você não está sozinho.
          </p>
          <p className="text-accent font-semibold">
            👇 Veja como resolver de vez todos estes problemas
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;