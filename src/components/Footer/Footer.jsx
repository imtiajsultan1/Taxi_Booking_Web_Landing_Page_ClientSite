import React from 'react';
import { useTranslation } from '../../hooks/useTranslation.js';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className='px-40 py-4 bg-black bg-opacity-80 flex justify-between '>
                <h1 className='text-gray-200'>&copy; {t('footer_brand')}</h1>
                <h1 className='text-gray-200'>{t('footer_rights')}</h1>
            </div>
        </div>
    );
};

export default Footer;
