import React from 'react';
import { PLANS } from '../constants';

const LineIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="w-6 h-6 fill-current" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M24 10.304c0-5.231-5.381-9.486-12-9.486s-12 4.255-12 9.486c0 4.689 4.265 8.604 10.022 9.333.39.084.92.257 1.054.589.121.302.079.774.039 1.079l-.171 1.026c-.053.313-.254 1.225 1.096.668 1.35-.558 7.288-4.293 9.942-7.346 1.341-1.491 2.018-3.354 2.018-5.349zm-15.833 4.239c0 .195-.158.354-.354.354h-1.921c-.195 0-.354-.159-.354-.354v-3.791c0-.195.159-.354.354-.354h.354c.195 0 .354.159.354.354v3.083h1.213c.196 0 .354.159.354.354v.354zm2.126 0c0 .195-.159.354-.354.354h-.354c-.195 0-.354-.159-.354-.354v-3.791c0-.195.159-.354.354-.354h.354c.195 0 .354.159.354.354v3.791zm4.624 0c0 .195-.158.354-.354.354h-.354c-.195 0-.354-.159-.354-.354v-2.348l-1.378 2.585c-.07.132-.206.214-.356.214h-.001c-.15 0-.286-.082-.357-.213l-1.378-2.587v2.349c0 .195-.159.354-.354.354h-.354c-.195 0-.354-.159-.354-.354v-3.791c0-.195.159-.354.354-.354h.473c.123 0 .237.064.301.171l1.666 3.124 1.665-3.124c.065-.107.178-.171.301-.171h.474c.196 0 .354.159.354.354v3.791zm3.251-2.22c0 .195-.158.354-.354.354h-1.213v.714h1.213c.196 0 .354.159.354.354v.354c0 .195-.158.354-.354.354h-1.921c-.195 0-.354-.159-.354-.354v-3.791c0-.195.159-.354.354-.354h1.921c.196 0 .354.159.354.354v.354c0 .195-.158.354-.354.354h-1.213v.714h1.213c.196 0 .354.159.354.354v.354z"/>
  </svg>
);

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-black text-white">積分加購方案</h3>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center max-w-4xl mx-auto">
          {PLANS.map((plan) => (
            <div 
              key={plan.name}
              className={`relative flex-1 p-10 rounded-[32px] transition-all duration-500 border ${
                plan.isPopular 
                ? 'bg-[#1a1f2e] border-purple-500/50 shadow-2xl shadow-purple-500/10' 
                : 'bg-[#161b22] border-slate-800'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] px-3 py-1 font-black uppercase rounded-bl-xl shadow-lg">
                  超值推薦
                </div>
              )}

              <h4 className="text-slate-500 font-bold mb-4">
                {plan.name}
              </h4>
              
              <div className="mb-4">
                <span className={`text-5xl font-black ${
                  plan.points === 500 ? 'text-[#22c55e]' : 'text-[#eab308]'
                }`}>
                  {plan.points} 積分
                </span>
              </div>

              <div className="text-2xl font-bold text-white mb-4">
                {plan.price}
              </div>

              {plan.isPopular && (
                <div className="text-[#a855f7] text-sm font-bold mb-10">
                  加贈 100 積分！
                </div>
              )}
              
              {!plan.isPopular && <div className="h-10 mb-5"></div>}

              <a 
                href="https://line.me/ti/p/@your_line_id" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-2xl font-black text-lg transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 ${
                plan.isPopular
                ? 'bg-[#6366f1] text-white shadow-lg shadow-indigo-500/20'
                : 'bg-white text-black'
              }`}>
                <LineIcon />
                與伊凡聯絡
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;