import React, { useState, useEffect } from "react";
import "./DetailPage.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Movie from "../Mainpage/Movie";
import { useLocation, useNavigate } from "react-router-dom";
import { data } from "autoprefixer";
import StarRatings from "react-star-ratings";

function DetailPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const imgRoot = `https://github.com/sc-project2-MovieReservation/MovieReservation-FE/blob/develop/movie-reservation/src/assets/img/${state.poster}.jpeg?raw=true`;

  const date = new Date(state.releaseDate);
  const formattedDate = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  const formattedScore = state.scoreAvg.toFixed(1);

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
              <span className="score-rate">⭐️ {formattedScore}</span>
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
            {/* <p className="review-txt-bottom">0명의 실관람객 평점이 있어요.</p> */}
          </div>
          <button
            className="review-btn"
            onClick={() => navigate("/mypage/reservation")}
          >
            관람평 작성하기
          </button>
        </div>
        <div className="review-containerbox">
          <Review movieId={state.movieId} />
        </div>
      </div>
      <Footer />
    </>
  );
}

// 리뷰 컴포넌트
function Review(props) {
  const [review, setReview] = useState([]);

  // 영화별 리뷰 가져오기
  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = async () => {
    try {
      const response = await fetch(
        `http://3.37.251.140:8080/mypage/movie/review/${props.movieId}`,
        {
          method: "GET",
        }
      );
      const result = await response.json();
      setReview(result.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  if (review.length === 0) {
    return <div>아직 관람평이 없습니다.</div>;
  }

  // 등록된 리뷰 목록 가져오기
  return review.map((a, i) => {
    const myId = review[i].myId;
    const content = review[i].content;
    // 리뷰별 별점
    const StarRating = () => {
      const rating = review[i].score;
      return (
        <StarRatings
          rating={rating}
          starRatedColor="gold"
          numberOfStars={5}
          name="rating"
          starDimension="15px"
          starSpacing="1px"
        />
      );
    };
    const date = new Date(review[i].reviewDate);
    const formattedDate = date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "numeric",
    });
    return (
      <div className="eachreview">
        <span className="eachreview-id">{myId} </span>
        <span>
          {" "}
          <StarRating />
        </span>
        <p className="eachreview-content">{content}</p>
        <p className="eachreview-date">작성일 : {formattedDate}</p>
      </div>
    );
  });
}

export default DetailPage;
