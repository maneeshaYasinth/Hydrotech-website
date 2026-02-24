import React from 'react'
import Title from './Title'
import { motion } from "motion/react"

const features = [
  { icon: '💧', label: 'Smart Metering' },
  { icon: '🌐', label: 'IoT Solutions' },
  { icon: '♻️', label: 'Water Conservation' },
  { icon: '📊', label: 'Data Analytics' },
]

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

        {/* Styled Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='relative overflow-hidden rounded-3xl border border-primary/20 dark:border-primary/30
            bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/40
            dark:from-gray-900 dark:via-blue-950/20 dark:to-gray-900
            shadow-xl shadow-primary/5 p-8 sm:p-12'>

          {/* Decorative background circles */}
          <div className='absolute -top-16 -right-16 w-64 h-64 rounded-full
            bg-gradient-to-br from-primary/10 to-secondary/10 blur-3xl pointer-events-none' />
          <div className='absolute -bottom-16 -left-16 w-48 h-48 rounded-full
            bg-gradient-to-tr from-secondary/10 to-primary/5 blur-2xl pointer-events-none' />

          {/* Left accent bar */}
          <div className='absolute left-0 top-8 bottom-8 w-1 rounded-full
            bg-gradient-to-b from-primary via-secondary to-primary/30' />

          <div className='relative'>
            {/* Heading */}
            <h3 className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight'>
              Technology-Driven
              <span className='block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
                Water Management
              </span>
            </h3>

            {/* Feature pills */}
            <div className='flex flex-wrap gap-2 mb-6'>
              {features.map((f, i) => (
                <span key={i}
                  className='inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full
                    bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-300
                    border border-primary/20 dark:border-primary/30'>
                  <span>{f.icon}</span>{f.label}
                </span>
              ))}
            </div>

            {/* Body text */}
            <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-[15px]'>
              Hydrotech Core Pvt Ltd is a technology-driven company with expertise across multiple domains
              including smart metering, IoT solutions, and sustainable water management. We combine deep
              technical knowledge with a passion for creating meaningful impact through innovation.
            </p>
            <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-[15px]'>
              With a focus on next-generation smart metering systems, we help utilities and property managers
              reduce costs, improve accuracy, and promote water conservation. Our solutions are designed to be
              easy to install, maintain, and scale.
            </p>

            {/* CTA */}
            <a href="#contact-us"
              className='inline-flex items-center gap-2 bg-gradient-to-r from-primary to-[#0d7a9e]
                text-white px-7 py-3 rounded-xl font-semibold text-sm
                hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300'>
              Get In Touch
              <svg className='w-4 h-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              </svg>
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Teams
