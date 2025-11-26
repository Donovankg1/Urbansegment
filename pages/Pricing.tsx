import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Check, X, HelpCircle, ArrowRight, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Pricing: React.FC = () => {
  const [currency, setCurrency] = useState<'ZMW' | 'USD'>('ZMW');
  const navigate = useNavigate();

  const formatPrice = (zmw: number, usd: number) => {
    return currency === 'ZMW' 
      ? `K${zmw.toLocaleString()}` 
      : `$${usd.toLocaleString()}`;
  };

  const tiers = [
    {
      name: "Starter Growth",
      description: "Establish a professional digital presence.",
      priceZMW: 15000,
      priceUSD: 600,
      features: [
        "Social Media Strategy (2 Platforms)",
        "12 High-Quality Posts / Month",
        "Community Management",
        "Basic Performance Report",
        "1 Strategy Sync / Month"
      ],
      cta: "Start Growing",
      variant: "secondary" as const,
      popular: false
    },
    {
      name: "Performance",
      description: "For brands ready to scale with ads & video.",
      priceZMW: 35000,
      priceUSD: 1400,
      features: [
        "Everything in Starter",
        "Paid Ads Management",
        "AI-Accelerated Video (4 Reels)",
        "20 High-Quality Posts / Month",
        "Bi-Weekly Strategy Calls",
        "Lead Gen Funnel Setup"
      ],
      cta: "Get Performance",
      variant: "primary" as const,
      popular: true
    },
    {
      name: "Strategy + AI Scale",
      description: "Full-service department for leaders.",
      priceZMW: 65000,
      priceUSD: 2600,
      features: [
        "Everything in Performance",
        "Full CMO-Level Strategy",
        "Unlimited AI Content Pipeline",
        "Ecommerce Optimization",
        "Advanced Analytics Dashboard",
        "Dedicated Account Manager"
      ],
      cta: "Partner With Us",
      variant: "secondary" as const,
      popular: false
    }
  ];

  return (
    <div className="bg-brand-dark min-h-screen pt-24 pb-12">
      <div className="text-center mb-16 px-4">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Simple, Transparent Pricing</h1>
        <p className="text-slate-400 max-w-xl mx-auto mb-8">
          Premium strategic value at competitive Lusaka rates.
        </p>
        
        <div className="inline-flex items-center bg-brand-surface rounded-full p-1 border border-white/10">
          <button 
            onClick={() => setCurrency('ZMW')}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${currency === 'ZMW' ? 'bg-brand-primary text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
          >
            ZMW
          </button>
          <button 
            onClick={() => setCurrency('USD')}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${currency === 'USD' ? 'bg-brand-primary text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
          >
            USD
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {tiers.map((tier, idx) => (
            <div key={idx} className={`relative bg-brand-surface rounded-3xl overflow-hidden border transition-all duration-300 ${tier.popular ? 'border-brand-primary shadow-2xl shadow-brand-primary/20 scale-105 z-10' : 'border-white/5 hover:border-white/10'}`}>
              
              {tier.popular && (
                <div className="bg-brand-primary text-white text-center text-xs font-bold uppercase tracking-widest py-2">
                  Best Value
                </div>
              )}

              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-white">{formatPrice(tier.priceZMW, tier.priceUSD)}</span>
                  <span className="text-slate-500 text-sm">/mo</span>
                </div>
                <p className="text-slate-400 text-sm mb-8">{tier.description}</p>
                
                <Button variant={tier.variant} fullWidth onClick={() => navigate('/contact')}>
                  {tier.cta}
                </Button>
              </div>

              <div className="p-8 bg-black/20 border-t border-white/5">
                <ul className="space-y-4">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <div className="mt-0.5 bg-brand-primary/20 rounded-full p-1">
                        <Check className="w-3 h-3 text-brand-primary" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-12 bg-gradient-to-r from-brand-surface to-slate-900 rounded-3xl border border-white/5 text-center">
           <h3 className="text-2xl font-serif font-bold text-white mb-4">Enterprise or Government?</h3>
           <p className="text-slate-400 max-w-2xl mx-auto mb-8">
             We offer custom retainers for large-scale public sector communication, national campaigns, and complex ecommerce logistics.
           </p>
           <Button variant="outline" size="lg" onClick={() => navigate('/contact')}>
             Request Custom Proposal
           </Button>
        </div>
      </div>
    </div>
  );
};