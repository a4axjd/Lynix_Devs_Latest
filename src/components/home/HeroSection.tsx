
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-brand-purple/10 via-white to-brand-light">
      {/* Background SVG Patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Decorative SVGs */}
      <div className="absolute top-20 left-10 w-64 h-64 animate-fade-up opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#9b87f5"
            d="M44.9,-76.7C58.1,-69.8,68.9,-56.7,77.5,-42C86.1,-27.3,92.5,-11,90.8,4.4C89,19.8,79.1,34.3,67.6,45.9C56.1,57.5,43,66.2,28.5,72.8C14,79.4,-1.9,83.9,-17.8,81.6C-33.7,79.3,-49.5,70.2,-63.1,58C-76.7,45.8,-88,30.5,-91.1,13.3C-94.2,-3.8,-89.1,-22.9,-79.8,-38.6C-70.5,-54.3,-57,-66.7,-42.3,-72.8C-27.5,-78.9,-11.5,-78.7,2.6,-83.1C16.8,-87.4,31.7,-83.6,44.9,-76.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 w-96 h-96 animate-fade-up opacity-10" style={{ animationDelay: "0.2s" }}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#7E69AB"
            d="M39.5,-65.3C50.9,-56.3,59.7,-44.7,65.8,-31.5C71.9,-18.3,75.2,-3.5,73.7,10.8C72.1,25.1,65.6,38.9,55.7,49.4C45.8,59.9,32.4,67.1,17.7,71.5C3,75.8,-13,77.3,-27.4,73.2C-41.8,69.1,-54.5,59.4,-63.6,46.8C-72.7,34.2,-78.2,18.7,-78.9,3.1C-79.7,-12.5,-75.8,-28.3,-66.9,-40.4C-58,-52.5,-44.1,-61,-30.5,-68.5C-16.8,-76,-8.4,-82.6,3.2,-87.9C14.8,-93.2,29.5,-97.2,39.5,-65.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

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
