import React from "react";
import { HiMenu } from "react-icons/hi";
import headerData from "../../data/header.json";
import "./Header.scss";

const Header = ({ onToggleSidebar }) => {
  return (
    <header className="header">
      <div className="header-inner">
        {/* Mobile hamburger menu */}
        <button
          onClick={onToggleSidebar}
          className="menu-btn"
          aria-label="Toggle sidebar"
        >
          <HiMenu className="menu-icon" />
        </button>

        {/* Logo/Title */}
        <div className="logo">
          <h1>{headerData.title}</h1>
        </div>

        {/* Header actions */}
        <div className="actions">
          <button className="action-btn">{headerData.buttonText}</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
