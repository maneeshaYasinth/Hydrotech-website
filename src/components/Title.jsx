import React from 'react'
import { motion } from "motion/react"

const Title = ({ title, desc }) => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-3'>
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className='max-w-lg text-center text-gray-500
        dark:text-gray-400 mb-6 leading-relaxed'>
        {desc}
      </motion.p>
    </>
  )
}

export default Title
