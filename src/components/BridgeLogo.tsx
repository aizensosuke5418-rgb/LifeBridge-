import React from 'react';

interface BridgeLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BridgeLogo: React.FC<BridgeLogoProps> = ({ className = '', size = 'md' }) => {
  const dimensions = size === 'sm' ? 'w-6 h-6' : size === 'lg' ? 'w-10 h-10' : 'w-8 h-8';

  return (
    <div className={`relative flex items-center justify-center ${dimensions} ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="bridgeGradient" x1="4" y1="44" x2="44" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3678F6" />
            <stop offset="0.6" stopColor="#42DCC5" />
            <stop offset="1" stopColor="#60A5FA" />
          </linearGradient>
          <linearGradient id="pillarGradient" x1="18" y1="12" x2="18" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60A5FA" />
            <stop offset="1" stopColor="#1E3A8A" />
          </linearGradient>
        </defs>

        {/* Foundation Base */}
        <path d="M4 42H44" stroke="#1E3A8A" strokeWidth="2.5" strokeLinecap="round" />

        {/* Central Gateway Pillars */}
        <path d="M16 42V14C16 12.8954 16.8954 12 18 12H20C21.1046 12 22 12.8954 22 14V42" stroke="url(#pillarGradient)" strokeWidth="2.5" />
        <path d="M26 42V14C26 12.8954 26.8954 12 28 12H30C31.1046 12 32 12.8954 32 14V42" stroke="url(#pillarGradient)" strokeWidth="2.5" />
        
        {/* Arch Connector Head */}
        <path d="M17 18H31" stroke="#42DCC5" strokeWidth="2" strokeLinecap="round" />

        {/* Suspension Cable Arcs */}
        <path
          d="M4 36C12 22 20 16 24 16C28 16 36 22 44 36"
          stroke="url(#bridgeGradient)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Deck Roadway Span */}
        <path
          d="M6 34C16 30 32 30 42 34"
          stroke="#42DCC5"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Suspension Vertical Struts */}
        <line x1="10" y1="34" x2="10" y2="38" stroke="#3678F6" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="38" y1="34" x2="38" y2="38" stroke="#3678F6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
};
