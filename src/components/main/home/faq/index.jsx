import Faqbg from "@/assets/svg/faqbg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is Student-IA and how does it work?",
    answer:
      "An intelligent educational assistant, Student-IA is a digital tool that helps students solve problems, write content, and better understand their courses.\n\nA personalized guide: It adapts to your needs, your level of study, and your academic goals.\n\nA time-saver: It provides quick and accurate answers, whether it’s for an exercise, research, or revision.",
  },
  {
    question: "How can Student-IA help me improve my academic results?",
    answer: "",
  },
  {
    question:
      "Can I customize the AI-generated content so it’s closer to what I want to say?",
    answer: "",
  },
  {
    question: "Is there a free trial available for Student-IA?",
    answer: "",
  },
  {
    question: "What types of content can I create with Student-IA?",
    answer: "",
  },
];

export default function FAQSection() {
  return (
    <section className=" flex items-center justify-center bg-gradient-to-r from-[#0B0B2C] to-[#1B1B3A] py-30 overflow-hidden">
      <div className="w-full container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 relative">
        {/* Left Text Area */}
        <div className="text-white space-y-4 relative z-10">
          <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
          <p className="text-sm text-gray-400">
            Got Questions? We have you covered. We are always here to provide
            full support and clear any doubts that you might have
          </p>
          <button className="mt-4 inline-block bg-[#6E55FF] text-white px-4 py-2 rounded-md text-sm shadow hover:bg-[#7C64FF] transition">
            Ask Question
          </button>
        </div>

        {/* Accordion + BG */}
        <div className="relative space-y-4 z-10">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-white/10 rounded-lg bg-gradient-to-br from-[#2B2B5C]/30 to-[#1A1A3C]/30 backdrop-blur-md"
              >
                <AccordionTrigger className="text-white text-sm font-medium px-4 py-3 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                {item.answer && (
                  <AccordionContent className="text-gray-300 text-sm px-4 pb-4 whitespace-pre-line">
                    {item.answer}
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* SVG Background behind the right column */}
        <div className="absolute inset-0 flex justify-end items-center pointer-events-none ">
          <div className="translate-x-56">
            <Faqbg />
          </div>
        </div>
      </div>
    </section>
  );
}
