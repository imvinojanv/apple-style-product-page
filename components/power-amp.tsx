"use client"

import { useState } from 'react';

import Card from './card';

type PowerAmpProps = {
    setIsPowerAmp: (isPowerAmp: boolean) => void;
};

const PowerAmp = ({ setIsPowerAmp }: PowerAmpProps) => {
    const [powerAmp, setPowerAmp] = useState(1);

    return (
        <div className="mt-12">
            <h2 className="text-lg">Power Amp</h2>
            <div className="mt-2 grid grid-cols-1 gap-5">
                <Card
                    title="None"
                    description="Use in the studio or with your own power amp."
                    selected={powerAmp === 1}
                    onClick={() => {
                        setPowerAmp(1);
                        setIsPowerAmp(false);
                    }}
                />
                <Card
                    title="Powered"
                    description="Built-in 600W solid state power amp."
                    amount={449}
                    selected={powerAmp === 2}
                    onClick={() => {
                        setPowerAmp(2);
                        setIsPowerAmp(true);
                    }}
                />
            </div>
        </div>
    )
}

export default PowerAmp