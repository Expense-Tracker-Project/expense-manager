import "../signup/style.css";
import Password from "../../components/password";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginService from "../../service/login";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(e) => {
      e.preventDefault();
      await LoginService(email, password, navigate);
    }

  return (
    <div className="signup-wrapper">
      <form>
      <div className="form-component">
        <div className="form-elements">
          <div className="form-element">
            <label htmlFor="email" key="email">
              <span>Email</span>
              <div className="form-input-container">
                <input className="custom-form-input" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </label>
          </div>
          <div className="form-element">
          <Password isSignup={false} passwordLabel="Re-Enter Password" setPassword={setPassword} />
          </div>
          <input type="submit" className="custom-button" onClick={handleSubmit} />
        </div>
        <div className="bottom-text">Doesn't have account? <Link to='/signup' className="signup-link">Signup</Link></div>
      </div>
      </form>
    </div>
  );
};

export default Login;
