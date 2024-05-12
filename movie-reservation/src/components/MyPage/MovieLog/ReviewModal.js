import React, { useState, useEffect } from "react";
import "./ReviewModal.css";
import StarRating from "./StarRating";

function ReviewModal(props) {
  const { isOpen, onClose, onSubmit, currentReview, movieTitle, mode } = props;
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("1");
  const [isEditing, setIsEditing] = useState(false); // 관람평 수정 여부
  // 모달 창 제목을 결정하는 로직
  const modalTitle = mode === "create" ? "관람평 작성" : "관람평 수정";

  const placeholderText = `평점 및 영화 관람평을 작성해주세요.\n※ 비방 및 욕설이 포함된 관람평의 경우 운영원칙에 의거하여 제재 조치를 받을 수 있습니다.`;

  // 관람평 입력 처리
  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  // 관람평 및 평점 제출 처리
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(review, rating); // 평점도 함께 전달
    onClose(); // 제출 후 모달창 닫기
  };

  useEffect(() => {
    if (isOpen) {
      setIsEditing(currentReview !== ""); // 현재 관람평이 있으면 수정 상태로 설정
      setReview(currentReview || ""); // 현재 관람평으로 설정 또는 초기화
    }
  }, [isOpen, currentReview]); // useEffect에 currentReview도 의존성 배열에 추가

  // 영화 제목이 바뀔 때마다 review와 rating 초기화
  useEffect(() => {
    setReview("");
    setRating("1");
  }, [movieTitle]);

  return (
    <div>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={onClose}>
              &times;
            </span>
            <form onSubmit={handleSubmit}>
              <h2 className="modal-content-review">{modalTitle}</h2>
              <h2 className="modal-content-title">{movieTitle}</h2>
              <StarRating setRating={setRating} />
              <textarea
                value={review}
                onChange={handleReviewChange}
                required
                placeholder={placeholderText}
              />
              <button type="button" onClick={onClose}>
                닫기
              </button>
              <button type="submit">확인</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReviewModal;
