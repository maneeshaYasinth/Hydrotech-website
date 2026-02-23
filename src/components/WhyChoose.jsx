import React from 'react'
import { motion } from "motion/react"

const benefits = [
    {
        icon: '📡',
        title: 'Automatic Remote Data Collection',
        desc: 'Consumption data is captured and sent directly to our secure data management platform — no manual reads needed.',
    },
    {
        icon: '🔍',
        title: 'Early Leak Detection',
        desc: 'Even minimal flow irregularities are identified quickly, helping you address non-revenue water before it becomes costly.',
    },
    {
        icon: '⚙️',
        title: 'Minimal Maintenance',
        desc: 'Our ultrasonic meters have no moving parts, ensuring long-term accuracy and reduced servicing costs.',
    },
    {
        icon: '📊',
        title: 'Accurate Billing Data',
        desc: 'Precise consumption data can be integrated via API into your billing platform, enabling fair invoices and reducing disputes.',
    },
    {
        icon: '💰',
        title: 'Reduced Operating Costs',
        desc: 'Simplified installation, minimal maintenance, and advanced technology work together to lower operational expenses.',
    },
    {
        icon: '📱',
        title: 'Intuitive Mobile App',
        desc: 'Users can access usage data and get real-time alerts about leaks, freezes, and bursts directly on their phones.',
    },
    {
        icon: '✅',
        title: 'Regulatory Compliance',
        desc: 'Designed to meet strict water metering standards and regulations across different jurisdictions.',
    },
]

const WhyChoose = () => {
    return (
        <div className='py-20 sm:py-28 px-4 sm:px-8 lg:px-16 xl:px-28'>
            <div className='max-w-6xl mx-auto'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className='text-center mb-16'>
                    <span className='text-secondary font-semibold text-sm uppercase tracking-widest'>Why Us</span>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-4'>
                        Why Choose Hydrotech Core?
                    </h2>
                    <p className='text-gray-500 dark:text-gray-400 max-w-xl mx-auto'>
                        A complete, future-ready water metering solution built to simplify management, improve accuracy, and lower costs
                    </p>
                </motion.div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {benefits.map((b, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            className='flex gap-4 p-6 rounded-xl bg-white dark:bg-dark-card border border-gray-100 dark:border-gray-800
                hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300'>
                            <div className='text-3xl flex-shrink-0 mt-1'>{b.icon}</div>
                            <div>
                                <h4 className='font-bold text-gray-900 dark:text-white mb-2'>{b.title}</h4>
                                <p className='text-sm text-gray-500 dark:text-gray-400 leading-relaxed'>{b.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhyChoose
