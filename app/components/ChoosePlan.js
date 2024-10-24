import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const ChoosePlan = () => {
  const { t } = useTranslation();
  const [activePlan, setActivePlan] = useState(1); // Set initial active plan to the second item (index 1)

  // Use a state to store tiers to ensure it's an array and to trigger re-renders
  const [tiers, setTiers] = useState([]);

  useEffect(() => {
    const fetchedTiers = t("choosePlan.tiers", { returnObjects: true });
    if (Array.isArray(fetchedTiers)) {
      setTiers(fetchedTiers); // Set tiers only if it's an array
    }
  }, [t]); // Re-run when the translation changes

  return (
    <section className="bg-white py-[80px] px-[20px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <h2 className="text-[40px] text-black_100 leading-[42.8px] font-[700] tracking-[-2%]">
            {t("choosePlan.title")}
          </h2>
          <p className="mt-[20px] text-[16px] leading-[24px] text-gray_600 max-w-[632px] mx-auto">
            {t("choosePlan.description")}
          </p>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap justify-center md:items-stretch items-center gap-[20px] mt-[60px]">
          {tiers.map((tier, index) => (
            <div
              key={index}
              onClick={() => setActivePlan(index)} // Set the active plan when clicked
              className={`bg-white px-[30px] py-[40px] rounded-[22px] cursor-pointer ${
                activePlan === index
                  ? "border-[3px] border-[#4F45E4]"
                  : "border border-[#E5E7EB]"
              } w-full max-w-sm`}
              style={{
                boxShadow: `0px 2px 4px -2px #0000000D, 0px 4px 6px -1px #0000001A`,
              }}
            >
              <h2 className="text-[24px] font-[600] mb-[12px]">{tier.title}</h2>
              <div className="text-[47px] font-[700] mb-[32px] flex items-center leading-[52.64px]">
                {tier.price}
                <span className="text-[20px] ml-[16px] text-gray_600 leading-[22.4px]">
                  /month
                </span>
              </div>
              <ul className="mb-[32px] pb-[32px] space-y-[21px] border-b border-b-[#D1D5DB]">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <img
                      src="/assets/icons/check.png"
                      className="mr-[12px] flex-shrink-0 w-[15px] h-[13px] my-auto"
                      alt="Check icon" // Added alt text for accessibility
                    />
                    <span className="text-gray_600 text-[16px] leading-[20.16px] font-[500]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-[12px] px-6 rounded-full text-[20px] font-[700] leading-[30px] ${
                  activePlan === index
                    ? "bg-[#4F45E4] text-white hover:bg-indigo-600"
                    : "bg-[#E4E7EB] text-black hover:bg-gray-200"
                }`}
              >
                {tier.ctaText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChoosePlan;
