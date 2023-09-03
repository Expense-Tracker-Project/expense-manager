
import axios from "axios";

const LoginService = async (email, password, navigate) => {
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

export default LoginService;