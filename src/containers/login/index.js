import "../signup/style.css";
import Password from "../../components/password";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button";

const Login = (props) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
  return (
    <div className="signup-wrapper">
      <div className="form-component">
        <div className="form-elements">
          <div className="form-element">
            <label htmlFor="name" key="name">
              <span>Name</span>
              <div className="form-input-container">
                <input className="custom-form-input" type="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
            </label>
          </div>
          <div className="form-element">
          <Password isSignup={false} passwordLabel="Re-Enter Password" setPassword={setPassword} />
          </div>
          <Button title="Sign in" />
        </div>
        <div className="bottom-text">Doesn't have account? <Link to='/signup' className="signup-link">Signup</Link></div>
      </div>
      <img src="./piggi.png" />
    </div>
  );
};

export default Login;
