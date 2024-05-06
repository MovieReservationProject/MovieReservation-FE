import React, { useEffect, useState } from "react";
import "./Mainpage.css";
import { Dropdown, Spinner } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Movie from "./Movie";
import ReactPaginate from "react-paginate";
import Test from "../../assets/img/testimg.jpeg";

function Main() {
  const [movies, setMovies] = useState([
    {
      posterImg: { Test },
      movie_name: "범죄도시4",
      ticketSales: 92,
      score: 9,
      releaseDate: "2024년 4월 20일",
      dDay: 3,
    },
    {
      posterImg: { Test },
      movie_name: "파묘",
      ticketSales: 92,
      score: 9,
      releaseDate: "2024년 4월 20일",
      dDay: 3,
    },
    {
      posterImg: { Test },
      movie_name: "제목",
      ticketSales: 92,
      score: 9,
      releaseDate: "2024년 4월 20일",
      dDay: 3,
    },
    {
      posterImg: { Test },
      movie_name: "제목",
      ticketSales: 92,
      score: 9,
      releaseDate: "2024년 4월 20일",
      dDay: 3,
    },
    {
      posterImg: { Test },
      movie_name: "제목",
      ticketSales: 92,
      score: 9,
      releaseDate: "2024년 4월 20일",
      dDay: 3,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [dropDownOption, setDropDownOption] = useState("예매율순");

  // const getMovies = () => {};
  // movies 정보 받아오는 코드

  const handleDropdown = () => {
    if (dropDownOption === "예매율순") {
      // 예매율순으로 정렬
    } else if (dropDownOption === "평점순") {
      // 평점순으로 정렬
    }
  };

  // useEffect(() => {
  //   getMovies(), [];
  // });
  //

  return (
    <>
      <Header />
      <h1 className="main-title">무비차트</h1>
      <hr className="main-hr"></hr>
      <select className="main-dropdown">
        <option>{dropDownOption}</option>
        <option>{dropDownOption === "예매율순" ? "평점순" : "예매율순"}</option>
      </select>
      {isLoading ? (
        <div className="main-loading">로딩중입니다...</div>
      ) : (
        <div className="movie-chart">
          {movies.map((movie, index) => {
            return (
              <Movie
                key={index}
                posterImg={movie.posterImg}
                movie_name={movie.movie_name}
                ticketSales={movie.ticketSales}
                score={movie.score}
                releaseDate={movie.releaseDate}
                dDay={movie.dDay}
              />
            );
          })}
        </div>
      )}
      <ReactPaginate
        pageCount={10}
        pageRangeDisplayed={5}
        marginPagesDisplayed={0}
        breakLabel={""}
        previousLabel={"이전"}
        nextLabel={"다음"}
        // onPageChange={changePage} 페이지 이동하는 함수
        containerClassName={"main-paginate"}
        activeClassName={"currentPage"}
        previousClassName={"pageLabel-btn"}
        nextClassName={"pageLabel-btn"}
      />
      <Footer />
    </>
  );
}

export default Main;
