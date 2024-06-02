import React, { useState } from "react";
import "./Pagination.css";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    paginate(currentPage - 1); // 페이지 변경 시, paginate 함수 호출
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    paginate(currentPage + 1); // 페이지 변경 시, paginate 함수 호출
  };

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <a
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) goToPreviousPage();
            }}
            href="!#"
            className={`page-link ${currentPage === 1 ? "disabled" : ""}`}
          >
            <FiChevronLeft />
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              number === currentPage ? "page-item active" : "page-item"
            }
          >
            <a
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(number);
                paginate(number);
              }}
              href="!#"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) goToNextPage();
            }}
            href="!#"
            className={`page-link ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <FiChevronRight />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
