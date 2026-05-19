import React from 'react';
import { ALBUM_TOTAL_STICKERS } from '../data/albumData';
import { X, Copy } from 'lucide-react';

const ProgressDashboard = ({ state }) => {
  const ownedCount = Object.values(state).filter(s => s.owned).length;
  const repeatedCount = Object.values(state).filter(s => s.repeated).length;
  const missingCount = ALBUM_TOTAL_STICKERS - ownedCount;
  
  const percentage = Math.round((ownedCount / ALBUM_TOTAL_STICKERS) * 100);

  // SVG Circle calculation
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  // Calculate offset based on percentage (100% = 0 offset, 0% = circumference offset)
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <section className="bg-surface-1 rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200/60 mx-4 sm:mx-0 mt-6 sm:mt-8 relative overflow-hidden">
      
      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-success/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>

      <div className="flex items-center justify-between mb-6 relative z-10">
        <div>
          <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-widest">Progreso Total</span>
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-primary mt-1">
            {ownedCount} / {ALBUM_TOTAL_STICKERS} <span className="text-success text-lg sm:text-xl font-bold ml-1">({percentage}%)</span>
          </h2>
        </div>
        
        {/* Circular Progress SVG */}
        <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
          <svg className="w-full h-full transform -rotate-90">
            {/* Background circle */}
            <circle 
              className="text-slate-200" 
              cx="32" 
              cy="32" 
              fill="transparent" 
              r={radius} 
              stroke="currentColor" 
              strokeWidth="4"
            />
            {/* Progress circle */}
            <circle 
              className="text-success transition-all duration-1000 ease-out" 
              cx="32" 
              cy="32" 
              fill="transparent" 
              r={radius} 
              stroke="currentColor" 
              strokeWidth="4"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute font-mono text-sm font-bold text-primary">{percentage}%</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 relative z-10">
        {/* Missing Card */}
        <div className="bg-surface-0 p-3 rounded-lg flex items-center gap-3 border border-slate-100 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
            <X className="text-red-500 w-5 h-5" />
          </div>
          <div>
            <p className="font-mono text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Faltan</p>
            <p className="font-sans font-bold text-lg text-primary leading-tight">{missingCount}</p>
          </div>
        </div>

        {/* Repeated Card */}
        <div className="bg-surface-0 p-3 rounded-lg flex items-center gap-3 border border-slate-100 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
            <Copy className="text-warning w-5 h-5" />
          </div>
          <div>
            <p className="font-mono text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Repes</p>
            <p className="font-sans font-bold text-lg text-primary leading-tight">{repeatedCount}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressDashboard;
