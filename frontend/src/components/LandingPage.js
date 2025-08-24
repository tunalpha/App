import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { 
  Shield, 
  Users, 
  ShoppingCart, 
  Link, 
  CreditCard, 
  MessageCircle,
  Check,
  ArrowRight,
  Star,
  Globe,
  Zap,
  TrendingUp
} from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { mockData } from '../mock';
import ReviewModal from './ReviewModal';

const iconMap = {
  Shield,
  Users, 
  ShoppingCart,
  Link,
  CreditCard,
  MessageCircle
};

const LandingPage = ({ onAuthAction }) => {
  const { t, isItalian } = useLanguage();
  const [showReviewModal, setShowReviewModal] = useState(false);

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50/30 pt-16 pb-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Shield className="h-4 w-4" />
              <span>{isItalian ? 'Gateway Che Non Ti Abbandonerà Mai' : 'Gateway That Never Abandons You'}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('hero.title')}
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                {t('hero.subtitle')}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                onClick={() => onAuthAction('signup')}
                className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.querySelector('#features').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 text-lg border-2 hover:border-purple-500 hover:text-purple-600 transition-all duration-300"
              >
                {t('hero.secondaryCta')}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {[
                { label: isItalian ? 'Merchant Attivi' : 'Active Merchants', value: mockData.stats.merchants },
                { label: isItalian ? 'Volume Transazioni' : 'Transaction Volume', value: mockData.stats.transactions },
                { label: isItalian ? 'Paesi Supportati' : 'Supported Countries', value: mockData.stats.countries },
                { label: 'Uptime', value: mockData.stats.uptime }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Crypto Payouts Section */}
      <section className="py-16 bg-gradient-to-br from-purple-500 to-violet-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CreditCard className="h-4 w-4" />
              <span>{isItalian ? 'Rivoluzionario' : 'Revolutionary'}</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {isItalian 
                ? 'Payout Personalizzati: CRYPTO & Tradizionali' 
                : 'Custom Payouts: CRYPTO & Traditional'
              }
            </h2>
            
            <p className="text-xl text-purple-100 mb-8 leading-relaxed whitespace-pre-line">
              {isItalian 
                ? 'USDT • USDC • BTC • ETH • Western Union • Swift • MoneyGram • Wise • Revolut\nTroveremo la formula più adatta alle tue esigenze.\nTu concentrati al tuo business, ai pagamenti ci pensa Alpha Bit.' 
                : 'USDT • USDC • BTC • ETH • Western Union • Swift • MoneyGram • Wise • Revolut\nWe\'ll find the perfect formula for your needs.\nYou focus on your business, Alpha Bit handles payments.'
              }
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {isItalian ? 'Massima Flessibilità' : 'Maximum Flexibility'}
                </h3>
                <p className="text-purple-100">
                  {isItalian ? 'Crypto, Western Union, Swift, bonifici istantanei e molto altro' : 'Crypto, Western Union, Swift, instant transfers and much more'}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {isItalian ? 'Transazioni Velocissime' : 'Lightning Fast Transactions'}
                </h3>
                <p className="text-purple-100">
                  {isItalian ? 'Payout crypto velocissimi da concordare insieme' : 'Ultra-fast crypto payouts to arrange together'}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {isItalian ? 'Zero Burocrazia' : 'Zero Bureaucracy'}
                </h3>
                <p className="text-purple-100">
                  {isItalian ? 'Nessuna documentazione richiesta, nessuna due diligence' : 'No documentation required, no due diligence'}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {isItalian ? 'Nessun Confine' : 'No Borders'}
                </h3>
                <p className="text-purple-100">
                  {isItalian ? 'Pagamenti globali con ogni metodo disponibile' : 'Global payments with every available method'}
                </p>
              </div>
            </div>

            {/* Second row with risk message */}
            <div className="grid md:grid-cols-1 gap-8 mt-8">
              <div className="text-center bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  {isItalian ? 'Accettiamo Qualsiasi Sfida' : 'We Accept Any Challenge'}
                </h3>
                <p className="text-purple-100 text-lg leading-relaxed whitespace-pre-line">
                  {isItalian 
                    ? 'Accettiamo con sfida qualsiasi rischio perché lo calcoliamo in anticipo.\nIl rischio sarà a carico di Alpha Bit, mai sul tuo resoconto!' 
                    : 'We boldly accept any risk because we calculate it in advance.\nThe risk will be on Alpha Bit, never on your account!'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-purple-600 border-purple-200">
              {isItalian ? 'Caratteristiche' : 'Features'}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto whitespace-pre-line">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t('features.items').map((feature, index) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-purple-100/50">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-violet-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base leading-relaxed whitespace-pre-line">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-slate-100/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-purple-600 border-purple-200">
              {isItalian ? 'Servizi' : 'Services'}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('services.title')}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* E-commerce Integration */}
            <Card className="overflow-hidden border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-br from-purple-500 to-violet-600 text-white">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{t('services.ecommerce.title')}</CardTitle>
                    <CardDescription className="text-purple-100 whitespace-pre-line">
                      {t('services.ecommerce.description')}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {t('services.ecommerce.features').map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-purple-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Payment Links */}
            <Card className="overflow-hidden border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-br from-violet-500 to-purple-600 text-white">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Link className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{t('services.paymentLinks.title')}</CardTitle>
                    <CardDescription className="text-violet-100 whitespace-pre-line">
                      {t('services.paymentLinks.description')}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {t('services.paymentLinks.features').map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-violet-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-purple-600 border-purple-200">
              {isItalian ? 'Prezzi' : 'Pricing'}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('pricing.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto whitespace-pre-line">
              {t('pricing.subtitle')}
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <Card className="relative overflow-hidden border-2 border-purple-200 shadow-xl">
              {/* Popular Badge */}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-4 py-1">
                  {isItalian ? 'Più Popolare' : 'Most Popular'}
                </Badge>
              </div>
              
              <CardHeader className="text-center pt-8 pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {t('pricing.plan.title')}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-gray-900">{t('pricing.plan.price')}</span>
                  <span className="text-xl text-gray-600 ml-2">{t('pricing.plan.description')}</span>
                </div>
              </CardHeader>
              
              <CardContent className="px-6 pb-8">
                <ul className="space-y-4 mb-8">
                  {t('pricing.plan.features').map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-purple-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => onAuthAction('signup')}
                >
                  {t('pricing.plan.cta')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Growth Guarantee Section */}
<section className="py-16 bg-gradient-to-br from-green-500 to-emerald-600 text-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-4xl mx-auto">
      <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
        <TrendingUp className="h-4 w-4" />
        <span>{isItalian ? 'Risultati Garantiti' : 'Guaranteed Results'}</span>
      </div>

      <h2 className="text-3xl lg:text-4xl font-bold mb-6">
        {isItalian ? 'I Nostri Merchant Crescono del 300%' : 'Our Merchants Grow 300%'}
      </h2>

      <p className="text-xl text-green-100 mb-8 leading-relaxed whitespace-pre-line">
        {isItalian
          ? 'I nostri merchant crescono del 300% nel primo anno.\nCrescita garantita con Alpha Bit!'
          : 'Our merchants grow 300% in the first year.\nGuaranteed growth with Alpha Bit!'}
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="text-center">
          <div className="text-4xl font-bold mb-2">300%</div>
          <p className="text-green-100">
            {isItalian ? 'Crescita Media Annua' : 'Average Annual Growth'}
          </p>
        </div>

        <div className="text-center">
          {/* ✅ Default = 30 Days; Italian = 30 Giorni */}
          <div className="text-4xl font-bold mb-2">
            {isItalian ? '30 Giorni' : '30 Days'}
          </div>
          <p className="text-green-100">
            {isItalian ? 'Per Vedere i Risultati' : 'To See Results'}
          </p>
        </div>

        <div className="text-center">
          <div className="text-4xl font-bold mb-2">0%</div>
          <p className="text-green-100">
            {isItalian ? 'Rischio per Te' : 'Risk for You'}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-slate-100/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-purple-600 border-purple-200">
              {isItalian ? 'Testimonianze' : 'Testimonials'}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {isItalian ? 'Cosa Dicono i Nostri Clienti' : 'What Our Clients Say'}
            </h2>
            
            {/* Add Your Review Button */}
            <div className="mb-8">
              <Button 
                onClick={() => setShowReviewModal(true)}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isItalian ? '✍️ Inserisci la Tua Recensione' : '✍️ Add Your Review'}
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {mockData.testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3 italic text-xs leading-relaxed" style={{fontSize: '11px'}}>"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900 text-xs">{testimonial.name}</div>
                    <div className="text-xs text-gray-600" style={{fontSize: '10px'}}>{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-purple-500 to-violet-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto whitespace-pre-line">
            {t('cta.description')}
          </p>
          <Button 
            size="lg"
            onClick={() => onAuthAction('signup')}
            className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {t('cta.button')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

  <footer className="bg-gray-900 text-white py-16">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-4 gap-8">
      {/* Company Info */}
      <div className="md:col-span-2">
        <div className="flex items-center space-x-3">
          <img 
            src="https://customer-assets.emergentagent.com/job_payment-hub-17/artifacts/baydwuqk_IMG_5396.png" 
            alt="Alpha Bit Logo" 
            className="h-10 w-10 rounded-full"
          />
          <span className="text-xl font-bold">{t('footer.company')}</span>
        </div>
        <p className="text-gray-400 mb-6 max-w-md">
          {t('footer.description')}
        </p>
        <div className="flex items-center space-x-4 mt-6">
          <Globe className="h-5 w-5 text-purple-400" />
          <span className="text-sm text-gray-400">
            {isItalian ? 'Disponibile in tutto il mondo' : 'Available worldwide'}
          </span>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="font-semibold mb-4">{t('footer.links.product')}</h3>
        <ul className="space-y-2 text-sm text-gray-400">
          <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
          <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h3 className="font-semibold mb-4">{t('footer.links.support')}</h3>
        <ul className="space-y-2 text-sm text-gray-400">
          <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>
    </div>

    <Separator className="my-8 bg-gray-800" />

    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="text-sm text-gray-400">
        © 2024 Alpha Bit. {isItalian ? 'Tutti i diritti riservati.' : 'All rights reserved.'}
        {/* Added email below */}
        <div className="mt-2">
          <a href="mailto:info@alphabitpay.com" className="hover:text-white transition-colors">
            info@alphabitpay.com
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>

      
      {/* Review Modal */}
      <ReviewModal 
        isOpen={showReviewModal} 
        onClose={() => setShowReviewModal(false)} 
      />
    </main>
  );
};

export default LandingPage;
