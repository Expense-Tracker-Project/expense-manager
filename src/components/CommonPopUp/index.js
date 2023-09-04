import "./style.css";
import React from "react";

const Popup = ({ onClose, children, leftArrow, rightArrow }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>
          ❌
        </button>
        <div className="arrow-navigation">
          <button className="arrow-button-left" onClick={leftArrow}>
            ⬅
          </button>
          <button className="arrow-button-right" onClick={rightArrow}>
            ➡
          </button>
        </div>
        <div className="popup-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
