import React, { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import isotipoPelota from '../assets/isotipo-pelota.png';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const SplashScreen = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Show splash screen for 1.5s, then start fade out animation
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      // Wait for fade out animation (500ms) to finish before unmounting
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-surface-0 transition-opacity duration-500",
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <div className="flex flex-col items-center animate-pulse duration-1000">
        {/* Placeholder for the user's PNG image */}
        <div className="w-24 h-24 mb-6 rounded-full bg-slate-100 flex items-center justify-center border-2 border-slate-200 overflow-hidden shadow-sm">
          <img 
            src={isotipoPelota} 
            alt="Isotipo Pelota" 
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback if image is missing so it doesn't look broken
              e.target.onerror = null; 
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '<span class="text-slate-400 text-xs text-center p-2">Logo<br/>Placeholder</span>';
            }}
          />
        </div>
        
        <h1 className="font-sans text-2xl font-bold text-primary tracking-tight">Album Mundial 2026</h1>
        <p className="text-slate-500 text-sm mt-2 font-mono uppercase tracking-widest">Collector</p>
      </div>
    </div>
  );
};

export default SplashScreen;
