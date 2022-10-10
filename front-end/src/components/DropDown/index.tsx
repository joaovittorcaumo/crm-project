import React from "react";
import clsx from "clsx";
import { useState } from "react";
import Input, { InputProps } from "../Input";
import "./styles.scss";

export interface DropDownInputProps extends InputProps {
  autoCompletion?: string[];
  onSelectItem?: (value?: string) => void;
}

export default function DropDownInput({
  autoCompletion,
  value,
  readOnly,
  className,
  onSelectItem,
  ...props
}: DropDownInputProps) {
  const [opened, setOpened] = useState(false);

  const sanitize = (str?: string | number | readonly string[]) => (String(str || '').toLowerCase());
  const items = autoCompletion?.filter(term => readOnly || sanitize(term).includes(sanitize(value)));

  const handleOnFocus = () => {
    setOpened(true);
  };

  const handleOnBlur = () => {
    setOpened(false);
  };

  return <div onFocus={handleOnFocus} onBlur={handleOnBlur} className={clsx(className, 'dropdownContainer')}>
    <Input readOnly={readOnly} value={value} className="box" {...props}></Input>
    {opened && <div className="items">
      {items?.map(item => (
        <div key={item} onTouchEnd={() => onSelectItem?.(item)} onMouseDown={() => onSelectItem?.(item)}>{item}</div>
      ))}
    </div>}
  </div>
}
