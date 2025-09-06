import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight, HiPlay } from "react-icons/hi";
import slidesData from "../../data/container6.json";
import "./Container6.scss";

const Container6 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Active": return "status-active";
      case "Review": return "status-review";
      case "Planning": return "status-planning";
      default: return "status-default";
    }
  };

  return (
    <div className="container6">
      <div className="container-label">Container 6</div>

      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slidesData.map((slide) => (
          <div key={slide.id} className="slide">
            {/* Image Section */}
            <div className="image-wrapper">
              <img src={slide.image} alt={slide.title} />
              <div className="overlay"></div>

              {/* Play Button */}
              <div className="play-button">
                <button>
                  <HiPlay />
                </button>
              </div>

              {/* Status Badge */}
              <div className={`status-badge ${getStatusClass(slide.status)}`}>
                {slide.status}
              </div>
            </div>

            {/* Content Section */}
            <div className="content">
              <span className="category">{slide.category}</span>
              <h3>{slide.title}</h3>

              {/* Progress Bar */}
              <div className="progress">
                <div className="progress-header">
                  <span>Progress</span>
                  <span>{slide.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${slide.progress}%` }}></div>
                </div>
              </div>

              <button className="view-btn">View Project</button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <button onClick={prevSlide} className="nav-btn prev">
        <HiChevronLeft />
      </button>
      <button onClick={nextSlide} className="nav-btn next">
        <HiChevronRight />
      </button>

      {/* Indicators */}
      <div className="indicators">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`dot ${index === currentSlide ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Container6;
