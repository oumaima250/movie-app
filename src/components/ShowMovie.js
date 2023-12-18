// ShowMovie.js
import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";

export default function ShowMovie() {
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("movies")) || [];
    setMovies(storedMovies);
  }, []);

  const handleTitleChange = (event) => {
    setTitleFilter(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRatingFilter(event.target.value);
  };

  return (
    <div className="App">
      <h1 className="text-center">Movie List</h1>
      <div className="filters">
        <label htmlFor="titleFilter">Title:</label>
        <input
          type="text"
          id="titleFilter"
          value={titleFilter}
          onChange={handleTitleChange}
        />
        <label htmlFor="ratingFilter">Rating:</label>
        <input
          type="number"
          id="ratingFilter"
          value={ratingFilter}
          onChange={handleRatingChange}
        />
      </div>
      <MovieList movies={movies} titleFilter={titleFilter} ratingFilter={ratingFilter} />
    </div>
  );
}
