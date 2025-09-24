// import React from 'react';
import phone1 from '../../../public/phone1.png'
import phone2 from '../../../public/phone2.png'
import { useEffect, useState } from "react";
// import App from '../../App';

const AppScreenshot = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [phone1,phone2];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % items.length);
        }, 2000); // change every 1s

        return () => clearInterval(interval); // cleanup
    }, [items.length]);
    return (
        <div className="bg-primary text-black px-40 pt-40 flex justify-center gap-8 items-center pb-40">
            <div>
                <div className="carousel rounded-box w-64">
                    {items.map((src, index) => (
                        <div
                            key={index}
                            className={`carousel-item w-full ${activeIndex === index ? "block" : "hidden"
                                }`}
                        >
                            <img src={src} className="w-full" alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-[500px]'>
                <h1 className='text-5xl font-bold pb-8'>Passenger Choice</h1>
                <h1>Passengers using the <span className="text-black font-bold">Navidi App</span> can see rides from all registered taxi parks, compare fares, and choose the one that suits them best.</h1>
                <button className='btn  mt-8 px-10 font-bold'>Book Now</button>
            </div>
        </div>
    );
};

export default AppScreenshot;