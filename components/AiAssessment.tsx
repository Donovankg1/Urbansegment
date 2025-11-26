import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Activity, AlertCircle, CheckCircle, ArrowRight, Zap, Globe, Search, Mail, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AiAssessment: React.FC = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'analyzing' | 'complete'>('idle');
  const [loadingText, setLoadingText] = useState('Initializing AI Scanner...');
  const [score, setScore] = useState(0);
  const [targetScore, setTargetScore] = useState(0);

  // Simulated analysis steps
  const loadingSteps = [
    "Handshaking with server...",
    "Parsing DOM structure...",
    "Analyzing semantic SEO tags...",
    "Checking mobile viewport responsiveness...",
    "Evaluating content density...",
    "Calculating conversion probability...",
    "Finalizing Digital Maturity Score..."
  ];

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !email) return;

    setStatus('analyzing');
    let step = 0;

    // Cycle through loading texts
    const textInterval = setInterval(() => {
      if (step < loadingSteps.length) {
        setLoadingText(loadingSteps[step]);
        step++;
      }
    }, 600);

    // Calculate a "pseudo-random" score based on URL length to be deterministic but feel real
    const textHash = url.length + description.length + email.length;
    const calculatedScore = 50 + (textHash % 35); 

    // Finish analysis
    setTimeout(() => {
      clearInterval(textInterval);
      setTargetScore(calculatedScore);
      setStatus('complete');
    }, 4500);
  };

  // Animate the score counting up
  useEffect(() => {
    if (status === 'complete' && score < targetScore) {
      const timer = setTimeout(() => {
        setScore(prev => Math.min(prev + 1, targetScore));
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [score, targetScore, status]);

  const getRating = (s: number) => {
    if (s < 60) return { label: "Needs Optimization", color: "text-red-500", border: "border-red-500", glow: "shadow-red-500/50" };
    if (s < 75) return { label: "Fair / Emerging", color: "text-brand-accent", border: "border-brand-accent", glow: "shadow-brand-accent/50" };
    return { label: "Strong Foundation", color: "text-green-500", border: "border-green-500", glow: "shadow-green-500/50" };
  };

  const rating = getRating(score);

  return (
    <div className="relative group">
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary via-brand-pop to-brand-accent rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
      
      <div className="relative bg-brand-surface rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Text Side */}
          <div className="flex-1 text-center md:text-left">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider mb-6">
                <Zap className="w-3 h-3" />
                <span>AI Rapid Audit</span>
             </div>
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
               How healthy is your digital presence?
             </h2>
             <p className="text-slate-400 mb-8 leading-relaxed">
               Most websites are losing 40-60% of traffic due to poor structure. Our AI scanner evaluates your site in real-time and emails you actionable insights.
             </p>
             <div className="flex items-center gap-4 text-sm text-slate-500 justify-center md:justify-start">
                <span className="flex items-center gap-1"><Lock className="w-4 h-4" /> 100% Free & Secure</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> No Credit Card</span>
             </div>
          </div>

          {/* Interaction Side */}
          <div className="w-full md:w-[450px] bg-brand-dark rounded-2xl p-6 border border-white/5 shadow-inner">
            
            {status === 'idle' && (
              <form onSubmit={handleAnalyze} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1 ml-1">Website URL</label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
                    <input 
                      type="url" 
                      required
                      placeholder="https://yourbusiness.com" 
                      className="w-full pl-10 pr-4 py-3 bg-brand-surface border border-slate-700 rounded-xl text-white placeholder-slate-600 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1 ml-1">Work Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
                    <input 
                      type="email" 
                      required
                      placeholder="name@company.com" 
                      className="w-full pl-10 pr-4 py-3 bg-brand-surface border border-slate-700 rounded-xl text-white placeholder-slate-600 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1 ml-1">Description</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
                    <input 
                      required
                      placeholder="e.g. Retail store in Lusaka" 
                      className="w-full pl-10 pr-4 py-3 bg-brand-surface border border-slate-700 rounded-xl text-white placeholder-slate-600 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </div>

                <Button fullWidth size="lg" type="submit" variant="primary">
                  Run Analysis
                </Button>
              </form>
            )}

            {status === 'analyzing' && (
              <div className="py-12 text-center">
                <div className="relative w-24 h-24 mx-auto mb-8">
                  <div className="absolute inset-0 border-4 border-slate-800 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-brand-primary rounded-full border-t-transparent animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Activity className="w-10 h-10 text-brand-primary animate-pulse" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Analyzing Assets...</h3>
                <p className="text-brand-primary font-mono text-xs animate-pulse">
                  &gt; {loadingText}
                </p>
              </div>
            )}

            {status === 'complete' && (
              <div className="animate-in fade-in zoom-in duration-500 text-center py-4">
                
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-bold">
                    <CheckCircle className="w-3 h-3" />
                    <span>Report sent to {email}</span>
                  </div>
                </div>

                {/* Score Circle */}
                <div className="relative w-40 h-40 mx-auto mb-6 flex items-center justify-center">
                   <div className="absolute inset-0 border-[10px] border-slate-800 rounded-full"></div>
                   <div 
                      className={`absolute inset-0 border-[10px] ${rating.border} rounded-full transition-all duration-1000`}
                      style={{ clipPath: `polygon(0 0, 100% 0, 100% ${score}%, 0 ${score}%)` }} // Simple visual trick, ideally use SVG stroke-dasharray
                   ></div>
                   <div className="text-center z-10">
                      <div className="text-5xl font-bold text-white">{score}</div>
                      <div className="text-xs text-slate-500 uppercase font-bold mt-1">Score</div>
                   </div>
                   {/* Glow behind */}
                   <div className={`absolute inset-0 ${rating.glow} rounded-full blur-xl opacity-20`}></div>
                </div>

                <h3 className={`text-xl font-bold ${rating.color} mb-6`}>{rating.label}</h3>

                <div className="space-y-3">
                  <Button onClick={() => navigate('/contact')} fullWidth variant="accent">
                    Book Free Fix-It Call
                  </Button>
                  <button 
                     onClick={() => { setStatus('idle'); setScore(0); setUrl(''); setDescription(''); setEmail(''); }} 
                     className="text-slate-500 text-sm hover:text-white transition-colors"
                  >
                    Check Another Site
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};