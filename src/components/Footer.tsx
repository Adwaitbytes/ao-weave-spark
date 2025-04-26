
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary/10 py-16 px-4 md:px-0">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-spark-purple to-spark-blue flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="ml-2 font-bold text-xl text-gradient">Spark</span>
            </div>
            <p className="text-muted-foreground mb-4">
              The decentralized marketplace for AI prompts, built on Arweave and AO.
              Create, share, and monetize your prompts with true ownership and permanence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Discord</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">GitHub</a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Explore</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Create</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">How it works</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">API</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">SDK</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Community</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row md:items-center justify-between text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Spark. All rights reserved.</div>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
