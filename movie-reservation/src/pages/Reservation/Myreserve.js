import React, { useEffect ,useState} from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs'

const Myreserve = (locationtheaters) => {

    const locationTheatersArray = locationtheaters.locationtheaters.locationTheaters;

    const selectmovie = useSelector((state)=>state.reservation.selectmovie)
    const selectcinema = useSelector((state)=>state.reservation.selectcinema)
    const selectcinematype = useSelector((state)=>state.reservation.selectcinematype)
    const selectdate = useSelector((state)=>state.reservation.selectdate)
    const selecttime = useSelector((state)=>state.reservation.selecttime)
    const reservedate =  dayjs(selectdate).format("YYYY-MM-DD")
    const myreservemovie =  locationTheatersArray?.filter(element=> element.movie_name === selectmovie
        && element.start_date === reservedate && element.cinema_name === selectcinema && element.start_time === selecttime
        && element.cinema_type === selectcinematype);

    // const reservedata = myreservemovie?.map(item => ({
    //         start_time: item.start_time,
    //         cinema_name: item.cinema_name,
    //         movie_name : item.movie_name,
    //         start_date: item.start_date,
    //         cinema_type : item.cinema_type
    //     }));

    const reservedata= {
        start_time: selecttime,
        cinema_name: selectcinema,
        movie_name : selectmovie,
        start_date: reservedate,
        cinema_type : selectcinematype

    }

    console.log('reservedata',reservedata)
    console.log(JSON.stringify(reservedata))



    const clickseathandler= async()=>{
        const token = sessionStorage.getItem('token');
        if (!token) {
            console.log('Token not found');
          }
        try {
            const response = await fetch('http://3.37.251.140:8080/reservation/add', {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(reservedata),
            });
      
            if (!response.ok) {
              throw new Error('error');
            }
      
            const data = await response.json();
          } catch (error) {
              console.log("오류발생:",error)
          }
    }
    
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
        <div >
                   <button class="" onClick={clickseathandler}>예약</button>
                   </div>
        </div>
    );
};

export default Myreserve;