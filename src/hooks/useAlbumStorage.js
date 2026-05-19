import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'album_mundial_2026_state';

export function useAlbumStorage() {
  const [state, setState] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error("Error reading from localStorage", e);
    }
    return {};
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error("Error saving to localStorage", e);
    }
  }, [state]);

  const toggleOwned = useCallback((id) => {
    setState(prev => {
      const current = prev[id] || { owned: false, repeated: false };
      const newOwned = !current.owned;
      return {
        ...prev,
        [id]: {
          owned: newOwned,
          repeated: newOwned ? current.repeated : false
        }
      };
    });
  }, []);

  const toggleRepeated = useCallback((id) => {
    setState(prev => {
      const current = prev[id] || { owned: false, repeated: false };
      if (!current.owned) return prev; // Cannot be repeated if not owned
      
      return {
        ...prev,
        [id]: {
          ...current,
          repeated: !current.repeated
        }
      };
    });
  }, []);

  return { state, toggleOwned, toggleRepeated };
}
