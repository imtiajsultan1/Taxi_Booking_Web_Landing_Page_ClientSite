import React from 'react';

const Contact = () => {
    return (
        <div className='bg-primary px-40 py-40 flex justify-around items-start'>
            <div className='text-black flex flex-col justify-center items-center'>
                <h1 className=' font-bold text-4xl pb-4'>Address</h1>
                <p  >Prokopevsk, Kemerovskaya oblast</p>
                <p >Rissia</p>
            </div>
            <div className='text-black flex flex-col justify-center items-center'>
                <h1 className=' font-bold text-4xl pb-4'>Socials</h1>

                <div className='flex gap-4'>
                    {/* facebook logo */}
                    <img src="https://img.icons8.com/?size=100&id=87298&format=png&color=ffffff" className='size-10 p-1  bg-black' alt="N/a" />
                    {/* whatsapp */}
                    <img src="https://img.icons8.com/?size=100&id=16712&format=png&color=ffffff" className='size-10 p-1  bg-black' alt="N/a" />
                    {/* telegram */}
                    <img src="https://img.icons8.com/?size=100&id=lUktdBVdL4Kb&format=png&color=ffffff" className='size-10 p-1 bg-black' alt="N/a" />

                </div>


            </div>
            <div className='text-black flex flex-col justify-center items-center'>
                <h1 className=' font-bold text-4xl pb-4'>Contacts</h1>
                <p >+1 (234) 567 89 00</p>
                <p >autoflot@gmail.com</p>
            </div>

        </div>
    );
};

export default Contact;