import React, { useState } from "react";

import "./styles.scss";
import Input from "../../components/Input";
import DropDownInput from "../../components/DropDown";
import Button from "../../components/Button";

const CrmSectorRegisterUser: React.FC = () => {
  const [funcao, setFuncao] = useState<string | undefined>("");

  const funcoes = ["Project Manager", "Vendedor", "Desenvolvedor", "Tester"];

  return (
    <div className="containerCrmDocument">
      <div className="content">
        <h1 className="title">Cadastrar Colaborador</h1>
        <div className="inputs">
          <Input
            label=""
            className="nome"
            placeholder="Nome do documento"
            type="text"
          ></Input>
          <Input
            label=""
            className="input"
            placeholder="Link do documento"
            type="text"
          ></Input>
          <DropDownInput
            className="input"
            value={funcao}
            autoCompletion={funcoes}
            onChange={(e) => setFuncao(e.target.value)}
            label="Funcao"
            placeholder="Funcao"
            required
            readOnly
            onSelectItem={setFuncao}
          />
        </div>
        <div className="buttons">
          <Button>Voltar</Button>
          <Button>Cadastrar Colaborador</Button>
        </div>
      </div>
    </div>
  );
};

export default CrmSectorRegisterUser;
