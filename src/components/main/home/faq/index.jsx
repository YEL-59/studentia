import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import faqBg from "../../../../assets/faq-bg.png";

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
    <section className="flex items-center justify-center bg-[#fff] dark:bg-[#070622] py-10 md:py-20 overflow-hidden px-4">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 relative">
        {/* Left Text Area */}
        <div className="text-white space-y-6 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-400 max-w-md">
            Got Questions? We have you covered. We are always here to provide
            full support and clear any doubts that you might have.
          </p>

          <div className="relative w-full max-w-md border rounded-[10px] border-[#36393B] bg-[#13152e] mt-10">
            <Input
              placeholder="Have another questions?"
              className="bg-[#fff] dark:bg-[#13152e] text-white border-none pr-28 pl-5 py-5 sm:py-6 md:py-7 placeholder:font-medium placeholder:text-[#BCBCBC] placeholder:text-[17px]"
            />
            <Button
              className="absolute right-4 top-1/2 -translate-y-1/2 px-4 bg-[#7b2cbf] hover:bg-[#9d4edd] text-white h-9 text-xs sm:text-sm rounded-full cursor-pointer"
              size="sm"
            >
              Ask Question
            </Button>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div
          className="relative space-y-4 z-10 bg-cover"
          style={{
            backgroundImage: `url(${faqBg})`,
          }}
        >
          <Accordion
            type="single"
            collapsible
            defaultValue={`faq-${faqData[0].index}`}
            className="w-full space-y-2 "
          >
            {faqData.map((item) => (
              <AccordionItem
                key={`faq-${item.index}`}
                value={`faq-${item.index}`}
                className="border border-[#433c61] rounded-lg bg-gradient-to-br from-[#2B2B5C]/30 to-[#1A1A3C]/30 backdrop-blur-[10px]"
              >
                <AccordionTrigger className="text-white text-sm font-medium px-4 py-4 hover:no-underline font-Space [&>svg]:text-white">
                  {item.question}
                </AccordionTrigger>

                {item.answer && (
                  <AccordionContent className="text-[#BCBCBC] text-sm px-4 pb-4 whitespace-pre-line">
                    <div className="w-[95%] mx-auto border-t border-white/10 mb-4" />
                    <span className="font-Space">{item.answer}</span>
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
