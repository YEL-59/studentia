import React from 'react'
import searchIcon from '@/assets/icons/search-icon.svg';
import filterIcon from '@/assets/icons/filter-icon.svg';
import { Input } from '@/components/ui/input';

function DocumentTableHeader() {
  return (
    <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold leading-[24px] tracking-[-0.142px] text-[#F9F9F9]">
          All My Documents
        </h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3 border border-[#BCBCBC] rounded-[124px] px-3 py-1 cursor-pointer">
            <Input
              placeholder="Search..."
              className={`flex-1 border-none outline-none focus-visible:ring-0 text-base font-medium leading-[22px] tracking-[-0.11px] text-[#E2E2E2]`}
            />
            <img src={searchIcon} alt="icon" />
          </div>
          <div className="flex items-center gap-3 px-4 py-[10px] border border-[#CBD5E1] rounded-[124px] cursor-pointer">
            <img src={filterIcon} alt="icon" />
            <p className="text-[#D9D9D9] text-sm font-bold leading-[22px] tracking-[-0.083px]">
              Filter
            </p>
          </div>
        </div>
      </div>
  )
}

export default DocumentTableHeader;