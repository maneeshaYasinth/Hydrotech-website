import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Applications from './components/Applications'
import WhyChoose from './components/WhyChoose'
import Challenges from './components/Challenges'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {

  const [theme, setTheme] = React.useState(localStorage.getItem('theme') ?
    localStorage.getItem('theme') : 'light');

  return (
    <div className='dark:bg-gray-950 relative'>
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Services />
      <Applications />
      <WhyChoose />
      <Challenges />
      <Teams />
      <ContactUs />
      <Footer theme={theme} />
    </div>
  )
}

export default App
