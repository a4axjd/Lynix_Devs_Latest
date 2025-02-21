
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CodeIcon, BarChart, PenTool, Globe, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";

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
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-dark animate-fade-up">
            Your Digital Growth Partner
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            We help startups and organizations establish their digital presence with comprehensive web, software, and marketing solutions.
          </p>
          <div className="mt-10 flex justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg">
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="p-6 backdrop-blur-sm bg-white/50 hover:shadow-lg transition-all duration-300 animate-fade-up" style={{ animationDelay: `${0.2 * index}s` }}>
                <service.icon className="h-12 w-12 text-brand-purple mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
