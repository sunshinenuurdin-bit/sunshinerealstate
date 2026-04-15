import React from 'react';
import { Phone, Mail, Globe, MapPin, Send } from 'lucide-react';

const ContactUs = () => {
  const contactInfo = [
    { 
      icon: <Phone className="w-6 h-6 text-[#D4AF37]" />, 
      text: '+254718954599', 
      text2: '+254729622797' 
    },
    { 
      icon: <Mail className="w-6 h-6 text-[#D4AF37]" />, 
      text: 'info@sunshinerealestate.net' 
    },
    { 
      icon: <Globe className="w-6 h-6 text-[#D4AF37]" />, 
      text: 'www.sunshinerealestate.net' 
    },
    { 
      icon: <MapPin className="w-6 h-6 text-[#D4AF37]" />, 
      text: '7th Floor Orbit Place. Wavemark,', 
      text2: 'Westland Road, Westlands Nairobi' 
    },
  ];

  return (
    <section id="contact" className="bg-[#FAF9F6] py-20 px-6 lg:px-16 font-poppins relative overflow-hidden scroll-mt-10">
      
      {/* Decorative background geometry */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37] opacity-5 transform translate-x-1/2 -translate-y-1/4 rotate-45 rounded-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1A110B] opacity-5 transform -translate-x-1/2 translate-y-1/4 rotate-12 rounded-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-[#D4AF37] font-bold text-sm tracking-widest uppercase mb-2">
            <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
            <span>Get In Touch</span>
            <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A110B]">Contact Us</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Have questions about a property or need help managing your portfolio? Reach out to our team today.
          </p>
        </div>

        {/* Main Content Container - items-start ensures top alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 items-start">
          
          {/* Left Side: Contact Information (Dark Panel) */}
          <div className="lg:col-span-2 bg-[#1A110B] text-white p-10 lg:p-12 relative overflow-hidden self-stretch">
             {/* Diagonal Gold Accent inspired by the business card */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#D4AF37]" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">
                Contact <span className="text-[#D4AF37]">Information</span>
              </h3>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="bg-[#D4AF37]/10 p-4 rounded-xl flex-shrink-0 group-hover:bg-[#D4AF37] transition-colors duration-300">
                      {React.cloneElement(info.icon, { className: 'w-6 h-6 text-[#D4AF37] group-hover:text-[#1A110B] transition-colors duration-300' })}
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="text-gray-300 font-medium text-sm md:text-base">{info.text}</span>
                      {info.text2 && <span className="text-gray-300 font-medium text-sm md:text-base">{info.text2}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-3 p-10 lg:p-12 bg-white">
            <h3 className="text-2xl font-bold text-[#1A110B] mb-8">Send Us a Message</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-bold text-[#1A110B] mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all bg-gray-50 text-sm" 
                    placeholder="Enter your first name" 
                  />
                </div>
                {/* Last Name */}
                <div>
                  <label className="block text-sm font-bold text-[#1A110B] mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all bg-gray-50 text-sm" 
                    placeholder="Enter your last name" 
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-[#1A110B] mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all bg-gray-50 text-sm" 
                  placeholder="john@example.com" 
                />
              </div>

              {/* Subject Dropdown */}
              <div>
                <label className="block text-sm font-bold text-[#1A110B] mb-2">Subject</label>
                <select className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all bg-gray-50 text-sm text-gray-600 appearance-none">
                  <option>Property Inquiry</option>
                  <option>Schedule a Viewing</option>
                  <option>Property Management</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-bold text-[#1A110B] mb-2">Message</label>
                <textarea 
                  rows="5" 
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all bg-gray-50 text-sm resize-none" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#b8962f] text-black font-bold px-10 py-4 rounded-xl flex items-center justify-center transition-all hover:shadow-lg mt-4"
              >
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;