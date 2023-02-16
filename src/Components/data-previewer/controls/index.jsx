import { useCallback } from "react";
import Button from "../button";

const Controls = ({ actions }) => {
  const { simulateDataReceived, simulateError, hideModal } = actions || {};

  const data = [
    {
      text: "Preview data received",
      onClick: simulateDataReceived,
      className: "previewer__btn--primary",
    },
    {
      text: "Simulate error",
      onClick: simulateError,
      className: "previewer__btn--secondary",
    },
    {
      text: "Close",
      onClick: hideModal,
      className: "previewer__btn--tertiary",
    },
  ];

  const renderBtn = useCallback((btn, i) => {
    const { text, onClick, className } = btn;
    return (
      <Button
        key={i + 1231}
        className={className}
        text={text}
        onClick={onClick}
      />
    );
  }, []);

  return (
    <section className="previewer__controls">{data.map(renderBtn)}</section>
  );
};

export default Controls;
