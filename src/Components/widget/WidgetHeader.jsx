import { Link } from "react-router-dom";

const WidgetHeader = ({ children, linkTo }) => {
  return (
    <header className="widget__header">
      <h4 className="h4">{children}</h4>
      <Link className="link" to={linkTo}>
        المزيد
      </Link>
    </header>
  );
};

export default WidgetHeader;
