
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-brand-purple/10 via-white to-brand-light">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 py-32 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold text-gradient leading-tight animate-fade-up">
            Your Digital Growth Partner
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto animate-fade-up opacity-90" style={{ animationDelay: "0.2s" }}>
            We help startups and organizations establish their digital presence with comprehensive web, software, and marketing solutions.
          </p>
          <div className="mt-10 flex justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg" className="bg-brand-purple hover:bg-brand-purple/90">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-brand-purple text-brand-purple hover:bg-brand-purple/10">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
