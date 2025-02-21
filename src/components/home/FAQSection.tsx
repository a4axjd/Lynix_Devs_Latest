
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const FAQSection = () => {
  return (
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
  );
};

export default FAQSection;
