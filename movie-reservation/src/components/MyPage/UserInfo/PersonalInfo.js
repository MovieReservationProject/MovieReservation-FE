import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PhoneNumberEdit from "./PhoneNumberEdit";
import PasswordEdit from "./PasswordEdit";

function PersonalInfo() {
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const [showPasswordChangedAlert, setShowPasswordChangedAlert] =
    useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [loginCheck, setLoginCheck] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    fetchData2();
  }, []);

  const fetchData2 = async () => {
    const token = sessionStorage.getItem("token");
    try {
      const response = await fetch("http://3.37.251.140:8080/mypage/userInfo", {
        method: "GET",
        headers: {
          Token: sessionStorage.getItem("token"),
        },
      });
      const data = await response.json();
      setUserInfo(data.data);
    } catch (error) {
      console.error("데이터 가져오기 중 오류 발생:", error);
    }
  };

  const updateUserInfo = async () => {
    const token = sessionStorage.getItem("Token");
    if (!token) {
      console.error("토큰이 존재하지 않습니다.");
      return; // 토큰이 없으면 여기서 함수 실행을 멈춥니다.
    }
    const response = await fetch("http://3.37.251.140:8080/mypage/userInfo", {
      method: "PUT",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZXllb24iLCJyb2xlIjpbIlJPTEVfVVNFUiJdLCJpYXQiOjE3MTUwMDkyODIsImV4cCI6MTcxNTAxMjg4Mn0.ejcAB1j-5GVOsl_RUWhSiSo3LNqg28zrwouXPA0WyDw",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    if (response.ok) {
      alert("사용자 정보가 업데이트되었습니다.");
      sessionStorage.setItem("userInfo", JSON.stringify(userInfo)); // 세션 스토리지 업데이트
    }
  };

  const handleConfirmClick = () => {
    if (isPasswordChanged) {
      alert("비밀번호가 변경되었습니다.");
      setShowPasswordChangedAlert(true);
      setTimeout(() => setShowPasswordChangedAlert(false), 3000);
    }
    updateUserInfo();
  };

  const handlePasswordChange = () => {
    setIsPasswordChanged(true);
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
            <PhoneNumberEdit userInfo={userInfo} setUserInfo={setUserInfo} />
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
