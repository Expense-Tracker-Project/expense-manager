import axios from "axios";

const SignupService = async (email, password, name, navigate) => {
    try {
        await axios.post("http://localhost:8000/signup", {
          email, password, name
        })
        .then(res => {
          if (res.data === "exist") {
            alert("user already exists");
          } else if (res.data === "not exist") {
            navigate("/", {state: {id: email,name}});
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

export default SignupService;