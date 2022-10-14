import React from "react";

import ProgressBar from "@ramonak/react-progress-bar";
import "./styles.scss";

export interface QuantityBarCRMProps {
    maxCompleted: number;
    completed: number;
    animateOnRender: boolean;
    customLabel: string;
}

function QuantityBarCRM ({
    maxCompleted,
    completed,
    animateOnRender,
    customLabel
  }: QuantityBarCRMProps){
  return (
    <div className="progressBarContainer">
        <ProgressBar  className="progressBar" maxCompleted={maxCompleted} completed={completed} animateOnRender={animateOnRender} customLabel={customLabel} />
    </div>
  );
};

export default QuantityBarCRM;