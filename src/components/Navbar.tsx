
import React from 'react';
import { ConnectButton } from './ConnectButton';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="relative flex items-center">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-spark-purple to-spark-blue flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="ml-2 font-bold text-xl text-gradient">Spark</span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-spark-purple transition-colors font-medium">
            Explore
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Create
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </nav>
        
        {/* Connect Button (Desktop) */}
        <div className="hidden md:block">
          <ConnectButton />
        </div>
        
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-6 space-y-6">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-foreground hover:text-spark-purple transition-colors font-medium py-2">
                Explore
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Create
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                About
              </a>
            </nav>
            <ConnectButton />
          </div>
        </div>
      )}
    </header>
  );
};
