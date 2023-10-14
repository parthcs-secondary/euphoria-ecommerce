import React from "react";
import "./WomenCategory.scss";
import { HiArrowNarrowRight } from "react-icons/hi";
import womencat01 from "../../homepage-images/womencat01.png";
import womencat02 from "../../homepage-images/womencat02.png";
import womencat03 from "../../homepage-images/womencat03.png";
import womencat04 from "../../homepage-images/womencat04.png";

const WomenCategory = () => {
  const WomenCategory_array = [
    {
      image: womencat01,
      itemname: "Boxers"
    },
    {
      image: womencat02,
      itemname: "Tees & T-Shirts"
    },
    {
      image: womencat03,
      itemname: "Coats & Parkas"
    },
    {
      image: womencat04,
      itemname: "Sweatshirts"
    }
  ];
  return (
    <div className="WomenCategory">
      <div className="WomenCategory_wrapper">
        <div className="WomenCategory_title">Categories For Women</div>
        <div className="WomenCategory_grid">
          {WomenCategory_array.map((image, index) => {
            return (
              <div className="WomenCategory_grid_holder">
                <div
                  className="grid_image"
                  style={{ backgroundImage: "url(" + image.image + ")" }}
                ></div>
                <div className="grid_image_info">
                  <div className="grid_item_title">{image.itemname}</div>
                  <div className="grid_item_arrow">
                    <HiArrowNarrowRight />
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

export default WomenCategory;
