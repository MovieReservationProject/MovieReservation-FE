import React, { useState, useEffect } from "react";
import PhoneNumberEdit from "./PhoneNumberEdit";
import PasswordEdit from "./PasswordEdit";
import Header from "../../Header/Header";
import TabMenu from "../PayDetail/TabMenu";
import Footer from "../../Footer/Footer";

function PersonalInfo() {
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const [showPasswordChangedAlert, setShowPasswordChangedAlert] =
    useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    myId: "",
    birthday: "",
  }); // 사용자 정보 상태 추가

  useEffect(() => {
    fetchUserInfo(); // 컴포넌트가 마운트될 때 사용자 정보 가져오기
  }, []);

  const fetchUserInfo = async () => {
    try {
      const response = await fetch("http://3.37.251.140:8080/mypage/userinfo", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // 필요한 경우 Authorization 헤더 추가, 예: Authorization: `Bearer ${token}`
        },
      });
      setUserInfo({ ...response.data });
    } catch (error) {
      console.error("사용자 정보 가져오기 실패:", error);
    }
  };

  const handlePasswordChange = () => {
    setIsPasswordChanged(true);
  };

  const updateUserInfo = async () => {
    const response = await fetch("http://3.37.251.140:8080/mypage/userInfo", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // 필요한 경우 Authorization 헤더 추가
      },
      body: JSON.stringify(userInfo),
    });
    if (response.ok) {
      alert("사용자 정보가 업데이트되었습니다.");
    }
  };

  const handleConfirmClick = () => {
    if (isPasswordChanged) {
      alert("비밀번호가 변경되었습니다."); // 사용자에게 변경 알림
      setShowPasswordChangedAlert(true);
      setTimeout(() => setShowPasswordChangedAlert(false), 3000); // 3초 후 메시지 숨김
    }
    updateUserInfo(); // 사용자 정보 업데이트
  };

  return (
    <>
      <div>
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
                    <p>{userInfo.name}</p>
                  </td>
                </tr>
                <tr className="settings-row">
                  <td className="settings-label">아이디</td>
                  <td className="settings-value">
                    <p>{userInfo.myId}</p>
                  </td>
                </tr>
                <tr className="settings-row">
                  <td className="settings-label">생년월일</td>
                  <td className="settings-value">
                    <p>{userInfo.birthday} </p>
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
        <Footer />
      </div>
    </>
  );
}

export default PersonalInfo;
