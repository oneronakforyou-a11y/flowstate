import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './src/components/Service';


const App: React.FC = () => {
  const { scrollY } = useScroll();

  // Transform values for Hero section (fade out and scale down)
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.8]);
  const heroY = useTransform(scrollY, [0, 400], [0, -100]);

  // Transform values for Services section (fade in and move up)
  const servicesOpacity = useTransform(scrollY, [200, 600], [0, 1]);
  const servicesY = useTransform(scrollY, [200, 600], [100, 0]);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />
      <main className="relative">
        <motion.div
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY,
            backgroundColor: '#000',
          }}
          className="sticky top-0 z-10"
        >
          <Hero />
        </motion.div>

        <motion.div
          style={{
            opacity: servicesOpacity,
            y: servicesY,
            backgroundColor: '#000',
          }}
          className="relative z-20 min-h-screen flex items-center justify-center"
        >
          <Services />
        </motion.div>
      </main>
      <footer className="w-full bg-gradient-to-r from-black via-gray-900 to-black text-white py-8 px-4 border-t border-gray-800 mt-8">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
          <h2 className="text-xl font-bold tracking-wide mb-2 text-cyan-400">Meet the Team</h2>
          <div className="flex flex-wrap justify-center gap-4 text-base md:text-lg font-medium">
            <span className="px-4 py-2 rounded-full bg-gray-800/70 border border-cyan-700">Nimit <span className="text-cyan-400 font-normal">Backend</span></span>
            <span className="px-4 py-2 rounded-full bg-gray-800/70 border border-cyan-700">Yash <span className="text-cyan-400 font-normal">Backend</span></span>
            <span className="px-4 py-2 rounded-full bg-gray-800/70 border border-pink-700">Sampurn <span className="text-pink-400 font-normal">Product Development</span></span>
            <span className="px-4 py-2 rounded-full bg-gray-800/70 border border-blue-700">Ronak <span className="text-blue-400 font-normal">Frontend</span></span>
            <span className="px-4 py-2 rounded-full bg-gray-800/70 border border-teal-700">Mahir <span className="text-teal-400 font-normal">Research</span></span>
            <span className="px-4 py-2 rounded-full bg-gray-800/70 border border-green-700">Sejal <span className="text-green-400 font-normal">Data & Content</span></span>
          </div>
          <div className="w-full border-t border-gray-700 my-6"></div>
          <h3 className="text-lg font-semibold text-cyan-300 mb-1">SIH Problem Statement #22</h3>
          <p className="text-gray-300 text-center max-w-xl text-base md:text-lg">
            <span className="font-semibold text-white">Problem Statement 22:</span> Maximizing Section Throughput Using Al-Powered Precise Train Traffic Control
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;