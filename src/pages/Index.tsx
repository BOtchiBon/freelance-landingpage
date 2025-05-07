import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DualCTASection from "@/components/DualCTASection";
import JobsSection from "@/components/JobsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <div data-aos="fade-up">
          <HeroSection />
        </div>
        <div data-aos="fade-up">
          <AboutSection />
        </div>
        <div data-aos="fade-up">
          <ServicesSection />
        </div>
        <div data-aos="fade-up">
          <DualCTASection />
        </div>
        <div data-aos="fade-up">
          <JobsSection />
        </div>
        <div data-aos="fade-up">
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
