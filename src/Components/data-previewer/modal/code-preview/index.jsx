import { useEffect, useRef } from "react";

const CodePreview = ({ title, data }) => {
  const codePreviewerRef = useRef();
  const adjustHeight = (e) => {
    e.target.height = e.target.scrollHeigth;
  };

  useEffect(() => {
    if (!codePreviewerRef.current) return;

    codePreviewerRef.current.style.height = `${codePreviewerRef.current.scrollHeight}px`;
  }, [data]);

  return (
    <section>
      <h4 className="previewer__title">{title}</h4>
      <textarea
        rows="1"
        ref={codePreviewerRef}
        className="previewer__code"
        onInput={adjustHeight}
        readOnly
        value={data}
      ></textarea>
    </section>
  );
};

export default CodePreview;
