import React from "react";

import "./styles.scss";
import backGroundLines from "../../assets/Footer/backgroundlines.svg";
import gitHubIcon from "../../assets/Footer/gitlogo.svg";
import workPlaceIcon from "../../assets/Footer/workplacelogo.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="content">
        <div className="imageContainer">
        <img
          className="backGroundLines"
          src={backGroundLines}
          alt="Linhasbrancas"
        />
        </div>
        <div className="links">
          <a href={'https://github.com/joaovittorcaumo'} className="link">
            GitHub
          </a>
          <a href={'https://www.linkedin.com/in/jo%C3%A3o-caumo-535425169/'} className="link">
            Contato
          </a>
        </div>
        <div className="email">            joaovittorcaumo@gmail.com</div>
        <div className="socialMediaIcons">
          <img src={workPlaceIcon} alt="Icone do work place" className="icon" />
          <img className="icon" src={gitHubIcon} alt="Icone do github" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

