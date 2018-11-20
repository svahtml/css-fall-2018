import React from "react";

import "./header.css";

const Header = ({ children }) => (
  <header className="Header">
    <h1>{children}</h1>
  </header>
);

export default Header;
