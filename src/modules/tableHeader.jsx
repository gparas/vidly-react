import React from 'react';

const TableHeader = props => {
  const { columns, onSort } = props;
  const raiseSort = path => {
    const sortColumn = { ...props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    } else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    onSort(sortColumn);
  };
  const renderSortIcon = column => {
    const { sortColumn } = props;
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === 'asc') return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };
  return (
    <thead>
      <tr>
        {columns.map(column => (
          <th
            key={column.label || column.key}
            onClick={() => raiseSort(column.path)}
            style={{ cursor: 'pointer' }}
          >
            {column.label} {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
