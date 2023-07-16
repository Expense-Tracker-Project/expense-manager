import React, { useState } from "react";
import { OpenEye, CloseEye } from "../icons";
import "./style.css";

const Password = (props) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [reenteredPassword, setReenteredPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError(false);
  };

  const handleReenteredPasswordChange = (event) => {
    setReenteredPassword(event.target.value);
    setPasswordError(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const passwordInputType = showPassword ? "text" : "password";

  const validatePasswords = () => {
    if (password !== reenteredPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  return (
    <div>
      <label>
        <span>Password</span>
        <div className="input-container">
          <input
            type={passwordInputType}
            value={password}
            onChange={handlePasswordChange}
          />
          <div
            className="eye-icon-container"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <CloseEye /> : <OpenEye />}
          </div>
        </div>
      </label>
      {props?.isSignup && (
        <label>
          <span>{props?.passwordLabel}</span>
          <div className="input-container">
            <input
              type={passwordInputType}
              value={reenteredPassword}
              onChange={handleReenteredPasswordChange}
              onBlur={validatePasswords}
            />
            <div
              className="eye-icon-container"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <CloseEye /> : <OpenEye />}
            </div>
          </div>
        </label>
      )}
      {passwordError && <p style={{ color: "red" }}>Passwords do not match.</p>}
    </div>
  );
};

export default Password;
