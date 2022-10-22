import { useRef, useEffect, useState } from "react";

const EasyPrint = ({ children }) => {
  const wrapperRef = useRef();
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const totalPagesNum = Math.ceil(wrapperRef.current.scrollHeight / 1361);

    setTotalPages(totalPagesNum);
  }, [wrapperRef]);

  return (
    <section className="print-wrapper" ref={wrapperRef}>
      {children}

      {totalPages > 0 &&
        [...Array(totalPages)].map((_, i) => (
          <small
            className="print__counter"
            style={{ top: `${(i + 1) * 1022 + i * 24.15}px` }}
          >
            {i + 1} من {totalPages}
          </small>
        ))}
    </section>
  );
};

export default EasyPrint;
