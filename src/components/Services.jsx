import React, { useState } from 'react';
import { 
  Home, Key, Building2, Users, ArrowRight, Zap, 
  ShieldCheck, Star, Tag, MapPin, BedDouble, 
  Bath, Square, CarFront, MessageCircle, Phone 
} from 'lucide-react';

const PropertyLanding = () => {
  const [activeLink, setActiveIndex] = useState(null);

  // Data for Services
  const services = [
    { title: 'Property Sales', desc: 'We help you buy the perfect home, land, or commercial property.', icon: <Home className="w-8 h-8" /> },
    { title: 'Property Rentals', desc: 'Find the best apartments, offices, and shops for rent across Kenya.', icon: <Key className="w-8 h-8" /> },
    { title: 'Property Development', desc: 'From concept to completion, we build spaces that inspire and last.', icon: <Building2 className="w-8 h-8" /> },
    { title: 'Property Management', desc: 'We manage your property so you can focus on what matters most.', icon: <Users className="w-8 h-8" /> },
  ];

  // Data for Why Choose Us
  const features = [
    { title: 'Fast Service', sub: 'Quick response & seamless process', icon: <Zap className="w-6 h-6" /> },
    { title: 'Trusted Experts', sub: 'Professional agents you can trust', icon: <ShieldCheck className="w-6 h-6" /> },
    { title: 'Premium Listings', sub: 'Carefully selected quality properties', icon: <Star className="w-6 h-6" /> },
    { title: 'Affordable Deals', sub: 'Great value for every budget', icon: <Tag className="w-6 h-6" /> },
    { title: 'Local Knowledge', sub: 'In-depth market insights in Kenya', icon: <MapPin className="w-6 h-6" /> },
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
    <main className="font-poppins select-none">
      
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

      {/* 2. WHY CHOOSE US BANNER */}
      <section className="bg-[#1A110B] py-14 px-6 lg:px-16">
        <h2 className="text-[#D4AF37] text-center font-bold tracking-widest mb-12 text-lg uppercase">Why Choose Sunshine Real Estate?</h2>
        <div className="flex flex-wrap justify-center lg:justify-between items-start gap-y-10">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4 flex-1 min-w-[200px] lg:border-r last:border-0 border-white/10">
              <div className="text-[#D4AF37] mb-4">
                {f.icon}
              </div>
              <h4 className="text-white font-bold text-sm mb-1">{f.title}</h4>
              <p className="text-gray-400 text-[11px] leading-tight uppercase tracking-wider">{f.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED LISTINGS SECTION */}
      <section className="bg-[#FAF9F6] py-20 px-6 lg:px-16">
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

      {/* 4. CTA SECTION */}
      <section className="bg-[#1A110B] py-20 px-6 text-center border-t border-white/5">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Dream Property?</h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">Our team is ready to help you navigate the Kenyan real estate market with ease and transparency.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="flex items-center justify-center bg-[#D4AF37] hover:bg-[#b8962f] text-black px-10 py-4 rounded-lg font-bold transition-all w-full sm:w-auto">
            <Phone className="w-5 h-5 mr-2" /> Call Us
          </button>
          <button className="flex items-center justify-center border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 px-10 py-4 rounded-lg font-bold transition-all w-full sm:w-auto">
            <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
          </button>
        </div>
      </section>

    </main>
  );
};

export default PropertyLanding;