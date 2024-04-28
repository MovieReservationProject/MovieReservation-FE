import React, { useEffect, useState } from 'react';
import { reservationAction } from '../../store/reservation-slice';
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs'
import ErrorModal from './ErrorModal';

const Timetable = () => {

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

    const selectdate = useSelector((state)=>state.reservation.selectdate)
    const selectmovie = useSelector((state)=>state.reservation.selectmovie)
    const selectcinema = useSelector((state)=>state.reservation.selectcinema)
    const selecttime = useSelector((state)=>state.reservation.selecttime)

    const seat = useSelector((state)=>state.reservation.seat)

    const reservedate = dayjs(selectdate).format("YYYYMMDD")
    const dispatch = useDispatch();

    const movietimelist = locationtheaters.filter(element=> element.movie === selectmovie
        && element.date === reservedate && element.cinema === selectcinema);

    
    const timetablelist =[]
    movietimelist.forEach(item=>{
        if (!timetablelist.includes(item.time)){
            timetablelist.push(item.time)
        }
    })

    const endTimelist =[]
    movietimelist.forEach(item=>{
        if (!endTimelist.includes(item.time)){
            const hour = parseInt(item.time.substring(0,2))
            const min = parseInt(item.time.substring(2,4))
            let newHour = hour + Math.floor((min + item.screentime) / 60);
            let newMinute = (min + item.screentime) % 60;
            if (newMinute<10){
                newMinute='0'+newMinute
            } 
            newHour = newHour % 24;
            if (newHour<10){
                newHour='0'+newHour
            } 
            endTimelist.push(newHour.toString()+newMinute.toString())
        }
    })



    const selecttimehandler=(time)=>{
            dispatch(reservationAction.selecttime(time))
    }


    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
  
    const openModal = () => {
      setModalIsOpen(true);
    }
  
    const closeModal = () => {
      setModalIsOpen(false);
    }

    useEffect(()=>{
        if (selectmovie && selectcinema && selectdate && timetablelist.length===0){
            setErrorMessage("해당일자에 상영하는 영화가 없습니다.");
            openModal();
          }

    },[selectdate])


    return (
        <>
        <div class="flex flex-wrap w-96 mr-4 ml-28">
        
            {(selectmovie  &&selectdate && selectcinema) && movietimelist.map((item, index) => (
                <div  class ="mx-2 w-24 m-4 border border-light-grey-500 hover:border-transparent rounded"  key={index} onClick={()=>selecttimehandler(item.time)}>
                    <div style={{backgroundColor : item.time === selecttime ? '#D3D3D3' : 'transparent', cursor: 'pointer'}}>
                        {item.time.substring(0,2)}:{item.time.substring(2,4)}~{endTimelist[index].substring(0,2)}:{endTimelist[index].substring(2,4)} 
                        <div>
                        {item.cinema_type} {item.seat - seat}/{item.seat}
                        </div>
                        </div>
                </div>
            ))}
        </div>
            { modalIsOpen && <ErrorModal errorMessage={errorMessage} modalIsOpen={modalIsOpen}
            closeModal={closeModal} ></ErrorModal>}
            </>
    );
};

export default Timetable;