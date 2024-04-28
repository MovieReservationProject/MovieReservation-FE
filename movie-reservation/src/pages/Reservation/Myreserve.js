import React from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs'

const Myreserve = () => {

    const selectmovie = useSelector((state)=>state.reservation.selectmovie)
    const selectcinema = useSelector((state)=>state.reservation.selectcinema)
    const selectdate = useSelector((state)=>state.reservation.selectdate)
    const selecttime = useSelector((state)=>state.reservation.selecttime)
    // const selectcinematype = useSelector((state)=>state.reservation.selectcinematype)
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
        screentime : 210,
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
    
    return (
        <div class="w-52 text-center">
        <div className="flex w-30">
            <div>
                영화: 
            </div>
            {selectmovie}
        </div>
        <div className="flex">
        <div>
                극장: 
            </div>
            {selectcinema}
        </div>
        <div className="flex">
        <div>
                상영관: 
            </div>
            {selectcinematype}
        </div>
        <div className="flex">
        <div>
                날짜: 
            </div>
            {reservedate}
        </div>
        <div className="flex">
        <div>
                시간: 
            </div>
            {selecttime}
        </div>
        </div>
    );
};

export default Myreserve;