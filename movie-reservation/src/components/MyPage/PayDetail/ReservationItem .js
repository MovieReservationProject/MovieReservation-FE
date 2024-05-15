import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ReservationItem({ reservation ,reservations}) {
  // isVisible 상태를 추가하여 예매 정보의 렌더링 여부를 결정합니다.

  const [isVisible, setIsVisible] = useState(true);
  const [allreservation,setallreservations] = useState(reservations)
  console.log('allreservation',allreservation)

  const encodedReserveId = encodeURIComponent(reservation.reserveId);
  console.log(encodedReserveId)

  const deletedata = (reserveId) => {
  
    fetch(`http://3.37.251.140:8080/reservation/delete?reservation-id=${encodedReserveId}`, {
      method: 'DELETE',
      headers: {
        "Token": sessionStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Fail');
      }else{
        console.log('success');
        alert("해당 예약이 취소되었습니다.");
        navigate("/mypage/reservation");
        setallreservations(allreservation => allreservation.filter(reservation => reservation.reserveId !== reserveId));
      }
    })
    .catch(error => {
      console.error('Error!!', error);
    });
  };

  const navigate = useNavigate();
 

  // 예매 취소 버튼 클릭 시 호출될 함수입니다.
  const handleCancelClick = (reserveId) => {
    deletedata(reserveId) 
  };


  const navigateTochangereservemovie=(myreserveNum, mytitleKorean, mycinemaName ,mymoviedate,myreserveid)=>{
    navigate(`/reservationChange/${myreserveNum}`, { state: { myreserveNum , mytitleKorean, mycinemaName,mymoviedate,myreserveid} });
  }

  // isVisible이 false이면, 예매 정보를 렌더링하지 않습니다.
  if (!isVisible) {
    return null;
  }

  return (
    <>
    {allreservation?.map((reservation, index) => (
    <div className="box-set-info">
      <div className="box-number">
        <em>예매번호</em>
        <strong>{reservation.reserveNum}</strong>
      </div>
      <div className="box-info">
        <div className="detail-area">
          <div className="reservation-info-wrap">
            <h2 className="box-contents artHouse">
              <a href="/movies/detail-view/" className="res-title">
                {reservation.movieTitle}
              </a>
            </h2>
            <ul className="reservation-mv-info">
              <li>
                <dl>
                  <dt>관람영화</dt>
                  <dd>{reservation.titleKorean}</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>관람극장</dt>
                  <dd>{reservation.cinemaName}</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>관람일시</dt>
                  <dd>{reservation.movieDate} {reservation.startTime}</dd>
                </dl>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="set-btn">
        <div className="col-print">
          <button
            type="button"
            data-status="94"
            onClick={()=>handleCancelClick(reservation.reserveId)}
            className="round black cancel"
          >
            <span>예매취소</span>
          </button>
          <button
            type="button"
            data-status="94"
            onClick={()=>navigateTochangereservemovie(reservation.reserveNum, reservation.titleKorean, reservation.cinemaName ,reservation.movieDate ,reservation.reserveId )}
            className="round black cancel"
          >
            <span>예매변경</span>
          </button>
        </div>
      </div>
    </div>
      ))}
      </>
  );
}

export default ReservationItem;
