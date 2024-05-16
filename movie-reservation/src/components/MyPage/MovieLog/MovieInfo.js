import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MovieLog.css";
import ReviewModal from "./ReviewModal";
import Pagination from "./Pagination";
import Calendar from "../../../assets/png/calendar.png";
import { AiOutlineLine } from "react-icons/ai";

function MovieInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviews, setReviews] = useState({});
  const [reviewDate, setReviewDate] = useState("");
  const [rating, setRating] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentMovieTitle, setCurrentMovieTitle] = useState("");
  const [modalMode, setModalMode] = useState("create");
  const navigate = useNavigate();

  const [itemsPerPage] = useState(5);

  const my_movie_list = [
    {
      posterUrl:
        "https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202404/20703_103_1.jpg",
      movieTitle: "쿵푸팬더4",
      theater: "CGV 인천가정",
      dateTime: "2024-04-10",
      time: "14:50",
    },
    {
      posterUrl:
        "https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202402/20808_103_1.jpg",
      movieTitle: "파묘",
      theater: "CGV 인천가정",
      dateTime: "2024-04-10",
      time: "14:50",
    },
    {
      posterUrl:
        "https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202405/21037_103_1.jpg",
      movieTitle: "가필드 더 무비",
      theater: "메가박스 코엑스",
      dateTime: "2024-04-15",
      time: "18:30",
    },
    {
      posterUrl:
        "https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202405/21095_103_1.jpg",
      movieTitle: "혹성탈출: 새로운 시대",
      theater: "롯데시네마 월드타워",
      dateTime: "2024-04-20",
      time: "20:00",
    },
    {
      posterUrl:
        "https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202406/20970_103_1.jpg",
      movieTitle: "인사이드 아웃 2",
      theater: "CGV 천호",
      dateTime: "2024-04-25",
      time: "22:15",
    },
  ];

  // 모달 열기
  const openModal = (movieTitle) => {
    setCurrentMovieTitle(movieTitle);
    setRating(0);
    setReviewDate("");

    if (reviews[movieTitle]) {
      setModalMode("edit");
      // 관람평 수정을 위해 특정 URL로 리디렉션
      navigate(`/mypage/review/update/${encodeURIComponent(movieTitle)}`); // 수정된 부분
    } else {
      setModalMode("create");
      // 관람평 작성을 위해 특정 URL로 리디렉션
      navigate(`/mypage/review/add/${encodeURIComponent(movieTitle)}`); // navigate 함수 사용
    }

    setIsModalOpen(true);
  };

  // 모달 닫기
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 관람평 제출 처리
  const handleSubmitReview = (submittedReview, submittedRating) => {
    setReviews((prev) => ({
      ...prev,
      [currentMovieTitle]: {
        review: submittedReview,
        rating: submittedRating,
        reviewDate: new Date().toISOString().slice(0, 10),
      },
    }));
    closeModal();
  };

  // 관람평 삭제 처리
  const handleDeleteReview = (movieTitle) => {
    // URL 변경을 위해 navigate 함수 사용
    navigate(`/mypage/review/delete/${encodeURIComponent(movieTitle)}`); // 수정된 부분

    setReviews((prev) => {
      const updatedReviews = { ...prev };
      delete updatedReviews[movieTitle]; // 인자로 받은 영화 제목에 해당하는 관람평 삭제
      return updatedReviews;
    });

    // 삭제 후 모달 닫기 또는 목록으로 돌아가는 등의 추가 처리가 필요할 수 있음
  };

  // 페이지네이션 로직
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = my_movie_list.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 번호 변경 처리
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // 관람평이 존재할 때만 수정 및 삭제 버튼을 보여주도록 조건부 렌더링
  const reviewContent = (item) => {
    const itemReview = reviews[item.movieTitle];
    return itemReview ? (
      // 관람평이 있을 때의 렌더링
      <>
        <dl className="review_box">
          <dt>My Review</dt>
          <dd className="review-wrap">
            <span className="star-review">{itemReview.rating}</span>
            <AiOutlineLine className="rotate-icon" />
            {itemReview.review}
          </dd>
        </dl>
        <div className="user_review_box">
          <span className="txt_date">
            <img src={Calendar} alt="작성일자" />
            {itemReview.reviewDate}
          </span>
        </div>
        <div className="btn_box">
          <button
            type="button"
            className="btn_txt_edit"
            onClick={() => openModal(item.movieTitle)}
          >
            관람평 수정
          </button>
          <button
            type="button"
            className="btn_txt_del"
            onClick={() => handleDeleteReview(item.movieTitle)} // 영화 제목을 인자로 전달
          >
            삭제
          </button>
        </div>
      </>
    ) : (
      // 관람평이 없을 때의 렌더링
      <button
        type="button"
        className="btn_txt_create"
        onClick={() => openModal(item.movieTitle)}
      >
        관람평 작성
      </button>
    );
  };

  return (
    <div id="sub_section">
      <div className="mypage_wrap">
        <div className="title_sub_area">
          <div className="left_area">
            <h4 className="title">내가 관람한 영화</h4>
          </div>
        </div>
        <ul className="my_movie_list">
          {currentItems.map((item, index) => (
            <li key={index}>
              <div className="poster">
                <a href="#none" title="영화상세정보로 이동">
                  <img src={item.posterUrl} alt="영화 포스터" />
                </a>
              </div>
              <div className="movie-info">
                <strong className="tit">{item.movieTitle}</strong>
                <div className="detail_info">
                  <span className="txt location">{item.theater}</span>
                  <span className="txt time">
                    <em>{item.dateTime}</em>
                    <em>{item.time}</em>
                  </span>
                </div>
                {reviewContent(item)}
                <ReviewModal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  onSubmit={handleSubmitReview}
                  currentReview={reviews}
                  movieTitle={currentMovieTitle}
                  mode={modalMode} // 모달 모드 추가
                />
              </div>
            </li>
          ))}
        </ul>
        {my_movie_list.length > itemsPerPage && (
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={my_movie_list.length}
            paginate={paginate}
          />
        )}
      </div>
    </div>
  );
}

export default MovieInfo;
