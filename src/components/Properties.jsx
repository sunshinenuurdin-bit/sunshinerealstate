import React from 'react';
import { 
  Home, Key, Building2, Users, ArrowRight, Zap, 
  ShieldCheck, Star, Tag, MapPin, BedDouble, 
  Bath, Square, CarFront, MessageCircle, Phone,
  Search, User, Calendar, Handshake, Sun
} from 'lucide-react';

const PropertyLanding = () => {
  // Data for Services
  const services = [
    { title: 'Property Sales', desc: 'We help you buy the perfect home, land, or commercial property.', icon: <Home className="w-8 h-8" /> },
    { title: 'Property Rentals', desc: 'Find the best apartments, offices, and shops for rent across Kenya.', icon: <Key className="w-8 h-8" /> },
    { title: 'Property Development', desc: 'From concept to completion, we build spaces that inspire and last.', icon: <Building2 className="w-8 h-8" /> },
    { title: 'Property Management', desc: 'We manage your property so you can focus on what matters most.', icon: <Users className="w-8 h-8" /> },
  ];

  // Data for How It Works
  const steps = [
    { id: 1, title: 'Browse Properties', desc: 'Explore our wide range of listings', icon: <Search className="w-8 h-8" /> },
    { id: 2, title: 'Contact Agent', desc: 'Get in touch with our trusted agents', icon: <User className="w-8 h-8" /> },
    { id: 3, title: 'Schedule a Visit', desc: 'Book a site visit at your convenience', icon: <Calendar className="w-8 h-8" /> },
    { id: 4, title: 'Close the Deal', desc: 'We guide you from start to finish', icon: <Handshake className="w-8 h-8" /> },
  ];

  // Data for Properties
  const properties = [
    { 
      title: 'Luxury Villa - Karen', 
      loc: 'Karen, Nairobi', 
      price: 'KSh 65,000,000', 
      status: 'FOR SALE', 
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', 
      tags: [{icon: <BedDouble />, val: '5 Beds'}, {icon: <Bath />, val: '6 Baths'}, {icon: <Square />, val: '4500 sqft'}] 
    },
    { 
      title: 'Modern Apartment', 
      loc: 'Kilimani, Nairobi', 
      price: 'KSh 120,000 /month', 
      status: 'FOR RENT', 
      img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00', 
      tags: [{icon: <BedDouble />, val: '2 Beds'}, {icon: <Bath />, val: '2 Baths'}, {icon: <Square />, val: '1200 sqft'}] 
    },
    { 
      title: 'Commercial Building', 
      loc: 'Westlands, Nairobi', 
      price: 'KSh 180,000,000', 
      status: 'FOR SALE', 
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab', 
      tags: [{icon: <Square />, val: '10,000 sqft'}, {icon: <CarFront />, val: 'Parking'}] 
    },
    { 
      title: 'Prime Plot - 1 Acre', 
      loc: 'Ruiru, Kiambu', 
      price: 'KSh 8,500,000', 
      status: 'FOR SALE', 
      img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef', 
      tags: [{icon: <Square />, val: '1 Acre'}, {icon: <Home />, val: 'Residential Zone'}] 
    },
  ];

  return (
    <main className="font-poppins select-none mb-5 mt-1">
      
      {/* 1. OUR SERVICES SECTION */}
      <section className="bg-[#FAF9F6] py-20 px-6 lg:px-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 text-[#D4AF37] font-bold text-sm tracking-widest uppercase mb-2">
            <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
            <span>Our Services</span>
            <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A110B]">Our Real Estate Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center flex flex-col items-center group">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">{service.desc}</p>
              <button className="flex items-center text-sm font-bold hover:text-[#D4AF37] transition-colors">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 2. FEATURED LISTINGS SECTION */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 space-y-4 md:space-y-0">
          <div>
            <div className="flex items-center space-x-2 text-[#D4AF37] font-bold text-sm tracking-widest uppercase mb-2">
              <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
              <span>Featured Properties</span>
              <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A110B]">Explore Our Latest Listings</h2>
          </div>
          <button className="bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-bold flex items-center text-sm shadow-md hover:bg-[#b8962f] transition-all">
            View All Properties <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((p, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group border border-gray-100">
              <div className="relative h-52 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-3 left-3 bg-[#D4AF37] text-black text-[10px] font-bold px-3 py-1 rounded">
                  {p.status}
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="font-bold text-lg mb-1 group-hover:text-[#D4AF37] transition-colors">{p.title}</h3>
                <div className="flex items-center text-gray-500 text-xs mb-3">
                  <MapPin className="w-3 h-3 mr-1 text-[#D4AF37]" /> {p.loc}
                </div>
                <p className="text-[#D4AF37] font-bold text-lg mb-4">{p.price}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  {p.tags.map((tag, idx) => (
                    <div key={idx} className="flex items-center text-gray-500 text-[10px] font-medium">
                      <span className="text-[#D4AF37] mr-1">{React.cloneElement(tag.icon, { size: 14 })}</span>
                      {tag.val}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- BOTTOM STACKED SECTIONS --- */}

      {/* 3. HOW IT WORKS SECTION */}
      <section className=" bg-[#0a0a0a]/95 py-16 px-6 lg:px-16 border-b border-white/5">
        <h2 className="text-[#D4AF37] text-center font-bold tracking-[0.2em] mb-12 text-xs uppercase">How It Works</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center space-x-4 relative">
              {/* Icon Circle with Number */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#1A110B]">
                  {React.cloneElement(step.icon, { size: 28 })}
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#1A110B] text-[#D4AF37] rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-[#D4AF37]">
                  {step.id}
                </div>
              </div>

              {/* Text Content */}
              <div>
                <h4 className="text-white font-bold text-base mb-0.5">{step.title}</h4>
                <p className="text-gray-400 text-xs leading-snug">{step.desc}</p>
              </div>

              {/* Arrow Connector */}
              {i !== steps.length - 1 && (
                <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 text-[#D4AF37]/30">
                  <ArrowRight size={20} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4. READY TO FIND (CTA) SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#8B6E1A] via-[#D4AF37] to-[#E5C76B] py-10 px-6 lg:px-16">
        {/* City Skyline Overlay */}
        <div 
          className="absolute right-0 bottom-0 w-full h-full opacity-15 pointer-events-none"
          style={{ 
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/city-skyline.png")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom right'
          }}
        ></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 relative z-10">

  {/* Brand & Text Group */}
  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
    {/* <div className="flex flex-col items-center">
      <Sun className="w-12 h-12 text-black/90" />
      <div className="text-black font-black tracking-tighter text-lg mt-[-8px]">SUNSHINE</div>
      <div className="text-black/80 text-[8px] tracking-[0.3em] font-bold border-t border-black/30 pt-1 leading-none">REAL ESTATE</div>
    </div> */}

    <div className="flex flex-col justify-center">
      <h2 className="text-[#1A110B] text-2xl md:text-3xl font-black mb-1">Ready to Find Your Dream Property?</h2>
      <p className="text-[#1A110B]/80 text-base md:text-lg font-semibold">Let Sunshine Real Estate help you make the right move.</p>
    </div>
  </div>

  {/* Buttons Group */}
  <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
    <button className="flex items-center justify-center bg-black text-white px-8 py-3.5 rounded-xl font-bold transition-all w-full sm:w-auto whitespace-nowrap shadow-xl group">
      <Phone className="w-5 h-5 mr-3 text-[#D4AF37] group-hover:scale-110 transition-transform" />
      Call Us Now
    </button>

    <button className="flex items-center justify-center border-2 border-black/30 hover:bg-black/10 text-black px-8 py-3.5 rounded-xl font-bold transition-all w-full sm:w-auto whitespace-nowrap">
      <svg className="w-[22px] h-[22px] mr-3 flex-shrink-0" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="#25D366"/>
        <path d="M23.5 8.5A10.43 10.43 0 0016 5.5a10.5 10.5 0 00-9.1 15.7L5.5 26.5l5.5-1.4A10.5 10.5 0 0016 26.5a10.5 10.5 0 0010.5-10.5 10.43 10.43 0 00-3-7.5zm-7.5 16.2a8.7 8.7 0 01-4.4-1.2l-.3-.2-3.3.85.87-3.2-.2-.33A8.7 8.7 0 1124.7 16a8.72 8.72 0 01-8.7 8.72zm4.77-6.52c-.26-.13-1.55-.77-1.79-.85s-.42-.13-.59.13-.68.85-.84 1.03-.31.19-.57.06a7.15 7.15 0 01-2.1-1.3 7.9 7.9 0 01-1.46-1.81c-.15-.27 0-.41.12-.54s.26-.31.4-.47a1.8 1.8 0 00.26-.44.49.49 0 000-.47c-.06-.13-.59-1.42-.81-1.95s-.43-.44-.59-.45h-.5a1 1 0 00-.71.33 2.93 2.93 0 00-.91 2.18 5.1 5.1 0 001.07 2.7 11.66 11.66 0 004.47 3.94c.62.27 1.1.43 1.48.55a3.56 3.56 0 001.63.1 2.69 2.69 0 001.76-1.25 2.18 2.18 0 00.15-1.25c-.06-.11-.22-.17-.48-.3z" fill="white"/>
      </svg>
      Chat on WhatsApp
    </button>
  </div>

</div>
      </section>

    </main>
  );
};

export default PropertyLanding;