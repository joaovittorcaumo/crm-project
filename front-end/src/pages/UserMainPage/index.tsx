import React, { useState } from "react";

import "./styles.scss";
import QuantityBarCRM from "../../components/QuantityBarCRM";
import Button from "../../components/Button";
import CrmComponent from "./CrmComponent";
import { PAGE } from "../../constants";
import { useNavigate } from "react-router-dom";
interface User {
  nome: string;
  crmAnalise: string;
  crmAprovado: string;
  crmNegados: string;
  crmAtivos: string;
  matricula: number;
  aprovadas: number;
  analise: number;
  negados: number;
  ativos: number;
}

const UserMainPage: React.FC = () => {
  const navigate = useNavigate();

  const [quizData, setQuizData] = useState<User[]>([
    {
      nome: "Critos",
      crmAnalise: "Critos",
      crmAprovado: "Critos",
      crmNegados: "Critos",
      crmAtivos: "Critos",
      matricula: 980142,
      aprovadas: 23,
      analise: 27,
      negados: 18,
      ativos: 32,
    },
  ]);

  return (
    <div className="containerUserPage">
      <div className="content">
        <div className="textContainer">
          <h1 className="title">Olá {quizData[0].nome}</h1>
          <p className="subtitle">Confira suas CRMs</p>
        </div>
        <div className="workFlowAnalysis">
          <h4 className="title"></h4>
          <div className="analysis">
            <p className="paragraph">Pedidos de CRM em Analise</p>
            <div className="progressBarContainer">
              <div className="progressBar">
                <QuantityBarCRM
                  maxCompleted={100}
                  completed={quizData[0].analise}
                  animateOnRender={true}
                  customLabel=" "
                />
              </div>
              <p className="para">{quizData[0].analise}</p>
            </div>
          </div>
          <div className="analysis">
            <p className="paragraph">Pedidos de CRM Aprovados</p>
            <div className="progressBarContainer">
              <div className="progressBar">
                {" "}
                <QuantityBarCRM
                  maxCompleted={100}
                  completed={quizData[0].aprovadas}
                  animateOnRender={true}
                  customLabel=" "
                />
              </div>
              <p className="para">{quizData[0].aprovadas}</p>
            </div>
          </div>
          <div className="analysis">
            <p className="paragraph">Pedidos de CRM Negados</p>
            <div className="progressBarContainer">
              <div className="progressBar">
                <QuantityBarCRM
                  maxCompleted={100}
                  completed={quizData[0].negados}
                  animateOnRender={true}
                  customLabel=" "
                />
              </div>
              <p className="para">{quizData[0].negados}</p>
            </div>
          </div>
          <div className="analysis">
            <p className="paragraph">Pedidos de CRM Ativos</p>
            <div className="progressBarContainer">
              <div className="progressBar">
                <QuantityBarCRM
                  maxCompleted={100}
                  completed={quizData[0].ativos}
                  animateOnRender={true}
                  customLabel=" "
                />
              </div>
              <p className="para">{quizData[0].ativos}</p>
            </div>
          </div>
        </div>
        <div className="projects">
          <div className="top">
            <h4 className="title">Projetos</h4>
            <div className="buttons">
              <Button>Pesquisar CRM</Button>
              <Button onClick={() => navigate(PAGE.CRM_REGISTER())}>
                Cadastrar CRM
              </Button>
            </div>
          </div>
          <div className="bottom">
            <CrmComponent
              nome="Nome da CRM"
              Status="Aprovado"
              Complexidade="Alta"
              Colaboradores={201}
              dataInicio="26/09/2002"
            />
            <CrmComponent
              nome="Nome da CRM"
              Status="Aprovado"
              Complexidade="Alta"
              Colaboradores={201}
              dataInicio="26/09/2002"
            />
            <CrmComponent
              nome="Nome da CRM"
              Status="Aprovado"
              Complexidade="Alta"
              Colaboradores={201}
              dataInicio="26/09/2002"
            />
            <CrmComponent
              nome="Nome da CRM"
              Status="Aprovado"
              Complexidade="Alta"
              Colaboradores={201}
              dataInicio="26/09/2002"
            />
            <CrmComponent
              nome="Nome da CRM"
              Status="Aprovado"
              Complexidade="Alta"
              Colaboradores={201}
              dataInicio="26/09/2002"
            />
            <CrmComponent
              nome="Nome da CRM"
              Status="Aprovado"
              Complexidade="Alta"
              Colaboradores={201}
              dataInicio="26/09/2002"
            />
            <CrmComponent
              nome="Nome da CRM"
              Status="Aprovado"
              Complexidade="Alta"
              Colaboradores={201}
              dataInicio="26/09/2002"
            />
            <CrmComponent
              nome="Nome da CRM"
              Status="Aprovado"
              Complexidade="Alta"
              Colaboradores={201}
              dataInicio="26/09/2002"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMainPage;
