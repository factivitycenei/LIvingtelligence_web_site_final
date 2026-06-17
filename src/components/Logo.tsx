/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  isDark?: boolean;
  showText?: boolean;
}

export default function Logo({ className = "", isDark = false, showText = true }: LogoProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (window.location.pathname === '/' || window.location.pathname === '') {
      e.preventDefault();
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        heroEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <Link to="/" onClick={handleClick} className={`flex items-center gap-2 sm:gap-4 group ${className}`}>
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* The 'Tree of Intelligence' Icon */}
        <svg viewBox="0 0 100 100" className={isDark ? "text-white" : "text-zinc-900"}>
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          {/* Tree structure */}
          <motion.path
            d="M 50 85 L 50 35 M 50 65 L 35 55 M 50 55 L 65 45 M 50 45 L 40 35 M 50 35 L 60 25"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          />
          {/* Neural dots */}
          {[
            { cx: 50, cy: 35 }, { cx: 35, cy: 55 }, { cx: 65, cy: 45 },
            { cx: 40, cy: 35 }, { cx: 60, cy: 25 }
          ].map((dot, i) => (
            <motion.circle
              key={i}
              cx={dot.cx}
              cy={dot.cy}
              r={3}
              fill="currentColor"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.5, 1] }}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
            />
          ))}
        </svg>
      </div>
      
      {showText && (
        <span className={`text-[12px] sm:text-[17px] tracking-[0.16em] sm:tracking-[0.25em] uppercase transition-colors duration-500 ${isDark ? 'text-white' : 'text-zinc-900'} group-hover:text-teal-deep`}>
          <span className="font-bold">Living</span>
          <span className="font-normal opacity-80">telligence</span>
        </span>
      )}
    </Link>
  );
}
