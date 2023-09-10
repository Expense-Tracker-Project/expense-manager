import React, { useState } from "react";
import Button from "../button";
import "./style.css";
import ExpenditureForm from "../AddNewExpnsPopUp";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { headerData } = props;
  const [showDropdown, setShowDropdown] = useState(false);

  const [showFormPopup, setShowFormPopup] = useState(false); // Add state for form popup visibility

  const filteredUser = headerData.userData.find(
    (user) => user.name === "JaneSmith"
  );

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleFormPopupToggle = () => {
    setShowFormPopup(!showFormPopup); // Toggle the form popup visibility
  };

  const handleCloseFormPopup = () => {
    setShowFormPopup(false);
  };

  const text = `Hi 👋, ${props.name}!`;

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
              onClick={button.className === 'add-expense-button' ? handleFormPopupToggle : undefined}
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
              {props.user}
              <Link to="/login" className="custom-button logout-btn">Logout</Link>
              {/* Add more dropdown items here */}
            </div>
          )}
        </div>
      </div>
      {showFormPopup && (
        <div className="popup-overlay">
          <ExpenditureForm email={props.id} onClose={handleCloseFormPopup} />
        </div>
      )}{" "}
    </header>
  );
};

export default Header;
