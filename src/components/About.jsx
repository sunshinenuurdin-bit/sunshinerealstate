const pillars = [
  {
    icon: (
      <svg className="w-5 h-5 text-[#C9A84C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Integrity first',
    desc: 'Transparent processes and honest advice on every transaction — no hidden fees or surprises.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#C9A84C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Client-centred service',
    desc: 'Tailored solutions for first-time buyers, seasoned investors, and sellers alike.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#C9A84C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Efficient transactions',
    desc: 'Expert market knowledge to ensure smooth, timely closings from start to finish.',
  },
]

const stats = [
  { n: '500+', l: 'Properties' },
  { n: '12+',  l: 'Years active' },
  { n: '98%',  l: 'Satisfaction' },
  { n: '3',    l: 'Specialities' },
]

const contactItems = [
  {
    icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    text: '3rd Floor, Ameey Homes, Empress Office Suits, Jalaram Rd, Westlands',
  },
  {
    icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/></svg>,
    text: '+254 718 954 599  ·  +254 729 622 797',
  },
  {
    icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    text: 'info@sunshinerealestate.com',
  },
  {
    icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    text: 'www.sunshinerealestate.com',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Badge only */}
        <div className="flex justify-center mb-10">
          <span className="inline-block bg-[#C9A84C]/10 text-[#9d7d2e] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-[#C9A84C]/20">
            About us
          </span>
        </div>

        {/* Two equal columns */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* Left */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 flex flex-col">
            <h2 className="font-display text-2xl lg:text-3xl text-[#0d1b2a] font-semibold leading-tight mb-4">
              A name you can trust<br />in Kenyan real estate
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Sunshine Real Estate is a trusted and dynamic property solutions company dedicated to helping clients find their perfect homes, investment properties, and commercial spaces. With a strong commitment to integrity, professionalism, and customer satisfaction, we offer expert guidance throughout every step of the buying, selling, and renting process.
            </p>

            <div className="flex flex-col gap-6 flex-1">
              {pillars.map((p, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0d1b2a] mb-1">{p.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — director card */}
          <div className="bg-[#0d1b2a] rounded-3xl p-8 lg:p-10 relative overflow-hidden flex flex-col">
            <div
              className="absolute top-0 right-0 w-56 h-56 rounded-full pointer-events-none opacity-5"
              style={{ background: 'radial-gradient(circle, #C9A84C, transparent 70%)', transform: 'translate(30%, -30%)' }}
            />

            <div className="relative z-10 flex flex-col flex-1">
              {/* Director */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="w-14 h-14 rounded-full bg-[#C9A84C]/20 border-2 border-[#C9A84C]/40 flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-[#C9A84C] font-semibold text-lg">NA</span>
                </div>
                <div>
                  <p className="font-display text-white font-semibold text-lg leading-tight">Nuradin Askar Ibrahim</p>
                  <p className="text-white/40 text-sm mt-0.5">Director, Sunshine Real Estate</p>
                </div>
              </div>

              {/* Contact details */}
              <div className="flex flex-col gap-4 mb-8 flex-1">
                {contactItems.map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#C9A84C]">
                      {item.icon}
                    </div>
                    <p className="text-white/55 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3 mt-auto">
                {stats.map((s, i) => (
                  <div key={i} className="bg-white/5 border border-white/8 rounded-xl p-4">
                    <p className="font-display text-[#C9A84C] text-2xl font-semibold">{s.n}</p>
                    <p className="text-white/40 text-xs mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}