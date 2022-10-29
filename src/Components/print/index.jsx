import { useRef, useEffect, useState } from "react";

let isPrinting = false;

const EasyPrint = ({ children }) => {
  const wrapperRef = useRef();
  const [totalPages, setTotalPages] = useState([...Array(0)]);

  useEffect(() => {
    if (!isPrinting) return;

    document.querySelectorAll(".print").forEach((el) => {
      if (el !== wrapperRef.current) el.style.display = "block";
    });

    window.print();
    isPrinting = false;
  }, [totalPages]);

  useEffect(() => {
    if (isPrinting) {
      let totalHeight = 0;
      document.querySelectorAll(".print").forEach((el) => {
        if (el !== wrapperRef.current) el.style.display = "none";
        console.log(el !== wrapperRef.current);
      });

      const children = Array.from(wrapperRef.current.children);
      children.forEach((child) => (totalHeight += child.scrollHeight));

      const totalPagesNum = Math.ceil(totalHeight / 1000);

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
