import React from "react";
import "./Deal.scss";
import DealCard from "./child_component/DealCard";
const Deal = () => {
  return (
    // <div className="Deal">

      <div className="deal_wrapper">
        <DealCard dealcardimage='https://placehold.co/355x355/green/white'/>
        <DealCard dealcardimage='https://placehold.co/355x355/yellow/red'/>
      </div>
    // </div>
  );
};

export default Deal;
