import AllAiTools from '@/components/dashboard/all-ai-tools';
import Statistic from '@/components/dashboard/statistic';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

function Dashboard() {
  return (
    <div>
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
