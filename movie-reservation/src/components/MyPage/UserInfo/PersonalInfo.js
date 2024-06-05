import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PhoneNumberEdit from "./PhoneNumberEdit";
import PasswordEdit from "./PasswordEdit";

function PersonalInfo() {
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const [showPasswordChangedAlert, setShowPasswordChangedAlert] =
    useState(false);
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    fetchData2();

    // 세션 스토리지에서 전화번호 불러오기
    const storedPhoneNumber = sessionStorage.getItem("phoneNumber");
    if (storedPhoneNumber) {
      setUserInfo((prevState) => ({
        ...prevState,
        phoneNumber: storedPhoneNumber,
      }));
    }
  }, []);

  const fetchData2 = async () => {
    const token = sessionStorage.getItem("token");
    try {
      const response = await fetch("/backend/mypage/userInfo", {
        method: "GET",
        headers: {
          Token: sessionStorage.getItem("token"),
        },
      });
      let data = await response.json();
      // 세션 스토리지에서 전화번호 불러오기
      const storedPhoneNumber = sessionStorage.getItem("phoneNumber");
      if (storedPhoneNumber) {
        data.data.phoneNumber = storedPhoneNumber; // 서버로부터 받은 데이터에 세션 스토리지의 전화번호를 반영
      }

      // 세션 스토리지에서 비밀번호 불러오기
      const storedPassword = sessionStorage.getItem("password");
      if (storedPassword) {
        data.data.password = storedPassword; // 서버로부터 받은 데이터에 세션 스토리지의 비밀번호를 반영
      }

      setUserInfo(data.data);
    } catch (error) {
      console.error("데이터 가져오기 중 오류 발생:", error);
    }
  };

  console.log("userinfo", userInfo.PhoneNumber);

  const updateUserInfo = async updatedUserInfo => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      console.error("토큰이 존재하지 않습니다.");
      return; // 토큰이 없으면 여기서 함수 실행을 멈춥니다.
    }
    const response = await fetch("/backend/mypage/userInfo", {
      method: "PUT",
      headers: {
        Token: token, // 여기도 수정했습니다.
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUserInfo),
    });
    if (response.ok) {
      alert("사용자 정보가 업데이트되었습니다.");
      sessionStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));
    } else {
      console.error(
        "사용자 정보 업데이트 중 오류가 발생했습니다. 상태 코드:",
        response.status
      );
      const errorResponse = await response.text();
      console.error("오류 응답:", errorResponse);
    }
  };

  const handleConfirmClick = () => {
    if (!userInfo.password || userInfo.password.trim() === "") {
      alert("비밀번호가 설정되지 않았습니다. 비밀번호를 입력해주세요.");
      return;
    }
    if (isPasswordChanged) {
      alert("비밀번호가 변경되었습니다.");
      setShowPasswordChangedAlert(true);
      setTimeout(() => setShowPasswordChangedAlert(false), 3000);
    }
    // 현재 상태의 userInfo를 updateUserInfo 함수에 전달합니다.
    updateUserInfo(userInfo);
  };

  const handlePasswordChange = (newPassword) => {
    // userInfo 상태를 업데이트하여 비밀번호 변경 반영
    setUserInfo((prevState) => ({
      ...prevState,
      password: newPassword, // 비밀번호 필드가 'password'라고 가정
    }));
    // 비밀번호가 변경되었다는 상태 업데이트
    setIsPasswordChanged(true);
    // 세션 스토리지에 비밀번호 저장
    sessionStorage.setItem("password", newPassword);
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
