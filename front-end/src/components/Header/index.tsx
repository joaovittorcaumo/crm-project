import React from "react";

import "./styles.scss";
import Button from "../Button";
import Logo  from "../../assets/Header/logo.png"

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="content">
        <div className="left">
          {/* <img src={Logo} alt="" className="logo" /> */}
          <div className="text">
            <p className="paragraph">Inicio</p>
            <p className="paragraph">Contato</p>
          </div>
        </div>
        <div className="right">
          <Button>Entrar</Button>
        </div>
      </div>
    </header>
  );
};


export default Header;
