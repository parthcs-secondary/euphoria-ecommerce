import React from "react";
import "./TopBrand.scss";
import brandnike from "../../homepage-images/brand-nike.png";
import brandlevi from "../../homepage-images/brand-levi.png";
import brandhm from "../../homepage-images/brand-hm.png";
import brandpolo from "../../homepage-images/brand-polo.png";
import brandpuma from "../../homepage-images/brand-puma.png";

const TopBrand = () => {
  const topbrand_logo_Array = [
    {
      image: brandnike,
      itemname: "Nike",
    },
    {
      image: brandlevi,
      itemname: "Levi",
    },
    {
      image: brandhm,
      itemname: "H&M",
    },
    {
      image: brandpolo,
      itemname: "polo",
    },
    {
      image: brandpuma,
      itemname: "Puma",
    },
  ];
  return (
    <div className="TopBrand">
      <div className="topbrand_wrapper">
        <div className="topbrand_content">
          <div className="topbrand_title">Top Brand Deals</div>
          <div className="topbrand_title2">Up To 60% off on brands</div>
          <div className="topbrand_logos">
            {topbrand_logo_Array.map((image, index) => {
              return (
                // <div className="logobrand" style={{ backgroundImage: "url(" + image.image + ")" }}>
                <div className="logobrand">
                  <img className="logobrand_img" src={image.image} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBrand;
