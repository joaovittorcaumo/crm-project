import React from "react";

import "./styles.scss";
import imgSplashContainer from "../../assets/LandingPage/imgSplashContainer.png";
import Circles from "../../assets/LandingPage/circles.svg";
import { useNavigate } from "react-router-dom";
import { PAGE } from "../../constants";

const App: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="containerApp">
      <div className="content">
        <section className="splashContainer">
          <div className="left">
            <div className="text">
              <h1 className="title">Por que a Jv CRMS:</h1>
              <p className="paragraph">
                Fomos criados no intuito de facilitar a vida das empresas, seus
                funcionarios e clientes!
              </p>
            </div>
            <button onClick={() => navigate(PAGE.REGISTER())} className="createAccountBtn">Cadastre seu perfil!</button>
          </div>
          <div className="Right">
            <img
              className="image"
              src={imgSplashContainer}
              alt="Uma imagem de conexoes de rede"
            />
          </div>
        </section>

        <section className="aboutSection">
          <h1 className="title">O que fazemos?</h1>
          <div className="aboutSectionDiv">
            <div className="top">
              <div className="textContent">
                <div className="aboutSectionDiv">
                  <img src={Circles} alt="" />
                  <h4 className="titleAboutSection">Conectamos a sua empresa</h4>
                </div>
                <p className="paragraph">
                  Nossa plataforma tem eficiencia em conectar sa empresa a
                  varios clientes por meio de um sistema inteligente de
                  mapeamento
                </p>
              </div>

              <div className="textContent">
                <div className="aboutSectionDiv">
                  <img src={Circles} alt="" />
                  <h4 className="titleAboutSection">Inovando o sistema de CRMS's</h4>
                </div>
                <p className="paragraph">
                  Com a JV CRM's, voce consegue controlar que times irao
                  trabalhar no seu projeto, e ate mesmo definir seus
                  colaboradores
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
