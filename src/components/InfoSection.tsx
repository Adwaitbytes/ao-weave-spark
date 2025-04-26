
import React from 'react';
import { Shield, Database, Code } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Permanent Storage',
    description: 'All prompts are stored on Arweave, ensuring they remain accessible forever without risk of censorship.'
  },
  {
    icon: Database,
    title: 'Smart Contract Logic',
    description: 'AO powers the intelligent contracts that manage ownership, payments, and platform interactions.'
  },
  {
    icon: Code,
    title: 'Open Ecosystem',
    description: 'Build integrations and extensions with our fully documented API and SDK.'
  }
];

export const InfoSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-0 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Powered by <span className="text-gradient">Web3</span> Technology</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform utilizes cutting-edge decentralized technologies to ensure your AI prompts are secure, accessible, and truly yours.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl glassmorphism flex flex-col items-center text-center transition-transform hover:translate-y-[-5px] duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-spark-purple/20 flex items-center justify-center mb-4">
                <feature.icon size={24} className="text-spark-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
