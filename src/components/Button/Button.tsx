import React, { FC } from 'react';
import cn from 'classnames';

import './Button.css';

export type ButtonProps = {
    className?: string;
    children: string;
    disabled?: boolean;
    type?: 'button' | 'submit';
    tabIndex?: number;
    onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
    className,
    children,
    disabled,
    type,
    tabIndex,
    onClick
}) => {
    return (
        <button
            className={cn('Button', { disabled }, className)}
            type={type}
            tabIndex={tabIndex}
            onClick={disabled ? undefined : onClick}
        >
            <span className={cn('Button-text')}>{children}</span>
        </button>
    );
}