import React from 'react';

import { ReactNode } from "react";
import "./styles.scss";

export interface ButtonProps {
    children?: ReactNode;
    onClick?: VoidFunction;
}

export const Button: React.FC<ButtonProps>= ({ children, onClick}) => {
    return (
        <button
            className={`button-container`}
            onClick={onClick}
        >{children}</button>
    )
}

export default Button;
