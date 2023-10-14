import React from "react";
import "./Limelight.scss";
// import { HiArrowNarrowRight } from "react-icons/hi";
import limelight01 from "../../homepage-images/limelight01.jpg";
import limelight02 from "../../homepage-images/limelight02.jpg";
import limelight03 from "../../homepage-images/limelight03.jpg";
import limelight04 from "../../homepage-images/limelight04.jpg";

const Limelight = () => {
  const Limelight_array = [
    {
      image: limelight01,
      itemname: "Black Sweatshirt",
      itemprice: "$123",
      itembrand: "Jhanvi's Brand",
    },
    {
      image: limelight02,
      itemname: "Line Pattern Black Hoodie",
      itemprice: "$37",
      itembrand: "Puma's Brand",
    },
    {
      image: limelight03,
      itemname: "Black Shorts",
      itemprice: "$39",
      itembrand: "MM's Brand",
    },
    {
      image: limelight04,
      itemname: "Lavender Hoodie",
      itemprice: "$119",
      itembrand: "Nike's Brand",
    },
  ];
  return (
    <div className="Limelight">
      <div className="Limelight_wrapper">
        <div className="Limelight_title">In The Limelight</div>
        <div className="Limelight_grid">
          {Limelight_array.map((image, index) => {
            return (
              <div className="Limelight_grid_holder">
                <div
                  className="grid_image"
                  style={{ backgroundImage: "url(" + image.image + ")" }}
                ></div>
                <div className="grid_image_info">
                  <div className="grid_item_title">
                    <div className="grid_item_title_name">
                      <abbr title={image.itemname}>{image.itemname}</abbr>
                    </div>
                    <div className="grid_item_title_brand">
                      {image.itembrand}
                    </div>
                  </div>
                  <div className="grid_item_pricing">
                    <span>{image.itemprice}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Limelight;
