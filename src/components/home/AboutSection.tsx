
import { Users, Calendar, CheckCircle, Star } from "lucide-react";

const stats = [
  { number: "150+", label: "Projects Completed", icon: CheckCircle },
  { number: "50+", label: "Happy Clients", icon: Users },
  { number: "5+", label: "Years Experience", icon: Calendar },
  { number: "4.9", label: "Average Rating", icon: Star },
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-brand-light to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gradient">About LynixDevs</h2>
          <p className="text-lg text-gray-600">
            We're a team of passionate digital creators, developers, and marketers dedicated to helping businesses thrive in the digital age. With our comprehensive approach, we turn your digital vision into reality.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center animate-fade-up hover-scale p-6 rounded-lg glass-card" style={{ animationDelay: `${0.2 * index}s` }}>
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-brand-purple" />
              <h3 className="text-3xl font-bold text-brand-purple">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
