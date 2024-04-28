import React from 'react';
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
import { reservationAction } from '../../store/reservation-slice';
import Calendar from './Calendar';
import Cinema from './Cinema';
import Movie from './Movie';
import Timetable from './Timetable';
import dayjs from 'dayjs'
import {useNavigate} from 'react-router-dom'
import Myreserve from './Myreserve';
import "./Reservation.css";

const Reservation = () => {

    const selectmovie = useSelector((state)=>state.reservation.selectmovie)
    const selectcinema = useSelector((state)=>state.reservation.selectcinema)
    const selectdate = useSelector((state)=>state.reservation.selectdate)
    const selecttime = useSelector((state)=>state.reservation.selecttime)
    const reservedate =  dayjs(selectdate).format("YYYYMMDD")

    const locationtheaters = [
      {movie:'가',
       location : '서울',
       cinema :'a' ,
       date:'20240423',
       time:'0900',
       seat:120   ,
       cinema_type: '6관',
       screentime : 125
      },
      {movie:'가',
      location : '서울',
      cinema :'a',
      date:'20240428',
      time:'1300',
      seat:167 ,
      cinema_type: '7관',
      screentime : 210
     },
     {movie:'가',
     location : '서울',
     cinema :'a',
     date:'20240428',
     time:'1100',
     seat:167 ,
     cinema_type: '7관',
     screentime : 210
    },
    {movie:'가',
    location : '서울',
    cinema :'a',
    date:'20240428',
    time:'0300',
    seat:167 ,
    cinema_type: '7관',
    screentime : 210
   },
   {movie:'가',
   location : '서울',
   cinema :'a',
   date:'20240428',
   time:'0200',
   seat:167 ,
   cinema_type: '7관',
   screentime : 210
  },
   {movie:'가',
   location : '서울',
   cinema :'a',
   date:'20240428',
   time:'2300',
   seat:167 ,
   cinema_type: '7관',
   screentime : 210
  },
     {movie:'가',
     location : '서울',
     cinema :'a' ,
     date:'20240428',
     time:'1230',
     seat:60,
     cinema_type: '8관',
     screentime : 130
    },
    {movie:'나',
    location : '서울',
    cinema :'c' ,
    date:'20240428',
    time:'1700',
    seat:60,
    screentime : 175
   },
   {movie:'나',
   location : '서울',
   cinema :'d' ,
   date:'20240428',
   time:'1900',
   seat:60
  },
      {movie:'가',
      location : '인천',
      cinema :'b'  ,
   date:'20240428',
   time:'2000',
   seat:60
      },
      {movie:'다',
      location : '인천',
      cinema :'e'  ,
   date:'20240428',
   time:'2000',
   seat:60
      },
      {movie:'다',
      location : '인천',
      cinema :'f'  ,
   date:'20240428',
   time:'2000',
   seat:60
      },
      {movie:'다',
      location : '서울',
      cinema :'g'  ,
   date:'20240428',
   time:'2000',
   seat:60
      },
  ]

  const myreservemovie =  locationtheaters.filter(element=> element.movie === selectmovie
    && element.date === reservedate && element.cinema === selectcinema && element.time === selecttime);


  const selectcinematype = myreservemovie[0]?.cinema_type

    const clickseathandler=()=>{
        console.log(selectmovie)
        console.log(selectcinema)
        console.log(reservedate)
        console.log(selecttime)
        console.log(selectcinematype)
    }


    return (
        <>
        <div class="wrap max-w-5xl mx-auto mt-6 mb-6 my-0 flex border-solid border-2 border-black-600 ">
            <div class="flex-none w-32 border-r-2">
              <div class="font-semibold grow h-10 mb-1 mt-1 border-b-2 border-black-500">
                영화
              </div>
              <div>
           <Movie></Movie>
           </div>
           </div>
             <div class="flex-none w-32 border-r-2">
             <div class="font-semibold grow h-10 mb-1 mt-1 border-b-2 border-black-500">
                극장
              </div>
              <div>
             <Cinema></Cinema>
             </div>
           </div>
           <div >
           <div class=" font-semibold grow h-10 mb-1 mt-1  border-b-2 border-black-500">
            {dayjs(selectdate).format("YYYYMMDD")}
            </div>
            <div class="mt-6 w-auto">
              <div class="mx-4 justify-center">
           <Calendar></Calendar>
           </div>
           <Timetable></Timetable>
           </div>
           </div>
           <div class="border-l-2">
           <div class="font-semibold grow h-10 mb-1 mt-1 border-black-500">
             
           </div>
           <div class="mx-4 justify-center">
             <Myreserve></Myreserve>
           </div>
           <div class = "mx-12">
                   <button class="bg-transparent hover:bg-black-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-black-500 hover:border-transparent rounded" onClick={clickseathandler}>예약</button>
                   </div>
           </div>
      
        </div>
                  
                   </>
    );
};

export default Reservation;