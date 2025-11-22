import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import VideoSection from "@/components/VideoSection"
import CalendarSection from "@/components/CalendarSection"
import ManifestoSection from "@/components/ManifestoSection"
import AboutSection from "@/components/AboutSection"
import BannerSection from "@/components/BannerSection"
import GetInvolvedSection from "@/components/GetInvolvedSection"
import PollSection from "@/components/PollSection"
import Footer from "@/components/Footer"

export default function CandidatePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-900 selection:bg-green-100 selection:text-green-900">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <VideoSection />
        <CalendarSection />
        <ManifestoSection />
        <AboutSection />
        <BannerSection />
        <GetInvolvedSection />
        <PollSection />
        <Footer />
      </main>
    </div>
  )
}
