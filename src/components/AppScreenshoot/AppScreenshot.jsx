import phone1 from '../../assets/phone1.png'
import phone2 from '../../assets/phone2.png'
import { useEffect, useState } from "react";
import { useTranslation } from '../../hooks/useTranslation.js';

const screenshots = [phone1, phone2];

const AppScreenshot = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % screenshots.length);
        }, 2000); // change every 2s

        return () => clearInterval(interval); // cleanup
    }, []);

    const passengerText = t('passenger_choice_text');
    const highlight = t('passenger_choice_highlight');
    const hasHighlight = passengerText.includes(highlight);
    const [beforeHighlight, afterHighlight] = hasHighlight ? passengerText.split(highlight) : [passengerText, ""];

    return (
        <div id="app" className="bg-primary text-black px-40 pt-40 flex justify-center gap-8 items-center pb-40">
            <div>
                <div className="carousel rounded-box w-64">
                    {screenshots.map((src, index) => (
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
                <h1 className='text-5xl font-bold pb-8'>{t('section_passenger_choice')}</h1>
                <h1>
                    {hasHighlight ? (
                        <>
                            {beforeHighlight}
                            <span className="text-black font-bold">{highlight}</span>
                            {afterHighlight}
                        </>
                    ) : passengerText}
                </h1>
                <button className='btn  mt-8 px-10 font-bold'>{t('book_demo_button')}</button>
            </div>
        </div>
    );
};

export default AppScreenshot;
