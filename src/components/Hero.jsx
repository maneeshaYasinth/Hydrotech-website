import React from 'react'
import assets from '../assets/assets'
import { company_logos } from '../assets/assets'
import { motion } from "motion/react"

const Hero = () => {
  return (
    <div id='hero' className='relative overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 dark:from-primary/10 dark:to-secondary/10'></div>

      <div className='relative flex flex-col items-center gap-8 py-16 sm:py-24 px-4 sm:px-8 lg:px-16 xl:px-28 
        text-center w-full'>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className='inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20
          text-primary dark:text-secondary px-5 py-2 rounded-full text-sm font-semibold'>
          <span className='w-2 h-2 bg-secondary rounded-full animate-pulse'></span>
          Trusted by Sri Lankan people
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className='text-4xl sm:text-5xl md:text-6xl xl:text-7xl 
          font-bold xl:leading-[1.15] max-w-5xl text-gray-900 dark:text-white'>
          Turning Imagination Into{' '}
          <span className='bg-gradient-to-r from-primary via-[#0d7a9e] to-secondary 
            bg-clip-text text-transparent'>Digital</span>{' '}
          Impact In Water Meters
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className='text-base sm:text-lg text-gray-500
            dark:text-gray-400 max-w-2xl leading-relaxed'>
          Hydrotech Core Pvt Ltd is a technology-driven company reimagining how water is managed in a digital world.
          We focus on transforming traditional water infrastructure into intelligent, connected systems that empower better decisions, reduce inefficiencies, and support long-term sustainability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          viewport={{ once: true }}
          className='flex flex-col sm:flex-row gap-4'>
          <a href="#contact-us" className='bg-gradient-to-r from-primary to-[#0d7a9e] text-white px-8 py-3.5 rounded-lg
            font-semibold text-sm hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300
            flex items-center gap-2'>
            Get Quotation <img src={assets.arrow_icon} width={14} alt="" />
          </a>
          <a href="/SmartH2O_brouchure .pdf" download="SmartH2O_Brochure.pdf" className='border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3.5 rounded-xl
            font-semibold text-sm hover:border-primary hover:text-primary transition-all duration-300 text-center'>
            Explore Products ⬇
          </a>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          viewport={{ once: true }}
          className='relative w-full max-w-5xl mt-8'>
          <div className='absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-2xl'></div>
          <img src={assets.hero_img} alt="Hydrotech Smart Water Systems" className="relative w-full rounded-2xl shadow-2xl shadow-primary/10" />
        </motion.div>



      </div>
    </div>
  )
}

export default Hero
