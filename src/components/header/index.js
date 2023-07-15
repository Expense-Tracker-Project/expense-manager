import React, { useState } from "react";
import Button from "../button";
import userData from "./userData";
import "./style.css";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const filteredUser  = userData.filter(user => user.name === 'JohnDoe')[0];
  


  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // Handle logout functionality here
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/favicon.ico" alt="Logo" />
      </div>
      <div className="header-right">
        <Button className="dashboard-button" title="Dashboard" />
        <div className="user-dropdown">
          <Button
            className="user-button"
            onClick={handleDropdownToggle}
            title={filteredUser.name}
          />
          {showDropdown && (
            <div className="dropdown-content">
              <Button onClick={handleLogout} title="Logout"/>
              {/* Add more dropdown items here */}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
