import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Properties from './components/Properties'
import About from './components/About'
import Services from './components/Services'
import ContactUs from './components/Contact'
import Footer from './components/Footer'
import AboutUs from './components/About'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* This pushes the content down so the navbar doesn't cover it */}
      <Hero id='home' />
      <AboutUs/>
      
      {/* Other components */}
    
      <Properties />
      {/* <About />
      <Services />
      <Contact />
      <Footer /> */}
      <ContactUs/>
      <Footer />
    </div>
  )
}
