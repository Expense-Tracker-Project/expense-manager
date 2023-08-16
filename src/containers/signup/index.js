import "./style.css";
import Password from "../../components/password";
import { useState } from "react";
import Button from "../../components/button";
import { Link } from "react-router-dom";

const Signup = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
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
            <label htmlFor="email" key="email">
              <span>Email</span>
              <div className="form-input-container">
                <input className="custom-form-input" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </label>
          </div>
          <div className="form-element">
          <Password isSignup={true} passwordLabel="Re-Enter Password" setPassword={setPassword} />
          </div>
          <Button title="Sign Up" />
        </div>
        <div className="bottom-text">Already have account? <Link to='/login' className="signup-link">Sign in</Link></div>
      </div>
      <img src="./piggi.png" />
    </div>
  );
};

export default Signup;
