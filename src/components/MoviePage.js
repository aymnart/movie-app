import React from "react";
import { useParams } from "react-router-dom";
import MovieEl from "./MovieEl.js";

const MoviePage = ({ data }) => {
  const params = useParams();
  return (
    <div>
      {[data.find((el) => el.id == params.id)].map((movie, index) => (
        <MovieEl movie={movie} key={index} />
      ))}
    </div>
  );
};

export default MoviePage;
