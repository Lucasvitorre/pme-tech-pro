import { 
  Bot, 
  Workflow, 
  Database, 
  FileText, 
  Mail, 
  Calendar,
  BarChart3,
  Zap,
  Code
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import WhatsAppButton from "./WhatsAppButton";

const AutomationSection = () => {
  const automationTypes = [
    {
      icon: Bot,
      title: "Automação com Python",
      description: "Scripts personalizados para processos específicos do seu negócio.",
      examples: "Relatórios automáticos, integração de sistemas, processamento de dados"
    },
    {
      icon: Workflow,
      title: "Workflows com n8n",
      description: "Automação visual de processos sem código complexo.",
      examples: "Integração entre aplicativos, notificações, sincronização de dados"
    },
    {
      icon: Database,
      title: "Integração de Sistemas",
      description: "Conecte diferentes plataformas e bancos de dados automaticamente.",
      examples: "ERP, CRM, planilhas, sistemas de vendas"
    },
    {
      icon: FileText,
      title: "Processamento de Documentos",
      description: "Automatize a criação, leitura e organização de documentos.",
      examples: "Contratos, faturas, relatórios, propostas comerciais"
    },
    {
      icon: Mail,
      title: "Automação de E-mails",
      description: "Envio inteligente e personalizado de comunicações.",
      examples: "Follow-ups, newsletters, confirmações, lembretes"
    },
    {
      icon: BarChart3,
      title: "Dashboards e Relatórios",
      description: "Visualização automática de dados e métricas do negócio.",
      examples: "KPIs, vendas, estoque, performance financeira"
    }
  ];

  const AutomationCard = ({ icon: Icon, title, description, examples }: any) => (
    <Card className="h-full hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="text-center">
        <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
          <Icon className="w-7 h-7 text-accent" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
        <div className="bg-accent/5 px-4 py-3 rounded-lg border border-accent/20">
          <p className="text-sm font-medium text-muted-foreground mb-1">Exemplos:</p>
          <span className="text-sm text-accent">
            {examples}
          </span>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Automações que <span className="text-accent">Transformam Processos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Elimine tarefas repetitivas e ganhe tempo para focar no que realmente importa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {automationTypes.map((automation, index) => (
            <AutomationCard key={index} {...automation} />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-card border rounded-lg p-8 max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-accent mr-3" />
              <h3 className="text-2xl font-bold text-foreground">Tecnologias Utilizadas</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Code className="w-12 h-12 text-accent mb-2" />
                <h4 className="font-semibold text-foreground">Python</h4>
                <p className="text-sm text-muted-foreground">Scripts robustos e personalizados</p>
              </div>
              <div className="flex flex-col items-center">
                <Workflow className="w-12 h-12 text-accent mb-2" />
                <h4 className="font-semibold text-foreground">n8n</h4>
                <p className="text-sm text-muted-foreground">Automação visual low-code</p>
              </div>
              <div className="flex flex-col items-center">
                <Database className="w-12 h-12 text-accent mb-2" />
                <h4 className="font-semibold text-foreground">APIs & Integrações</h4>
                <p className="text-sm text-muted-foreground">Conectamos qualquer sistema</p>
              </div>
            </div>
          </div>

          <WhatsAppButton 
            className="text-lg px-10 py-4"
            message="Olá! Tenho interesse em automatizar processos na minha empresa. Podem me ajudar a identificar oportunidades?"
          />
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;