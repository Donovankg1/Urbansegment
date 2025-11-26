import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight, Zap, Target, ShoppingBag, Video, Palette } from 'lucide-react';

export const Services: React.FC = () => {
  const navigate = useNavigate();

  const serviceCategories = [
    {
      title: "Strategy & Advisory",
      description: "The blueprint for your digital dominance. We don't guess; we plan. Led by our US strategy team.",
      icon: Target,
      items: [
        "Digital Transformation Roadmaps",
        "Market Entry Strategy (US to Africa / Africa to US)",
        "Brand Positioning & Messaging",
        "Go-to-Market Planning"
      ]
    },
    {
      title: "AI-Accelerated Content",
      description: "High-volume, high-quality production using cutting-edge Generative AI. Get enterprise output on an SMB budget.",
      icon: Zap,
      items: [
        "AI-Generated Video Assets (Shorts/Reels)",
        "On-Model AI Product Photography",
        "Automated SEO Content Engines",
        "Personalized Email Sequences"
      ]
    },
    {
      title: "Ecommerce Enablement",
      description: "Turning browsers into buyers with robust operational systems. We solve the 'hard parts' of African ecommerce.",
      icon: ShoppingBag,
      items: [
        "Mobile Money & Payment Gateway Integration",
        "Shopify & WooCommerce Development",
        "Logistics & Last-Mile Strategy",
        "Funnel Architecture & CRO"
      ]
    },
    {
      title: "Creative & Marketing",
      description: "Full-service digital marketing that prioritizes ROAS (Return on Ad Spend) over vanity metrics.",
      icon: Palette,
      items: [
        "Paid Media Buying (Meta, Google, LinkedIn)",
        "Social Media Management",
        "Brand Identity & Design System",
        "Copywriting & Sales Scripts"
      ]
    },
    {
      title: "Production Studio",
      description: "Commercial-grade video and photography for brands that need to look world-class.",
      icon: Video,
      items: [
        "Commercial Video Production",
        "Corporate Photography",
        "Event Coverage",
        "Podcast & Audio Production"
      ]
    }
  ];

  return (
    <div className="pt-20">
      <div className="bg-brand-dark py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Services</h1>
        <p className="text-slate-400 max-w-xl mx-auto">Comprehensive solutions for the modern Zambian enterprise, powered by US strategy.</p>
      </div>

      <Section>
        <div className="space-y-20">
          {serviceCategories.map((category, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="p-8 md:p-12 flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-lg flex items-center justify-center">
                        <category.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark">{category.title}</h2>
                  </div>
                  
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed border-b border-slate-100 pb-8">{category.description}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {category.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-slate-700">
                        <Check className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:w-1/3 bg-slate-50 relative min-h-[300px]">
                   <img 
                    src={`https://picsum.photos/seed/serv${idx}/600/800`} 
                    alt={category.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-700" 
                   />
                   <div className="absolute inset-0 bg-brand-dark/10 mix-blend-multiply"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-dark text-white">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6">Not sure what you need?</h2>
          <p className="text-slate-300 mb-8">
            We offer a diagnostic audit to help identify whether you need a full strategy overhaul or just better content.
          </p>
          <div className="flex gap-4">
            <Button variant="primary" size="lg" onClick={() => navigate('/contact')}>
                Get a Custom Proposal <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="text-white border-slate-500 hover:bg-slate-800" onClick={() => navigate('/pricing')}>
                See Pricing Packages
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};