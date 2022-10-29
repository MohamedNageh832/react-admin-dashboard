import { Close } from "@mui/icons-material";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ links, showSidebar, setShowSidebar }) => {
  const hideSidebar = () => {
    setShowSidebar(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", hideSidebar);

    return () => document.addEventListener("mousedown", hideSidebar);
  }, []);

  return (
    <aside className={`sidebar ${showSidebar ? "active" : ""}`}>
      <button className="sidebar__close" onClick={() => setShowSidebar(false)}>
        <Close className="sidebar__close-icon" />
      </button>
      <section className="sidebar__links-holder">
        {links.map((link, i) => (
          <NavLink className="sidebar__link" key={i} to={link.path} end>
            <span>{link.text}</span>
            {link.notification && (
              <span className="badge badge--rounded mr-2">
                {link.notification}
              </span>
            )}
          </NavLink>
        ))}
      </section>
    </aside>
  );
};

export default Sidebar;
