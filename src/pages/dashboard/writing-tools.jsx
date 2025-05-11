import { useState } from "react";
import Aiwritergrid, { tools } from "@/components/dashboard/aiwritergrid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { useEffect } from "react";
import aiCodeIcon from '@/assets/icons/ai-code.svg';
import aiWriterIcon from '@/assets/icons/ai-writer.svg';
import articleWriterIcon from '@/assets/icons/article.svg';
import TopicGenerator from '@/components/dashboard/aiarticelwriter';
import AiCodeGenerator from '@/components/dashboard/aicode';

function WritingTools() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();
  const { activeTab } = useParams();
  const mainTabs = [
    {
      value: 'ai-writers',
      title: 'Ai Writer',
      icon: aiWriterIcon,
    },
    {
      value: 'article',
      title: 'Article Writer',
      icon: articleWriterIcon,
    },
    {
      value: 'ai-code',
      title: 'Ai Code',
      icon: aiCodeIcon,
    },
  ];
  console.log(activeTab);
  useEffect(() => {
    if (!activeTab) {
      navigate(`/dashboard/writing-tools/ai-writers`);
    }
  }, [activeTab]);

  const favoriteTools = tools.filter((tool) => favorites.includes(tool.title));

  return (
    <div>
      <Tabs value={activeTab} className="w-full">
        <div className="flex ml-16 mt-4">
          <TabsList className="bg-[#10122e] px-6 py-9 border border-[#D24AC966] rounded-[16px] flex gap-2">
            {mainTabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                onClick={() =>
                  navigate(`/dashboard/writing-tools/${tab.value}`)
                }
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
        <TabsContent
          className="mt-4 borderborder-[#D24AC966] flex flex-col gap-6 h-full px-[22px]"
          value={activeTab && 'ai-writers'}
        >
          <Tabs defaultValue="templates" className="w-full">
            <div className="flex ml-16 mt-4">
              <TabsList className="bg-[#10122e] px-4 py-7 border border-[#D24AC966] rounded-full flex gap-2 mb-5">
                <TabsTrigger
                  value="templates"
                  className="cursor-pointer data-[state=active]:bg-gradient-to-b from-primary to-secondary data-[state=active]:text-white px-6 py-4 text-primary border border-[#D24AC966] rounded-[12px]"
                >
                  Templates
                </TabsTrigger>
                <TabsTrigger
                  value="fav-templates"
                  className="cursor-pointer data-[state=active]:bg-gradient-to-b from-primary to-secondary data-[state=active]:text-white px-6 py-4 text-primary border border-[#D24AC966] rounded-[12px]"
                >
                  Favorite Templates
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="templates">
              <Aiwritergrid
                tools={tools}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            </TabsContent>

            <TabsContent value="fav-templates">
              {favoriteTools.length > 0 ? (
                <Aiwritergrid
                  tools={favoriteTools}
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              ) : (
                <div className="text-center text-white mt-10 text-lg">
                  No favorite templates selected.
                </div>
              )}
            </TabsContent>
          </Tabs>
        </TabsContent>
        <TabsContent
          className="mt-4 borderborder-[#D24AC966] flex flex-col gap-6  h-full px-[22px]"
          value={activeTab && 'article'}
        >
          <TopicGenerator />
        </TabsContent>
        <TabsContent
          className="mt-4 borderborder-[#D24AC966] flex flex-col gap-6  h-full px-[22px]"
          value={activeTab && 'ai-code'}
        >
          <AiCodeGenerator />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default WritingTools;
