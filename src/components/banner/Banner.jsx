import React from "react";
import "./Banner.scss";
const Banner = () => {
  return (
      <div className="Banner">
        <div className="banner-content-wrapper">
            <div className="banner_heading">
                <h5>T-Shirt / Tops</h5>
            </div>
            <div className="banner_content-1">
                <h1>Summer Value Pack</h1>
            </div>
            <div className="banner_content-2">
                <h4>Cool / Colourful / Comfy</h4>
            </div>
            <div className="banner_button_div">
                <button className="banner_button">Shop Now</button>
            </div>
        </div>
      </div>
  );
};

export default Banner;
