
import { Code, PenTool, ShoppingCart, Search, Smartphone, BarChart } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    title: "Animation & Design",
    description: "Stunning visuals that capture attention and communicate your brand story effectively.",
    icon: <PenTool className="h-8 w-8 text-freeness-sky" />,
    bgClass: "bg-freeness-lavender-soft",
  },
  {
    title: "eCommerce",
    description: "End-to-end online store development with seamless shopping experiences.",
    icon: <ShoppingCart className="h-8 w-8 text-freeness-blue" />,
    bgClass: "bg-freeness-blue-soft",
  },
  {
    title: "SEO & Marketing",
    description: "Data-driven strategies that boost visibility and drive qualified traffic.",
    icon: <Search className="h-8 w-8 text-freeness-cyan" />,
    bgClass: "bg-freeness-cyan-soft",
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform apps that deliver exceptional user experiences.",
    icon: <Smartphone className="h-8 w-8 text-freeness-sky" />,
    bgClass: "bg-freeness-lavender-soft",
  },
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies.",
    icon: <Code className="h-8 w-8 text-freeness-blue" />,
    bgClass: "bg-freeness-blue-soft",
  },
  {
    title: "Data Analysis",
    description: "Transform raw data into actionable insights and business intelligence.",
    icon: <BarChart className="h-8 w-8 text-freeness-cyan" />,
    bgClass: "bg-freeness-cyan-soft",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-freeness-neutral">
            Services That Drive Growth
          </h2>
          <p className="text-lg text-freeness-gray">
            Find skilled Tunisian professionals across all digital specialties to help your business thrive in the modern economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`hover-lift rounded-xl overflow-hidden border border-gray-100 shadow-sm ${service.bgClass}`}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-lg glass-effect">
                    {service.icon}
                  </div>
                  <span className="text-xs font-medium text-freeness-gray bg-white/70 px-2 py-1 rounded-full">
                    Popular
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-freeness-neutral">{service.title}</h3>
                <p className="text-freeness-gray">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
