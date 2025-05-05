import franceFlag from '@/assets/icons/france-flag.svg';
import ukFlag from '@/assets/icons/uk-flag.svg';
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
import DocumentTableHeader from './document-table-header';
import DocumentTableBody from './document-table-body';
import documentIcon from '@/assets/icons/document-icon.svg';

function DocumentTable() {
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
                  <TableHead className="min-w-[120px]">Words Book</TableHead>
                  <TableHead className="min-w-[120px]">Created</TableHead>
                  <TableHead className="min-w-[120px]">Categories</TableHead>
                  <TableHead className="min-w-[120px]">Language</TableHead>
                  <TableHead className="min-w-[120px]">Words Used</TableHead>
                  <TableHead className="min-w-[120px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allDocuments.map((data, index) => (
                  <DocumentTableBody data={data} key={index} />
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
  );
}

export default DocumentTable;
