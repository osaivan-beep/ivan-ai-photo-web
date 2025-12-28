
import React from 'react';
import { WHY_US } from '../constants';
import { ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="flex-1">
            <h2 className="text-purple-400 font-black tracking-widest uppercase text-sm mb-4">Professional Lab</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8">專為創作者打造的<br />AI 影像實驗室</h3>
            <p className="text-slate-400 text-lg font-light leading-relaxed mb-6">
              我們深知 AI 創作的不確定性，因此開發了獨家的「提示詞工坊」與「人像錨定」技術，讓您在享受 AI 強大算力的同時，依然能精準掌控作品的風格與細節。
            </p>
            <p className="text-slate-400 text-lg font-light leading-relaxed">
              從細膩的光影筆刷到大氣的藝術印章，從靜態的圖片編輯到動態的影片腳本發想，我們將先進的 Gemini AI 技術轉化為最直覺的創作工具。在 伊凡 Ai photo，您的每一個點子，都值得以最完美的形式呈現。
            </p>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-red-500 rounded-3xl blur opacity-20 animate-pulse"></div>
            <div className="relative glass p-8 rounded-3xl border border-slate-800">
              <div className="grid grid-cols-2 gap-6">
                <div className="aspect-square bg-slate-900 rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-slate-800 hover:border-purple-500 transition-colors">
                  <div className="text-3xl font-black text-white mb-2">99%</div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">人像精準度</div>
                </div>
                <div className="aspect-square bg-slate-900 rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-slate-800 hover:border-purple-500 transition-colors">
                  <div className="text-3xl font-black text-white mb-2">10+</div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">風格矩陣</div>
                </div>
                <div className="aspect-square bg-slate-900 rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-slate-800 hover:border-purple-500 transition-colors">
                  <div className="text-3xl font-black text-white mb-2">8</div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">藝術印章</div>
                </div>
                <div className="aspect-square bg-slate-900 rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-slate-800 hover:border-purple-500 transition-colors">
                  <div className="text-3xl font-black text-white mb-2">AI</div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">詩詞生成</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl font-black text-white">為什麼選擇我們？</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_US.map((item) => (
            <div key={item.title} className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:bg-slate-900 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                <ShieldCheck className="text-purple-500" size={24} />
              </div>
              <h4 className="text-lg font-bold text-white mb-4">{item.title}</h4>
              <p className="text-slate-400 text-sm font-light leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
