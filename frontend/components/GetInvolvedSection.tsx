import { Button } from "@/components/ui/button"
import { Users, MessageSquare } from "lucide-react"
import Link from "next/link"
import { candidateData } from "@/data/candidateData"

export default function GetInvolvedSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div id="volunteer" className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-serif font-bold text-green-900">Get Involved</h2>
          <p className="text-stone-600 text-lg">
            There are many ways to support the movement. Choose the one that suits you best.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-800 group-hover:scale-110 transition-transform">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold font-serif text-stone-900 mb-3">Become a Volunteer</h3>
            <p className="text-stone-600 mb-8 grow leading-relaxed">
              Join our dedicated team on the ground. Help organize events, spread the message, and drive change in
              your local area.
            </p>
            <Button
              asChild
              size="lg"
              className="w-full bg-green-800 hover:bg-green-900 text-white h-12 rounded-full"
            >
              <Link href="/form/volunteer">Join the Team</Link>
            </Button>
          </div>

          <div
            id="contactmb"
            className="bg-stone-50 rounded-2xl p-8 border border-stone-200 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 text-red-800 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold font-serif text-stone-900 mb-3">Contact {candidateData.firstName}</h3>
            <p className="text-stone-600 mb-8 grow leading-relaxed">
              Have a question, concern, or suggestion? Reach out directly to {candidateData.firstName}'s office. We want to hear from
              you.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-stone-300 hover:bg-white h-12 rounded-full text-stone-700 bg-transparent"
            >
              <Link href="/form/contact">Send a Message</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

