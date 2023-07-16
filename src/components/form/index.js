import React, { useState } from "react";
import Password from "../password";
import Button from "../button";
import "./style.css";

const Form = (props) => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    const { id, value } = e.target;

    const item = props.items.find((item) => item.id === id);
    const { maxLength, regex } = item;

    const hasInvalidCharacters = regex && !regex.test(value);
    const hasExceededMaxLength = maxLength && value.length === maxLength;
    const hasInvalidSpace =
      /\s\s/.test(value) || (value.length === 1 && value === " "); // restrict multiple spaces and space in beginning

    if (!hasInvalidCharacters && !hasExceededMaxLength && !hasInvalidSpace) {
      setInput((prevInput) => ({
        ...prevInput,
        [id]: value,
      }));
    }
  };

  return (
    <div className={`form-component ${props.className}`}>
      <div className="form-elements">
        {props.items.map((item) =>
          item.type === "password" ? (
            <div className="form-element">
              {" "}
              <Password />{" "}
            </div>
          ) : (
            <div className="form-element">
              <label htmlFor={item.id} key={item.id}>
                <span>{item.label}</span>
                <div className="form-input-container">
                  <input
                    className="custom-form-input"
                    type={item.type}
                    onChange={handleInput}
                    onBlur={item.onBlur}
                    id={item.id}
                    value={input[item.id] || ""}
                  />
                </div>
              </label>
            </div>
          )
        )}
        <Button title={props?.button} />
      </div>
    </div>
  );
};

export default Form;
