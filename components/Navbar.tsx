import React, { useState, useEffect, useRef } from 'react';
import { Camera, Volume2, VolumeX } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 嘗試啟動音訊
  const attemptPlay = () => {
    if (audioRef.current && !isPlaying && !loadError) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          console.log("GitHub 音訊播放成功");
          removeInteractionListeners();
        })
        .catch(err => {
          console.debug("等待有效使用者互動中...");
        });
    }
  };

  const removeInteractionListeners = () => {
    window.removeEventListener('click', attemptPlay);
    window.removeEventListener('touchstart', attemptPlay);
    window.removeEventListener('mousedown', attemptPlay);
  };

  useEffect(() => {
    // 監聽第一次點擊以解除瀏覽器自動播放限制
    window.addEventListener('click', attemptPlay);
    window.addEventListener('touchstart', attemptPlay);
    window.addEventListener('mousedown', attemptPlay);

    return () => removeInteractionListeners();
  }, [isPlaying, loadError]);

  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => {
          console.error("播放失敗:", err);
          setLoadError(true);
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

          {/* Music Control */}
          <div className="flex items-center">
            <button 
              onClick={toggleMusic}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 ${
                loadError 
                ? 'bg-red-500/20 border-red-500/50 text-red-400'
                : isPlaying 
                  ? 'bg-purple-500/20 border-purple-500/50 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)]' 
                  : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:text-slate-300'
              }`}
            >
              <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">
                {loadError ? "Audio Error" : isPlaying ? "Music On" : "Tap to Play"}
              </span>
              {isPlaying ? (
                <Volume2 className="w-4 h-4 animate-pulse" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>
            
            {/* 音訊來源改為相對路徑，請確保檔案已上傳至 GitHub 倉庫根目錄 */}
            <audio 
              ref={audioRef}
              loop 
              src="./ivan-ai-photo-1.mp3"
              onCanPlayThrough={() => setLoadError(false)}
              onError={() => {
                console.error("找不到音訊檔案！請確認 ivan-ai-photo-1.mp3 已上傳至倉庫根目錄。");
                // 如果相對路徑失敗，嘗試使用 GitHub Raw 絕對路徑作為備援
                if (audioRef.current && !audioRef.current.src.includes('raw.githubusercontent')) {
                   audioRef.current.src = "https://raw.githubusercontent.com/osaivan-beep/ivan-ai-photo-web/main/ivan-ai-photo-1.mp3";
                }
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;