
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
    const checkWalletAvailability = () => {
      const isAvailable = !!window.wander;
      setIsWalletAvailable(isAvailable);
      
      if (!isAvailable) {
        console.log('Wander wallet extension not found');
      } else {
        console.log('Wander wallet extension found');
      }
    };
    
    checkWalletAvailability();
    
    // Check again if window.wander becomes available (extension loads later)
    const interval = setInterval(checkWalletAvailability, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Check if already connected on mount
  useEffect(() => {
    const checkConnection = async () => {
      if (!window.wander) return;
      
      try {
        const isConnected = await window.wander.isConnected();
        console.log('Wallet connection status:', isConnected);
        
        if (isConnected) {
          const address = await window.wander.getActiveAddress();
          console.log('Active wallet address:', address);
          
          if (address) {
            setWalletAddress(address);
            
            // Get AR balance if connected
            if (window.turbo) {
              try {
                const balance = await getArweaveBalance();
                console.log('AR balance:', balance);
                setArBalance(balance);
              } catch (err) {
                console.error('Failed to get balance:', err);
              }
            }
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

  // Update balance when wallet connects
  useEffect(() => {
    const updateBalance = async () => {
      if (walletAddress && window.turbo) {
        try {
          const balance = await getArweaveBalance();
          console.log('Updated AR balance:', balance);
          setArBalance(balance);
        } catch (err) {
          console.error('Failed to get balance:', err);
        }
      }
    };

    updateBalance();
  }, [walletAddress]);

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
      console.log('Connecting to wallet...');
      const addresses = await window.wander.connect();
      console.log('Connection result:', addresses);
      
      if (addresses && addresses.length > 0) {
        const address = addresses[0];
        setWalletAddress(address);
        console.log('Wallet connected:', address);
        
        // Get AR balance after connection
        if (window.turbo) {
          try {
            const balance = await getArweaveBalance();
            console.log('Initial AR balance:', balance);
            setArBalance(balance);
          } catch (err) {
            console.error('Failed to get balance:', err);
          }
        }
        
        toast({
          title: "Connected!",
          description: "Wallet connected successfully",
        });
      } else {
        toast({
          title: "Connection failed",
          description: "No wallet addresses returned",
          variant: "destructive"
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
