import React from "react";
import { Link } from "react-router-dom";
import "../styles/HotAccessoriesMenu.css";
const HotAccessoriesMenu = () => {
  return (
    <>
      <div className="HotAccessoriesMenu-div">
        <ul className="HotAccessoriesMenu">
          <li>
            <Link className="hot-link-tag" to="/Music">
              Music Store
            </Link>
          </li>
          <li>
            <Link className="hot-link-tag" to="/Smart Devies">
              Smart Devies
            </Link>
          </li>
          <li>
            <Link className="hot-link-tag" to="/Home">
              Home
            </Link>
          </li>
          <li>
            <Link className="hot-link-tag" to="/Lifestyle">
              Lifestyle
            </Link>
          </li>
          <li>
            <Link className="hot-link-tag" to="/Mobile Accessories">
              Mobile Accessories
              
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HotAccessoriesMenu;
