import "./style.css";
import Password from "../../components/password";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignupService from "../../service/signup";

const Signup = () => {
  const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(e) => {
      e.preventDefault();
      await SignupService(email, password, name, navigate);
    }

  return (
    <div className="signup-wrapper">
      <div className="form-component">
        <form>
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
          <input type="submit" className="custom-button" onClick={handleSubmit} />
        </div>
        </form>
        <div className="bottom-text">Already have account? <Link to='/login' className="signup-link">Sign in</Link></div>
      </div>
    </div>
  );
};

export default Signup;
