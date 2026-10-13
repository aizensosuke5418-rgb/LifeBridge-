import React, { useState } from 'react';
import { ExternalLink, ShieldCheck, Building2, Globe, Search, CheckCircle2 } from 'lucide-react';
import { OFFICIAL_PORTALS_DATABASE } from '../../data/portals';
import { useApp } from '../../context/AppContext';

export const PortalsDirectoryView: React.FC = () => {
  const { language } = useApp();
  const isEn = language === 'en';

  const [searchQuery, setSearchQuery] = useState('');

  const filteredPortals = OFFICIAL_PORTALS_DATABASE.filter(portal => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      portal.name.en.toLowerCase().includes(q) ||
      portal.name.kn.toLowerCase().includes(q) ||
      portal.department.en.toLowerCase().includes(q) ||
      portal.department.kn.toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs uppercase tracking-widest text-[#42DCC5] font-semibold">
          {isEn ? 'Direct Official Access' : 'ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್‌ಗಳು'}
        </span>
        <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
          {isEn ? 'Official Government Portal Directory' : 'ಸರ್ಕಾರಿ ಇಲಾಖಾ ಪೋರ್ಟಲ್‌ಗಳ ಅಧಿಕೃತ ಕೋಶ'}
        </h1>
        <p className="text-xs md:text-sm text-slate-300 max-w-3xl leading-relaxed">
          {isEn
            ? 'Verified departmental gateways for Karnataka and Central Government services. Every URL is manually checked against official gazette sources. Apply without middlemen.'
            : 'ಕರ್ನಾಟಕ ಮತ್ತು ಕೇಂದ್ರ ಸರ್ಕಾರದ ಅಧಿಕೃತ ಪೋರ್ಟಲ್‌ಗಳ ಪರಿಶೀಲಿಸಿದ ಪಟ್ಟಿ. ಯಾವುದೇ ಮಧ್ಯವರ್ತಿಗಳಿಲ್ಲದೆ ನೇರವಾಗಿ ಸರ್ಕಾರಿ ಸೇವೆಗಳನ್ನು ಪಡೆಯಿರಿ.'}
        </p>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
        <input
          type="text"
          placeholder={isEn ? 'Search portals by name or department (e.g. Seva Sindhu, Ahara, SSP, Bhoomi)...' : 'ಪೋರ್ಟಲ್ ಅಥವಾ ಇಲಾಖೆ ಹೆಸರು ಮೂಲಕ ಹುಡುಕಿ...'}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0F1E36] border border-slate-700 text-xs md:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Portals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredPortals.map((portal) => (
          <div
            key={portal.id}
            className="rounded-2xl bg-[#0F1E36] border border-slate-800 p-6 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-all group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{portal.verificationStatus === 'verified_active' ? 'Verified Government Gateway' : 'National Portal'}</span>
                </span>
                <span className="text-slate-500 font-mono text-[11px]">
                  Checked: {portal.lastChecked}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white group-hover:text-[#42DCC5] transition-colors">
                  {isEn ? portal.name.en : portal.name.kn}
                </h3>
                <p className="text-xs text-blue-400 mt-0.5 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{isEn ? portal.department.en : portal.department.kn}</span>
                </p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {isEn ? portal.purpose.en : portal.purpose.kn}
              </p>

              {/* Key services provided */}
              <div className="space-y-1 pt-1 text-xs">
                <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider block">
                  {isEn ? 'Services Available:' : 'ಲಭ್ಯವಿರುವ ಸೇವೆಗಳು:'}
                </span>
                {(isEn ? portal.servicesAvailable.en : portal.servicesAvailable.kn).slice(0, 3).map((srv, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3 h-3 text-[#42DCC5] shrink-0 mt-0.5" />
                    <span>{srv}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3 text-xs">
              <span className="text-slate-400 font-mono text-[11px] truncate max-w-[200px]">
                {portal.url.replace('https://', '')}
              </span>
              <a
                href={portal.url}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-[#3678F6] hover:bg-blue-600 text-white font-semibold flex items-center gap-1.5 transition-colors shadow-sm shrink-0"
              >
                <span>{isEn ? 'Open Official Portal' : 'ಅಧಿಕೃತ ಪೋರ್ಟಲ್ ತೆರೆಯಿರಿ'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
