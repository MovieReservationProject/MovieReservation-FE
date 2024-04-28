import React from "react";
import WarningSign from "../../../assets/png/warning-sign.png";

function WarningMovieForm() {
  return (
    <div className="warningSign-wrap">
      <img src={WarningSign} />
      <p>내가 본 영화가 없습니다.</p>
    </div>
  );
}

export default WarningMovieForm;
