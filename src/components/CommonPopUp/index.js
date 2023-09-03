import "./style.css";
import React, { useState } from "react";

const Popup = ({ onClose }) => {
  const clicked = (event) => {
    const className = event.target.className;
    alert(className);
  };
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>
          ❌
        </button>
        <div className="arrow-navigation">
          <button className="arrow-button-left" onClick={clicked}>
            ⬅
          </button>
          <button className="arrow-button-right" onClick={clicked}>
            ➡
          </button>
        </div>
        <div className="popup-body">
          <h2>Common Popup</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum amet laudantium molestiae asperiores autem provident ut nesciunt, sunt exercitationem ea architecto vero aspernatur accusamus saepe sint magni dolor sit earum!</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
