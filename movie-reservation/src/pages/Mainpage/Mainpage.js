import React, { useEffect, useState } from "react";
import "./Mainpage.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Movie from "./Movie";
import ReactPaginate from "react-paginate";

function Main() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState();
  const [dropDownOption, setDropDownOption] = useState("예매율순");

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    fetch("http://3.37.251.140:8080/api/find", { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        setMovies(res.data);
      });
    setPage(2);
  };

  const changeFetch = () => {
    fetch(`http://3.37.251.140:8080/api/find?page=2&size=3&sort=1`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setMovies(res.data);
      });
    setPage(1);
  };

  const changePage = () => {
    if (page === 2) {
      changeFetch();
    } else if (page === 1) getMovies();
  };

  const handleDropdown = () => {
    if (dropDownOption === "예매율순") {
      // 예매율순으로 정렬
    } else if (dropDownOption === "평점순") {
      // 평점순으로 정렬
    }
  };

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
          {movies.map((movie) => {
            return <Movie movie={movie} />;
          })}
        </div>
      )}
      <ReactPaginate
        pageCount={2}
        pageRangeDisplayed={2}
        marginPagesDisplayed={0}
        breakLabel={""}
        previousLabel={"이전"}
        nextLabel={"다음"}
        onPageChange={changePage}
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
