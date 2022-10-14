import React, { useState } from "react";

import "./styles.scss";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { PAGE } from "../../constants";
import { useNavigate } from "react-router-dom";

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
    <div className="containerLogin">
      <div className="content">
        <h1 className="title">Acesse seu perfil</h1>
        <div className="inputs">
          <Input label="" className="input" placeholder="Matricula" type="text"></Input>
          <Input label="" className="input" placeholder="Senha" type="password"></Input>
          <p className="text">Esqueci minha senha</p>
        </div>
        <div className="buttons">
          <Button onClick={() => navigate(PAGE.HOME())}>Voltar</Button>
          <Button onClick={() => navigate(PAGE.USER_MAIN())}>Entrar</Button>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
