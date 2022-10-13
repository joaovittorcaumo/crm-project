import React, { useState } from "react";

import "./styles.scss";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";

const CrmRegister: React.FC = () => {
  const [description, setDescription] = useState("");

  return (
    <div className="containerCrmRegister">
      <div className="content">
        <h1 className="title">Cadastrar CRM</h1>
        <div className="inputs">
          <div className="left">
            {" "}
            <TextArea
              placeholder="Objetivo"
              cols={5}
              rows={40}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <TextArea
              placeholder="Descricao da demanda"
              cols={5}
              rows={10}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className="right">
            <TextArea
              placeholder="Justificativa"
              cols={2}
              rows={20}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <TextArea
              placeholder="Descricao do projeto"
              cols={10}
              rows={30}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
        </div>
        <div className="buttons">
          <Button>Voltar</Button>
          <Button>Finalizar Cadastro</Button>
        </div>
      </div>
    </div>
  );
};

export default CrmRegister;
