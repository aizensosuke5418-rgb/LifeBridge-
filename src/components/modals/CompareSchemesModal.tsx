import React from 'react';
import { X, ExternalLink, ArrowRight, ShieldCheck, Building2, FileText, CheckCircle2, AlertCircle, Plus, Trash2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { SCHEMES_DATABASE } from '../../data/schemes';
import { Scheme } from '../../types';

interface CompareSchemesModalProps {
  onClose: () => void;
}

export const CompareSchemesModal: React.FC<CompareSchemesModalProps> = ({ onClose }) => {
  const { 
    language, 
    comparisonSchemeIds, 
    toggleCompareScheme, 
    clearComparison, 
    setSelectedSchemeForDetail,
    setCurrentView 
  } = useApp();
  const isEn = language === 'en';

  const comparedSchemes: Scheme[] = comparisonSchemeIds
    .map(id => SCHEMES_DATABASE.find(s => s.id === id))
    .filter((s): s is Scheme => Boolean(s));

  // Available schemes that can still be added
  const availableToAdd = SCHEMES_DATABASE.filter(s => !comparisonSchemeIds.includes(s.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-6xl max-h-[92vh] bg-[#0F1E36] border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between gap-4 bg-[#0B1628]">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#42DCC5] font-semibold">
              {isEn ? 'Civic Comparative Matrix' : 'ಯೋಜನೆಗಳ ಹೋಲಿಕೆ ಪಟ್ಟಿ'}
            </span>
            <h2 className="text-lg md:text-2xl font-bold text-white tracking-tight">
              {isEn ? 'Side-by-Side Scheme Comparison' : 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ ಮುಖಾಮುಖಿ ಹೋಲಿಕೆ'}
            </h2>
            <p className="text-xs text-slate-400">
              {isEn 
                ? `Comparing ${comparedSchemes.length} of 3 selected welfare schemes across benefits, eligibility, and documents.`
                : `ಆಯ್ಕೆಮಾಡಿದ ${comparedSchemes.length} ಯೋಜನೆಗಳ ಅರ್ಹತೆ, ಪ್ರಯೋಜನಗಳು ಮತ್ತು ದಾಖಲೆಗಳ ಸಮಗ್ರ ಹೋಲಿಕೆ.`}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {comparedSchemes.length > 0 && (
              <button
                onClick={clearComparison}
                className="px-3 py-1.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>{isEn ? 'Clear' : 'ತೆರವುಗೊಳಿಸಿ'}</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-colors cursor-pointer"
              aria-label="Close comparison dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Table Grid */}
        <div className="p-5 overflow-y-auto space-y-6 text-xs">
          {comparedSchemes.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 text-[#42DCC5] flex items-center justify-center mx-auto">
                <FileText className="w-6 h-6" />
              </div>
              <div className="space-y-1 max-w-md mx-auto">
                <h3 className="text-base font-bold text-white">
                  {isEn ? 'No schemes selected for comparison' : 'ಹೋಲಿಕೆಗೆ ಯಾವುದೇ ಯೋಜನೆ ಆಯ್ಕೆಮಾಡಿಲ್ಲ'}
                </h3>
                <p className="text-xs text-slate-400">
                  {isEn 
                    ? 'Select up to 3 schemes from the Directory, Categories, or detail cards by clicking "Compare".'
                    : 'ಯೋಜನಾ ಪಟ್ಟಿ ಅಥವಾ ವಿವರಗಳಿಂದ "ಹೋಲಿಕೆ" ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ ೩ ಯೋಜನೆಗಳವರೆಗೆ ಹೋಲಿಸಿ.'}
                </p>
              </div>

              {/* Quick Add Suggestions */}
              <div className="pt-4 max-w-xl mx-auto space-y-2">
                <p className="text-xs font-semibold text-slate-300">
                  {isEn ? 'Quick Select Popular Schemes to Compare:' : 'ಹೋಲಿಸಲು ಜನಪ್ರಿಯ ಯೋಜನೆಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ:'}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {SCHEMES_DATABASE.slice(0, 4).map(s => (
                    <button
                      key={s.id}
                      onClick={() => toggleCompareScheme(s.id)}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5 text-[#42DCC5]" />
                      <span>{s.shortName || (isEn ? s.name.en : s.name.kn)}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto pb-4">
              <table className="w-full border-collapse border border-slate-800 text-left min-w-[700px]">
                <thead>
                  <tr className="bg-[#0B1526] border-b border-slate-800">
                    <th className="p-3.5 w-44 font-semibold text-slate-400 uppercase tracking-wider text-[11px] align-top">
                      {isEn ? 'Comparison Parameter' : 'ಹೋಲಿಕೆಯ ಮಾನದಂಡ'}
                    </th>
                    {comparedSchemes.map(scheme => (
                      <th key={scheme.id} className="p-3.5 font-bold text-white text-sm border-l border-slate-800 align-top">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="text-[10px] text-[#42DCC5] uppercase tracking-wider font-semibold block">
                              {scheme.level === 'karnataka' ? 'Karnataka' : 'Central / Both'}
                            </span>
                            <span className="text-base text-white font-bold leading-tight block mt-0.5">
                              {isEn ? scheme.name.en : scheme.name.kn}
                            </span>
                          </div>
                          <button
                            onClick={() => toggleCompareScheme(scheme.id)}
                            className="text-slate-400 hover:text-rose-400 p-1 rounded hover:bg-slate-800 transition-colors cursor-pointer"
                            title={isEn ? 'Remove from comparison' : 'ಹೋಲಿಕೆಯಿಂದ ತೆಗೆದುಹಾಕಿ'}
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </th>
                    ))}
                    {comparedSchemes.length < 3 && (
                      <th className="p-3.5 border-l border-slate-800 border-dashed align-top w-56 bg-[#0B1526]/40">
                        <span className="text-xs text-slate-400 block mb-2">
                          {isEn ? '+ Add Scheme (Max 3)' : '+ ಯೋಜನೆ ಸೇರಿಸಿ'}
                        </span>
                        <select
                          onChange={(e) => {
                            if (e.target.value) {
                              toggleCompareScheme(e.target.value);
                              e.target.value = '';
                            }
                          }}
                          className="w-full p-2 rounded-lg bg-[#0E1E36] border border-slate-700 text-slate-200 text-xs focus:outline-none"
                          defaultValue=""
                        >
                          <option value="" disabled>{isEn ? 'Select scheme...' : 'ಯೋಜನೆ ಆಯ್ಕೆಮಾಡಿ...'}</option>
                          {availableToAdd.map(s => (
                            <option key={s.id} value={s.id}>
                              {s.shortName || (isEn ? s.name.en : s.name.kn)}
                            </option>
                          ))}
                        </select>
                      </th>
                    )}
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-800">
                  {/* Row 1: Administering Authority */}
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-3.5 font-semibold text-slate-400 bg-[#0B1526]/50">
                      {isEn ? 'Administering Authority' : 'ಆಡಳಿತ ಇಲಾಖೆ'}
                    </td>
                    {comparedSchemes.map(s => (
                      <td key={s.id} className="p-3.5 border-l border-slate-800 text-slate-300">
                        {isEn ? s.authority.en : s.authority.kn}
                      </td>
                    ))}
                    {comparedSchemes.length < 3 && <td className="border-l border-slate-800" />}
                  </tr>

                  {/* Row 2: Category */}
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-3.5 font-semibold text-slate-400 bg-[#0B1526]/50">
                      {isEn ? 'Sector Category' : 'ವಿಭಾಗ'}
                    </td>
                    {comparedSchemes.map(s => (
                      <td key={s.id} className="p-3.5 border-l border-slate-800 capitalize text-slate-200 font-medium">
                        {s.category.replace('_', ' ')}
                      </td>
                    ))}
                    {comparedSchemes.length < 3 && <td className="border-l border-slate-800" />}
                  </tr>

                  {/* Row 3: Primary Benefits */}
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-3.5 font-semibold text-slate-400 bg-[#0B1526]/50">
                      {isEn ? 'Primary Benefits' : 'ಪ್ರಮುಖ ಪ್ರಯೋಜನಗಳು'}
                    </td>
                    {comparedSchemes.map(s => (
                      <td key={s.id} className="p-3.5 border-l border-slate-800 space-y-1.5 text-slate-200">
                        {(isEn ? s.benefits.en : s.benefits.kn).map((benefit, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <span className="text-[#42DCC5] font-bold">★</span>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </td>
                    ))}
                    {comparedSchemes.length < 3 && <td className="border-l border-slate-800" />}
                  </tr>

                  {/* Row 4: Key Eligibility - Age */}
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-3.5 font-semibold text-slate-400 bg-[#0B1526]/50">
                      {isEn ? 'Age Limit' : 'ವಯಸ್ಸಿನ ಮಿತಿ'}
                    </td>
                    {comparedSchemes.map(s => (
                      <td key={s.id} className="p-3.5 border-l border-slate-800 text-slate-300">
                        {s.knownCriteria.minAge || s.knownCriteria.maxAge ? (
                          <span>
                            {s.knownCriteria.minAge ? `Min: ${s.knownCriteria.minAge} yrs` : ''}{' '}
                            {s.knownCriteria.maxAge ? `Max: ${s.knownCriteria.maxAge} yrs` : ''}
                          </span>
                        ) : (
                          <span className="text-slate-500 italic">{isEn ? 'No specific age cap' : 'ಯಾವುದೇ ವಯೋಮಿತಿಯಿಲ್ಲ'}</span>
                        )}
                      </td>
                    ))}
                    {comparedSchemes.length < 3 && <td className="border-l border-slate-800" />}
                  </tr>

                  {/* Row 5: Key Eligibility - Education / Student */}
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-3.5 font-semibold text-slate-400 bg-[#0B1526]/50">
                      {isEn ? 'Education / Student' : 'ಶಿಕ್ಷಣ / ವಿದ್ಯಾರ್ಥಿ'}
                    </td>
                    {comparedSchemes.map(s => (
                      <td key={s.id} className="p-3.5 border-l border-slate-800 text-slate-300">
                        {s.knownCriteria.studentStatus ? (
                          <span className="text-emerald-400 font-medium">
                            {isEn ? 'Enrolled students (' + (s.knownCriteria.educationLevels?.join(', ') || 'All') + ')' : 'ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಮಾತ್ರ'}
                          </span>
                        ) : s.knownCriteria.educationLevels ? (
                          <span>{s.knownCriteria.educationLevels.join(', ').toUpperCase()}</span>
                        ) : (
                          <span className="text-slate-500 italic">{isEn ? 'Open to all' : 'ಎಲ್ಲರಿಗೂ ಅನ್ವಯ'}</span>
                        )}
                      </td>
                    ))}
                    {comparedSchemes.length < 3 && <td className="border-l border-slate-800" />}
                  </tr>

                  {/* Row 6: Key Eligibility - Income & Ration Card */}
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-3.5 font-semibold text-slate-400 bg-[#0B1526]/50">
                      {isEn ? 'Income / Ration Card' : 'ಆದಾಯ / ರೇಷನ್ ಕಾರ್ಡ್'}
                    </td>
                    {comparedSchemes.map(s => (
                      <td key={s.id} className="p-3.5 border-l border-slate-800 text-slate-300">
                        <div>
                          {s.knownCriteria.maxAnnualIncome ? (
                            <span className="block font-mono">
                              Max Income: ≤ ₹{(s.knownCriteria.maxAnnualIncome/100000).toFixed(1)} Lakhs/yr
                            </span>
                          ) : (
                            <span className="text-slate-500 italic block">{isEn ? 'No strict income ceiling' : 'ಆದಾಯ ಮಿತಿ ನಿಗದಿಯಾಗಿಲ್ಲ'}</span>
                          )}
                          {s.knownCriteria.rationCards && (
                            <span className="text-blue-400 block mt-1">
                              Cards: {s.knownCriteria.rationCards.join(' / ')}
                            </span>
                          )}
                        </div>
                      </td>
                    ))}
                    {comparedSchemes.length < 3 && <td className="border-l border-slate-800" />}
                  </tr>

                  {/* Row 7: Geographic Scope */}
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-3.5 font-semibold text-slate-400 bg-[#0B1526]/50">
                      {isEn ? 'Geographic Domicile' : 'ವಾಸಸ್ಥಳ ವ್ಯಾಪ್ತಿ'}
                    </td>
                    {comparedSchemes.map(s => (
                      <td key={s.id} className="p-3.5 border-l border-slate-800 text-slate-300">
                        {s.knownCriteria.karnatakaResidentOnly ? (
                          <span className="text-amber-400 font-medium">Karnataka Residents Only</span>
                        ) : (
                          <span className="text-emerald-400 font-medium">All-India (Central Entitlement)</span>
                        )}
                      </td>
                    ))}
                    {comparedSchemes.length < 3 && <td className="border-l border-slate-800" />}
                  </tr>

                  {/* Row 8: Required Documents */}
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-3.5 font-semibold text-slate-400 bg-[#0B1526]/50">
                      {isEn ? 'Mandatory Documents' : 'ಕಡ್ಡಾಯ ದಾಖಲೆಗಳು'}
                    </td>
                    {comparedSchemes.map(s => (
                      <td key={s.id} className="p-3.5 border-l border-slate-800 space-y-1 text-slate-300">
                        {(isEn ? s.requiredDocuments.mandatory.en : s.requiredDocuments.mandatory.kn).map((doc, idx) => (
                          <div key={idx} className="flex items-start gap-1">
                            <span>•</span>
                            <span>{doc}</span>
                          </div>
                        ))}
                      </td>
                    ))}
                    {comparedSchemes.length < 3 && <td className="border-l border-slate-800" />}
                  </tr>

                  {/* Row 9: Application Process Overview */}
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-3.5 font-semibold text-slate-400 bg-[#0B1526]/50">
                      {isEn ? 'Application Mode' : 'ಅರ್ಜಿ ಸಲ್ಲಿಕೆ ವಿಧಾನ'}
                    </td>
                    {comparedSchemes.map(s => (
                      <td key={s.id} className="p-3.5 border-l border-slate-800 text-slate-300">
                        <p className="line-clamp-2">
                          {isEn ? s.applicationSteps[0]?.description.en : s.applicationSteps[0]?.description.kn}
                        </p>
                        <span className="text-[11px] text-[#42DCC5] font-semibold mt-1 block">
                          Total {s.applicationSteps.length} Verified Steps
                        </span>
                      </td>
                    ))}
                    {comparedSchemes.length < 3 && <td className="border-l border-slate-800" />}
                  </tr>

                  {/* Row 10: Official Links & Actions */}
                  <tr className="hover:bg-slate-800/30 transition-colors bg-[#0B1526]/30">
                    <td className="p-3.5 font-semibold text-slate-400 bg-[#0B1526]/50">
                      {isEn ? 'Action / Official Link' : 'ಅಧಿಕೃತ ಪೋರ್ಟಲ್'}
                    </td>
                    {comparedSchemes.map(s => (
                      <td key={s.id} className="p-3.5 border-l border-slate-800">
                        <div className="flex flex-col gap-2">
                          <a
                            href={s.officialPortalUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="px-3 py-2 rounded-lg bg-[#3678F6] hover:bg-blue-600 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                          >
                            <span>{isEn ? 'Apply on Official Portal' : 'ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್'}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                          <button
                            onClick={() => {
                              onClose();
                              setSelectedSchemeForDetail(s);
                            }}
                            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium cursor-pointer"
                          >
                            {isEn ? 'Open Full Details' : 'ಪೂರ್ಣ ಮಾಹಿತಿ'}
                          </button>
                        </div>
                      </td>
                    ))}
                    {comparedSchemes.length < 3 && <td className="border-l border-slate-800" />}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-[#0B1628] flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{isEn ? 'Grounded in official government circulars' : 'ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಸುತ್ತೋಲೆಗಳ ಆಧಾರಿತ'}</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium cursor-pointer"
          >
            {isEn ? 'Close Comparison' : 'ಮುಚ್ಚಿ'}
          </button>
        </div>
      </div>
    </div>
  );
};
