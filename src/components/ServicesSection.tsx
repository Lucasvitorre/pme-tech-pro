import { 
  Headphones, 
  Wifi, 
  Settings, 
  Shield, 
  Cloud, 
  Lock,
  Globe,
  Star,
  Mail
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import WhatsAppButton from "./WhatsAppButton";

const ServicesSection = () => {
  const supportServices = [
    {
      icon: Headphones,
      title: "Suporte Remoto e Presencial",
      description: "Atendimento rápido com SLA definido para PCs, notebooks e servidores.",
      benefit: "Operação sempre funcionando"
    },
    {
      icon: Wifi,
      title: "Gerenciamento de Redes",
      description: "Configuração e otimização de Wi-Fi, cabeamento e switches.",
      benefit: "Internet estável e rápida"
    },
    {
      icon: Settings,
      title: "Manutenção Preventiva",
      description: "Auditoria regular de hardware e software para evitar falhas.",
      benefit: "Redução de custos com emergências"
    }
  ];

  const securityServices = [
    {
      icon: Cloud,
      title: "Backup em Nuvem Automático",
      description: "Proteção automática contra perda de dados, ransomware e desastres.",
      benefit: "Recuperação garantida de dados"
    },
    {
      icon: Shield,
      title: "Segurança de Endpoint (EDR)",
      description: "Proteção centralizada contra vírus, malware e ameaças avançadas.",
      benefit: "Prevenção total de ataques"
    },
    {
      icon: Lock,
      title: "Filtros e Firewalls",
      description: "Bloqueio de acesso indevido e proteção completa da rede.",
      benefit: "Rede segura e produtiva"
    }
  ];

  const automationServices = [
    {
      icon: Settings,
      title: "Automação de Processos",
      description: "Desenvolvimento de scripts e workflows para automatizar tarefas repetitivas.",
      benefit: "Redução de trabalho manual"
    },
    {
      icon: Star,
      title: "Google Meu Negócio",
      description: "Configuração completa para aparecer nas buscas locais do Google.",
      benefit: "Atração de clientes próximos"
    },
    {
      icon: Mail,
      title: "E-mail Profissional",
      description: "Migração para Google Workspace ou Microsoft 365 com domínio próprio.",
      benefit: "Comunicação profissional e segura"
    }
  ];

  const ServiceCard = ({ icon: Icon, title, description, benefit }: any) => (
    <Card className="h-full hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="text-center">
        <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
          <Icon className="w-7 h-7 text-accent" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
        <div className="bg-success/5 px-4 py-2 rounded-lg border border-success/20">
          <span className="text-sm font-semibold text-success">
            ✅ {benefit}
          </span>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="py-20">
      {/* Infrastructure Section */}
      <section className="mb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Infraestrutura de TI que <span className="text-accent">Não Te Deixa na Mão</span>
          </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Base sólida e confiável para sua empresa funcionar sem surpresas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {supportServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-gradient-subtle mb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Segurança Digital <span className="text-success">Nível Empresarial</span>
          </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proteja seus dados e mantenha sua empresa blindada contra ameaças
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {securityServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Tecnologia para Fazer Seu Negócio <span className="text-accent">Acelerar</span>
          </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Automatize processos e ganhe presença digital profissional
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {automationServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <WhatsAppButton 
              className="text-lg px-10 py-4"
              message="Olá! Quero conhecer mais sobre os serviços de TI. Qual seria o melhor pacote para minha empresa?"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;