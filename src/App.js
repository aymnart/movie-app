import "./App.css";
import { data } from "./data.js";
import Header from "./components/Header";
import { useState } from "react";
import MovieList from "./components/MovieList.js";
import Form from "./components/Form.js";
import { Routes, Route } from "react-router-dom";
import MoviePage from "./components/MoviePage.js";

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
      <Routes>
        <Route
          path="/movies"
          element={<MovieList InputName={InputName} movieData={movieData} />}
        />
        <Route
          path="/movie/*"
          element={<MovieList InputName={InputName} movieData={movieData} />}
        />
        <Route path="/movie/:id" element={<MoviePage data={movieData} />} />
        <Route path="addMovie" element={<Form addMovie={addMovie} />} />
      </Routes>
    </>
  );
}

export default App;
