import React, { useState } from 'react';
import { 
  FileText, CheckCircle2, ExternalLink, Bookmark, CheckSquare, Square, 
  ChevronRight, AlertCircle, Building2, Calendar, ArrowRight, ShieldCheck 
} from 'lucide-react';
import { SCHEMES_DATABASE } from '../../data/schemes';
import { useApp } from '../../context/AppContext';
import { Scheme } from '../../types';

export const ApplicationGuidesView: React.FC = () => {
  const { 
    language, 
    wallet, 
    updateChecklist, 
    toggleSaveScheme, 
    isSchemeSaved, 
    t 
  } = useApp();
  const isEn = language === 'en';

  const [selectedSchemeId, setSelectedSchemeId] = useState<string>(SCHEMES_DATABASE[0].id);

  const selectedScheme = SCHEMES_DATABASE.find(s => s.id === selectedSchemeId) || SCHEMES_DATABASE[0];
  const checklist = wallet.checklistProgress[selectedScheme.id] || {};
  const isSaved = isSchemeSaved(selectedScheme.id);

  const checklistItems = [
    { key: 'eligibilityReviewed', labelEn: '1. Verified Known Official Eligibility Criteria', labelKn: '೧. ಅಧಿಕೃತ ಅರ್ಹತಾ ನಿಯಮಗಳನ್ನು ಪರಿಶೀಲಿಸಲಾಗಿದೆ' },
    { key: 'documentsChecked', labelEn: '2. Gathered All Required Documents & Passbook', labelKn: '೨. ಅಗತ್ಯವಿರುವ ಎಲ್ಲಾ ದಾಖಲೆಗಳನ್ನು ಸಿದ್ಧಪಡಿಸಲಾಗಿದೆ' },
    { key: 'portalRead', labelEn: '3. Read Official Guidelines on Government Portal', labelKn: '೩. ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಇಲಾಖಾ ನಿಯಮಾವಳಿಗಳನ್ನು ಓದಲಾಗಿದೆ' },
    { key: 'applicationStarted', labelEn: '4. Initiated Application at Bangalore One / Seva Sindhu', labelKn: '೪. ಸೇವಾ ಸಿಂಧು ಅಥವಾ ಬೆಂಗಳೂರು ಒನ್‌ನಲ್ಲಿ ಅರ್ಜಿ ಪ್ರಾರಂಭಿಸಲಾಗಿದೆ' },
    { key: 'submittedRefSaved', labelEn: '5. Application Submitted & Acknowledgement Slip Saved', labelKn: '೫. ಅರ್ಜಿ ಸಲ್ಲಿಸಿ ಸ್ವೀಕೃತಿ ರಶೀದಿಯನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಇರಿಸಲಾಗಿದೆ' },
    { key: 'statusReminderSet', labelEn: '6. Noted Portal Status Check Tracking Period', labelKn: '೬. ಅರ್ಜಿ ಸ್ಥಿತಿ ಪರಿಶೀಲನೆಗೆ ದಿನಾಂಕ ಗುರುತುಹಾಕಲಾಗಿದೆ' }
  ];

  const completedCount = checklistItems.filter(item => Boolean((checklist as any)[item.key])).length;
  const progressPercent = Math.round((completedCount / checklistItems.length) * 100);

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs uppercase tracking-widest text-[#42DCC5] font-semibold">
          {isEn ? 'Step-by-Step Instructions' : 'ಹಂತ-ಹಂತದ ಅರ್ಜಿ ಮಾರ್ಗದರ್ಶಿ'}
        </span>
        <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
          {isEn ? 'Government Scheme Application Guides' : 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ ಅರ್ಜಿ ಮಾರ್ಗದರ್ಶಿಗಳು'}
        </h1>
        <p className="text-xs md:text-sm text-slate-300 max-w-3xl leading-relaxed">
          {isEn
            ? 'Verified procedural steps for applying directly to official government portals. Track your readiness checklist locally on your device.'
            : 'ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್‌ಗಳಲ್ಲಿ ಮಧ್ಯವರ್ತಿಗಳಿಲ್ಲದೆ ಸ್ವತಃ ಅರ್ಜಿ ಸಲ್ಲಿಸುವ ವಿವರವಾದ ಮಾರ್ಗದರ್ಶಿ ಮತ್ತು ಸಿದ್ಧತಾ ಚೆಕ್‌ಲಿಸ್ಟ್.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Scheme Selector List (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400 pb-1">
            <span>{isEn ? 'Select Scheme Guide' : 'ಯೋಜನೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ'}</span>
            <span className="font-mono">{SCHEMES_DATABASE.length} Available</span>
          </div>

          <div className="space-y-2 max-h-[750px] overflow-y-auto pr-1">
            {SCHEMES_DATABASE.map((scheme) => {
              const isCurrent = scheme.id === selectedScheme.id;
              const schemeProgress = wallet.checklistProgress[scheme.id] || {};
              const checked = Object.values(schemeProgress).filter(Boolean).length;

              return (
                <button
                  key={scheme.id}
                  onClick={() => setSelectedSchemeId(scheme.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex flex-col gap-1.5 cursor-pointer ${
                    isCurrent
                      ? 'bg-blue-600/20 border-blue-500/60 shadow-md'
                      : 'bg-[#0F1E36] border-slate-800 hover:border-slate-700 hover:bg-[#12223c]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-[#42DCC5] font-semibold">
                      {scheme.level === 'karnataka' ? 'Karnataka' : 'Central / Both'}
                    </span>
                    {checked > 0 && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono">
                        {checked}/6 {isEn ? 'Done' : 'ಮುಗಿದಿದೆ'}
                      </span>
                    )}
                  </div>
                  <h4 className={`text-sm font-bold leading-snug ${isCurrent ? 'text-white' : 'text-slate-200'}`}>
                    {isEn ? scheme.name.en : scheme.name.kn}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-1">
                    {isEn ? scheme.authority.en : scheme.authority.kn}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Full Application Guide for Selected Scheme (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="rounded-2xl bg-[#0F1E36] border border-slate-800 p-6 space-y-6">
            {/* Guide Title Lockup */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
              <div>
                <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
                  {isEn ? 'Application Guide' : 'ಅರ್ಜಿ ಮಾರ್ಗದರ್ಶಿ'}
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mt-1">
                  {isEn ? `How to Apply for ${selectedScheme.name.en}` : `${selectedScheme.name.kn} ಅರ್ಜಿಯ ಸಂಪೂರ್ಣ ಹಂತಗಳು`}
                </h2>
                <p className="text-xs text-slate-300 mt-1 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{isEn ? selectedScheme.authority.en : selectedScheme.authority.kn}</span>
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => toggleSaveScheme(selectedScheme.id)}
                  className={`px-3 py-2 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                    isSaved
                      ? 'bg-blue-600/20 text-[#42DCC5] border-blue-500/40'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
                  }`}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
                  <span>{isSaved ? t.savedInWallet : t.saveToWallet}</span>
                </button>

                <a
                  href={selectedScheme.officialPortalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-[#3678F6] hover:bg-blue-600 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>{t.officialWebsite}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 1. Understand the Scheme */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-[#42DCC5] uppercase tracking-wider">
                {isEn ? '1. Understand the Scheme' : '೧. ಯೋಜನೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ'}
              </h3>
              <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
                {isEn ? selectedScheme.description.en : selectedScheme.description.kn}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1 text-xs">
                {(isEn ? selectedScheme.benefits.en : selectedScheme.benefits.kn).map((benefit, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-[#0B1526] border border-slate-800 text-slate-300 flex items-start gap-2">
                    <span className="text-[#42DCC5]">★</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Check Known Eligibility Criteria */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-[#42DCC5] uppercase tracking-wider">
                {isEn ? '2. Official Eligibility Conditions' : '೨. ಅಧಿಕೃತ ಅರ್ಹತಾ ನಿಯಮಗಳು'}
              </h3>
              <div className="p-3.5 rounded-xl bg-[#0B1526] border border-slate-800 text-xs space-y-2">
                <p className="text-slate-300 font-medium">
                  {isEn ? 'Known Verified Eligibility Rules:' : 'ಪರಿಶೀಲಿಸಿದ ಅರ್ಹತಾ ನಿಯಮಾವಳಿಗಳು:'}
                </p>
                <ul className="space-y-1 text-slate-400 pl-4 list-disc">
                  {selectedScheme.knownCriteria.karnatakaResidentOnly && (
                    <li>{isEn ? 'Must be a bona fide resident of Karnataka with state domicile' : 'ಕರ್ನಾಟಕದ ಕಡ್ಡಾಯ ನಿವಾಸಿಯಾಗಿರಬೇಕು'}</li>
                  )}
                  {selectedScheme.knownCriteria.gender && (
                    <li>{isEn ? `Beneficiary gender requirement: ${selectedScheme.knownCriteria.gender}` : `ಲಿಂಗ ಮಾನದಂಡ: ${selectedScheme.knownCriteria.gender}`}</li>
                  )}
                  {selectedScheme.knownCriteria.minAge && (
                    <li>{isEn ? `Minimum age: ${selectedScheme.knownCriteria.minAge} years` : `ಕನಿಷ್ಠ ವಯಸ್ಸು: ${selectedScheme.knownCriteria.minAge} ವರ್ಷ`}</li>
                  )}
                  {selectedScheme.knownCriteria.rationCards && (
                    <li>{isEn ? `Applicable ration cards: ${selectedScheme.knownCriteria.rationCards.join(', ')}` : `ಅರ್ಹ ಪಡಿತರ ಚೀಟಿ: ${selectedScheme.knownCriteria.rationCards.join(', ')}`}</li>
                  )}
                  {selectedScheme.knownCriteria.maxAnnualIncome && (
                    <li>{isEn ? `Family income must be within government slab (≤ ₹${(selectedScheme.knownCriteria.maxAnnualIncome/100000).toFixed(1)} Lakhs)` : `ಕುಟುಂಬದ ವಾರ್ಷಿಕ ಆದಾಯ ಮಿತಿ`}</li>
                  )}
                </ul>
              </div>
            </div>

            {/* 3. Prepare the Documents */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-[#42DCC5] uppercase tracking-wider">
                {isEn ? '3. Prepare the Required Documents' : '೩. ಅಗತ್ಯವಿರುವ ದಾಖಲೆಗಳನ್ನು ಸಿದ್ಧಪಡಿಸಿ'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#0B1526] border border-slate-800 space-y-1.5">
                  <span className="font-semibold text-blue-400">
                    {isEn ? 'Mandatory Documents:' : 'ಕಡ್ಡಾಯ ದಾಖಲೆಗಳು:'}
                  </span>
                  <ul className="space-y-1 text-slate-300 pl-3 list-disc">
                    {(isEn ? selectedScheme.requiredDocuments.mandatory.en : selectedScheme.requiredDocuments.mandatory.kn).map((doc, idx) => (
                      <li key={idx}>{doc}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-3.5 rounded-xl bg-[#0B1526] border border-slate-800 space-y-1.5">
                  <span className="font-semibold text-slate-400">
                    {isEn ? 'To Confirm with Authority:' : 'ದೃಢಪಡಿಸಿಕೊಳ್ಳಬೇಕಾದ ಮಾಹಿತಿ:'}
                  </span>
                  <ul className="space-y-1 text-slate-300 pl-3 list-disc">
                    {(isEn ? selectedScheme.requiredDocuments.toConfirm.en : selectedScheme.requiredDocuments.toConfirm.kn).map((doc, idx) => (
                      <li key={idx}>{doc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. Follow the Application Steps */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-[#42DCC5] uppercase tracking-wider">
                {isEn ? '4. Official Step-by-Step Application Process' : '೪. ಅಧಿಕೃತ ಅರ್ಜಿ ಸಲ್ಲಿಕೆ ಹಂತಗಳು'}
              </h3>
              <div className="space-y-3">
                {selectedScheme.applicationSteps.map((step) => (
                  <div
                    key={step.stepNumber}
                    className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0B1526] border border-slate-800"
                  >
                    <span className="w-7 h-7 rounded-lg bg-blue-600/30 text-blue-400 border border-blue-500/40 flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                      {step.stepNumber}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {isEn ? step.title.en : step.title.kn}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {isEn ? step.description.en : step.description.kn}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Direct Official Portal Actions */}
            <div className="p-4 rounded-xl bg-[#0B1526] border border-blue-900/40 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div>
                <p className="font-semibold text-white">
                  {isEn ? 'Official Department Gateway' : 'ಅಧಿಕೃತ ಇಲಾಖಾ ಪೋರ್ಟಲ್'}
                </p>
                <p className="text-slate-400 text-[11px]">
                  {selectedScheme.officialPortalUrl}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {selectedScheme.officialStatusCheckUrl && (
                  <a
                    href={selectedScheme.officialStatusCheckUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium flex items-center gap-1 transition-colors"
                  >
                    <span>{isEn ? 'Check Status' : 'ಸ್ಥಿತಿ ಪರಿಶೀಲನೆ'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                <a
                  href={selectedScheme.officialPortalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#3678F6] hover:bg-blue-600 text-white font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <span>{t.officialWebsite}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 6. Application Readiness Tracker (Interactive Checklist) */}
            <div className="p-5 rounded-xl bg-[#09111E] border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <CheckSquare className="w-4 h-4 text-[#42DCC5]" />
                    <span>{isEn ? 'Application Readiness Tracker' : 'ಅರ್ಜಿ ಸಿದ್ಧತಾ ಟ್ರ್ಯಾಕರ್'}</span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {isEn ? 'Tick off items as you complete them. Saved locally in your Support Wallet.' : 'ಪ್ರತಿಯೊಂದು ಹಂತವನ್ನು ಮುಗಿಸಿದಂತೆ ಗುರುತುಹಾಕಿ. ವಾಲೆಟ್‌ನಲ್ಲಿ ಸುರಕ್ಷಿತವಾಗಿರುತ್ತದೆ.'}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-[#42DCC5] font-mono">{progressPercent}%</span>
                  <div className="w-20 h-1.5 bg-slate-800 rounded-full overflow-hidden mt-1">
                    <div className="h-full bg-[#42DCC5] transition-all" style={{ width: `${progressPercent}%` }} />
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                {checklistItems.map((item) => {
                  const isChecked = Boolean((checklist as any)[item.key]);
                  return (
                    <button
                      key={item.key}
                      onClick={() => updateChecklist(selectedScheme.id, item.key, !isChecked)}
                      className={`w-full p-2.5 rounded-lg border text-left flex items-center gap-3 transition-colors cursor-pointer ${
                        isChecked
                          ? 'bg-emerald-950/20 text-emerald-200 border-emerald-500/40'
                          : 'bg-[#0B1526] border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${isChecked ? 'bg-emerald-500 border-emerald-500 text-black' : 'border-slate-600'}`}>
                        {isChecked && <CheckSquare className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="font-medium">{isEn ? item.labelEn : item.labelKn}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 7. Deadlines and Verification Status */}
            <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>
                  {isEn ? 'Official Verification Status: ' : 'ದೃಢೀಕರಣ ಸ್ಥಿತಿ: '}
                  <strong className="text-slate-200">Verified Official</strong>
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400">
                <Calendar className="w-4 h-4 text-slate-500" />
                <span>{selectedScheme.deadlineNote ? (isEn ? selectedScheme.deadlineNote.en : selectedScheme.deadlineNote.kn) : (isEn ? 'Check official portal for current cycle' : 'ಚಾಲ್ತಿ ದಿನಾಂಕಕ್ಕೆ ಪೋರ್ಟಲ್ ನೋಡಿ')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
