import React from "react";
import MovieLogo from "../../assets/png/movie.png";

function Logo() {
  return (
    <div className="logo">
      <a href="/">
        <img src={MovieLogo} alt="CGV Logo" />
      </a>
    </div>
  );
}

export default Logo;
