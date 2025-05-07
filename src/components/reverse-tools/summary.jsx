import React from 'react'
import summaryIcon from '@/assets/icons/summary-icon.svg';
import downArrow from '@/assets/icons/down-arrow.svg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';


function Summary() {
    const faqData = [
      {
        index: 1,
        question: 'What is Student-IA and how does it work?',
        answer:
          'An intelligent educational assistant, Student-IA is a digital tool that helps students solve problems, write content, and better understand their courses.\n\nA personalized guide: It adapts to your needs, your level of study, and your academic goals.\n\nA time-saver: It provides quick and accurate answers, whether it’s for an exercise, research, or revision.',
      },
      {
        index: 2,
        question: 'How can Student-IA help me improve my academic results?',
        answer:
          'intelligent educational assistant, Student-IA is a digital tool that helps students solve problems',
      },
      {
        index: 3,
        question:
          'Can I customize the AI-generated content so it’s closer to what I want to say?',
        answer:
          'intelligent educational assistant, Student-IA is a digital tool that helps students solve problems',
      },
      {
        index: 4,
        question: 'Is there a free trial available for Student-IA?',
        answer:
          'intelligent educational assistant, Student-IA is a digital tool that helps students solve problems',
      },
      {
        index: 5,
        question: 'What types of content can I create with Student-IA?',
        answer:
          'intelligent educational assistant, Student-IA is a digital tool that helps students solve problems',
      },
    ];
  return (
    <div className="px-[22px] py-[32px] flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <img src={summaryIcon} alt="icon" />
        <p className="text-2xl font-medium leading-[132%] tracking-[-0.48px]">
          Summary
        </p>
      </div>
      <div className="flex flex-col gap-6">
        {/* <div className="py-[32px] px-[22px] rounded-[16px] bg-[linear-gradient(180deg,rgba(122,67,164,0.3)_0%,rgba(96,73,188,0.17)_100%)]">
          <div className="flex items-center justify-between">
            <p className="text-lg font-medium leading-[132%] tracking-[-0.36px]">
              Page 1
            </p>
            <div className="bg-[] p-2 rounded-full bg-[var(--Card-Gredient,linear-gradient(180deg,rgba(122,67,164,0.3)_0%,rgba(96,73,188,0.17)_100%)] flex items-center justify-center">
              <img src={downArrow} alt="icon" className='w-5 h-5'/>
            </div>
          </div>
          <p className='text-xl font-medium leading-[132%] tracking-[-0.4px]'>Technique for Effective Explanations</p>
        </div> */}
        <div className="relative space-y-4 z-10">
          <Accordion
            type="single"
            collapsible
            // defaultValue={`faq-${faqData[0].index}`}
            className="w-full space-y-2"
          >
            {faqData.map((item) => (
              <AccordionItem
                key={`faq-${item.index}`}
                value={`faq-${item.index}`}
                className="border border-[#36393B] rounded-lg bg-gradient-to-br from-[#2B2B5C]/30 to-[#1A1A3C]/30 backdrop-blur-md"
              >
                <AccordionTrigger className="text-white text-sm font-medium px-4 py-3 hover:no-underline flex items-center justify-between gap-3">
                  <div className="flex flex-col gap-4">
                    <p className="text-lg font-medium leading-[132%] tracking-[-0.36px]">
                      Page {item.index}
                    </p>
                    <p className="text-xl font-medium leading-[132%] tracking-[-0.4px]">
                      {item.question}
                    </p>
                  </div>
                  {/* <img
                    src={downArrow}
                    alt="expand/collapse"
                    className="w-5 h-5 transition-transform duration-200 group-data-[state=open]:rotate-180"
                  /> */}
                </AccordionTrigger>

                {item.answer && (
                  <AccordionContent className="text-gray-300 text-sm px-4 pb-4 whitespace-pre-line ">
                    <div className="w-[95%] mx-auto border-t border-[#36393B] mb-4" />
                    {item.answer ? item.answer : 'Answer coming soon.'}
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-[13px]">
          <Button
            variant="none"
            className="basis-1/2 w-full text-base font-medium leading-[164%] capitalize rounded-[12px] bg-gradient-to-b from-[#7A43A4] to-[#6049BC] text-[#FFF] hover:none cursor-pointer px-10 py-6"
          >
            Previous
          </Button>
          <Button
            variant="none"
            className="basis-1/2 w-full text-base font-medium leading-[164%] capitalize rounded-[12px] text-gradient-to-b from-[#7A43A4] to-[#6049BC] hover:none px-10 cursor-pointer py-6 border border-[#7A43A4)]"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Summary