import React, { useState } from 'react';
import { Search, Filter, ExternalLink, Bookmark, ChevronRight, ShieldCheck, CheckCircle2, Building2, Columns } from 'lucide-react';
import { SCHEMES_DATABASE } from '../../data/schemes';
import { Scheme, SchemeCategory } from '../../types';
import { useApp } from '../../context/AppContext';

export const SchemesDirectoryView: React.FC = () => {
  const { 
    language, 
    isSchemeSaved, 
    toggleSaveScheme, 
    setSelectedSchemeForDetail, 
    toggleCompareScheme, 
    isInComparison, 
    setIsComparisonModalOpen, 
    comparisonSchemeIds, 
    t 
  } = useApp();
  const isEn = language === 'en';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const categories: { key: string; labelEn: string; labelKn: string }[] = [
    { key: 'all', labelEn: 'All Schemes', labelKn: 'ಎಲ್ಲಾ ಯೋಜನೆಗಳು' },
    { key: 'healthcare', labelEn: 'Healthcare', labelKn: 'ಆರೋಗ್ಯ' },
    { key: 'food_ration', labelEn: 'Food & Ration', labelKn: 'ಆಹಾರ & ಪಡಿತರ' },
    { key: 'education_scholarship', labelEn: 'Education & Scholarships', labelKn: 'ಶಿಕ್ಷಣ & ವಿದ್ಯಾರ್ಥಿವೇತನ' },
    { key: 'women_child', labelEn: 'Women & Child', labelKn: 'ಮಹಿಳೆಯರು & ಮಕ್ಕಳು' },
    { key: 'employment_skills', labelEn: 'Employment & Skills', labelKn: 'ಉದ್ಯೋಗ & ಕೌಶಲ್ಯ' },
    { key: 'senior_pension', labelEn: 'Senior Pension', labelKn: 'ಹಿರಿಯ ನಾಗರಿಕರ ಪಿಂಚಣಿ' },
    { key: 'disability', labelEn: 'Disability Assistance', labelKn: 'ವಿಶೇಷ ಚೇತನರ ನೆರವು' },
    { key: 'agriculture', labelEn: 'Agriculture & Farmers', labelKn: 'ಕೃಷಿ & ರೈತರು' },
    { key: 'housing_utility', labelEn: 'Housing & Utilities', labelKn: 'ವಸತಿ & ವಿದ್ಯುತ್' }
  ];

  const filteredSchemes = SCHEMES_DATABASE.filter((scheme) => {
    // Category match
    if (selectedCategory !== 'all' && scheme.category !== selectedCategory) {
      return false;
    }
    // Level match
    if (selectedLevel !== 'all' && scheme.level !== selectedLevel && scheme.level !== 'both') {
      return false;
    }
    // Search query match
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = scheme.name.en.toLowerCase().includes(q) || scheme.name.kn.toLowerCase().includes(q);
      const matchDesc = scheme.description.en.toLowerCase().includes(q) || scheme.description.kn.toLowerCase().includes(q);
      const matchAuth = scheme.authority.en.toLowerCase().includes(q) || scheme.authority.kn.toLowerCase().includes(q);
      return matchName || matchDesc || matchAuth;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs uppercase tracking-widest text-[#42DCC5] font-semibold">
          {isEn ? 'Official Welfare Catalog' : 'ಅಧಿಕೃತ ಯೋಜನಾ ಕೋಶ'}
        </span>
        <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
          {isEn ? 'Explore All Government Schemes' : 'ಎಲ್ಲಾ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ'}
        </h1>
        <p className="text-xs md:text-sm text-slate-300 max-w-3xl leading-relaxed">
          {isEn
            ? 'Search and filter verified Central Government and Karnataka State welfare initiatives. Every scheme links directly to the designated official portal without intermediaries.'
            : 'ಕೇಂದ್ರ ಮತ್ತು ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಎಲ್ಲಾ ಪರಿಶೀಲಿಸಿದ ಜನಕಲ್ಯಾಣ ಯೋಜನೆಗಳು. ಯಾವುದೇ ಮಧ್ಯವರ್ತಿಗಳಿಲ್ಲದೆ ನೇರ ಅಧಿಕೃತ ಮಾಹಿತಿ.'}
        </p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder={isEn ? 'Search by scheme name, authority, or keywords (e.g. SSP, Gruha, Rice, Hospital)...' : 'ಯೋಜನೆ ಹೆಸರು, ಇಲಾಖೆ ಅಥವಾ ಕೀವರ್ಡ್ ಮೂಲಕ ಹುಡುಕಿ...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0F1E36] border border-slate-700 text-xs md:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Jurisdiction / Level Selector */}
          <div className="flex items-center gap-1.5 p-1 bg-[#0F1E36] rounded-xl border border-slate-700 text-xs shrink-0">
            <button
              onClick={() => setSelectedLevel('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                selectedLevel === 'all' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {isEn ? 'All Tiers' : 'ಎಲ್ಲಾ ಹಂತ'}
            </button>
            <button
              onClick={() => setSelectedLevel('karnataka')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                selectedLevel === 'karnataka' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {isEn ? 'Karnataka Only' : 'ಕರ್ನಾಟಕ'}
            </button>
            <button
              onClick={() => setSelectedLevel('central')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                selectedLevel === 'central' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {isEn ? 'Central (All India)' : 'ಕೇಂದ್ರ ಸರ್ಕಾರ'}
            </button>
          </div>
        </div>

        {/* Category Filter Pills (Functional Segmented Tabs) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-[#3678F6] text-white shadow-sm'
                    : 'bg-[#0B1526] border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                }`}
              >
                {isEn ? cat.labelEn : cat.labelKn}
              </button>
            );
          })}
        </div>
      </div>

      {/* Schemes Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>
            {isEn ? `Showing ${filteredSchemes.length} verified schemes` : `${filteredSchemes.length} ದೃಢೀಕೃತ ಯೋಜನೆಗಳು ಲಭ್ಯ`}
          </span>
          <span className="text-[11px] text-slate-500">
            {isEn ? 'Sorted by official gazette priority' : 'ಅಧಿಕೃತ ಆದ್ಯತೆಯ ಮೇರೆಗೆ'}
          </span>
        </div>

        {filteredSchemes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSchemes.map((scheme) => {
              const saved = isSchemeSaved(scheme.id);
              return (
                <div
                  key={scheme.id}
                  className="rounded-2xl bg-[#0F1E36] border border-slate-800 hover:border-slate-700 hover:bg-[#122442] transition-all p-5 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    {/* Quiet Metadata Header */}
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-[#42DCC5]">
                          {scheme.level === 'karnataka' ? 'Karnataka' : scheme.level === 'central' ? 'Central' : 'Central + KA'}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="capitalize">{scheme.category.replace('_', ' ')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => toggleCompareScheme(scheme.id)}
                          className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                            isInComparison(scheme.id)
                              ? 'bg-blue-600/30 text-[#42DCC5] border-blue-500/50'
                              : 'border-slate-700 text-slate-400 hover:text-white'
                          }`}
                          title={isInComparison(scheme.id) ? (isEn ? 'Added to Comparison' : 'ಹೋಲಿಕೆಯಲ್ಲಿದೆ') : (isEn ? 'Add to Compare' : 'ಹೋಲಿಕೆಗೆ ಸೇರಿಸಿ')}
                        >
                          <Columns className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => toggleSaveScheme(scheme.id)}
                          className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                            saved
                              ? 'bg-blue-600/20 text-[#42DCC5] border-blue-500/40'
                              : 'border-slate-700 text-slate-400 hover:text-white'
                          }`}
                          title={saved ? t.savedInWallet : t.saveToWallet}
                        >
                          <Bookmark className={`w-3.5 h-3.5 ${saved ? 'fill-current' : ''}`} />
                        </button>
                      </div>
                    </div>

                    {/* Title & Authority */}
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-[#42DCC5] transition-colors leading-snug">
                        {isEn ? scheme.name.en : scheme.name.kn}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                        {isEn ? scheme.authority.en : scheme.authority.kn}
                      </p>
                    </div>

                    {/* Tagline */}
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {isEn ? scheme.tagline.en : scheme.tagline.kn}
                    </p>

                    {/* Key Benefits Preview */}
                    <div className="space-y-1 pt-1 text-xs">
                      {(isEn ? scheme.benefits.en : scheme.benefits.kn).slice(0, 2).map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-1.5 text-slate-300">
                          <span className="text-[#42DCC5] font-bold">★</span>
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer CTAs */}
                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedSchemeForDetail(scheme)}
                      className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer"
                    >
                      <span>{isEn ? 'Eligibility & Steps' : 'ಅರ್ಹತೆ & ವಿವರ'}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => toggleCompareScheme(scheme.id)}
                        className={`px-2.5 py-1.5 rounded-lg border text-xs font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                          isInComparison(scheme.id)
                            ? 'bg-blue-600/30 text-[#42DCC5] border-blue-500/50'
                            : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
                        }`}
                      >
                        <Columns className="w-3 h-3" />
                        <span>{isInComparison(scheme.id) ? (isEn ? 'Comparing' : 'ಹೋಲಿಕೆ') : (isEn ? 'Compare' : 'ಹೋಲಿಸಿ')}</span>
                      </button>

                      <a
                        href={scheme.officialPortalUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-[#3678F6] text-white text-xs font-medium flex items-center gap-1 transition-colors"
                      >
                        <span>{isEn ? 'Official' : 'ಪೋರ್ಟಲ್'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-[#0F1E36] border border-slate-800 space-y-3">
            <p className="text-slate-300 font-medium">
              {isEn ? 'No schemes found matching your search filters.' : 'ಯಾವುದೇ ಯೋಜನೆಗಳು ಹೊಂದಾಣಿಕೆಯಾಗಲಿಲ್ಲ.'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedLevel('all');
              }}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold cursor-pointer"
            >
              {isEn ? 'Reset All Filters' : 'ಫಿಲ್ಟರ್ ಮರುಹೊಂದಿಸಿ'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
