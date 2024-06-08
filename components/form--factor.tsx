"use client"

import { useState } from 'react';

import Card from './card';

const FormFactor = () => {
    const [formFactor, setFormFactor] = useState(1);
    return (
        <div className="mt-12">
            <h2 className="text-lg">Form Factor</h2>
            <div className="mt-2 grid grid-cols-2 gap-5 ">
                <Card
                    title="Profiler Head"
                    description="Compact amplifier head, perfect for a speaker cabinet or desk."
                    selected={formFactor === 1}
                    onClick={() => setFormFactor(1)}
                />
                <Card
                    title="Profiler Rack"
                    description="3U rackmount version of the classic profiling amplifier."
                    selected={formFactor === 2}
                    onClick={() => setFormFactor(2)}
                />
            </div>
        </div>
    )
}

export default FormFactor