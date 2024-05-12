import React, { useState } from "react";
import "./ReserveInfo.css";
import Pagination from "../MovieLog/Pagination";
import ReservationItem from "./ReservationItem ";

function ReserveInfo() {
  const [reservations, setReservations] = useState([]); // 예약 데이터 상태
  const [currentPage, setCurrentPage] = useState(1);
  const [reservationsPerPage] = useState(5); // 페이지 당 표시할 예약 수

  // 현재 페이지에 표시될 예약 정보 계산
  const indexOfLastReservation = currentPage * reservationsPerPage;
  const indexOfFirstReservation = indexOfLastReservation - reservationsPerPage;
  const currentReservations = reservations.slice(
    indexOfFirstReservation,
    indexOfLastReservation
  );

  // 페이지 변경 함수
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="box-info-wrap">
      <div className="title_sub_area">
        <div className="left_area">
          <h4 className="reservation-title">예매 내역</h4>
        </div>
      </div>
      {currentReservations.map((reservation, index) => (
        <ReservationItem key={index} reservation={reservation} />
      ))}
      <Pagination
        itemsPerPage={reservationsPerPage}
        totalItems={reservations.length}
        paginate={paginate}
      />
    </div>
  );
}

export default ReserveInfo;
