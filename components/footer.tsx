"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';

type FooterProps = {
    isPowerAmp: boolean;
    isFootController: boolean;
};

const Footer = ({ isPowerAmp, isFootController }: FooterProps) => {
    const [price, setPrice] = useState(1299);

    useEffect(() => {
        let price = 1799;
        if (isPowerAmp) {
            price += 449;
        }
        if (isFootController) {
            price += 449;
        }
        setPrice(price);
    }, [isPowerAmp, isFootController]);

    return (
        <div className="fixed bottom-0 p-10 w-screen bg-gray-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex">
                    <div className="flex items-start">
                        <Image className="mt-1" src="/icon1.png" alt="icon1" width={16} height={16} />
                        <div className="ml-2">
                            <h2 className="text-gray-900 text-lg">Free Shipping</h2>
                            <p className="mt-2 text-gray-400 text-sm">
                                Get 2-day free shipping anywhere <br /> in Sri Lanka.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start ml-2">
                        <Image className="mt-1" src="/icon2.png" alt="icon1" width={16} height={16} />
                        <div className="ml-2">
                            <h2 className="text-gray-900 text-lg">2 Year Warranty</h2>
                            <p className="mt-2 text-gray-400 text-sm">
                                If anything goes wrong in the first two <br /> years, we&apos;ll
                                replace it for free.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="text-right mr-4">
                        <h2 className="text-gray-900 text-2xl font-bold">${price}</h2>
                        <p className="text-gray-400 text-sm">
                            Need financing? <u className="cursor-pointer">Learn More</u>
                        </p>
                    </div>

                    <button className="bg-black text-white px-10 py-3 rounded-md transition-all duration-200 ease-in-out hover:scale-105 active:scale-100">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Footer