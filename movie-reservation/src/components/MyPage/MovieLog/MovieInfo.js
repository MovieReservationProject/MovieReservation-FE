import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MovieLog.css";
import ReviewModal from "./ReviewModal";
import Pagination from "./Pagination";
import Calendar from "../../../assets/png/calendar.png";
import { AiOutlineLine } from "react-icons/ai";
import axios from "axios";

function MovieInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviews, setReviews] = useState({});
  const [reviewDate, setReviewDate] = useState("");
  const [rating, setRating] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentMovieTitle, setCurrentMovieTitle] = useState("");
  const [currentmovieId, setcurrentmovieId] = useState("");
  const [modalMode, setModalMode] = useState("create");
  const navigate = useNavigate();

  const [itemsPerPage] = useState(5);

  const [movielist, setmovielist] = useState([]);
  useEffect(() => {
    fetchData2();
  }, []);

  const fetchData2 = async () => {
    const token = sessionStorage.getItem("token");
    try {
      const response = await fetch(
        "http://3.37.251.140:8080/mypage/reservation",
        {
          method: "GET",
          headers: {
            Token: sessionStorage.getItem("token"),
          },
        }
      );
      const data = await response.json();
      setmovielist(data.data);
    } catch (error) {
      console.error("데이터 가져오기 중 오류 발생:", error);
    }
  };

  const mymovielist = movielist.content;

  const [reviewlist, setreviewlist] = useState([]);
  useEffect(() => {
    fetchData3();
  }, []);

  const fetchData3 = async () => {
    const token = sessionStorage.getItem("token");
    try {
      const response = await axios(
        "http://3.37.251.140:8080/mypage/review/list",
        {
          method: "GET",
          headers: {
            Token: sessionStorage.getItem("token"),
          },
        }
      );
      setreviewlist(response.data.data);
    } catch (error) {
      console.error("데이터 가져오기 중 오류 발생:", error);
    }
  };
  console.log("reviewlist", reviewlist);

  // 모달 열기
  const openModal = (titleKorean, movieId) => {
    setCurrentMovieTitle(titleKorean);
    setcurrentmovieId(movieId);
    setRating(0);
    setReviewDate("");

    if (Reviewsbytitle[titleKorean]) {
      setModalMode("edit");
      // 관람평 수정을 위해 특정 URL로 리디렉션
      navigate(`/mypage/review/update/${encodeURIComponent(titleKorean)}`); // 수정된 부분
    } else {
      setModalMode("create");
      // 관람평 작성을 위해 특정 URL로 리디렉션
      navigate(`/mypage/review/add/${encodeURIComponent(titleKorean)}`); // navigate 함수 사용
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
  const handleDeleteReview = (movieId, reviewId) => {
    fetch(`http://3.37.251.140:8080/mypage/review/delete/${movieId}`, {
      method: "DELETE",
      headers: {
        Token: sessionStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fail");
        }
        setreviewlist((reviewlist) =>
          reviewlist.filter((review) => review.movieId !== movieId)
        );
        console.log("삭제후", reviewlist);
        alert("해당 리뷰가 삭제되었습니다.");
      })
      .catch((error) => {
        console.error("Error!!", error);
      });
  };

  const Reviewsbytitle = reviewlist.reduce((acc, curr) => {
    const { titleKorean, content, score } = curr;

    const reviewInfo = { content, score };

    acc[titleKorean] = reviewInfo;

    return acc;
  }, {});

  // 페이지네이션 로직
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = movielist.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 번호 변경 처리
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // 관람평이 존재할 때만 수정 및 삭제 버튼을 보여주도록 조건부 렌더링
  const reviewContent = (item) => {
    const itemReview = Reviewsbytitle[item.titleKorean];
    return itemReview ? (
      // 관람평이 있을 때의 렌더링
      <>
        <dl className="review_box">
          <dt>My Review</dt>
          <dd className="review-wrap">
            <span className="star-review">{itemReview.score}</span>
            <AiOutlineLine className="rotate-icon" />
            {itemReview.content}
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
            onClick={() => openModal(item.titleKorean, item.movieId)}
          >
            관람평 수정
          </button>
          <button
            type="button"
            className="btn_txt_del"
            onClick={() => handleDeleteReview(item.movieId)} // 영화 제목을 인자로 전달
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
        onClick={() => openModal(item.titleKorean, item.movieId)}
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
          {mymovielist?.map((item, index) => (
            <li key={index}>
              <div className="poster">
                <a href="#none" title="영화상세정보로 이동">
                  <img src={item.posterUrl} alt="영화 포스터" />
                </a>
              </div>
              <div className="movie-info">
                <strong className="tit">{item.titleKorean}</strong>
                <div className="detail_info">
                  <span className="txt location">{item.cinemaName}</span>
                  <span className="txt time">
                    <em>{item.movieDate}</em>
                    <em>{item.startTime}</em>
                  </span>
                </div>
                {reviewContent(item)}
                <ReviewModal
                  movieId={currentmovieId}
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  onSubmit={handleSubmitReview}
                  currentReview={reviews}
                  movieTitle={currentMovieTitle}
                  reviewlist={reviewlist}
                  fetchData3={fetchData3}
                  mode={modalMode} // 모달 모드 추가
                />
              </div>
            </li>
          ))}
        </ul>
        {/* {movielist.length > itemsPerPage && (
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={movielist.length}
            paginate={paginate}
          />
        )} */}
        {/* {mymovielist?.map((item, index) => (
       {item}
      ))} */}
      </div>
    </div>
  );
}

export default MovieInfo;
