import React, { useState } from "react";
import "./Movie.css";
import { Link, useNavigate } from "react-router-dom";

function Movie({ movie }) {
  //   const imgRoot = `/img/${movie.poster}.jpeg`;

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

  const navigateToreservemovie = (movie_name) => {
    navigate(`/reservation?titleKorean=${encodeURIComponent(movie_name)}`);
  };

  return (
    <div className="movie-wrapper">
      <div className="poster-wrapper">
        <img
          src={`https://github.com/sc-project2-MovieReservation/MovieReservation-FE/blob/dev/movie-reservation/public/img/${movie.poster}.jpeg?raw=true`}
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
      <button
        className="movie-btn"
        onClick={() => navigateToreservemovie(movie.titleKorean)}
      >
        예매하기
      </button>
    </div>
  );
}

export default Movie;
