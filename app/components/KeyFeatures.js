import React from "react";
import { useTranslation } from "react-i18next";

const KeyFeatures = () => {
  const { t } = useTranslation();

  const features = t("keyFeatures.features", { returnObjects: true });

  // Check if features is an array
  if (!Array.isArray(features)) {
    console.error("Features is not an array:", features);
    return null; // or some fallback UI
  }

  return (
    <section
      id="keyfeatures"
      className="bg-white pt-[120px] pb-[80px] px-[20px]"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <h2 className="text-[40px] text-black_100 leading-[42.8px] font-[700] tracking-[-2%]">
            {t("keyFeatures.title")}
          </h2>
          <p className="mt-[20px] text-[16px] leading-[24px] text-gray_600 max-w-[632px] mx-auto">
            {t("keyFeatures.description")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[30px] md:gap-y-[84px] mt-[60px] max-w-[1120px] mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center ">
              <img
                src={feature.icon}
                width={60}
                height={60}
                alt={feature.title}
                className="w-[60px] h-[60px]"
              />
              <h2 className="mt-[20px] text-[28px] font-[700] leading-[33.6px] text-black_100 text-center">
                {feature.title}
              </h2>
              <p className="mt-[16px] text-[16px] leading-[24px] text-gray_600 text-center font-[400]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
