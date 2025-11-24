import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { candidateData } from "@/data/candidateData";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-linear-to-br from-stone-50 via-white to-green-50/30 overflow-hidden py-10">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-15%] left-[-10%] w-[45%] h-[45%] bg-green-200/25 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[45%] h-[45%] bg-red-200/15 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse sm:flex-row gap-10 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="flex-1 space-y-6">
            <div className="relative w-fit">
              <Image
                src={candidateData.images.bnpPoster}
                alt="BNP Campaign Poster"
                width={360}
                height={120}
                className="object-contain w-full h-auto max-w-[320px] sm:max-w-[360px]"
                priority
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-tight tracking-tight text-stone-900">
              {candidateData.firstName} {candidateData.lastName}
              <span className="text-red-600">.</span>
            </h1>

            <p className="text-lg md:text-xl text-stone-600 max-w-2xl leading-relaxed">
              {candidateData.bio.short}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-linear-to-r from-green-800 to-green-900 hover:from-green-900 hover:to-green-950 text-white h-14 px-8 text-lg rounded-full shadow-xl shadow-green-900/20 hover:shadow-green-900/30 transition-all transform hover:scale-105 w-full sm:w-auto"
              >
                <Link
                  href="#volunteer"
                  className="flex items-center justify-center"
                >
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
                <Link
                  href="#manifesto"
                  className="flex items-center justify-center"
                >
                  Read Manifesto
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 w-full">
            <div className="relative w-full max-w-md mx-auto select-none">
              <div className="absolute -top-8 -right-10 w-28 h-28 bg-green-800/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-red-600/10 rounded-full blur-2xl" />

              <div className="relative z-10 flex items-center justify-center">
                <Image
                  src={candidateData.images.hero}
                  alt={candidateData.firstName}
                  width={520}
                  height={780}
                  className="object-contain w-full h-auto drop-shadow-2xl"
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 520px"
                />
              </div>
            </div>

            <div className="mt-8 flex w-full items-center justify-center">
              <div className="flex items-center w-fit gap-3 bg-white/95 backdrop-blur-sm px-4 sm:px-10 py-3 rounded-full shadow-lg border border-green-200 sm:w-auto max-w-md">
                <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse shrink-0" />
                <span className="text-sm sm:text-base font-semibold text-green-900 uppercase tracking-wider text-center">
                  {candidateData.partySlogan}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
