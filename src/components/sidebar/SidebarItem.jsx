import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const SidebarItem = ({ title, to, NavIcon }) => {
  const resolvedPath = useResolvedPath(to);
  const isactive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <ul className="sidebarlist">
      <Link to={to} className="link">

        <li className={isactive ? "sidebarlistitems active" :"sidebarlistitems"}>
          {NavIcon}
          {title}
        </li>
      </Link>
    </ul>
  );
};

export default SidebarItem;
