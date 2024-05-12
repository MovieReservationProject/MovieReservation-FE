import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

function ReservationItem({ reservation }) {
  // isVisible 상태를 추가하여 예매 정보의 렌더링 여부를 결정합니다.
  const [isVisible, setIsVisible] = useState(true);
  const [reservations, setReservations] = useState([]); // 예약 데이터 상태
  const selectmovie = useSelector((state) => state.reservation.selectmovie);
  const selectcinema = useSelector((state) => state.reservation.selectcinema);
  const selectdate = useSelector((state) => state.reservation.selectdate);
  const selecttime = useSelector((state) => state.reservation.selecttime);
  const reservedate = dayjs(selectdate).format("YYYY-MM-DD");
  const reservedata = {
    start_time: selecttime,
    cinema_name: selectcinema,
    movie_name: selectmovie,
    start_date: reservedate,
  };

  console.log("reservedata", reservedata);
  console.log(JSON.stringify(reservedata));

  const clickreservehandler = async () => {
    // 세션에서 사용자 토큰 가져오기
    const token = sessionStorage.getItem("token");
    console.log("token", token);
    if (!token) {
      console.log("Token not found");
      // 여기서 사용자에게 인증 오류 메시지를 표시할 수 있습니다.
      return; // 토큰이 없으면 함수 종료
    }
    try {
      const response = await fetch(
        "http://3.37.251.140:8080/mypage/reservation",
        {
          method: "POST",
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZXllb24iLCJyb2xlIjpbIlJPTEVfVVNFUiJdLCJpYXQiOjE3MTUwMDkyODIsImV4cCI6MTcxNTAxMjg4Mn0.ejcAB1j-5GVOsl_RUWhSiSo3LNqg28zrwouXPA0WyDw`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reservedata),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      // 요청 성공 처리, 예를 들면 상태 업데이트나 사용자에게 성공 메시지 표시
    } catch (error) {
      console.error("예매 중 오류가 발생했습니다.:", error);
      // 여기서 사용자에게 오류 메시지를 표시할 수 있습니다.
    }
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

  // 예매 취소 버튼 클릭 시 호출될 함수입니다.
  const handleCancelClick = (reservationNumber) => {
    // setIsVisible(false); // isVisible 상태를 false로 변경하여 정보를 숨깁니다.
    // console.log(e.target.value)
    console.log("reservationNumber", reservationNumber);
    deletedata(reservationNumber);
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
