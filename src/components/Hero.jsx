import React from 'react';
import { Home, ArrowRight, ShieldCheck, MapPin, Tag } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg className="w-[22px] h-[22px] mr-3 flex-shrink-0" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#25D366"/>
    <path d="M23.5 8.5A10.43 10.43 0 0016 5.5a10.5 10.5 0 00-9.1 15.7L5.5 26.5l5.5-1.4A10.5 10.5 0 0016 26.5a10.5 10.5 0 0010.5-10.5 10.43 10.43 0 00-3-7.5zm-7.5 16.2a8.7 8.7 0 01-4.4-1.2l-.3-.2-3.3.85.87-3.2-.2-.33A8.7 8.7 0 1124.7 16a8.72 8.72 0 01-8.7 8.72zm4.77-6.52c-.26-.13-1.55-.77-1.79-.85s-.42-.13-.59.13-.68.85-.84 1.03-.31.19-.57.06a7.15 7.15 0 01-2.1-1.3 7.9 7.9 0 01-1.46-1.81c-.15-.27 0-.41.12-.54s.26-.31.4-.47a1.8 1.8 0 00.26-.44.49.49 0 000-.47c-.06-.13-.59-1.42-.81-1.95s-.43-.44-.59-.45h-.5a1 1 0 00-.71.33 2.93 2.93 0 00-.91 2.18 5.1 5.1 0 001.07 2.7 11.66 11.66 0 004.47 3.94c.62.27 1.1.43 1.48.55a3.56 3.56 0 001.63.1 2.69 2.69 0 001.76-1.25 2.18 2.18 0 00.15-1.25c-.06-.11-.22-.17-.48-.3z" fill="white"/>
  </svg>
);

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center overflow-hidden font-poppins">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80')` }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/80 to-transparent" />

      <div className="container mx-auto px-6 lg:px-16 relative z-20 pt-10">
        <div className="max-w-3xl">
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
            Find Your <br />
            Dream Property with <br />
            <span className="text-[#D4AF37]">SUNSHINE REAL ESTATE</span>
          </h1>

          <div className="flex items-center space-x-4 my-6 text-white text-xl md:text-2xl font-light tracking-widest uppercase">
            <span>Buy</span>
            <span className="text-[#D4AF37]">|</span>
            <span>Sell</span>
            <span className="text-[#D4AF37]">|</span>
            <span>Rent</span>
          </div>

          <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Premium real estate services for buying, selling, and renting properties across Kenya.
          </p>

          {/* Buttons — full width on mobile, auto on sm+ */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
            <button className="flex items-center justify-center bg-[#D4AF37] hover:bg-[#b8962f] text-black px-8 py-4 rounded-lg font-bold transition-all group w-full sm:w-auto">
              <Home className="w-5 h-5 mr-3" />
              Explore Properties
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="flex items-center justify-center border border-white/40 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-medium transition-all w-full sm:w-auto">
              <WhatsAppIcon />
              Chat on WhatsApp
            </button>
          </div>

          {/* Features Bar — added pb-12 for bottom space */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-8 pb-12">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/5 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="text-white font-bold">Trusted Agents</h4>
                <p className="text-gray-400 text-sm">Experienced & Reliable</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/5 rounded-lg">
                <MapPin className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="text-white font-bold">Prime Locations</h4>
                <p className="text-gray-400 text-sm">Best Areas in Kenya</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/5 rounded-lg">
                <Tag className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="text-white font-bold">Affordable Deals</h4>
                <p className="text-gray-400 text-sm">Value for Your Money</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;