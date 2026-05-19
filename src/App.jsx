import React, { useState, useMemo } from 'react';
import { useAlbumStorage } from './hooks/useAlbumStorage';
import { allSections } from './data/albumData';
import ProgressDashboard from './components/ProgressDashboard';
import FilterBar from './components/FilterBar';
import CountrySection from './components/CountrySection';
import TradeModal from './components/TradeModal';
import SplashScreen from './components/SplashScreen';
import { ArrowLeftRight } from 'lucide-react';

function App() {
  const { state, toggleOwned, toggleRepeated } = useAlbumStorage();
  const [searchTerm, setSearchTerm] = useState('');
  const [hideOwned, setHideOwned] = useState(false);
  const [isTradeModalOpen, setIsTradeModalOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  // Filter sections based on search
  const filteredSections = useMemo(() => {
    if (!searchTerm.trim()) return allSections;
    const lowerSearch = searchTerm.toLowerCase();
    return allSections.filter(section => 
      section.name.toLowerCase().includes(lowerSearch) ||
      section.id.toLowerCase().includes(lowerSearch)
    );
  }, [searchTerm]);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      
      <div className="min-h-screen pb-24 bg-surface-0">
        <main className="max-w-3xl mx-auto">
          <ProgressDashboard state={state} />

          <FilterBar 
            searchTerm={searchTerm} 
            onSearchChange={setSearchTerm}
            hideOwned={hideOwned}
            onToggleHideOwned={() => setHideOwned(!hideOwned)}
          />

          <div className="mt-4">
            {filteredSections.map(section => (
              <CountrySection
                key={section.id}
                section={section}
                albumState={state}
                onToggleOwned={toggleOwned}
                onToggleRepeated={toggleRepeated}
                hideOwned={hideOwned}
              />
            ))}
            
            {filteredSections.length === 0 && (
              <div className="text-center py-12 text-slate-500">
                No se encontraron países para "{searchTerm}"
              </div>
            )}
          </div>
        </main>

        {/* Floating Action Button for Trade */}
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => setIsTradeModalOpen(true)}
            className="flex items-center justify-center gap-2 bg-primary hover:bg-slate-800 text-white shadow-lg px-5 py-3 rounded-full font-semibold transition-transform active:scale-95"
            aria-label="Compartir e Intercambiar"
          >
            <ArrowLeftRight className="w-5 h-5" />
            <span className="hidden sm:inline">Intercambiar</span>
          </button>
        </div>

        <TradeModal 
          isOpen={isTradeModalOpen} 
          onClose={() => setIsTradeModalOpen(false)} 
          state={state} 
        />
      </div>
    </>
  );
}

export default App;
