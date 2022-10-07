import React from 'react';

import './index.scss';

function App() {
  return (
    <div className="container">
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
          <button className="createAccountBtn">Cadastre seu perfil!</button>
        </div>
        <div className="Right"></div>
      </section>

      <section className="aboutSection">
        <h1 className="title">O que fazemos?</h1>
        <div className="aboutSectionDiv">
          <div className="top">
            <div className="content">
              <div className="aboutSectionDiv">
                <h4 className="title">
                  Conectamos a sua empresa a novos clientes
                </h4>
              </div>
              <p className="paragraph">
                Nossa plataforma tem eficiencia em conectar sa empresa a varios
                clientes por meio de um sistema inteligente de mapeamento
              </p>
            </div>

            <div className="content">
              <div className="aboutSectionDiv">
                <h4 className="title">Inovando o sistema de CRMS's</h4>
              </div>
              <p className="paragraph">
                Com a JV CRM's, voce consegue controlar que times irao trabalhar
                no seu projeto, e ate mesmo definir seus colaboradores
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

export default App;
