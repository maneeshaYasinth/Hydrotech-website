import React from 'react'
import Title from './Title'
import { motion } from "motion/react"

const Teams = () => {
  return (
    <div id='team' className='py-20 sm:py-28 px-4 sm:px-8 lg:px-16 xl:px-28'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-center mb-6'>
          <span className='text-secondary font-semibold text-sm uppercase tracking-widest'>About Us</span>
        </motion.div>

        <div className='flex flex-col items-center mb-14'>
          <Title title='Who We Are' desc='Transforming traditional water infrastructure into intelligent, connected systems.' />
        </div>

        {/* Company description */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h3 className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6'>
              Technology-Driven Water Management
            </h3>
            <p className='text-gray-500 dark:text-gray-400 leading-relaxed mb-5'>
              Hydrotech Core Pvt Ltd is a technology-driven company with expertise across multiple domains including smart metering,
              IoT solutions, and sustainable water management. We combine deep technical knowledge with a passion for
              creating meaningful impact through innovation.
            </p>
            <p className='text-gray-500 dark:text-gray-400 leading-relaxed mb-6'>
              With a focus on next-generation smart metering systems, we help utilities and property managers
              reduce costs, improve accuracy, and promote water conservation. Our solutions are designed to be
              easy to install, maintain, and scale.
            </p>
            <a href="#contact-us" className='inline-flex items-center gap-2 bg-gradient-to-r from-primary to-[#0d7a9e] 
              text-white px-6 py-3 rounded-lg font-semibold text-sm 
              hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300'>
              Get In Touch
              <svg className='w-4 h-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              </svg>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='grid grid-cols-2 gap-5'>
            <div className='bg-white dark:bg-dark-card rounded-2xl p-6 border border-gray-100 dark:border-gray-800 text-center
              hover:shadow-lg hover:shadow-primary/5 transition-all'>
              <div className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2'>50+</div>
              <p className='text-sm text-gray-500 dark:text-gray-400'>Projects Completed</p>
            </div>
            <div className='bg-white dark:bg-dark-card rounded-2xl p-6 border border-gray-100 dark:border-gray-800 text-center
              hover:shadow-lg hover:shadow-primary/5 transition-all'>
              <div className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2'>99%</div>
              <p className='text-sm text-gray-500 dark:text-gray-400'>Uptime Guarantee</p>
            </div>
            <div className='bg-white dark:bg-dark-card rounded-2xl p-6 border border-gray-100 dark:border-gray-800 text-center
              hover:shadow-lg hover:shadow-primary/5 transition-all'>
              <div className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2'>24/7</div>
              <p className='text-sm text-gray-500 dark:text-gray-400'>Support Available</p>
            </div>
            <div className='bg-white dark:bg-dark-card rounded-2xl p-6 border border-gray-100 dark:border-gray-800 text-center
              hover:shadow-lg hover:shadow-primary/5 transition-all'>
              <div className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2'>16yr</div>
              <p className='text-sm text-gray-500 dark:text-gray-400'>Meter Battery Life</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Teams
