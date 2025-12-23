"use client"

import { Button } from "@/components/ui/button"
import { useLanguageAndData } from "@/hooks/useLanguageAndData";
import { ArrowRight, Users, CheckCircle2, Images } from "lucide-react"
import Link from "next/link"

const iconMap = {
  Users,
  CheckCircle2
}

export default function ManifestoSection() {
  const {t,data} = useLanguageAndData();
  const candidateData = data;

  return (
    <section id="manifesto" className="py-12 sm:py-16 lg:py-24 bg-green-900 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end items-start mb-8 sm:mb-12 lg:mb-16 gap-4 sm:gap-6">
          <div className="max-w-2xl w-full">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-3 sm:mb-4 lg:mb-6">{candidateData.manifesto.title}</h2>
            <p className="text-base sm:text-lg text-green-100/80">
              {candidateData.manifesto.description}
            </p>
          </div>
          <Button variant="link" className="text-white text-base sm:text-lg p-0 h-auto group hover:no-underline whitespace-nowrap">
            View Full Policy <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
          {candidateData.manifesto.items.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || CheckCircle2
            return (
              <div
                key={i}
                className="bg-green-800/50 backdrop-blur-sm border border-green-700 p-5 sm:p-6 lg:p-8 rounded-xl hover:bg-green-800 transition-colors group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-700 rounded-lg flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 group-hover:bg-white group-hover:text-green-900 transition-colors">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 font-serif">{item.title}</h3>
                <p className="text-sm sm:text-base text-green-100 leading-relaxed opacity-80">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

