import React from 'react';
import taxi from '../../../public/taxi.jpg'

const AddOnes = () => {
    return (
        <div
            style={{
                backgroundImage:
                    `url(${taxi})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
            className="relative min-h-screen px-40 flex items-center"
        >
            {/* Dark overlay behind content */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            {/* Actual content */}
            <div className="relative z-10 w-full text-white space-y-6 flex flex-col justify-center items-center text-center">
                <p className="text-4xl font-bold">
                    Driver & Vehicle Inspection Verification Add-Ons
                </p>
                <p className="text-lg">
                    AutoFlot offers an integrated system for verifying both driver
                    medical inspections and vehicle technical inspections. Only verified
                    drivers and cars can receive ride requests from Yandex as well as
                    AutoFlot.
                </p>
                <button className="btn bg-yellow-300 text-black font-bold">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default AddOnes;
