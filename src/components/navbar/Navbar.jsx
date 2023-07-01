import React, { useEffect } from "react";
import "./Navbar.scss";
import { LuSearch } from "react-icons/lu";
import { HiOutlineHeart } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineSegment } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [clickHam, setClickHam] = useState(true);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    if (windowSize <= 1140) {
      setClickHam(false);
    } else {
      setClickHam(true);
    }
  
  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  window.addEventListener('resize', handleResize)
  return () => {
    window.removeEventListener('resize', handleResize)
  };}, [windowSize]);
  return (
    <div className="Navbar">
      <div className="nav_container">
        <div className="nav_logo">
          <span>Euphoria</span>
        </div>

        <div className="hamburger" onClick={() => setClickHam(!clickHam)}>
          <MdOutlineSegment />
        </div>
        {clickHam && (
        <div className="menu_items">
          <ul className="menu_items_list">
            <li className="menu_items_list_item">Shop</li>
            <li className="menu_items_list_item">Men</li>
            <li className="menu_items_list_item">Women</li>
            <li className="menu_items_list_item">Combos</li>
            <li className="menu_items_list_item">Joggers</li>
          </ul>
        </div>
        )}
        <div className="search_bar_container">
          <form action="" method="get" id="search_form">
            <LuSearch />
            <input
              type="search"
              name="search_bar"
              id="search_bar"
              placeholder="Search"
            />
          </form>
        </div>
        <div className="quick_actions_container">
          <div className="quick_actions">
            <HiOutlineHeart />
          </div>
          <div className="quick_actions">
            <AiOutlineUser />
          </div>
          <div className="quick_actions">
            <LuShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
