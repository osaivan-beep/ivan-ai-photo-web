import React, { useState, useEffect, useRef } from 'react';
import { Camera, Volume2, VolumeX } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true); 
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 強化版播放邏輯
  useEffect(() => {
    const startAudio = () => {
      if (audioRef.current && isPlaying) {
        // 嘗試播放
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise.then(() => {
            // 播放成功後移除所有啟動監聽器
            window.removeEventListener('click', startAudio);
            window.removeEventListener('touchstart', startAudio);
            window.removeEventListener('scroll', startAudio);
            window.removeEventListener('mousedown', startAudio);
          }).catch(err => {
            // 失敗通常是瀏覽器政策，繼續等待下一次點擊
            console.debug("Autoplay waiting for active user interaction...");
          });
        }
      }
    };

    // 監聽更多用戶行為，只要用戶對網頁有任何動作就嘗試啟動音樂
    window.addEventListener('click', startAudio);
    window.addEventListener('touchstart', startAudio);
    window.addEventListener('scroll', startAudio);
    window.addEventListener('mousedown', startAudio);

    // 初始嘗試
    startAudio();

    return () => {
      window.removeEventListener('click', startAudio);
      window.removeEventListener('touchstart', startAudio);
      window.removeEventListener('scroll', startAudio);
      window.removeEventListener('mousedown', startAudio);
    };
  }, [isPlaying]);

  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.log("Audio play blocked:", error);
      });
    }
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
            
            {/* Background Music Audio Element */}
            {/* 修正：使用 docs.google.com/uc?id= 格式來播放 Google Drive 音訊 */}
            <audio 
              ref={audioRef}
              loop 
              preload="auto"
              src="https://docs.google.com/uc?id=1M9EQz6y-O1defcxIdwZStVdB4ek4dRwz"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;