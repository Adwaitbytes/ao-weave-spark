
import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BackgroundEffects } from '../components/BackgroundEffects';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <BackgroundEffects />
      <Navbar />
      <main className="pt-24 flex-grow">
        <section className="py-10 px-4 md:px-0">
          <div className="container mx-auto max-w-3xl">
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">About Spark</h1>
              <p className="text-muted-foreground">
                A decentralized marketplace for AI prompts on the permanent web
              </p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-lg rounded-xl p-6 md:p-8 border border-white/10 space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-3 text-gradient">Our Mission</h2>
                <p className="text-muted-foreground">
                  Spark is building the future of AI prompt engineering and sharing. By leveraging the 
                  permanent web through Arweave and AO smart contracts, we're creating an ecosystem 
                  where creators can share, monetize, and collaborate on AI prompts that will remain
                  accessible forever.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-3 text-gradient">Why Decentralized?</h2>
                <p className="text-muted-foreground">
                  In the rapidly evolving AI landscape, prompts are becoming increasingly valuable 
                  intellectual property. By storing these prompts on the permanent web, we ensure 
                  that creators maintain ownership and access to their work regardless of any 
                  platform changes or shutdowns.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-3 text-gradient">Built on Arweave & AO</h2>
                <p className="text-muted-foreground">
                  Arweave provides permanent, low-cost storage for prompt data, while AO smart 
                  contracts enable complex ownership mechanisms, monetization, and collaboration 
                  features. This combination creates a resilient infrastructure for the future 
                  of AI prompt sharing.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-3 text-gradient">Connect with Wander</h2>
                <p className="text-muted-foreground">
                  Spark uses the Wander wallet to provide a seamless web3 experience. Connect 
                  your wallet to create, share, and monetize your AI prompts on the permanent web.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
