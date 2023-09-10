import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { allRoutes } from "./all-routes";
import './style.css';

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
          element={route.element}
        />
      ))
    }
    </Routes>
    </BrowserRouter>
  );
}

export default App;
