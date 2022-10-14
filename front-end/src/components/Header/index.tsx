import React from "react";

import "./styles.scss";
import Button from "../Button";
import Logo  from "../../assets/Header/logo.png"
import { PAGE } from "../../constants";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <header className="header">
      <div className="content">
        <div className="left">
          <img src={Logo} alt="" className="logo" />
          <div className="text">
            <Link
            to={PAGE.HOME()} 
            className="paragraph">Inicio</Link>
            <p className="paragraph">Contato</p>
            <p className="paragraph">O que é CRM?</p>
          </div>
        </div>
        <div className="right">
          <Button onClick={() => navigate(PAGE.LOGIN())}>Entrar</Button>
        </div>
      </div>
    </header>
  );
};


export default Header;
