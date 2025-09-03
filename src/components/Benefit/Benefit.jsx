import React from 'react';

const Benefit = () => {
    return (
        <div className='bg-white px-40 py-28'>
            <div>
                <div className='flex flex-col gap-8'>
                    <div><h1 className='text-yellow-400 font-bold'>Welcome to AutoFlot</h1></div>
                    <div>
                        <h1 className='text-4xl font-bold text-black'>Why Choose Us</h1>
                    </div>
                    <div className='w-10 h-1 bg-yellow-400'>
                    </div>

                    {/* div container */}
                    {/* fair pricing model */}
                    <div className='flex flex-col gap-8'>
                        <div className='flex gap-4 justify-start items-center'>
                            <img src="https://img.icons8.com/?size=100&id=3049&format=png&color=fde047" className='bg-black p-2 w-20 rounded-md ' alt="" />
                            <div>
                                <h1 className='font-bold text-2xl text-black pb-2'>Fair Pricing Model</h1>
                                <h1 className='text-black'>Stop paying endless commission cuts. Pay a predictable subscription fee and keep more of your earnings. Your subscription fee is only activated after you reach a certain number of rides. Until then, it’s free. Predictable, affordable, and built for your growth.</h1>
                            </div>
                        </div>

                        {/* flexible fare control */}
                        <div className='flex gap-4 justify-start items-center'>
                            <img src="https://img.icons8.com/?size=100&id=34401&format=png&color=fde047" className='bg-black p-2 w-20 rounded-md ' alt="" />

                            <div>
                                <h1 className='font-bold text-2xl text-black pb-2'>Flexible Fare Control</h1>
                                <h1 className='text-black'>Each taxi park sets its own per-kilometer rates. Different drivers and cars can have different fares, fully controlled by you – no central restrictions.</h1>
                            </div>
                        </div>
                        {/* Your brand */}
                        <div className='flex gap-4 justify-start items-center'>
                            <img src="https://img.icons8.com/?size=100&id=UxFxy0WX05Fj&format=png&color=fde047" className='bg-black p-2 w-20 rounded-md' alt="" />
                            <div>
                                <h1 className='font-bold text-2xl text-black pb-2'>Your Brand, Your Customers</h1>
                                <h1 className='text-black'>AutoFlot allows taxi parks to promote their own brand inside the passenger app. Build loyalty and stay visible to your riders.</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefit;