import React from 'react';

const MovieForm = ({ match, history }) => (
  <>
    <h1>Movie Form {match.params.id}</h1>
    <button
      onClick={() => history.push('/movies')}
      className="btn btn-primary btn-sm"
    >
      Save
    </button>
  </>
);

export default MovieForm;
