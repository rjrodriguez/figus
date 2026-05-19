import React, { useState } from 'react';
import { X, Copy, Share2 } from 'lucide-react';
import { allSections, ALBUM_TOTAL_STICKERS } from '../data/albumData';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const TradeModal = ({ isOpen, onClose, state }) => {
  const [activeTab, setActiveTab] = useState('missing'); // 'missing' | 'repeated'
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Generate lists
  const missingList = [];
  const repeatedList = [];

  allSections.forEach(section => {
    const items = Array.from({ length: section.count }, (_, i) => i + section.startOffset);
    items.forEach(num => {
      const id = `${section.id}-${num}`;
      const itemState = state[id];
      if (!itemState || !itemState.owned) {
        missingList.push(id);
      }
      if (itemState && itemState.repeated) {
        repeatedList.push(id);
      }
    });
  });

  const getListText = () => {
    if (activeTab === 'missing') {
      return `Album Mundial 2026\n\nFaltan (${missingList.length}):\n${missingList.join(', ')}`;
    } else {
      return `Album Mundial 2026\n\nRepetidas (${repeatedList.length}):\n${repeatedList.join(', ')}`;
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getListText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handleShare = async () => {
    const text = getListText();
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Mis Figuritas - Mundial 2026',
          text: text,
        });
      } catch (err) {
        console.error('Error sharing', err);
      }
    } else {
      handleCopy();
    }
  };

  const currentList = activeTab === 'missing' ? missingList : repeatedList;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
      <div className="bg-surface-0 w-full max-w-md rounded-2xl sm:rounded-xl shadow-xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-slate-200">
          <h2 className="text-lg font-bold text-primary">Intercambio</h2>
          <button onClick={onClose} className="p-2 -mr-2 rounded-full hover:bg-slate-100 text-slate-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex p-2 gap-2 bg-surface-1">
          <button
            onClick={() => setActiveTab('missing')}
            className={cn(
              "flex-1 py-2 text-sm font-semibold rounded-md transition-colors",
              activeTab === 'missing' ? "bg-surface-0 shadow-sm text-primary" : "text-slate-500 hover:text-slate-700"
            )}
          >
            Faltantes ({missingList.length})
          </button>
          <button
            onClick={() => setActiveTab('repeated')}
            className={cn(
              "flex-1 py-2 text-sm font-semibold rounded-md transition-colors",
              activeTab === 'repeated' ? "bg-surface-0 shadow-sm text-primary" : "text-slate-500 hover:text-slate-700"
            )}
          >
            Repetidas ({repeatedList.length})
          </button>
        </div>

        {/* List Content */}
        <div className="flex-1 overflow-y-auto p-4 bg-surface-1/50">
          <div className="flex flex-wrap gap-2">
            {currentList.length > 0 ? (
              currentList.map(id => (
                <span key={id} className={cn(
                  "px-2.5 py-1 text-sm font-mono rounded border bg-surface-0",
                  activeTab === 'missing' ? "border-slate-200 text-slate-600" : "border-warning/30 text-warning bg-orange-50"
                )}>
                  {id}
                </span>
              ))
            ) : (
              <p className="text-slate-500 text-sm py-4 text-center w-full">
                {activeTab === 'missing' ? '¡Álbum completo!' : 'No tienes figuritas repetidas.'}
              </p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="p-4 bg-surface-0 border-t border-slate-200 flex gap-3">
          <button
            onClick={handleCopy}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-primary font-semibold rounded-lg transition-colors"
          >
            <Copy className="w-4 h-4" />
            {copied ? '¡Copiado!' : 'Copiar Lista'}
          </button>
          <button
            onClick={handleShare}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-primary hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors"
          >
            <Share2 className="w-4 h-4" />
            Compartir
          </button>
        </div>
      </div>
    </div>
  );
};

export default TradeModal;
