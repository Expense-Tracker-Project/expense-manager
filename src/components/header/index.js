import React, { useState } from "react";
import Button from "../button";
import "./style.css";

const Header = ({ headerData }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const filteredUser = headerData.userData.find(
    (user) => user.name === "JaneSmith"
  );

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // Handle logout functionality here
  };

  const text = `Hi 👋, ${filteredUser.name}!`;

  return (
    <header className="header">
      <div className="logo">
        <span className="logo-text">{text}</span>
      </div>
      <div className="header-right">
        <div className="header-buttons-group">
        {headerData.headerButtons.map((button) => (
          <Button
            key={button.title}
            className={button.className}
            title={button.title}
          />
        ))}
        </div>
        <div className="user-dropdown">
          <img
            src={filteredUser ? filteredUser.imgSrc : ""}
            alt="User Avatar"
            className="user-avatar"
            onClick={handleDropdownToggle}
          />
          {showDropdown && (
            <div className="dropdown-content">
              {filteredUser.name}
              <Button onClick={handleLogout} title="Logout" />
              {/* Add more dropdown items here */}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
