import Faqbg from "@/assets/svg/faqbg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const faqData = [
  {
    index: 1,
    question: "What is Student-IA and how does it work?",
    answer:
      "An intelligent educational assistant, Student-IA is a digital tool that helps students solve problems, write content, and better understand their courses.\n\nA personalized guide: It adapts to your needs, your level of study, and your academic goals.\n\nA time-saver: It provides quick and accurate answers, whether it’s for an exercise, research, or revision.",
  },
  {
    index: 2,
    question: "How can Student-IA help me improve my academic results?",
    answer:
      "intelligent educational assistant, Student-IA is a digital tool that helps students solve problems",
  },
  {
    index: 3,
    question:
      "Can I customize the AI-generated content so it’s closer to what I want to say?",
    answer:
      "intelligent educational assistant, Student-IA is a digital tool that helps students solve problems",
  },
  {
    index: 4,
    question: "Is there a free trial available for Student-IA?",
    answer:
      "intelligent educational assistant, Student-IA is a digital tool that helps students solve problems",
  },
  {
    index: 5,
    question: "What types of content can I create with Student-IA?",
    answer:
      "intelligent educational assistant, Student-IA is a digital tool that helps students solve problems",
  },
];

export default function FAQSection() {
  return (
    <section className=" flex items-center justify-center bg-[#070622] py-30 overflow-hidden">
      <div className="w-full container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 relative">
        {/* Left Text Area */}
        <div className="text-white space-y-4 relative z-10">
          <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
          <p className="text-sm text-gray-400">
            Got Questions? We have you covered. We are always here to provide
            full support and clear any doubts that you might have
          </p>
          <div className="relative w-full  md:w-80 border-2 border-[#36393B] rounded">
            <Input
              placeholder="Your email here"
              className="bg-[#070622] text-white placeholder:text-white/60 border-none pr-28 py-7"
            />
            <Button
              className="absolute right-1 top-1/2 -translate-y-1/2 px-4 bg-[#7b2cbf] hover:bg-[#9d4edd] text-white h-8 text-sm "
              size="sm"
            >
              Subscribe
            </Button>
          </div>
        </div>

        <div className="relative space-y-4 z-10">
          <Accordion
            type="single"
            collapsible
            defaultValue={`faq-${faqData[0].index}`}
            className="w-full space-y-2"
          >
            {faqData.map((item) => (
              <AccordionItem
                key={`faq-${item.index}`}
                value={`faq-${item.index}`}
                className="border border-[#36393B] rounded-lg bg-gradient-to-br from-[#2B2B5C]/30 to-[#1A1A3C]/30 backdrop-blur-md"
              >
                <AccordionTrigger className="text-white text-sm font-medium px-4 py-3 hover:no-underline ">
                  {item.question}
                </AccordionTrigger>

                {item.answer && (
                  <AccordionContent className="text-gray-300 text-sm px-4 pb-4 whitespace-pre-line ">
                    <div className="w-[95%] mx-auto border-t border-[#36393B] mb-4" />
                    {item.answer ? item.answer : "Answer coming soon."}
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
