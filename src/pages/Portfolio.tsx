
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    image: "https://source.unsplash.com/random/800x600?website",
    description: "Custom e-commerce solution with advanced features",
  },
  {
    title: "SEO Optimization",
    category: "Digital Marketing",
    image: "https://source.unsplash.com/random/800x600?marketing",
    description: "Increased organic traffic by 200%",
  },
  {
    title: "Mobile App",
    category: "Software Development",
    image: "https://source.unsplash.com/random/800x600?app",
    description: "Cross-platform mobile application",
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl font-bold text-center mb-16 animate-fade-up">Our Work</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="overflow-hidden animate-fade-up" style={{ animationDelay: `${0.2 * index}s` }}>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-brand-purple font-medium">{project.category}</span>
                <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
