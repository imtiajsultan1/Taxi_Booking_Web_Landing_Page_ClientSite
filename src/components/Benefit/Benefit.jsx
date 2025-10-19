import React from 'react';
import { useTranslation } from '../../hooks/useTranslation.js';

const Benefit = () => {
    const { t } = useTranslation();
    return (
        <div id="benefits" className='bg-white px-40 py-28'>
            <div>
                <div className='flex flex-col gap-8'>
                    <div><h1 className='text-primary font-bold'>{t('benefit_welcome_title')}</h1></div>
                    <div>
                        <h1 className='text-4xl font-bold text-black'>{t('section_why_choose_autoflot')}</h1>
                    </div>
                    <div className='w-10 h-1 bg-primary'>
                    </div>

                    {/* div container */}
                    {/* fair pricing model */}
                    <div className='flex flex-col gap-8'>
                        <div className='flex gap-4 justify-start items-center'>
                            <img src="https://img.icons8.com/?size=100&id=3049&format=png&color=fde047" className='bg-black p-2 w-20 rounded-md ' alt="" />
                            <div>
                                <h1 className='font-bold text-2xl text-black pb-2'>{t('fair_pricing_title')}</h1>
                                <h1 className='text-black'>{t('fair_pricing_text')}</h1>
                            </div>
                        </div>

                        {/* flexible fare control */}
                        <div className='flex gap-4 justify-start items-center'>
                            <img src="https://img.icons8.com/?size=100&id=34401&format=png&color=fde047" className='bg-black p-2 w-20 rounded-md ' alt="" />

                            <div>
                                <h1 className='font-bold text-2xl text-black pb-2'>{t('flexible_fare_title')}</h1>
                                <h1 className='text-black'>{t('flexible_fare_text')}</h1>
                            </div>
                        </div>
                        {/* Your brand */}
                        <div className='flex gap-4 justify-start items-center'>
                            <img src="https://img.icons8.com/?size=100&id=UxFxy0WX05Fj&format=png&color=fde047" className='bg-black p-2 w-20 rounded-md' alt="" />
                            <div>
                                <h1 className='font-bold text-2xl text-black pb-2'>{t('your_brand_title')}</h1>
                                <h1 className='text-black'>{t('your_brand_text')}</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefit;
