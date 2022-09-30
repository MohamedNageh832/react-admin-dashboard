import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Images/logo.png";
import { KeyboardArrowDown, AccountCircleOutlined } from "@mui/icons-material";
import UserOptions from "./UserOptions";

const Navbar = () => {
  const [showUserOptions, setShowUserOptions] = useState(false);

  return (
    <header className="navbar">
      <Link to="/staff/dataentry">
        <img className="navbar__logo" src={logo} alt="logo" />
      </Link>
      <button className="btn" onClick={() => setShowUserOptions((c) => !c)}>
        <KeyboardArrowDown fontSize="medium" />
        <AccountCircleOutlined fontSize="large" />
      </button>
      <UserOptions show={showUserOptions} />
    </header>
  );
};

export default Navbar;
