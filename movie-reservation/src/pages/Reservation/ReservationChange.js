import React, { useEffect ,useState} from 'react';
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
import { reservationAction } from '../../store/reservation-slice';
import Calendar from './Calendar';
import Cinema from './Cinema';
import Movie from './Movie';
import Timetable from './Timetable';
import dayjs from 'dayjs'
import Myreserve from './Myreserve';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useSearchParams } from 'react-router-dom';
import Mychangereserve from './Mychangereserve';
import { useParams ,useLocation} from 'react-router-dom';

const ReservationChange = () => {
  const { state } = useLocation();

  const location = useLocation();
  const {myreserveNum , mytitleKorean, mycinemaName,mymoviedate,myreserveid}= location.state;

  const [locationtheaters,setlocationtheaters] = useState([])
  useEffect(() => {
    fetchData2();
  }, []);

  const fetchData2 = async() => {
    try {
    const response = await fetch("http://3.37.251.140:8080/reservation/get", { method: "GET" });
    const data = await response.json();
    setlocationtheaters(data.data);
  } catch (error) {
    console.error("데이터 가져오기 중 오류 발생:", error);
  };
}

  console.log('locationtheaters!!!!!!!!',locationtheaters)
  console.log('resrerere',myreserveNum)
  console.log('resrerere111',mytitleKorean)
  console.log('resrerere',mycinemaName)
  console.log('resrerere2222',mymoviedate)

  // const locationtheaters =  [{
  //   reserveNum: reserveNum,
  //   movie_name: titleKorean,
  //   cinema_name : cinemaName}]

  // const locationTheaters = {
  //     "locationTheaters": locationtheaters.map(item => ({
  //         reserveNum: item.reserveNum,
  //         movie_name: item.movie_name,
  //         cinema_name: item.cinema_name
  //     }))
  // };
      return (
        <>
        <Header></Header>
        <div class="wrap max-w-5xl mx-auto mt-6 mb-6 my-0 flex border-solid border-2 border-black-600 ">
            <div class="flex-none w-32 border-r-2">
              <div class="text-center font-semibold grow h-10 mb-1 mt-1 border-b-2 border-black-500">
                영화
              </div>
              <div>
           <Movie locationtheaters={locationtheaters} myreserveNum={myreserveNum} 
           mytitleKorean ={mytitleKorean}> </Movie>
           </div>
           </div>
             <div class="flex-none w-32 border-r-2">
             <div class="text-center font-semibold grow h-10 mb-1 mt-1 border-b-2 border-black-500">
                극장
              </div>
              <div>
             <Cinema locationtheaters={locationtheaters} myreserveNum={myreserveNum} 
           mytitleKorean ={mytitleKorean} mycinemaName={mycinemaName}></Cinema>
             </div>
           </div>
           <div >
           <div class="text-center font-semibold grow h-10 mb-1 mt-1  border-b-2 border-black-500">
            {dayjs(mymoviedate).format("YYYYMMDD")}
            </div>
            <div class="mt-6 w-auto">
              <div class="mx-4 justify-center">
           <Calendar locationtheaters={locationtheaters} myreserveNum={myreserveNum} 
           mytitleKorean ={mytitleKorean} mycinemaName={mycinemaName} mymoviedate={mymoviedate}></Calendar>
           </div>
           <Timetable locationtheaters={locationtheaters} myreserveNum={myreserveNum} 
           mytitleKorean ={mytitleKorean} mycinemaName={mycinemaName} mymoviedate={mymoviedate}></Timetable>
           </div>
           </div>
           <div class="border-l-2">
           <div class="font-semibold grow h-10 mb-1 mt-1 border-black-500">
             
           </div>
           <div class="mx-4 justify-center">
             <Mychangereserve locationtheaters={locationtheaters} myreserveNum={myreserveNum} 
           mytitleKorean ={mytitleKorean} mycinemaName={mycinemaName} mymoviedate={mymoviedate} myreserveid={myreserveid}></Mychangereserve>
           </div>
          
           </div>
      
        </div>
        <Footer></Footer>        
                   </>
    );
};

export default ReservationChange;