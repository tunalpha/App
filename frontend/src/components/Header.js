import React, { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const Header = ({ onAuthAction }) => {
  const { t, currentLang, switchLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'features', href: '#features' },
    { key: 'pricing', href: '#pricing' },
    { key: 'contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_payment-hub-17/artifacts/baydwuqk_IMG_5396.png" 
              alt="Alpha Bit Logo" 
              className="h-10 w-10 rounded-full"
            />
            <span className="text-xl font-bold text-gray-900">Alpha Bit</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 text-sm">
              <button
                onClick={() => switchLanguage('it')}
                className={`px-2 py-1 rounded transition-colors ${
                  currentLang === 'it' 
                    ? 'bg-purple-100 text-purple-700 font-medium' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                IT
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => switchLanguage('en')}
                className={`px-2 py-1 rounded transition-colors ${
                  currentLang === 'en' 
                    ? 'bg-purple-100 text-purple-700 font-medium' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                EN
              </button>
            </div>
            
            <Button 
              variant="ghost" 
              onClick={() => onAuthAction('login')}
              className="text-gray-600 hover:text-gray-900"
            >
              {t('nav.login')}
            </Button>
            <Button 
              onClick={() => onAuthAction('signup')}
              className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white shadow-lg"
            >
              {t('nav.signup')}
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-6">
                {/* Language Switcher Mobile */}
                <div className="flex items-center justify-center space-x-4 pb-4 border-b">
                  <button
                    onClick={() => switchLanguage('it')}
                    className={`px-3 py-2 rounded-lg transition-colors ${
                      currentLang === 'it' 
                        ? 'bg-purple-100 text-purple-700 font-medium' 
                        : 'text-gray-500'
                    }`}
                  >
                    Italiano
                  </button>
                  <button
                    onClick={() => switchLanguage('en')}
                    className={`px-3 py-2 rounded-lg transition-colors ${
                      currentLang === 'en' 
                        ? 'bg-purple-100 text-purple-700 font-medium' 
                        : 'text-gray-500'
                    }`}
                  >
                    English
                  </button>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.key}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
                    >
                      {t(`nav.${item.key}`)}
                    </button>
                  ))}
                </nav>

                {/* Actions */}
                <div className="flex flex-col space-y-3 pt-4 border-t">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      onAuthAction('login');
                      setIsOpen(false);
                    }}
                    className="w-full"
                  >
                    {t('nav.login')}
                  </Button>
                  <Button 
                    onClick={() => {
                      onAuthAction('signup');
                      setIsOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white shadow-lg"
                  >
                    {t('nav.signup')}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;