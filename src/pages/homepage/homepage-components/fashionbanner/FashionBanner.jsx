import React from "react";
import "./FashionBanner.scss";

const FashionBanner = () => {
  return (
    <div className="FashionBanner">
      <div className="fashion_wrapper">
        <div className="fashion01_wrapper">
          <div className="fashion01">
            <span className="fashion01_head">
              WE MADE YOUR EVERYDAY FASHION BETTER!
            </span>
            <span className="fashion01_info">
              In our journey to improve everyday fashion, euphoria presents
              EVERYDAY wear range - Comfortable & Affordable fashion 24/7
            </span>
            <button className="fashion01_button">Shop Now</button>
          </div>
        </div>
        <div className="fashion02"></div>
      </div>
    </div>
  );
};

export default FashionBanner;
