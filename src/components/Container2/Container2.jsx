import React, { useEffect, useState } from "react";
import "./Container2.scss";
import data from "../../data/container2.json"; 

const Container2 = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    setContent(data);
  }, []);

  if (!content) return <p>Loading...</p>;

  return (
    <div className="container2">
      <div className="label">Container 2</div>

      <div className="content">
        <h2>{content.title}</h2>
        <p className="description">{content.description}</p>

        <div className="features">
          {content.features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="key-features">
          <h3>Key Features</h3>
          <ul>
            {content.keyFeatures.map((item, index) => (
              <li key={index}>
                <span className="dot"></span> {item}
              </li>
            ))}
          </ul>
        </div>

        <button className="learn-more">{content.buttonText}</button>
      </div>
    </div>
  );
};

export default Container2;
