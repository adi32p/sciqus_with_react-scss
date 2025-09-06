import React from "react";
import {
  HiX,
  HiHome,
  HiUser,
  HiCog,
  HiChartBar,
  HiDocument,
  HiSupport,
} from "react-icons/hi";
import menuItems from "../../data/sidebar.json";
import "./Sidebar.scss";

const iconMap = {
  HiHome,
  HiUser,
  HiCog,
  HiChartBar,
  HiDocument,
  HiSupport,
};

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="sidebar desktop">
        <nav className="sidebar-nav">
          {menuItems.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <button
                key={index}
                className={`sidebar-item ${item.active ? "active" : ""}`}
              >
                <Icon className="icon" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      <aside className={`sidebar mobile ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Menu</h2>
          <button onClick={onClose} className="close-btn" aria-label="Close">
            <HiX className="icon" />
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <button
                key={index}
                onClick={onClose}
                className={`sidebar-item ${item.active ? "active" : ""}`}
              >
                <Icon className="icon" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
