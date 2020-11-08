import React from 'react';
import classNames from 'classnames';

const FilterList = ({ items, onItemSelect, selectedItem }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item._id}
          className={classNames('list-group-item', {
            active: item === selectedItem,
          })}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default FilterList;
