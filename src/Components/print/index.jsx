import { useRef, useEffect, useState } from "react";

let isPrinting = false;

const EasyPrint = ({ children }) => {
  const wrapperRef = useRef();
  const [totalPages, setTotalPages] = useState([...Array(0)]);
  useEffect(() => {
    if (!isPrinting) return;

    window.print();

    const tablesToBeHidden = Array.from(
      document.querySelectorAll(".table-widget")
    );

    tablesToBeHidden.forEach((el) => {
      el.style.display = "block";
    });
    isPrinting = false;
  }, [totalPages]);

  useEffect(() => {
    if (isPrinting) {
      let totalHeight = 0;

      const tablesToBeHidden = Array.from(
        document.querySelectorAll(".table-widget")
      );

      tablesToBeHidden.forEach((el) => {
        if (!el.contains(wrapperRef.current)) el.style.display = "none";
        else el.style.display = "block";
      });

      const children = Array.from(wrapperRef.current.children);
      children.forEach((child) => {
        totalHeight += child.scrollHeight;
      });
      const pageAvailableSpace = 923;
      const correctionFactor = (totalHeight / pageAvailableSpace - 1) * 41;

      const totalPagesNum = Math.ceil(
        (totalHeight + correctionFactor) / pageAvailableSpace
      );
      setTotalPages([...Array(totalPagesNum)]);
    }
  }, [isPrinting]);

  return (
    <section className="print" ref={wrapperRef}>
      {children}

      {totalPages.map((_, i) => (
        <small
          key={i}
          className="print__counter"
          style={{ top: `${(i + 1) * 1022 + i * 26}px` }}
        >
          {i + 1} من {totalPages.length}
        </small>
      ))}
    </section>
  );
};

const print = () => {
  isPrinting = true;
};

export default EasyPrint;

export { print };
