import React, { useContext, useState } from "react";

import "./styles.scss";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { PAGE } from "../../constants";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../api/user/UserContext";

const UserRegister: React.FC = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [error, setError] = useState<boolean>(true);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setError(true)
    setEmail(e.target.value);
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setError(true)
    setPassword(e.target.value);
  }

  const submitUser = async () => {
    const data = {
      email: email,
      password: password,
    };

    console.log(data);
    const result = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resultInJson = await result.json();
    if (resultInJson != null) {
      setUser(resultInJson);
      console.log({ user });
      navigate(PAGE.USER_MAIN());
    } else {
      setError(false)
    }
  };

  return (
    <div className="containerLogin">
      <div className="content">
        <h1 className="title">Acesse seu perfil</h1>
        <div className="inputs">
          <Input
            label=""
            onChange={handleEmailChange}
            className="input"
            placeholder="Email"
            type="text"
          ></Input>
          <Input
            label=""
            onChange={handlePasswordChange}
            className="input"
            placeholder="Senha"
            type="password"
          ></Input>
          {error ? (
          <p className="text"></p>
          ) : (
            <p className="text">Senha ou usuario incorretos!</p>
          )
        }
        </div>
        <div className="buttons">
          <Button onClick={() => navigate(PAGE.HOME())}>Voltar</Button>
          <Button onClick={() => submitUser()}>Entrar</Button>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
