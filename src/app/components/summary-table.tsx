import React from 'react';

export interface SummaryTableProps {
  headers: React.ReactNode;
  children?: React.ReactNode;
}
const SummaryTable = ({ headers, children }: SummaryTableProps) => {
  return (
    <table className="table-auto w-full border-separate border-spacing-0">
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody className="[&>tr:nth-child(2n)]: bg-gray-100 [&>tr:nth-child(2n+n)]:bg-white">
        {children}
      </tbody>
    </table>
  );
};

export default SummaryTable;
