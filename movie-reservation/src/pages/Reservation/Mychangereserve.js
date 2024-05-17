import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const Mychangereserve = (
  locationtheaters,
  myreserveNum,
  mytitleKorean,
  mycinemaName,
  mymoviedate,
  myreserveid
) => {
  const locationTheatersArray =
    locationtheaters.locationtheaters.locationTheaters;

  const selectmovie = useSelector((state) => state.reservation.selectmovie);
  const selectcinema = useSelector((state) => state.reservation.selectcinema);
  const selectcinematype = useSelector(
    (state) => state.reservation.selectcinematype
  );
  const selectdate = useSelector((state) => state.reservation.selectdate);
  const selecttime = useSelector((state) => state.reservation.selecttime);
  const reservedate = dayjs(selectdate).format("YYYY-MM-DD");
  const myreservemovie = locationTheatersArray?.filter(
    (element) =>
      element.movie_name === selectmovie &&
      element.start_date === reservedate &&
      element.cinema_name === selectcinema &&
      element.start_time === selecttime &&
      element.cinema_type === selectcinematype
  );

  const reservedata = {
    change_time: selecttime,
  };

  console.log("reservedata", reservedata);
  console.log(JSON.stringify(reservedata));

  const reserveNum = locationtheaters.myreserveNum.replace("-", "");
  const reserveId = locationtheaters.myreserveid;
  console.log("puttttt", reserveNum);

  let navigate = useNavigate();

  const handlechangeClick = (reserveId) => {
    console.log("reservationNumber", reserveId);
    changedata(reserveId);
  };

  const changedata = (reserveId) => {
    console.log("changedate", reserveId);

    const token = sessionStorage.getItem("token");
    const encodedReserveId = encodeURIComponent(reserveId);
    const encodedReserveNum = encodeURIComponent(reserveNum);
    const encodedReserveNumwithouthypen = encodeURIComponent(
      reserveNum.replace("-", "")
    );
    // fetch(`http://3.37.251.140:8080/reservation/update/${encodeURIComponent(reserveNum)}`, {
    fetch(
      `http://3.37.251.140:8080/reservation/update?reservation-id=${encodedReserveId}`,
      {
        method: "PUT",
        headers: {
          Token: sessionStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          change_time: selecttime,
        }),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fail");
        } else {
          alert("예약변경이 완료되었습니다. 마이페이지로 이동합니다.");
          navigate("/mypage");
        }
      })
      .catch((error) => {
        console.error("Error!!", error);
      });
  };

  return (
    <div class="w-52 text-center">
      <div className="flex w-30">
        <div>영화:</div>
        {selectmovie}
      </div>
      <div className="flex">
        <div>극장:</div>
        {selectcinema}
      </div>
      <div className="flex">
        <div>상영관:</div>
        {selectcinematype}
      </div>
      <div className="flex">
        <div>날짜:</div>
        {reservedate}
      </div>
      <div className="flex">
        <div>시간:</div>
        {selecttime}
      </div>
      <div>
        <button
          onClick={() => handlechangeClick(reserveId)}
          style={{
            fontSize: "13px",
            padding: "5px",
            border: "1px solid black",
            borderRadius: "8px",
            margin: "20px 15px 20px 0 ",
          }}
        >
          예매변경
        </button>
      </div>
    </div>
  );
};

export default Mychangereserve;
