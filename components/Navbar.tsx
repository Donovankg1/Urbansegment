import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';
import { NavItem } from '../types';
import { Button } from './Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navItems: NavItem[] = [
  { label: 'Services', path: '/services' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'About', path: '/about' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className={`container mx-auto px-4 md:px-6 max-w-7xl transition-all duration-300`}>
        <div className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${
          scrolled ? 'bg-brand-darker/80 backdrop-blur-xl border border-white/10 shadow-2xl' : 'bg-transparent'
        }`}>
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group relative z-50">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-pop rounded-xl flex items-center justify-center text-white font-bold font-serif text-xl shadow-lg shadow-brand-primary/20 group-hover:scale-105 transition-transform">
              U
            </div>
            <span className="font-serif font-bold text-xl tracking-tight text-white">
              URBAN SEGMENT
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className="text-sm font-medium px-4 py-2 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
             <Link to="/contact" className="hidden lg:block text-slate-400 hover:text-white text-sm font-medium transition-colors">
               Login
             </Link>
             <Button 
              variant="accent" 
              size="sm"
              onClick={() => navigate('/contact')}
              className="shadow-orange-500/20"
            >
              Start Project <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-brand-darker/95 backdrop-blur-xl z-40 transition-transform duration-300 md:hidden flex flex-col items-center justify-center gap-8 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path}
            className="text-3xl font-serif font-bold text-white hover:text-brand-primary transition-colors"
          >
            {item.label}
          </Link>
        ))}
        <Button onClick={() => navigate('/contact')} size="lg" variant="accent">
          Book Strategy Call
        </Button>
      </div>
    </header>
  );
};