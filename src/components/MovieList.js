import React from "react";
import MovieEl from "./MovieEl";
const MovieList = ({ movieData }) => {
  return (
    <div style={{ display: "inline-flex", flexWrap: "wrap", margin: "0 auto" }}>
      {movieData.map((movie, index) => (
        <MovieEl movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
