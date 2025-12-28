
import React from 'react';
import { PlayCircle, ChevronRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-red-600/20 rounded-full blur-[120px] animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(2,6,23,0.8)_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-bold text-indigo-300 mb-8 border-indigo-500/30 animate-bounce">
          <Sparkles size={14} className="text-indigo-400" />
          從 0 到 1 的憑空創造，到精雕細琢的專業後製
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-red-400">
            輸入自然語言-就能輕鬆修圖
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
          「不只有傳統修圖功能,更具有超強AI語言修 圖。」
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="https://ivan-ai-photo-web.web.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-r from-purple-600 via-indigo-600 to-red-600 p-[1px] rounded-full transition-all hover:scale-105 active:scale-95 overflow-hidden shadow-2xl shadow-indigo-600/40 inline-block"
          >
            <span className="flex items-center gap-2 bg-slate-950 px-10 py-5 rounded-full transition-all group-hover:bg-transparent text-white font-black text-lg">
              立即開啟創作之旅
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <button className="flex items-center gap-3 text-white hover:text-slate-300 font-bold transition-all group">
            <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-slate-500 transition-colors">
              <PlayCircle className="text-white group-hover:scale-110 transition-transform" />
            </div>
            觀看展示影片
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
