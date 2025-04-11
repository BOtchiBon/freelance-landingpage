
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-freeness-blue/10 to-freeness-cyan-soft/20 -z-10"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-freeness-blue/10 rounded-full mix-blend-multiply blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-freeness-cyan-soft/20 rounded-full mix-blend-multiply blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-freeness-blue-dark via-freeness-blue to-freeness-cyan bg-clip-text text-transparent">
            Get Started with Freeness Today
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Join the growing community of Tunisian freelancers and clients building a stronger digital economy together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-freeness-blue hover:bg-freeness-blue-dark text-white px-8 py-6 text-lg">
              Create Your Account
            </Button>
            <Button variant="outline" className="border-freeness-blue text-freeness-blue hover:bg-freeness-blue-soft/10 px-8 py-6 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
