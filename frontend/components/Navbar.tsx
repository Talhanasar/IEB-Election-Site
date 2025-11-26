"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"
import { useLanguageAndData } from "@/hooks/useLanguageAndData"

export default function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const { t ,data } = useLanguageAndData()


  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const isActive = (href: string) => {
    if (href.startsWith("/")) {
      return pathname === href
    }
    return false
  }

  const navLinks = [
    { href: "/", mbHref:"/", label: t.navbar.home },
    { href: "/#manifesto", mbHref:"/#manifesto", label: t.navbar.manifesto },
    { href: "/gallery", mbHref:"/gallery", label: t.navbar.gallery },
    { href: "/#contact", mbHref:"/#contactmb", label: t.navbar.contact }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 overflow-hidden rounded-full ring-2 ring-green-800/20 group-hover:ring-green-800/40 transition-all group-hover:scale-105 shadow-sm">
            <Image
              src={data.images.logo}
              alt={data.firstName}
              fill
              sizes="(max-width: 640px) 56px, 64px"
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-serif text-sm lg:text-xl sm:text-lg font-bold tracking-tight text-green-900 leading-tight truncate">
              {data.navName.toUpperCase()}<span className="text-red-600">.</span>
            </span>
            <span className="text-[10px] sm:text-xs text-stone-500 font-medium uppercase tracking-wider">
              {data.tagline}
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
            onClick={() => setLanguage(language === "en" ? "bn" : "en")}
            variant="ghost"
            className="text-sm font-semibold text-stone-700 hover:text-green-800 px-3 rounded-full"
          >
            {language === "en" ? "বাংলা" : "English"}
          </Button>
          <Button
            asChild
            variant="outline"
            className="hidden md:flex border-green-700 text-green-800 hover:bg-green-50 rounded-full bg-transparent"
          >
            <Link href="/form/volunteer">{t.navbar.volunteer}</Link>
          </Button>
          <Button
            asChild
            className="hidden md:flex bg-green-800 hover:bg-green-900 text-white rounded-full px-6 shadow-lg shadow-green-900/20"
          >
            <Link href="#donate">{t.navbar.donate}</Link>
          </Button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors relative z-50 ${
              isMobileMenuOpen
                ? "text-white bg-green-900/70"
                : "text-stone-700 hover:text-green-800 hover:bg-green-50"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 h-screen bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMobileMenu}
          />

          {/* Mobile Menu */}
          <div className="fixed top-20 left-0 right-0 bg-white border-b border-stone-200 shadow-xl z-50 md:hidden animate-in slide-in-from-top duration-300">
            <nav className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => {
                  const active = isActive(link.href)
                  return (
                    <Link
                      key={link.mbHref}
                      href={link.mbHref}
                      onClick={closeMobileMenu}
                      className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        active
                          ? "text-green-900 bg-green-50 font-semibold"
                          : "text-stone-700 hover:text-green-800 hover:bg-green-50/50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                })}

                {/* Mobile Menu Buttons */}
                <div className="flex flex-col gap-3 pt-4 border-t border-stone-200">
                  <Button
                    onClick={() => {
                      setLanguage(language === "en" ? "bn" : "en")
                      closeMobileMenu()
                    }}
                    variant="outline"
                    className="w-full border-stone-300 text-stone-700 hover:bg-stone-50 rounded-full"
                  >
                    {language === "en" ? "বাংলায় পড়ুন" : "Read in English"}
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-green-700 text-green-800 hover:bg-green-50 rounded-full bg-transparent"
                    onClick={closeMobileMenu}
                  >
                    <Link href="/form/volunteer">Become a Volunteer</Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-green-800 hover:bg-green-900 text-white rounded-full shadow-lg shadow-green-900/20"
                    onClick={closeMobileMenu}
                  >
                    <Link href="#donate">Donate</Link>
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}

