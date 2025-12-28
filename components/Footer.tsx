
import React, { useState } from 'react';
import { X, AlertTriangle, RotateCw } from 'lucide-react';

const Footer: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTroubleshooting, setShowTroubleshooting] = useState(false);

  return (
    <footer id="footer" className="bg-slate-950 pt-16 pb-12 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Links Section - Centered */}
          <div className="flex gap-12 text-slate-400 text-sm font-bold tracking-widest">
            <button 
              onClick={() => setShowTroubleshooting(true)}
              className="hover:text-white transition-all hover:scale-110 active:scale-95"
            >
              問題排除
            </button>
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

      {/* Troubleshooting Modal */}
      {showTroubleshooting && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowTroubleshooting(false)} />
          <div className="relative glass max-w-2xl w-full p-8 md:p-12 rounded-[40px] border-slate-800 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button 
              onClick={() => setShowTroubleshooting(false)}
              className="absolute top-6 right-6 text-slate-500 hover:text-white"
            >
              <X size={24} />
            </button>
            
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <RotateCw size={18} className="text-red-400" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">常見問題與錯誤排除</h2>
            </div>

            <div className="space-y-10">
              {/* Rate Limit */}
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-10 border border-blue-900/50 bg-blue-950/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400 font-mono text-sm">429</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">系統忙碌 (Rate Limit)</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    這是因為 Google 伺服器短時間內處理過多請求。請等待約 1-2 分鐘後重新點擊「重試」即可恢復。
                  </p>
                </div>
              </div>

              {/* Timeout */}
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-10 border border-blue-900/50 bg-blue-950/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400 font-mono text-xs">Timeout</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">連線逾時</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    AI 生成高解析度圖片有時需 30 秒以上。若網路環境不穩會導致斷線。建議更換穩定 Wi-Fi 後再試。
                  </p>
                </div>
              </div>

              {/* Fail */}
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-10 border border-blue-900/50 bg-blue-950/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400 font-mono text-xs">Fail</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">生成失敗扣點</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    若發生極端系統錯誤且已被扣點，請截圖錯誤訊息傳送給管理員，我們將核對後台日誌並為您手動補回積分。
                  </p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setShowTroubleshooting(false)}
              className="w-full mt-10 py-4 bg-slate-800 text-white rounded-2xl font-bold hover:bg-slate-700 transition-colors"
            >
              關閉視窗
            </button>
          </div>
        </div>
      )}

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
