import React from 'react';
import { CheckCircle2, CopyPlus } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const StickerCard = React.memo(({ id, number, data, onToggleOwned, onToggleRepeated }) => {
  const isOwned = data?.owned;
  const isRepeated = data?.repeated;

  return (
    <div
      onClick={() => onToggleOwned(id)}
      className={cn(
        "relative flex flex-col items-center justify-center aspect-[3/4] rounded-lg cursor-pointer transition-all duration-200 select-none",
        "active:scale-[0.98]",
        isOwned 
          ? "bg-surface-0 border border-success shadow-sm" 
          : "bg-surface-1 border border-dashed border-slate-200 opacity-40 grayscale"
      )}
      role="button"
      aria-label={`Sticker ${id} ${isOwned ? 'Obtenida' : 'Faltante'}`}
    >
      <span className={cn(
        "font-mono text-xl",
        isOwned ? "text-primary font-bold" : "text-slate-500 font-medium"
      )}>
        {number}
      </span>

      {isOwned && (
        <div className="absolute inset-0 pointer-events-none p-1 flex justify-end items-start">
          <CheckCircle2 className="w-4 h-4 text-success" />
        </div>
      )}

      {isRepeated && (
        <div className="absolute -top-2 -right-2 bg-warning text-surface-0 text-xs font-bold px-1.5 py-0.5 rounded-full shadow-sm z-10 pointer-events-none">
          +1
        </div>
      )}

      {/* Button to toggle repeated */}
      {isOwned && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleRepeated(id);
          }}
          className={cn(
            "absolute bottom-1 right-1 p-1 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors",
            isRepeated ? "text-warning bg-orange-50" : "text-slate-400"
          )}
          aria-label={`Marcar repetida ${id}`}
        >
          <CopyPlus className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
});

export default StickerCard;
