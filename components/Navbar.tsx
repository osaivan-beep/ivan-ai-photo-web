import React, { useState, useEffect, useRef } from 'react';
import { Camera, Volume2, VolumeX } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // 預設先關閉，由點擊喚醒
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 嘗試喚醒音訊的函數
  const startAudio = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          console.log("音訊播放成功");
          // 播放成功後移除全域監聽
          removeListeners();
        })
        .catch(err => {
          console.debug("瀏覽器限制自動播放，等待使用者互動...");
        });
    }
  };

  const removeListeners = () => {
    window.removeEventListener('click', startAudio);
    window.removeEventListener('touchstart', startAudio);
    window.removeEventListener('mousedown', startAudio);
    window.removeEventListener('keydown', startAudio);
  };

  useEffect(() => {
    // 監聽各種互動
    window.addEventListener('click', startAudio);
    window.addEventListener('touchstart', startAudio);
    window.addEventListener('mousedown', startAudio);
    window.addEventListener('keydown', startAudio);

    return () => removeListeners();
  }, [isPlaying]);

  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.error("手動啟動失敗:", err));
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
                ? 'bg-purple-500/20 border-purple-500/50 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)]' 
                : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:text-slate-300'
              }`}
              title={isPlaying ? "關閉背景音樂" : "開啟背景音樂"}
            >
              <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">
                {isPlaying ? "Music On" : "Tap to Play"}
              </span>
              {isPlaying ? (
                <Volume2 className="w-4 h-4 animate-pulse" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>
            
            {/* Background Music Audio Element */}
            {/* 使用 docs.google.com + export=download 加上 referrerPolicy 以獲得最佳相容性 */}
            <audio 
              ref={audioRef}
              loop 
              preload="auto"
              referrerPolicy="no-referrer"
              src="https://docs.google.com/uc?export=download&id=1M9EQz6y-O1defcxIdwZStVdB4ek4dRwz"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;