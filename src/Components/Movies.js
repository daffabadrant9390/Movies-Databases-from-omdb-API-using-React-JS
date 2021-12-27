import React, { useState, useEffect } from "react";
import "../styles/custom.css";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getDataMovies();
    console.log(movies);
  }, []);

  const fetchDataMovies = () => {
    return fetch("http://www.omdbapi.com/?apikey=7c36f70a&s=marvel")
      .then((response) => response.json())
      .then((response) => response);
  };

  const getDataMovies = async () => {
    const dataMovies = await fetchDataMovies();
    console.log(dataMovies);
    setMovies(dataMovies.Search);
  };

  return (
    <div className="movies-container">
      {movies.map((movie) => {
        return (
          <div className="card-movies">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="card-body">
              <h5>{movie.Title}</h5>
              <p>{movie.Year}</p>
              <Link className="link-btn" to={`/movies/${movie.imdbID}`}>
                See Details
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
