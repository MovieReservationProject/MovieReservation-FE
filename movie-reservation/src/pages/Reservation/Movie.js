import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { reservationAction } from '../../store/reservation-slice';

const Movie = () => {


    const movies =['가','나','다']

    const movietheaters = [
        {movie:'가',
         cinema :['a','b']    
        },
        {movie:'나',
        cinema :['c','d']    
        },
        {movie:'다',
        cinema :['e','f']    
        }
    ]


    const dispatch = useDispatch();

    const selectmoviehandler=(movie)=>{
        dispatch(reservationAction.selectmovie(movie))
    }

    const selectmovie = useSelector((state)=>state.reservation.selectmovie)

    return (
        <div>
               {movies.map((movie,index)=>(
                <div key={index} onClick={()=>selectmoviehandler(movie)}
                style={{backgroundColor : movie === selectmovie ? '#D3D3D3' : 'transparent', cursor: 'pointer' , textAlign:'center' }} 
                // class="border-solid border-2 border-indigo-600 ml-2 "
                >
                    {movie}
                </div>
            ))}
        </div>
    );
};

export default Movie;