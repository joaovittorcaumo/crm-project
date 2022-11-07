import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PAGE } from "./constants";
import App from "./pages/App";
import Register from "./pages/UserRegister";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/UserLogin";
import UserMainPage from "./pages/UserMainPage";
import CrmRegister from "./pages/CrmRegister";
import SectorRegister from "./pages/SectorRegister";
import CrmDocumentRegister from "./pages/CrmDocumentRegister";
import CrmSectorRegisterUser from "./pages/CrmSectorRegisterUser";
import CrmMain from "./pages/CrmMainPage";
import CrmMainPage from "./pages/CrmMainPage";
import { User, UserContext } from "./api/user/UserContext";

const Router: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <BrowserRouter>
    <UserContext.Provider value={{user, setUser}}>
    <Header />
      <Routes>
        <Route path={PAGE.HOME()} element={<App />}></Route>
        <Route path={PAGE.REGISTER()} element={<Register />}></Route>
        <Route path={PAGE.LOGIN()} element={<Login />}></Route>
        <Route path={PAGE.USER_MAIN()} element={<UserMainPage />}></Route>
        <Route path={PAGE.CRM_REGISTER()} element={<CrmRegister />}></Route>
        <Route path={PAGE.CRM_SECTOR_REGISTER()} element={<SectorRegister />}></Route>
        <Route path={PAGE.CRM_MAIN()} element={<CrmMainPage />}></Route>
        <Route path={PAGE.CRM_DOCUMENT_REGISTER()} element={<CrmDocumentRegister />}></Route>
        <Route path={PAGE.CRM_SECTOR_USER_REGISTER()} element={<CrmSectorRegisterUser />}></Route>
      </Routes>
      <Footer />
      </UserContext.Provider>
    </BrowserRouter>
  );
};
export default Router;
