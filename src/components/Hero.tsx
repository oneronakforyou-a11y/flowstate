import React from 'react';
import LetterGlitch from './LetterGlitch';
import GlassSurface from './GlassSurface';
import './GlassSurface.css';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <LetterGlitch
          characters="駅線路列車信号運行管理"
          centerVignette={true}
          outerVignette={false}
          glitchColors={['#4f46e5', '#818cf8', '#a5b4fc']}
        />
      </div>
      <div className="relative z-10 text-center p-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-widest text-white drop-shadow-lg">
          FlowState-Rail
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
          AI-Powered Decision Support for Optimizing Indian Railways Traffic Flow.
        </p>
        <button className="mt-8 bg-transparent border-none p-0 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-indigo-500 rounded-full">
          <GlassSurface
            width={240}
            height={60}
            borderRadius={30}
            className="transition-all duration-300 ease-in-out group-hover:scale-105"
            backgroundOpacity={0.1}
            blur={5}
          >
            <span className="text-lg font-semibold text-white">
              Launch Dashboard
            </span>
          </GlassSurface>
        </button>
      </div>
    </section>
  );
};

export default Hero;
