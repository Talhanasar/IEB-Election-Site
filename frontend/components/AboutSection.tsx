import Image from "next/image"
import { Check } from "lucide-react"
import { candidateData } from "@/data/candidateData"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[3/4] relative">
                <Image
                  src={candidateData.images.about}
                  alt={candidateData.firstName}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-green-800 text-white rounded-2xl px-5 py-4 sm:px-6 sm:py-6 shadow-2xl w-[220px] sm:w-48">
              <span className="text-4xl sm:text-5xl font-bold font-serif">{candidateData.experience.years}</span>
              <span className="text-xs sm:text-sm font-medium opacity-90 block mt-2">{candidateData.experience.label}</span>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">Meet the candidate</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-green-900 leading-tight">
                {candidateData.bio.aboutTitle.split(", ").map((part, idx) => (
                  <span key={idx} className="block">
                    {part}
                  </span>
                ))}
              </h2>
            </div>

            <div className="space-y-5 text-base sm:text-lg text-stone-600 leading-relaxed">
              {candidateData.bio.long.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 pt-4 border-t border-stone-200">
              <ul className="space-y-3">
                {candidateData.skills.left.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-stone-700">
                    <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span className="font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {candidateData.skills.right.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-stone-700">
                    <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span className="font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

