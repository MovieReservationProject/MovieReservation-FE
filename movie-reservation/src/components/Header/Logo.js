import React from "react";
import MovieLogo from "../../assets/png/movie.png";

function Logo() {
  return (
    <div className="logo">
      <img src={MovieLogo} alt="CGV Logo" />
      <span>Movie Reservation</span>
    </div>
  );
}

export default Logo;
