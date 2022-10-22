import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/logo.png";
import {
  KeyboardArrowDown,
  AccountCircleOutlined,
  Menu,
} from "@mui/icons-material";
import UserOptions from "./UserOptions";

const Navbar = ({ setShowSidebar }) => {
  const [showUserOptions, setShowUserOptions] = useState(false);

  return (
    <header className="navbar">
      <button
        className="navbar__sidebar-toggler"
        onClick={() => setShowSidebar(true)}
      >
        <Menu className="toggler__icon" />
      </button>
      <Link to="/staff/dataentry" className="navbar__logo">
        <img src={logo} alt="logo" />
      </Link>
      <button onClick={() => setShowUserOptions((c) => !c)}>
        <KeyboardArrowDown fontSize="medium" />
        <AccountCircleOutlined fontSize="large" />
      </button>
      <UserOptions show={showUserOptions} />
    </header>
  );
};

export default Navbar;
