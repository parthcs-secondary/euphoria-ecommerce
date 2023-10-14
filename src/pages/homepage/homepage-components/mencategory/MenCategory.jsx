import React from "react";
import "./MenCategory.scss";
import { HiArrowNarrowRight } from "react-icons/hi";
import mencat01 from "../../homepage-images/mencat01.jpg";
import mencat02 from "../../homepage-images/mencat02.jpg";
import mencat03 from "../../homepage-images/mencat03.jpg";
import mencat04 from "../../homepage-images/mencat04.jpg";
import mencat05 from "../../homepage-images/mencat05.jpg";
import mencat06 from "../../homepage-images/mencat06.jpg";
import mencat07 from "../../homepage-images/mencat07.jpg";
import mencat08 from "../../homepage-images/mencat08.jpg";

const MenCategory = () => {
  const mencategory_array = [
    {
      image: mencat01,
      itemname: "Boxers",
    },
    {
      image: mencat02,
      itemname: "Active Wear",
    },
    {
      image: mencat03,
      itemname: "Jeans",
    },
    {
      image: mencat04,
      itemname: "Sweatshirts",
    },
    {
      image: mencat05,
      itemname: "Polo T-Shirts",
    },
    {
      image: mencat06,
      itemname: "Plain T-Shirts",
    },
    {
      image: mencat07,
      itemname: "Printed T-Shirts",
    },
    {
      image: mencat08,
      itemname: "Shirts",
    },
  ];
  return (
    <div className="MenCategory">
      <div className="Mencategory_wrapper">
        <div className="mencategory_title">Categories For Men</div>
        <div className="mencategory_grid">
          {mencategory_array.map((image, index) => {
            return (
              <div className="mencategory_grid_holder">
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

export default MenCategory;
