import React from 'react';
import Like from './like';
import Table from './table';

const MoviesList = (props) => {
  const { movies, onLike, onDelete, onSort, sortColumn } = props;
  const columns = [
    { label: 'Title', path: 'title' },
    { label: 'Genre', path: 'genre.name' },
    { label: 'Stock', path: 'numberInStock' },
    { label: 'Rate', path: 'dailyRentalRate' },
    {
      key: 'like',
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => onLike(movie)} />
      ),
    },
    {
      key: 'delete',
      content: (movie) => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(movie)}
        >
          Delete
        </button>
      ),
    },
  ];
  return (
    <Table
      sortColumn={sortColumn}
      onSort={onSort}
      columns={columns}
      rows={movies}
    />
  );
};

export default MoviesList;
