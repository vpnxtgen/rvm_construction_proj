import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AboutUsPage from "./About_us";
import App from './App.tsx';
import ScrollToTop from "./ScrollToTop";
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      

      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/About_us" element={<AboutUsPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);