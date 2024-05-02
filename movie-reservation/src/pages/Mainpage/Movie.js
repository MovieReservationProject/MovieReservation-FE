import React, { useState } from "react";
import "./Movie.css";

function Movie({
  posterImg,
  title,
  ticketSales,
  score,
  releaseDate,
  dDay,
  key,
}) {
  const imgRoot = `/img/${posterImg}.jpeg`;

  const date = new Date(releaseDate);
  const formattedDate = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  return (
    <div key={key} className="movie-wrapper">
      <img
        src={imgRoot}
        className={isHover ? "movie-img-hover" : "movie-img"}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <p className="movie-title">{title}</p>
      <div>
        <span className="movie-sales-txt">예매율</span>
        <span className="movie-sales">{ticketSales}%</span>
        <span className="movie-score-txt"> | </span>
        <span className="movie-score">⭐️ {score}</span>
      </div>
      <div>
        <span className="movie-date">{formattedDate} 개봉</span>
        <span className="movie-dday">D-{dDay}</span>
      </div>
      <button className="movie-btn">
        <a href="/reservation">예매하기</a>
      </button>
    </div>
  );
}

export default Movie;
