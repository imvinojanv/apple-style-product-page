"use client"

import { useState } from 'react';

import Card from './card';

type FootControllerProps = {
    setIsFootController: (isFootController: boolean) => void;
};

const FootController = ({ setIsFootController }: FootControllerProps) => {
    const [footController, setFootController] = useState(1);

    return (
        <div className="mt-12">
            <h2 className="text-lg">Foot Controller</h2>
            <div className="mt-2 grid grid-cols-1 gap-5">
                <Card
                    title="None"
                    selected={footController === 1}
                    onClick={() => {
                        setFootController(1);
                        setIsFootController(false);
                    }}
                />
                <Card
                    title="Profiler Remote Foot Controller"
                    amount={449}
                    selected={footController === 2}
                    onClick={() => {
                        setFootController(2);
                        setIsFootController(true);
                    }}
                />
            </div>
        </div>
    )
}

export default FootController