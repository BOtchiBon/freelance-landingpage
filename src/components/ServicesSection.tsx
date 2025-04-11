
import { Code, PenTool, ShoppingCart, Search, Smartphone, BarChart } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    title: "Animation & Design",
    description: "Stunning visuals that capture attention and communicate your brand story effectively.",
    icon: <PenTool className="h-8 w-8 text-freeness-purple" />,
    bgClass: "bg-freeness-purple-soft/30",
  },
  {
    title: "eCommerce",
    description: "End-to-end online store development with seamless shopping experiences.",
    icon: <ShoppingCart className="h-8 w-8 text-freeness-purple-dark" />,
    bgClass: "bg-freeness-blue-soft/30",
  },
  {
    title: "SEO & Marketing",
    description: "Data-driven strategies that boost visibility and drive qualified traffic.",
    icon: <Search className="h-8 w-8 text-freeness-blue" />,
    bgClass: "bg-freeness-peach-soft/30",
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform apps that deliver exceptional user experiences.",
    icon: <Smartphone className="h-8 w-8 text-freeness-purple" />,
    bgClass: "bg-freeness-purple-soft/30",
  },
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies.",
    icon: <Code className="h-8 w-8 text-freeness-purple-dark" />,
    bgClass: "bg-freeness-blue-soft/30",
  },
  {
    title: "Data Analysis",
    description: "Transform raw data into actionable insights and business intelligence.",
    icon: <BarChart className="h-8 w-8 text-freeness-blue" />,
    bgClass: "bg-freeness-peach-soft/30",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-freeness-purple to-freeness-blue bg-clip-text text-transparent">
            Services That Drive Growth
          </h2>
          <p className="text-lg text-gray-700">
            Find skilled Tunisian professionals across all digital specialties to help your business thrive in the modern economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`hover-lift rounded-xl overflow-hidden border-none shadow-sm ${service.bgClass}`}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-lg bg-white/70 backdrop-blur-sm">
                    {service.icon}
                  </div>
                  <span className="text-xs font-medium text-gray-500 bg-white/50 px-2 py-1 rounded-full">
                    Popular
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
