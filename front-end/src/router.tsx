import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PAGE } from "./constants";
import App from "./pages/App";
import Register from "./pages/UserRegister";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path={PAGE.HOME()} element={<App />}></Route>
        <Route path={PAGE.REGISTER()} element={<Register />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;