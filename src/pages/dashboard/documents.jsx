import allCodes from '@/assets/icons/all-codes.svg';
import allDocs from '@/assets/icons/all-documents.svg';
import workbooks from '@/assets/icons/workbooks.svg';
import DocumentTable from '@/components/dashboard/shared/document-table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

function Documents() {
  const navigate = useNavigate();
  const { activeTab } = useParams();
  const mainTabs = [
    {
      value: 'all',
      icon: allDocs,
      title: 'All Documents',
    },
    {
      value: 'codes',
      icon: allCodes,
      title: 'All Codes',
    },
    {
      value: 'workbooks',
      icon: workbooks,
      title: 'WorkBooks',
    },
  ];
  console.log(activeTab);
  useEffect(() => {
    if (!activeTab) {
      navigate(`/dashboard/documents/all`);
    }
  }, [activeTab]);
  return (
    <div className="flex flex-col gap-5">
      <Tabs value={activeTab} className="w-full">
        <div className="flex ml-16 mt-4">
          <TabsList className="bg-[#10122e] px-6 py-9 border border-[#D24AC966] rounded-[16px] flex gap-2">
            {mainTabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                onClick={() => navigate(`/dashboard/documents/${tab.value}`)}
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
          className="mt-4 borderborder-[#D24AC966] flex flex-col gap-6 rounded-[16px] bg-[#1C202B] shadow-[2px_11px_40px_0px_rgba(114,75,150,0.32)] h-full px-[22px] py-[32px]"
          value={activeTab && 'all'}
        >
          <DocumentTable className="w-full" title="All My Documents" />
        </TabsContent>

        <TabsContent
          className="mt-4 borderborder-[#D24AC966] flex flex-col gap-6 rounded-[16px] bg-[#1C202B] shadow-[2px_11px_40px_0px_rgba(114,75,150,0.32)] h-full px-[22px] py-[32px]"
          value={activeTab && 'codes'}
        >
          <DocumentTable className="w-full" title="All My  Generated Codes" />
        </TabsContent>
        <TabsContent
          className="mt-4 borderborder-[#D24AC966] flex flex-col gap-6 rounded-[16px] bg-[#1C202B] shadow-[2px_11px_40px_0px_rgba(114,75,150,0.32)] h-full px-[22px] py-[32px]"
          value={activeTab && 'workbooks'}
        >
          <DocumentTable className="w-full" title="All My Documents" />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Documents;
