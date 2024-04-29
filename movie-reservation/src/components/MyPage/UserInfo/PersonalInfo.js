import React, { useState } from "react";
import PhoneNumberEdit from "./PhoneNumberEdit";
import PasswordEdit from "./PasswordEdit";

function PersonalInfo() {
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const [showPasswordChangedAlert, setShowPasswordChangedAlert] =
    useState(false);

  const handlePasswordChange = () => {
    setIsPasswordChanged(true);
  };

  const handleConfirmClick = () => {
    if (isPasswordChanged) {
      alert("비밀번호가 변경되었습니다."); // 사용자에게 변경 알림
      setShowPasswordChangedAlert(true);
      setTimeout(() => setShowPasswordChangedAlert(false), 3000); // 3초 후 메시지 숨김 (이 부분은 이미 있음)
    }
  };

  return (
    <div className="profile-settings-container">
      <h2 className="settings-title">개인정보변경</h2>
      <p className="settings-description">
        회원님의 소중한 정보를 안전하게 관리하세요.
      </p>
      <div className="settings-box">
        <table className="settings-table">
          <tbody>
            <tr className="settings-row">
              <td className="settings-label">이름</td>
              <td className="settings-value">
                <p>홍길동</p>
              </td>
            </tr>
            <tr className="settings-row">
              <td className="settings-label">아이디</td>
              <td className="settings-value">
                <p>abc</p>
              </td>
            </tr>
            <tr className="settings-row">
              <td className="settings-label">생년월일</td>
              <td className="settings-value">
                <p>1999년 10월 26일 </p>
              </td>
            </tr>
            <PhoneNumberEdit />
            <PasswordEdit onPasswordChange={handlePasswordChange} />
          </tbody>
        </table>
        <div className="settings-btn">
          <button className="settings-cancle-btn">취소</button>
          <button className="settings-ok-btn" onClick={handleConfirmClick}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
