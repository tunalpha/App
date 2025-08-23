import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Star } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { toast } from 'sonner';

const ReviewModal = ({ isOpen, onClose }) => {
  const { isItalian } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    review: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock review submission
    setTimeout(() => {
      toast.success(
        isItalian 
          ? 'Grazie per la tua recensione! Sarà pubblicata dopo la verifica.' 
          : 'Thank you for your review! It will be published after verification.'
      );
      setIsLoading(false);
      onClose();
      // Reset form
      setFormData({ name: '', company: '', review: '' });
      setRating(5);
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-purple-600">
            {isItalian ? '✍️ Inserisci la Tua Recensione' : '✍️ Add Your Review'}
          </DialogTitle>
          <p className="text-center text-gray-600 mt-2">
            {isItalian 
              ? 'Condividi la tua esperienza con Alpha Bit' 
              : 'Share your experience with Alpha Bit'
            }
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Rating */}
          <div className="space-y-2">
            <Label className="text-lg font-semibold">
              {isItalian ? 'Valutazione' : 'Rating'}
            </Label>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="focus:outline-none"
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => setRating(star)}
                >
                  <Star 
                    className={`h-8 w-8 transition-colors ${
                      star <= (hoveredRating || rating)
                        ? 'fill-yellow-400 text-yellow-400' 
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
              <span className="ml-2 text-sm text-gray-600">
                ({rating}/5)
              </span>
            </div>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">
              {isItalian ? 'Il Tuo Nome' : 'Your Name'}
            </Label>
            <Input
              id="name"
              placeholder={isItalian ? 'es. Mario Rossi' : 'e.g. John Smith'}
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
            />
          </div>

          {/* Company */}
          <div className="space-y-2">
            <Label htmlFor="company">
              {isItalian ? 'Nome Azienda' : 'Company Name'}
            </Label>
            <Input
              id="company"
              placeholder={isItalian ? 'es. Rossi E-commerce' : 'e.g. Smith Digital Store'}
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              required
            />
          </div>

          {/* Review */}
          <div className="space-y-2">
            <Label htmlFor="review">
              {isItalian ? 'La Tua Recensione' : 'Your Review'}
            </Label>
            <Textarea
              id="review"
              placeholder={
                isItalian 
                  ? 'Racconta la tua esperienza con Alpha Bit. Come ti ha aiutato? Quali problemi hai risolto?' 
                  : 'Tell us about your experience with Alpha Bit. How did it help you? What problems did it solve?'
              }
              value={formData.review}
              onChange={(e) => handleInputChange('review', e.target.value)}
              rows={4}
              required
              className="resize-none"
            />
            <p className="text-xs text-gray-500">
              {isItalian 
                ? 'Minimo 50 caratteri per una recensione dettagliata' 
                : 'Minimum 50 characters for a detailed review'
              }
            </p>
          </div>

          {/* Privacy Notice */}
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <p className="text-sm text-purple-800">
              <strong>
                {isItalian ? '🔒 Privacy:' : '🔒 Privacy:'}
              </strong>{' '}
              {isItalian 
                ? 'La tua recensione sarà verificata prima della pubblicazione. I tuoi dati personali sono protetti secondo GDPR.' 
                : 'Your review will be verified before publication. Your personal data is protected according to GDPR.'
              }
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button 
              type="button"
              variant="outline" 
              onClick={onClose}
              className="flex-1"
              disabled={isLoading}
            >
              {isItalian ? 'Annulla' : 'Cancel'}
            </Button>
            <Button 
              type="submit" 
              className="flex-1 bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white"
              disabled={isLoading || formData.review.length < 50}
            >
              {isLoading 
                ? (isItalian ? 'Invio in corso...' : 'Submitting...') 
                : (isItalian ? 'Invia Recensione' : 'Submit Review')
              }
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewModal;