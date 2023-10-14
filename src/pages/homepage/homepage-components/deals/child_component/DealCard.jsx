import React from "react";
import "./DealCard.scss";

const DealCard = (props) => {
  return (
    <div
      className="DealCard"
      style={{ backgroundImage: "url(" + props.dealcardimage + ")" }}
    >
      <div className="dealcard_content">
        <span className="head1">{props.head1}</span>
        <span className="head2">{props.head2}</span>
        <span className="head3">{props.head3}</span>
        <span className="dealexplorebutton">
          <a href="com">{props.explore1}</a>
        </span>
      </div>
    </div>
  );
};

export default DealCard;
