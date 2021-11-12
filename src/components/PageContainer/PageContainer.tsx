import React, { FC } from 'react';
import cn from 'classnames';

import './PageContainer.css';

export type PageContainerProps = {
    className?: string;
}

export const PageContainer: FC<PageContainerProps> = ({
    className,
    children,
}) => {
    return (
        <div  className={cn('PageContainer', className)}>
            {children}
        </div>
    );
}