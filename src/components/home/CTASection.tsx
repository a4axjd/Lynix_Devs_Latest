
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const CTASection = () => {
  const { toast } = useToast();

  const handleConsultationSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Request Received!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
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
  );
};

export default CTASection;
