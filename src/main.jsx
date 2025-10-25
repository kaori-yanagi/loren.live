import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './App.css';  // ← これがないと Tailwind は効かない

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
