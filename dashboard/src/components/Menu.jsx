import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [isMenuSelected, setMenuSelected] = useState(0);
  const [isProfileVisible, setProfileVisible] = useState(false);

  const handleProfileClick = () => {
    setProfileVisible(!isProfileVisible);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <Link to="/">
        <img src="logo.png" style={{ width: "32px" }} />
      </Link>
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => setMenuSelected(0)}
            >
              <p className={isMenuSelected === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => setMenuSelected(1)}
            >
              <p className={isMenuSelected === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => setMenuSelected(2)}
            >
              <p className={isMenuSelected === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => setMenuSelected(3)}
            >
              <p className={isMenuSelected === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="funds"
              onClick={() => setMenuSelected(4)}
            >
              <p className={isMenuSelected === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => setMenuSelected(5)}
            >
              <p className={isMenuSelected === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
