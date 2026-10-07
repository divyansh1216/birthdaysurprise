import { useEffect, useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import { siteConfig } from '../data/content';
import { cn } from '../utils/cn';

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(siteConfig.music.url);
    audioRef.current.loop = true;
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Expose togglePlay globally so Hero can start music
  useEffect(() => {
    (window as any).startMusic = () => {
      if (!isPlaying && audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    };
  }, [isPlaying]);

  return (
    <button
      onClick={togglePlay}
      className={cn(
        "fixed bottom-6 right-6 z-50 p-4 rounded-full glass-panel transition-all duration-300 hover:scale-110",
        isPlaying ? "text-rose-300 shadow-[0_0_15px_rgba(253,186,179,0.5)]" : "text-white"
      )}
    >
      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
    </button>
  );
};
