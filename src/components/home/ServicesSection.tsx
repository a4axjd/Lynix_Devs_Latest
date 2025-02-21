
import { CodeIcon, Globe, BarChart, PenTool, MessageSquare, Store, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: CodeIcon,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies",
  },
  {
    icon: Globe,
    title: "Software Development",
    description: "Scalable software solutions tailored to your business needs",
  },
  {
    icon: BarChart,
    title: "Digital Marketing & SEO",
    description: "Data-driven strategies to increase your online presence",
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Engaging content that tells your brand's story",
  },
  {
    icon: MessageSquare,
    title: "Social Media",
    description: "Strategic social media management and growth",
  },
  {
    icon: Store,
    title: "Online Store",
    description: "Custom e-commerce solutions to help your business sell online",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-light via-white to-brand-light relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gradient">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="group p-6 glass-card hover:shadow-lg transition-all duration-300 animate-fade-up hover-scale" style={{ animationDelay: `${0.2 * index}s` }}>
              <service.icon className="h-12 w-12 text-brand-purple mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Button variant="ghost" className="group-hover:translate-x-2 transition-transform text-brand-purple hover:text-brand-purple/90">
                Learn More <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
