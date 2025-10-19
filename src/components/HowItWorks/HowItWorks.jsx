import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "../../hooks/useTranslation.js";
import stepImageOne from "../../../public/howItWorks1.jpg";
import stepImageTwo from "../../../public/howItWorks2.jpg";
import stepImageThreeA from "../../../public/howItWorks3one.jpg";
import stepImageThreeB from "../../../public/howItWorks3two.jpg";
import stepImageThreeC from "../../../public/howItWorks3three.jpg";

const steps = [
  {
    id: 1,
    layout: "single",
    img: stepImageOne,
    titleKey: "step_1_title",
    descriptionKey: "step_1_text",
  },
  {
    id: 2,
    layout: "single",
    img: stepImageTwo,
    titleKey: "step_2_title",
    descriptionKey: "step_2_text",
  },
  {
    id: 3,
    layout: "grid",
    images: [stepImageThreeA, stepImageThreeB, stepImageThreeC],
    titleKey: "step_3_title",
    descriptionKey: "step_3_text",
  },
];

const HowItWorks = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 6000); // auto change every 6s for readability

    return () => clearInterval(interval);
  }, [isPaused]);

  const mediaDimensions = useMemo(() => ({ height: "min(55vh, 460px)" }), []);
  const gridMediaDimensions = useMemo(() => ({ height: "min(40vh, 320px)" }), []);

  return (
    <div id="how-it-works" className="px-6 md:px-12 lg:px-20 bg-white text-black py-20 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold block text-center pb-12 md:pb-16">{t('section_how_it_works')}</h1>

      <div className="w-full max-w-5xl mx-auto">
        {steps.map((item, index) => (
          activeIndex === index && (
            <div
              key={item.id}
              className="w-full h-full flex flex-col items-center gap-6 md:gap-8 transition-opacity duration-700"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-center">{t(item.titleKey)}</h2>

              {item.layout === "single" ? (
                <figure className="flex items-center justify-center w-full" style={mediaDimensions}>
                  <img
                    src={item.img}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="h-full w-full object-contain"
                    alt={t(item.titleKey)}
                  />
                </figure>
              ) : (
                <div className="grid gap-4 p-5 sm:grid-cols-3">
                  {item.images.map((imageSrc, imgIndex) => (
                    <figure
                      key={imageSrc}
                      className="flex items-center justify-center"
                      style={gridMediaDimensions}
                    >
                      <img
                        src={imageSrc}
                        loading="lazy"
                        className="h-full w-full object-contain"
                        alt={`${t(item.titleKey)} image ${imgIndex + 1}`}
                      />
                    </figure>
                  ))}
                </div>
              )}

              <p className="mt-2 max-w-3xl text-base md:text-lg text-center text-slate-700">{t(item.descriptionKey)}</p>
            </div>
          )
        ))}
      </div>

      {/* Indicators */}
      <div className="flex w-full justify-center gap-2 py-6">
        {steps.map((_, index) => (
          <button
            key={index}
            className={`btn btn-sm font-semibold border-none ${activeIndex === index ? "bg-primary text-black" : "bg-white text-black"
              }`}
            onClick={() => {
              setActiveIndex(index);
              setIsPaused(true);
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
