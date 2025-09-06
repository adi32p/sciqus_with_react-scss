import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import data from "../../data/container3Data.json";
import "./Container3.scss";

const Container3 = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = data;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="container3">
      <div className="container-label">Container 3</div>

      {/* Image Display */}
      <div className="image-section">
        <img
          src={images[currentImage].src}
          alt={images[currentImage].title}
          className="main-image"
        />

        {/* Navigation Arrows */}
        <button className="nav-button left" onClick={prevImage}>
          <HiChevronLeft />
        </button>
        <button className="nav-button right" onClick={nextImage}>
          <HiChevronRight />
        </button>

        {/* Overlay Info */}
        <div className="image-info">
          <span className="tag">{images[currentImage].tag}</span>
          <h3>{images[currentImage].title}</h3>
        </div>
      </div>

      {/* Thumbnails & Counter */}
      <div className="thumbnail-section">
        <div className="header">
          <h4>Gallery View</h4>
          <span>
            {currentImage + 1} of {images.length}
          </span>
        </div>

        <div className="thumbnails">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setCurrentImage(index)}
              className={`thumbnail ${
                index === currentImage ? "active" : ""
              }`}
            >
              <img src={image.src} alt={image.title} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container3;
