import React from "react";
import Banner from "./homepage-components/banner/Banner";
import Deal from './homepage-components/deals/Deal'
import BigSavingZone from "./homepage-components/bigsavingzone/BigSavingZone";
import NewArrival from "./homepage-components/newarrival/NewArrival";
import MenCategory from "./homepage-components/mencategory/MenCategory.jsx";
import WomenCategory from "./homepage-components/womencategory/WomenCategory.jsx";
import Limelight from "./homepage-components/limelight/Limelight";
import FashionBanner from "./homepage-components/fashionbanner/FashionBanner";
import TopBrand from "./homepage-components/topbrand/TopBrand";
const Homepage = () => {
  return (
    <div className="Homepage">
      <Banner />
      <Deal />
      <NewArrival />
      <BigSavingZone />
      <FashionBanner/>
      <MenCategory />
      <WomenCategory />
      <TopBrand/>
      <Limelight />
    </div>
  );
};

export default Homepage;
