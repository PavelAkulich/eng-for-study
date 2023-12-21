import { cn } from '@/lib/utils';
import React from 'react'

type Props = {
    icon?: React.ReactNode;
    description?: string;
    title?: string;
    children?: React.ReactNode;
    classList?: string;
}

const Card = ({
    icon,
    description,
    title,
    children,
    classList
}: Props) => {
  return (
    <div className={cn('bg-slate-300 dark:bg-gray-900 border border-slate-400 dark:border-gray-950 rounded-md p-4', classList)}>
        <div>
        <div>{icon}</div>
        <div>
            <div>{title}</div>
            <div>{description}</div>
        </div>
        </div>
        {children && <div>{children}</div>}
    </div>
  )
}

export default Card