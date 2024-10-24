import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const FrequentlyAskedQuestion = () => {
  const { t } = useTranslation();
  const [openFAQ, setOpenFAQ] = useState(0);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = t("faq.questions", { returnObjects: true }); // Get questions as an array

  if (!Array.isArray(faqs)) {
    console.error("faqs is not an array:", faqs);
    return null; // or some fallback UI
  }

  return (
    <section
      id="faq"
      className="px-4 sm:px-7 md:px-14 xl:px-28 bg-[#F9FAFB] w-full pt-20 pb-28"
    >
      <div className="text-center">
        <h1 className="text-black_100 text-[40px] leading-[42px] tracking-[-2%] font-bold">
          {t("faq.title")}
        </h1>
        <p className="text-gray_600 text-base leading-[24px] font-normal max-w-[632px] mx-auto mt-4">
          {t("faq.description")}
        </p>
      </div>

      <div className="border-b border-black_100 border-opacity-20 pb-6 mt-[60px] max-w-[772px] mx-auto flex flex-col gap-5">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white py-6 px-5 md:px-[30px]">
            <div className="w-full flex items-center justify-between">
              <h1 className="text-black_100 font-semibold text-lg sm:text-[22px] sm:leading-[46px]">
                {faq.question}
              </h1>
              <button onClick={() => toggleFAQ(index)} className="">
                <img
                  src={
                    openFAQ === index
                      ? "/assets/arrow-up.svg"
                      : "/assets/arrow-down.svg"
                  }
                  alt="Toggle Arrow"
                  className="min-w-[19.5px] min-h-[9px]"
                />
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openFAQ === index
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="mt-[14px] text-[#374151] text-base sm:text-lg leading-[27px] font-normal">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestion;
