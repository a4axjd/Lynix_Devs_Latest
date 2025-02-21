
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";

const posts = [
  {
    title: "The Future of Web Development",
    category: "Development",
    date: "March 15, 2024",
    excerpt: "Exploring the latest trends in web development and what's coming next.",
    image: "https://source.unsplash.com/random/800x600?coding"
  },
  {
    title: "SEO Strategies for 2024",
    category: "Digital Marketing",
    date: "March 10, 2024",
    excerpt: "Essential SEO tactics to improve your website's visibility.",
    image: "https://source.unsplash.com/random/800x600?seo"
  },
  {
    title: "Content Creation Tips",
    category: "Content",
    date: "March 5, 2024",
    excerpt: "How to create engaging content that resonates with your audience.",
    image: "https://source.unsplash.com/random/800x600?writing"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl font-bold text-center mb-16 animate-fade-up">Latest Insights</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={post.title} className="overflow-hidden animate-fade-up" style={{ animationDelay: `${0.2 * index}s` }}>
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-brand-purple">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600">{post.excerpt}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
