import React from 'react'
import assets from '../assets/assets'

const Footer = ({ theme }) => {
  return (
    <footer className='bg-gray-900 dark:bg-gray-950 text-gray-300 pt-8 sm:pt-10'>
      <div className='px-4 sm:px-8 lg:px-16 xl:px-28 max-w-7xl mx-auto'>
        {/* Footer Grid */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-6 sm:pb-8'>

          {/* Column 1: Company Info */}
          <div className='col-span-2 lg:col-span-1 space-y-3'>
            <a href="#" className='flex items-center gap-2'>
              <div className='w-7 h-7 bg-gradient-to-br from-primary to-secondary rounded-md flex items-center justify-center flex-shrink-0'>
                <span className='text-white font-bold text-xs'>H</span>
              </div>
              <span className='text-sm font-bold text-white font-[Outfit] tracking-tight'>Hydrotech Core <span className='text-[10px] font-normal text-gray-500'>Pvt Ltd</span></span>
            </a>
            <p className='text-xs leading-relaxed text-gray-400'>
              From strategy to execution, we save and manage water resources through intelligent, connected systems.
            </p>
            <a href="tel:+94768062867" className='flex items-center gap-1.5 text-xs text-gray-400 hover:text-secondary transition-colors'>
              <svg className='w-3.5 h-3.5 flex-shrink-0' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
              </svg>
              +94 76806 2867
            </a>
            <div className='flex gap-2'>
              <a href="#" className='w-7 h-7 bg-gray-800 hover:bg-primary rounded-md flex items-center justify-center transition-colors'>
                <img src={assets.facebook_icon} alt="Facebook" className='w-3 invert opacity-70' />
              </a>
              <a href="#" className='w-7 h-7 bg-gray-800 hover:bg-primary rounded-md flex items-center justify-center transition-colors'>
                <img src={assets.twitter_icon} alt="Twitter" className='w-3 invert opacity-70' />
              </a>
              <a href="#" className='w-7 h-7 bg-gray-800 hover:bg-primary rounded-md flex items-center justify-center transition-colors'>
                <img src={assets.instagram_icon} alt="Instagram" className='w-3 invert opacity-70' />
              </a>
              <a href="#" className='w-7 h-7 bg-gray-800 hover:bg-primary rounded-md flex items-center justify-center transition-colors'>
                <img src={assets.linkedin_icon} alt="LinkedIn" className='w-3 invert opacity-70' />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className='text-white font-semibold mb-3 text-xs uppercase tracking-wider'>Company</h4>
            <ul className='space-y-1.5 text-xs'>
              <li><a href="#hero" className='hover:text-secondary transition-colors'>Home</a></li>
              <li><a href="#service" className='hover:text-secondary transition-colors'>Products</a></li>
              <li><a href="#applications" className='hover:text-secondary transition-colors'>Solutions</a></li>
              <li><a href="#team" className='hover:text-secondary transition-colors'>About Us</a></li>
              <li><a href="#contact-us" className='hover:text-secondary transition-colors'>Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 className='text-white font-semibold mb-3 text-xs uppercase tracking-wider'>Products</h4>
            <ul className='space-y-1.5 text-xs'>
              <li><a href="#service" className='hover:text-secondary transition-colors'>Smart Water Meter</a></li>
              <li><a href="#service" className='hover:text-secondary transition-colors'>Remote Water Valve</a></li>
              <li><a href="#service" className='hover:text-secondary transition-colors'>Water Purity Sensors</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className='col-span-2 sm:col-span-1'>
            <h4 className='text-white font-semibold mb-3 text-xs uppercase tracking-wider'>Newsletter</h4>
            <p className='text-xs text-gray-400 mb-2'>Stay updated with the latest news.</p>
            <div className='flex gap-1.5'>
              <input type="email" placeholder='Your email'
                className='flex-1 min-w-0 px-3 py-2 text-xs outline-none rounded-md
                bg-gray-800 border border-gray-700 text-gray-200
                focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all' />
              <button className='bg-gradient-to-r from-primary to-secondary text-white rounded-md
                px-3 text-xs font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all'>
                Go
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className='border-gray-800 mb-3' />

        {/* Footer Bottom */}
        <div className='pb-4 text-[11px] text-gray-500 flex flex-col sm:flex-row justify-center sm:justify-between gap-2 text-center'>
          <p>© 2025 Hydrotech Core Pvt Ltd. All rights reserved.</p>
          <div className='flex gap-4 justify-center'>
            <a href="#" className='hover:text-secondary transition-colors'>Privacy Policy</a>
            <a href="#" className='hover:text-secondary transition-colors'>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
