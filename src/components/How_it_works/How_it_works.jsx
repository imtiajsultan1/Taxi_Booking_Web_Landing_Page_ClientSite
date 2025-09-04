import { useEffect, useState } from "react";

const How_it_works = () => {
  const items = [
    {
      id: 1,
      img: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
      step: "Step 1",
      desc: "Register Taxi parks sign up with AutoFlot and receive access to their own dispatcher panel. Register your vehicles and drivers.",
    },
    {
      id: 2,
      img: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
      step: "Step 2",
      desc: "Set Per-Kilometer Fares. Choose different rates for each driver.",
    },
    {
      id: 3,
      img: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
      step: "Step 3",
      desc: "Go Live! As soon as setup is done, your fleet becomes visible in the Navidi passenger app. Riders can immediately start booking.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 2000); // auto change every 2s

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="px-40 bg-white text-black py-40">
      <h1 className="text-5xl font-bold block text-center pb-20">How It Works</h1>

      <div className="carousel w-full">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item w-full h-full flex flex-col items-center ${
              activeIndex === index ? "block" : "hidden"
            }`}
          >
            {/* Step title above image */}
            <h2 className="text-2xl font-bold mb-4">{item.step}</h2>

            {/* Image should expand full width inside px-40 container */}
            <img
              src={item.img}
              className="w-full rounded-lg shadow-md"
              alt={item.step}
            />

            {/* Description below image */}
            <p className="mt-4 text-lg text-center">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="flex w-full justify-center gap-2 py-6">
        {items.map((_, index) => (
          <button
            key={index}
            className={`btn btn-xs  ${
              activeIndex === index ? "bg-primary text-black" : "bg-white text-black"
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

export default How_it_works;
