import React from 'react';
import { 
  Home, Key, Building2, Users, ArrowRight, Zap, 
  ShieldCheck, Star, Tag, MapPin, BedDouble, 
  Bath, Square, CarFront, MessageCircle, Phone,
  Search, User, Calendar, Handshake, Sun
} from 'lucide-react';
import OurProjects from './projects';
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
      <section id="services" className="bg-[#FAF9F6] py-20 px-6 lg:px-16 scroll-mt-10">
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
              
            </div>
          ))}
        </div>
      </section>

      {/* 2. FEATURED LISTINGS SECTION */}
<section id="properties" className="bg-white py-20 px-6 lg:px-16 scroll-mt-10">
  <div className="max-w-7xl mx-auto">
    
    {/* Centered Top Title */}
    <div className="flex justify-center mb-4">
      <div className="flex items-center space-x-2 text-[#D4AF37] font-bold text-sm tracking-widest uppercase">
        <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
        <span>Our products</span>
        <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
      </div>
    </div>

    {/* Heading and Button Row */}
    <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left mb-12 space-y-6 md:space-y-0">
      <h2 id="products" className="text-3xl md:text-4xl font-extrabold text-[#1A110B]">
        Explore Our Latest products
      </h2>
      <button className="bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-bold flex items-center text-sm shadow-md hover:bg-[#b8962f] transition-all shrink-0">
        View All Products <ArrowRight className="ml-2 w-4 h-4" />
      </button>
    </div>

    {/* Grid Layout */}
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
  </div>
</section>
<OurProjects/>
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
      
    </main>
  );
};

export default PropertyLanding;