import { useEffect, useState } from "react";
import barbershopImage from "../assets/barbershop-interior.jpg";
import barbershopHero from "../assets/barbershop-hero.jpg";
import classicCutImg from "../assets/classic-cut.jpg";
import hotShaveImg from "../assets/hot-shave.jpg";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

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
    }
  };

  const operatingHours = [
    { day: "Monday", hours: "9 AM – 5 PM" },
    { day: "Tuesday", hours: "9 AM – 5 PM" },
    { day: "Wednesday", hours: "9 AM – 8 PM" },
    { day: "Thursday", hours: "9 AM – 9 PM", highlight: true },
    { day: "Friday", hours: "9 AM – 5 PM" },
    { day: "Saturday", hours: "9 AM – 5 PM" },
    { day: "Sunday", hours: "9 AM – 5 PM" }
  ];

  return (
    <div className="bg-man-cave-primary text-white font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-man-cave-secondary ${
        isScrolled ? 'bg-man-cave-primary' : 'bg-man-cave-primary/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-man-cave-accent font-serif">Man Cave</h1>
            </div>
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
            <a 
              href="tel:631-257-5212" 
              className="bg-man-cave-accent text-man-cave-primary px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
            >
              <i className="fas fa-phone mr-2"></i>Call Now
            </a>
          </div>
        </div>
      </nav>

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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
            <span className="text-white">Man</span> <span className="text-man-cave-accent">Cave</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-man-cave-light font-light tracking-wide">
            Where Style Meets Precision
          </p>
          <p className="text-lg mb-10 text-man-cave-light max-w-2xl mx-auto leading-relaxed">
            Experience the best, in men's and kids' haircuts at Smithtown's best barbershop. Professional cuts, classic shaves, and modern styling for all ages in a welcoming and friendly atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:631-257-5212" 
              className="bg-man-cave-accent text-man-cave-primary px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
            >
              <i className="fas fa-phone mr-3"></i>Book Now - (631) 257-5212
            </a>
            <button 
              onClick={() => smoothScroll('about')}
              className="border-2 border-man-cave-accent text-man-cave-accent px-8 py-4 rounded-lg text-lg font-semibold hover:bg-man-cave-accent hover:text-man-cave-primary transition-all duration-300 inline-flex items-center justify-center"
            >
              <i className="fas fa-info-circle mr-3"></i>Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-man-cave-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Our Craft</h2>
            <p className="text-xl text-man-cave-light max-w-2xl mx-auto">Precision cuts, classic shaves, and modern styling techniques</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={classicCutImg}
                  alt="Professional barber tools" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-man-cave-accent font-serif">Classic Cuts</h3>
              <p className="text-man-cave-light leading-relaxed">Traditional and modern haircuts tailored to your needs.</p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={hotShaveImg}
                  alt="Straight razor shaving setup" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-man-cave-accent font-serif">Hot Shaves</h3>
              <p className="text-man-cave-light leading-relaxed">Experience a traditional straight razor shave with hot towel treatment.</p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Modern barbershop styling products" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-man-cave-accent font-serif">Styling</h3>
              <p className="text-man-cave-light leading-relaxed">Styling and grooming that makes you look your finest.</p> 
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-man-cave-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif">About <span className="text-man-cave-accent">Man Cave</span></h2>
              <p className="text-lg text-man-cave-light mb-6 leading-relaxed">
              Welcome to Man Cave — Smithtowns go-to spot for fresh cuts and clean styles for men and kids. We have built a laid-back, classic barbershop vibe where you get a mix of old-school skill and modern style.
              </p>
              <p className="text-lg text-man-cave-light mb-6 leading-relaxed">
              At Man Cave, Jerome and Kenny keep things simple — great haircuts, clean shaves, and a friendly vibe. Whether you need a fresh trim, a classic shave, or a cool cut for the kids, they'll make sure you leave looking sharp and feeling good. 
              </p>
              <p className="text-lg text-man-cave-light leading-relaxed">
              Step into the Man Cave and experience the difference that attention to detail, excellent products, and old-school ways can make.
              </p>
            </div>
            <div className="relative">
            <img
  src={barbershopImage}
  alt="Barbershop interior"
  className="rounded-xl shadow-2xl w-full object-cover aspect-[4/5] max-h-[500px]"
/>


              <div className="absolute -bottom-6 -right-6 bg-man-cave-accent text-man-cave-primary p-6 rounded-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm font-semibold">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Contact Section */}
      <section id="hours" className="py-20 bg-man-cave-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Hours of Operation */}
            <div className="bg-man-cave-primary rounded-xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold mb-8 text-man-cave-accent font-serif flex items-center">
                <i className="fas fa-clock mr-4"></i>Hours of Operation
              </h3>
              <div className="space-y-4">
                {operatingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-man-cave-secondary/50 last:border-b-0">
                    <span className="font-semibold text-white">{schedule.day}</span>
                    <span className={schedule.highlight ? "text-man-cave-accent font-semibold" : "text-man-cave-light"}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-man-cave-primary rounded-xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold mb-8 text-man-cave-accent font-serif flex items-center">
                <i className="fas fa-map-marker-alt mr-4"></i>Visit Us
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-man-cave-accent text-man-cave-primary p-3 rounded-lg">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Address</h4>
                    <p className="text-man-cave-light leading-relaxed">135 West Main Street<br />Smithtown, NY</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-man-cave-accent text-man-cave-primary p-3 rounded-lg">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <a 
                      href="tel:631-257-5212" 
                      className="text-man-cave-accent hover:opacity-80 transition-colors text-lg font-semibold"
                    >
                      (631) 257-5212
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-man-cave-accent text-man-cave-primary p-3 rounded-lg">
                    <i className="fas fa-cut"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Services</h4>
                    <p className="text-man-cave-light">Haircuts (Men & Kids) • Shaves • Styling<br />Beard Trims • Grooming</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="py-20 bg-man-cave-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
            alt="Atmospheric barbershop scene" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Ready for Your <span className="text-man-cave-accent">Best Look</span>?</h2>
          <p className="text-xl text-man-cave-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Don't wait, book your appointment today and discover why Man Cave is Smithtown's go-to barbershop for all ages.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:631-257-5212" 
              className="bg-man-cave-accent text-man-cave-primary px-10 py-5 rounded-lg text-xl font-bold hover:opacity-90 transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center shadow-xl"
            >
              <i className="fas fa-phone mr-3"></i>
              Call (631) 257-5212
            </a>
            <a 
              href="sms:631-257-5212" 
              className="border-2 border-man-cave-accent text-man-cave-accent px-10 py-5 rounded-lg text-xl font-bold hover:bg-man-cave-accent hover:text-man-cave-primary transition-all duration-300 inline-flex items-center justify-center"
            >
              <i className="fas fa-comment mr-3"></i>
              Send Text
            </a>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-man-cave-light text-sm">Premium grooming • Professional service</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-man-cave-accent mb-4 font-serif">Man Cave</h3>
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
    </div>
  );
}
