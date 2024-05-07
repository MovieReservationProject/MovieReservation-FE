import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { reservationAction } from "../../store/reservation-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const Calendar = (locationtheaters) => {
  const locationTheatersArray =
    locationtheaters.locationtheaters.locationTheaters;
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectdate = useSelector((state) => state.reservation.selectdate);
  const selectmovie = useSelector((state) => state.reservation.selectmovie);

  const now = dayjs(new Date());
  const today = new Date(now.format("YYYY-MM-DD"));
  const oneweeklater = new Date(now.add(7, "day").format("YYYY-MM-DD"));
  const [reserveweeklist, setreserveweeklist] = useState([]);

  const getDatesStartToLast = (startDate, lastDate) => {
    const result = [];
    while (startDate <= lastDate) {
      result.push(startDate.toISOString().split("T")[0]);
      startDate.setDate(startDate.getDate() + 1);
    }
    setreserveweeklist(result);
    return result;
  };

  const movenextweek = () => {
    const startDate2 = new Date(
      dayjs(new Date(reserveweeklist[0])).add(7, "day").format("YYYY-MM-DD")
    );
    const lastDate2 = new Date(
      dayjs(startDate2).add(7, "day").format("YYYY-MM-DD")
    );
    getDatesStartToLast(startDate2, lastDate2);
  };

  const moveprevweek = () => {
    const startDate2 = new Date(
      dayjs(new Date(reserveweeklist[0])).format("YYYY-MM-DD")
    );
    const lastDate2 = new Date(
      dayjs(startDate2).add(-7, "day").format("YYYY-MM-DD")
    );
    getDatesStartToLast(lastDate2, startDate2);
  };

  const result = [];
  if (reserveweeklist && reserveweeklist.length > 0) {
    for (let i = 0; i < 7; i++) {
      const currentValue = reserveweeklist[i].substring(6, 7);
      const nextValue = reserveweeklist[i + 1].substring(6, 7);
      if (currentValue !== nextValue) {
        result.push("n");
      }
      result.push("m");
    }
  }

  useEffect(() => {
    getDatesStartToLast(today, oneweeklater);
  }, []);

  const dispatch = useDispatch();

  const setReservetdate = (reservedate) => {
    dispatch(reservationAction.selectdate(reservedate));
  };

  return (
    <>
      <div className="calendar"></div>
      <div class="flex"></div>
      <div class="flex mx-10 ">
        <button
          // class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={moveprevweek}
        >
          &lt;
        </button>
        <div class="flex">
          {locationTheatersArray &&
            reserveweeklist.map((date, index) => (
              <>
                <div
                  style={{
                    position: "relative",
                    top: "-20px",
                    left: "30px",
                    margin: "8px",
                  }}
                >
                  {reserveweeklist &&
                    reserveweeklist.length > 0 &&
                    result[index - 1] === "n" && (
                      <div>{reserveweeklist[index + 1].substring(6, 7)}</div>
                    )}
                </div>
                <div
                  style={{
                    margin: "3px",
                    color:
                      dayjs(date).format("dddd").substring(0, 3) === "Sun"
                        ? "red"
                        : dayjs(date).format("dddd").substring(0, 3) === "Sat"
                        ? "blue"
                        : "black",
                  }}
                  // class="border-solid border-2 border-indigo-600 ml-2 "
                  key={index}
                  onClick={() => setReservetdate(date)}
                >
                  <div
                    style={{
                      backgroundColor:
                        date === selectdate ? "#D3D3D3" : "transparent",
                      cursor: "pointer",
                    }}
                    class="hover:border-transparent rounded-full"
                  >
                    {date.substring(8, 10)}
                  </div>
                  <div>{dayjs(date).format("dddd").substring(0, 3)}</div>
                </div>
              </>
            ))}
        </div>
        <button class="ml-4" onClick={movenextweek}>
          &gt;
        </button>
      </div>
    </>
  );
};

export default Calendar;
