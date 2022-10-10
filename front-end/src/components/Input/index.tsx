import React from 'react';
import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import cn from 'clsx';
import "./input.scss"


export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: React.ReactNode;
    type?: 'tel' | 'text' | 'date' | 'number' | 'search' | 'password';
}

const Input: React.FC<InputProps> = (props) => {

    const [internalValue, setInternalValue] = useState('');

    const { type, onBlur, onChange, maxLength, name, label, required, disabled, value, readOnly, className } = props;

    function handleBlur(e: React.FocusEvent<HTMLInputElement>): void {
        // adjust firefox behavior... when input's type is number, firefox doesn't dispatch change event but
        // fill the field with new value, to fix that, we clear input when value is not a number
        if (type === 'number' && !e.target.validity.valid) {
            e.target.value = '';
            setInternalValue('');
        }

        onBlur && onBlur(e);
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setInternalValue(e.target.value);

        onChange && onChange(e);
    }

    return (
        <div className={cn(className, 'input-container', type, {
            'disabled': disabled,
            'readonly': readOnly,
        })}>
            <input {...props} className={
                cn(className, ['input'], {
                    'filled':
                        !!(value !== undefined ? value : internalValue) ||
                        (type === 'number' && value === 0),
                })
            }
                onChange={handleChange} onBlur={handleBlur} />
            <label
                id={`${name}-input-label`}
                htmlFor={`${name}-input`}
                className={'label'}
                data-label=""
            >
            </label>
        </div>
    )
}

export default Input;

