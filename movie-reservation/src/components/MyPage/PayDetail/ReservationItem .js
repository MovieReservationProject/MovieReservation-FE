import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

function ReservationItem({ reservation }) {
  // isVisible 상태를 추가하여 예매 정보의 렌더링 여부를 결정합니다.
  const [isVisible, setIsVisible] = useState(true);
  // 예매 취소 버튼 클릭 시 호출될 함수입니다.
  const handleCancelClick = async (reservationNumber) => {
    setIsVisible(false); // 예매 정보 숨김 처리 활성화
    console.log("reservationNumber", reservationNumber);
    const token = sessionStorage.getItem("token"); // 세션에서 사용자 토큰 가져오기
    if (!token) {
      console.log("Token not found");
      return;
    }

    try {
      const response = await fetch(
        `http://3.37.251.140:8080/reservation/delete/${encodeURIComponent(
          reservationNumber
        )}`, // API 문서에 따라 URL 수정
        {
          method: "DELETE",
          headers: {
            Authorization: token, // 동적으로 토큰 삽입
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Fail");
      }
      console.log("success");
      // 성공 시 추가적인 처리 로직
    } catch (error) {
      console.error("Error!!", error);
      // 오류 처리 로직
    }
  };

  const clickreservehandler = (reservationNumber) => {
    console.log("Changing reservation for:", reservationNumber);
    // 예매 변경 로직을 여기에 구현합니다.
  };

  const deletedata = (reservationNumber) => {
    fetch(
      `http://3.37.251.140:8080/reservation/delete/${encodeURIComponent(
        reservationNumber
      )}`,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZXllb24iLCJyb2xlIjpbIlJPTEVfVVNFUiJdLCJpYXQiOjE3MTUwMDkyODIsImV4cCI6MTcxNTAxMjg4Mn0.ejcAB1j-5GVOsl_RUWhSiSo3LNqg28zrwouXPA0WyDw",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fail");
        }
        console.log("success");
      })
      .catch((error) => {
        console.error("Error!!", error);
      });
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
          <button
            type="button"
            data-status="94"
            onClick={() => clickreservehandler(reservation.reservationNumber)}
            className="round black cancel"
          >
            <span>예매변경</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReservationItem;
