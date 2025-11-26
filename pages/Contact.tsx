import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-20">
      <div className="bg-brand-dark py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Start the Conversation</h1>
        <p className="text-slate-400 max-w-xl mx-auto">Let’s determine if Urban Segment is the right strategic partner for your growth.</p>
      </div>

      <Section>
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Info Side */}
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-6">Get in touch</h2>
            <p className="text-slate-600 mb-8">
              We focus on working with established SMBs, mid-market brands, and Government entities. Fill out the form, and a strategist will review your application and reach out within 24 hours.
            </p>

            <div className="space-y-8">
              
              {/* USA Contact Block */}
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-5 h-5 text-brand-primary" />
                  <h4 className="font-bold text-brand-dark">USA & International Inquiries</h4>
                </div>
                <div className="space-y-3 pl-8">
                   <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-slate-400" />
                      <a href="mailto:donovan@urbansegment.com" className="text-slate-600 text-sm hover:text-brand-primary">donovan@urbansegment.com</a>
                   </div>
                </div>
              </div>

              {/* Zambia Contact Block */}
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <h4 className="font-bold text-brand-dark">Zambia & SADC Inquiries</h4>
                </div>
                <div className="space-y-3 pl-8">
                   <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-slate-400" />
                      <a href="mailto:esperance@urbansegment.com" className="text-slate-600 text-sm hover:text-brand-primary">esperance@urbansegment.com</a>
                   </div>
                   <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-600 text-sm">+260 211 000 000</span>
                   </div>
                </div>
              </div>

            </div>
            
            <div className="mt-12 p-6 border border-dashed border-slate-200 rounded-lg">
                <h4 className="font-bold text-brand-dark mb-2">Looking for careers?</h4>
                <p className="text-sm text-slate-600 mb-4">We are always looking for talented strategists and creators in both hubs.</p>
                <a href="#" className="text-brand-primary text-sm font-medium hover:underline">View Openings &rarr;</a>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckIcon />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">Request Received</h3>
                <p className="text-slate-600">Thank you. Our strategy team will review your details and be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                    <input required type="text" className="w-full px-4 py-3 border border-slate-300 rounded focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all" placeholder="Jane" />
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                    <input required type="text" className="w-full px-4 py-3 border border-slate-300 rounded focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all" placeholder="Doe" />
                    </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
                  <input required type="email" className="w-full px-4 py-3 border border-slate-300 rounded focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all" placeholder="jane@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Company Website</label>
                  <input type="url" className="w-full px-4 py-3 border border-slate-300 rounded focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all" placeholder="https://company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Primary Business Goal</label>
                  <select className="w-full px-4 py-3 border border-slate-300 rounded focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-white">
                    <option>Digital Strategy & Transformation</option>
                    <option>AI Content Production</option>
                    <option>Ecommerce & Payment Integration</option>
                    <option>Performance Marketing (Ads)</option>
                    <option>Government / Public Sector Comms</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Estimated Monthly Budget</label>
                  <select className="w-full px-4 py-3 border border-slate-300 rounded focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-white">
                    <option>Under $1,000</option>
                    <option>$1,000 - $3,000</option>
                    <option>$3,000 - $10,000</option>
                    <option>$10,000+ / Enterprise</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Tell us about your project</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-slate-300 rounded focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all" placeholder="What are your main challenges?"></textarea>
                </div>
                <Button fullWidth size="lg" type="submit">Request Strategy Session</Button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
};

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);