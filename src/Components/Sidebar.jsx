import { NavLink } from "react-router-dom";

const Sidebar = ({ links }) => {
  return (
    <aside className="sidebar">
      {links.map((link, i) => (
        <NavLink className="sidebar__link" key={i} to={link.path} end>
          {link.text}
        </NavLink>
      ))}
    </aside>
  );
};

export default Sidebar;
