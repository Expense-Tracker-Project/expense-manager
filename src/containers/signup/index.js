import "./style.css";
import Password from "../../components/password";
import { useState } from "react";
import Button from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = (props) => {
  const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(e) => {
      e.preventDefault();

      try {
        await axios.post("http://localhost:8000/signup", {
          email, password, name
        })
        .then(res => {
          if (res.data === "exist") {
            alert("user already exists");
          } else if (res.data === "not exist") {
            navigate("/", {state: {id: name}});
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
      <img src="./piggi.png" />
    </div>
  );
};

export default Signup;
