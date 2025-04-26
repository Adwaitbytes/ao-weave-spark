
import React from 'react';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-spark-purple/20 filter blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-spark-blue/20 filter blur-3xl animate-pulse-glow animation-delay-2000"></div>
      <div className="absolute top-3/4 left-1/2 w-64 h-64 rounded-full bg-spark-teal/20 filter blur-3xl animate-pulse-glow animation-delay-4000"></div>
      
      {/* Sparkle effects */}
      <div className="absolute h-2 w-2 bg-white/80 rounded-full top-1/4 right-1/3 animate-ping duration-1000"></div>
      <div className="absolute h-2 w-2 bg-white/80 rounded-full bottom-1/3 left-1/4 animate-ping duration-700 delay-300"></div>
      <div className="absolute h-1 w-1 bg-white/80 rounded-full top-1/2 left-2/3 animate-ping duration-1500 delay-500"></div>
    </div>
  );
}
