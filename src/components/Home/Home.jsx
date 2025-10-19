// import React from 'react';
import taxi from '../../../public/taxi-home.jpg'
import { useTranslation } from '../../hooks/useTranslation.js'
import { useLanguage } from '../../context/LanguageContext.jsx'
import NavLanguageSwitch from '../LanguageToggle/NavLanguageSwitch.jsx'

const Home = () => {
    const { t } = useTranslation();
    const { language } = useLanguage();
    const isRussian = language === 'ru';

    const navItems = [
        // { key: 'nav_home', target: 'home' },
        { key: 'nav_benefits', target: 'benefits' },
        { key: 'nav_app', target: 'app' },
        { key: 'nav_how_it_works', target: 'how-it-works' },
        { key: 'nav_add_ons', target: 'add-ons' },
        // { key: 'nav_video', target: 'video' },
        { key: 'nav_contact', target: 'contact' },
    ];

    const handleNavClick = (target) => () => {
        const section = document.getElementById(target);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div id="home" style={{
            backgroundImage: `url(${taxi})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
        }} className='relative min-h-screen'>

            {/* top navbar  */}
            <div className='px-6 lg:px-40 py-4 bg-black bg-opacity-90 flex flex-col gap-2 lg:flex-row lg:justify-between lg:items-center'>
                <h1 className='text-gray-200 text-center lg:text-left'>{t('top_contact_email')}</h1>
                <div className='flex justify-center gap-2'>
                    {/* facebook logo */}
                    <img src="https://img.icons8.com/?size=100&id=87298&format=png&color=ffffff" className='size-6 p-1 border border-solid border-white' alt="N/a" />
                    {/* insta logo */}
                    <img src="https://img.icons8.com/?size=100&id=32292&format=png&color=ffffff" className='size-6 p-1 border border-solid border-white' alt="N/a" />
                    {/* youtube logo */}
                    <img src="https://img.icons8.com/?size=100&id=37325&format=png&color=ffffff" className='size-6 p-1 border border-solid border-white' alt="N/a" />

                </div>
            </div>

            {/* 2nd navbar  */}
            <div className='px-6 lg:px-40 py-4 bg-black bg-opacity-80'>
                <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
                    <div className='flex justify-center lg:justify-start'>
                        <h1 className='text-3xl font-bold whitespace-nowrap'><span className='p-1 bg-primary text-black'>Auto</span><span className='text-white'> Flot</span></h1>
                    </div>
                    <div className={`flex flex-wrap items-center justify-center gap-3 lg:gap-6 text-white font-bold ${isRussian ? 'text-sm leading-tight' : 'text-base'} lg:flex-1 lg:justify-center`}>
                        {navItems.map(({ key, target }) => (
                            <button
                                key={key}
                                type="button"
                                className='hover:text-primary transition-colors whitespace-nowrap px-2 py-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80'
                                onClick={handleNavClick(target)}
                            >
                                {t(key)}
                            </button>
                        ))}
                    </div>
                    <div className='flex flex-wrap items-center justify-center gap-3 lg:gap-4 shrink-0'>
                        <NavLanguageSwitch />
                        <h1 className='text-primary font-bold text-2xl whitespace-nowrap'>{t('contact_phone')}</h1>
                    </div>
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
                                <h1 className="text-6xl font-bold text-white">{t('headline')}</h1>
                                <p className="py-6 font-bold text-white">
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
