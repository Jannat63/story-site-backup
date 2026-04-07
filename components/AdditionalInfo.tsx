"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";
import ContentEN from "./ContentEN";
import ContentBN from "./ContentBN";

export default function AdditionalInfo() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "bn">("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang === "bn" || savedLang === "en") {
      setLang(savedLang);
    }
  }, []);

  // ✅ FAQ Schema Data
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I read Bangla stories online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can read all Bangla stories online directly without downloading.",
        },
      },
      {
        "@type": "Question",
        name: "Can I download Bangla story PDF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, every story includes a PDF download option for offline reading.",
        },
      },
      {
        "@type": "Question",
        name: "Are these stories free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all Bangla stories on this platform are completely free to read and download.",
        },
      },
    ],
  };

  return (
    <div className="mt-12 border-t pt-6">

      {/* SEO FAQ */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      {/* HEADER */}
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex justify-between items-center w-full text-left"
      >
        <h2 className="text-lg font-semibold">
          Additional Information
        </h2>
        <span className="text-gray-500">{open ? "−" : "+"}</span>
      </button>

      {/* ANIMATED CONTENT */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="mt-4 bg-gray-50 p-4 rounded-xl shadow-sm">

              {/* LANGUAGE TOGGLE */}
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => {
                    setLang("en");
                    localStorage.setItem("lang", "en");
                  }}
                  className={`px-3 py-1 rounded-full text-sm transition ${
                    lang === "en"
                      ? "bg-black text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  English
                </button>

                <button
                  onClick={() => {
                    setLang("bn");
                    localStorage.setItem("lang", "bn");
                  }}
                  className={`px-3 py-1 rounded-full text-sm transition ${
                    lang === "bn"
                      ? "bg-black text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  বাংলা
                </button>
              </div>

              {/* CONTENT */}
              <div itemScope itemType="https://schema.org/Article">
                <div itemProp="articleBody">
                  {lang === "en" ? <ContentEN /> : <ContentBN />}
                </div>
              </div>

              {/* OPTIONAL VISIBLE FAQ */}
              <div className="mt-6 space-y-3">
                <h3 className="font-semibold text-md">FAQs</h3>

                <div>
                  <p className="font-medium">
                    Can I read Bangla stories online?
                  </p>
                  <p className="text-sm text-gray-600">
                    Yes, you can read all stories online instantly.
                  </p>
                </div>

                <div>
                  <p className="font-medium">
                    Can I download PDF?
                  </p>
                  <p className="text-sm text-gray-600">
                    Yes, every story has a download option.
                  </p>
                </div>

                <div>
                  <p className="font-medium">
                    Are stories free?
                  </p>
                  <p className="text-sm text-gray-600">
                    Yes, completely free.
                  </p>
                </div>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}