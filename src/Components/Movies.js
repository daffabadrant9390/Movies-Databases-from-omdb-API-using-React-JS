import React, { useState, useEffect } from "react";
import "../styles/custom.css";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("marvel");

  useEffect(() => {
    getDataMovies();
    console.log(movies);
  }, [query]);

  const fetchDataMovies = () => {
    return fetch(`http://www.omdbapi.com/?apikey=7c36f70a&s=${query}`)
      .then((response) => response.json())
      .then((response) => response);
  };

  const getDataMovies = async () => {
    const dataMovies = await fetchDataMovies();
    setMovies(dataMovies.Search);
  };

  const updateSearchInput = (e) => {
    setSearch(e.target.value);
  };

  const updateQuerySearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="movies-section">
      <form onSubmit={updateQuerySearch}>
        <input
          type="text"
          className="input-search"
          value={search}
          onChange={updateSearchInput}
        />
        <button type="submit" className="btn-search">
          Search
        </button>
      </form>
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
    </div>
  );
};

export default Movies;
