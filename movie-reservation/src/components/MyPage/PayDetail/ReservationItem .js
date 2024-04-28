import React, { useState } from "react";

function ReservationItem({ reservation }) {
  // isVisible 상태를 추가하여 예매 정보의 렌더링 여부를 결정합니다.
  const [isVisible, setIsVisible] = useState(true);

  // 예매 취소 버튼 클릭 시 호출될 함수입니다.
  const handleCancelClick = () => {
    setIsVisible(false); // isVisible 상태를 false로 변경하여 정보를 숨깁니다.
  };

  // isVisible이 false이면, 예매 정보를 렌더링하지 않습니다.
  if (!isVisible) {
    return null;
  }

  return (
    <div className="box-set-info">
      <div className="box-number">
        <em>예매번호</em>
        <strong>{reservation.reservationNumber}</strong>
      </div>
      <div className="box-info">
        <div className="detail-area">
          <div className="reservation-info-wrap">
            <h2 className="box-contents artHouse">
              <a href="/movies/detail-view/" className="res-title">
                {reservation.movieTitle}
              </a>
            </h2>
            <ul className="reservation-mv-info">
              <li>
                <dl>
                  <dt>관람극장</dt>
                  <dd>{reservation.theater}</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>관람일시</dt>
                  <dd>{reservation.dateTime}</dd>
                </dl>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="set-btn">
        <div className="col-print">
          <button
            type="button"
            data-status="94"
            onClick={handleCancelClick}
            className="round black cancel"
          >
            <span>예매취소</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReservationItem;
