import React from "react";
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
  return (
    <div key={key} className="movie-wrapper">
      <img src={posterImg} className="movie-img" />
      <p className="movie-title">{title}</p>
      <div>
        <span className="movie-sales-txt">예매율</span>
        <span className="movie-sales">{ticketSales}%</span>
        <span className="movie-score-txt"> | </span>
        <span className="movie-score">⭐️ {score}</span>
      </div>
      <div>
        <span className="movie-date">{releaseDate}</span>
        <span className="movie-dday">D-{dDay}</span>
      </div>
      <button className="movie-btn">예매하기</button>
    </div>
  );
}

export default Movie;
