
// This is a mock implementation of the Wander wallet for development without the actual extension

class WanderWalletMock {
  private connected: boolean = false;
  private address: string | null = null;
  private readonly addresses = ['0xA1b2C3d4E5f6A7b8C9d0E1f2A3b4C5d6E7f8A9b0'];

  async connect(): Promise<string[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.connected = true;
        this.address = this.addresses[0];
        console.log('Wander wallet connected:', this.address);
        resolve(this.addresses);
      }, 1000);
    });
  }

  async disconnect(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.connected = false;
        this.address = null;
        console.log('Wander wallet disconnected');
        resolve();
      }, 500);
    });
  }

  async getActiveAddress(): Promise<string | null> {
    return this.address;
  }

  async isConnected(): Promise<boolean> {
    return this.connected;
  }
}

// Initialize mock wallet
const initMockWallet = () => {
  if (typeof window !== 'undefined' && !window.wander) {
    console.log('Initializing mock Wander wallet');
    window.wander = new WanderWalletMock();
  }
};

// Initialize when the script loads
initMockWallet();

// Export for use in other files
export { initMockWallet };

// Also add a global window type definition
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

export {};
