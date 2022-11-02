import { Link } from "react-router-dom";

const WidgetHeader = ({ children, linkTo, className }) => {
  return (
    <header className={`widget__header ${className ? className : ""}`}>
      <h4>{children}</h4>
      <Link className="link fs-3" to={linkTo}>
        المزيد
      </Link>
    </header>
  );
};

export default WidgetHeader;
