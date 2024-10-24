"use client";
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import KeyFeatures from "../components/KeyFeatures";
import Testimonials from "../components/Testimonials";
import WhyChoose from "../components/WhyChoose";
import FrequentlyAskedQuestion from "../components/FrequentlyAskedQuestion";
import ChoosePlan from "../components/ChoosePlan";

import { useTranslation } from "react-i18next";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";

const LanguagePage = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Function to get language from the URL or localStorage
    const getLanguage = () => {
      if (typeof window !== "undefined") {
        const pathLang = window.location.pathname.split("/")[1]; // Get language from URL
        const storedLang = localStorage.getItem("selectedLanguage"); // Check local storage for language
        return pathLang === "de" ? "de" : storedLang || "en"; // Default to 'en'
      }
      return "en"; // Default to 'en' on server-side
    };

    const selectedLang = getLanguage();

    // Change language based on the URL or localStorage
    i18n.changeLanguage(selectedLang);
    localStorage.setItem("selectedLanguage", selectedLang);
  }, [i18n]);

  return (
    <I18nextProvider i18n={i18n}>
      <Header />
      <Hero />
      <KeyFeatures />
      <Testimonials />
      <ChoosePlan />
      <WhyChoose />
      <FrequentlyAskedQuestion />
      <Footer />
    </I18nextProvider>
  );
};

// Static paths for languages
export const getStaticPaths = async () => {
  return {
    paths: [{ params: { lang: "en" } }, { params: { lang: "de" } }],
    fallback: false, // Return a 404 page for any other paths
  };
};

export default LanguagePage;
