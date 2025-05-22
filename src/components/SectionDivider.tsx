import React from 'react';

type SectionDividerProps = {
  variant?: 'wave' | 'curve' | 'triangle' | 'zigzag';
  flip?: boolean;
  className?: string;
  fillColor?: string;
};

const SectionDivider: React.FC<SectionDividerProps> = ({
  variant = 'wave',
  flip = false,
  className = '',
  fillColor = 'fill-white dark:fill-gray-900',
}) => {
  const dividers = {
    wave: (
      <svg
        className={`w-full h-24 ${className} ${flip ? 'rotate-180' : ''}`}
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          className={`${fillColor} animate-wave`}
          d="M0,50 C150,100 350,0 500,50 C650,100 850,0 1000,50 C1150,100 1350,0 1440,50 L1440,100 L0,100 Z"
        ></path>
      </svg>
    ),
    curve: (
      <svg
        className={`w-full h-24 ${className} ${flip ? 'rotate-180' : ''}`}
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          className={fillColor}
          d="M0,100 L0,0 C240,100 480,100 720,50 C960,0 1200,0 1440,100 L1440,100 Z"
        ></path>
      </svg>
    ),
    triangle: (
      <svg
        className={`w-full h-24 ${className} ${flip ? 'rotate-180' : ''}`}
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          className={fillColor}
          d="M0,100 L0,0 L1440,0 L1440,100 L720,50 Z"
        ></path>
      </svg>
    ),
    zigzag: (
      <svg
        className={`w-full h-24 ${className} ${flip ? 'rotate-180' : ''}`}
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          className={fillColor}
          d="M0,100 L0,0 L240,50 L480,0 L720,50 L960,0 L1200,50 L1440,0 L1440,100 Z"
        ></path>
      </svg>
    ),
  };

  return dividers[variant];
};

export default SectionDivider;
