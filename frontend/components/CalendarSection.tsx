import { Calendar, MapPin, Clock } from "lucide-react"
import { candidateData } from "@/data/candidateData"

export default function CalendarSection() {
  return (
    <section id="calendar" className="py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-900 text-sm font-semibold mb-4">
              <Calendar className="w-4 h-4" />
              Campaign Calendar
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Stay updated with all our campaign events and activities.
            </p>
          </div>

          {/* Upcoming Events Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {candidateData.upcomingEvents?.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-md border border-stone-200 hover:shadow-lg transition-shadow p-6"
              >
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">{event.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-stone-600">
                    <Calendar className="w-5 h-5 text-green-800 shrink-0" />
                    <span className="text-sm md:text-base">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-600">
                    <Clock className="w-5 h-5 text-green-800 shrink-0" />
                    <span className="text-sm md:text-base">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-600">
                    <MapPin className="w-5 h-5 text-green-800 shrink-0" />
                    <span className="text-sm md:text-base">{event.location}</span>
                  </div>
                  <p className="text-stone-600 text-sm mt-4 pt-4 border-t border-stone-200">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Google Calendar Embed */}
          <div className="bg-white rounded-xl shadow-md border border-stone-200 overflow-hidden">
            <div className="p-6">
              <div className="relative w-full" style={{ paddingBottom: "75%" }}>
                <iframe
                  src={candidateData.calendar?.embedUrl || "https://calendar.google.com/calendar/embed?src=1fafa8ab28415db6a09b018be97495592b38dba0cf79e60af85612ddcfc83e27%40group.calendar.google.com&ctz=Asia%2FDhaka"}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none"
                  }}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  scrolling="no"
                  title="Campaign Calendar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

