
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DualCTASection from "@/components/DualCTASection";
import JobsSection from "@/components/JobsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DualCTASection />
        <JobsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
