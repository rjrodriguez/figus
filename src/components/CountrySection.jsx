import React from 'react';
import StickerCard from './StickerCard';

const CountrySection = ({ section, albumState, onToggleOwned, onToggleRepeated, hideOwned }) => {
  const items = Array.from({ length: section.count }, (_, i) => i + section.startOffset);

  // If hideOwned is true, filter out items that are owned
  const visibleItems = hideOwned
    ? items.filter(num => !albumState[`${section.id}-${num}`]?.owned)
    : items;

  if (visibleItems.length === 0) {
    return null; // Don't render section if all items are hidden
  }

  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 mb-3 px-4 sm:px-0">
        <span className="text-2xl" aria-hidden="true">{section.flag}</span>
        <h2 className="text-lg font-semibold text-primary">{section.name}</h2>
      </div>
      
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 px-4 sm:px-0">
        {visibleItems.map(num => {
          const id = `${section.id}-${num}`;
          return (
            <StickerCard
              key={id}
              id={id}
              number={num}
              data={albumState[id]}
              onToggleOwned={onToggleOwned}
              onToggleRepeated={onToggleRepeated}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CountrySection;
