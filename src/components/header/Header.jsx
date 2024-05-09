import "./header.css";

import React from "react";

const Header = ({title,btntitle}) => {
  return (
    <div className="header">
      <div className="headerWrapper">
        <h1 className="headerTitle">{title}</h1> <h4 className="headerButton">{btntitle}</h4>{" "}
      </div>
    </div>
  );
};

export default Header;
