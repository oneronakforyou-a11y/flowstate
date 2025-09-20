import React from 'react';
import GlassSurface from './GlassSurface';
import './GlassSurface.css';

const Header: React.FC = () => {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4 sm:max-w-lg md:max-w-2xl">
      <GlassSurface
        width="100%"
        height={64}
        borderRadius={9999}
        backgroundOpacity={0.05}
        blur={10}
        borderWidth={0.05}
        className="shadow-lg shadow-black/10"
      >
        <div className="flex items-center justify-between w-full px-6">
          <div className="flex items-center text-lg font-bold tracking-wider text-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-3 text-indigo-400"
            >
              <path
                d="M3 7H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 12H18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 17H14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            FlowState-Rail
          </div>
          <nav className="flex space-x-6 text-sm font-medium text-gray-300">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Docs
            </a>
          </nav>
        </div>
      </GlassSurface>
    </header>
  );
};

export default Header;
