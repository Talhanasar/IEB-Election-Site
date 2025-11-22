import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { candidateData } from "@/data/candidateData"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 overflow-hidden rounded-full ring-2 ring-green-800/20 group-hover:ring-green-800/40 transition-all group-hover:scale-105 shadow-sm">
            <Image
              src={candidateData.images.logo}
              alt={candidateData.firstName}
              fill
              sizes="(max-width: 640px) 56px, 64px"
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-serif text-xl font-bold tracking-tight text-green-900 leading-tight truncate">
              {candidateData.navName.toUpperCase()}<span className="text-red-600">.</span>
            </span>
            <span className="text-xs text-stone-500 font-medium uppercase tracking-wider">
              {candidateData.tagline}
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          <Link href="#about" className="hover:text-green-800 transition-colors">
            About
          </Link>
          <Link href="#manifesto" className="hover:text-green-800 transition-colors">
            Manifesto
          </Link>
          <Link href="#media" className="hover:text-green-800 transition-colors">
            Media
          </Link>
          <Link href="#contact" className="hover:text-green-800 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            asChild
            variant="outline"
            className="hidden sm:flex border-green-700 text-green-800 hover:bg-green-50 rounded-full bg-transparent"
          >
            <Link href="#volunteer">Become a Volunteer</Link>
          </Button>
          <Button
            asChild
            className="bg-green-800 hover:bg-green-900 text-white rounded-full px-6 shadow-lg shadow-green-900/20"
          >
            <Link href="#donate">Donate</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

