import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = t("testimonials.list", { returnObjects: true });

  // Check if testimonials is an array
  if (!Array.isArray(testimonials)) {
    console.error("Testimonials is not an array:", testimonials);
    return null; // or some fallback UI
  }

  return (
    <section className="bg-white py-[80px] px-[20px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <h2 className="text-[40px] text-black_100 leading-[42.8px] font-[700] tracking-[-2%]">
            {t("testimonials.title")}
          </h2>
          <p className="mt-[20px] text-[16px] leading-[24px] text-gray_600 max-w-[632px] mx-auto">
            {t("testimonials.description")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[60px] max-w-[1120px] mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] overflow-hidden px-[30px] py-[40px] flex flex-col gap-[28px]"
              style={{
                boxShadow:
                  "0px 2px 4px -2px #0000000D, 0px 4px 6px -1px #0000001A",
              }}
            >
              <div className="flex items-center justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <MdOutlineStar size={30} key={i} className="text-[#F8C23A]" />
                ))}
              </div>
              <p className="text-[#27262B] text-[16px] font-[400] text-center">
                {testimonial.text}
              </p>
              <div className="flex items-center justify-center">
                <img
                  className="h-[64px] w-[64px] object-cover rounded-full"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-[14px]">
                  <p className="text-[18px] font-[700] leading-[28px] text-[#27262B]">
                    {testimonial.name}
                  </p>
                  <p className="text-[16px] font-[500] leading-[26px] text-[#27262B]">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
