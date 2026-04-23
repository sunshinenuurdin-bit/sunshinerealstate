import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, Globe, MapPin, Send, CheckCircle, ArrowLeft } from 'lucide-react';

const SERVICE_ID  = 'service_gle0sso';
const AUTO_REPLY  = 'template_aog5ujv';
const CONTACT_TPL = 'template_k6i03f9';
const PUBLIC_KEY  = 'ZcO5Qp9_3RWjMK80P';

const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle');

  const contactInfo = [
    { icon: <Phone />, text: '+254718954599', text2: '+254729622797' },
    { icon: <Mail />, text: 'info@sunshinereal-estate.com' },
    { icon: <Globe />, text: 'www.sunshinereal-estate.com' },
    { icon: <MapPin />, text: '7th Floor Orbit Place, Wavemark,', text2: 'Westland Road, Westlands Nairobi' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const params = {
      first_name: form.current.first_name.value,
      last_name:  form.current.last_name.value,
      from_email: form.current.from_email.value,
      subject:    form.current.subject.value,
      message:    form.current.message.value,
    };

    try {
      // 1️⃣ Send notification to your team
      await emailjs.send(SERVICE_ID, CONTACT_TPL, params, PUBLIC_KEY);
      // 2️⃣ Send auto-reply to the user
      await emailjs.send(SERVICE_ID, AUTO_REPLY, params, PUBLIC_KEY);
      setStatus('success');
      form.current.reset();
    } catch (err) {
  console.error('EmailJS error status:', err.status);
  console.error('EmailJS error text:', err.text);  // ← this tells you exactly what's wrong
  setStatus('error');
}
  };

  if (status === 'success') {
    return (
      <section id="contact" className="bg-[#FAF9F6] py-20 px-6 lg:px-16 font-poppins scroll-mt-10 flex items-center justify-center min-h-[60vh]">
        <div className="text-center max-w-md mx-auto animate-fadeIn">
          <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <CheckCircle className="w-10 h-10 text-[#1A110B]" />
          </div>
          <h2 className="text-3xl font-extrabold text-[#1A110B] mb-3">Message Received!</h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mb-5" />
          <p className="text-gray-500 text-sm leading-relaxed">
            Thank you for reaching out. We've received your message and sent a confirmation to your email.
            A member of our team will be in touch with you shortly.
          </p>
          <p className="mt-6 text-[#1A110B] font-semibold">— <span className="text-[#D4AF37]">Sunshine Real Estate</span></p>
          <button onClick={() => setStatus('idle')} className="mt-8 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#1A110B] transition-colors">
            <ArrowLeft className="w-4 h-4" /> Send another message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-[#FAF9F6] py-20 px-6 lg:px-16 font-poppins relative overflow-hidden scroll-mt-10">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37] opacity-5 transform translate-x-1/2 -translate-y-1/4 rotate-45 rounded-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1A110B] opacity-5 transform -translate-x-1/2 translate-y-1/4 rotate-12 rounded-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-[#D4AF37] font-bold text-sm tracking-widest uppercase mb-2">
            <div className="h-[1px] w-8 bg-[#D4AF37]" /><span>Get In Touch</span><div className="h-[1px] w-8 bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A110B]">Contact Us</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Have questions about a property or need help managing your portfolio? Reach out to our team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">

          {/* Left Dark Panel */}
          <div className="lg:col-span-2 bg-[#1A110B] text-white p-10 lg:p-12 relative overflow-hidden self-stretch">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#D4AF37]" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} />
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">
                Contact <span className="text-[#D4AF37]">Information</span>
              </h3>
              <div className="space-y-8">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-start space-x-4 group">
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

          {/* Right Form Panel */}
          <div className="lg:col-span-3 p-10 lg:p-12 bg-white">
            <h3 className="text-2xl font-bold text-[#1A110B] mb-8">Send Us a Message</h3>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#1A110B] mb-2">First Name</label>
                  <input name="first_name" type="text" required placeholder="John" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all bg-gray-50 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1A110B] mb-2">Last Name</label>
                  <input name="last_name" type="text" required placeholder="Doe" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all bg-gray-50 text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#1A110B] mb-2">Email Address</label>
                <input name="from_email" type="email" required placeholder="john@example.com" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all bg-gray-50 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#1A110B] mb-2">Subject</label>
                <select name="subject" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all bg-gray-50 text-sm text-gray-600 appearance-none">
                  <option>Property Inquiry</option>
                  <option>Schedule a Viewing</option>
                  <option>Property Management</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#1A110B] mb-2">Message</label>
                <textarea name="message" rows="5" required placeholder="How can we help you?" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all bg-gray-50 text-sm resize-none" />
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="bg-[#D4AF37] hover:bg-[#b8962f] disabled:opacity-60 text-black font-bold px-10 py-4 rounded-xl flex items-center justify-center transition-all hover:shadow-lg"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                  <Send className="w-5 h-5 ml-2" />
                </button>
                {status === 'error' && (
                  <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                )}
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;