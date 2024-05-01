import React from "react";
import MovieLogo from "../../assets/png/movie.png";

function Logo() {
  return (
    <div className="logo">
      <a href="/home">
        <img src={MovieLogo} alt="CGV Logo" />
        <span>Movie Reservation</span>
      </a>
    </div>
  );
}

export default Logo;
