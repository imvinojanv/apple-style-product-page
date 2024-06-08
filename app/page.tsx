"use client"

import { useState } from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Product from "@/components/product";

const Home = () => {
    const [isPowerAmp, setIsPowerAmp] = useState(false);
    const [isFootController, setIsFootController] = useState(false);

    return (
        <>
            <div className="max-w-7xl mx-auto">
                <Header />
                <Product
                    setIsPowerAmp={setIsPowerAmp}
                    setIsFootController={setIsFootController}
                />
            </div>
            <Footer isPowerAmp={isPowerAmp} isFootController={isFootController} />
        </>
    )
}

export default Home