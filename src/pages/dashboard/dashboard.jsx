import AllAiTools from '@/components/dashboard/all-ai-tools';
import Statistic from '@/components/dashboard/statistic';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

function Dashboard() {
  return (
    <div className="bg-[#1C202B] [box-shadow:inset_5px_5px_20px_rgba(122,67,164,0.3),inset_3px_3px_40px_rgba(96,73,188,0.17)] text-[#FFF] min-h-[calc(100svh-80px)] px-4 py-5">
      <Tabs defaultValue="statistic" className="w-full ">
        <div className="flex ml-16 mt-4">
          <TabsList className="bg-[#10122e] px-4 py-7 border border-[#D24AC966] rounded-full flex gap-2 mb-5">
            <TabsTrigger
              value="statistic"
              className="cursor-pointer data-[state=active]:bg-gradient-to-b from-primary to-secondary data-[state=active]:text-white px-6 py-4 text-primary border border-[#D24AC966] rounded-[12px] "
            >
              Statistic
            </TabsTrigger>
            <TabsTrigger
              value="ai-tools"
              className="cursor-pointer data-[state=active]:bg-gradient-to-b from-primary to-secondary data-[state=active]:text-white px-6 py-4 text-primary border border-[#D24AC966] rounded-[12px]  "
            >
              All AI Tools
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="statistic">
          <Statistic />
        </TabsContent>
        <TabsContent value="ai-tools">
          <AllAiTools />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Dashboard;
