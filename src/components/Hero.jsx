import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`
          ${styles.paddingX}
          absolute top-32 max-w-7xl mx-auto flex items-start gap-5
        `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-violet-600'></div>
          <div className='w-1 sm:h-80 h-40 rounded-full bg-gradient-to-b from-violet-600 to-transparent'></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I&apos;m <span className='text-violet-600'>Arpan</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>Transforming Ideas into Engaging Websites<br className='sm:block hidden'/>for Businesses, Portfolios, and Beyond</p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute sm:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='h-16 rounded-3xl border-4 border-gray-400 p-2'>
            <motion.div
              animate={{
                y: [0,24,0]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-gray-400'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero