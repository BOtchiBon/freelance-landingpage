
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      toast.success("Thank you for joining our waitlist!");
      setEmail("");
    } else {
      toast.error("Please enter a valid email address");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-freeness-blue/20 rounded-full mix-blend-multiply blur-3xl animate-float"></div>
        <div className="absolute bottom-10 -left-20 w-72 h-72 bg-freeness-cyan-soft/30 rounded-full mix-blend-multiply blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-freeness-sky-soft/20 rounded-full mix-blend-multiply blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-freeness-blue-dark via-freeness-blue to-freeness-cyan bg-clip-text text-transparent animate-fade-in">
            Building a peaceful platform for Tunisian Freeness
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Connect talented Tunisian freelancers with ambitious local clients in one seamless marketplace.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col md:flex-row gap-3 mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-md border-gray-300 focus:border-freeness-blue focus:ring-freeness-blue"
            />
            <Button 
              type="submit"
              className="bg-freeness-blue hover:bg-freeness-blue-dark text-white px-6"
            >
              Join the Movement
            </Button>
          </form>
          
          <div className="flex items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-freeness-blue-light flex items-center justify-center text-xs text-white">TF</div>
              <div className="w-8 h-8 rounded-full bg-freeness-cyan-soft flex items-center justify-center text-xs text-gray-700">JM</div>
              <div className="w-8 h-8 rounded-full bg-freeness-sky-soft flex items-center justify-center text-xs text-gray-700">SK</div>
            </div>
            <span className="text-sm text-gray-600">Join 120+ freelancers and clients</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-freeness-blue">
          <ArrowRight className="rotate-90" size={24} />
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
