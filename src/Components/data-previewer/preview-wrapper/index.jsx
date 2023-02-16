import { usePreviewer } from "..";
import PreviewButton from "../preview-btn";

const PreviewWrapper = ({ children, dataSent, dataReceived }) => {
  const { state, showModal, updateData } = usePreviewer();

  const handleClick = () => {
    updateData(dataSent, dataReceived);
  };

  return (
    <section className="previewer">
      <PreviewButton onClick={handleClick} />
      {children}
    </section>
  );
};

export default PreviewWrapper;
