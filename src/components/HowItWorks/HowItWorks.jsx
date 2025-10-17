import { useEffect, useState } from "react";
import { useTranslation } from "../../hooks/useTranslation.js";

const steps = [
  {
    id: 1,
    img: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
    titleKey: "step_1_title",
    descriptionKey: "step_1_text",
  },
  {
    id: 2,
    img: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
    titleKey: "step_2_title",
    descriptionKey: "step_2_text",
  },
  {
    id: 3,
    img: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
    titleKey: "step_3_title",
    descriptionKey: "step_3_text",
  },
];

const HowItWorks = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 2000); // auto change every 2s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-40 bg-white text-black py-40">
      <h1 className="text-5xl font-bold block text-center pb-20">{t('section_how_it_works')}</h1>

      <div className="carousel w-full">
        {steps.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item w-full h-full flex flex-col items-center ${activeIndex === index ? "block" : "hidden"
              }`}
          >
            {/* Step title above image */}
            <h2 className="text-2xl font-bold mb-4">{t(item.titleKey)}</h2>

            {/* Image should expand full width inside px-40 container */}
            <img
              src={item.img}
              className="w-full rounded-lg shadow-md"
              alt={t(item.titleKey)}
            />

            {/* Description below image */}
            <p className="mt-4 text-lg text-center">{t(item.descriptionKey)}</p>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="flex w-full justify-center gap-2 py-6">
        {steps.map((_, index) => (
          <button
            key={index}
            className={`btn btn-xs  ${activeIndex === index ? "bg-primary text-black" : "bg-white text-black"
              }`}
            onClick={() => setActiveIndex(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
