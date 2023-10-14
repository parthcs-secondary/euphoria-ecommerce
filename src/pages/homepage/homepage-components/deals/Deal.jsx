import React from "react";
import "./Deal.scss";
import DealCard from "./child_component/DealCard";
import DealCard01 from '../../homepage-images/Dealcard-01.jpg'
import DealCard02 from '../../homepage-images/Dealcard-02.jpg'
const Deal = () => {
  return (
    // <div className="Deal">

      <div className="deal_wrapper">
        <DealCard dealcardimage={DealCard01} head1='Low Prices' head2='High Coziness' head3='UPTO 50% OFF' explore1='Explore Items'/>
        <DealCard dealcardimage={DealCard02} head1='Beyoung Presents' head2='Breezy Summer Style' head3='UPTO 50% OFF' explore1='Explore Items'/>
      </div>
    // </div>
  );
};

export default Deal;
