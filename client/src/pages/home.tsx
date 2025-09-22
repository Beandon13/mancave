import { useEffect, useState } from "react";
import BookingModal from "../components/BookingModal";
import barbershopImage from "../assets/barbershop-interior.jpg";
import barbershopMainImg from "../assets/barbershop-main.jpg";
import barbershopHero from "../assets/barbershop-hero.jpg";
import classicCutImg from "../assets/classic-cut.jpg";
import hotShaveImg from "../assets/hot-shave.jpg";
import fadeCutImg from "../assets/fade-cut.jpg";
import kidsCutImg from "../assets/kids-cut.jpg";
import beardTrimImg from "../assets/beard-trim.jpg";
import hairDesignImg from "../assets/hair-design.jpg";
import taperFadeImg from "../assets/taper-fade.jpg";
import premiumCutImg from "../assets/premium-cut.jpg";
import executiveStyleImg from "../assets/executive-style.jpg";
import edgeUpImg from "../assets/edge-up.jpg";
import modernFadeImg from "../assets/modern-fade.jpg";
import textureCutImg from "../assets/texture-cut.jpg";
import buzzCutImg from "../assets/buzz-cut.jpg";
import undercutImg from "../assets/undercut.jpg";
import headshotImg from "../assets/headshot.jpeg";
import jeromeStyle1Img from "../assets/jerome-style-1.jpg";
import jeromeStyle2Img from "../assets/jerome-style-2.jpg";
import jeromeStyle3Img from "../assets/jerome-style-3.jpg";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile menu after navigation
      setIsMobileMenuOpen(false);
    }
  };

  const operatingHours = [
    { day: "Monday", hours: "9:30 AM – 5 PM" },
    { day: "Tuesday", hours: "9:30 AM – 5 PM" },
    { day: "Wednesday", hours: "9:30 AM – 9 PM" },
    { day: "Thursday", hours: "9:30 AM – 9 PM" },
    { day: "Friday", hours: "9 AM – 9 PM" },
    { day: "Saturday", hours: "Closed", closed: true },
    { day: "Sunday", hours: "Closed", closed: true }
  ];

  return (
    <div className="bg-man-cave-primary text-white font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-man-cave-primary/60 backdrop-blur-md' : 'bg-man-cave-primary/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-bold text-man-cave-accent logo-text">Man Cave</h1>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => smoothScroll('home')}
                  className="hover:text-man-cave-accent transition-colors duration-300"
                >
                  Home
                </button>
                <button 
                  onClick={() => smoothScroll('about')}
                  className="hover:text-man-cave-accent transition-colors duration-300"
                >
                  About
                </button>
                <button 
                  onClick={() => smoothScroll('gallery')}
                  className="hover:text-man-cave-accent transition-colors duration-300"
                >
                  Gallery
                </button>
                <button 
                  onClick={() => smoothScroll('hours')}
                  className="hover:text-man-cave-accent transition-colors duration-300"
                >
                  Hours
                </button>
                <button 
                  onClick={() => smoothScroll('contact')}
                  className="hover:text-man-cave-accent transition-colors duration-300"
                >
                  Contact
                </button>
              </div>
            </div>
            
            {/* Book Now Button - Desktop */}
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="hidden md:inline-flex bg-man-cave-accent text-man-cave-primary px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
            >
              <i className="fas fa-calendar-check mr-2"></i>Book Now
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-man-cave-accent hover:text-white transition-colors duration-300 p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <i className="fas fa-times text-2xl"></i>
              ) : (
                <i className="fas fa-bars text-2xl"></i>
              )}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Navigation Menu */}
      <div className={`fixed inset-0 bg-black/70 z-40 md:hidden transition-opacity duration-300 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`} onClick={() => setIsMobileMenuOpen(false)} />
      
      <div className={`fixed right-0 top-16 h-[calc(100%-4rem)] w-80 bg-man-cave-primary z-50 md:hidden transform transition-transform duration-300 shadow-2xl border-l border-man-cave-accent/20 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-man-cave-secondary">
            <div className="flex justify-between items-center">
              <h2 className="text-xl text-man-cave-light">Navigation</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-man-cave-accent hover:text-white transition-colors duration-300 p-2 -mr-2"
                aria-label="Close mobile menu"
              >
                <i className="fas fa-times text-2xl"></i>
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            <nav className="p-6 space-y-2">
              <button
                onClick={() => smoothScroll('home')}
                className="w-full flex items-center text-left text-lg text-white hover:text-man-cave-accent hover:bg-man-cave-secondary/50 transition-all duration-300 py-4 px-4 rounded-lg"
              >
                <i className="fas fa-home text-man-cave-accent w-8"></i>
                Home
              </button>
              <button
                onClick={() => smoothScroll('about')}
                className="w-full flex items-center text-left text-lg text-white hover:text-man-cave-accent hover:bg-man-cave-secondary/50 transition-all duration-300 py-4 px-4 rounded-lg"
              >
                <i className="fas fa-info-circle text-man-cave-accent w-8"></i>
                About
              </button>
              <button
                onClick={() => smoothScroll('gallery')}
                className="w-full flex items-center text-left text-lg text-white hover:text-man-cave-accent hover:bg-man-cave-secondary/50 transition-all duration-300 py-4 px-4 rounded-lg"
              >
                <i className="fas fa-images text-man-cave-accent w-8"></i>
                Gallery
              </button>
              <button
                onClick={() => smoothScroll('hours')}
                className="w-full flex items-center text-left text-lg text-white hover:text-man-cave-accent hover:bg-man-cave-secondary/50 transition-all duration-300 py-4 px-4 rounded-lg"
              >
                <i className="fas fa-clock text-man-cave-accent w-8"></i>
                Hours
              </button>
              <button
                onClick={() => smoothScroll('contact')}
                className="w-full flex items-center text-left text-lg text-white hover:text-man-cave-accent hover:bg-man-cave-secondary/50 transition-all duration-300 py-4 px-4 rounded-lg"
              >
                <i className="fas fa-envelope text-man-cave-accent w-8"></i>
                Contact
              </button>
            </nav>
            
            <div className="p-6 border-t border-man-cave-secondary">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full bg-man-cave-accent text-man-cave-primary px-6 py-4 rounded-lg text-lg font-bold hover:opacity-90 transition-all duration-300 flex items-center justify-center shadow-lg"
              >
                <i className="fas fa-calendar-check mr-3"></i>
                Book Appointment Online
              </button>
              
              <div className="mt-6 text-center text-man-cave-light text-sm space-y-1">
                <p className="font-semibold text-man-cave-accent">Visit Us</p>
                <p>135 West Main Street</p>
                <p>Smithtown, NY 11787</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${barbershopHero})`
          }}
        />
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 logo-text text-man-cave-light">
            Man Cave
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-man-cave-light font-light tracking-wide">
            Where Style Meets Precision
          </p>
          <p className="text-lg mb-10 text-man-cave-light max-w-2xl mx-auto leading-relaxed">
            Experience the best, in men's and kids' haircuts at Smithtown's best barbershop. Modern styles, classic shaves, and a quality experience for all customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-man-cave-accent text-man-cave-primary px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
            >
              <i className="fas fa-calendar-check mr-3"></i>Book Online Now
            </button>
            <a
              href="tel:631-257-5212"
              className="border-2 border-man-cave-accent text-man-cave-accent px-8 py-4 rounded-lg text-lg font-semibold hover:bg-man-cave-accent hover:text-man-cave-primary transition-all duration-300 inline-flex items-center justify-center"
            >
              <i className="fas fa-phone mr-3"></i>Call (631) 257-5212
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-man-cave-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 logo-text">About <span className="text-man-cave-accent">Man Cave</span></h2>
              <p className="text-lg text-man-cave-light mb-6 leading-relaxed">
                Man Cave is the best barbershop in Smithtown on West Main Street. Where we do haircuts the right way.
              </p>
              <p className="text-lg text-man-cave-light mb-6 leading-relaxed">
                Jerome handles everything from regular men's cuts to fades, beard trims, hot towel shaves, and kids' haircuts. He's got you covered. Want that crisp lineup or just a basic trim? No problem.
              </p>
              <p className="text-lg text-man-cave-light mb-6 leading-relaxed">
                The shop's is decorated top to bottom with pop culture. Jerome takes his time and gets it right no matter what cut you have in mind.
              </p>
              <p className="text-lg text-man-cave-light leading-relaxed">
                Come in, get a fresh haircut and leave feeling confident.
              </p>
            </div>
            <div className="relative">
            <img
  src={barbershopMainImg}
  alt="Man Cave Barbershop interior"
  className="rounded-xl shadow-2xl w-full object-cover aspect-[4/5] max-h-[500px]"
/>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Barber Section */}
      <section className="py-20 bg-man-cave-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 logo-text text-man-cave-accent">Meet Your Barber</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-man-cave-primary rounded-xl p-8 shadow-xl">
                <h3 className="text-3xl font-bold mb-4 text-man-cave-accent logo-text">Jerome</h3>
                <p className="text-xl text-man-cave-accent mb-4">Owner & Barber</p>
                
                <div className="space-y-4 text-man-cave-light">
                  <p className="leading-relaxed">
                    With over 15 years of experience in the barbering industry, Jerome has mastered the art of classic cuts and modern styling techniques. His attention to detail and passion for the craft ensure every client leaves looking and feeling their best.
                  </p>
                  
                  <div className="pt-4">
                    <h4 className="font-semibold text-white mb-3">Specialties:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <i className="fas fa-check-circle text-man-cave-accent mr-3"></i>
                        Classic & Modern Men's Haircuts
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-check-circle text-man-cave-accent mr-3"></i>
                        Kids' Cuts & Styling
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-check-circle text-man-cave-accent mr-3"></i>
                        Traditional Hot Shaves
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-check-circle text-man-cave-accent mr-3"></i>
                        Beard Trims & Grooming
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-check-circle text-man-cave-accent mr-3"></i>
                        Shape Ups
                      </li>
                    </ul>
                  </div>
                  
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="bg-man-cave-primary rounded-xl shadow-2xl overflow-hidden aspect-[3/4]">
                  <img
                    src={headshotImg}
                    alt="Jerome professional headshot"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-man-cave-accent text-man-cave-primary p-4 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-award text-2xl"></i>
                    <div>
                      <div className="font-bold">15+ Years</div>
                      <div className="text-xs">Master Barber</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-man-cave-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 logo-text">
              Jerome's <span className="text-man-cave-accent">Work</span>
            </h2>
            <p className="text-xl text-man-cave-light max-w-2xl mx-auto">
              See the results for yourself
            </p>
          </div>
          
          {/* Gallery Grid - 15 Photos */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="group relative bg-man-cave-secondary rounded-xl overflow-hidden aspect-square shadow-xl hover:shadow-2xl transition-all duration-300">
              <img
                src={taperFadeImg}
                alt="Taper fade style"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="group relative bg-man-cave-secondary rounded-xl overflow-hidden aspect-square shadow-xl hover:shadow-2xl transition-all duration-300">
              <img
                src={buzzCutImg}
                alt="Buzz cut style"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="group relative bg-man-cave-secondary rounded-xl overflow-hidden aspect-square shadow-xl hover:shadow-2xl transition-all duration-300">
              <img
                src={modernFadeImg}
                alt="Modern fade style"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="group relative bg-man-cave-secondary rounded-xl overflow-hidden aspect-square shadow-xl hover:shadow-2xl transition-all duration-300">
              <img
                src={hairDesignImg}
                alt="Hair design style"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="group relative bg-man-cave-secondary rounded-xl overflow-hidden aspect-square shadow-xl hover:shadow-2xl transition-all duration-300">
              <img
                src={executiveStyleImg}
                alt="Executive haircut style"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="group relative bg-man-cave-secondary rounded-xl overflow-hidden aspect-square shadow-xl hover:shadow-2xl transition-all duration-300">
              <img
                src={undercutImg}
                alt="Undercut style"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="group relative bg-man-cave-secondary rounded-xl overflow-hidden aspect-square shadow-xl hover:shadow-2xl transition-all duration-300">
              <img
                src={fadeCutImg}
                alt="Fade haircut style"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="group relative bg-man-cave-secondary rounded-xl overflow-hidden aspect-square shadow-xl hover:shadow-2xl transition-all duration-300">
              <img
                src={premiumCutImg}
                alt="Premium haircut style"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="group relative bg-man-cave-secondary rounded-xl overflow-hidden aspect-square shadow-xl hover:shadow-2xl transition-all duration-300">
              <img
                src={barbershopImage}
                alt="Professional barbershop interior"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="group relative bg-man-cave-secondary rounded-xl overflow-hidden aspect-square shadow-xl hover:shadow-2xl transition-all duration-300">
              <img
                src={kidsCutImg}
                alt="Kids haircut style"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="group relative bg-man-cave-secondary rounded-xl overflow-hidden aspect-square shadow-xl hover:shadow-2xl transition-all duration-300">
              <img
                src={textureCutImg}
                alt="Texture cut style"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="group relative bg-man-cave-secondary rounded-xl overflow-hidden aspect-square shadow-xl hover:shadow-2xl transition-all duration-300">
              <img
                src={hotShaveImg}
                alt="Traditional hot shave service"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="group relative bg-man-cave-secondary rounded-xl overflow-hidden aspect-square shadow-xl hover:shadow-2xl transition-all duration-300">
              <img
                src={edgeUpImg}
                alt="Edge up style"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="group relative bg-man-cave-secondary rounded-xl overflow-hidden aspect-square shadow-xl hover:shadow-2xl transition-all duration-300">
              <img
                src={classicCutImg}
                alt="Classic haircut style"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="group relative bg-man-cave-secondary rounded-xl overflow-hidden aspect-square shadow-xl hover:shadow-2xl transition-all duration-300">
              <img
                src={beardTrimImg}
                alt="Beard trim service"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="group relative bg-man-cave-secondary rounded-xl overflow-hidden aspect-square shadow-xl hover:shadow-2xl transition-all duration-300">
              <img
                src={jeromeStyle1Img}
                alt="Sharp fade and beard lineup"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="group relative bg-man-cave-secondary rounded-xl overflow-hidden aspect-square shadow-xl hover:shadow-2xl transition-all duration-300">
              <img
                src={jeromeStyle2Img}
                alt="Detailed design haircut"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="group relative bg-man-cave-secondary rounded-xl overflow-hidden aspect-square shadow-xl hover:shadow-2xl transition-all duration-300">
              <img
                src={jeromeStyle3Img}
                alt="Precision haircut with clean lineup"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Gallery Footer */}
          <div className="text-center mt-12">
            <p className="text-man-cave-light text-lg mb-4">
              Follow our work and book your transformation today
            </p>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="inline-flex items-center bg-man-cave-accent text-man-cave-primary px-8 py-4 rounded-lg text-lg font-bold hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <i className="fas fa-calendar-check mr-3"></i>
              Book Your Appointment
            </button>
          </div>
        </div>
      </section>


      {/* Hours & Contact Section */}
      <section id="hours" className="py-20 bg-man-cave-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Hours of Operation */}
            <div className="bg-man-cave-primary rounded-xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-man-cave-accent logo-text flex items-center">
                <i className="fas fa-clock mr-3"></i>Hours
              </h3>
              <div className="space-y-3">
                {operatingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-man-cave-secondary/50 last:border-b-0">
                    <span className="font-semibold text-white text-sm">{schedule.day}</span>
                    <span className={
                      schedule.closed
                        ? "text-gray-500 text-sm italic"
                        : schedule.highlight
                          ? "text-man-cave-accent font-semibold text-sm"
                          : "text-man-cave-light text-sm"
                    }>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-man-cave-primary rounded-xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-man-cave-accent logo-text flex items-center">
                <i className="fas fa-map-marker-alt mr-3"></i>Visit Us
              </h3>
              <div className="space-y-5">
                <div className="flex items-start space-x-3">
                  <div className="bg-man-cave-accent text-man-cave-primary p-2 rounded-lg">
                    <i className="fas fa-map-marker-alt text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-sm">Address</h4>
                    <p className="text-man-cave-light text-sm leading-relaxed">135 West Main Street<br />Smithtown, NY 11787</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-man-cave-accent text-man-cave-primary p-2 rounded-lg">
                    <i className="fas fa-phone text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-sm">Phone</h4>
                    <a 
                      href="tel:631-257-5212" 
                      className="text-man-cave-accent hover:opacity-80 transition-colors font-semibold"
                    >
                      (631) 257-5212
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-man-cave-accent text-man-cave-primary p-2 rounded-lg">
                    <i className="fas fa-cut text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-sm">Services</h4>
                    <p className="text-man-cave-light text-sm">Haircuts • Shaves • Styling<br />Beard Trims • Grooming</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-man-cave-primary rounded-xl p-6 shadow-xl lg:col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-6 text-man-cave-accent logo-text flex items-center">
                <i className="fas fa-map mr-3"></i>Find Us
              </h3>
              <div className="relative w-full h-[300px] lg:h-[350px] rounded-lg overflow-hidden shadow-inner">
                <div className="absolute inset-0 bg-man-cave-secondary/20"></div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755.4627151514746!2d-73.20008717076895!3d40.85578769871766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e83bfbe279425b%3A0xa35afc1b031c414f!2sMan%20cave%20Barbershop%40%20Karisma%20salon!5e0!3m2!1sen!2sus!4v1723742400000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ 
                    border: 0,
                    filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)'
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="Man Cave Barbershop @ Karisma Salon Location"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <a 
                  href="https://www.google.com/maps/dir//Man+cave+Barbershop+@+Karisma+salon,+135+W+Main+St,+Smithtown,+NY+11787/@40.8557877,-73.1993847,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89e83bfbe279425b:0xa35afc1b031c414f!2m2!1d-73.1993847!2d40.8557877"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-man-cave-accent hover:opacity-80 transition-colors text-sm font-semibold"
                >
                  <i className="fas fa-directions mr-2"></i>
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-man-cave-accent mb-4 logo-text">Man Cave</h3>
            <p className="text-man-cave-light mb-4">Where Style Meets Precision</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-man-cave-light">
              <span>135 West Main Street, Smithtown, NY</span>
              <span className="hidden sm:block">•</span>
              <a 
                href="tel:631-257-5212" 
                className="text-man-cave-accent hover:opacity-80 transition-colors"
              >
                (631) 257-5212
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-man-cave-secondary">
              <p className="text-man-cave-light text-sm">&copy; 2024 Man Cave Barbershop. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}
