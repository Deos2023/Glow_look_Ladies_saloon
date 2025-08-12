

"use client"
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronsDown } from 'react-feather';
import { FaCut, FaSpa, FaGem, FaHandSparkles, FaArrowRight, FaPhone, FaMapPin } from "react-icons/fa";
import { GiSparkles, GiHandBag, GiMailbox } from "react-icons/gi";
import { MdFace } from "react-icons/md";

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const whatsappMessage = `Hi Glow Look,\nI'm interested in your services.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/7044758886?text=${encodedMessage}`, '_blank')
  }

  const services = [
  {
    title: "Hair Care",
    description: "Professional hair cutting, styling, coloring, and treatments for all hair types.",
    icon: <FaCut className="text-pink-600" size={24} />
  },
  {
    title: "Skin Care",
    description: "Facials, cleanups, bleaching, and advanced skin treatments for radiant skin.",
    icon: <MdFace className="text-pink-600" size={24} />
  },
  {
    title: "Bridal Makeup",
    description: "Complete bridal packages with trial sessions for your special day.",
    icon: <FaGem className="text-pink-600" size={24} />
  },
  {
    title: "Waxing & Threading",
    description: "Hair removal services using premium products for smooth skin.",
    icon: <GiSparkles className="text-pink-600" size={24} />
  },
  {
    title: "Manicure & Pedicure",
    description: "Nail care services including polish, extensions, and nail art.",
    icon: <FaHandSparkles className="text-pink-600" size={24} />
  },
  {
    title: "Spa Treatments",
    description: "Relaxing body massages, aromatherapy, and detox treatments.",
    icon: <FaSpa className="text-pink-600" size={24} />
  }
];
const galleryImages = [
  {
    src: "/img/img (1).jpeg",
    alt: "Professional hair styling at Glow Look",
    category: "Hair Services",
    description: "Our expert stylist creating a beautiful blowout"
  },
  {
    src: "/img/img (2).jpeg",
    alt: "Our luxurious salon interior",
    category: "Bridal Services",
    description: "Complete bridal makeup for your special day"
  },
  {
    src: "/img/img (3).jpeg",
    alt: "Luxury facial treatment",
    category: "Skin Care",
    description: "Rejuvenating facial with premium products"
  },
  {
    src: "/img/img (4).jpeg",
    alt: "Relaxing spa environment",
    category: "Spa Treatments",
    description: "Pampering spa experience in our tranquil space"
  },
  {
    src: "/img/img (5).jpeg",
    alt: "Elegant hair Styling",
    category: "Nail Services",
    description: "Creative nail art for any occasion"
  },
  {
    src: "/img/img (6).jpeg",
    alt: "Professional  service",
    category: "Hair Removal",
    description: "Smooth results with our expert waxing"
  },
  {
    src: "/img/img (7).jpeg",
    alt: "Hair Treatment",
    category: "Salon",
    description: "Elegant and hygienic environment"
  }
];

  const features = [
    {
      title: "Expert Team",
      description: "Our professionals are highly trained and experienced in the latest beauty techniques."
    },
    {
      title: "Premium Products",
      description: "We use only top-quality, branded products that are safe for your skin and hair."
    },
    {
      title: "Hygienic Environment",
      description: "Maintaining the highest standards of cleanliness is our top priority."
    },
    {
      title: "Personalized Service",
      description: "Each treatment is customized to meet your individual needs and preferences."
    },
    {
      title: "Affordable Luxury",
      description: "We offer premium services at competitive prices to make luxury accessible."
    },
    {
      title: "Convenient Locations",
      description: "With two locations in Kolkata, we're easily accessible wherever you are."
    }
  ]

  return (
    <div className="font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-pink-500 rounded-full"></div>
              <span className="text-xl font-bold text-pink-600">Glow Look</span>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-pink-600 hover:text-pink-800 font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-pink-600 font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-pink-600 font-medium">Services</a>
              <a href="#why-us" className="text-gray-700 hover:text-pink-600 font-medium">Why Us</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 font-medium">Contact</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://wa.me/7044758886" 
                className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen bg-pink-50 overflow-hidden">
        <div className="absolute inset-0 bg-black/40  z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: "url('/img1.jpg')" }}
        ></div>
        
        <div className="relative z-10 h-full flex items-center max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Reveal Your <span className="text-pink-300">Natural</span> Beauty
            </h1>
            <p className="text-xl mb-8 text-pink-100">
              Experience luxury beauty treatments tailored just for you at Glow Look Ladies Saloon & Spa.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#services" 
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-medium flex items-center transition-all"
              >
                Our Services <FaArrowRight className="ml-2" size={18} />
              </a>
              <a 
                href="tel:7044758886" 
                className="border-2 border-white hover:bg-white hover:text-pink-600 text-white px-6 py-3 rounded-full font-medium transition-all"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <a href="#about" className="text-white">
            <ChevronsDown size={32} />
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="md:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-xl h-96">
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: "url('/img1.jpg')" }}
                ></div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-pink-600 mb-6">About Glow Look</h2>
              <p className="text-gray-700 mb-4">
                Welcome to Glow Look Ladies Saloon & Spa, where beauty meets relaxation. Our expert team is dedicated to providing you with the highest quality beauty treatments in a luxurious and comfortable environment.
              </p>
              <p className="text-gray-700 mb-4">
                Located at A/171 Survey Park (Santoshpur Jora Bridge) with our branch at Garfa Main Road, we've been serving Kolkata's beauty needs with passion and professionalism.
              </p>
              <p className="text-gray-700 mb-6">
                Our mission is to enhance your natural beauty and boost your confidence through our wide range of services tailored specifically for women.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-bold text-pink-600 mb-2">10+ Years</h3>
                  <p className="text-gray-600 text-sm">Of Experience</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-bold text-pink-600 mb-2">50+</h3>
                  <p className="text-gray-600 text-sm">Happy Clients Daily</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-pink-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-pink-600 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of beauty services to help you look and feel your best.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-pink-600 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-pink-600 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover what makes Glow Look the preferred choice for beauty and wellness.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-pink-50 p-8 rounded-xl"
              >
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-pink-600 text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-pink-600 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
{/* Gallery Section */}
<section id="gallery" className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl font-bold text-pink-600 mb-4">Our Gallery</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Witness the transformations and our beautiful salon space
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {galleryImages.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <img 
            src={image.src} 
            alt={image.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div>
              <span className="text-xs text-pink-300">{image.category}</span>
              <p className="text-white font-medium">{image.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    <div className="flex justify-center mt-12">
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
        href="https://instagram.com/glowlooksalon"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-medium transition-all"
      >
        View More on Instagram <FaArrowRight className="ml-2" size={18} />
      </motion.a>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-pink-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-12"
          >
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-pink-600 mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <FaPhone className="text-pink-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Call Us</h3>
                    <a href="tel:7044758886" className="text-gray-600 hover:text-pink-600">+91 7044758886</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <GiMailbox className="text-pink-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Email Us</h3>
                    <a href="mailto:Glowlookladiessaloon@gmail.com" className="text-gray-600 hover:text-pink-600">Glowlookladiessaloon@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <FaMapPin className="text-pink-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Locations</h3>
                    <p className="text-gray-600">A/171 Survey Park (Santoshpur Jora Bridge)</p>
                    <p className="text-gray-600">Branch: Shop Garfa Main Road, Kol-700075</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold text-pink-600 mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <p className="text-gray-700"><span className="font-medium">Monday - Sunday:</span> 11:00 AM - 8:30 PM</p>
                  {/* <p className="text-gray-700"><span className="font-medium">Sunday:</span> 10:00 AM - 6:00 PM</p> */}
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-pink-600 mb-6">Book An Appointment</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="service" className="block text-gray-700 mb-2">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Hair Care">Hair Care</option>
                      <option value="Skin Care">Skin Care</option>
                      <option value="Bridal Makeup">Bridal Makeup</option>
                      <option value="Waxing & Threading">Waxing & Threading</option>
                      <option value="Manicure & Pedicure">Manicure & Pedicure</option>
                      <option value="Spa Treatments">Spa Treatments</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Additional Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-full font-medium transition-all"
                  >
                    Send Message via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-pink-600 mb-8 text-center">Our Location</h2>
            <div className="rounded-xl overflow-hidden shadow-xl h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.123456789012!2d88.12345678901234!3d22.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDA3JzI0LjQiTiA4OMKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Glow Look</h3>
              <p className="mb-4">Your premier destination for beauty and wellness in Kolkata.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-pink-300">Facebook</a>
                <a href="#" className="hover:text-pink-300">Instagram</a>
                <a href="#" className="hover:text-pink-300">Twitter</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-pink-300">Home</a></li>
                <li><a href="#about" className="hover:text-pink-300">About</a></li>
                <li><a href="#services" className="hover:text-pink-300">Services</a></li>
                <li><a href="#why-us" className="hover:text-pink-300">Why Us</a></li>
                <li><a href="#contact" className="hover:text-pink-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <p className="mb-2">A/171 Survey Park (Santoshpur Jora Bridge)</p>
              <p className="mb-2">Branch: Shop Garfa Main Road, Kol-700075</p>
              <p className="mb-2">Phone: +91 7044758886</p>
              <p className="mb-2">Email: Glowlookladiessaloon@gmail.com</p>
            </div>
          </div>
          
          <div className="border-t border-pink-800 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Glow Look Ladies Saloon & Spa. All rights reserved. Website Developed & Maintained by Digital Exposure Online Services.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}