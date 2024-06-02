import React, { useState, useEffect } from "react";

function PhoneNumberEdit({ userInfo, setUserInfo }) {
  const [isPhoneEdit, setIsPhoneEdit] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(
    formatPhoneNumber(userInfo.phoneNumber || "")
  ); // 초기값 설정 시 형식을 맞추어 줍니다

  useEffect(() => {
    // userInfo가 변경될 때마다 phoneNumber를 업데이트하면서 형식을 맞춥니다
    setPhoneNumber(formatPhoneNumber(userInfo.phoneNumber || ""));
  }, [userInfo.phoneNumber]);

  const handlePhoneEditClick = () => {
    if (isPhoneEdit) {
      alert("전화번호가 변경되었습니다.");
      // 변경된 전화번호를 userInfo에 반영
      const updatedUserInfo = {
        ...userInfo,
        phoneNumber: phoneNumber.replace(/-/g, ""),
      }; // '-' 를 제거하고 저장합니다
      setUserInfo(updatedUserInfo);

      // 변경된 전화번호를 세션 스토리지에 저장
      sessionStorage.setItem("phoneNumber", updatedUserInfo.phoneNumber);
    }
    setIsPhoneEdit(!isPhoneEdit);
  };

  const handlePhoneChange = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedPhoneNumber);
  };

  // 전화번호를 지정된 형식(010-0000-0000)으로 변환하는 함수
  function formatPhoneNumber(phoneNumber) {
    let cleaned = ("" + phoneNumber).replace(/\D/g, ""); // 숫자가 아닌 문자를 제거
    let match = cleaned.match(/^(\d{3})(\d{4})?(\d{4})?$/);

    if (match) {
      // 캡쳐된 그룹에 해당하는 부분이 있다면 '-'로 구분하여 반환
      return `${match[1]}${match[2] ? "-" + match[2] : ""}${
        match[3] ? "-" + match[3] : ""
      }`;
    }

    return phoneNumber; // 입력 형식에 맞지 않는 경우 원본 반환
  }

  return (
    <tr className="info-row">
      <td className="info-label">휴대전화번호</td>
      <td className="info-content">
        {isPhoneEdit ? (
          <input
            className="info-edit"
            value={phoneNumber}
            onChange={handlePhoneChange}
          />
        ) : (
          <span>{phoneNumber}</span>
        )}
        <button className="edit-button" onClick={handlePhoneEditClick}>
          {isPhoneEdit ? "저장" : "변경"}
        </button>
      </td>
    </tr>
  );
}

export default PhoneNumberEdit;
