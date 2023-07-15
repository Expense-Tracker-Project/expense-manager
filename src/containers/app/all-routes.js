import { Navigate } from "react-router-dom";
import Dashboard from "../dashboard";
import Error from "../error";
import Signup from "../signup";
import Login from "../login";

export const allRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/404",
    element: <Error />,
  },
  {
    path: '/*',
    verificationRequired: false,
    element: <Navigate to="/" />,
  },
];
