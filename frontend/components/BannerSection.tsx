import Image from "next/image"
import { candidateData } from "@/data/candidateData"

export default function BannerSection() {
  return (
    <section className="w-full">
      <div className="relative h-[250px] md:h-[450px] w-full">
        <Image
          src={candidateData.images.banner}
          alt={`Campaign Banner - ${candidateData.campaignSlogan}`}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  )
}

