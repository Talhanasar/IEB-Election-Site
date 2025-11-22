import Image from "next/image"
import { Check } from "lucide-react"
import { candidateData } from "@/data/candidateData"

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="aspect-3/4 relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={candidateData.images.about}
                alt={candidateData.firstName}
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-green-800 rounded-2xl p-6 flex flex-col justify-center items-start text-white shadow-lg md:flex">
              <span className="text-5xl font-bold font-serif">{candidateData.experience.years}</span>
              <span className="text-sm font-medium opacity-90 mt-2">{candidateData.experience.label}</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-green-900">
              {candidateData.bio.aboutTitle.split(', ').map((part, i) => (
                <span key={i}>
                  {part}
                  {i === 0 && <br />}
                </span>
              ))}
            </h2>

            <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
              {candidateData.bio.long.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-stone-200">
              <ul className="space-y-3">
                {candidateData.skills.left.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-700">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {candidateData.skills.right.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-700">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="font-medium">{item}</span>
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

