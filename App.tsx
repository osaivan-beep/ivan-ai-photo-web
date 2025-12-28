import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Pricing />
      </main>
      <Footer />
      
      {/* Global Scroll Indicator */}
      <div className="fixed bottom-8 right-8 z-40">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="glass p-3 rounded-full hover:bg-slate-900 transition-all group border-slate-800"
        >
          <svg className="w-6 h-6 text-slate-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default App;