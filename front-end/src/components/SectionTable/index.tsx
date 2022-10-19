import React from "react";

import "./styles.scss";
import Bin from "../../assets/SectionTable/delete-bin.svg";
import Pencil from "../../assets/SectionTable/pencil.svg";

export interface SectionOptionsProps {
  id: number;
  name: string;
  value: string;
}

function SectionOptions({ id, name, value }: SectionOptionsProps) {
  return (
    <div className="table-row" key={id}>
      <p className="name">{name}</p>
      <div>
        <button className="action-btn">
          <img src={Pencil} alt="Edit Icon" className="icon" />
        </button>
        <button className="action-btn">
          <img
            src={Bin}
            alt="Delete Icon"
            className="icon"
          />
        </button>
      </div>
    </div>
  );
}

export default SectionOptions;