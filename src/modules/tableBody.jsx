import React from 'react';
import _ from 'lodash';

const TableBody = ({ rows, columns }) => {
  const renderCell = (row, column) => {
    if (column.content) return column.content(row);

    return _.get(row, column.path);
  };
  const createKey = (row, column) => row._id + (column.path || column.key);
  return (
    <tbody>
      {rows.map(row => (
        <tr key={row._id}>
          {columns.map(column => (
            <td key={createKey(row, column)}>{renderCell(row, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
