import chatIcon from "@/assets/icons/chat.svg";
import flashcardIcons from "@/assets/icons/flashcards.svg";
import noteIcon from "@/assets/icons/note-taking.svg";
import pdfScanIcon from "@/assets/icons/pdf-scan-icon.svg";
import podcastIcon from "@/assets/icons/podcast-icon.svg";
import quizIcon from "@/assets/icons/quiz-icon.svg";
import quizYourselfIcon from "@/assets/icons/quiz-yourself.svg";
import summaryIcon from "@/assets/icons/summary.svg";
import Chat from "@/components/reverse-tools/chat";
import Summary from "@/components/reverse-tools/summary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import ChatSystem from "./revision-tools/chat-system";
import NotebookApp from "@/components/reverse-tools/note-taking";
import FlashcardApp from "@/components/reverse-tools/flash-card";

import chatIcon from "@/assets/icons/chat.svg";
import flashcardIcons from "@/assets/icons/flashcards.svg";
import noteIcon from "@/assets/icons/note-taking.svg";
import pdfScanIcon from "@/assets/icons/pdf-scan-icon.svg";
import podcastIcon from "@/assets/icons/podcast-icon.svg";
import quizIcon from "@/assets/icons/quiz-icon.svg";
import quizYourselfIcon from "@/assets/icons/quiz-yourself.svg";
import summaryIcon from "@/assets/icons/summary.svg";
import Chat from "@/components/reverse-tools/chat";
import PdfReader from "@/components/reverse-tools/pdfreader";
import Quiz from "@/components/reverse-tools/quiz";
import Summary from "@/components/reverse-tools/summary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "@/lib/pdfWorkerConfig.js";
function RevisionTools() {
  const [isOpen, setIsOpen] = useState(false);
  const mainTabs = [
    {
      value: "pdf-scan",
      icon: pdfScanIcon,
      title: "AI PDF Scan",
    },
    {
      value: "ai-quiz",
      icon: quizIcon,
      title: "AI Quiz",
    },
    {
      value: "podcast",
      icon: podcastIcon,
      title: "AI Podcast",
    },
  ];

  const sideTabs = [
    {
      value: "chat",
      icon: chatIcon,
      title: "Chat",
    },
    {
      value: "note-taking",
      icon: noteIcon,
      title: "Note-taking",
    },
    {
      value: "quiz-yourself",
      icon: quizYourselfIcon,
      title: "Quiz Yourself",
    },
    {
      value: "summary",
      icon: summaryIcon,
      title: "Summary",
    },
    {
      value: "flashcards",
      icon: flashcardIcons,
      title: "Flashcards",
    },
  ];

  const handleOpenChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex gap-5 justify-between min-h-[calc(100svh-80px)] w-full">
      <div className=" w-1/2 min-h-[calc(100svh-80px)]">
        {/* Main Tabs */}
        <Tabs defaultValue="pdf-scan" className="">
          <div className="flex ml-16 mt-4">
            <TabsList className="bg-[#10122e] px-6 py-9 border border-[#D24AC966] rounded-[16px] flex gap-2">
              {mainTabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="cursor-pointer data-[state=active]:bg-gradient-to-b from-primary to-secondary data-[state=active]:text-white px-5 py-6 text-primary border border-[#D24AC966] rounded-[12px] flex items-center gap-2"
                >
                  <img src={tab.icon} alt="icon" />
                  <p className="text-xl font-medium leading-[164%] capitalize text-[#F9F9F9]">
                    {tab.title}
                  </p>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* {mainTabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              {tab?.value}
            </TabsContent>
          ))} */}
          <TabsContent
            className="mt-4 borderborder-[#D24AC966] flex flex-col gap-6 rounded-[16px] bg-[#1C202B] shadow-[2px_11px_40px_0px_rgba(114,75,150,0.32)] h-full px-[22px] py-[32px]"
            value="pdf-scan"
          >
            <PdfReader />
          </TabsContent>
        </Tabs>
        <div></div>
      </div>
      {/* chat tab */}
      <Tabs defaultValue="chat" className="w-1/2 flex flex-col gap-5 h-full">
        <TabsList className="flex flex-wrap gap-6 p-0 rounded-[20px] bg-[#1C202B] shadow-[2px_11px_40px_0px_rgba(114,75,150,0.32)] py-5 px-6 w-full h-full">
          {sideTabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="cursor-pointer data-[state=active]:bg-gradient-to-b from-[#7A43A4] to-[#6049BC] px-7 py-[14px] flex items-center gap-2 rounded-[20px] border border-[#7A43A4] w-max"
            >
              <img src={tab.icon} alt="icon" />
              <p className="text-[#F9F9F9] text-base font-medium leading-[164%]">
                {tab.title}
              </p>
            </TabsTrigger>
          ))}
        </TabsList>
        {/* chat sub sidebars */}
        {isOpen ? (
          <TabsContent
            className="mt-4 borderborder-[#D24AC966] flex justify-between w-full rounded-[16px] bg-[#1C202B] shadow-[2px_11px_40px_0px_rgba(114,75,150,0.32)] h-full px-[22px] py-[32px]"
            value="chat"
          >
            <ChatSystem />
          </TabsContent>
        ) : (
          <TabsContent
            className="mt-4 borderborder-[#D24AC966] flex items-center justify-center rounded-[16px] bg-[#1C202B] shadow-[2px_11px_40px_0px_rgba(114,75,150,0.32)] h-full px-[90px] py-[139px]"
            value="chat"
          >
            :
            <Chat handleOpenChat={handleOpenChat} />
          </TabsContent>
        )}
        {/* summary sub sidebars */}
        <TabsContent
          className="mt-4 borderborder-[#D24AC966] flex flex-col gap-6 rounded-[16px] bg-[#1C202B] shadow-[2px_11px_40px_0px_rgba(114,75,150,0.32)] h-full px-[22px] py-[32px]"
          value="summary"
        >
          <Summary />
        </TabsContent>

        {/* quize  sidebars */}
        <TabsContent
          className="mt-4 borderborder-[#D24AC966] flex flex-col gap-6 rounded-[16px] bg-[#1C202B] shadow-[2px_11px_40px_0px_rgba(114,75,150,0.32)] h-full px-[22px] py-[32px]"
          value="quiz-yourself"
        >
          <Quiz />
        </TabsContent>
        {/* note taking sub sidebars */}
        <TabsContent
          className="mt-4 borderborder-[#D24AC966] flex flex-col gap-6 rounded-[16px] shadow-[2px_11px_40px_0px_rgba(114,75,150,0.32)] bg-[#1C202B] h-full px-[22px] py-[32px]"
          value="note-taking"
        >
          <NotebookApp />
        </TabsContent>
        {/* flash card sub sidebars */}
        <TabsContent
          className="mt-4 borderborder-[#D24AC966] flex flex-col gap-6 rounded-[16px] shadow-[2px_11px_40px_0px_rgba(114,75,150,0.32)] bg-[#1C202B] h-full px-[22px] py-[32px]"
          value="flashcards"
        >
          <FlashcardApp />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default RevisionTools;
