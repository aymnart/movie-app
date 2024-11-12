import React from "react";
import { getClassByRate } from "../utils/getClassByRate";
import { Link } from "react-router-dom";
const MovieEl = ({
  movie: { title, vote_average, overview, poster_path, id },
}) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  return (
    <div className="movie">
      <Link to={`/movie/${id}`} style={{ width: "100%", cursor: "pointer" }}>
        <img src={IMG_PATH + poster_path} alt={title} />
        <div className="movie-info">
          <h3>{title}</h3>
          <span className={getClassByRate(vote_average)}>{vote_average}</span>
        </div>
        <div className="overview">
          <h3>Overview</h3>
          {overview}
        </div>
      </Link>
    </div>
  );
};

export default MovieEl;
