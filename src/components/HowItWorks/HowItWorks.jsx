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

      <div className="w-full max-w-4xl mx-auto">
        {steps.map((item, index) => (
          activeIndex === index && (
            <div
              key={item.id}
              className="w-full h-full flex flex-col items-center gap-5 md:gap-6 transition-opacity duration-700"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-center">{t(item.titleKey)}</h2>

              <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-black/10 backdrop-blur">
                {item.layout === "single" ? (
                  <figure className="relative flex items-center justify-center w-full bg-black/80" style={mediaDimensions}>
                    <img
                      src={item.img}
                      loading={index === 0 ? "eager" : "lazy"}
                      className="absolute inset-0 h-full w-full object-contain"
                      alt={t(item.titleKey)}
                    />
                  </figure>
                ) : (
                  <div className="grid gap-4 p-4 sm:grid-cols-3 bg-black/60">
                    {item.images.map((imageSrc, imgIndex) => (
                      <figure
                        key={imageSrc}
                        className="relative flex items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/80"
                        style={gridMediaDimensions}
                      >
                        <img
                          src={imageSrc}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-contain"
                          alt={`${t(item.titleKey)} image ${imgIndex + 1}`}
                        />
                      </figure>
                    ))}
                  </div>
                )}
              </div>

              <p className="mt-1 md:mt-2 max-w-3xl text-base md:text-lg text-center text-black/80">{t(item.descriptionKey)}</p>
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
