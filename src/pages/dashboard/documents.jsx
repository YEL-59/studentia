import DocumentTable from '@/components/dashboard/shared/document-table';
import React from 'react'

function Documents() {
  return (
    <div className="mt-10">
      <DocumentTable className="w-full" title="All My Documents" />
    </div>
  );
}

export default Documents;