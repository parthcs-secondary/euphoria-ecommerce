import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/homepage/Homepage";
import ProductDetail from "../pages/productdetail/ProductDetail";
import ProductListing from "../pages/productlisting/ProductListing";
import Signin from "../pages/signin/Signin";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/explore" element={<ProductListing />} />
      <Route path="/product" element={<ProductDetail />} />
      <Route path="/signin" element={<Signin />} />

    </Routes>
  );
};

export default Router;
