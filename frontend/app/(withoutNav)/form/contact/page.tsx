"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, MessageSquare, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { candidateData } from "@/data/candidateData"

export default function ContactFormPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission - in production, this would send to your backend
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    
    // Redirect to success page with query parameters
    const params = new URLSearchParams({
      type: "contact",
      email: formData.email,
      subject: formData.subject || "general",
      name: formData.fullName
    })
    router.push(`/form/success?${params.toString()}`)
  }

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <Button
            asChild
            variant="ghost"
            className="mb-6 text-stone-600 hover:text-stone-900"
          >
            <Link href="/" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-100 text-green-900 mb-6">
              <MessageSquare className="w-5 h-5" />
              <span className="font-semibold">Contact Form</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
              Contact {candidateData.firstName} {candidateData.lastName}
            </h1>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Have a question, concern, or suggestion? We want to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Contact Information Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-serif font-bold text-stone-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-green-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Email</h3>
                    <a
                      href={`mailto:${candidateData.contact.email}`}
                      className="text-stone-600 hover:text-green-800 transition-colors text-sm break-all"
                    >
                      {candidateData.contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-green-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Phone</h3>
                    <a
                      href={`tel:${candidateData.contact.phone}`}
                      className="text-stone-600 hover:text-green-800 transition-colors text-sm"
                    >
                      {candidateData.contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-green-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Office</h3>
                    <p className="text-stone-600 text-sm">
                      {candidateData.contact.address.line1}<br />
                      {candidateData.contact.address.line2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-stone-700 mb-2">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-2">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-stone-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent outline-none transition-all"
                  placeholder="+880 1XXX XXXXXX"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-stone-700 mb-2">
                  Subject <span className="text-red-600">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Campaign Support</option>
                  <option value="event">Event Information</option>
                  <option value="policy">Policy Question</option>
                  <option value="media">Media Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-stone-700 mb-2">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={8}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Please share your thoughts, questions, or concerns..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-green-800 hover:bg-green-900 text-white h-14 text-lg rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                <Button
                  type="button"
                  asChild
                  variant="outline"
                  className="flex-1 border-stone-300 text-stone-700 hover:bg-stone-50 h-14 text-lg rounded-full"
                >
                  <Link href="/">Cancel</Link>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

