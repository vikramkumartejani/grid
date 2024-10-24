"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageDropdown from "./LanguageDropdown";

const Header = () => {
  const { t } = useTranslation(); // Get the translation function
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en"); // Default language

  useEffect(() => {
    const storedLang = localStorage.getItem("selectedLanguage"); // Check local storage for language
    const langFromPath = window.location.pathname.split("/")[1]; // Get current language from URL
    const finalLang = storedLang || (langFromPath === "de" ? "de" : "en"); // Fallback to "en"
    setCurrentLang(finalLang); // Set the current language
  }, []);

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault(); // Prevent default anchor click behavior

    // Find the target element
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the target element
    }
  };

  return (
    <header className="px-4 sm:px-7 md:px-14 xl:px-28 max-w-[1440px] w-full mx-auto py-5 sticky top-0 bg-white flex items-center justify-between z-[9999]">
      <img
        src="/assets/lease-grid-logo.svg"
        alt={t("header.logo.alt")}
        className="w-[225px] md:w-[265px]"
      />

      {/* Desktop Menu */}
      <div className="lg:flex hidden items-center gap-6">
        <ul className="flex items-center gap-6">
          <li>
            <a
              href={`/${currentLang}#home`}
              className="text-black_100 font-medium leading-[19.5px]"
              onClick={(e) => handleSmoothScroll(e, "home")}
            >
              {t("header.menu.home")}
            </a>
          </li>
          <li>
            <a
              href={`/${currentLang}#keyfeatures`}
              className="text-black_100 font-medium leading-[19.5px]"
              onClick={(e) => handleSmoothScroll(e, "keyfeatures")}
            >
              {t("header.menu.keyFeatures")}
            </a>
          </li>
          <li>
            <a
              href={`/${currentLang}#whychooseus`}
              className="text-black_100 font-medium leading-[19.5px]"
              onClick={(e) => handleSmoothScroll(e, "whychooseus")}
            >
              {t("header.menu.whyChooseUs")}
            </a>
          </li>
          <li>
            <a
              href={`/${currentLang}#faq`}
              className="text-black_100 font-medium leading-[19.5px]"
              onClick={(e) => handleSmoothScroll(e, "faq")}
            >
              {t("header.menu.faq")}
            </a>
          </li>
          <li>
            <LanguageDropdown />
          </li>
        </ul>
        <button className="border border-blueberry_blue text-base text-blueberry_blue font-bold px-5 h-[46px] rounded-[150px]">
          {t("header.menu.contactUs")}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden flex items-center"
      >
        <img
          src={menuOpen ? "/assets/close-menu.svg" : "/assets/menu.svg"}
          alt={t(
            menuOpen ? "header.mobileMenu.close" : "header.mobileMenu.open"
          )}
          width={30}
          height={30}
        />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute left-0 z-50 top-full w-full bg-white shadow-md py-5">
          <ul className="flex flex-col items-center gap-4">
            <li>
              <a
                href={`/${currentLang}#home`}
                className="text-black_100 font-medium leading-[19.5px]"
                onClick={(e) => handleSmoothScroll(e, "home")}
              >
                {t("header.menu.home")}
              </a>
            </li>
            <li>
              <a
                href={`/${currentLang}#keyfeatures`}
                className="text-black_100 font-medium leading-[19.5px]"
                onClick={(e) => handleSmoothScroll(e, "keyfeatures")}
              >
                {t("header.menu.keyFeatures")}
              </a>
            </li>
            <li>
              <a
                href={`/${currentLang}#whychooseus`}
                className="text-black_100 font-medium leading-[19.5px]"
                onClick={(e) => handleSmoothScroll(e, "whychooseus")}
              >
                {t("header.menu.whyChooseUs")}
              </a>
            </li>
            <li>
              <a
                href={`/${currentLang}#faq`}
                className="text-black_100 font-medium leading-[19.5px]"
                onClick={(e) => handleSmoothScroll(e, "faq")}
              >
                {t("header.menu.faq")}
              </a>
            </li>
            <li>
              <LanguageDropdown />
            </li>
            <li>
              <button className="border border-blueberry_blue text-base text-blueberry_blue font-bold px-5 h-[46px] rounded-[150px]">
                {t("header.menu.contactUs")}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
