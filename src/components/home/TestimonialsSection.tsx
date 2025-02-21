
import { Card } from "@/components/ui/card";

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

const TestimonialsSection = () => {
  return (
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
  );
};

export default TestimonialsSection;
