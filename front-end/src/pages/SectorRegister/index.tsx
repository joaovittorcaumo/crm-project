import React, { useState } from "react";

import "./styles.scss";
import Button from "../../components/Button";
import DropDownInput from "../../components/DropDown";

const SectorRegister: React.FC = () => {
  const [setor, setSetor] = useState<string | undefined>("");

  const setores = [
    "Recursos Humanos",
    "Tecnologia da informacao",
    "Mercantil",
    "Vendas",
  ];
  return (
    <div className="containerSectorRegister">
      <div className="content">
        <h1 className="title">Cadastrar Setor</h1>
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
        <div className="buttons">
          <Button>Voltar</Button>
          <Button>Entrar</Button>
        </div>
      </div>
    </div>
  );
};

export default SectorRegister;