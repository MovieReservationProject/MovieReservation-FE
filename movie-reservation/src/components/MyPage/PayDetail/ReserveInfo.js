import React, { useEffect, useState } from "react";
import "./ReserveInfo.css";
import Pagination from "../MovieLog/Pagination";
import ReservationItem from "./ReservationItem ";

function ReserveInfo() {
  const [reservations, setreservations] = useState([]);
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
      setreservations(data.data);
    } catch (error) {
      console.error("데이터 가져오기 중 오류 발생:", error);
    }
  };

  const myreservation = reservations.content;

  // myreservation.map((item,index)=>{
  //   console.log(item.reserveNum)
  // })

  // console.log('slicccc',reservations.content.slice[0,5])

  const [currentPage, setCurrentPage] = useState(1);
  const [reservationsPerPage] = useState(5); // 페이지 당 표시할 예약 수

  // 현재 페이지에 표시될 예약 정보 계산
  // const indexOfLastReservation = currentPage * reservationsPerPage;
  // const indexOfFirstReservation = indexOfLastReservation - reservationsPerPage;
  // console.log('page',indexOfLastReservation,indexOfFirstReservation)
  // const currentReservations = reservations.slice(
  //   indexOfLastReservation,
  //   indexOfFirstReservation
  // );

  // 페이지 변경 함수
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="box-info-wrap">
      <div className="title_sub_area">
        <div className="left_area">
          <h4 className="reservation-title">예매 내역</h4>
        </div>
      </div>
      {/* {currentReservations.map((myreservation, index) => (
        <ReservationItem key={index} reservation={myreservation} />
      ))} */}
      {myreservation?.map((item, index) => (
        <ReservationItem key={index} reservation={item} />
      ))}
      {/* <ReservationItem reservation={myreservation}></ReservationItem> */}
      {/* <Pagination
        itemsPerPage={reservationsPerPage}
        totalItems={reservations.length}
        paginate={paginate}
      /> */}
    </div>
  );
}

export default ReserveInfo;
