import React, { useState } from "react";
import "./MyPage.css";
import "../UserInfo/UserInfo.css";
import TabMenu from "./TabMenu";
import PolicySection from "./PolicySection";
import WarningSignForm from "./WarningSignForm";
import UserInfo from "../UserInfo/PersonalInfo";
import MovieLog from "../MovieLog/MovieLog";
import ReserveInfo from "./ReserveInfo";

function MyPage() {
  const [activeTab, setActiveTab] = useState(null);
  // 예시를 위한 가상의 예약 데이터 배열
  const reservations = [
    // 예약 데이터 배열...
    {
      reservationNumber: "0296-0428-3111-313",
      movieTitle: "쿵푸팬더4",
      theater: "CGV 인천가정",
      dateTime: "2024.04.28 11:15",
    },
  ];

  return (
    <div>
      <TabMenu activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* '결제내역' 탭이 선택되었을 때 WarningSignForm과 PolicySectionTable 컴포넌트를 렌더링합니다. */}
      {activeTab === 0 && (
        <>
          {reservations.length > 0 ? (
            <ReserveInfo reservations={reservations} />
          ) : (
            <WarningSignForm />
          )}
          <PolicySection />
        </>
      )}
      {activeTab === 1 && <MovieLog />}
      {activeTab === 2 && <UserInfo />}
    </div>
  );
}

export default MyPage;
