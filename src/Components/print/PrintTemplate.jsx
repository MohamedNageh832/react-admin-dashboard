import EasyPrint, { print } from ".";
import PageTitle from "./PageTitle";
import logo from "../../Assets/Images/logo.png";

const PrintTemplate = ({ triggerRef, title, children }) => {
  return (
    <EasyPrint triggerRef={triggerRef}>
      <PageTitle>
        <img className="logo" src={logo} />
        <span>{title}</span>
      </PageTitle>
      {children}
    </EasyPrint>
  );
};

export default PrintTemplate;

export { print };
