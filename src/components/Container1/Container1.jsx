import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "./Container1.scss";
import slidesData from "../../data/slides.json"; // ✅ Import JSON directly

const Container1 = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Load data from JSON
  useEffect(() => {
    setSlides(slidesData);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-play carousel
  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [slides]);

  if (slides.length === 0) return <p>Loading...</p>;

  return (
    <div className="container1">
      <div className="carousel">
        <div
          className="slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div className="slide" key={slide.id}>
              <img src={slide.image} alt={slide.title} />
              <div className="overlay" />
              <div className="caption">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className="arrow left" onClick={prevSlide} aria-label="Previous">
          <HiChevronLeft />
        </button>
        <button className="arrow right" onClick={nextSlide} aria-label="Next">
          <HiChevronRight />
        </button>

        {/* Indicators */}
        <div className="indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={index === currentSlide ? "active" : ""}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Container Label */}
        <div className="label">Container 1</div>
      </div>
    </div>
  );
};

export default Container1;
