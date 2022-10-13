import React from "react";
import "./styles.scss";

export interface TextAreaProps {
  placeholder: string;
  cols: number;
  rows: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
  required?: boolean;
  value: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  cols,
  rows,
  onChange,
  placeholder,
  value,
}) => {
  return (
    <div className="textAreaContainer">
      <textarea
        name="textArea"
        cols={cols}
        rows={rows}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        maxLength={250}
      ></textarea>
    </div>
  );
};

export default TextArea;