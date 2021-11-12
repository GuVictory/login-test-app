import React, { FC, useCallback, useMemo, useState } from 'react';
import cn from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


import './TextInput.css';

const Eye = <FontAwesomeIcon className="icon" icon={faEye} />;
const EyeSlash = <FontAwesomeIcon className="icon" icon ={faEyeSlash}/>;

interface TextInputProps 
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'> {
    className?: string;
    error?: boolean;
    value?: string;
}

export const TextInput: FC<TextInputProps> = ({
    className,
    error,
    ...shared
}) => {
    const isPassword = shared?.type === 'password';
    const [showPassword, setShowPassword] = useState(false)

    const handleChange = useCallback((event) => {
        event.preventDefault();
        shared.onChange?.(event.target.value)
    }, [shared]);

    const handleShowPassword = useCallback(() => {
        setShowPassword(!showPassword);
    }, [showPassword]);

    const input = useMemo(() => (
        <input
            className={cn('TextInput__input')}
            onChange={handleChange}
            {...shared}
            type={isPassword ? (showPassword ? 'text' : 'password') : shared?.type}
        />
    ), [handleChange, isPassword, shared, showPassword]);

    return (
        <div className={cn('TextInput', { 'TextInput__error': error }, className)}>
            {input}
            {isPassword && 
                <>{showPassword ? 
                    <i onClick={handleShowPassword}>{Eye}</i>:
                    <i onClick={handleShowPassword}>{EyeSlash}</i>}
                </>
            }
        </div>
    );
}