
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ConnectButton } from './ConnectButton';
import { Link } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 md:px-0">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            <span className="text-gradient">AI Prompts</span> on the <br />
            <span className="relative"> 
              Permanent Web
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 358 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9C118.957 4.47226 238.043 4.47226 354 9" stroke="url(#paint0_linear)" strokeWidth="6" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="3" y1="9" x2="354" y2="9" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8B5CF6"/>
                    <stop offset="1" stopColor="#06b6d4"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
            Create, share, and monetize your AI prompts. Stored permanently on Arweave
            and powered by AO smart contracts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Button className="bg-gradient-to-r from-spark-purple to-spark-blue hover:opacity-90 transition-all px-8 py-6 text-base" asChild>
              <Link to="/explore">
                Explore Prompts
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
            <ConnectButton />
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="relative w-full h-64 md:h-80 glassmorphism rounded-xl overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-spark-purple/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-spark-blue/20 rounded-full filter blur-3xl"></div>
          
          {/* 3D-like floating cards */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
            <div className="relative">
              <div className="absolute top-6 left-4 right-4 h-32 bg-black/30 backdrop-blur-md rounded-xl shadow-lg transform rotate-3 animate-float animation-delay-2000"></div>
              <div className="absolute top-3 left-2 right-2 h-32 bg-black/30 backdrop-blur-md rounded-xl shadow-lg transform -rotate-2 animate-float animation-delay-4000"></div>
              <div className="relative bg-black/50 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-lg animate-float">
                <div className="h-4 w-2/3 bg-gradient-to-r from-spark-purple to-spark-teal/50 rounded-full mb-4"></div>
                <div className="h-3 w-5/6 bg-white/20 rounded-full mb-3"></div>
                <div className="h-3 w-4/6 bg-white/20 rounded-full mb-3"></div>
                <div className="h-3 w-3/4 bg-white/20 rounded-full mb-3"></div>
                <div className="flex justify-between mt-6">
                  <div className="h-6 w-20 bg-gradient-to-r from-spark-purple to-spark-blue rounded-full"></div>
                  <div className="h-6 w-12 bg-white/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
