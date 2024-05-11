import React from "react";
import "./DetailPage.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Movie from "../Mainpage/Movie";
import { useLocation, useNavigate } from "react-router-dom";

function DetailPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const imgRoot = `https://github.com/sc-project2-MovieReservation/MovieReservation-FE/blob/dev/movie-reservation/public/img/${state.poster}.jpeg?raw=true`;

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
              <span className="ticket-rate">예매율 {state.ticketSales}%</span>
              <span className="rate-border"> | </span>
              <span className="score-rate">⭐️ {state.scoreAvg}</span>
            </div>
            <div className="other-info">
              <p className="other-info-txt">
                감독 : {state.director} / 배우 : <span> </span>
                {state.actorResponseDtoList.map((a, i) => {
                  return (
                    <span key={i}>
                      {a.actorName}
                      {i !== state.actorResponseDtoList.length - 1 && ", "}
                    </span>
                  );
                })}
              </p>
              <p className="other-info-txt">
                장르 : {state.genre} / 기본 정보 : {state.ageLimit}세이상
                관람가, {state.screenTime}분
              </p>
              <p className="other-info-txt">개봉일 : {formattedDate}</p>
            </div>
            <button
              className="detail-btn"
              onClick={() => {
                navigate("/reservation");
              }}
            >
              예매하기
            </button>
          </div>
        </div>
        <div className="detail-summary">{state.summary}</div>
      </div>
      <div className="review-wrapper">
        <div className="review-info">
          <div>
            <p className="review-txt-top">
              관람일 포함 7일 이내 관람평을 남기시면
              <span> 포인트 20P</span>가 적립됩니다.
            </p>
            <p className="review-txt-bottom">0명의 실관람객 평점이 있어요.</p>
          </div>
          <button
            className="review-btn"
            onClick={() => navigate("/mypage/reservation")}
          >
            관람평 작성하기
          </button>
        </div>
        <div className="review-containerbox">
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </div>
      </div>
      <Footer />
    </>
  );
}

function Review() {
  return (
    <div className="eachreview">
      <div>
        <p className="eachreview-id">유저아이디</p>
        <p className="eachreview-content">리뷰내용</p>
      </div>
      <div>
        <span className="eachreview-btn">👍 0</span>
      </div>
    </div>
  );
}

export default DetailPage;
