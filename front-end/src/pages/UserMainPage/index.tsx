import React, { useState } from "react";

interface User {
    nome: string;
    crmAnalise: string;
    crmAprovado: string;
    crmNegados: string;
    crmAtivos: string;
    matricula: number;
  }

const UserMainPage: React.FC = () => {

    const [quizData, setQuizData] = useState<User[]>([
        {
            nome: "Critos",
            crmAnalise: "Critos",
            crmAprovado: "Critos",
            crmNegados: "Critos",
            crmAtivos: "Critos",
            matricula: 980142,
        },
    ]);

    return (
        <div className="containerUserPage">
            <div className="content">
                <div className="textContainer"><h1 className="title">Ola {quizData[0].nome}</h1>
                <p className="subtitle"></p></div>
                <div className="worfFlowAnalysis"></div>
                <div className="projects"></div>
            </div>
        </div>
    )

}

export default UserMainPage;