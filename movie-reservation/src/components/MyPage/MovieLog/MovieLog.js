import React, { useEffect ,useState} from 'react';
import WarningMovieForm from "./WarningMovieForm";
import MovieInfo from "./MovieInfo";
import axios from 'axios'

function MovieLog() {
  
  const [movielist,setmovielist] = useState([])
  useEffect(() => {
    fetchData2();
  }, []);


  const fetchData2 = async() => {
    const token = sessionStorage.getItem('token');
    try {
    const response = await axios("http://3.37.251.140:8080/mypage/reservation", { method: "GET" ,
    headers: {
      "Token": sessionStorage.getItem('token'),
    }});
    setmovielist(response.data.data);
  } catch (error) {
    console.error("데이터 가져오기 중 오류 발생:", error);
  };
}

const mymovielist = movielist.content;
 
console.log('mymovielist',mymovielist)

  return (
    <div>
      {mymovielist?.length > 0 ? (
        <MovieInfo mymovielist={mymovielist} />
      ) : (
        <WarningMovieForm />
      )}
    </div>
  );
}

export default MovieLog;
