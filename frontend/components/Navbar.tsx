"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { candidateData } from "@/data/candidateData"

export default function Navbar() {
  const pathname = usePathname()
  const [activeHash, setActiveHash] = useState("")

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash)
    }

    // Set initial hash
    handleHashChange()

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange)
    window.addEventListener("scroll", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
      window.removeEventListener("scroll", handleHashChange)
    }
  }, [])

  const isActive = (href: string) => {
    if (href.startsWith("/")) {
      return pathname === href
    }
    if (href.startsWith("#")) {
      return activeHash === href || (href === "#about" && activeHash === "")
    }
    return false
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#manifesto", label: "Manifesto" },
    { href: "/gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" }
  ]

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

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-colors ${
                  active
                    ? "text-green-900 font-semibold"
                    : "text-stone-600 hover:text-green-800"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-800 rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            asChild
            variant="outline"
            className="hidden sm:flex border-green-700 text-green-800 hover:bg-green-50 rounded-full bg-transparent"
          >
            <Link href="/form/volunteer">Become a Volunteer</Link>
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

