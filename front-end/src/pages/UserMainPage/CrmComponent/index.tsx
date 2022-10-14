import React from "react";

import "./styles.scss";

export interface CrmComponentProps {
    nome: string;
    Status: string;
    Complexidade: string;
    Colaboradores: number;
    dataInicio: string;
}

function CrmComponent ({
    nome,
    Status,
    Complexidade,
    Colaboradores,
    dataInicio
  }: CrmComponentProps){
  return (
    <div className="containerCrmComponent">
        <div className="contentCRM">
            <div className="textContainerCRM"><p className="paragraph">{nome}</p></div>
            <div className="textContainerCRM"><p className="paragraph">Status da CRM:</p>  <p>{Status}</p></div>
            <div className="textContainerCRM"><p className="paragraph">Complexidade da CRM: </p>  <p>{Complexidade}</p></div>
            <div className="textContainerCRM"><p className="paragraph">Colaboradores</p>  <p>{Colaboradores}</p></div>
            <div className="textContainerCRM"><p className="paragraph">Data de Inicio:</p>  <p>{dataInicio}</p></div>
        </div>
    </div>
  );
};

export default CrmComponent;