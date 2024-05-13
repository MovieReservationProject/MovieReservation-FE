import React, { useEffect, useState } from 'react';
import { reservationAction } from '../../store/reservation-slice';
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs'
import ErrorModal from './ErrorModal';

const Timetable = (locationtheaters , myreserveNum, mytitleKorean) => {

    const reserveNum = locationtheaters.myreserveNum


    const locationTheatersArray = locationtheaters.locationtheaters.locationTheaters;

    const selectdate = useSelector((state)=>state.reservation.selectdate)
    const selectmovie = useSelector((state)=>state.reservation.selectmovie)
    const selectcinema = useSelector((state)=>state.reservation.selectcinema)
    const selecttime = useSelector((state)=>state.reservation.selecttime)
    const selectcinematype = useSelector((state)=>state.reservation.selectcinematype)


    const reservedate = dayjs(selectdate).format("YYYY-MM-DD")
    const dispatch = useDispatch();

    const movietimelist = locationTheatersArray?.filter(element=> element.movie_name === selectmovie
        && element.start_date=== reservedate && element.cinema_name === selectcinema);



    const timetablelist =[]
    movietimelist?.forEach(item=>{
        if (!timetablelist.includes(item.start_time)){
            timetablelist.push(item.start_time)
        }
    })


    const endTimelist =[]
    movietimelist?.forEach(item=>{
        if (!endTimelist.includes(item.start_time)){
            const hour = parseInt(item.start_time.substring(0,2))
            const min = parseInt(item.start_time.substring(3,5))
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



    const selecttimehandler=(start_time,cinema_type)=>{
            dispatch(reservationAction.selecttime({start_time,cinema_type}))
    }


    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
  
    const openModal = () => {
      setModalIsOpen(true);
    }
  
    const closeModal = () => {
      setModalIsOpen(false);
    }
    
    console.log('timetablelist!@!@!@!@',timetablelist)
    console.log('reserveNum!@!@!@!@',reserveNum)

    useEffect(()=>{
        if (!reserveNum &&selectmovie && selectcinema && selectdate && timetablelist.length===0){
            console.log('없다!!')
            setErrorMessage("해당일자에 상영하는 영화가 없습니다.");
            openModal();
          }

    },[selectdate])


    return (
        <>
        <div class="flex flex-wrap w-96 mr-4 ml-28">
        
            {(selectmovie  &&selectdate && selectcinema) && movietimelist?.map((item, index) => (
                <div  class ="mx-2 w-24 m-4 border border-light-grey-500 hover:border-transparent rounded"  key={index} onClick={() => selecttimehandler(item.start_time, item.cinema_type)}>
                    <div style={{backgroundColor : (item.start_time === selecttime && item.cinema_type === selectcinematype)? '#D3D3D3' : 'transparent', cursor: 'pointer' , textAlign :'center'}}>
                        {item.start_time.substring(0,2)}:{item.start_time.substring(3,5)}
                        <div>
                        {item.cinema_type} {item.remaining_seat}
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