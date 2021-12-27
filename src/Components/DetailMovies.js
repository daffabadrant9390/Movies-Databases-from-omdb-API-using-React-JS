import React, { useState, useEffect } from "react";
import "../styles/custom.css";
import { Link } from "react-router-dom";

const DetailMovies = (match) => {
  const [details, setDetails] = useState({});

  useEffect(() => {
    getDetailMovie();
    console.log(match.match.params.id);
  }, []);

  const fetchDetailMovie = () => {
    return fetch(
      `http://www.omdbapi.com/?apikey=7c36f70a&i=${match.match.params.id}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response.statusText;
        }
      })
      .then((response) => response);
  };

  const getDetailMovie = async () => {
    const detailMovie = await fetchDetailMovie();
    console.log(detailMovie);
    setDetails(detailMovie);
  };

  return (
    <div className="movie-detail">
      <img src={details.Poster} alt={details.Title} />
      <ul className="detail-data">
        <li>
          <strong>Title: </strong>
          {details.Title}
        </li>
        <li>
          <strong>Actors:</strong> {details.Actors}
        </li>
        <li>
          <strong>Writer:</strong> {details.Writer}
        </li>
        <li>
          <strong>Plot:</strong> {details.Plot}
        </li>
        <li>
          <strong>Ratings:</strong> {details.imdbRating}
        </li>
        <li>
          <Link to={"/movies"} className="btn-back">
            Back
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DetailMovies;
