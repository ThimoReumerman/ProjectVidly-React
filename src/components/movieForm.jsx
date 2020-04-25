import React from "react";

const MovieForm = ({ match, history }) => {
  return <div>
    <h1>Movie Form {match.params.id}</h1>
    <btn className="btn btn-primary" onClick={() => history.push('/movies')}>Save</btn>
  </div>;
};

export default MovieForm;
