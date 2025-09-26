import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Fixed WhatsApp Button */}
      <WhatsAppButton variant="fixed" />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Problems Section */}
      <ProblemsSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Final CTA Section */}
      <FinalCTASection />
    </div>
  );
};

export default Index;