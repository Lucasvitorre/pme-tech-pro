import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      business: "Restaurante Sabor da Casa",
      text: "Depois que contrataram o suporte, não tive mais dor de cabeça com computador lento ou sistema travando. Agora o foco é 100% no atendimento aos clientes.",
      rating: 5
    },
    {
      name: "Dra. Marina Costa",
      business: "Clínica Odontológica",
      text: "O backup em nuvem salvou nossa clínica quando o computador pifou. Todos os dados dos pacientes estavam protegidos. Valeu cada centavo investido em segurança.",
      rating: 5
    },
    {
      name: "Roberto Ferreira",
      business: "Escritório de Advocacia",
      text: "Criaram nosso site profissional e configuraram os e-mails corporativos. A credibilidade da nossa banca aumentou muito com os clientes.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            O que Nossos <span className="text-success">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empresários que transformaram seus negócios com nossa tecnologia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-elevated transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-accent">{testimonial.business}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            <strong className="text-foreground">Mais de 150 empresas</strong> já confiam em nossos serviços
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;