import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PAGE } from "./constants";
import App from "./pages/App";
import Register from "./pages/UserRegister";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PAGE.HOME()} element={<App />}></Route>
        <Route path={PAGE.REGISTER()} element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
