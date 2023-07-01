import React from "react";
import "./Footer.scss";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer_container">
        <div className="upper_footer">
          <div className="upper_footer_item item-1">
            <div className="title">Need Help</div>
            <div className="item_list_container">
              <ul className="item_list">
                <li className="list_item">
                  <a href="/">Contact Us</a>
                </li>
                <li className="list_item">
                  <a href="/">Track Order</a>
                </li>
                <li className="list_item">
                  <a href="/">Return & Refunds</a>
                </li>
                <li className="list_item">
                  <a href="/">FAQ's</a>
                </li>
                <li className="list_item">
                  <a href="/">Career</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="upper_footer_item item-2">
            <div className="title">Company</div>
            <div className="item_list_container">
              <ul className="item_list">
                <li className="list_item">
                  <a href="/">About Us</a>
                </li>
                <li className="list_item">
                  <a href="/">Euphoria Blog</a>
                </li>
                <li className="list_item">
                  <a href="/">Euphoriastan</a>
                </li>
                <li className="list_item">
                  <a href="/">Collaboration</a>
                </li>
                <li className="list_item">
                  <a href="/">Media</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="upper_footer_item item-3">
            <div className="title">More Info</div>
            <div className="item_list_container">
              <ul className="item_list">
                <li className="list_item">
                  <a href="/">Terms & Conditions</a>
                </li>
                <li className="list_item">
                  <a href="/">Privacy Policy</a>
                </li>
                <li className="list_item">
                  <a href="/">Shipping Policy</a>
                </li>
                <li className="list_item">
                  <a href="/">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="upper_footer_item item-4">
            <div className="title">Location</div>
            <div className="item_list_container">
              <ul className="item_list">
                <li className="list_item">
                  <a href="/">support@euphoria.in</a>
                </li>
                <li className="list_item">
                  <a href="/">
                     A6-801, Megapolis Saffron, Phase-3, Hinjewadi, Pune,
                    Maharashtra-411057, India
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom_footer">

          <div className="bottom_footer_links">
            <div className="facebook social_media_link">
              <BiLogoFacebook />
            </div>
            <div className="instagram social_media_link">
              <AiOutlineInstagram />
            </div>
            <div className="twitter social_media_link">
              <AiOutlineTwitter />
            </div>
            <div className="linkedin social_media_link">
              <BiLogoLinkedin />
            </div>
          </div>
          
          <div className="bottom_footer_copyright">
            <span>
              Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
