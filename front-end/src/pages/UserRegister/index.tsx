import React, { useState } from "react";

import "./styles.scss";
import Input from "../../components/Input";
import DropDownInput from "../../components/DropDown";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { PAGE }from "../../constants";

const UserRegister: React.FC = () => {
  const navigate = useNavigate();

  const [setor, setSetor] = useState<string | undefined>("");

  const setores = [
    "Recursos Humanos",
    "Tecnologia da informacao",
    "Mercantil",
    "Vendas",
  ];

  const [funcao, setFuncao] = useState<string | undefined>("");

  const funcoes = [
    "Project Manager",
    "Vendedor",
    "Desenvolvedor",
    "Tester",
  ];

  return (
    <div className="containerUserRegister">
      <div className="content">
        <h1 className="title">Cadastre seu perfil</h1>
        <div className="inputs">
          <Input label="" className="nome" placeholder="Nome"></Input>
          <Input label="" className="input" placeholder="Matricula"></Input>
          <Input label="" className="input" placeholder="Email"></Input>
          <DropDownInput
            className="input"
            value={setor}
            autoCompletion={setores}
            onChange={(e) => setSetor(e.target.value)}
            label="Setor"
            placeholder="Setores"
            required
            readOnly
            onSelectItem={setSetor}
          />
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
          <Button onClick={() => navigate(PAGE.HOME())}>Voltar</Button>
          <Button onClick={() => navigate(PAGE.USER_MAIN())}>Finalizar Cadastro</Button>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
