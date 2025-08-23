import React, { useState } from "react";
import "./App.css";
import { LanguageProvider } from './components/LanguageProvider';
import Header from './components/Header';
import AuthModal from './components/AuthModal';
import LandingPage from './components/LandingPage';
import { Toaster } from "./components/ui/sonner";

function App() {
  const [authModal, setAuthModal] = useState({ isOpen: false, type: 'login' });

  const handleAuthAction = (type) => {
    setAuthModal({ isOpen: true, type });
  };

  const closeAuthModal = () => {
    setAuthModal({ isOpen: false, type: 'login' });
  };

  return (
    <LanguageProvider>
      <div className="App min-h-screen bg-white">
        <Header onAuthAction={handleAuthAction} />
        <LandingPage onAuthAction={handleAuthAction} />
        
        <AuthModal
          isOpen={authModal.isOpen}
          onClose={closeAuthModal}
          defaultTab={authModal.type}
        />
        
        <Toaster position="top-right" />
      </div>
    </LanguageProvider>
  );
}

export default App;