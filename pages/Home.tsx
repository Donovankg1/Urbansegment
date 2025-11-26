import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Target, 
  Zap, 
  ShoppingBag, 
  BarChart3, 
  TrendingUp,
  Cpu,
  Globe,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Play
} from 'lucide-react';
import { TeamMember } from '../types';
import { AiAssessment } from '../components/AiAssessment';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const team: TeamMember[] = [
    {
      name: "Donovan G",
      role: "CEO (USA)",
      bio: "Leading strategy, partnerships, and aligning digital growth with global best practices.",
      image: "https://picsum.photos/seed/donovan/400/500"
    },
    {
      name: "Esperance S",
      role: "COO (Lusaka)",
      bio: "Orchestrating operational excellence, AI pipelines, and logistics for on-the-ground execution.",
      image: "https://picsum.photos/seed/esperance/400/500"
    },
    {
      name: "Peter S",
      role: "CMO (Lusaka)",
      bio: "Driving demand generation and ensuring every campaign delivers measurable ROI.",
      image: "https://picsum.photos/seed/peter/400/500"
    }
  ];

  return (
    <div className="bg-brand-dark overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[100px] animate-blob mix-blend-screen"></div>
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-pop/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen"></div>
          <div className="absolute -bottom-32 left-1/2 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen"></div>
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-brand-primary mb-8 hover:bg-white/10 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            Strategy First. AI Accelerated.
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 tracking-tight leading-[0.9]">
            We Build <br/>
            <span className="bg-gradient-to-r from-brand-primary via-brand-pop to-purple-400 text-transparent bg-clip-text">Digital Engines</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            The dual-hub digital agency bridging <span className="text-white font-semibold">USA Strategy</span> and <span className="text-white font-semibold">African Execution</span>. We help ambitious brands grow revenue through AI content & ecommerce systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="xl" variant="accent" onClick={() => navigate('/contact')}>
              Book Strategy Call
            </Button>
            <div className="flex items-center gap-4 text-sm font-semibold text-slate-400 px-4">
              <span>or</span>
            </div>
            <Button size="xl" variant="secondary" onClick={() => document.getElementById('ai-audit')?.scrollIntoView({ behavior: 'smooth' })}>
              <Zap className="w-5 h-5 mr-2 text-brand-accent" /> Free AI Website Audit
            </Button>
          </div>
          
          <div className="mt-16 flex items-center justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Trusted By Logos Placeholders */}
             <div className="text-slate-500 font-bold text-lg">SHOPIFY</div>
             <div className="text-slate-500 font-bold text-lg">META</div>
             <div className="text-slate-500 font-bold text-lg">GOOGLE ADS</div>
             <div className="text-slate-500 font-bold text-lg">WOOCOMMERCE</div>
          </div>
        </div>
      </section>

      {/* 2. INFINITE TICKER */}
      <div className="bg-brand-primary rotate-1 scale-105 border-y-4 border-brand-dark py-4 overflow-hidden relative z-20 shadow-xl">
        <div className="whitespace-nowrap animate-marquee flex gap-12 text-white font-bold font-serif text-2xl items-center tracking-wider">
           <span>STRATEGY FIRST</span> ✦ <span>ECOMMERCE ENABLEMENT</span> ✦ <span>AI CONTENT VELOCITY</span> ✦ <span>GLOBAL STANDARDS</span> ✦ <span>REVENUE GROWTH</span> ✦
           <span>STRATEGY FIRST</span> ✦ <span>ECOMMERCE ENABLEMENT</span> ✦ <span>AI CONTENT VELOCITY</span> ✦ <span>GLOBAL STANDARDS</span> ✦ <span>REVENUE GROWTH</span> ✦
        </div>
      </div>

      {/* 3. PROBLEM / SOLUTION (BENTO STYLE) */}
      <Section className="bg-brand-dark relative z-10">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Statement */}
          <div className="lg:col-span-2 bg-gradient-to-br from-brand-surface to-slate-900 rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-32 bg-brand-primary/10 rounded-full blur-3xl group-hover:bg-brand-primary/20 transition-all duration-700"></div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 relative z-10">
              The "Post & Pray" Era is Over.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl relative z-10">
              Most agencies just post content and hope for likes. We build <strong>systems</strong> that turn attention into revenue. By combining US-level strategy with local Lusaka execution, we fix the broken link between "marketing" and "sales."
            </p>
            <div className="flex gap-4 relative z-10">
              <div className="flex items-center gap-2 text-white font-medium bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Globe className="w-4 h-4 text-brand-primary" /> Dual-Hub Model
              </div>
              <div className="flex items-center gap-2 text-white font-medium bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Cpu className="w-4 h-4 text-brand-pop" /> AI Powered
              </div>
            </div>
          </div>

          {/* Stat Card */}
          <div className="bg-brand-accent rounded-3xl p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div>
              <div className="text-6xl font-bold mb-2">10x</div>
              <div className="text-xl font-medium opacity-90">Content Velocity</div>
            </div>
            <p className="mt-4 text-white/80 text-sm">
              Using Generative AI, we produce high-quality video & assets faster than any traditional studio.
            </p>
            <ArrowRight className="absolute bottom-8 right-8 w-8 h-8 opacity-50" />
          </div>
        </div>
      </Section>

      {/* 4. AI TOOL SECTION (Sticky/Pop) */}
      <div id="ai-audit" className="py-24 bg-brand-darker relative">
        <div className="container mx-auto px-4">
           <AiAssessment />
        </div>
      </div>

      {/* 5. SERVICES BENTO GRID */}
      <Section className="bg-brand-dark">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-2 block">Our Capabilities</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">
            Engineered for Growth
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          {/* Service 1: Strategy */}
          <div className="md:col-span-2 group relative bg-brand-surface rounded-3xl p-10 border border-white/5 overflow-hidden hover:border-brand-primary/50 transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[80px] group-hover:bg-brand-primary/20 transition-all"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-brand-primary/30">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-white mb-4">Strategy & Advisory</h3>
              <p className="text-slate-400 max-w-md">Market entry, brand positioning, and digital transformation roadmaps led by expert strategists in the US and Zambia.</p>
            </div>
            <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
               <Button variant="outline" size="sm" className="rounded-full">Explore</Button>
            </div>
          </div>

          {/* Service 2: AI Content */}
          <div className="md:col-span-1 group relative bg-gradient-to-b from-brand-surface to-slate-900 rounded-3xl p-10 border border-white/5 overflow-hidden hover:border-brand-pop/50 transition-all duration-500">
             <div className="w-14 h-14 bg-brand-pop rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-brand-pop/30">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">AI Content Velocity</h3>
              <p className="text-slate-400 text-sm">Automated video pipelines and on-model AI photography that cuts production costs by 60%.</p>
          </div>

          {/* Service 3: Ecommerce */}
          <div className="md:col-span-1 group relative bg-brand-surface rounded-3xl p-10 border border-white/5 overflow-hidden hover:border-green-500/50 transition-all duration-500">
             <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-green-500/30">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Ecommerce Ops</h3>
              <p className="text-slate-400 text-sm">Mobile money integration, logistics planning, and conversion rate optimization (CRO).</p>
          </div>

           {/* Service 4: Performance */}
           <div className="md:col-span-2 group relative bg-brand-surface rounded-3xl p-10 border border-white/5 overflow-hidden hover:border-brand-accent/50 transition-all duration-500">
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-accent/5 to-transparent"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="w-14 h-14 bg-brand-accent rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-brand-accent/30">
                  <BarChart3 className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-white mb-4">Performance Media</h3>
                <p className="text-slate-400 max-w-md">Paid campaigns on Meta, Google, and LinkedIn that prioritize ROAS over vanity metrics.</p>
              </div>
              <div className="bg-brand-dark p-6 rounded-2xl border border-white/10 min-w-[200px]">
                 <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Avg Client ROAS</div>
                 <div className="text-4xl font-bold text-brand-accent">4.2x</div>
                 <div className="text-xs text-green-500 mt-1 flex items-center gap-1"><TrendingUp className="w-3 h-3" /> +12% vs Market</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. HYBRID ADVANTAGE (Visual) */}
      <section className="py-24 bg-white text-brand-dark overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-16">
           <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">The Dual-Hub Advantage</h2>
           <p className="text-slate-600 text-lg max-w-2xl mx-auto">
             How we deliver global standards at local speed.
           </p>
        </div>

        <div className="container mx-auto px-4">
           <div className="relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-green-500 transform -translate-y-1/2 z-0"></div>
              
              <div className="grid md:grid-cols-3 gap-8 relative z-10">
                 {/* Hub 1 */}
                 <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-center transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-20 h-20 bg-blue-50 rounded-full mx-auto flex items-center justify-center mb-6 border-4 border-white shadow-lg">
                       <Globe className="w-8 h-8 text-brand-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">USA Hub</h3>
                    <p className="text-slate-500 text-sm">Strategy, Trends & Partnerships</p>
                 </div>

                 {/* Center */}
                 <div className="bg-brand-dark p-8 rounded-3xl shadow-2xl text-center text-white transform scale-110 border-4 border-white">
                    <div className="w-20 h-20 bg-white/10 rounded-full mx-auto flex items-center justify-center mb-6 backdrop-blur-md">
                       <Clock className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">24/7 Workflow</h3>
                    <p className="text-slate-400 text-sm">Work never stops across timezones.</p>
                 </div>

                 {/* Hub 2 */}
                 <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-center transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-20 h-20 bg-green-50 rounded-full mx-auto flex items-center justify-center mb-6 border-4 border-white shadow-lg">
                       <Cpu className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Lusaka Hub</h3>
                    <p className="text-slate-500 text-sm">Operations, Logistics & Context</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 7. CTA / FOOTER PREVIEW */}
      <section className="py-32 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-red-500">Scale?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Join the businesses switching to strategy-first marketing. No fluff, just measurable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <Button variant="accent" size="xl" onClick={() => navigate('/contact')}>
               Book Your Strategy Session
             </Button>
             <Button variant="outline" size="xl" onClick={() => navigate('/pricing')}>
               View Pricing Packages
             </Button>
          </div>
        </div>
      </section>

    </div>
  );
};