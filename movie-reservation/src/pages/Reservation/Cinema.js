import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { reservationAction } from '../../store/reservation-slice';
import {useDispatch} from 'react-redux';

const Cinema = () => {

    const selectmovie = useSelector((state)=>state.reservation.selectmovie)
    const selectlocation = useSelector((state)=>state.reservation.selectlocation)
    const selectcinema = useSelector((state)=>state.reservation.selectcinema)

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

    // const locationtheaters = [
    //     {movie:'가',
    //      location : '서울',
    //      cinema :['a']    
    //     },
    //     {movie:'나',
    //     location : '서울',
    //     cinema :['c','d']    
    //     },
    //     {movie:'가',
    //     location : '인천',
    //     cinema :['b']  
    //     },
    //     {movie:'다',
    //     location : '인천',
    //     cinema :['e','f']    
    //     },
    // ]

    const locationtheaters = [
        {movie:'가',
         location : '서울',
         cinema :'a' ,
         date:'20240430',
         time:'1100',
         seat:120   
        },
        {movie:'가',
        location : '서울',
        cinema :'a',
        date:'20240430',
        time:'1300',
        seat:167 
       },
       {movie:'가',
       location : '서울',
       cinema :'a' ,
       date:'20240428',
       time:'1230',
       seat:60
      },
      {movie:'나',
      location : '서울',
      cinema :'c' ,
      date:'20240428',
      time:'1700',
      seat:60
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

    const moviecinema = locationtheaters.filter(element=> element.movie === selectmovie);
    const cinemalist =[]
    moviecinema.forEach(item=>{
        if (!cinemalist.includes(item.cinema)){
            cinemalist.push(item.cinema)
        }
    })

    const dispatch = useDispatch();

    const selectcinemahandler=(movie)=>{
        dispatch(reservationAction.selectcinema(movie))
    }



    return (
        <div>
            {selectmovie && cinemalist?.map((cinema)=>(
                <div style={{backgroundColor : cinema === selectcinema ? '#D3D3D3' : 'transparent', cursor: 'pointer' , textAlign:'center'  }}onClick={()=>selectcinemahandler(cinema)}>
                    {cinema} 
                </div>
            ))}
        </div>
    );
};

export default Cinema;