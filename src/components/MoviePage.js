import React from "react";
import { useParams } from "react-router-dom";
import { getClassByRate } from "../utils/getClassByRate";

const MoviePage = ({ data }) => {
  const params = useParams();
  const movie = data.find((el) => el.id == params.id);
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  return (
    <div>
      {movie ? (
        <div style={{ display: "flex", gap: "50px", fontSize: "2rem" }}>
          <img src={IMG_PATH + movie.poster_path} alt="" width={600} />
          <div style={{ textAlign: "left" }}>
            <h1 style={{}}>{movie.title} </h1>
            <p style={{ color: "white" }}>{movie.overview}</p>
            <h3 className={getClassByRate(movie.vote_average)}>
              Rating: {movie.vote_average}
            </h3>
          </div>
        </div>
      ) : (
        <h1 style={{ color: "red" }}>movie not found</h1>
      )}
    </div>
  );
};

export default MoviePage;
