import React, { FC } from 'react';
import cn from 'classnames';

import './Card.css';

export type CardProps = {
    className?: string;

    width?: 'full' | 'feat';
}

export const Card: FC<CardProps> = ({
    className,
    children,
    width = 'feat',
}) => {
    return (
        <div  className={cn('Card', { [`Card-${width}`]: true }, className)}>
            {children}
        </div>
    );
}