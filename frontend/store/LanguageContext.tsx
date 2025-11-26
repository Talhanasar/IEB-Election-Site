"use client"

import { createContext, useState, ReactNode } from "react"

type LanguageType = "en" | "bn"

interface LanguageContextType {
  language: LanguageType
  setLanguage: (lang: LanguageType) => void
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageType>("en")

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContext
