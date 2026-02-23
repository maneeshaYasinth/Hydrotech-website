import React from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'
import { motion } from "motion/react"

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const mobileClasses = sidebarOpen ? 'max-md:w-72 max-md:pl-8' : 'max-md:w-0 overflow-hidden';

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`flex justify-between items-center px-4 sm:px-8 lg:px-16 xl:px-28 py-3 sticky top-0 z-50
      transition-all duration-300 ${scrolled
          ? 'bg-white/95 dark:bg-gray-950/95 shadow-lg shadow-black/5 backdrop-blur-xl'
          : 'bg-white dark:bg-gray-950'}`}>

      {/* Logo */}
      <a href="#" className='flex items-center gap-2'>
        <div className='w-9 h-9 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0'>
          <span className='text-white font-bold text-base font-[Outfit]'>H</span>
        </div>
        <span className='text-lg sm:text-xl font-bold text-primary dark:text-white font-[Outfit] tracking-tight leading-tight'>
          Hydrotech Core<span className='hidden sm:inline text-xs font-normal text-gray-400 dark:text-gray-500 ml-1'>Pvt Ltd</span>
        </span>
      </a>

      {/* Desktop Nav Links */}
      <div className={`text-gray-600 dark:text-gray-300 text-sm font-medium ${mobileClasses} max-md:fixed top-0 bottom-0 right-0
        max-md:min-h-screen max-md:h-full max-md:flex-col max-md:bg-gray-900 max-md:text-white
        max-md:pt-20 max-md:z-50 flex md:items-center gap-1 transition-all duration-300`}>

        <img src={assets.close_icon} alt="" className='w-5
          absolute right-5 top-5 md:hidden cursor-pointer' onClick={() => setSidebarOpen(false)} />

        <a onClick={() => setSidebarOpen(false)} href="#"
          className='px-4 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all max-md:px-4 max-md:py-3'>Home</a>
        <a onClick={() => setSidebarOpen(false)} href="#service"
          className='px-4 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all max-md:px-4 max-md:py-3'>Services</a>
        <a onClick={() => setSidebarOpen(false)} href="#applications"
          className='px-4 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all max-md:px-4 max-md:py-3'>Solutions</a>
        <a onClick={() => setSidebarOpen(false)} href="#team"
          className='px-4 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all max-md:px-4 max-md:py-3'>About</a>
        <a onClick={() => setSidebarOpen(false)} href="#contact-us"
          className='px-4 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all max-md:px-4 max-md:py-3'>Contact</a>
      </div>

      <div className='flex items-center gap-3'>
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt=""
          onClick={() => setSidebarOpen(true)} className='w-7 md:hidden cursor-pointer' />

        <a href="#contact-us" className='text-sm max-md:hidden flex
          items-center gap-2 bg-gradient-to-r from-primary to-[#0d7a9e] text-white px-6 py-2.5 rounded-lg
          cursor-pointer hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300 font-semibold'>
          Get Quotation <img src={assets.arrow_icon} width={14} alt="" />
        </a>
      </div>
    </motion.nav>
  )
}

export default Navbar
