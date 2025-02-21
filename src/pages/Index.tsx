
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CodeIcon,
  BarChart,
  PenTool,
  Globe,
  MessageSquare,
  ArrowRight,
  Star,
  Users,
  Calendar,
  CheckCircle,
  ChevronRight
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

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

const stats = [
  { number: "150+", label: "Projects Completed", icon: CheckCircle },
  { number: "50+", label: "Happy Clients", icon: Users },
  { number: "5+", label: "Years Experience", icon: Calendar },
  { number: "4.9", label: "Average Rating", icon: Star },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "LynixDevs transformed our digital presence completely. Their team's expertise in both development and marketing gave us the edge we needed.",
    image: "https://source.unsplash.com/random/100x100?portrait=1"
  },
  {
    name: "Michael Chen",
    role: "Founder, GrowthX",
    content: "Working with LynixDevs was a game-changer for our startup. They delivered beyond our expectations and were always proactive with solutions.",
    image: "https://source.unsplash.com/random/100x100?portrait=2"
  },
  {
    name: "Emily Parker",
    role: "Marketing Director, InnovateCo",
    content: "The team's ability to blend creative design with technical excellence is remarkable. They're truly a one-stop solution for digital success.",
    image: "https://source.unsplash.com/random/100x100?portrait=3"
  }
];

const technologies = [
  { name: "React", description: "For building interactive UIs" },
  { name: "Next.js", description: "For server-side rendering and static generation" },
  { name: "TypeScript", description: "For type-safe code" },
  { name: "Tailwind CSS", description: "For rapid UI development" },
  { name: "Node.js", description: "For scalable backend solutions" },
  { name: "PostgreSQL", description: "For reliable data storage" },
];

const faqs = [
  {
    question: "Why choose LynixDevs?",
    answer: "We offer comprehensive digital solutions under one roof, combining technical expertise with creative excellence. Our proven track record and client-first approach ensure your project's success."
  },
  {
    question: "How do you handle projects?",
    answer: "We follow an agile methodology with regular client communication. Each project gets a dedicated team and project manager, ensuring efficient delivery and transparent progress updates."
  },
  {
    question: "What's your typical timeline?",
    answer: "Project timelines vary based on scope and complexity. We provide detailed timelines during initial consultations and stick to agreed-upon deadlines."
  }
];

const Index = () => {
  const { toast } = useToast();

  const handleConsultationSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Request Received!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-brand-light via-white to-brand-light">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 py-32 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-7xl font-bold text-brand-dark animate-fade-up leading-tight">
              Your Digital Growth Partner
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
              We help startups and organizations establish their digital presence with comprehensive web, software, and marketing solutions.
            </p>
            <div className="mt-10 flex justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg">
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">About LynixDevs</h2>
            <p className="text-lg text-gray-600">
              We're a team of passionate digital creators, developers, and marketers dedicated to helping businesses thrive in the digital age. With our comprehensive approach, we turn your digital vision into reality.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center animate-fade-up" style={{ animationDelay: `${0.2 * index}s` }}>
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-brand-purple" />
                <h3 className="text-3xl font-bold text-brand-dark">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="group p-6 backdrop-blur-sm bg-white/50 hover:shadow-lg transition-all duration-300 animate-fade-up" style={{ animationDelay: `${0.2 * index}s` }}>
                <service.icon className="h-12 w-12 text-brand-purple mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button variant="ghost" className="group-hover:translate-x-2 transition-transform">
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="p-6 animate-fade-up" style={{ animationDelay: `${0.2 * index}s` }}>
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
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
                <h4 className="font-semibold mb-2">{tech.name}</h4>
                <div className="absolute inset-0 bg-brand-dark text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center p-4">
                  <p className="text-sm">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how we can help you achieve your digital goals.
            </p>
            <Card className="p-6">
              <form onSubmit={handleConsultationSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" required />
                  <Input type="email" placeholder="Your Email" required />
                </div>
                <Textarea placeholder="Tell us about your project" className="min-h-[100px]" required />
                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Request Free Consultation
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;
