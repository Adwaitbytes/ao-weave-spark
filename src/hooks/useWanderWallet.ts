
import { useState, useEffect, useCallback } from 'react';
import { toast } from '@/components/ui/use-toast';

// Define window type with Wander
declare global {
  interface Window {
    wander?: {
      connect: () => Promise<string[]>;
      disconnect: () => Promise<void>;
      getActiveAddress: () => Promise<string | null>;
      isConnected: () => Promise<boolean>;
    };
  }
}

export const useWanderWallet = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isWalletAvailable, setIsWalletAvailable] = useState(false);

  // Check if Wander wallet is available
  useEffect(() => {
    const checkWalletAvailability = () => {
      const isAvailable = !!window.wander;
      setIsWalletAvailable(isAvailable);
      
      if (!isAvailable) {
        console.log('Wander wallet extension not found');
      }
    };
    
    checkWalletAvailability();
    
    // Check again if window.wander becomes available (extension loads later)
    const interval = setInterval(checkWalletAvailability, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Check if already connected
  useEffect(() => {
    const checkConnection = async () => {
      if (!window.wander) return;
      
      try {
        const isConnected = await window.wander.isConnected();
        if (isConnected) {
          const address = await window.wander.getActiveAddress();
          setWalletAddress(address);
        }
      } catch (error) {
        console.error("Error checking wallet connection:", error);
      }
    };
    
    if (isWalletAvailable) {
      checkConnection();
    }
  }, [isWalletAvailable]);

  const connectWallet = useCallback(async () => {
    if (!window.wander) {
      toast({
        title: "Wallet not found",
        description: "Please install Wander wallet extension",
        variant: "destructive"
      });
      return;
    }

    setIsConnecting(true);
    
    try {
      const addresses = await window.wander.connect();
      if (addresses && addresses.length > 0) {
        setWalletAddress(addresses[0]);
        toast({
          title: "Connected!",
          description: "Wallet connected successfully",
        });
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
      toast({
        title: "Connection failed",
        description: "Failed to connect to your wallet",
        variant: "destructive"
      });
    } finally {
      setIsConnecting(false);
    }
  }, []);

  const disconnectWallet = useCallback(async () => {
    if (!window.wander || !walletAddress) return;
    
    try {
      await window.wander.disconnect();
      setWalletAddress(null);
      toast({
        title: "Disconnected",
        description: "Wallet disconnected successfully",
      });
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
      toast({
        title: "Disconnection failed",
        description: "Failed to disconnect wallet",
        variant: "destructive"
      });
    }
  }, [walletAddress]);

  const shortenAddress = (address: string | null) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return {
    walletAddress,
    isConnecting,
    isWalletAvailable,
    connectWallet,
    disconnectWallet,
    shortenAddress
  };
};
