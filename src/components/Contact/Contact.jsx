import React from 'react';
import { useTranslation } from '../../hooks/useTranslation.js';

const Contact = () => {
    const { t } = useTranslation();
    return (
        <div id="contact" className='bg-primary px-40 py-40 flex justify-around items-start'>
            <div className='text-black flex flex-col justify-center items-center text-center'>
                <h1 className=' font-bold text-4xl pb-4'>{t('contact_address_title')}</h1>
                <p>{t('contact_address_line1')}</p>
                <p>{t('contact_address_line2')}</p>
            </div>
            <div className='text-black flex flex-col justify-center items-center'>
                <h1 className=' font-bold text-4xl pb-4'>{t('contact_socials_title')}</h1>

                <div className='flex gap-4'>
                    {/* facebook logo */}
                    <img src="https://img.icons8.com/?size=100&id=87298&format=png&color=ffffff" className='size-10 p-1  bg-black' alt="Facebook" />
                    {/* whatsapp */}
                    <img src="https://img.icons8.com/?size=100&id=16712&format=png&color=ffffff" className='size-10 p-1  bg-black' alt="WhatsApp" />
                    {/* telegram */}
                    <img src="https://img.icons8.com/?size=100&id=lUktdBVdL4Kb&format=png&color=ffffff" className='size-10 p-1 bg-black' alt="Telegram" />

                </div>


            </div>
            <div className='text-black flex flex-col justify-center items-center text-center'>
                <h1 className=' font-bold text-4xl pb-4'>{t('contact_contacts_title')}</h1>
                <p>{t('contact_phone')}</p>
                <p>{t('contact_email')}</p>
            </div>

        </div>
    );
};

export default Contact;
