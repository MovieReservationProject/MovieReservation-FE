import React from "react";
import "./DetailPage.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Movie from "../Mainpage/Movie";
import { useLocation } from "react-router-dom";

function DetailPage() {
  const { state } = useLocation();

  const imgRoot = `/img/${state.poster}.jpeg`;

  const date = new Date(state.releaseDate);
  const formattedDate = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  return (
    <>
      <Header />
      <div className="detail-wrapper">
        <div className="detail-info">
          <img src={imgRoot} className="movie-poster"></img>
          <div className="movie-info">
            <div className="title-info">
              <h3 className="movie-title">{state.titleKorean}</h3>
              <p className="movie-etitle">{state.titleEnglish}</p>
            </div>
            <div className="rate-info">
              <span className="ticket-rate">예매율</span>
              <span className="rate-border"> | </span>
              <span className="score-rate">⭐️ </span>
            </div>
            <div className="other-info">
              <p className="other-info-txt">감독 : / 배우 : </p>
              <p className="other-info-txt">장르 : / 기본 정보 : </p>
              <p className="other-info-txt">개봉 : {formattedDate}</p>
            </div>
            <a href="/reservation">
              <button className="detail-btn">예매하기</button>
            </a>
          </div>
        </div>
        <div className="detail-summary">줄거리</div>
      </div>
      <Footer />
    </>
  );
}

export default DetailPage;
