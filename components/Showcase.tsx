
import React from 'react';
import { SHOWCASE_IMAGES } from '../constants';

const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="text-red-400 font-black tracking-widest uppercase text-sm mb-4">Artistic Gallery</h2>
        <h3 className="text-4xl md:text-5xl font-black text-white">見證文字的力量</h3>
      </div>
      
      <div className="relative w-full overflow-hidden py-10">
        <div className="animate-marquee flex gap-8 whitespace-nowrap">
          {[...SHOWCASE_IMAGES, ...SHOWCASE_IMAGES].map((img, idx) => (
            <div 
              key={idx} 
              className="relative w-80 h-96 md:w-[450px] md:h-[600px] flex-shrink-0 group overflow-hidden rounded-3xl"
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute bottom-8 left-8">
                <p className="text-white text-2xl font-black tracking-tight mb-1">{img.alt}</p>
                <p className="text-slate-400 text-sm italic font-light">"Powered by Ivan AI Engine"</p>
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
