
import React from 'react';
import { PLANS } from '../constants';

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

              <button className={`w-full py-4 rounded-2xl font-black text-lg transition-all transform hover:scale-[1.02] active:scale-95 ${
                plan.isPopular
                ? 'bg-[#6366f1] text-white shadow-lg shadow-indigo-500/20'
                : 'bg-white text-black'
              }`}>
                立即訂購
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
