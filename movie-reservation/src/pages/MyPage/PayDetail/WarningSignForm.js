import React from "react";
import WarningSign from "../../../assets/png/warning-sign.png";

function WarningSignForm() {
  return (
    <div className="warningSign-wrap">
      <img src={WarningSign} />
      <p>예매 내역이 존재하지 않습니다.</p>
    </div>
  );
}

export default WarningSignForm;
