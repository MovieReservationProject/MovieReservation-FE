import React, { useState } from "react";
import "./Movie.css";
import { Link, useNavigate } from "react-router-dom";

function Movie({ movie }) {
  const imgRoot = `/img/${movie.poster}.jpeg`;

  const date = new Date(movie.releaseDate);
  const formattedDate = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  const [isHover, setIsHover] = useState(false);
  const [isHoverBtn, setIsHoverBtn] = useState(false);

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  const handleMouseOverBtn = () => {
    setIsHover(true);
  };

  const handleMouseOutBtn = () => {
    setIsHover(false);
  };

  const navigate = useNavigate();
  const onClickMovie = () => {
    navigate(`/movie/${movie.titleKorean}`, { state: movie });
  };

  return (
    <div className="movie-wrapper">
      <div className="poster-wrapper">
        <img
          src={imgRoot}
          className={isHover ? "movie-img-hover" : "movie-img"}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={onClickMovie}
        />
        {isHover ? (
          <div
            className="poster-txt"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            상세보기
          </div>
        ) : null}
      </div>
      <p className="movie-title">{movie.titleKorean}</p>
      <div>
        <span className="movie-sales-txt">예매율</span>
        <span className="movie-sales">{movie.ticketSales}%</span>
        <span className="movie-score-txt"> | </span>
        <span className="movie-score">⭐️ {movie.scoreAvg}</span>
      </div>
      <div>
        <span className="movie-date">{formattedDate} 개봉</span>
        <span className="movie-dday">D-{movie.dday}</span>
      </div>
      <div>{movie.director}</div>
      <button className="movie-btn">
        <a href="/reservation">예매하기</a>
      </button>
    </div>
  );
}

export default Movie;
