import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark'; // 'light' = white logo for dark backgrounds, 'dark' = black logo for light backgrounds
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  className = '',
  showTagline = true,
  size = 'md',
}) => {
  const isLight = variant === 'light';

  // Responsive sizing classes
  const sizeClasses = {
    sm: 'h-8 md:h-9',
    md: 'h-10 md:h-12',
    lg: 'h-14 md:h-16',
  }[size];

  return (
    <div className={`inline-flex items-center group cursor-pointer select-none ${className}`}>
      <svg
        viewBox="0 0 520 170"
        className={`${sizeClasses} w-auto transition-transform duration-300 group-hover:scale-[1.02]`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="World Sports Group Logo"
      >
        <defs>
          {/* Orange Dynamic Ribbon Gradient */}
          <linearGradient id={`wsgSwooshGrad_${variant}`} x1="170" y1="90" x2="430" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF5500" />
            <stop offset="45%" stopColor="#FF7700" />
            <stop offset="80%" stopColor="#FF9900" />
            <stop offset="100%" stopColor="#FFAA00" />
          </linearGradient>

          {/* Tagline Gold Gradient */}
          <linearGradient id={`wsgTaglineGrad_${variant}`} x1="120" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#C88E18" />
            <stop offset="50%" stopColor="#E5A922" />
            <stop offset="100%" stopColor="#B57B0A" />
          </linearGradient>
        </defs>

        {/* 1. WSG Main Letters */}
        <text
          x="260"
          y="88"
          textAnchor="middle"
          fontFamily="Arial Black, Impact, 'Trebuchet MS', sans-serif"
          fontWeight="900"
          fontSize="100"
          letterSpacing="-1"
          fill={isLight ? '#FFFFFF' : '#0B0B0D'}
        >
          WSG
        </text>

        {/* 2. Vibrant Orange Ribbon / Swoosh */}
        <path
          d="M 170 102 C 195 62, 240 50, 310 60 C 370 68, 410 55, 432 44 C 412 58, 365 76, 305 67 C 242 56, 198 76, 170 102 Z"
          fill={`url(#wsgSwooshGrad_${variant})`}
        />

        {/* 3. WORLD SPORTS GROUP Subtext */}
        <text
          x="260"
          y="128"
          textAnchor="middle"
          fontFamily="Arial Black, Arial, sans-serif"
          fontWeight="900"
          fontSize="22"
          letterSpacing="4"
          fill={isLight ? '#FFFFFF' : '#0B0B0D'}
        >
          WORLD SPORTS GROUP
        </text>

        {/* 4. THINK DIFFERENT, PLAY DIFFERENT Tagline */}
        {showTagline && (
          <text
            x="260"
            y="154"
            textAnchor="middle"
            fontFamily="'Inter', 'Arial', sans-serif"
            fontWeight="700"
            fontSize="13.5"
            letterSpacing="3"
            fill={isLight ? '#F2B632' : `url(#wsgTaglineGrad_${variant})`}
          >
            THINK DIFFERENT, PLAY DIFFERENT
          </text>
        )}
      </svg>
    </div>
  );
};
