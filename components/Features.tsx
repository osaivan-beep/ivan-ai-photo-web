import React, { useState } from 'react';
import { FEATURES } from '../constants';
import { Feature } from '../types';
import { X, ArrowRight, ExternalLink } from 'lucide-react';

const Features: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  const openDetail = (feature: Feature) => {
    setSelectedFeature(feature);
    document.body.style.overflow = 'hidden';
  };

  const closeDetail = () => {
    setSelectedFeature(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="features" className="pt-12 pb-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6">十二大核心功能</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            結合尖端生成式 AI 技術，點擊任一項功能以查看詳細說明與應用場景。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <button 
              key={feature.id} 
              onClick={() => openDetail(feature)}
              className="group text-left relative p-8 rounded-3xl transition-all duration-500 glass hover:bg-slate-900/80 hover:border-purple-500/50 hover:-translate-y-2 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute top-0 right-0 -translate-y-full translate-x-full w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full transition-transform duration-700 group-hover:translate-x-1/2 group-hover:-translate-y-1/2" />
              
              <div className="bg-slate-900 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-slate-800 group-hover:border-purple-500/50 transition-colors shadow-inner">
                <feature.icon className="text-purple-500 w-7 h-7" />
              </div>
              
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors flex items-center gap-2">
                {feature.title.split('(')[0]}
                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-purple-400" />
              </h4>

              <p className="text-purple-300/70 text-xs font-bold uppercase tracking-wider mb-4">
                {feature.subtitle}
              </p>
              
              <p className="text-slate-400 text-sm leading-relaxed font-light line-clamp-3 group-hover:text-slate-300 transition-colors whitespace-pre-line">
                {feature.description}
              </p>

              <div className="mt-6 flex items-center text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-purple-400 transition-colors">
                點擊查看詳細說明
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detail View Overlay (Simulated New Webpage) */}
      {selectedFeature && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl cursor-pointer"
            onClick={closeDetail}
          />
          
          <div className="relative w-full max-w-4xl glass rounded-[40px] border-slate-800 p-8 md:p-16 overflow-y-auto max-h-[90vh] shadow-2xl animate-in zoom-in-95 duration-300">
            <button 
              onClick={closeDetail}
              className="absolute top-8 right-8 text-slate-400 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="bg-slate-900 w-24 h-24 rounded-3xl flex items-center justify-center mb-10 border border-slate-800 shadow-2xl shadow-purple-500/10">
                <selectedFeature.icon className="text-purple-500 w-12 h-12" />
              </div>

              <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-black tracking-widest uppercase mb-6">
                伊凡 Ai photo 核心技術
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
                {selectedFeature.title}
              </h2>
              
              <p className="text-2xl md:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-400 mb-10">
                {selectedFeature.subtitle}
              </p>

              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-transparent mb-12" />

              <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl text-left md:text-center whitespace-pre-line">
                {selectedFeature.description}
              </p>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                <button 
                  onClick={closeDetail}
                  className="py-5 px-8 rounded-2xl bg-slate-900 border border-slate-800 text-white font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-3"
                >
                  返回主首頁
                </button>
                <a 
                  href="https://ivan-ai-photo-web.web.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="py-5 px-8 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold hover:scale-105 transition-all flex items-center justify-center gap-3"
                >
                  立即體驗此功能
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Features;