import React from "react";
import { useTranslation } from "react-i18next";

export default function WhyChoose() {
  const { t } = useTranslation();
  const reasons = t("whyChoose.reasons", { returnObjects: true }); // Get reasons as an array

  if (!Array.isArray(reasons)) {
    console.error("reasons is not an array:", reasons);
    return null; // or some fallback UI
  }

  return (
    <section id="whychooseus" className="px-[20px] py-[80px]">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[28px]">
          <div className="flex flex-col gap-[59px] md:py-[40px]">
            <h2 className="text-[40px] leading-[44px] text-black_100 font-[700]">
              {t("whyChoose.title")}
            </h2>
            <p className="text-gray_600 text-[16px] font-[500]">
              {t("whyChoose.description")}
            </p>
          </div>

          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col gap-[16px] rounded-[20px] bg-[#F9FAFB] px-[30px] py-[40px]"
            >
              <img
                src={reason.imgSrc}
                alt={reason.imgAlt}
                className="w-[60px] h-[60px]"
              />
              <h3 className="mt-[34px] text-[26px] font-[700] text-black_100 leading-[31.2px]">
                {reason.title}
              </h3>
              <p className="text-gray_600 text-[16px] font-[500]">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
