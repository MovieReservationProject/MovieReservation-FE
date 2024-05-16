import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Myreserve = (locationtheaters) => {
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
    reserve_time: selecttime,
    cinema_name: selectcinema,
    movie_name: selectmovie,
    reserve_date: reservedate,
    cinema_type: selectcinematype,
  };

  let navigate = useNavigate();

  // const clickreservehandler= async()=>{
  //     const token = sessionStorage.getItem('token');
  //     if (!token) {
  //         console.log('Token not found');
  //       }
  //     try {
  //         const response = await fetch("http://3.37.251.140:8080/reservation/add", {
  //           method: "POST",
  //           headers: {
  //             // 'Authorization': `Bearer ${token}`,
  //             "Token": sessionStorage.getItem('token'),
  //             "Content-Type": 'application/json',
  //           },
  //         //   body: JSON.stringify(reservedata),
  //         body: JSON.stringify({
  //             'reserve-time': selecttime,
  //             'cinema-name': selectcinema,
  //             'movie-name': selectmovie,
  //             'reserve-date': reservedate,
  //             'cinema-type' : selectcinematype
  //           }),
  //         });

  //         if (!response.ok) {
  //           throw new Error('error');
  //         }
  //         else{
  //             alert("예약이 완료되었습니다. 마이페이지로 이동합니다.");
  //             navigate("/mypage");
  //         }

  //       } catch (error) {
  //           console.log("오류발생!!:",error)
  //       }
  // }

  const clickreservehandler = async () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      console.log("Token not found");
      return;
    }

    try {
      const response = await axios.post(
        "http://3.37.251.140:8080/reservation/add",
        {
          "reserve-time": selecttime,
          "cinema-name": selectcinema,
          "movie-name": selectmovie,
          "reserve-date": reservedate,
          "cinema-type": selectcinematype,
        },
        {
          headers: {
            Token: token,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response == "200") {
        throw new Error("Error");
      } else {
        alert("예약이 완료되었습니다. 마이페이지로 이동합니다.");
        navigate("/mypage/reservation");
      }
    } catch (error) {
      console.log("오류 발생!!:", error);
    }
  };

  return (
    <div class="w-52 text-center">
      <div>
        <div className="flex w-30">
          <div>영화 : </div>
          {selectmovie}
        </div>
        <div className="flex">
          <div>극장 : </div>
          {selectcinema}
        </div>
        <div className="flex">
          <div>상영관 : </div>
          {selectcinematype}
        </div>
        <div className="flex">
          <div>날짜 : </div>
          {reservedate}
        </div>
        <div className="flex">
          <div>시간 : </div>
          {selecttime}
        </div>
      </div>
      <button
        onClick={clickreservehandler}
        style={{
          border: "1px solid black",
          borderRadius: "8px",
          padding: "5px",
          fontSize: "13px",
          margin: "20px 20px 20px 0",
        }}
      >
        예매하기
      </button>
    </div>
  );
};

export default Myreserve;
