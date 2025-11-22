import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Check,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Youtube,
  Users,
  MessageSquare,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"

export default function CandidatePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-900 selection:bg-green-100 selection:text-green-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-stone-200/50 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center text-white font-serif font-bold text-lg group-hover:bg-green-900 transition-colors">
              H
            </div>
            <span className="font-serif text-2xl font-bold tracking-tighter text-green-900">
              HUMAM QUADER<span className="text-red-600">.</span>
            </span>
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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center bg-stone-50 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-green-200/20 rounded-full blur-3xl" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-red-200/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 order-2 lg:order-1 pt-10 lg:pt-0">
                <div className="flex flex-col items-start gap-4">
                  {/* Added the electoral symbol (marka) */}
                  <div className="relative w-24 h-24 md:w-32 md:h-32 mb-2 grayscale opacity-90">
                    <Image
                      src="/marka.jpg"
                      alt="Sheaf of Paddy (Dhaner Sheesh) Symbol"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100/50 text-green-800 text-xs font-bold uppercase tracking-wider border border-green-200">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                    Vote for Change
                  </div>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[0.95] tracking-tight text-stone-900">
                  A New Vision for <br />
                  <span className="text-green-800">Bangladesh.</span>
                </h1>

                <p className="text-xl text-stone-600 max-w-lg leading-relaxed">
                  Standing together for democracy, justice, and a prosperous future. Join Humam Quader Chowdhury in
                  building a better tomorrow for our community.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-green-800 hover:bg-green-900 text-white h-14 px-8 text-lg rounded-full shadow-xl shadow-green-900/10"
                  >
                    Join the Movement
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-stone-300 text-stone-700 hover:bg-stone-100 h-14 px-8 text-lg bg-transparent rounded-full"
                  >
                    Read Manifesto
                  </Button>
                </div>
              </div>

              <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end h-[600px] lg:h-[800px]">
                <div className="relative w-full h-full select-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-transparent z-10 lg:via-stone-50/10" />
                  <Image
                    src="/humam_1.jpg"
                    alt="Humam Quader Chowdhury"
                    fill
                    className="object-cover object-top lg:object-center rounded-2xl lg:rounded-none shadow-2xl lg:shadow-none"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section id="media" className="py-24 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-900">A Message from Humam</h2>
                <p className="text-stone-500 text-lg max-w-2xl mx-auto">
                  Listen to the vision for our constituency directly from your candidate.
                </p>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-stone-200 bg-stone-900">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/s8JrjnVVMQw"
                  title="Humam Quader Chowdhury Intro Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Manifesto Section */}
        <section id="manifesto" className="py-24 bg-green-900 text-white relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
          ></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Manifesto</h2>
                <p className="text-lg text-green-100/80">
                  Key pillars that will guide our policy and transformative action for the constituency, ensuring
                  justice and development for all.
                </p>
              </div>
              <Button variant="link" className="text-white text-lg p-0 h-auto group hover:no-underline">
                View Full Policy <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Democratic Reform",
                  desc: "Restoring the power of the vote and ensuring free, fair, and transparent elections for all citizens.",
                  icon: Users,
                },
                {
                  title: "Economic Justice",
                  desc: "Creating sustainable jobs, supporting local businesses, and fighting inflation to protect family livelihoods.",
                  icon: CheckCircle2,
                },
                {
                  title: "Social Harmony",
                  desc: "Bridging divides and ensuring equal rights, safety, and dignity for every member of our diverse society.",
                  icon: CheckCircle2,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-green-800/50 backdrop-blur-sm border border-green-700 p-8 rounded-xl hover:bg-green-800 transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-green-900 transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-serif">{item.title}</h3>
                  <p className="text-green-100 leading-relaxed opacity-80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-stone-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 relative order-2 lg:order-1">
                <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/humam_2.jpg"
                    alt="Humam Quader Chowdhury Candid"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-green-800 rounded-2xl p-6 flex flex-col justify-center items-start text-white shadow-lg hidden md:flex">
                  <span className="text-5xl font-bold font-serif">15+</span>
                  <span className="text-sm font-medium opacity-90 mt-2">Years of Service</span>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-green-900">
                  Rooted in Community, <br />
                  Driven by Justice.
                </h2>

                <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                  <p>
                    Humam Quader Chowdhury represents a new generation of leadership in Bangladesh. With a deep
                    commitment to democratic values and social justice, he has dedicated his life to serving the people
                    of Chattogram.
                  </p>
                  <p>
                    His vision is simple yet powerful: a Bangladesh where every citizen's voice is heard, where the rule
                    of law prevails, and where economic opportunity is accessible to all, not just the privileged few.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-stone-200">
                  <ul className="space-y-3">
                    {["Advocate for Human Rights", "Youth Empowerment", "Policy Reform Specialist"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-stone-700">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-3">
                    {["Community Development", "Global Perspective", "Economic Strategy"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-stone-700">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Banner Section */}
        <section className="w-full">
          <div className="relative h-[250px] md:h-[450px] w-full">
            <Image
              src="/cover_humam.jpg"
              alt="Campaign Banner - Your Vote is the Voice of Democracy"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Get Involved Section */}
        <section id="volunteer" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl font-serif font-bold text-green-900">Get Involved</h2>
              <p className="text-stone-600 text-lg">
                There are many ways to support the movement. Choose the one that suits you best.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Volunteer Card */}
              <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-800 group-hover:scale-110 transition-transform">
                  <Users className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-stone-900 mb-3">Become a Volunteer</h3>
                <p className="text-stone-600 mb-8 flex-grow leading-relaxed">
                  Join our dedicated team on the ground. Help organize events, spread the message, and drive change in
                  your local area.
                </p>
                <Button size="lg" className="w-full bg-green-800 hover:bg-green-900 text-white h-12 rounded-full">
                  Join the Team
                </Button>
              </div>

              {/* Contact Card */}
              <div
                id="contact"
                className="bg-stone-50 rounded-2xl p-8 border border-stone-200 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 text-red-800 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-stone-900 mb-3">Contact Humam</h3>
                <p className="text-stone-600 mb-8 flex-grow leading-relaxed">
                  Have a question, concern, or suggestion? Reach out directly to Humam's office. We want to hear from
                  you.
                </p>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-stone-300 hover:bg-white h-12 rounded-full text-stone-700 bg-transparent"
                >
                  Send a Message
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter / Footer CTA */}
        <section className="py-24 bg-stone-900 text-stone-400 border-t border-stone-800">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-4 gap-12">
              <div className="space-y-6 lg:col-span-2">
                <Link href="/" className="text-3xl font-serif font-bold text-white flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center text-white text-sm">
                    H
                  </div>
                  HUMAM QUADER CHOWDHURY<span className="text-red-600">.</span>
                </Link>
                <p className="max-w-md text-stone-400 leading-relaxed">
                  Political office of Humam Quader Chowdhury. Committed to serving the people and upholding the values
                  of the Bangladesh Nationalist Party.
                </p>
                <div className="flex gap-4">
                  {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-green-800 hover:text-white transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-bold tracking-wider uppercase text-sm">Contact</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-green-700 shrink-0" />
                    <span>
                      Chattogram-7 Constituency Office,
                      <br />
                      Chattogram, Bangladesh
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-green-700 shrink-0" />
                    <span>+880 1711 000000</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-green-700 shrink-0" />
                    <span>office@hummamqc.com</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-bold tracking-wider uppercase text-sm">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#about" className="hover:text-green-500 transition-colors">
                      About Humam
                    </Link>
                  </li>
                  <li>
                    <Link href="#manifesto" className="hover:text-green-500 transition-colors">
                      Manifesto
                    </Link>
                  </li>
                  <li>
                    <Link href="#volunteer" className="hover:text-green-500 transition-colors">
                      Volunteer
                    </Link>
                  </li>
                  <li>
                    <Link href="#donate" className="hover:text-green-500 transition-colors">
                      Donate
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-stone-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p>© 2025 Humam Quader Chowdhury. All rights reserved.</p>
              <div className="flex gap-8">
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}