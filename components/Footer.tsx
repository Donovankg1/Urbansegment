import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Mail, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white flex items-center justify-center text-brand-dark font-bold font-serif text-xl">
                U
              </div>
              <span className="font-serif font-bold text-xl tracking-tight">
                URBAN SEGMENT
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              A strategy-first digital agency with dual hubs in the US and Africa. Accelerating growth through AI content velocity and robust ecommerce systems.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-400 hover:text-white text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white text-sm">Services</Link></li>
              <li><Link to="/pricing" className="text-slate-400 hover:text-white text-sm">Pricing</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-slate-400 hover:text-white text-sm">Strategy & Advisory</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white text-sm">AI Content Velocity</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white text-sm">Ecommerce Enablement</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white text-sm">Performance Media</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Global Hubs</h4>
            <ul className="space-y-4">
              <li className="flex flex-col gap-1 text-slate-400 text-sm">
                <div className="flex items-center gap-2 text-white font-medium">
                   <Globe className="w-4 h-4 text-brand-primary" /> USA (Strategy)
                </div>
                <a href="mailto:donovan@urbansegment.com" className="hover:text-brand-primary transition-colors">donovan@urbansegment.com</a>
              </li>
              <li className="flex flex-col gap-1 text-slate-400 text-sm mt-2">
                <div className="flex items-center gap-2 text-white font-medium">
                   <Globe className="w-4 h-4 text-green-500" /> Lusaka (Operations)
                </div>
                <a href="mailto:esperance@urbansegment.com" className="hover:text-brand-primary transition-colors">esperance@urbansegment.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Urban Segment. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white text-xs">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};