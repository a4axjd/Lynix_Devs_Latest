
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import type { PortfolioItem } from "@/types/portfolio";

const fetchPortfolioItems = async (): Promise<PortfolioItem[]> => {
  const querySnapshot = await getDocs(collection(db, "portfolio"));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt?.toDate() || new Date(),
  })) as PortfolioItem[];
};

const Portfolio = () => {
  const { data: projects = [], isLoading } = useQuery({
    queryKey: ['portfolio'],
    queryFn: fetchPortfolioItems,
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl font-bold text-center mb-16 animate-fade-up">Our Work</h1>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <Card key={index} className="overflow-hidden animate-pulse">
                <div className="w-full h-48 bg-gray-200" />
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-4" />
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />
                  <div className="h-4 bg-gray-200 rounded w-full" />
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.id} className="overflow-hidden animate-fade-up" style={{ animationDelay: `${0.2 * index}s` }}>
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
        )}
      </div>
    </div>
  );
};

export default Portfolio;
