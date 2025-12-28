
import React from 'react';
import { RotateCw } from 'lucide-react';

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-[#1e293b]/30 border border-slate-800 rounded-[32px] p-8 md:p-12">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
              <RotateCw size={18} className="text-red-400" />
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">14. 常見問題與錯誤排除</h2>
          </div>

          <div className="space-y-10">
            {/* Rate Limit */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-10 border border-blue-900/50 bg-blue-950/20 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400 font-mono text-sm">429</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">系統忙碌 (Rate Limit)</h3>
                <p className="text-slate-400 leading-relaxed">
                  這是因為 Google 伺服器短時間內處理過多請求。請等待約 1-2 分鐘後重新點擊「重試」即可恢復。
                </p>
              </div>
            </div>

            {/* Timeout */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-10 border border-blue-900/50 bg-blue-950/20 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400 font-mono text-xs">Timeout</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">連線逾時</h3>
                <p className="text-slate-400 leading-relaxed">
                  AI 生成高解析度圖片有時需 30 秒以上。若網路環境不穩會導致斷線。建議更換穩定 Wi-Fi 後再試。
                </p>
              </div>
            </div>

            {/* Fail */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-10 border border-blue-900/50 bg-blue-950/20 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400 font-mono text-xs">Fail</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">生成失敗扣點</h3>
                <p className="text-slate-400 leading-relaxed">
                  若發生極端系統錯誤且已被扣點，請截圖錯誤訊息傳送給管理員，我們將核對後台日誌並為您手動補回積分。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
