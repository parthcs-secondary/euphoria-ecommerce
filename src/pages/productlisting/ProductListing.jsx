import React from "react";
import Filters from "./productlisting-components/Filters";
import Productarea from "./productlisting-components/Productarea";
const ProductListing = () => {
  return (
    <div className="ProductListing flex justify-center">
      <div className="product-listing-wrapper flex w-11/12">
        <Filters />
        <Productarea />
      </div>
    </div>
  );
};

export default ProductListing;
