
import { Code2, Globe2, FileCode2, Palette, Server, Database } from "lucide-react";

const technologies = [
  { 
    name: "React", 
    description: "For building interactive UIs",
    icon: Code2,
    color: "#61DAFB"
  },
  { 
    name: "Next.js", 
    description: "For server-side rendering and static generation",
    icon: Globe2,
    color: "#000000"
  },
  { 
    name: "TypeScript", 
    description: "For type-safe code",
    icon: FileCode2,
    color: "#3178C6"
  },
  { 
    name: "Tailwind CSS", 
    description: "For rapid UI development",
    icon: Palette,
    color: "#06B6D4"
  },
  { 
    name: "Node.js", 
    description: "For scalable backend solutions",
    icon: Server,
    color: "#339933"
  },
  { 
    name: "PostgreSQL", 
    description: "For reliable data storage",
    icon: Database,
    color: "#4169E1"
  },
];

const TechnologySection = () => {
  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Our Technology Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up text-center"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex flex-col items-center">
                <tech.icon className="w-12 h-12 mb-4" style={{ color: tech.color }} />
                <h4 className="font-semibold mb-2">{tech.name}</h4>
              </div>
              <div className="absolute inset-0 bg-brand-dark text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center p-4">
                <p className="text-sm">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
