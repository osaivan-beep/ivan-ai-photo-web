import React, { useState, useEffect, useRef } from 'react';
import { Camera, Volume2, VolumeX } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true); // 預設改為 true
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 處理預設播放
  useEffect(() => {
    if (audioRef.current && isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          // 瀏覽器通常會阻止無互動的自動播放，這是正常的
          console.log("Auto-play was prevented by the browser. Waiting for user interaction.");
          // 如果被阻止，我們可以選擇將狀態設回 false，或者維持 true 等待第一次互動觸發
          // 這裡維持 true，讓 UI 顯示「音樂已開啟」的意圖
        });
      }
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.log("Audio play blocked by browser. User interaction required.", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-1.5' : 'bg-transparent py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-tr from-purple-500 via-indigo-500 to-red-500 p-1 rounded-xl">
              <Camera className="text-white w-4 h-4" />
            </div>
            <span className="text-lg font-black text-white tracking-tighter">
              伊凡 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-400">Ai</span> photo
            </span>
          </div>

          {/* Right Section: Music Control */}
          <div className="flex items-center">
            <button 
              onClick={toggleMusic}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 ${
                isPlaying 
                ? 'bg-purple-500/20 border-purple-500/50 text-purple-400' 
                : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:text-slate-300'
              }`}
              title={isPlaying ? "關閉背景音樂" : "開啟背景音樂"}
            >
              <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">
                {isPlaying ? "Music On" : "Music Off"}
              </span>
              {isPlaying ? (
                <Volume2 className="w-4 h-4 animate-pulse" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>
            
            {/* Hidden Audio Element - 使用輕柔的環境背景音樂 */}
            <audio 
              ref={audioRef}
              autoPlay // 加入自動播放屬性
              loop 
              src="https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;