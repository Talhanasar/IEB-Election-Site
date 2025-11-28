"use client"

import HeroSection from "@/components/HeroSection"
import VideoSection from "@/components/VideoSection"
import CalendarSection from "@/components/CalendarSection"
import ManifestoSection from "@/components/ManifestoSection"
import AboutSection from "@/components/AboutSection"
import BannerSection from "@/components/BannerSection"
import GetInvolvedSection from "@/components/GetInvolvedSection"
import PollSection from "@/components/PollSection"

export default function CandidatePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ManifestoSection />
      <VideoSection />
      <CalendarSection />
      <GetInvolvedSection />
      <PollSection />
      <BannerSection />
    </>
  )
}
