import React, { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Container1 from "./components/Container1/Container1";
import Container2 from "./components/Container2/Container2";
import Container3 from "./components/Container3/Container3";
import Container4 from "./components/Container4/Container4";
import Container5 from "./components/Container5/Container5";
import Container6 from "./components/Container6/Container6";

import "./App.scss"; // Import SCSS

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="app-header">
        <Header onToggleSidebar={toggleSidebar} />
      </header>


      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="overlay" onClick={closeSidebar} />
      )}

      <div className="layout">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

        {/* Main Content */}
        <main className="main-content">
          {/* Desktop Grid Layout */}
          <div className="desktop-grid">
            <Container1 />
            <Container2 />
            <Container3 />
            <Container4 />
            <Container5 />
            <Container6 />
          </div>

          {/* Mobile Stacked Layout */}
          <div className="mobile-stack">
            <Container1 />
            <Container2 />
            <Container3 />
            <Container4 />
            <Container5 />
            <Container6 />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
