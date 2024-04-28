import React from "react";
import WarningMovieForm from "./WarningMovieForm";
import MovieInfo from "./MovieInfo";

function MovieLog() {
  const my_movie_list = [
    // 여기에 당신의 영화 목록 객체들이 들어갑니다.
    // 예시:
    {
      posterUrl:
        "https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202404/20703_103_1.jpg",
      movieTitle: "쿵푸팬더4",
      theater: "CGV 인천가정",
      dateTime: "2024-04-10",
      time: "14:50",
    },
    {
      posterUrl:
        "https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202402/20808_103_1.jpg",
      movieTitle: "파묘",
      theater: "CGV 인천가정",
      dateTime: "2024-04-10",
      time: "14:50",
    },
    {
      posterUrl:
        "https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202405/21037_103_1.jpg",
      movieTitle: "가필드 더 무비",
      theater: "메가박스 코엑스",
      dateTime: "2024-04-15",
      time: "18:30",
    },
    {
      posterUrl:
        "https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202405/21095_103_1.jpg",
      movieTitle: "혹성탈출: 새로운 시대",
      theater: "롯데시네마 월드타워",
      dateTime: "2024-04-20",
      time: "20:00",
    },
    {
      posterUrl:
        "https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202406/20970_103_1.jpg",
      movieTitle: "인사이드 아웃 2",
      theater: "CGV 천호",
      dateTime: "2024-04-25",
      time: "22:15",
    },
    // 목록이 비어있을 경우: []
  ];

  return (
    <div>
      {my_movie_list.length > 0 ? (
        <MovieInfo my_movie_list={my_movie_list} />
      ) : (
        <WarningMovieForm />
      )}
    </div>
  );
}

export default MovieLog;
