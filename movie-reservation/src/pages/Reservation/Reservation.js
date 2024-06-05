import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { reservationAction } from "../../store/reservation-slice";
import Calendar from "./Calendar";
import Cinema from "./Cinema";
import Movie from "./Movie";
import Timetable from "./Timetable";
import dayjs from "dayjs";
import Myreserve from "./Myreserve";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useSearchParams } from "react-router-dom";

const Reservation = () => {
  const [locationtheaters, setlocationtheaters] = useState([]);
  useEffect(() => {
    fetchData2();
  }, []);

  const fetchData2 = async () => {
    try {
      const response = await fetch("/backend/reservation/get", {
        method: "GET",
      });
      const data = await response.json();
      setlocationtheaters(data.data);
    } catch (error) {
      console.error("데이터 가져오기 중 오류 발생:", error);
    }
  };

  const selectmovie = useSelector((state) => state.reservation.selectmovie);
  const selectlocation = useSelector(
    (state) => state.reservation.selectlocation
  );
  const selectcinema = useSelector((state) => state.reservation.selectcinema);
  const selectdate = useSelector((state) => state.reservation.selectdate);
  const selecttime = useSelector((state) => state.reservation.selecttime);
  const reservedate = dayjs(selectdate).format("YYYYMMDD");

  // const myreservemovie =  locationtheaters.filter(element=> element.movie === selectmovie
  //   && element.date === reservedate && element.cinema === selectcinema && element.time === selecttime);

  // const selectcinematype = myreservemovie[0]?.cinema_type

  return (
    <>
      <Header></Header>
      <div
        class="wrap max-w-5xl mx-auto mt-6 mb-6 my-0 flex border-solid border-2 border-black-600 "
        style={{ margin: "auto", marginBottom: "100px", marginTop: "100px" }}
      >
        <div class="flex-none w-32 border-r-2">
          <div class="text-center font-semibold grow h-10 mb-1 mt-1 border-b-2 border-black-500">
            영화
          </div>
          <div>
            <Movie locationtheaters={locationtheaters}></Movie>
          </div>
        </div>
        <div class="flex-none w-32 border-r-2">
          <div class="text-center font-semibold grow h-10 mb-1 mt-1 border-b-2 border-black-500">
            극장
          </div>
          <div>
            <Cinema locationtheaters={locationtheaters}></Cinema>
          </div>
        </div>
        <div>
          <div class="text-center font-semibold grow h-10 mb-1 mt-1  border-b-2 border-black-500">
            {dayjs(selectdate).format("YYYYMMDD")}
          </div>
          <div class="mt-6 w-auto">
            <div class="mx-4 justify-center">
              <Calendar locationtheaters={locationtheaters}></Calendar>
            </div>
            <Timetable locationtheaters={locationtheaters}></Timetable>
          </div>
        </div>
        <div class="border-l-2">
          <div class="font-semibold grow h-10 mb-1 mt-1 border-black-500"></div>
          <div class="mx-4 justify-center">
            <Myreserve locationtheaters={locationtheaters}></Myreserve>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Reservation;
