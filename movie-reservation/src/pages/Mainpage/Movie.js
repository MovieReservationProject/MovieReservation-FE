import React from "react";
import "./Movie.css";
import {useNavigate} from 'react-router-dom'

function Movie({
  posterImg,
  movie_name,
  ticketSales,
  score,
  releaseDate,
  dDay,
  key,
}) {

  const navigate=useNavigate();

  const navigateToreservemovie=(movie_name)=>{
    navigate(`/reservation?movie_name=${encodeURIComponent(movie_name)}`)
  }


  return (
    <div key={key} className="movie-wrapper">
      <img src={posterImg} className="movie-img" />
      <p className="movie-title">{movie_name}</p>
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
      <button className="movie-btn" onClick={()=>navigateToreservemovie(movie_name)}>
        {/* <a href="/reservation">예매하기</a> */}
        예매하기
      </button>
    </div>
  );
}

export default Movie;
