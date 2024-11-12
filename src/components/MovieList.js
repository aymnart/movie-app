import React from "react";
import MovieEl from "./MovieEl";

const MovieList = ({ movieData, InputName }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "center",
      }}
    >
      {movieData
        .filter((el) =>
          el.title.toLowerCase().includes(InputName.toLowerCase().trim())
        )
        .map((movie, index) => (
          <MovieEl movie={movie} key={index} />
        ))}
    </div>
  );
};

export default MovieList;
