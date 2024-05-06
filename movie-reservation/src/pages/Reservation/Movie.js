import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { reservationAction } from '../../store/reservation-slice';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Movie = (locationtheaters) => {

  
    const dispatch = useDispatch();
    const locationTheatersArray = locationtheaters.locationtheaters.locationTheaters;
    const movies = Array.from(new Set(locationTheatersArray?.map((item) => item.movie_name)));

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const movieName = queryParams.get('titleKorean');

    useEffect(() => {
        if (movieName) {
          dispatch(reservationAction.selectmovie(movieName));
        }
      }, [dispatch, movieName]);

    const selectmoviehandler=(movie)=>{
        dispatch(reservationAction.selectmovie(movie))
    }

    const selectmovie = useSelector((state)=>state.reservation.selectmovie)
    return (
        <div>
               {movies && movies.map((movie,index)=>(
                <div key={index} onClick={()=>selectmoviehandler(movie)}
                style={{backgroundColor : movie === selectmovie ? '#D3D3D3' : 'transparent', cursor: 'pointer' , textAlign:'center' }} 
                >
                    {movie}
                </div>
            ))}
        </div>
    );
               }

export default Movie;