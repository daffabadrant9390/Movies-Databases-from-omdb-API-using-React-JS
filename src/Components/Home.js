import React from "react";
import "../styles/custom.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero">
      <div className="left-hero">
        <h2>Hi, I'm Daffa</h2>
        <p>
          Here, i created a small project to fetch the movies data from RESTful
          API using React JS. The API was from{" "}
          <a href="http://www.omdbapi.com/">OMDb API</a>, the open movie
          database. Everytime you type the movies name, it will fetch maximum 10
          movies that relatable with what you have typed. To demo the project,
          you can go to Movies DB at the navigator or click the button below.
          Enjoy!
        </p>
        <Link to="/movies" className="btn-get-started">
          Get Started
        </Link>
      </div>
      <div className="right-hero">
        <img src="./img-hero.jpg" alt="hero movies data img" />
      </div>
    </div>
  );
};

export default Home;
