import React, { useState } from 'react';
import { 
  GraduationCap, HeartPulse, Utensils, Users, UserCheck, 
  Accessibility, Briefcase, Sprout, Home, ChevronRight, 
  ExternalLink, Bookmark, Columns, Check, ArrowRight, ShieldCheck 
} from 'lucide-react';
import { SCHEMES_DATABASE } from '../../data/schemes';
import { useApp } from '../../context/AppContext';
import { SchemeCategory, Scheme } from '../../types';

interface CategoryConfig {
  key: SchemeCategory;
  titleEn: string;
  titleKn: string;
  descEn: string;
  descKn: string;
  icon: any;
  accentColor: string;
  bgGrad: string;
}

export const CategoriesView: React.FC = () => {
  const { 
    language, 
    setSelectedSchemeForDetail, 
    setCurrentView, 
    toggleCompareScheme, 
    isInComparison, 
    isSchemeSaved, 
    toggleSaveScheme,
    selectedCategoryForView,
    setSelectedCategoryForView,
    t 
  } = useApp();

  const isEn = language === 'en';

  const categoryConfigs: CategoryConfig[] = [
    {
      key: 'education_scholarship',
      titleEn: 'Education & Scholarships',
      titleKn: 'ಶಿಕ್ಷಣ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿವೇತನ',
      descEn: 'State SSP scholarships, NSP, fee concessions, hostel stipends, and vocational ITI admissions for students across Karnataka.',
      descKn: 'ರಾಜ್ಯ ಎಸ್‌ಎಸ್‌ಪಿ ವಿದ್ಯಾರ್ಥಿವೇತನ, ವಿದ್ಯಾಸಿರಿ ಊಟ-ವಸತಿ ಭತ್ಯೆ, ಶುಲ್ಕ ವಿನಾಯಿತಿ ಮತ್ತು ಸರ್ಕಾರಿ ಐಟಿಐ ತರಬೇತಿ.',
      icon: GraduationCap,
      accentColor: '#3678F6',
      bgGrad: 'from-blue-900/30 via-slate-900/40 to-slate-950'
    },
    {
      key: 'healthcare',
      titleEn: 'Healthcare & Medical Assistance',
      titleKn: 'ಆರೋಗ್ಯ ಮತ್ತು ಉಚಿತ ವೈದ್ಯಕೀಯ ಸೇವೆಗಳು',
      descEn: 'Ayushman Bharat PM-JAY up to ₹5 Lakhs cashless hospital coverage, Arogya Karnataka desks, and free medicines.',
      descKn: 'ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ₹5 ಲಕ್ಷದವರೆಗೆ ನಗದು ರಹಿತ ಆಸ್ಪತ್ರೆ ಚಿಕಿತ್ಸೆ, ಆರೋಗ್ಯ ಕರ್ನಾಟಕ ಮತ್ತು ಉಚಿತ ಜನರಿಕ್ ಔಷಧಿಗಳು.',
      icon: HeartPulse,
      accentColor: '#42DCC5',
      bgGrad: 'from-teal-900/30 via-slate-900/40 to-slate-950'
    },
    {
      key: 'food_ration',
      titleEn: 'Food Security & Ration Services',
      titleKn: 'ಆಹಾರ ಭದ್ರತೆ ಮತ್ತು ರೇಷನ್ ಸೇವೆಗಳು',
      descEn: 'Anna Bhagya free rice, direct DBT cash transfers (₹170/mo/person), BPL/AAY ration cards, and local fair-price shops.',
      descKn: 'ಅನ್ನಭಾಗ್ಯ ಉಚಿತ ಅಕ್ಕಿ, ನಗದು ಡಿಬಿಟಿ ಜಮೆ, ಬಿಪಿಎಲ್ ಪಡಿತರ ಚೀಟಿ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ನ್ಯಾಯಬೆಲೆ ಅಂಗಡಿಗಳು.',
      icon: Utensils,
      accentColor: '#F59E0B',
      bgGrad: 'from-amber-900/30 via-slate-900/40 to-slate-950'
    },
    {
      key: 'women_child',
      titleEn: 'Women & Child Welfare',
      titleKn: 'ಮಹಿಳಾ ಮತ್ತು ಮಕ್ಕಳ ಕಲ್ಯಾಣ',
      descEn: 'Gruha Lakshmi ₹2,000 monthly allowance for female family heads, Shakti free bus travel, and PMMVY maternity benefits.',
      descKn: 'ಗೃಹಲಕ್ಷ್ಮಿ ₹2,000 ಮಾಸಿಕ ಡಿಬಿಟಿ, ಶಕ್ತಿ ಉಚಿತ ಬಸ್ ಪ್ರಯಾಣ ಮತ್ತು ಮಾತೃ ವಂದನಾ ಹೆರಿಗೆ ಆರ್ಥಿಕ ನೆರವು.',
      icon: Users,
      accentColor: '#EC4899',
      bgGrad: 'from-pink-900/30 via-slate-900/40 to-slate-950'
    },
    {
      key: 'senior_pension',
      titleEn: 'Senior Citizens & Social Security',
      titleKn: 'ಹಿರಿಯ ನಾಗರಿಕರು ಮತ್ತು ಪಿಂಚಣಿ',
      descEn: 'Sandhya Suraksha monthly pension of ₹1,200 for citizens aged 65+, transport concessions, and geriatric priority care.',
      descKn: 'ಸಂಧ್ಯಾ ಸುರಕ್ಷಾ ಮಾಸಿಕ ₹1,200 ವೃದ್ಧಾಪ್ಯ ಪಿಂಚಣಿ, ಉಚಿತ ಬಸ್ ಪಾಸ್ ಮತ್ತು ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ ಆದ್ಯತೆ.',
      icon: UserCheck,
      accentColor: '#A855F7',
      bgGrad: 'from-purple-900/30 via-slate-900/40 to-slate-950'
    },
    {
      key: 'disability',
      titleEn: 'Disability Assistance & Divyangjan',
      titleKn: 'ವಿಶೇಷ ಚೇತನರ ನೆರವು',
      descEn: 'Monthly disability pension up to ₹2,000, free assistive devices (tricycles, wheelchairs, hearing aids), and UDID card services.',
      descKn: 'ಮಾಸಿಕ ₹2,000 ವರೆಗೆ ಪಿಂಚಣಿ, ಉಚಿತ ಗಾಲಿಕುರ್ಚಿ, ಶ್ರವಣ ಸಾಧನಗಳು ಮತ್ತು ಯುಡಿಐಡಿ ಕಾರ್ಡ್ ಸೌಲಭ್ಯ.',
      icon: Accessibility,
      accentColor: '#8B5CF6',
      bgGrad: 'from-indigo-900/30 via-slate-900/40 to-slate-950'
    },
    {
      key: 'employment_skills',
      titleEn: 'Employment, Training & Livelihood',
      titleKn: 'ಉದ್ಯೋಗ, ಕೌಶಲ್ಯ ಮತ್ತು ಜೀವನೋಪಾಯ',
      descEn: 'Yuva Nidhi unemployment allowance (₹3,000 for degree / ₹1,500 for diploma), PM SVANidhi loans, and vocational training.',
      descKn: 'ಯುವನಿಧಿ ಮಾಸಿಕ ಭತ್ಯೆ, ಬೀದಿ ಬದಿ ವ್ಯಾಪಾರಿಗಳಿಗೆ ಪಿಎಂ ಸ್ವನಿಧಿ ಸಾಲ ಮತ್ತು ಉಚಿತ ಕೌಶಲ್ಯ ತರಬೇತಿ.',
      icon: Briefcase,
      accentColor: '#06B6D4',
      bgGrad: 'from-cyan-900/30 via-slate-900/40 to-slate-950'
    },
    {
      key: 'agriculture',
      titleEn: 'Agriculture & Farmer Welfare',
      titleKn: 'ಕೃಷಿ ಮತ್ತು ರೈತರ ಕಲ್ಯಾಣ',
      descEn: 'PM-KISAN ₹6,000 annual income support, Karnataka Raita Siri millet assistance, and Bhoomi Pahani land record validation.',
      descKn: 'ಪಿಎಂ-ಕಿಸಾನ್ ವಾರ್ಷಿಕ ₹6,000 ಆದಾಯ ನೆರವು, ರೈತಸಿರಿ ಮತ್ತು ಭೂಮಿ ಪಹಣಿ ಜೋಡಣೆ.',
      icon: Sprout,
      accentColor: '#10B981',
      bgGrad: 'from-emerald-900/30 via-slate-900/40 to-slate-950'
    },
    {
      key: 'housing_utility',
      titleEn: 'Housing & Utilities Assistance',
      titleKn: 'ವಸತಿ ಮತ್ತು ವಿದ್ಯುತ್ ಸೌಲಭ್ಯಗಳು',
      descEn: 'Gruha Jyothi zero-bill electricity up to 200 units/mo for domestic households, and affordable public housing schemes.',
      descKn: 'ಗೃಹಜ್ಯೋತಿ ಪ್ರತಿ ತಿಂಗಳು 200 ಯೂನಿಟ್‌ವರೆಗೆ ಉಚಿತ ವಿದ್ಯುತ್ ಮತ್ತು ಸಾರ್ವಜನಿಕ ವಸತಿ ಯೋಜನೆಗಳು.',
      icon: Home,
      accentColor: '#EAB308',
      bgGrad: 'from-yellow-900/30 via-slate-900/40 to-slate-950'
    }
  ];

  // If a category was preselected via props or context, scroll to it or filter
  const [filterCat, setFilterCat] = useState<string>(selectedCategoryForView || 'all');

  const activeConfigs = filterCat === 'all'
    ? categoryConfigs
    : categoryConfigs.filter(c => c.key === filterCat);

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 space-y-10">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs uppercase tracking-widest text-[#42DCC5] font-semibold">
          {isEn ? 'Categorized Welfare Directory' : 'ವಿಭಾಗವಾರು ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು'}
        </span>
        <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
          {isEn ? 'Schemes by Category' : 'ವಿಷಯಾಧಾರಿತ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು'}
        </h1>
        <p className="text-xs md:text-sm text-slate-300 max-w-3xl leading-relaxed">
          {isEn
            ? 'Browse India and Karnataka government welfare initiatives grouped by domain. Select schemes to view application instructions, documents, or compare side-by-side.'
            : 'ಶಿಕ್ಷಣ, ಆರೋಗ್ಯ, ಆಹಾರ ಭದ್ರತೆ, ಮಹಿಳಾ ಕಲ್ಯಾಣ ಸೇರಿದಂತೆ ಎಲ್ಲಾ ಕ್ಷೇತ್ರವಾರು ಯೋಜನೆಗಳ ಸಮಗ್ರ ಮಾಹಿತಿ.'}
        </p>
      </div>

      {/* Category Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => {
            setFilterCat('all');
            setSelectedCategoryForView(null);
          }}
          className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
            filterCat === 'all'
              ? 'bg-[#3678F6] text-white shadow-md'
              : 'bg-[#0F1E36] border border-slate-800 text-slate-300 hover:text-white'
          }`}
        >
          {isEn ? 'All Categories' : 'ಎಲ್ಲಾ ವಿಭಾಗಗಳು'}
        </button>

        {categoryConfigs.map((cat) => {
          const isActive = filterCat === cat.key;
          const Icon = cat.icon;
          return (
            <button
              key={cat.key}
              onClick={() => {
                setFilterCat(cat.key);
                setSelectedCategoryForView(cat.key);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer shrink-0 flex items-center gap-1.5 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-[#0F1E36] border border-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              <Icon className="w-3.5 h-3.5" style={{ color: cat.accentColor }} />
              <span>{isEn ? cat.titleEn.split('&')[0].trim() : cat.titleKn.split('ಮತ್ತು')[0].trim()}</span>
            </button>
          );
        })}
      </div>

      {/* Categories Content Sections */}
      <div className="space-y-12">
        {activeConfigs.map((catConfig) => {
          const Icon = catConfig.icon;
          const schemesInCat = SCHEMES_DATABASE.filter(s => s.category === catConfig.key);

          return (
            <section
              key={catConfig.key}
              id={`cat-${catConfig.key}`}
              className="rounded-2xl border border-slate-800 bg-[#0F1E36]/60 p-6 lg:p-8 space-y-6"
            >
              {/* Category Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl border flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: `${catConfig.accentColor}15`,
                      borderColor: `${catConfig.accentColor}40`
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: catConfig.accentColor }} />
                  </div>
                  <div>
                    <h2 className="text-xl lg:text-2xl font-bold text-white tracking-tight">
                      {isEn ? catConfig.titleEn : catConfig.titleKn}
                    </h2>
                    <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
                      {isEn ? catConfig.descEn : catConfig.descKn}
                    </p>
                  </div>
                </div>

                <div className="text-xs text-slate-400 font-mono shrink-0">
                  {schemesInCat.length} {isEn ? 'Verified Schemes' : 'ಯೋಜನೆಗಳು'}
                </div>
              </div>

              {/* Schemes Grid under this category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {schemesInCat.map((scheme) => {
                  const inCompare = isInComparison(scheme.id);
                  const saved = isSchemeSaved(scheme.id);

                  return (
                    <div
                      key={scheme.id}
                      className="rounded-xl bg-[#0B1526] border border-slate-800 hover:border-slate-700 p-5 flex flex-col justify-between space-y-4 transition-all group"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between text-[11px] text-slate-400">
                          <span className="text-[#42DCC5] font-semibold">
                            {scheme.level === 'karnataka' ? 'Karnataka' : 'Central / Both'}
                          </span>
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => toggleCompareScheme(scheme.id)}
                              className={`p-1 rounded transition-colors cursor-pointer ${
                                inCompare
                                  ? 'text-[#42DCC5] bg-blue-900/40'
                                  : 'text-slate-400 hover:text-white'
                              }`}
                              title={inCompare ? 'In Comparison' : 'Add to Compare'}
                            >
                              <Columns className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => toggleSaveScheme(scheme.id)}
                              className={`p-1 rounded transition-colors cursor-pointer ${
                                saved
                                  ? 'text-[#42DCC5]'
                                  : 'text-slate-400 hover:text-white'
                              }`}
                              title={saved ? 'Saved in Wallet' : 'Save to Wallet'}
                            >
                              <Bookmark className={`w-3.5 h-3.5 ${saved ? 'fill-current' : ''}`} />
                            </button>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-base font-bold text-white group-hover:text-[#42DCC5] transition-colors leading-snug">
                            {isEn ? scheme.name.en : scheme.name.kn}
                          </h3>
                          <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                            {isEn ? scheme.authority.en : scheme.authority.kn}
                          </p>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                          {isEn ? scheme.description.en : scheme.description.kn}
                        </p>

                        {/* Top Benefit highlight */}
                        <div className="p-2 rounded-lg bg-[#0E1E36] border border-slate-800 text-[11px] text-slate-300 flex items-start gap-1.5">
                          <span className="text-[#42DCC5] font-bold">★</span>
                          <span className="line-clamp-2">
                            {(isEn ? scheme.benefits.en : scheme.benefits.kn)[0]}
                          </span>
                        </div>
                      </div>

                      {/* Footer actions */}
                      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2 text-xs">
                        <button
                          onClick={() => setSelectedSchemeForDetail(scheme)}
                          className="font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer"
                        >
                          <span>{isEn ? 'Full Guide' : 'ಮಾರ್ಗದರ್ಶಿ'}</span>
                          <ChevronRight className="w-3 h-3" />
                        </button>

                        <button
                          onClick={() => toggleCompareScheme(scheme.id)}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-colors cursor-pointer flex items-center gap-1 ${
                            inCompare
                              ? 'bg-blue-600/30 text-[#42DCC5] border-blue-500/50'
                              : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
                          }`}
                        >
                          <Columns className="w-3 h-3" />
                          <span>{inCompare ? (isEn ? 'Comparing' : 'ಹೋಲಿಕೆಯಲ್ಲಿದೆ') : (isEn ? 'Compare' : 'ಹೋಲಿಸಿ')}</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};
