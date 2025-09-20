// Services.tsx
import React, { useState, useEffect } from 'react';

interface ServicesProps {
  scrollProgress: number;
}

const Services: React.FC<ServicesProps> = ({ scrollProgress }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when the section is about to be in view
    if (scrollProgress > 0.5 && !isVisible) {
      setIsVisible(true);
    }
    // Optional: Reset animation if you scroll back up
    if (scrollProgress < 0.5 && isVisible) {
      setIsVisible(false);
    }
  }, [scrollProgress, isVisible]);

  return (
    <>
      <h2
        className={`text-4xl font-orbit-tron mb-10 transition-opacity duration-1000 ease-in ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Our Services
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl w-full">
        <div
          className={`p-6 bg-gray-900 rounded-2xl shadow-lg transition-all duration-1000 ease-in-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0ms' }}
        >
          <h3 className="text-xl font-bold mb-2">🚀 Fast Deployment</h3>
          <p className="text-gray-300">
            We deliver hyperspeed-ready solutions for modern businesses.
          </p>
        </div>
        <div
          className={`p-6 bg-gray-900 rounded-2xl shadow-lg transition-all duration-1000 ease-in-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <h3 className="text-xl font-bold mb-2">⚡ Performance</h3>
          <p className="text-gray-300">
            Optimized code and futuristic designs that scale smoothly.
          </p>
        </div>
        <div
          className={`p-6 bg-gray-900 rounded-2xl shadow-lg transition-all duration-1000 ease-in-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <h3 className="text-xl font-bold mb-2">🌌 Innovation</h3>
          <p className="text-gray-300">
            Cutting-edge graphics and UI inspired by hyperspace travel.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;