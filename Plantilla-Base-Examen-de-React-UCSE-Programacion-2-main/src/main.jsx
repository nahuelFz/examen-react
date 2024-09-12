import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import './index.css';

// Obtiene el elemento raíz en el DOM
const rootElement = document.getElementById("root");

// Crea la raíz de la aplicación y renderiza el componente App dentro del Router
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);




