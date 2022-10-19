import React from "react";
import Button from "../../components/Button";
import SectionTable from "../../components/SectionTable";

import "./styles.scss";

const CrmMainPage: React.FC = () => {
  const Setores = [
    { id: 1, name: "Ti", value: "Olaloa.sdlasd" },
    { id: 2, name: "RH", value: "Olaloa.sdlasd" },
    { id: 3, name: "Mercantil", value: "Olaloa.sdlasd" },
  ];

  return (
    <div className="containerCrmMain">
      <div className="content">
        <div className="crmStatistics">
          <div className="top">
            <h4 className="title">Estatisticas gerais</h4>
            <div className="texts">
              <p className="paragraph">Complexidade: </p>
              <p className="paragraph">Codigo: </p>
              <p className="paragraph">Versao: </p>
            </div>
            <Button>Historico de atualizacoes</Button>
          </div>
          <div className="bottom"></div>
        </div>
        <div className="sectors">
          <div className="section-table">
          {Setores.map((trilha) => {
            return (
              <SectionTable
                id={trilha.id}
                value={trilha.value}
                name={trilha.name}
              />
            );
          })}
          </div>
        </div>
        <div className="attachments"></div>
        <div className="crmInfo"></div>
      </div>
    </div>
  );
};

export default CrmMainPage;
