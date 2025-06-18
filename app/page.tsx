"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CampusConnect() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const departments = [
    {
      name: "Computer Science",
      description: "Cutting-edge technology and programming courses",
      icon: "💻",
      students: 450,
    },
    {
      name: "Electronic Engineering",
      description: "Smart devices, embedded systems, and communication tech.",
      icon: " 📡",
      students: 380,
    },
    {
      name: " Electrical Engineering",
      description: "Power systems, electronics, and smart energy solutions.",
      icon: "⚡ ",
      students: 520,
    },
    {
      name: "IT",
      description: "Advanced computing, data systems, and digital solutions.",
      icon: "🖥️",
      students: 290,
    },
    {
      name: "Mining",
      description: "Modern mining techniques and earth resource management.",
      icon: "⛏️",
      students: 340,
    },
    {
      name: "civil Engineering",
      description: "Innovative infrastructure and sustainable construction practices.",
      icon: "🏗️",
      students: 180,
    },
  ]

  const faculty = [
    {
      name: "Dr. Amod Kumar Tiwari",
      department: "Computer Science",
      Designation: "Associate Professor and Head",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Anurag Sewak",
      department: "Computer Science",
      Designation: "Assistant Professor",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Mrs. Kalpana Singh",
      department: "Computer Science",
      Designation: "Assistant Professor",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Mr. Ashish Ranjan Mishra",
      department: "Computer Science",
      Designation: "Assistant Professor",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. mainejar Yadav",
      department: "Computer Science",
      Designation: "Assistant Professor",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Mr. Navnit Upadhyay",
      department: "Computer Science",
      Designation: "Guest faculty",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const events = [
    {
      title: "Annual Science Fair",
      date: "March 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Main Campus Hall",
      description: "Students showcase innovative projects and research",
    },
    {
      title: "Career Development Workshop",
      date: "May 22, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Business Center",
      description: "Professional development and networking opportunities",
    },
    {
      title: "Udbhav Cultural Festival",
      date: "August 5, 2025",
      time: "6:00 PM - 10:00 PM",
      location: "Campus Quad",
      description: "Celebrating diversity through music, food, and art",
    },
    {
      title: "Guest Lecture Series",
      date: "April 12, 2024",
      time: "3:00 PM - 4:30 PM",
      location: "Auditorium A",
      description: "Industry leaders share insights and experiences",
    },
  ]

  const testimonials = [
    {
      name: "Sachin Kumar Singh",
      program: "Computer Science '23",
      text: "The hands-on approach and supportive faculty helped me land my dream job at a top tech company. The education here truly prepares you for the real world.",
      rating: 5,
    },
    {
      name: "Amrita Singh",
      program: " Computer Science '22",
      text: "The networking opportunities and practical business experience I gained here were invaluable. I started my own company right after graduation!",
      rating: 5,
    },
    {
      name: "Ankita Chaudhary",
      program: "Computer Science '24",
      text: "The state-of-the-art labs and research opportunities exceeded my expectations. I'm now pursuing my PhD with confidence.",
      rating: 5,
    },
    {
      name: "Anushka",
      program: "Computer Science '21",
      text: "The comprehensive curriculum and clinical experience prepared me perfectly for medical school. I couldn't have asked for better preparation.",
      rating: 5,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600">Campus Connect</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("departments")}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Departments
                </button>
                <button
                  onClick={() => scrollToSection("faculty")}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Faculty
                </button>
                <button
                  onClick={() => scrollToSection("events")}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Events
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Testimonials
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-600 p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <button
                  onClick={() => scrollToSection("home")}
                  className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("departments")}
                  className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left"
                >
                  Departments
                </button>
                <button
                  onClick={() => scrollToSection("faculty")}
                  className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left"
                >
                  Faculty
                </button>
                <button
                  onClick={() => scrollToSection("events")}
                  className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left"
                >
                  Events
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left"
                >
                  Testimonials
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 z-10"></div>
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Campus Background"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Campus Connect
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Empowering minds, shaping futures. Join our community of learners, innovators, and leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Explore Programs
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg"
            >
              Schedule Visit
            </Button>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section id="departments" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Departments</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover world-class education across diverse fields of study
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{dept.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{dept.name}</h3>
                  <p className="text-gray-600 mb-4">{dept.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{dept.students} students</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section id="faculty" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Faculty</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn from distinguished educators and researchers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.department}</p>
                  <p className="text-gray-600 text-sm">{member.Designation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join us for exciting campus activities and learning opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                      <div className="space-y-1 mb-3">
                        <p className="text-sm text-gray-600 flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {event.date} • {event.time}
                        </p>
                        <p className="text-sm text-gray-600 flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {event.location}
                        </p>
                      </div>
                      <p className="text-gray-700">{event.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from our graduates about their transformative experiences
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</p>
                    <p className="text-blue-600">{testimonials[currentTestimonial].program}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Campus Connect</h3>
              <p className="text-gray-400">Empowering minds, shaping futures through excellence in education.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={() => scrollToSection("home")} className="hover:text-white transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("departments")} className="hover:text-white transition-colors">
                    Departments
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("faculty")} className="hover:text-white transition-colors">
                    Faculty
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("events")} className="hover:text-white transition-colors">
                    Events
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 University Ave</li>
                <li>Education City, EC 12345</li>
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@campusconnect.edu</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Campus Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
