import React, { useState } from "react";
import data from "../../data/container5Data.json";
import "./Container5.scss";

const Container5 = () => {
  const [activeTab, setActiveTab] = useState("A");

  const activeContent = activeTab === "A" ? data.optionA : data.optionB;

  return (
    <div className="container5">
      <div className="container-label">Container 5</div>

      <div className="content">
        {/* Tabs */}
        <div className="tabs">
          <button
            className={`tab ${activeTab === "A" ? "active blue" : ""}`}
            onClick={() => setActiveTab("A")}
          >
            Option A
          </button>
          <button
            className={`tab ${activeTab === "B" ? "active teal" : ""}`}
            onClick={() => setActiveTab("B")}
          >
            Option B
          </button>
        </div>

        {/* Content */}
        <div className={`content-box ${activeContent.color}`}>
          <h3 className="title">{activeContent.title}</h3>
          <p className="description">{activeContent.description}</p>

          <h4 className="features-title">Key Features:</h4>
          <ul className="features-list">
            {activeContent.features.map((feature, index) => (
              <li key={index} className="feature-item">
                <span className="dot" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action */}
        <button className={`action-btn ${activeContent.color}`}>
          Get Started with {activeTab === "A" ? "Analytics" : "UX Design"}
        </button>
      </div>
    </div>
  );
};

export default Container5;
