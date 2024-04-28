import React, { useState } from "react";

function PhoneNumberEdit() {
  const [isPhoneEdit, setIsPhoneEdit] = useState(false);
  // 전화번호를 각각의 상태로 관리합니다. (예시에서는 단순화를 위해 하나의 상태만 사용합니다.)
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneEditClick = () => {
    if (isPhoneEdit) {
      // 저장 버튼이 눌렸을 때, 상태를 확인하고 알림을 띄웁니다.
      alert("전화번호가 변경되었습니다.");
    }
    setIsPhoneEdit(!isPhoneEdit);
  };

  // 전화번호 입력 상태를 업데이트하는 함수입니다.
  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  return (
    <tr className="info-row">
      <td className="info-label">휴대전화번호</td>
      <td className="info-content">
        <ul>
          <>
            <li>
              <input className="info-edit" placeholder="" />
            </li>
            <li>
              <input className="info-edit" placeholder="" />
            </li>
            <li>
              <input className="info-edit" placeholder="" />
            </li>
          </>
          <li>
            <button className="edit-button" onClick={handlePhoneEditClick}>
              {isPhoneEdit ? "저장" : "변경"}
            </button>
          </li>
        </ul>
      </td>
    </tr>
  );
}

export default PhoneNumberEdit;
