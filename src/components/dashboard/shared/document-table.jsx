import deleteIcon from '@/assets/icons/delete-icon.svg';
import editIcon from '@/assets/icons/edit-icon.svg';
import { TableCell, TableRow } from '@/components/ui/table';

function DocumentTable({ data }) {
  return (
    <TableRow className="whitespace-nowrap">
      <TableCell className="font-medium py-3 px-6 flex items-center gap-2 min-w-[200px]">
        <img src={data?.document} alt="icon" className="w-10 h-10" />
        <div className="flex flex-col gap-1">
          <p className="text-base font-bold leading-[132%] tracking-[-0.158px]">
            {data?.title}
          </p>
          <p className="text-sm leading-[164%] text-[#BCBCBC]">{data?.type}</p>
        </div>
      </TableCell>
      <TableCell className="min-w-[120px] text-center">
        {data?.wordsBook}
      </TableCell>
      <TableCell className="min-w-[120px]">{data?.created}</TableCell>
      <TableCell className="min-w-[120px]">{data?.categories}</TableCell>
      <TableCell className="min-w-[120px]">
        <div className=" flex items-center gap-1">
          <img src={data?.flag} alt="" />
          <p>{data?.language}</p>
        </div>
      </TableCell>
      <TableCell className="min-w-[120px] text-center">
        {data?.wordsUsed}
      </TableCell>
      <TableCell className="min-w-[120px]">
        <div className="flex items-center gap-2">
          <div className=" flex items-center justify-center p-2 bg-[#FFF] rounded-full">
            <img src={editIcon} alt="icon" className="w-5 h-5" />
          </div>
          <div className=" flex items-center justify-center p-2 bg-[#FFF] rounded-full">
            <img src={deleteIcon} alt="icon" className="w-5 h-5" />
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
}

export default DocumentTable;
