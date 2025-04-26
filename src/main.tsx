
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './wanderWalletMock.ts'  // Import the mock wallet

// Load Turbo SDK
const script = document.createElement('script');
script.src = 'https://unpkg.com/@ardrive/turbo-sdk/dist/turbo.js';
script.async = true;
document.head.appendChild(script);

createRoot(document.getElementById("root")!).render(<App />);
