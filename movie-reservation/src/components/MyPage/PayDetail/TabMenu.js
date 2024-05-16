import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

function TabMenu({ activeTab, setActiveTab }) {
  return (
    <>
      <Header />
      <div id="mypage_top_menu">
        <ul className="tab_wrap_lnk actionmovingbar">
          <li
            className={activeTab === 0 ? "active" : ""}
            onClick={() => setActiveTab(0)}
          >
            <Link to="/mypage/reservation">
              <span>MY 결제내역</span>
            </Link>
            {activeTab === 0 && (
              <ul>
                <li className="active">
                  <Link to="/mypage/reservation">
                    <span>예매내역</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className={activeTab === 1 ? "active" : ""}
            onClick={() => setActiveTab(1)}
          >
            <Link to="/mypage/reservation">
              <span>MY 무비로그</span>
            </Link>

            {activeTab === 1 && (
              <ul>
                <li className="">
                  <Link to="mypage/review/list">
                    <span>내가 본 영화</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className={activeTab === 2 ? "active" : ""}
            onClick={() => setActiveTab(2)}
          >
            <Link to="/mypage/userInfo">
              <span>MY 정보관리</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TabMenu;
