import {
  KeyboardArrowRightOutlined,
  KeyboardArrowLeftOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";

const TablePagination = ({ numberOfPages, currentPage, setCurrentPage }) => {
  const [arrOfCurrPages, setArrOfCurrentPages] = useState([]);

  const handlePagination = () => {
    if (numberOfPages < 6) {
      const paginationArray = [...Array(numberOfPages)].map((_, i) => i + 1);
      setArrOfCurrentPages(paginationArray);
    } else if (currentPage >= 1 && currentPage < 3) {
      setArrOfCurrentPages([1, 2, 3, "...", numberOfPages]);
    } else if (currentPage === 3) {
      setArrOfCurrentPages([1, 2, 3, 4, "...", numberOfPages]);
    } else if (
      currentPage > numberOfPages - 2 &&
      currentPage <= numberOfPages
    ) {
      setArrOfCurrentPages([
        1,
        "...",
        numberOfPages - 2,
        numberOfPages - 1,
        numberOfPages,
      ]);
    } else if (currentPage === numberOfPages - 2) {
      setArrOfCurrentPages([
        1,
        "...",
        numberOfPages - 3,
        numberOfPages - 2,
        numberOfPages - 1,
        numberOfPages,
      ]);
    } else {
      const previousPage = currentPage - 1;
      const nextPage = currentPage + 1;
      setArrOfCurrentPages([
        1,
        "...",
        previousPage,
        currentPage,
        nextPage,
        "...",
        numberOfPages,
      ]);
    }
  };

  useEffect(() => {
    handlePagination();
  }, [currentPage]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ currentPage }),
    });
  };

  return (
    <form className="pagination" onSubmit={handleSubmit}>
      <button
        className="btn pagination__btn"
        disabled={currentPage === 1}
        onClick={() =>
          currentPage <= 1 ? false : setCurrentPage((n) => n - 1)
        }
      >
        <KeyboardArrowRightOutlined />
      </button>
      {arrOfCurrPages.map((item, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(item)}
          disabled={typeof item === "string"}
          className={`btn pagination__btn ${
            item === currentPage ? "active" : ""
          }`}
        >
          {item}
        </button>
      ))}
      <button
        className="btn pagination__btn"
        disabled={currentPage === numberOfPages}
        onClick={() =>
          currentPage >= numberOfPages ? false : setCurrentPage((n) => n + 1)
        }
      >
        <KeyboardArrowLeftOutlined />
      </button>
    </form>
  );
};

export default TablePagination;
