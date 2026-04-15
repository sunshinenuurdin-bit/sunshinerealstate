import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const SocialIcons = {
    Facebook: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    ),
    Instagram: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
    ),
    Linkedin: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
    ),
    Youtube: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
    ),
  };
const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Products', href: '#properties' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'About Us', href: '#aboutus' },
  { name: 'Contact', href: '#contact' },
];

  return (
    <footer className="bg-[#0A0A0A] text-white pt-12 pb-6 px-6 lg:px-16 font-poppins">
      <div className="max-w-7xl mx-auto">

        {/* Top Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">

          {/* Brand — full width on mobile */}
          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-1 flex flex-col space-y-4">
            <div className="flex flex-row items-center gap-3 lg:flex-col lg:items-start lg:gap-0">
              <img
                src={logo}
                alt="Sunshine Real Estate"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[260px]">
              Premium real estate services across Kenya. Your trusted partner in property.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-[#D4AF37] hover:text-white transition-colors"><SocialIcons.Facebook /></a>
              <a href="#" className="text-[#D4AF37] hover:text-white transition-colors"><SocialIcons.Instagram /></a>
              <a href="#" className="text-[#D4AF37] hover:text-white transition-colors"><SocialIcons.Linkedin /></a>
              <a href="#" className="text-[#D4AF37] hover:text-white transition-colors"><SocialIcons.Youtube /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm font-medium">
              {footerLinks.map((item) => (
    <li key={item.name}>
      <a 
        href={item.href} 
        className="hover:text-[#D4AF37] transition-colors"
      >
        {item.name}
      </a>
    </li>
  ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-widest">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm font-medium">
              {['Property Sales', 'Property Rentals', 'Property Development', 'Property Management'].map((item) => (
                <li key={item}><a href="#" className="hover:text-[#D4AF37] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-widest">Resources</h4>
            <ul className="space-y-3 text-gray-400 text-sm font-medium">
              {[ 'Terms & Conditions', 'Privacy Policy'].map((item) => (
                <li key={item}><a href="#" className="hover:text-[#D4AF37] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-widest">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="p-2 bg-[#D4AF37]/10 rounded-lg group-hover:bg-[#D4AF37] transition-colors flex-shrink-0">
                  <Phone size={15} className="text-[#D4AF37] group-hover:text-black" />
                </div>
                <span className="text-gray-400 text-sm font-semibold">+254 718 954 559</span>
              </div>
              <div className="flex items-start space-x-3 group cursor-pointer">
                <div className="p-2 bg-[#D4AF37]/10 rounded-lg group-hover:bg-[#D4AF37] transition-colors flex-shrink-0">
                  <Mail size={15} className="text-[#D4AF37] group-hover:text-black" />
                </div>
                <span className="text-gray-400 text-sm font-semibold break-all">info@sunshinereal-estate.com</span>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="p-2 bg-[#D4AF37]/10 rounded-lg group-hover:bg-[#D4AF37] transition-colors flex-shrink-0">
                  <MapPin size={15} className="text-[#D4AF37] group-hover:text-black" />
                </div>
                <span className="text-gray-400 text-sm font-semibold">Nairobi, Kenya</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-[11px] font-medium tracking-wider text-center sm:text-left">
            © {currentYear} Sunshine Real Estate. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-gray-500 font-medium">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;