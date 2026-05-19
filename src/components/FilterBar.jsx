import React from 'react';
import { Search, EyeOff, Eye } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const FilterBar = ({ searchTerm, onSearchChange, hideOwned, onToggleHideOwned }) => {
  return (
    <div className="sticky top-0 z-30 bg-surface-0/95 backdrop-blur-md pt-4 pb-4 px-4 sm:px-0 flex flex-col gap-3">
      <div className="relative flex items-center">
        <span className="absolute left-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-primary" />
        </span>
        <input
          type="text"
          className="block w-full pl-12 pr-4 py-3.5 bg-surface-1 border border-slate-200 rounded-full font-sans text-base focus:outline-none focus:ring-2 focus:ring-success focus:border-transparent transition-shadow shadow-sm"
          placeholder="Buscar país..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      
      <div className="flex items-center justify-between px-2">
        <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-widest">Ocultar las que tengo</span>
        <button
          onClick={onToggleHideOwned}
          className={cn(
            "relative w-12 h-6 rounded-full transition-colors active:scale-95",
            hideOwned ? "bg-success" : "bg-slate-300"
          )}
          aria-label="Alternar mostrar faltantes"
        >
          <div className={cn(
            "absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-200 shadow-sm",
            hideOwned ? "translate-x-6" : "translate-x-0"
          )}></div>
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
