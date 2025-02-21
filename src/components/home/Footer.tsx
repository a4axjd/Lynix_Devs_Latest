
import { Link } from "react-router-dom";
import { CodeIcon, Globe, BarChart, PenTool, MessageSquare, Store } from "lucide-react";

const services = [
  {
    icon: CodeIcon,
    title: "Web Development",
  },
  {
    icon: Globe,
    title: "Software Development",
  },
  {
    icon: BarChart,
    title: "Digital Marketing & SEO",
  },
  {
    icon: PenTool,
    title: "Content Creation",
  },
  {
    icon: MessageSquare,
    title: "Social Media",
  },
  {
    icon: Store,
    title: "Online Store",
  },
];

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LynixDevs</h3>
            <p className="text-gray-400">
              Your partner in digital transformation
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map(service => (
                <li key={service.title}>
                  <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>hello@lynixdevs.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Tech Street, Digital City</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LynixDevs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
