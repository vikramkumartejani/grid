"use client"; // Ensure this file is treated as a client component

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Initialize i18next
i18n
  .use(HttpBackend) // Load translations from your locales directory
  .use(LanguageDetector) // Automatically detect user language
  .use(initReactI18next) // Bind i18n to React
  .init({
    fallbackLng: "en", // Default language
    debug: process.env.NODE_ENV === "development", // Enable debug only in development

    // Interpolation settings
    interpolation: {
      escapeValue: false, // React already does escaping
    },

    // Backend settings for loading translations
    backend: {
      // Path to the translation files
      loadPath: "/locales/{{lng}}.json", // Adjust for Next.js static files
    },

    // Set the initial language
    lng:
      typeof window !== "undefined"
        ? localStorage.getItem("selectedLanguage") || "en" // Default to "en" if not set
        : "en",

    // Optional: Define the namespaces you want to use
    // defaultNS: "translation", // Uncomment if using namespaces

    // Additional settings can go here
  });

export default i18n;
