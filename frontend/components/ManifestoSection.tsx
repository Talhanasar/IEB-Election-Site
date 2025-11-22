import { Button } from "@/components/ui/button"
import { ArrowRight, Users, CheckCircle2, Images } from "lucide-react"
import { candidateData } from "@/data/candidateData"
import Link from "next/link"

const iconMap = {
  Users,
  CheckCircle2
}

export default function ManifestoSection() {
  return (
    <section id="manifesto" className="py-24 bg-green-900 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{candidateData.manifesto.title}</h2>
            <p className="text-lg text-green-100/80">
              {candidateData.manifesto.description}
            </p>
          </div>
          <Button variant="link" className="text-white text-lg p-0 h-auto group hover:no-underline">
            View Full Policy <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {candidateData.manifesto.items.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || CheckCircle2
            return (
              <div
                key={i}
                className="bg-green-800/50 backdrop-blur-sm border border-green-700 p-8 rounded-xl hover:bg-green-800 transition-colors group"
              >
                <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-green-900 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-serif">{item.title}</h3>
                <p className="text-green-100 leading-relaxed opacity-80">{item.description}</p>
              </div>
            )
          })}
        </div>

        {/* Gallery Section */}
        <div className="mt-16 pt-16 border-t border-green-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-700 rounded-xl flex items-center justify-center">
                <Images className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">Campaign Gallery</h3>
                <p className="text-green-100/80">
                  Explore photos and moments from our campaign journey
                </p>
              </div>
            </div>
            <Button
              asChild
              className="bg-white text-green-900 hover:bg-green-50 h-14 px-8 text-lg rounded-full font-semibold"
            >
              <Link href="/gallery" className="flex items-center">
                View Gallery
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

