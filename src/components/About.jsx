import React from 'react';
import { Target, Award, Users, ShieldCheck, Heart, TrendingUp } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      title: "Integrity",
      desc: "We conduct every transaction with honesty and transparency, building trust with every client.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Professionalism",
      desc: "Our expert team provides high-level guidance throughout every step of the real estate process.",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Customer Satisfaction",
      desc: "We are dedicated to personalized support, ensuring your unique needs are always met.",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  return (
    <section id="aboutus" className="bg-[#FAF9F6] py-20 px-6 lg:px-16 font-poppins scroll-mt-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Centered Small Title Only */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center space-x-2 text-[#D4AF37] font-bold text-sm tracking-widest uppercase">
            <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
            <span>Who We Are</span>
            <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
          </div>
        </div>

        {/* Section 1: Introduction Split (Text Left, Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            
            {/* Main Heading back in the split */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A110B] mb-6 leading-tight max-w-2xl mx-auto lg:mx-0">
              Turning Your Real Estate <span className="text-[#D4AF37]">Goals Into Reality</span>
            </h2>
            
            <p className="text-gray-600 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
              Sunshine Real Estate is a trusted and dynamic property solutions company dedicated to helping clients find their perfect homes, investment properties, and commercial spaces. With a strong commitment to integrity, professionalism, and customer satisfaction, we offer expert guidance throughout every step of the buying, selling, and renting process.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              We specialize in residential and commercial real estate, providing tailored services that meet the unique needs of each client. Our team combines market knowledge, innovative marketing strategies, and personalized support to ensure smooth and successful transactions.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200 text-left">
              <div>
                <h4 className="text-[#1A110B] font-bold text-lg mb-1">Residential</h4>
                <p className="text-sm text-gray-500">Find your dream family home in Kenya's best locations.</p>
              </div>
              <div>
                <h4 className="text-[#1A110B] font-bold text-lg mb-1">Commercial</h4>
                <p className="text-sm text-gray-500">Premium office spaces and investment opportunities.</p>
              </div>
            </div>
          </div>

          {/* Right: Framed Image (Hidden on small screens via 'hidden md:block') */}
          <div className="hidden md:block relative p-4 md:p-6 lg:ml-auto w-full max-w-lg mx-auto lg:max-w-none">
            {/* Symmetrical Gold Frame that surrounds the image nicely */}
            <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-[2rem] z-0 hidden md:block"></div>
            
            {/* Image Container */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994" 
                alt="Modern Architecture in Nairobi" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute top-12 -right-6 bg-[#1A110B] text-white p-6 rounded-xl shadow-xl z-20 hidden md:block">
              <p className="text-[#D4AF37] text-3xl font-bold">10+</p>
              <p className="text-xs uppercase tracking-widest font-medium">Years of Expertise</p>
            </div>
          </div>
        </div>

        {/* Section 2: Core Values Grid */}
        <div className="bg-[#1A110B] rounded-3xl p-10 md:p-16 relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] opacity-5 transform translate-x-1/2 -translate-y-1/2 rotate-45"></div>

          <div className="text-center mb-16 relative z-10">
            <h3 className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-2">Our Foundation</h3>
            <h2 className="text-3xl font-bold text-white">The Values That Drive Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {values.map((val, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#D4AF37] rounded-2xl flex items-center justify-center text-black mb-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  {val.icon}
                </div>
                <h4 className="text-white font-bold text-xl mb-3">{val.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;