import React from 'react';
import { SHOWCASE_IMAGES } from '../constants';

const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="pt-32 pb-12 bg-slate-950">
      {/* 標題與 Artistic Gallery 文字已根據要求移除 */}
      
      <div className="relative w-full overflow-hidden py-10">
        <div className="animate-marquee flex gap-8 whitespace-nowrap">
          {[...SHOWCASE_IMAGES, ...SHOWCASE_IMAGES].map((img, idx) => (
            <div 
              key={idx} 
              // 使用 aspect-[9/16] 確保 9:16 的圖片能完整顯示
              // 寬度設定為 w-56 (移動端) 與 w-80 (桌面端)，維持縮小後的精緻感
              className="relative w-56 md:w-80 aspect-[9/16] flex-shrink-0 group overflow-hidden rounded-3xl border border-slate-800/50 shadow-2xl shadow-purple-500/5"
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute bottom-6 left-6">
                <p className="text-white text-xl font-black tracking-tight mb-1">{img.alt}</p>
                <p className="text-slate-400 text-[10px] italic font-light">"Powered by Ivan AI Engine"</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Overlay fade effect on sides */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />
      </div>
    </section>
  );
};

export default Showcase;