"use client"

import Image from 'next/image';
import { useState } from 'react';

const ImageCarousel = () => {
    const [currentImage, setCurrentImage] = useState('/2.png');

    return (
        <div>
            <div className='border border-gray-100 rounded-md w-full h-[480px]'>
                <Image 
                    alt='product image'
                    src={currentImage}
                    width={600}
                    height={600}
                    className='w-full h-full rounded-md'
                />
            </div>
            <div className="mt-10 grid gap-3 grid-cols-3">
                <button>
                    <Image 
                        alt='head-black_front'
                        src='/2.png'
                        width={240}
                        height={240}
                        className={`h-36 w-full border border-gray-200 rounded-md hover:border-gray-400 focus:border-gray-400 ${
                            currentImage === "/2.png" && "border-gray-700"
                          }`}
                        onClick={() => setCurrentImage('/2.png')}
                    />
                </button>
                <button>
                    <Image 
                        alt='head-black_front'
                        src='/1.png'
                        width={240}
                        height={240}
                        className={`h-36 w-full border border-gray-200 rounded-md hover:border-gray-400 focus:border-gray-400 ${
                            currentImage === "/1.jpeg" && "border-gray-700"
                          }`}
                        onClick={() => setCurrentImage('/1.png')}
                    />
                </button>
                <button>
                    <Image 
                        alt='head-black_front'
                        src='/3.jpg'
                        width={240}
                        height={240}
                        className={`h-36 w-full border border-gray-200 rounded-md hover:border-gray-400 focus:border-gray-400 ${
                            currentImage === "/3.jpg" && "border-gray-700"
                          }`}
                        onClick={() => setCurrentImage('/3.jpg')}
                    />
                </button>
            </div>
        </div>
    )
}

export default ImageCarousel