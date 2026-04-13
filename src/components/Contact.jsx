import { useState } from 'react'

const contactItems = [
  {
    label: 'Phone',
    val: '+254 718 954 599  ·  +254 729 622 797',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    val: 'info@sunshinerealestate.com',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'Website',
    val: 'www.sunshinerealestate.com',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    label: 'Office',
    val: '3rd Floor, Ameey Homes, Empress Office Suits, Jalaram Rd, Westlands, Nairobi',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
]

const emptyForm = { name: '', email: '', phone: '', purpose: 'buying', message: '' }

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [sent, setSent] = useState(false)
  const [open, setOpen] = useState(false)

  const set = field => e => setForm(p => ({ ...p, [field]: e.target.value }))

  const handle = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setForm(emptyForm)
      setOpen(false)
    }, 3500)
  }

  const close = () => {
    setOpen(false)
    setSent(false)
    setForm(emptyForm)
  }

  return (
    <section id="contact" className="bg-[#0d1b2a] py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative glow */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C9A84C, transparent 70%)', transform: 'translate(30%, 30%)' }}
      />
      <div
        className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C9A84C, transparent 70%)', transform: 'translate(-40%, -40%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: info ── */}
          <div>
            <h2 className="font-display text-3xl lg:text-4xl text-white font-semibold mb-5 leading-tight">
              Ready to find your<br/>
              <em className="text-[#C9A84C] not-italic">dream property?</em>
            </h2>
            <p className="font-body text-white/50 text-base leading-relaxed mb-10">
              Whether you're buying, selling, or investing — our team is here to guide you every step of the way. Reach out today.
            </p>

            <div className="flex flex-col gap-5 mb-10">
              {contactItems.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-lg bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center flex-shrink-0 text-[#C9A84C] mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-body text-[10px] uppercase tracking-wider text-white/30 mb-1">{item.label}</p>
                    <p className="font-body text-white/65 text-sm leading-relaxed">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA to open form */}
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-3 bg-[#C9A84C] text-[#0d1b2a] font-semibold font-body px-7 py-3.5 rounded-xl hover:bg-[#e8c96a] transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#C9A84C]/20"
            >
              Send an enquiry
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </div>

          {/* ── Right: map / visual placeholder ── */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full aspect-square max-w-sm bg-[#152234] rounded-3xl border border-white/8 flex flex-col items-center justify-center gap-4 relative overflow-hidden">
              {/* Decorative rings */}
              <div className="absolute w-64 h-64 rounded-full border border-[#C9A84C]/10"/>
              <div className="absolute w-44 h-44 rounded-full border border-[#C9A84C]/15"/>
              <div className="absolute w-24 h-24 rounded-full border border-[#C9A84C]/20"/>
              <div className="w-12 h-12 rounded-full bg-[#C9A84C] flex items-center justify-center z-10 shadow-lg shadow-[#C9A84C]/30">
                <svg className="w-5 h-5 text-[#0d1b2a]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="z-10 text-center">
                <p className="font-display text-white font-semibold text-base">Westlands, Nairobi</p>
                <p className="font-body text-white/35 text-xs mt-1">3rd Floor, Ameey Homes</p>
                <p className="font-body text-white/35 text-xs">Empress Office Suits, Jalaram Rd</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Modal overlay ── */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={e => { if (e.target === e.currentTarget) close() }}
        >
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-fade-up">

            {/* Modal header */}
            <div className="flex items-center justify-between px-7 pt-7 pb-5 border-b border-gray-100">
              <div>
                <h3 className="font-display text-xl text-[#0d1b2a] font-semibold">Send an enquiry</h3>
                <p className="font-body text-gray-400 text-xs mt-0.5">We'll get back to you within 24 hours</p>
              </div>
              <button
                onClick={close}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors flex-shrink-0"
              >
                <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Modal body */}
            <div className="px-7 py-6">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#C9A84C]/15 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-[#C9A84C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <p className="font-display text-xl text-[#0d1b2a] font-semibold mb-2">Enquiry sent!</p>
                  <p className="font-body text-gray-400 text-sm">Thank you. We'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handle} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-body text-[11px] text-gray-400 uppercase tracking-wider font-medium">Full name *</label>
                      <input
                        required
                        value={form.name}
                        onChange={set('name')}
                        placeholder="Your full name"
                        className="border border-gray-200 rounded-xl px-4 py-2.5 font-body text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/15 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-body text-[11px] text-gray-400 uppercase tracking-wider font-medium">Phone</label>
                      <input
                        value={form.phone}
                        onChange={set('phone')}
                        placeholder="+254 ..."
                        className="border border-gray-200 rounded-xl px-4 py-2.5 font-body text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/15 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-body text-[11px] text-gray-400 uppercase tracking-wider font-medium">Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={set('email')}
                      placeholder="your@email.com"
                      className="border border-gray-200 rounded-xl px-4 py-2.5 font-body text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/15 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-body text-[11px] text-gray-400 uppercase tracking-wider font-medium">I'm looking to</label>
                    <select
                      value={form.purpose}
                      onChange={set('purpose')}
                      className="border border-gray-200 rounded-xl px-4 py-2.5 font-body text-sm text-gray-700 bg-white focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/15 transition-all cursor-pointer"
                    >
                      <option value="buying">Buy a property</option>
                      <option value="renting">Rent a property</option>
                      <option value="selling">Sell my property</option>
                      <option value="management">Property management</option>
                      <option value="investing">Investment advisory</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-body text-[11px] text-gray-400 uppercase tracking-wider font-medium">Message</label>
                    <textarea
                      value={form.message}
                      onChange={set('message')}
                      placeholder="Tell us more about what you're looking for..."
                      rows={3}
                      className="border border-gray-200 rounded-xl px-4 py-2.5 font-body text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/15 transition-all resize-none"
                    />
                  </div>

                  <div className="flex gap-3 pt-1">
                    <button
                      type="button"
                      onClick={close}
                      className="flex-1 border border-gray-200 text-gray-500 font-body font-medium py-3 rounded-xl hover:bg-gray-50 transition-colors text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-2 flex-[2] bg-[#C9A84C] text-[#0d1b2a] font-semibold font-body py-3 rounded-xl hover:bg-[#e8c96a] transition-all duration-200 shadow-lg shadow-[#C9A84C]/20 text-sm"
                    >
                      Send enquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}