import SignupData from "../../data/signup";
import Form from "../../components/form";
const Signup = ( props ) => {
return (
    <Form items={SignupData} isSignup={true} button={'Sign up'} passwordLabel={'Re-enter Password'} />
)
}

export default Signup;