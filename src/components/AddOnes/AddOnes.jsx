import React from 'react';
import taxi from '../../../public/taxi.jpg';
import { useTranslation } from '../../hooks/useTranslation.js';

const AddOnes = () => {
    const { t } = useTranslation();
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
                <p className="text-sm uppercase tracking-[0.3em] text-primary">{t('section_add_ons')}</p>
                <p className="text-4xl font-bold">
                    {t('verification_title')}
                </p>
                <p className="text-lg">
                    {t('verification_text')}
                </p>
                <button className="btn bg-primary text-black font-bold">
                    {t('verification_link')}
                </button>
            </div>
        </div>
    );
};

export default AddOnes;
