import React from 'react'
import { motion, useScroll, useSpring, useTransform } from "motion/react";

const ParallaxBackground = () => {
  const {scrollYProgress} = useScroll();
  const x = useSpring(scrollYProgress, {damping: 50});
  const mountain1Y = useTransform(x, [0, 0.5], ["-10%", "1%"]);
  const planetsX = useTransform(x, [0, 0.5], ["-8%", "30%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "0%"]);
  return (
    <section className="absolute inset-0 bg-black/40">
        <div className='relative h-screen overflow-y-hidden'>
            {/* Background Sky */}
            <div className='absolute inset-0 w-full h-screen -z-50' 
            style={{
                backgroundImage: 'url(/assets/sky.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
            }}
            />
            {/* Mountain 1 */}
            <motion.div className='absolute inset-0 -z-30' 
            style={{
                backgroundImage: 'url(/assets/mount-1.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                y: mountain1Y,
            }}
            />
            {/* Planets */}
            <motion.div className='absolute inset-0 -z-50' 
            style={{
                backgroundImage: 'url(/assets/planets.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                y:planetsX,
            }}
            />
            {/* Mountain 2 */}
            <motion.div className='absolute inset-0 -z-20' 
            style={{
                backgroundImage: 'url(/assets/mount-2.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                y:mountain2Y,
            }}
            />
        </div>
    </section>
  )
}

export default ParallaxBackground