import { useRef, useEffect, useState } from "react";

let isPrinting = false;

const EasyPrint = ({ children }) => {
  const wrapperRef = useRef();
  const [totalPages, setTotalPages] = useState([...Array(0)]);
  useEffect(() => {
    if (!isPrinting) return;

    window.print();

    wrapperRef.current.classList.remove("print--active");
    document.children[0].style.height = `auto`;
    document.body.style.height = `auto`;
    document.children[0].style.overflow = `visible`;
    document.body.style.overflow = `visible`;

    isPrinting = false;
  }, [totalPages]);

  useEffect(() => {
    if (isPrinting) {
      let totalHeight = 0;

      wrapperRef.current.classList.add("print--active");

      const children = Array.from(wrapperRef.current.children);
      children.forEach((child) => {
        totalHeight += child.scrollHeight;
      });

      const pageAvailableSpace = 934;
      const correctionFactor =
        (Math.ceil(totalHeight / pageAvailableSpace) - 1) * 41;

      const totalPagesNum = Math.ceil(
        (totalHeight + correctionFactor) / pageAvailableSpace
      );

      document.children[0].style.height = `100vh`;
      document.body.style.height = `100vh`;
      document.children[0].style.overflow = `hidden`;
      document.body.style.overflow = `hidden`;

      setTotalPages([...Array(totalPagesNum)]);
    }
  }, [isPrinting]);

  return (
    <section className={`print`} ref={wrapperRef}>
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
