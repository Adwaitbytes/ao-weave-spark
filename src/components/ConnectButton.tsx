
import { useWanderWallet } from '@/hooks/useWanderWallet';
import { Button } from '@/components/ui/button';
import { Loader2, Wallet, LogOut } from 'lucide-react';
import { useEffect, useState } from 'react';

export const ConnectButton = () => {
  const { 
    walletAddress, 
    isConnecting, 
    connectWallet, 
    disconnectWallet,
    shortenAddress,
    arBalance
  } = useWanderWallet();
  
  const [displayBalance, setDisplayBalance] = useState<string>("0");
  
  // Format the balance when it changes
  useEffect(() => {
    if (arBalance) {
      // Convert to number and format to 4 decimal places
      const balanceNum = parseFloat(arBalance);
      setDisplayBalance(balanceNum.toFixed(4));
    } else {
      setDisplayBalance("0");
    }
  }, [arBalance]);

  if (walletAddress) {
    return (
      <div className="flex gap-2">
        <Button 
          variant="outline" 
          className="flex items-center gap-2 border border-spark-purple/20 bg-spark-purple/10 hover:bg-spark-purple/20"
        >
          <Wallet size={16} className="text-spark-purple" />
          <span>{shortenAddress(walletAddress)}</span>
          <span className="text-xs text-spark-purple">{displayBalance} AR</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={disconnectWallet}
          className="text-muted-foreground hover:text-foreground"
        >
          <LogOut size={16} />
        </Button>
      </div>
    );
  }

  return (
    <Button 
      onClick={connectWallet} 
      disabled={isConnecting}
      className="bg-gradient-to-r from-spark-purple to-spark-blue hover:opacity-90 transition-all"
    >
      {isConnecting ? (
        <>
          <Loader2 size={16} className="mr-2 animate-spin" />
          Connecting...
        </>
      ) : (
        <>
          <Wallet size={16} className="mr-2" />
          Connect Wallet
        </>
      )}
    </Button>
  );
};
