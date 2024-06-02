import React from "react";
import WarningSign from "../../../assets/png/warning-sign.png";
import "./MovieLog.css";

function WarningMovieForm() {
  return (
    <div className="warningMovie-wrap">
      <img src={WarningSign} />
      <p>내가 본 영화가 없습니다.</p>
    </div>
  );
}

export default WarningMovieForm;
