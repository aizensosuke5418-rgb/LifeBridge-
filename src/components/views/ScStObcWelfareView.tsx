import React, { useState } from 'react';
import { 
  Users, Award, BookOpen, Banknote, Home, Shield, 
  ExternalLink, Search, CheckCircle2, ChevronRight, 
  AlertCircle, FileText, Droplets, Scale, HelpCircle, 
  GraduationCap, Briefcase, Info, ArrowRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { 
  SC_ST_OBC_SCHEMES_DATABASE, 
  RESERVATION_ROSTER, 
  CASTE_CERTIFICATE_GUIDES, 
  ScStObcScheme, 
  CasteCertificateGuide 
} from '../../data/scStObcWelfare';

export const ScStObcWelfareView: React.FC = () => {
  const { language, setCurrentView } = useApp();
  const isEn = language === 'en';

  const [activeTab, setActiveTab] = useState<'schemes' | 'certificates' | 'reservation' | 'legal_relief'>('schemes');
  const [selectedCommunity, setSelectedCommunity] = useState<'ALL' | 'SC' | 'ST' | 'OBC'>('ALL');
  const [selectedSchemeCategory, setSelectedSchemeCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSchemeDetail, setActiveSchemeDetail] = useState<ScStObcScheme | null>(null);

  const filteredSchemes = SC_ST_OBC_SCHEMES_DATABASE.filter(s => {
    const matchesComm = selectedCommunity === 'ALL' || (s.targetCommunities as string[]).includes(selectedCommunity);
    const matchesCat = selectedSchemeCategory === 'all' || s.category === selectedSchemeCategory;
    const matchesSearch = 
      s.title.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.title.kn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.eligibilitySummary.en.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesComm && matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-indigo-950/60 via-slate-900 to-blue-950/50 border border-indigo-800/40 rounded-2xl p-6 lg:p-8 mb-8 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-400/30 rounded-full text-xs font-semibold text-indigo-300 mb-3">
              <Users className="w-3.5 h-3.5 text-indigo-400" />
              <span>{isEn ? 'Affirmative Action & Social Justice' : 'ಸಾಮಾಜಿಕ ನ್ಯಾಯ ಮತ್ತು ಸಬಲೀಕರಣ'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              {isEn ? 'SC / ST / OBC Comprehensive Welfare Portal' : 'ಪರಿಶಿಷ್ಟ ಜಾತಿ, ಪರಿಶಿಷ್ಟ ಪಂಗಡ & ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಕಲ್ಯಾಣ ಯೋಜನೆಗಳು'}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {isEn 
                ? 'Central & Karnataka State welfare benefits: 100% Post-Matric scholarships, free government hostels, Arivu 2% education loans, Ganga Kalyana borewells, Ambedkar Housing, Atrocity Act relief, and caste certificate guides.'
                : 'ಮೆಟ್ರಿಕ್ ನಂತರದ ಎಸ್‌ಎಸ್‌ಪಿ ಪೂರ್ಣ ವಿದ್ಯಾರ್ಥಿವೇತನ, ಉಚಿತ ವಸತಿ ನಿಲಯಗಳು, ಅರಿವು ಶೈಕ್ಷಣಿಕ ಸಾಲ, ಗಂಗಾ ಕಲ್ಯಾಣ ಕೊಳವೆಬಾವಿ, ಅಂಬೇಡ್ಕರ್ ನಿವಾಸ್ ಯೋಜನೆ, ದೌರ್ಜನ್ಯ ತಡೆ ಕಾಯ್ದೆ ಪರಿಹಾರ ಮತ್ತು ಜಾತಿ ಪ್ರಮಾಣಪತ್ರ ಮಾರ್ಗದರ್ಶಿ.'}
            </p>
          </div>

          <div className="flex flex-col gap-2 shrink-0">
            <button
              onClick={() => setActiveTab('certificates')}
              className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-indigo-600/20"
            >
              <FileText className="w-4 h-4" />
              <span>{isEn ? 'Caste Certificate Guide' : 'ಜಾತಿ ಪ್ರಮಾಣಪತ್ರ ಮಾಹಿತಿ'}</span>
            </button>
            <span className="text-[11px] text-slate-400 text-center">
              {isEn ? 'Constitutional Safeguards • Transparent Quotas' : 'ಸಂವಿಧಾನಬದ್ಧ ಹಕ್ಕುಗಳು • ಮೀಸಲಾತಿ ಮಾರ್ಗದರ್ಶಿ'}
            </span>
          </div>
        </div>

        {/* Quick Numbers Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-800/80">
          <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
            <p className="text-xs text-slate-400">{isEn ? 'SC Reservation' : 'ಎಸ್‌ಸಿ ಮೀಸಲಾತಿ'}</p>
            <p className="text-lg font-bold text-indigo-400 mt-0.5">17% {isEn ? 'in Karnataka' : 'ಕರ್ನಾಟಕದಲ್ಲಿ'}</p>
          </div>
          <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
            <p className="text-xs text-slate-400">{isEn ? 'ST Reservation' : 'ಎಸ್‌ಟಿ ಮೀಸಲಾತಿ'}</p>
            <p className="text-lg font-bold text-blue-400 mt-0.5">7% {isEn ? 'in Karnataka' : 'ಕರ್ನಾಟಕದಲ್ಲಿ'}</p>
          </div>
          <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
            <p className="text-xs text-slate-400">{isEn ? 'Arivu Education Loan' : 'ಅರಿವು ಶೈಕ್ಷಣಿಕ ಸಾಲ'}</p>
            <p className="text-lg font-bold text-emerald-400 mt-0.5">2% {isEn ? 'Subsidized Interest' : 'ಬಡ್ಡಿದರ'}</p>
          </div>
          <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
            <p className="text-xs text-slate-400">{isEn ? 'Ganga Kalyana' : 'ಗಂಗಾ ಕಲ್ಯಾಣ'}</p>
            <p className="text-lg font-bold text-amber-400 mt-0.5">100% Free {isEn ? 'Borewell' : 'ಬೋರ್‌ವೆಲ್'}</p>
          </div>
        </div>
      </div>

      {/* Main Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-thin">
        {[
          { id: 'schemes', labelEn: 'All Welfare Schemes (Scholarships, Housing, Loans)', labelKn: 'ಎಲ್ಲಾ ಕಲ್ಯಾಣ ಯೋಜನೆಗಳು' },
          { id: 'certificates', labelEn: 'Caste & Income Certificate Step-by-Step Guide', labelKn: 'ಜಾತಿ & ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ ಮಾರ್ಗದರ್ಶಿ' },
          { id: 'reservation', labelEn: 'Karnataka & Central Reservation Roster Matrix', labelKn: 'ಮೀಸಲಾತಿ ವರ್ಗೀಕರಣ ಕೋಷ್ಟಕ' },
          { id: 'legal_relief', labelEn: 'SC/ST Atrocities Act (PoA) Relief & Legal Defense', labelKn: 'ದೌರ್ಜನ್ಯ ತಡೆ ಕಾಯ್ದೆ ಪರಿಹಾರ' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === tab.id
                ? 'bg-[#3678F6] text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700/60'
            }`}
          >
            {isEn ? tab.labelEn : tab.labelKn}
          </button>
        ))}
      </div>

      {/* TAB 1: SCHEMES LIST */}
      {activeTab === 'schemes' && (
        <div className="space-y-6">
          {/* Community Filter Chips */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-400">{isEn ? 'Filter by Community:' : 'ಸಮುದಾಯದ ಆಯ್ಕೆ:'}</span>
              {(['ALL', 'SC', 'ST', 'OBC'] as const).map((comm) => (
                <button
                  key={comm}
                  onClick={() => setSelectedCommunity(comm)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedCommunity === comm
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {comm}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isEn ? "Search schemes..." : "ಯೋಜನೆ ಹುಡುಕಿ..."}
                className="w-full pl-9 pr-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#42DCC5]"
              />
            </div>
          </div>

          {/* Scheme Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSchemes.map((scheme) => (
              <div 
                key={scheme.id}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-indigo-500/50 hover:shadow-xl transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5">
                      {scheme.targetCommunities.map((c) => (
                        <span key={c} className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                          {c}
                        </span>
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {scheme.category.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1.5 hover:text-[#42DCC5] transition-colors">
                    {isEn ? scheme.title.en : scheme.title.kn}
                  </h3>

                  <p className="text-xs text-slate-400 mb-3">
                    {isEn ? scheme.administeringDepartment.en : scheme.administeringDepartment.kn}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {isEn ? scheme.eligibilitySummary.en : scheme.eligibilitySummary.kn}
                  </p>

                  <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 mb-4 text-xs">
                    <p className="text-slate-400 text-[11px]">{isEn ? 'Income Limit' : 'ಆದಾಯ ಮಿತಿ'}:</p>
                    <p className="font-semibold text-white mt-0.5 line-clamp-2">
                      {isEn ? scheme.incomeCeiling.en : scheme.incomeCeiling.kn}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setActiveSchemeDetail(scheme)}
                    className="text-xs font-semibold text-indigo-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>{isEn ? 'View Benefits & Docs' : 'ಸವಲತ್ತು & ದಾಖಲೆಗಳು'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={scheme.officialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-indigo-600/20 hover:bg-indigo-600 border border-indigo-500/40 text-indigo-200 hover:text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all"
                  >
                    <span>{isEn ? 'Portal' : 'ಪೋರ್ಟಲ್'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: CERTIFICATES GUIDE */}
      {activeTab === 'certificates' && (
        <div className="space-y-6 max-w-4xl mx-auto">
          {CASTE_CERTIFICATE_GUIDES.map((guide, idx) => (
            <div key={idx} className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {isEn ? guide.title.en : guide.title.kn}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {guide.portalName} • {isEn ? `Timeline: ${guide.expectedTurnaroundDays} days` : `ಅವಧಿ: ${guide.expectedTurnaroundDays} ದಿನಗಳು`} • {guide.officialFee}
                  </p>
                </div>
                <a
                  href={guide.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg shrink-0 flex items-center gap-1.5 transition-colors"
                >
                  <span>{isEn ? 'Open Nadakacheri' : 'ನಾಡಕಚೇರಿ ಪೋರ್ಟಲ್'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Steps */}
              <div className="mb-5">
                <h4 className="text-xs font-bold text-white mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {isEn ? 'Step-by-Step Procedure:' : 'ಹಂತ-ಹಂತದ ವಿಧಾನ:'}
                </h4>
                <div className="space-y-2">
                  {(isEn ? guide.steps.en : guide.steps.kn).map((step, sIdx) => (
                    <div key={sIdx} className="text-xs text-slate-300 p-2.5 bg-slate-800/40 rounded-lg border border-slate-800 leading-relaxed">
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mandatory Documents */}
              <div className="mb-5">
                <h4 className="text-xs font-bold text-white mb-2 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-blue-400" />
                  {isEn ? 'Required Proofs & Documents:' : 'ಅಗತ್ಯ ದಾಖಲೆಗಳು:'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(isEn ? guide.mandatoryDocuments.en : guide.mandatoryDocuments.kn).map((doc, dIdx) => (
                    <div key={dIdx} className="text-xs text-slate-300 flex items-start gap-2 bg-slate-800/30 p-2 rounded-lg border border-slate-800/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Common Rejections */}
              <div className="p-3.5 bg-red-950/20 border border-red-900/30 rounded-xl text-xs">
                <h5 className="font-bold text-red-300 mb-1 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {isEn ? 'Top Rejection Pitfalls to Avoid:' : 'ಅರ್ಜಿ ತಿರಸ್ಕಾರವಾಗದಂತೆ ಎಚ್ಚರವಹಿಸಿ:'}
                </h5>
                <ul className="space-y-1">
                  {(isEn ? guide.commonRejectionReasons.en : guide.commonRejectionReasons.kn).map((r, rIdx) => (
                    <li key={rIdx} className="text-slate-300 text-[11px]">• {r}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: RESERVATION ROSTER */}
      {activeTab === 'reservation' && (
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-2">
              {isEn ? 'Karnataka State & Central Government Reservation Roster' : 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಹಾಗೂ ಕೇಂದ್ರ ಸರ್ಕಾರದ ಮೀಸಲಾತಿ ವರ್ಗೀಕರಣ ಕೋಷ್ಟಕ'}
            </h2>
            <p className="text-xs text-slate-400 mb-6">
              {isEn 
                ? 'Official statutory reservation quotas for education admissions (CET/NEET) and government employment recruitments (KPSC/KEA).'
                : 'ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಗಳ ಪ್ರವೇಶ (CET/NEET) ಮತ್ತು ಸರ್ಕಾರಿ ನೌಕರಿ ನೇಮಕಾತಿಗಳಲ್ಲಿ (KPSC/KEA) ಅಧಿಕೃತ ಮೀಸಲಾತಿ ಕೋಟಾಗಳು.'}
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300 border-collapse">
                <thead>
                  <tr className="border-b border-slate-700 bg-slate-800/80 text-white font-semibold">
                    <th className="py-3 px-4">{isEn ? 'Category' : 'ಪ್ರವರ್ಗ'}</th>
                    <th className="py-3 px-4">{isEn ? 'Karnataka Quota' : 'ಕರ್ನಾಟಕ ಕೋಟಾ'}</th>
                    <th className="py-3 px-4">{isEn ? 'Central Quota' : 'ಕೇಂದ್ರ ಕೋಟಾ'}</th>
                    <th className="py-3 px-4">{isEn ? 'Communities Covered' : 'ಸೇರ್ಪಡೆಗೊಂಡ ಸಮುದಾಯಗಳು'}</th>
                    <th className="py-3 px-4">{isEn ? 'Creamy Layer Income' : 'ಕೆನೆಪದರ ಆದಾಯ ಮಿತಿ'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {RESERVATION_ROSTER.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-white whitespace-nowrap">
                        {isEn ? row.category : row.nameKn}
                      </td>
                      <td className="py-3 px-4 font-bold text-indigo-400 whitespace-nowrap">
                        {row.percentageKarnataka}
                      </td>
                      <td className="py-3 px-4 text-blue-300 whitespace-nowrap">
                        {row.percentageCentral}
                      </td>
                      <td className="py-3 px-4 text-slate-300">
                        {row.communitiesCovered}
                      </td>
                      <td className="py-3 px-4 text-amber-300 whitespace-nowrap">
                        {row.incomeLimitOBC}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: ATROCITY ACT (PoA) RELIEF */}
      {activeTab === 'legal_relief' && (
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-2">
              {isEn ? 'SC/ST Prevention of Atrocities (PoA) Act Statutory Victim Relief' : 'ಪರಿಶಿಷ್ಟ ಜಾತಿ & ಪರಿಶಿಷ್ಟ ಪಂಗಡಗಳ ಮೇಲಿನ ದೌರ್ಜನ್ಯ ತಡೆ ಕಾಯ್ದೆ ಪರಿಹಾರ ಸೌಲಭ್ಯ'}
            </h2>
            <p className="text-xs text-slate-400 mb-6">
              {isEn 
                ? 'Under the Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Rules 1995 (Schedule II), every victim is statutorily entitled to immediate monetary compensation from the state government.'
                : 'ದೌರ್ಜನ್ಯಕ್ಕೊಳಗಾದ ಸಂತ್ರಸ್ತರಿಗೆ ಕಾಯ್ದೆಯ ನಿಯಮ ೧೯೯೫ ರಂತೆ ಸರ್ಕಾರದಿಂದ ತಕ್ಷಣದ ಪರಿಹಾರ ಧನ ಮತ್ತು ಉಚಿತ ಕಾನೂನು ರಕ್ಷಣೆ ಪಡೆಯುವ ಸಂವಿಧಾನಬದ್ಧ ಹಕ್ಕಿದೆ.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-slate-800/60 border border-slate-700/60 rounded-xl text-center">
                <p className="text-xs text-slate-400">{isEn ? 'FIR Registration (25%)' : 'ಎಫ್‌ಐಆರ್ ದಾಖಲಾದಾಗ (೨೫%)'}</p>
                <p className="text-lg font-bold text-emerald-400 mt-1">₹25,000 – ₹2,00,000</p>
                <p className="text-[10px] text-slate-400 mt-1">{isEn ? 'Released within 7 days of FIR' : '೭ ದಿನಗಳಲ್ಲಿ ತಕ್ಷಣ ಬಿಡುಗಡೆ'}</p>
              </div>

              <div className="p-4 bg-slate-800/60 border border-slate-700/60 rounded-xl text-center">
                <p className="text-xs text-slate-400">{isEn ? 'Chargesheet Filing (50%)' : 'ಚಾರ್ಜ್‌ಶೀಟ್ ಸಲ್ಲಿಕೆಯಾದಾಗ (೫೦%)'}</p>
                <p className="text-lg font-bold text-blue-400 mt-1">₹50,000 – ₹4,00,000</p>
                <p className="text-[10px] text-slate-400 mt-1">{isEn ? 'Released upon court chargesheet' : 'ಕೋರ್ಟ್‌ಗೆ ಚಾರ್ಜ್‌ಶೀಟ್ ಹೋದಾಗ'}</p>
              </div>

              <div className="p-4 bg-slate-800/60 border border-slate-700/60 rounded-xl text-center">
                <p className="text-xs text-slate-400">{isEn ? 'Court Conclusion (25%)' : 'ವಿಚಾರಣೆ ಅಂತ್ಯವಾದಾಗ (೨೫%)'}</p>
                <p className="text-lg font-bold text-purple-400 mt-1">Final Balance</p>
                <p className="text-[10px] text-slate-400 mt-1">{isEn ? 'Regardless of acquittal' : 'ತೀರ್ಪಿನ ನಂತರ ಅಂತಿಮ ಹಣ'}</p>
              </div>
            </div>

            <div className="p-4 bg-blue-950/40 border border-blue-800/50 rounded-xl text-xs text-slate-300 space-y-2">
              <p className="font-bold text-[#42DCC5]">
                {isEn ? 'Mandatory Free Legal Aid & Protection Services:' : 'ಕಡ್ಡಾಯ ಉಚಿತ ವಕೀಲರು & ಸಾಕ್ಷಿ ರಕ್ಷಣೆ:'}
              </p>
              <p className="leading-relaxed">
                {isEn 
                  ? 'The victim does not need to pay any advocate fees. A Special Public Prosecutor is assigned by the Government. Additionally, District Legal Services Authority (DLSA) provides a free defense lawyer and daily travel allowance for every court hearing.'
                  : 'ಸಂತ್ರಸ್ತರು ವಕೀಲರಿಗೆ ಯಾವುದೇ ಶುಲ್ಕ ನೀಡಬೇಕಾಗಿಲ್ಲ. ಸರ್ಕಾರವೇ ವಿಶೇಷ ಸರ್ಕಾರಿ ಅಭಿಯೋಜಕರನ್ನು (Special Public Prosecutor) ನೇಮಿಸುತ್ತದೆ ಹಾಗೂ ನ್ಯಾಯಾಲಯ ಹಾಜರಾತಿಗೆ ನಿತ್ಯ ಪ್ರಯಾಣ ಭತ್ಯೆ ನೀಡುತ್ತದೆ.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Scheme Detail Modal */}
      {activeSchemeDetail && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full p-6 text-white max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  {activeSchemeDetail.targetCommunities.map(c => (
                    <span key={c} className="text-xs font-bold px-2.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                      {c}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-bold text-white">
                  {isEn ? activeSchemeDetail.title.en : activeSchemeDetail.title.kn}
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  {isEn ? activeSchemeDetail.administeringDepartment.en : activeSchemeDetail.administeringDepartment.kn}
                </p>
              </div>
              <button
                onClick={() => setActiveSchemeDetail(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Benefits */}
            <div className="mb-5">
              <h4 className="text-xs font-bold text-[#42DCC5] mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                {isEn ? 'Primary Benefits & Financial Outlay:' : 'ಪ್ರಮುಖ ಸವಲತ್ತುಗಳು:'}
              </h4>
              <div className="space-y-1.5">
                {(isEn ? activeSchemeDetail.keyBenefits.en : activeSchemeDetail.keyBenefits.kn).map((b, i) => (
                  <div key={i} className="text-xs text-slate-300 p-2.5 bg-slate-800/40 rounded-lg border border-slate-800">
                    {b}
                  </div>
                ))}
              </div>
            </div>

            {/* Documents */}
            <div className="mb-5">
              <h4 className="text-xs font-bold text-blue-400 mb-2 flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                {isEn ? 'Mandatory Documents Required:' : 'ಅಗತ್ಯ ದಾಖಲೆಗಳು:'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(isEn ? activeSchemeDetail.documentsRequired.en : activeSchemeDetail.documentsRequired.kn).map((d, i) => (
                  <div key={i} className="text-xs text-slate-300 p-2 bg-slate-800/30 rounded-lg border border-slate-800/60">
                    • {d}
                  </div>
                ))}
              </div>
            </div>

            {/* How to apply */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-indigo-300 mb-2">
                {isEn ? 'Application Instructions:' : 'ಅರ್ಜಿ ಸಲ್ಲಿಸುವ ಹಂತಗಳು:'}
              </h4>
              <div className="space-y-1.5">
                {(isEn ? activeSchemeDetail.howToApply.en : activeSchemeDetail.howToApply.kn).map((step, i) => (
                  <div key={i} className="text-xs text-slate-300 p-2 bg-slate-800/20 rounded-lg">
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
              <button
                onClick={() => setActiveSchemeDetail(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg cursor-pointer"
              >
                {isEn ? 'Close' : 'ಮುಚ್ಚಿ'}
              </button>
              <a
                href={activeSchemeDetail.officialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5"
              >
                <span>{isEn ? 'Visit Official Portal' : 'ಅಧಿಕೃತ ಪೋರ್ಟಲ್‌ಗೆ ಭೇಟಿ ನೀಡಿ'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
