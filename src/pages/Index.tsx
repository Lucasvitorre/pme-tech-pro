import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import ServicesSection from "@/components/ServicesSection";
import AutomationSection from "@/components/AutomationSection";
import FinalCTASection from "@/components/FinalCTASection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header with Theme Toggle */}
      <Header />
      
      {/* Fixed WhatsApp Button */}
      <WhatsAppButton variant="fixed" />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Problems Section */}
      <ProblemsSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Automation Section */}
      <AutomationSection />
      
      {/* Final CTA Section */}
      <FinalCTASection />
    </div>
  );
};

export default Index;