"use client"

import React, { useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Images } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguageAndData } from "@/hooks/useLanguageAndData"
import { sharedCalendar } from "@/data/candidateData"

export default function CalendarSection() {
  const { language: lang, t, data } = useLanguageAndData()

  const cd: any = data

  // Prefer an explicit preview field, otherwise use gallery.images if available
  const rawPreviews: any =
    cd.galleryPreview ?? (Array.isArray(cd.gallery) ? cd.gallery : cd.gallery?.images) ?? []

  // Normalize to array of items (strings or objects)
  const previews: any[] = Array.isArray(rawPreviews)
    ? rawPreviews
    : typeof rawPreviews === "object" && rawPreviews
      ? Object.values(rawPreviews)
      : []

  useEffect(() => {
    // debug — remove in production
    // eslint-disable-next-line no-console
    console.log("Gallery rawPreviews:", rawPreviews)
    // eslint-disable-next-line no-console
    console.log("Gallery normalized previews:", previews)
  }, [rawPreviews])

  const shown = previews.slice(0, 4)

  const calendarEmbedUrl: string =
    cd.calendar?.embedUrl ?? sharedCalendar.embedUrl

  // Titles & text (prefer translations, otherwise fallback)
  const galleryTitle = t?.gallery?.title ?? "Campaign Gallery"
  const galleryDescription = t?.gallery?.description ?? "Explore selected photos and memorable moments from our campaign."
  const photosLabelTemplate = t?.gallery?.photos ?? "{count} photos"

  const upcomingTitle = t?.calendar?.title ?? "Upcoming Events"
  const upcomingDescription = t?.calendar?.description ?? "Stay updated with our upcoming campaign events and activities."
  const gmtText = lang === "en" ? "GMT+06" : "GMT+০৬"

  const photosLabel = photosLabelTemplate.replace("{count}", String(previews.length))

  return (
    <section id="media" className="py-24 bg-stone-50">
      <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* LEFT: gallery (phone: full width, tablet: 50%, laptop: 50%) */}
          <div>
            <div className="w-full bg-white rounded-2xl shadow-lg border border-stone-200 p-6 flex flex-col h-full">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-green-800 text-white shadow-sm shrink-0">
                  <Images className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-3xl font-serif font-bold text-stone-900 leading-tight">
                    {galleryTitle}
                  </h2>
                  <p className="text-stone-600 mt-1 text-sm sm:text-base">
                    {galleryDescription}
                  </p>
                </div>
              </div>

              {/* Thumbnails: 2 columns, 2 rows (up to 4 images) */}
              <div className="mt-6 grid grid-cols-2 gap-3 flex-1">
                {shown.length === 0
                  ? [1, 2, 3, 4].map((n) => (
                      <div key={n} className="aspect-video rounded-md bg-stone-100" />
                    ))
                  : shown.map((img: any, idx: number) => {
                      const obj = img as any
                      const src = typeof img === "string" ? img : obj?.src ?? obj?.url ?? obj?.image ?? obj?.path ?? ""
                      const alt = typeof img === "string" ? `photo-${idx}` : obj?.alt ?? `photo-${idx}`

                      if (!src) {
                        return <div key={idx} className="aspect-video rounded-md bg-stone-100" />
                      }

                      // Use plain <img> so public/relative paths and remote URLs work without next.config changes
                      return (
                        <div key={idx} className="relative rounded-md overflow-hidden bg-stone-100">
                          <img
                            src={src}
                            alt={alt}
                            className="object-cover w-full h-full block"
                            onError={(e) => {
                              ;(e.currentTarget as HTMLImageElement).src = "/_missing_thumbnail.png"
                            }}
                          />
                        </div>
                      )
                    })}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-stone-500">{photosLabel}</span>
                <Button asChild className="bg-green-800 text-white hover:bg-green-900 h-10 px-4 rounded-full text-sm">
                  <Link href="/gallery" className="flex items-center gap-2">
                    {lang === "en" ? "View Gallery" : "গ্যালারি দেখুন"} <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* RIGHT: calendar (phone: full width, tablet: 50%, laptop: 50%) */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg border border-stone-200 overflow-hidden h-full flex flex-col">
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-6">
                  <h2 className="text-3xl sm:text-4xl md:text-3xl font-serif font-bold text-stone-900 leading-tight">
                    {upcomingTitle}
                  </h2>
                  <p className="text-stone-600 mt-1">{upcomingDescription}</p>
                </div>

                {/* Calendar Embed: fill remaining vertical space so both cards align visually */}
                <div className="rounded-lg overflow-hidden border border-stone-100 shadow-sm flex-1">
                  {/* Use relative container and absolute iframe to make it fill */}
                  <div className="relative w-full h-full" style={{ minHeight: 420 }}>
                    <iframe
                      src={calendarEmbedUrl}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: 0,
                        borderRadius: 8,
                        background: "#fff"
                      }}
                      frameBorder="0"
                      scrolling="no"
                      title="Campaign Calendar"
                    />
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-stone-100 bg-stone-50 text-xs text-stone-500">
                <div className="flex justify-between">
                  <span />
                  <span className="hidden sm:inline">{gmtText}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

