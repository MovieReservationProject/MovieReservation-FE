import React from "react";
import "./Footer.css";
import LinkList from "./LinkList";
import CompanyInfo from "./CompanyInfo";
import FamilySite from "./FamilySite";

function Footer() {
  return (
    <footer className="cgv-footer">
      <div className="footer-content">
        <div className="footer-links-inner">
          <LinkList />
        </div>
        <div className="footer-links-inner-wrap">
          <CompanyInfo />
          <FamilySite />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
