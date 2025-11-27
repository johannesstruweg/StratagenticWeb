import { createContext, useContext, useEffect, useState } from "react";
import { en } from "./en";
import { no } from "./no";

const LangContext = createContext({
  lang: en,
  code: "en",
  setLangCode: (c: "en" | "no") => {}
});

export function LanguageProvider({ children }) {
  const [langCode, setLangCode] = useState<"en" | "no">("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored === "en" || stored === "no") {
      setLangCode(stored);
      return;
    }

    if (window.location.hostname.endsWith("stratagentic.no")) {
      setLangCode("no");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", langCode);
  }, [langCode]);

  const lang = langCode === "no" ? no : en;

  return (
    <LangContext.Provider value={{ lang, code: langCode, setLangCode }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
