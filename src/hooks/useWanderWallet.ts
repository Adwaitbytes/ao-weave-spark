import { useState, useEffect, useCallback } from 'react';
import { toast } from '@/components/ui/use-toast';
import { getArweaveBalance } from '@/services/arweaveService';

// Define window type with Wander
declare global {
  interface Window {
    wander?: {
      connect: () => Promise<string[]>;
      disconnect: () => Promise<void>;
      getActiveAddress: () => Promise<string | null>;
      isConnected: () => Promise<boolean>;
    };
    turbo?: {
      uploadFile: (data: any) => Promise<{ transactionId: string }>;
      getBalance: () => Promise<{ balance: string }>;
    }
  }
}

export const useWanderWallet = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isWalletAvailable, setIsWalletAvailable] = useState(false);
  const [arBalance, setArBalance] = useState<string>("0");

  // Check if Wander wallet is available
  useEffect(() => {
    const checkWalletAvailability = async () => {
      const isAvailable = !!window.wander;
      setIsWalletAvailable(isAvailable);
      
      if (!isAvailable) {
        console.log('Wander wallet extension not found');
        toast({
          title: "Wallet Not Found",
          description: "Please install the Wander wallet extension",
          variant: "destructive"
        });
      }
    };
    
    checkWalletAvailability();
  }, []);

  // Check if already connected on mount
  useEffect(() => {
    const checkConnection = async () => {
      if (!window.wander) return;
      
      try {
        const isConnected = await window.wander.isConnected();
        if (isConnected) {
          const address = await window.wander.getActiveAddress();
          if (address) {
            setWalletAddress(address);
            const balance = await getArweaveBalance();
            setArBalance(balance);
          }
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
        description: "Please install Wander wallet extension and refresh the page",
        variant: "destructive"
      });
      return;
    }

    setIsConnecting(true);
    
    try {
      console.log('Requesting wallet connection...');
      const addresses = await window.wander.connect();
      
      if (addresses && addresses.length > 0) {
        const address = addresses[0];
        setWalletAddress(address);
        
        // Get initial AR balance
        if (window.turbo) {
          const balance = await getArweaveBalance();
          setArBalance(balance);
        }
        
        toast({
          title: "Connected!",
          description: "Wallet connected successfully",
        });
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
      toast({
        title: "Connection failed",
        description: "Please accept the connection request in your Wander wallet",
        variant: "destructive"
      });
    } finally {
      setIsConnecting(false);
    }
  }, []);

  const disconnectWallet = useCallback(async () => {
    if (!window.wander || !walletAddress) return;
    
    try {
      console.log('Disconnecting wallet...');
      await window.wander.disconnect();
      setWalletAddress(null);
      setArBalance("0");
      console.log('Wallet disconnected');
      
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
    arBalance,
    connectWallet,
    disconnectWallet,
    shortenAddress
  };
};
