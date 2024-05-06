import React from "react";
import "./DetailPage.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Movie from "../Mainpage/Movie";
import { useLocation } from "react-router-dom";

function DetailPage() {
  const { state } = useLocation();

  const imgRoot = `/img/${state.poster}.jpeg`;

  return (
    <>
      <Header />
      <div className="detail-wrapper">
        <div className="detail-info">
          <img src={imgRoot} className="movie-poster"></img>
          <div className="movie-info">
            <h3 className="movie-title">{state.titleKorean}</h3>
            <p className="movie-etitle">{state.titleEnglish}</p>
          </div>
          <div>
            <span>예매율</span>
            <span>⭐️ </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetailPage;
