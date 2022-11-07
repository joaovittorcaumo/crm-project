import React, { useEffect, useState } from "react";

import "./styles.scss";
import Input from "../../components/Input";
import DropDownInput from "../../components/DropDown";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { PAGE } from "../../constants";

const UserRegister: React.FC = () => {
  const navigate = useNavigate();
  const [setores, setSetores] = useState<string[] | undefined>([]);

  const [sector, setSector] = useState<string | undefined>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleRoleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setRole(e.target.value);
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:3000/sectorNames");
      const jsonResult = await result.json();

      console.log(jsonResult);

      setSetores(jsonResult);
    };

    fetchData();
  }, []);

  const submitUser = async () => {
    const data = {
      name: name,
      email: email,
      role: role,
      password: password,
      sector: sector,
    }
    const result = await fetch('http://localhost:3000/register',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    navigate(PAGE.LOGIN());
  }
  return (
    <div className="containerUserRegister">
      <div className="content">
        <h1 className="title">Cadastre seu perfil</h1>
        <div className="inputs">
          <Input label="" onChange={handleNameChange} className="nome" placeholder="Nome"></Input>
          <Input label="" onChange={handlePasswordChange} className="input" placeholder="Senha"></Input>
          <Input label="" onChange={handleEmailChange} className="input" placeholder="Email"></Input>
          <DropDownInput
            className="input"
            value={sector}
            autoCompletion={setores}
            onChange={(e) => setSector(e.target.value)}
            label="Setor"
            placeholder="Setores"
            required
            readOnly
            onSelectItem={setSector}
          />
          <Input label="" onChange={handleRoleChange} className="input" placeholder="Função"></Input>
        </div>
        <div className="buttons">
          <Button onClick={() => navigate(PAGE.HOME())}>Voltar</Button>
          <Button onClick={() => submitUser()}>
            Finalizar Cadastro
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
