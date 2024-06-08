"use client"

import { useEffect, useState } from 'react';

type CardProps = {
    title: string;
    description?: string;
    amount?: number;
    selected?: boolean;
    onClick?: () => void;
};

const Card = ({ title, description, amount, selected, onClick }: CardProps) => {
    useEffect(() => {
        console.log(selected);
    }, [selected]);

    return (
        <div
            className={
                `relative cursor-pointer p-5 flex flex-col items-start justify-center rounded-md border-2 border-gray-300 hover:border-gray-400 ${selected && "border-gray-800"}`
            }
            onClick={onClick}
        >
            <h3 className="text-gray-900">{title}</h3>
            {description && (
                <p className="mt-2 text-sm text-gray-500">{description}</p>
            )}
            {amount && (
                <span className="text-sm absolute right-4">+ {`$${amount}`}</span>
            )}
        </div>
    )
}

export default Card