import App from './App.tsx'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { FavoritesProvider } from './context/FavoritesContext.tsx';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FavoritesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoritesProvider>
  </React.StrictMode>
);
