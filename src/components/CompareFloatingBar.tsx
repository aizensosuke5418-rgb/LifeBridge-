import React from 'react';
import { Columns, X, ArrowRight, Trash2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SCHEMES_DATABASE } from '../data/schemes';

export const CompareFloatingBar: React.FC = () => {
  const { 
    language, 
    comparisonSchemeIds, 
    toggleCompareScheme, 
    clearComparison, 
    setIsComparisonModalOpen 
  } = useApp();
  const isEn = language === 'en';

  if (comparisonSchemeIds.length === 0) return null;

  const schemes = comparisonSchemeIds
    .map(id => SCHEMES_DATABASE.find(s => s.id === id))
    .filter(Boolean);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-2xl bg-[#0F1E36]/95 backdrop-blur-md border border-blue-500/40 rounded-2xl p-3 shadow-2xl flex items-center justify-between gap-3 text-xs animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none">
        <div className="flex items-center gap-1.5 font-bold text-white shrink-0 pr-1">
          <Columns className="w-4 h-4 text-[#42DCC5]" />
          <span>{isEn ? 'Compare' : 'ಹೋಲಿಕೆ'} ({schemes.length}/3):</span>
        </div>

        {schemes.map(s => (
          <div
            key={s!.id}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0B1526] border border-slate-700 text-slate-200 shrink-0"
          >
            <span className="font-medium truncate max-w-[120px]">
              {s!.shortName || (isEn ? s!.name.en : s!.name.kn)}
            </span>
            <button
              onClick={() => toggleCompareScheme(s!.id)}
              className="text-slate-400 hover:text-rose-400 cursor-pointer"
              title="Remove"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={clearComparison}
          className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          title={isEn ? 'Clear All' : 'ಎಲ್ಲವನ್ನೂ ತೆರವುಗೊಳಿಸಿ'}
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => setIsComparisonModalOpen(true)}
          className="px-3.5 py-2 rounded-xl bg-[#3678F6] hover:bg-blue-600 text-white font-semibold flex items-center gap-1.5 transition-colors shadow-md cursor-pointer whitespace-nowrap"
        >
          <span>{isEn ? 'View Comparison' : 'ಹೋಲಿಕೆ ನೋಡಿ'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
