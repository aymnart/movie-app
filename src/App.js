import "./App.css";
import { data } from "./data.js";
import Header from "./components/Header";
import { useState } from "react";
import MovieList from "./components/MovieList.js";
import Form from "./components/Form.js";

function App() {
  const [movieData, SetMovieData] = useState(data);
  const [InputName, SetInputName] = useState("");
  //function ajout movie

  const addMovie = (newMovie) => {
    SetMovieData([...movieData, newMovie]);
  };

  return (
    <>
      <Header SetInputName={SetInputName} />
      <MovieList InputName={InputName} movieData={movieData} />
      <Form addMovie={addMovie} />
    </>
  );
}

export default App;
