// import React from 'react';
import taxi from '../../../public/taxi-home.jpg'
import { useTranslation } from '../../hooks/useTranslation.js'

const Home = () => {
    const { t } = useTranslation();
    return (
        <div style={{
            backgroundImage: `url(${taxi})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
        }} className='relative min-h-screen'>

            {/* top navbar  */}
            <div className='px-40 py-4 bg-black bg-opacity-90 flex justify-between '>
                <h1 className='text-gray-200'>{t('top_contact_email')}</h1>
                <div className='flex gap-2'>
                    {/* facebook logo */}
                    <img src="https://img.icons8.com/?size=100&id=87298&format=png&color=ffffff" className='size-6 p-1 border border-solid border-white' alt="N/a" />
                    {/* insta logo */}
                    <img src="https://img.icons8.com/?size=100&id=32292&format=png&color=ffffff" className='size-6 p-1 border border-solid border-white' alt="N/a" />
                    {/* youtube logo */}
                    <img src="https://img.icons8.com/?size=100&id=37325&format=png&color=ffffff" className='size-6 p-1 border border-solid border-white' alt="N/a" />

                </div>
            </div>

            {/* 2nd navbar  */}
            <div className='px-40 py-4 flex justify-between items-center  bg-black bg-opacity-80'>
                <div>
                    <h1 className='text-3xl font-bold'><span className='p-1 bg-primary text-black'>Auto</span><span className='text-white'> Flot</span></h1>
                </div>
                <div className='flex gap-2 font-bold '>
                    {/* Our fleet About us App FAQ Contacts */}
                    <a href="" className='hover:text-primary'>{t('nav_our_fleet')}</a>
                    <a className='hover:text-primary'>{t('nav_about_us')}</a>
                    <a className='hover:text-primary'>{t('nav_app')}</a>
                    <a className='hover:text-primary'>{t('nav_faq')}</a>
                    <a className='hover:text-primary'>{t('nav_contacts')}</a>
                </div>
                <div>
                    <h1 className='text-primary font-bold text-2xl'>{t('contact_phone')}</h1>
                </div>
            </div>

            {/* form setion  */}
            <div className="relative">
                {/* Dark overlay behind hero */}
                <div className="absolute inset-0 bg-black bg-opacity-80"></div>
                <div className='px-40'>
                    {/* form */}
                    <div className="hero  min-h-screen ">
                        <div className="hero-content flex-col lg:justify-between lg:flex-row-reverse">
                            <div className="text-center lg:text-left lg:w-1/2">
                                <h1 className="text-6xl font-bold">{t('headline')}</h1>
                                <p className="py-6 font-bold">
                                     {t('subheadline')}
                                </p>
                                <div className="form-control mt-6">
                                    <button className="btn bg-primary text-black font-bold">{t('hero_primary_button')}</button>
                                </div>
                            </div>
                            <div className=" bg-white w-full max-w-sm shrink-0 shadow-2xl rounded-xl pb-4">
                                <form className="card-body">
                                    <div>
                                        <h1 className='text-4xl font-bold text-black'>{t('section_book_demo')}</h1>
                                    </div>
                                    {/* short yello bar */}
                                    <div className='w-10 h-1 bg-primary mt-6 mb-6'>
                                    </div>
                                    {/* Taxi Company Name */}
                                    <div className="form-control">
                                        <input type="text" placeholder={t('form_taxi_park_name')} className="input input-bordered border-gray-300 bg-white text-black w-full" required />
                                    </div>
                                    {/* Email */}
                                    <div className="form-control">
                                        <input type="email" placeholder={t('form_email_address')} className="input input-bordered  border-gray-300 bg-white text-black w-full" required />
                                    </div>
                                    {/* contact number */}
                                    <div className="form-control">
                                        <input type="text" placeholder={t('form_contact_number')} className="input input-bordered  border-gray-300 bg-white text-black w-full" required />
                                    </div>
                                    {/* submit button */}
                                    <div className="form-control pt-6">
                                        <button className="btn w-full bg-primary text-black font-bold">{t('book_demo_button')}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* text */}
                    <div></div>
                </div>
            </div>

        </div>
    );
};

export default Home;
