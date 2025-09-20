import React, { useRef } from 'react';
// 1. REMOVE useAnimation and useInView from the import
import { motion } from 'framer-motion';
import Orb from './Orb';

// Animation variants are the same
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};


const cardVariants = {
  hidden: { opacity: 0, y: 75 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    },
  },
};

const Services: React.FC = () => {

  
  return (
    <section id="services" className="relative py-20 px-4 bg-black z-10">
      {/* 3. MODIFY the main motion.div props */}
      <motion.div
        // REMOVE ref={ref} and animate={controls}

        // KEEP initial and variants
        initial="hidden"
        variants={containerVariants}

        // ADD whileInView and viewport
        whileInView="visible" // Animate to the "visible" state when the element is in view
        viewport={{ once: true, amount: 0.2 }} // This is the replacement for triggerOnce and threshold
        
        className="container mx-auto text-center"
      >
        <motion.h2 variants={cardVariants} className="text-4xl font-bold mb-4">
          What We Offer
        </motion.h2>

        <motion.p variants={cardVariants} className="text-gray-400 mb-12 text-lg">
          Innovative solutions powered by modern technology.
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {/* Service Card 1 */}
          <motion.div
            variants={cardVariants}
            className="bg-gray-800/50 p-8 rounded-xl flex flex-col items-center border border-transparent hover:border-blue-500 transition-colors duration-300 min-h-[22rem] shadow-xl"
          >
            <div className="flex-1 w-full flex flex-col items-center justify-center">
              <h3 className="text-3xl md:text-4xl font-extrabold text-cyan-400 mb-2 text-center select-none">AI Optimization</h3>
              <p className="text-base md:text-lg text-white/90 text-center font-medium select-none">Harness the power of artificial intelligence to streamline processes, enhance efficiency, and unlock new possibilities for your business or project. Our solutions are designed to adapt, learn, and optimize for the best outcomes.</p>
            </div>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div
            variants={cardVariants}
            className="bg-gray-800/50 p-8 rounded-xl flex flex-col items-center border border-transparent hover:border-pink-500 transition-colors duration-300 min-h-[22rem] shadow-xl"
          >
            <div className="flex-1 w-full flex flex-col items-center justify-center">
              <h3 className="text-3xl md:text-4xl font-extrabold text-pink-400 mb-2 text-center select-none">Safety First Approach</h3>
              <p className="text-base md:text-lg text-white/90 text-center font-medium select-none">Safety rules, signaling systems, platform & track availability are prioritized to ensure secure and reliable operations at all times.</p>
            </div>
          </motion.div>

          {/* Service Card 3 */}
          <motion.div
            variants={cardVariants}
            className="bg-gray-800/50 p-8 rounded-xl flex flex-col items-center border border-transparent hover:border-teal-500 transition-colors duration-300 min-h-[22rem] shadow-xl"
          >
            <div className="flex-1 w-full flex flex-col items-center justify-center">
              <h3 className="text-3xl md:text-4xl font-extrabold text-teal-400 mb-2 text-center select-none">Everything Accounted</h3>
              <p className="text-base md:text-lg text-white/90 text-center font-medium select-none">Includes a re-optimization engine that adapts quickly during disruptions (delays, breakdowns, weather) so nothing is left behind.</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;