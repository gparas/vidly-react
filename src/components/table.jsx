import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = ({ sortColumn, onSort, columns, rows }) => {
  return (
    <table className="table">
      <TableHeader sortColumn={sortColumn} onSort={onSort} columns={columns} />
      <TableBody rows={rows} columns={columns} />
    </table>
  );
};

export default Table;
