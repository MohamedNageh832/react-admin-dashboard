import {
  KeyboardArrowRightOutlined,
  KeyboardArrowLeftOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";

const TablePagination = ({ numberOfPages }) => {
  const [currentPage, setCurrentPage] = useState(13);
  const [arrOfCurrPages, setArrOfCurrentPages] = useState([]);

  const handlePagination = () => {
    if (currentPage >= 1 && currentPage < 3) {
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
  };

  return (
    <header className="table-widget__header">
      <h5>123 عميل</h5>
      <form className="pagination" onSubmit={handleSubmit}>
        <button className="btn pagination__btn" disabled={currentPage === 1}>
          <KeyboardArrowRightOutlined />
        </button>
        {arrOfCurrPages.map((item, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(item)}
            disabled={typeof item == "string"}
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
        >
          <KeyboardArrowLeftOutlined />
        </button>
      </form>
    </header>
  );
};

export default TablePagination;
