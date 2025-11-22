import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { candidateData } from "@/data/candidateData"

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-linear-to-br from-stone-50 via-white to-green-50/30 overflow-hidden">
      {/* Political pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-green-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-red-200/10 rounded-full blur-3xl" />
        {/* Additional political color accents */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-green-100/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1 pt-10 lg:pt-0">
            {/* Electoral symbol (marka) with enhanced design */}
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <div className="absolute inset-0 bg-linear-to-br from-green-100 to-green-50 rounded-full blur-xl opacity-50" />
              <Image
                src={candidateData.images.electoralSymbol}
                alt="Sheaf of Paddy (Dhaner Sheesh) Symbol"
                fill
                sizes="(max-width: 768px) 96px, 128px"
                className="object-contain drop-shadow-lg relative z-10"
              />
            </div>

            {/* Candidate Name - Elegant Typography */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-[1.1] tracking-tight text-stone-900">
              {candidateData.firstName} {candidateData.lastName}<span className="text-red-600">.</span>
            </h1>

            <p className="text-lg md:text-xl text-stone-600 max-w-lg leading-relaxed">
              Standing together for <span className="text-green-800 font-semibold">democracy</span>, <span className="text-green-800 font-semibold">justice</span>, and a <span className="text-green-800 font-semibold">prosperous future</span>. {candidateData.bio.short.split('.')[1]?.trim()}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-linear-to-r from-green-800 to-green-900 hover:from-green-900 hover:to-green-950 text-white h-14 px-8 text-lg rounded-full shadow-xl shadow-green-900/20 hover:shadow-green-900/30 transition-all transform hover:scale-105 w-full sm:w-auto"
              >
                <Link href="#volunteer" className="flex items-center justify-center">
                  Join the Movement
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-green-800/30 text-green-900 hover:bg-green-50 hover:border-green-800/50 h-14 px-8 text-lg bg-white/50 backdrop-blur-sm rounded-full font-semibold w-full sm:w-auto"
              >
                <Link href="#manifesto" className="flex items-center justify-center">
                  Read Manifesto
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end h-[750px]">
            <div className="relative w-full max-w-lg h-full select-none">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-green-800/10 rounded-full blur-2xl z-0" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-red-600/10 rounded-full blur-2xl z-0" />
              
              <div className="relative w-full h-full max-w-md mx-auto z-10 flex items-center justify-center">
                <Image
                  src={candidateData.images.hero}
                  alt={candidateData.firstName}
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-contain object-center drop-shadow-2xl"
                  priority
                />
              </div>
              
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-green-200">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                  <span className="text-sm font-bold text-green-900 uppercase tracking-wider">
                    {candidateData.partySlogan}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

