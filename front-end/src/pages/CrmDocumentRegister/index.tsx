import React, { useState } from "react";

import "./styles.scss";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";

const CrmDocumentRegister: React.FC = () => {
  const [description, setDescription] = useState("");

  return (
    <div className="containerCrmDocument">
      <div className="content">
        <h1 className="title">Cadastrar Documento</h1>
        <div className="inputs">
          <Input
            label=""
            className="input"
            placeholder="Nome do documento"
            type="text"
          ></Input>
          <TextArea
            placeholder="Descricao da imagem"
            cols={10}
            rows={3}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <Input
            label=""
            className="input"
            placeholder="Link do documento"
            type="text"
          ></Input>
        </div>
        <div className="buttons">
          <Button>Voltar</Button>
          <Button>Cadastrar Documento</Button>
        </div>
      </div>
    </div>
  );
};

export default CrmDocumentRegister;