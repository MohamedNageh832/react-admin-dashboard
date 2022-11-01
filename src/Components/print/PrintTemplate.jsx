import EasyPrint, { print } from ".";
import PageTitle from "./PageTitle";
import logo from "../../Assets/Images/logo.png";
import PageFooter from "./PageFooter";

const PrintTemplate = ({ triggerRef, title, footer, children }) => {
  return (
    <EasyPrint triggerRef={triggerRef}>
      <PageTitle>
        <img className="logo" src={logo} />
        <span>{title}</span>
      </PageTitle>
      {children}
      {footer && <PageFooter>{footer}</PageFooter>}
    </EasyPrint>
  );
};

export default PrintTemplate;

export { print };
