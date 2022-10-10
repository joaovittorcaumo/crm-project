import React from "react";

import Select from "react-select";
import "./styles.scss";

export interface MultiSelectInputProps {
    selectedOptions: {value:string, label:string}[];
    options: {value:string, label:string}[];
    setSelectedOptions: any;
    placeholder: string;
}

function MultiSelect({
  selectedOptions,
  options,
  setSelectedOptions,
  placeholder
}: MultiSelectInputProps) {
  return (
    <div className="multi-select">
      <Select
        className="input"
        classNamePrefix="multi-select"
        value={selectedOptions}
        options={options}
        onChange={setSelectedOptions}
        isMulti
        placeholder={placeholder}
        noOptionsMessage={() => "Sem opções disponíveis"}
        isClearable={false}
      />
    </div>
  );
}

export default MultiSelect;
