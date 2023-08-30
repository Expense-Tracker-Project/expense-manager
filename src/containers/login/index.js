import "../signup/style.css";
import Password from "../../components/password";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button";
import axios from "axios";

const Login = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(e) => {
      e.preventDefault();

      try {
        await axios.post("http://localhost:8000/login", {
          email, password
        })
        .then(res => {
          if (res.data === "incorrect password") {
            alert("Incorrect password");
          } else if (res.data !== "not exist") {
            navigate("/", {state: {name: res.data.name,id:res.data.email}});
          } else if (res.data === "not exist") {
            alert("user has not signed up");
          }
        })
        .catch(e => {
          alert("Wrong details");
          console.log(e);
        })
      } catch (e) {
        console.log(e);
      }
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
      <img src="./piggi.png" />
    </div>
  );
};

export default Login;
