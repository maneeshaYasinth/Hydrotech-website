import React from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react"

const applicationsData = [
    {
        title: 'Water Quality Monitoring',
        description: 'Our real-time water purity sensors continuously monitor key quality parameters. They provide instant alerts and live data to ensure safe water standards, early contamination detection, and improved public health protection. With our smart system, water quality data is transmitted directly to the management platform for seamless, round-the-clock monitoring.',
        image: assets.water_quality_img,
    },
    {
        title: 'Water Theft Detection',
        description: 'Advanced flow analysis and tamper detection technology help identify unauthorized water usage in real-time. Our intelligent system compares expected vs actual consumption patterns, alerting operators immediately to anomalies. This protects revenue, reduces non-revenue water losses, and ensures fair distribution across the network.',
        image: assets.water_theft_img,
    },
]

const Applications = () => {
    return (
        <div id='applications' className='section-gray py-20 sm:py-28 px-4 sm:px-8 lg:px-16 xl:px-28'>
            <div className='max-w-6xl mx-auto'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className='text-center mb-16'>
                    <span className='text-secondary font-semibold text-sm uppercase tracking-widest'>Solutions</span>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-4'>
                        Smart Water Applications
                    </h2>
                    <p className='text-gray-500 dark:text-gray-400 max-w-xl mx-auto'>
                        From residential to industrial settings, our solutions address every water management challenge
                    </p>
                </motion.div>

                <div className='flex flex-col gap-20 sm:gap-28'>
                    {applicationsData.map((app, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} 
                items-center gap-10 lg:gap-16`}>

                            {/* Image */}
                            <div className='lg:w-1/2 relative group flex justify-center'>
                                <div className={`absolute -inset-3 bg-gradient-to-br ${index % 2 === 0 ? 'from-primary/20 to-secondary/20' : 'from-secondary/20 to-primary/20'} 
                  rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                <img src={app.image} alt={app.title}
                                    className='relative max-h-[400px] rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-500 object-contain' />
                            </div>

                            {/* Text */}
                            <div className='lg:w-1/2'>
                                <h3 className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-5'>
                                    {app.title}
                                </h3>
                                <p className='text-gray-500 dark:text-gray-400 leading-relaxed mb-6'>
                                    {app.description}
                                </p>
                                <a href="#contact-us" className='inline-flex items-center gap-2 text-primary dark:text-secondary 
                  font-semibold text-sm hover:gap-3 transition-all'>
                                    Learn More
                                    <svg className='w-4 h-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Applications
