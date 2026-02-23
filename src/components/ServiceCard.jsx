import React from 'react'
import { motion } from "motion/react"

const ServiceCard = ({ service, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className='group relative bg-white dark:bg-dark-card rounded-2xl p-8 border border-gray-100 dark:border-gray-800
        hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-2 transition-all duration-500 text-center'>

            {/* Gradient top border on hover */}
            <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-t-2xl 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

            {/* Icon */}
            <div className='w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-secondary/10 
        dark:from-primary/20 dark:to-secondary/20 rounded-xl flex items-center justify-center
        group-hover:from-primary/20 group-hover:to-secondary/20 transition-all'>
                <img src={service.icon} alt="" className='w-8 h-8' />
            </div>

            {/* Content */}
            <h3 className='font-bold text-lg mb-3 text-gray-900 dark:text-white'>{service.title}</h3>
            <p className='text-sm text-gray-500 dark:text-gray-400 leading-relaxed'>{service.description}</p>

            {/* Learn More link */}
            <div className='mt-5'>
                <span className='text-primary dark:text-secondary text-sm font-semibold inline-flex items-center gap-1
          group-hover:gap-2 transition-all cursor-pointer'>
                    Learn More
                    <svg className='w-4 h-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                    </svg>
                </span>
            </div>
        </motion.div>
    )
}

export default ServiceCard
