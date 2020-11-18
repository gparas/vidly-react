import React from 'react';
import { Link } from 'react-router-dom';
import { Like, Table } from '../modules';

const MoviesList = ({ movies, onLike, onDelete, onSort, sortColumn }) => {
  const columns = [
    {
      label: 'Title',
      path: 'title',
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>,
    },
    { label: 'Genre', path: 'genre.name' },
    { label: 'Stock', path: 'numberInStock' },
    { label: 'Rate', path: 'dailyRentalRate' },
    {
      key: 'like',
      content: movie => (
        <Like liked={movie.liked} onClick={() => onLike(movie)} />
      ),
    },
    {
      key: 'delete',
      content: movie => (
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
