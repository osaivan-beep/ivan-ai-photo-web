import React, { useState } from 'react';
import { X, AlertTriangle } from 'lucide-react';

const Footer: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer id="footer" className="bg-slate-950 pt-16 pb-12 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Links Section - Centered */}
          <div className="flex gap-12 text-slate-400 text-sm font-bold tracking-widest">
            <button 
              onClick={() => setShowPrivacy(true)}
              className="hover:text-white transition-all hover:scale-110 active:scale-95"
            >
              隱私條款
            </button>
          </div>

          {/* Copyright Section - Centered */}
          <p className="text-slate-600 text-[10px] tracking-[0.2em] uppercase font-medium">
            © {new Date().getFullYear()} 伊凡 Ai photo. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>

      {/* Privacy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowPrivacy(false)} />
          <div className="relative glass max-w-md w-full p-8 rounded-3xl border-slate-800 shadow-2xl">
            <button 
              onClick={() => setShowPrivacy(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-white"
            >
              <X size={20} />
            </button>
            <div className="flex items-center gap-3 text-yellow-500 mb-6">
              <AlertTriangle size={24} />
              <h4 className="text-xl font-black">重要：AI 的不確定性</h4>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm mb-6">
              AI 生成本質上是隨機的。即便輸入相同的指令，每次生成的結果也會有所不同。
            </p>
            <p className="text-slate-300 leading-relaxed text-sm">
              <span className="text-white font-bold">點數消耗代表購買「雲端算力時間」</span>，一旦運算開始即無法退回點數，不保證每次風格表現都完全符合您的想像。
            </p>
            <button 
              onClick={() => setShowPrivacy(false)}
              className="w-full mt-8 py-3 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 transition-colors"
            >
              我已理解
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;