import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { allRoutes } from "./all-routes";
import Header from "../../components/header";
import Footer from "../../components/footer";

const BaseApp = ({element}) => {
  return(
    <>
    <Header />
    {element}
    <Footer />
    </>
  )
}
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    {
      allRoutes.map((route) => (
        <Route
          key={route.path}
          exact
          path={route.path}
          element={<BaseApp element={route.element} />}
        />
      ))
    }
    </Routes>
    </BrowserRouter>
  );
}

export default App;
