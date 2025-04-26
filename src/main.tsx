
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { toast } from '@/components/ui/use-toast';

// Load Turbo SDK
const loadTurboSDK = () => {
  console.log("Loading Turbo SDK...");
  const script = document.createElement('script');
  script.src = 'https://unpkg.com/@ardrive/turbo-sdk/dist/turbo.js';
  script.async = true;
  script.onload = () => {
    console.log("Turbo SDK loaded successfully");
    toast({
      title: "Ready",
      description: "Arweave integration initialized"
    });
  };
  script.onerror = () => {
    console.error("Failed to load Turbo SDK");
    toast({
      title: "Error",
      description: "Failed to load Arweave integration",
      variant: "destructive"
    });
  };
  document.head.appendChild(script);
};

// Load Turbo SDK immediately
loadTurboSDK();

createRoot(document.getElementById("root")!).render(<App />);
