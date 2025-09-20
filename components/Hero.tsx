import React from 'react';
import LetterGlitch from './LetterGlitch';
import GlassSurface from './GlassSurface';
import './GlassSurface.css';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <LetterGlitch
  effectOptions={{
    onSpeedUp: () => { },
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [400 * 0.03, 400 * 0.2],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0xFFFFFF,
      brokenLines: 0xFFFFFF,
      leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
      rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
      sticks: 0x03B3C3,
    }
  }}
/>
        
      </div>
      <div className="relative z-10 text-center p-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-poppins font-black uppercase tracking-widest text-white drop-shadow-lg">
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