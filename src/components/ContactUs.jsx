import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from 'motion/react'

const ContactUs = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        event.target.reset();
      } else {
        console.log("Error", data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div id='contact-us' className='section-gray py-20 sm:py-28 px-4 sm:px-8 lg:px-16 xl:px-28'>
      <div className='max-w-4xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-center mb-6'>
          <span className='text-secondary font-semibold text-sm uppercase tracking-widest'>Get In Touch</span>
        </motion.div>

        <div className='flex flex-col items-center mb-12'>
          <Title title='Contact Us Today' desc='Any questions or concerns you may have will be answered here. Reach out to us if you seek professional assistance.' />
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          onSubmit={onSubmit}
          className='bg-white dark:bg-dark-card rounded-2xl p-8 sm:p-10 border border-gray-100 dark:border-gray-800
            shadow-xl shadow-gray-200/50 dark:shadow-none'>

          <div className='grid sm:grid-cols-2 gap-5 sm:gap-6'>
            <div>
              <label className='block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300'>Your Name</label>
              <div className='flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-xl border 
                border-gray-200 dark:border-gray-700 focus-within:border-primary focus-within:ring-2 
                focus-within:ring-primary/20 transition-all px-4'>
                <img src={assets.person_icon} alt="" className='w-5 opacity-50' />
                <input name='name' type="text" placeholder='Enter your name'
                  className='w-full py-3.5 text-sm outline-none bg-transparent dark:text-white' required />
              </div>
            </div>

            <div>
              <label className='block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300'>Email Address</label>
              <div className='flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-xl border 
                border-gray-200 dark:border-gray-700 focus-within:border-primary focus-within:ring-2 
                focus-within:ring-primary/20 transition-all px-4'>
                <img src={assets.email_icon} alt="" className='w-5 opacity-50' />
                <input name='email' type="email" placeholder='Enter your email'
                  className='w-full py-3.5 text-sm outline-none bg-transparent dark:text-white' required />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label className='block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300'>Message</label>
              <textarea name='message' rows={6} placeholder='Tell us about your project...'
                className='w-full px-4 py-3.5 text-sm outline-none rounded-xl bg-gray-50 dark:bg-gray-800 
                  border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 
                  focus:ring-primary/20 transition-all dark:text-white resize-none' required />
            </div>

            <div className='sm:col-span-2 flex justify-center pt-2'>
              <button type='submit' className='flex items-center gap-2 bg-gradient-to-r from-primary to-[#0d7a9e] text-white 
                text-sm px-10 py-3.5 rounded-xl cursor-pointer font-semibold
                hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300'>
                Send Message
                <img src={assets.arrow_icon} alt="" className='w-4' />
              </button>
            </div>
          </div>
        </motion.form>
      </div>
    </div>
  )
}

export default ContactUs
