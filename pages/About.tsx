import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { MapPin, Globe, Users } from 'lucide-react';

export const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-brand-dark py-20 text-center relative overflow-hidden">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-sky-500/10 to-transparent opacity-30"></div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 relative z-10">Strategy Without Borders.</h1>
        <p className="text-slate-400 max-w-xl mx-auto relative z-10">Bridging the gap between strategic rigor and operational velocity.</p>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg text-slate-600 mb-16">
            <p className="lead text-xl text-brand-dark font-medium mb-6 border-l-4 border-brand-primary pl-6 italic">
              "We founded Urban Segment to answer a simple question: How can ambitious businesses access global-standard marketing execution without the bloat of traditional agency networks?"
            </p>
            <p className="mb-4">
              Urban Segment began with a realization. Digital markets are evolving rapidly with AI automation and sophisticated ecommerce funnels, but many businesses struggle to find partners who can execute at speed while maintaining strategic depth.
            </p>
            <p className="mb-4">
              We established a unique <strong>Dual-Hub Model</strong>: Strategy and partnerships led from the US, with a robust creative and operations hub in Lusaka.
            </p>
            <p>
              This means our clients get the best of both worlds: The advanced technical capabilities of a global agency, delivered with the agility and cost-effectiveness of a distributed team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-6 bg-slate-50 rounded-lg">
                <Globe className="w-8 h-8 text-brand-primary mx-auto mb-4"/>
                <h3 className="font-bold text-brand-dark mb-2">Global Strategy</h3>
                <p className="text-sm text-slate-600">Methods tested in competitive global markets.</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-lg">
                <MapPin className="w-8 h-8 text-green-600 mx-auto mb-4"/>
                <h3 className="font-bold text-brand-dark mb-2">Agile Execution</h3>
                <p className="text-sm text-slate-600">Efficient operations for faster turnaround.</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-lg">
                <Users className="w-8 h-8 text-brand-accent mx-auto mb-4"/>
                <h3 className="font-bold text-brand-dark mb-2">Hybrid Talent</h3>
                <p className="text-sm text-slate-600">Best-in-class talent from two continents.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">Our Mission</h3>
              <p className="text-slate-600">
                To accelerate the digital maturity of ambitious businesses and public sector institutions, helping them compete on a global standard through AI and ecommerce.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">Our Philosophy</h3>
              <p className="text-slate-600">
                <strong>Strategy First, Speed Always.</strong> We don't move until we know where we are going, but once we do, we use technology to get there faster than anyone else.
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      <Section className="bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-bold text-brand-dark">Leadership</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {/* Bios reiterated here for About context */}
                <div className="bg-white p-6 shadow-sm rounded-lg">
                    <h4 className="font-bold text-lg text-brand-dark">Donovan G.</h4>
                    <span className="text-xs font-bold text-brand-primary uppercase tracking-wide block mb-4">CEO (USA)</span>
                    <p className="text-sm text-slate-600">Bringing 10+ years of digital strategy experience. Focuses on partnerships and aligning Urban Segment with the global digital economy.</p>
                </div>
                <div className="bg-white p-6 shadow-sm rounded-lg">
                    <h4 className="font-bold text-lg text-brand-dark">Esperance S.</h4>
                    <span className="text-xs font-bold text-brand-primary uppercase tracking-wide block mb-4">COO (Lusaka)</span>
                    <p className="text-sm text-slate-600">The operational backbone. Expert in AI content governance and logistics, ensuring promises made are promises kept.</p>
                </div>
                <div className="bg-white p-6 shadow-sm rounded-lg">
                    <h4 className="font-bold text-lg text-brand-dark">Peter S.</h4>
                    <span className="text-xs font-bold text-brand-primary uppercase tracking-wide block mb-4">CMO (Lusaka)</span>
                    <p className="text-sm text-slate-600">Market positioning expert. Ensures that the "Urban Segment" brand and our client brands resonate deeply with their audiences.</p>
                </div>
            </div>
          </div>
      </Section>

      <Section className="bg-brand-primary text-white text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Join the Digital Shift</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            We are selective with our partnerships. If you are ready for serious growth, we are ready to build the engine.
          </p>
          <Button variant="secondary" onClick={() => navigate('/contact')}>Work With Us</Button>
      </Section>
    </div>
  );
};