import adminLogo from '@/assets/icons/admin-icon.svg';
import calenderIcon from '@/assets/icons/calender-icon.svg';
import chart from '@/assets/icons/charts.svg';
import documentIcon from '@/assets/icons/document-icon.svg';
import documentSavedIcon from '@/assets/icons/document-saved-icon.svg';
import fillStarIcon from '@/assets/icons/fill-star-icon.svg';
import franceFlag from '@/assets/icons/france-flag.svg';
import humanizeGeneratedIcon from '@/assets/icons/humanize-generated-icon.svg';
import imageCreatedIcon from '@/assets/icons/image-created-icon.svg';
import timeSave from '@/assets/icons/time-save-icon.svg';
import ukFlag from '@/assets/icons/uk-flag.svg';
import wordGeneratorIcon from '@/assets/icons/word-generator.svg';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '../ui/button';
import DocumentTable from './shared/document-table';
import DocumentTableHeader from './shared/document-table-header';

function Statistic() {
  const countLimit = [
    {
      amount: 10812,
      title: 'Words Left',
    },
    {
      amount: 1920,
      title: 'Images Left',
    },
    {
      amount: 73821,
      title: 'Humanize Left',
    },
  ];
  const generatedDocs = [
    {
      title: 'Words  Generated',
      amount: '40,689 words',
      icon: wordGeneratorIcon,
    },
    {
      title: 'Documents Saved',
      amount: '86 documents',
      icon: documentSavedIcon,
    },
    {
      title: 'Images Created ',
      amount: '13 images',
      icon: imageCreatedIcon,
    },
    {
      title: 'Humanize Generated',
      amount: '40,689 words',
      icon: humanizeGeneratedIcon,
    },
  ];
  const aiTemplates = [
    {
      icon: documentIcon,
      title: 'Academic  Essay',
      text: 'Create Creative academic essays for  various  subject just in a second',
    },
    {
      icon: documentIcon,
      title: 'Academic  Essay',
      text: 'Create Creative academic essays for  various  subject just in a second',
    },
  ];
  const allDocuments = [
    {
      id: 1,
      document: documentIcon,
      title: 'Project Proposal',
      type: 'Articles Generator',
      wordsBook: 'All',
      created: 'July 15, 2026',
      categories: 'Content',
      flag: ukFlag,
      language: 'En-Uk',
      wordsUsed: 634,
    },
    {
      id: 2,
      document: documentIcon,
      title: 'Analyse de Marché',
      type: "Générateur d'Articles",
      wordsBook: 'Tous',
      created: 'June 15, 2025',
      categories: 'Contenu',
      flag: franceFlag,
      language: 'French',
      wordsUsed: 720,
    },
    {
      id: 3,
      document: documentIcon,
      title: 'Technical Report',
      type: 'Articles Generator',
      wordsBook: 'All',
      created: 'May 22, 2025',
      categories: 'Technical',
      flag: ukFlag,
      language: 'En-Uk',
      wordsUsed: 890,
    },
    {
      id: 4,
      document: documentIcon,
      title: 'Rapport Médical',
      type: 'Générateur Médical',
      wordsBook: 'Santé',
      created: 'April 10, 2025',
      categories: 'Médical',
      flag: franceFlag,
      language: 'French',
      wordsUsed: 450,
    },
    {
      id: 5,
      document: documentIcon,
      title: 'Marketing Strategy',
      type: 'Articles Generator',
      wordsBook: 'All',
      created: 'March 5, 2025',
      categories: 'Business',
      flag: ukFlag,
      language: 'En-Uk',
      wordsUsed: 1020,
    },
    {
      id: 6,
      document: documentIcon,
      title: 'Contrat Juridique',
      type: 'Générateur Légal',
      wordsBook: 'Droit',
      created: 'February 28, 2025',
      categories: 'Legal',
      flag: franceFlag,
      language: 'French',
      wordsUsed: 1500,
    },
    {
      id: 7,
      document: documentIcon,
      title: 'Academic Paper',
      type: 'Articles Generator',
      wordsBook: 'All',
      created: 'January 15, 2025',
      categories: 'Education',
      flag: ukFlag,
      language: 'En-Uk',
      wordsUsed: 2100,
    },
    {
      id: 8,
      document: documentIcon,
      title: 'Recette de Cuisine',
      type: 'Générateur Culinaire',
      wordsBook: 'Cuisine',
      created: 'December 20, 2024',
      categories: 'Food',
      flag: franceFlag,
      language: 'French',
      wordsUsed: 380,
    },
    {
      id: 9,
      document: documentIcon,
      title: 'Software Documentation',
      type: 'Articles Generator',
      wordsBook: 'All',
      created: 'November 8, 2024',
      categories: 'Technology',
      flag: ukFlag,
      language: 'En-Uk',
      wordsUsed: 1750,
    },
    {
      id: 10,
      document: documentIcon,
      title: 'Guide de Voyage',
      type: 'Générateur Touristique',
      wordsBook: 'Voyage',
      created: 'October 30, 2024',
      categories: 'Travel',
      flag: franceFlag,
      language: 'French',
      wordsUsed: 920,
    },
  ];
  return (
    <div className="flex flex-col gap-8">
      <div className="grid xl:grid-cols-2 gap-6">
        <div className="px-8 py-6 flex justify-between rounded-[15.784px] bg-gradient-to-t from-[rgba(96,73,188,0.17)] to-[rgba(122,67,164,0.30)]">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 p-[10px]">
              <img src={calenderIcon} alt="icon" />
              <p className="text-base leading-[164%]">Apr 15, 2025 19:55 PM</p>
            </div>
            <h1 className="text-[32px] font-bold leading-[132%] tracking-[-0.316px]">
              Welcome, Admin!
            </h1>
            <div className="flex items-center justify-center border border-[#F9F9F9] rounded-[12px] w-max">
              <p className="text-base font-medium leading-[164%] capitalize px-4 py-2">
                Current Plan
              </p>
            </div>
            <h1 className="text-[32px] font-bold leading-[132%] tracking-[-0.316px]">
              No Active Plan
            </h1>
            <p className="text-base leading-[164%]">
              You do not have any active subscription
            </p>
          </div>
          <img src={adminLogo} alt="icon" />
        </div>
        <div className="pl-8 flex flex-col justify-end rounded-[15.784px] bg-gradient-to-t from-[rgba(96,73,188,0.17)] to-[rgba(122,67,164,0.30)] overflow-hidden">
          <div className="flex items-center gap-2 p-[10px]">
            <img src={timeSave} alt="icon" />
            <p className="text-3xl font-bold tracking-[0.237px] leading-[132%]">
              Time Saved
            </p>
          </div>
          <div className="flex">
            <div className="flex flex-col gap-">
              <h1 className="text-[48px] font-bold leading-[132%] tracking-[-0.474px]">
                161
              </h1>
              <p className="text-[#BCBCBC] text-lg leading-[164%]">
                Total hours you have saved
              </p>
            </div>
            <img src={chart} alt="chart" className="overflow-hidden ml-auto" />
          </div>
        </div>
      </div>
      {/* count limit card */}

      <div className="grid grid-cols-3 gap-5">
        {countLimit.map((data, index) => (
          <div
            className="flex flex-col items-center gap-[10px] py-4 rounded-[15.784px] border-[1.973px] border-dashed border-[rgba(210,74,201,0.40)] bg-gradient-to-t from-[rgba(122,67,164,0.30)] to-[rgba(96,73,188,0.17)]"
            key={index}
          >
            <h1 className="text-[48px] font-bold leading-[132%] tracking-[-0.474px] bg-gradient-to-t from-[#7A43A4] to-[#6049BC] bg-clip-text text-transparent">
              {data?.amount}
            </h1>
            <p className="text-3xl font-medium tracking-[-0.474px] leading-[132%] text-[#F9F9F9]">
              {data?.title}
            </p>
          </div>
        ))}
      </div>
      {/*  total documents */}
      <div className="grid grid-cols-4 gap-5">
        {generatedDocs.map((data, index) => (
          <div
            className="flex justify-between items-center gap-[10px] py-5 px-6 rounded-[15.784px] border-[1.973px] border-dashed border-[rgba(210,74,201,0.40)] bg-gradient-to-t from-[rgba(122,67,164,0.30)] to-[rgba(96,73,188,0.17)]"
            key={index}
          >
            <div className="flex flex-col gap-6">
              <p className="text-[#FFF] text-opacity-70 text-xl font-medium leading-[132%] tracking-[-0.395px]">
                {data?.title}
              </p>
              <p className="text-[#BCBCBC] text-base leading-[132%]">
                {data?.amount}
              </p>
            </div>
            <img src={data?.icon} alt="icon" />
          </div>
        ))}
      </div>
      {/* all document & favourite ai writer template */}
      <div className="flex flex-col xl:flex-row gap-5">
        <div className="flex-1 flex flex-col bg-[#070622] border border-[#7A43A4] rounded-[24px] p-6">
          <DocumentTableHeader />
          {/* table */}
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-hidden">
              <div className="overflow-auto max-h-[500px] w-full gradient-scrollbar">
                <Table className="w-[60dvh]">
                  <TableHeader className="sticky top-0 z-10">
                    <TableRow>
                      <TableHead className="w-[100px] py-[14px] px-6 min-w-[100px]">
                        Documents Name
                      </TableHead>
                      <TableHead className="min-w-[120px]">
                        Words Book
                      </TableHead>
                      <TableHead className="min-w-[120px]">Created</TableHead>
                      <TableHead className="min-w-[120px]">
                        Categories
                      </TableHead>
                      <TableHead className="min-w-[120px]">Language</TableHead>
                      <TableHead className="min-w-[120px]">
                        Words Used
                      </TableHead>
                      <TableHead className="min-w-[120px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {allDocuments.map((data, index) => (
                      <DocumentTable data={data} key={index} />
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
            <Pagination className={`px-6 py-3`}>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
        <div className="p-6 bg-[#070622] border border-[#7A43A4] rounded-[16px]">
          <div className="flex flex-col gap-4 mb-8">
            <img src={fillStarIcon} alt="icon" className="w-6 h-6" />
            <p className="text-3xl font-bold leading-[132%] tracking-[-0.237px]">
              Favorite Ai writer Templates
            </p>
          </div>
          <div className="flex flex-col gap-6 mb-[60px]">
            {aiTemplates.map((data, index) => (
              <div
                key={index}
                className="p-3 flex flex-col gap-4 rounded-[13.811px] bg-gradient-to-t from-[rgba(122,67,164,0.3)] to-[rgba(96,73,188,0.17)]"
              >
                <img src={data?.icon} alt="icon" className="w-10 h-10" />
                <p className="text-xl font-medium leading-[132%] tracking-[-0.395px] text-[#FFF] text-opacity-70">
                  {data?.title}
                </p>
                <p className="text-[#BCBCBC] text-base">{data?.text}</p>
              </div>
            ))}
          </div>
          <Button
            variant="outline"
            className={`rounded-[12px] py-3 px-5 bg-gradient-to-t from-[#7A43A4] to-[#6049BC] bg-clip-text text-transparent border border-[#7A43A4] hover:text-none cursor-pointer w-full`}
          >
            Show more
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Statistic;
