import React from 'react'
import {FlipWords} from "./FlipWords"
import { motion } from 'motion/react'
import { Highlight } from './Highlight'

const HeroText = () => {
  const words=["Designer", "Builder", "Leader", "Competitor", "Collaborator", "Learner"]
  const variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
  }
  return (
    <div className='z-10 mt-20
    text-center md:ml-10 md:mt-27 md:text-left rounded-3xl bg-clip-text'>
            <div className='flex-col hidden md:flex c-space'>
                <div className='flex flex-col items-start'>
                   <motion.p className="text-5xl font-medium text-neutral-300"
                   variants={variants}
                   initial="hidden"
                   animate="visible"
                   transition={{ delay: 0.8 }}
                   >
                It takes <span className="font-bold text-orange-400">Rix</span> to be a
                </motion.p>

                <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.2 }}>
                <FlipWords words={words}
                className="font-black text-white text-8xl"
                />
                </motion.div>
                
                <motion.p className='text-xs font-medium text-neutral-400 mt-4'
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.5 }}
                >
                 <span className='font-style: italic'>The Astronaut can take you somewhere cool, <span className='font-bold text-neutral-300'>tap it!</span></span>
                </motion.p>
            
            </div>
        </div>
        {/* Mobile View */}
        <div className='flex-col flex space-y-6 md:hidden'>

            <div>
                <motion.p className='text-5xl font-normal text-neutral-300 mt-20 mb-2'
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.8 }}
                >
                    It takes 
                    <span className='text-orange-400 font-bold' > Rix </span> 
                    to be a
                </motion.p>
                <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.2 }}
                >
                    <FlipWords words={words}
                    className="font-bold text-white text-7xl"
                    />
                </motion.div>
                                <motion.p className='text-[10px] font-medium text-neutral-400 mt-4'
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.5 }}
                >
                 <span className='font-style: italic'>The Astronaut can take you somewhere cool, <span className='font-bold text-neutral-300'>tap it!</span></span>
                </motion.p>
            </div>
        </div>
    </div>
  )
}

export default HeroText