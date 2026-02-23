import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"

const Services = () => {
  const servicesdata = [
    {
      title: 'Smart Water Meter',
      description:
        'Our smart water meter delivers accurate, real-time measurement of water consumption. It enables continuous monitoring, reduces manual readings, and provides reliable data to improve efficiency and transparency in water usage.',
      icon: assets.ads_icon,
    },
    {
      title: 'Remote Water Valve',
      description:
        'The remote water valve allows secure control of water flow using Wi-Fi or 4G connectivity. Utilities and users can operate, shut off, or regulate water supply remotely, improving response time, safety, and operational control.',
      icon: assets.content_icon,
    },
    {
      title: 'Water Purity Sensors',
      description:
        'Our real-time water purity sensors continuously monitor key quality parameters. They provide instant alerts and live data to ensure safe water standards, early contamination detection, and improved public health protection.',
      icon: assets.marketing_icon,
    },
    {
      title: 'Industrial Data Logger',
      description:
        'Designed for industrial environments, our data logger captures and stores critical water and system data with high reliability. It enables long-term analysis, compliance reporting, and smarter operational decision-making.',
      icon: assets.social_icon,
    },
  ]

  return (
    <div id='service' className='relative py-20 sm:py-28 px-4 sm:px-8 lg:px-16 xl:px-28'>
      {/* Background decoration */}
      <div className='absolute top-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2'></div>

      <div className='relative flex flex-col items-center gap-12 text-gray-800 dark:text-white'>
        <div className='text-center max-w-2xl'>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className='text-secondary font-semibold text-sm uppercase tracking-widest'>
            Our Products
          </motion.span>
          <Title title='Our Smart Water System' desc='From strategy to execution, we craft
          digital solutions for water supply management'/>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl'>
          {servicesdata.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
