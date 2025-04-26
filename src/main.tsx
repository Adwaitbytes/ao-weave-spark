
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './wanderWalletMock.ts'  // Import the mock wallet

createRoot(document.getElementById("root")!).render(<App />);
