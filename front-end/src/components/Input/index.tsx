import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

import "./styles.scss";
export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: React.ReactNode;
    type?: 'tel' | 'text' | 'date' | 'number' | 'search' | 'password';
}

const TextInput:  React.FC<InputProps>= (props) => {
  const {
    id,
    value,
    className,
    onChange,
    placeholder,
    label = ""
  } = props;
  return (
      <input
        id={id}
        type="text"
        value={value}
        className={className}
        onChange={onChange}
        placeholder={placeholder}
      />
  );
};

export default TextInput;