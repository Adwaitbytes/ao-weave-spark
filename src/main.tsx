
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './wanderWalletMock.ts'  // Import the mock wallet for development only

// Load Turbo SDK
const loadTurboSDK = () => {
  console.log("Loading Turbo SDK...");
  const script = document.createElement('script');
  script.src = 'https://unpkg.com/@ardrive/turbo-sdk/dist/turbo.js';
  script.async = true;
  script.onload = () => {
    console.log("Turbo SDK loaded successfully");
  };
  script.onerror = () => {
    console.error("Failed to load Turbo SDK");
  };
  document.head.appendChild(script);
};

// Load Turbo SDK immediately
loadTurboSDK();

createRoot(document.getElementById("root")!).render(<App />);
