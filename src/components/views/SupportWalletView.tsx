import React, { useState } from 'react';
import { 
  Bookmark, CheckSquare, Trash2, ExternalLink, MapPin, 
  Columns, ChevronRight, FileText, Lock, ShieldCheck, Edit3 
} from 'lucide-react';
import { SCHEMES_DATABASE } from '../../data/schemes';
import { PUBLIC_FACILITIES_DATABASE } from '../../data/facilities';
import { useApp } from '../../context/AppContext';

export const SupportWalletView: React.FC = () => {
  const { 
    language, 
    wallet, 
    toggleSaveScheme, 
    toggleSaveFacility, 
    updateNote, 
    clearWallet, 
    setSelectedSchemeForDetail,
    setSelectedFacilityForDetail,
    setIsComparisonModalOpen,
    toggleCompareScheme,
    t 
  } = useApp();

  const isEn = language === 'en';
  const [activeTab, setActiveTab] = useState<'schemes' | 'facilities' | 'tracker' | 'notes'>('schemes');
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);

  const savedSchemes = wallet.savedSchemeIds
    .map(id => SCHEMES_DATABASE.find(s => s.id === id))
    .filter(Boolean);

  const savedFacilities = wallet.savedFacilityIds
    .map(id => PUBLIC_FACILITIES_DATABASE.find(f => f.id === id))
    .filter(Boolean);

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#42DCC5] font-semibold">
            {isEn ? 'Client-Side Storage' : 'ಬ್ರೌಸರ್ ಸಂಗ್ರಹಣೆ'}
          </span>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight mt-1">
            {t.walletTitle}
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl mt-1">
            {t.walletSubtitle}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {wallet.savedSchemeIds.length >= 2 && (
            <button
              onClick={() => {
                // Prepopulate comparison with saved schemes if available
                wallet.savedSchemeIds.slice(0, 3).forEach(id => toggleCompareScheme(id));
                setIsComparisonModalOpen(true);
              }}
              className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Columns className="w-3.5 h-3.5" />
              <span>{isEn ? 'Compare Saved Schemes' : 'ಉಳಿಸಿದ ಯೋಜನೆಗಳ ಹೋಲಿಕೆ'}</span>
            </button>
          )}

          <button
            onClick={() => {
              if (window.confirm(isEn ? 'Are you sure you want to clear your local wallet?' : 'ಎಲ್ಲಾ ಉಳಿಸಿದ ಮಾಹಿತಿಯನ್ನು ಅಳಿಸಲು ಖಚಿತವೇ?')) {
                clearWallet();
              }
            }}
            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-rose-900/40 border border-slate-700 hover:border-rose-500/50 text-slate-300 hover:text-rose-300 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>{t.clearAllWalletData}</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-2 text-xs">
        <button
          onClick={() => setActiveTab('schemes')}
          className={`px-3 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
            activeTab === 'schemes' ? 'bg-[#3678F6] text-white' : 'text-slate-400 hover:text-white'
          }`}
        >
          {t.savedSchemesTab} ({savedSchemes.length})
        </button>
        <button
          onClick={() => setActiveTab('facilities')}
          className={`px-3 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
            activeTab === 'facilities' ? 'bg-[#3678F6] text-white' : 'text-slate-400 hover:text-white'
          }`}
        >
          {t.savedFacilitiesTab} ({savedFacilities.length})
        </button>
        <button
          onClick={() => setActiveTab('tracker')}
          className={`px-3 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
            activeTab === 'tracker' ? 'bg-[#3678F6] text-white' : 'text-slate-400 hover:text-white'
          }`}
        >
          {t.readinessTrackerTab}
        </button>
        <button
          onClick={() => setActiveTab('notes')}
          className={`px-3 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
            activeTab === 'notes' ? 'bg-[#3678F6] text-white' : 'text-slate-400 hover:text-white'
          }`}
        >
          {t.notesTab}
        </button>
      </div>

      {/* Tab 1: Saved Schemes */}
      {activeTab === 'schemes' && (
        <div className="space-y-4">
          {savedSchemes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {savedSchemes.map((scheme) => (
                <div
                  key={scheme!.id}
                  className="rounded-2xl bg-[#0F1E36] border border-slate-800 p-5 flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="text-[#42DCC5] font-semibold">
                        {scheme!.level === 'karnataka' ? 'Karnataka' : 'Central / Both'}
                      </span>
                      <button
                        onClick={() => toggleSaveScheme(scheme!.id)}
                        className="text-slate-400 hover:text-rose-400 p-1 cursor-pointer"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h4 className="text-base font-bold text-white">
                      {isEn ? scheme!.name.en : scheme!.name.kn}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-1">
                      {isEn ? scheme!.authority.en : scheme!.authority.kn}
                    </p>
                    <p className="text-xs text-slate-300 line-clamp-2">
                      {isEn ? scheme!.description.en : scheme!.description.kn}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                    <button
                      onClick={() => setSelectedSchemeForDetail(scheme!)}
                      className="text-blue-400 hover:underline font-semibold cursor-pointer"
                    >
                      {isEn ? 'View Guide' : 'ಮಾರ್ಗದರ್ಶಿ'} →
                    </button>
                    <a
                      href={scheme!.officialPortalUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1 rounded bg-slate-800 hover:bg-[#3678F6] text-white flex items-center gap-1"
                    >
                      <span>Portal</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-2xl bg-[#0F1E36] border border-slate-800 space-y-2">
              <Bookmark className="w-8 h-8 text-slate-500 mx-auto" />
              <p className="text-slate-300 font-medium">{isEn ? 'No schemes saved yet.' : 'ಯಾವುದೇ ಯೋಜನೆಗಳು ಉಳಿಸಿಲ್ಲ.'}</p>
              <p className="text-xs text-slate-400">
                {isEn ? 'Click the Bookmark icon on any scheme in the directory to save it here.' : 'ಡೈರೆಕ್ಟರಿಯಿಂದ ಯೋಜನೆಗಳನ್ನು ಉಳಿಸಲು ಬುಕ್‌ಮಾರ್ಕ್ ಕ್ಲಿಕ್ ಮಾಡಿ.'}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Saved Facilities */}
      {activeTab === 'facilities' && (
        <div className="space-y-4">
          {savedFacilities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {savedFacilities.map((fac) => (
                <div
                  key={fac!.id}
                  className="rounded-2xl bg-[#0F1E36] border border-slate-800 p-5 flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="capitalize text-[#42DCC5] font-semibold">{fac!.category.replace('_', ' ')}</span>
                      <button
                        onClick={() => toggleSaveFacility(fac!.id)}
                        className="text-slate-400 hover:text-rose-400 p-1 cursor-pointer"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h4 className="text-base font-bold text-white">
                      {isEn ? fac!.name.en : fac!.name.kn}
                    </h4>
                    <p className="text-xs text-slate-300 flex items-start gap-1">
                      <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{fac!.locality} — {isEn ? fac!.address.en : fac!.address.kn}</span>
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                    <button
                      onClick={() => setSelectedFacilityForDetail(fac!)}
                      className="text-blue-400 hover:underline font-semibold cursor-pointer"
                    >
                      {isEn ? 'Details' : 'ವಿವರಗಳು'}
                    </button>
                    <a
                      href={fac!.directionsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1 rounded bg-slate-800 hover:bg-[#3678F6] text-white flex items-center gap-1"
                    >
                      <span>Directions</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-2xl bg-[#0F1E36] border border-slate-800 space-y-2">
              <MapPin className="w-8 h-8 text-slate-500 mx-auto" />
              <p className="text-slate-300 font-medium">{isEn ? 'No facilities saved yet.' : 'ಯಾವುದೇ ಸೌಲಭ್ಯಗಳು ಉಳಿಸಿಲ್ಲ.'}</p>
              <p className="text-xs text-slate-400">
                {isEn ? 'Save public hospitals or fair-price shops from the Public-Service Map.' : 'ಸೇವಾ ನಕ್ಷೆಯಿಂದ ಆಸ್ಪತ್ರೆ ಅಥವಾ ರೇಷನ್ ಅಂಗಡಿಯನ್ನು ಉಳಿಸಿ.'}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Readiness Tracker Overview */}
      {activeTab === 'tracker' && (
        <div className="rounded-2xl bg-[#0F1E36] border border-slate-800 p-6 space-y-4">
          <h3 className="text-base font-bold text-white">
            {isEn ? 'Application Readiness Progress' : 'ಅರ್ಜಿ ಸಿದ್ಧತಾ ಪ್ರಗತಿ'}
          </h3>
          <div className="space-y-3">
            {SCHEMES_DATABASE.map((s) => {
              const progress = wallet.checklistProgress[s.id] || {};
              const checkedCount = Object.values(progress).filter(Boolean).length;
              const percent = Math.round((checkedCount / 6) * 100);

              return (
                <div key={s.id} className="p-4 rounded-xl bg-[#0B1526] border border-slate-800 flex items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {isEn ? s.name.en : s.name.kn}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {checkedCount} / 6 steps prepared
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-bold text-[#42DCC5] font-mono">{percent}%</span>
                    <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden mt-1">
                      <div className="h-full bg-[#42DCC5]" style={{ width: `${percent}%` }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 4: Personal Notes */}
      {activeTab === 'notes' && (
        <div className="rounded-2xl bg-[#0F1E36] border border-slate-800 p-6 space-y-4">
          <h3 className="text-base font-bold text-white">
            {isEn ? 'Personal Application Reference Notes' : 'ವೈಯಕ್ತಿಕ ಅರ್ಜಿ ಉಲ್ಲೇಖ ಟಿಪ್ಪಣಿಗಳು'}
          </h3>
          <p className="text-xs text-slate-400">
            {isEn
              ? 'Stored securely on your local browser. Never record sensitive bank passwords or OTPs.'
              : 'ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಮಾತ್ರ ಉಳಿಯುತ್ತದೆ. ಯಾವುದೇ ಪಾಸ್‌ವರ್ಡ್ ಅಥವಾ ಒಟಿಪಿ ನಮೂದಿಸಬೇಡಿ.'}
          </p>

          <div className="space-y-3">
            {SCHEMES_DATABASE.slice(0, 4).map((s) => {
              const currentNote = wallet.notes[s.id] || '';
              return (
                <div key={s.id} className="p-4 rounded-xl bg-[#0B1526] border border-slate-800 space-y-2">
                  <h4 className="text-xs font-bold text-white">
                    {isEn ? s.name.en : s.name.kn}
                  </h4>
                  <textarea
                    rows={2}
                    placeholder={isEn ? 'Add notes (e.g. Nadakacheri RD number, application date)...' : 'ಟಿಪ್ಪಣಿ ಸೇರಿಸಿ (ಉದಾ: ಅರ್ಜಿ ದಿನಾಂಕ, ಆರ್‌ಡಿ ಸಂಖ್ಯೆ)...'}
                    value={currentNote}
                    onChange={(e) => updateNote(s.id, e.target.value)}
                    className="w-full p-2.5 rounded-lg bg-[#08111E] border border-slate-700 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Privacy Safeguard Note */}
      <div className="p-4 rounded-xl bg-[#09111E] border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
        <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
        <span>
          {isEn
            ? '100% Client-Side Encryption: Everything in your Support Wallet remains on your device.'
            : '೧೦೦% ಬ್ರೌಸರ್ ಗೌಪ್ಯತೆ: ನಿಮ್ಮ ವಾಲೆಟ್‌ನಲ್ಲಿರುವ ಎಲ್ಲಾ ಮಾಹಿತಿ ನಿಮ್ಮ ಸಾಧನದಲ್ಲೇ ಸುರಕ್ಷಿತವಾಗಿರುತ್ತದೆ.'}
        </span>
      </div>
    </div>
  );
};
