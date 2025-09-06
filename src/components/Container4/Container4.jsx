import React from "react";
import data from "../../data/container4Data.json";
import "./Container4.scss";

const Container4 = () => {
  return (
    <div className="container4">
      <div className="container-label">Container 4</div>

      <div className="content">
        <h2 className="title">{data.title}</h2>

        {/* Image Section */}
        <div className="image-section">
          <img src={data.image.src} alt={data.image.alt} />
          <div className="overlay" />
          <div className="overlay-text">
            <h3>{data.image.label}</h3>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="steps">
          {data.steps.map((step) => (
            <div key={step.id} className={`step ${step.color}`}>
              <div className="step-header">
                <div className="step-number">{String(step.id).padStart(2, "0")}</div>
                <h4>{step.title}</h4>
              </div>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container4;
