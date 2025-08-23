import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useLanguage } from './LanguageProvider';
import { toast } from 'sonner';

const AuthModal = ({ isOpen, onClose, defaultTab = 'login' }) => {
  const { t, isItalian } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock login
    setTimeout(() => {
      toast.success(isItalian ? 'Login effettuato con successo!' : 'Login successful!');
      setIsLoading(false);
      onClose();
    }, 1500);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock signup
    setTimeout(() => {
      toast.success(
        isItalian 
          ? 'Account creato con successo! Ti abbiamo inviato una email di conferma.' 
          : 'Account created successfully! We sent you a confirmation email.'
      );
      setIsLoading(false);
      onClose();
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Alpha Bit
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">
              {isItalian ? 'Accedi' : 'Login'}
            </TabsTrigger>
            <TabsTrigger value="signup">
              {isItalian ? 'Registrati' : 'Sign Up'}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4 mt-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">
                  {isItalian ? 'Email' : 'Email'}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={isItalian ? 'la-tua-email@esempio.com' : 'your-email@example.com'}
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">
                  {isItalian ? 'Password' : 'Password'}
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder={isItalian ? 'Password' : 'Password'}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => {
                    toast.info(
                      isItalian 
                        ? 'Ti abbiamo inviato un link per reimpostare la password.' 
                        : 'We sent you a password reset link.'
                    );
                  }}
                  className="text-sm text-purple-600 hover:text-purple-800 transition-colors"
                >
                  {isItalian ? 'Password dimenticata?' : 'Forgot password?'}
                </button>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700"
                disabled={isLoading}
              >
                {isLoading 
                  ? (isItalian ? 'Accedendo...' : 'Logging in...') 
                  : (isItalian ? 'Accedi' : 'Login')
                }
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signup" className="space-y-4 mt-6">
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signup-name">
                  {isItalian ? 'Nome' : 'Name'}
                </Label>
                <Input
                  id="signup-name"
                  placeholder={isItalian ? 'Il tuo nome' : 'Your name'}
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-email">
                  {isItalian ? 'Email' : 'Email'}
                </Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder={isItalian ? 'la-tua-email@esempio.com' : 'your-email@example.com'}
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-password">
                  {isItalian ? 'Password' : 'Password'}
                </Label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder={isItalian ? 'Password' : 'Password'}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700"
                disabled={isLoading}
              >
                {isLoading 
                  ? (isItalian ? 'Creando account...' : 'Creating account...') 
                  : (isItalian ? 'Crea Account' : 'Create Account')
                }
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;