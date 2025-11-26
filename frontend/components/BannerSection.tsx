"use client"

import Image from "next/image"
import { useLanguageAndData } from "@/hooks/useLanguageAndData"

export default function BannerSection() {
  const { data } = useLanguageAndData()
  return (
    <section className="w-full">
      <div className="relative h-[250px] md:h-[450px] w-full">
        <Image
          src={data.images.banner}
          alt={`Campaign Banner - ${data.campaignSlogan}`}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  )
}

