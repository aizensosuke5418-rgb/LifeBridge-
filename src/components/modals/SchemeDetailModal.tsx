import React from 'react';
import { X, ExternalLink, Bookmark, CheckCircle2, AlertTriangle, XCircle, FileText, Calendar, Building2, ShieldCheck, ChevronRight, Columns } from 'lucide-react';
import { Scheme } from '../../types';
import { useApp } from '../../context/AppContext';
import { evaluateSchemeEligibility } from '../../utils/matchingEngine';

interface SchemeDetailModalProps {
  scheme: Scheme;
  onClose: () => void;
}

export const SchemeDetailModal: React.FC<SchemeDetailModalProps> = ({ scheme, onClose }) => {
  const { 
    language, 
    profile, 
    isSchemeSaved, 
    toggleSaveScheme, 
    toggleCompareScheme, 
    isInComparison, 
    setIsComparisonModalOpen, 
    t, 
    setCurrentView 
  } = useApp();
  const isEn = language === 'en';
  const saved = isSchemeSaved(scheme.id);
  const inCompare = isInComparison(scheme.id);

  const evaluation = evaluateSchemeEligibility(scheme, profile, language);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#0F1E36] border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100">
        {/* Header Bar */}
        <div className="p-6 border-b border-slate-800 flex items-start justify-between gap-4 bg-[#0B1628]">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="font-semibold text-[#42DCC5]">
                {scheme.level === 'karnataka' ? 'Karnataka State' : scheme.level === 'central' ? 'Central Government' : 'Central + Karnataka'}
              </span>
              <span aria-hidden="true">·</span>
              <span className="capitalize">{scheme.category.replace('_', ' ')}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                {scheme.verificationStatus === 'verified_official' ? 'Verified Official' : 'Referenced'}
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              {isEn ? scheme.name.en : scheme.name.kn}
            </h2>
            <p className="text-xs text-slate-300 flex items-center gap-1.5 pt-1">
              <Building2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>{isEn ? scheme.authority.en : scheme.authority.kn}</span>
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => toggleCompareScheme(scheme.id)}
              className={`p-2 rounded-lg border transition-colors cursor-pointer flex items-center gap-1 text-xs ${
                inCompare
                  ? 'bg-blue-600/30 text-[#42DCC5] border-blue-500/50'
                  : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-white'
              }`}
              title={inCompare ? (isEn ? 'Added to Comparison' : 'ಹೋಲಿಕೆಯಲ್ಲಿದೆ') : (isEn ? 'Add to Compare' : 'ಹೋಲಿಕೆಗೆ ಸೇರಿಸಿ')}
            >
              <Columns className="w-4 h-4" />
              <span className="hidden sm:inline">{inCompare ? (isEn ? 'Comparing' : 'ಹೋಲಿಕೆ') : (isEn ? 'Compare' : 'ಹೋಲಿಸಿ')}</span>
            </button>
            <button
              onClick={() => toggleSaveScheme(scheme.id)}
              className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                saved
                  ? 'bg-blue-600/20 text-[#42DCC5] border-blue-500/40'
                  : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-white'
              }`}
              title={saved ? t.savedInWallet : t.saveToWallet}
            >
              <Bookmark className={`w-5 h-5 ${saved ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Eligibility Banner from Evaluation Engine */}
          <div
            className={`p-4 rounded-xl border ${
              evaluation.status === 'potential_match'
                ? 'bg-emerald-950/30 border-emerald-500/40'
                : evaluation.status === 'more_info_needed'
                ? 'bg-amber-950/30 border-amber-500/40'
                : 'bg-slate-800/40 border-slate-700'
            }`}
          >
            <div className="flex items-center gap-2 mb-1.5">
              {evaluation.status === 'potential_match' ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="font-semibold text-emerald-300">{t.potentialMatch}</span>
                </>
              ) : evaluation.status === 'more_info_needed' ? (
                <>
                  <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="font-semibold text-amber-300">{t.moreInfoNeeded}</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-slate-400 shrink-0" />
                  <span className="font-semibold text-slate-300">{t.doesNotMatch}</span>
                </>
              )}
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {evaluation.whyYouSeeThis}
            </p>
          </div>

          {/* Criteria Check breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#0B1526] border border-slate-800">
              <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{t.criteriaMatched}</span>
              </h4>
              {evaluation.matchingCriteria.length > 0 ? (
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {evaluation.matchingCriteria.map((c, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-emerald-400">✓</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-slate-500 italic">
                  {isEn ? 'No criteria verified against profile yet.' : 'ಇನ್ನೂ ಯಾವುದೇ ವಿವರ ಹೊಂದಾಣಿಕೆಯಾಗಿಲ್ಲ.'}
                </p>
              )}
            </div>

            <div className="p-4 rounded-xl bg-[#0B1526] border border-slate-800">
              <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>{t.criteriaToConfirm}</span>
              </h4>
              {evaluation.missingCriteria.length > 0 ? (
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {evaluation.missingCriteria.map((c, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-amber-400">?</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-emerald-400">
                  {isEn ? 'All known criteria confirmed with active profile!' : 'ಎಲ್ಲಾ ನಿಯಮಗಳು ದೃಢಪಟ್ಟಿವೆ!'}
                </p>
              )}
            </div>
          </div>

          {/* Disqualifying Conditions */}
          {scheme.disqualifyingConditions && (
            <div className="p-4 rounded-xl bg-[#161220] border border-rose-900/40">
              <h4 className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <XCircle className="w-3.5 h-3.5" />
                <span>{t.disqualifyingNotes}</span>
              </h4>
              <ul className="space-y-1 text-xs text-slate-300">
                {(isEn ? scheme.disqualifyingConditions.en : scheme.disqualifyingConditions.kn).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-rose-400">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Description & Benefits */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              {isEn ? 'About the Scheme & Benefits' : 'ಯೋಜನೆ ಮತ್ತು ಪ್ರಯೋಜನಗಳು'}
            </h4>
            <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
              {isEn ? scheme.description.en : scheme.description.kn}
            </p>
            <div className="pt-2">
              <ul className="space-y-2 text-xs md:text-sm">
                {(isEn ? scheme.benefits.en : scheme.benefits.kn).map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-[#0C172A] p-2.5 rounded-lg border border-slate-800">
                    <span className="text-[#42DCC5] font-bold">★</span>
                    <span className="text-slate-200">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Documents to Prepare */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>{t.documentsNeeded}</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-[#0C172A] border border-slate-800 space-y-1.5">
                <span className="font-semibold text-blue-300">
                  {isEn ? 'Mandatory Documents:' : 'ಕಡ್ಡಾಯ ದಾಖಲೆಗಳು:'}
                </span>
                <ul className="space-y-1 text-slate-300">
                  {(isEn ? scheme.requiredDocuments.mandatory.en : scheme.requiredDocuments.mandatory.kn).map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-1">
                      <span>•</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 rounded-lg bg-[#0C172A] border border-slate-800 space-y-1.5">
                <span className="font-semibold text-slate-400">
                  {isEn ? 'To Confirm with Authority:' : 'ದೃಢೀಕರಿಸಿಕೊಳ್ಳಬೇಕಾದ ವಿವರ:'}
                </span>
                <ul className="space-y-1 text-slate-300">
                  {(isEn ? scheme.requiredDocuments.toConfirm.en : scheme.requiredDocuments.toConfirm.kn).map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-1">
                      <span>•</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Application Steps */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              {t.howToApply}
            </h4>
            <div className="space-y-2.5">
              {scheme.applicationSteps.map((step) => (
                <div
                  key={step.stepNumber}
                  className="flex items-start gap-3 p-3 rounded-lg bg-[#0C172A] border border-slate-800"
                >
                  <span className="w-6 h-6 rounded-full bg-blue-600/30 text-blue-400 border border-blue-500/40 flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                    {step.stepNumber}
                  </span>
                  <div>
                    <h5 className="font-semibold text-xs md:text-sm text-white">
                      {isEn ? step.title.en : step.title.kn}
                    </h5>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      {isEn ? step.description.en : step.description.kn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verification & Deadline Note */}
          <div className="pt-2 pb-1 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <span>
                {isEn ? 'Last verified with official gazette: ' : 'ಕೊನೆಯದಾಗಿ ಪರಿಶೀಲಿಸಿದ ದಿನಾಂಕ: '}
                <strong className="text-slate-300 font-mono">{scheme.lastVerifiedDate}</strong>
              </span>
            </div>
            {scheme.deadlineNote && (
              <span className="text-amber-400/90">
                {isEn ? scheme.deadlineNote.en : scheme.deadlineNote.kn}
              </span>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-800 bg-[#0B1628] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              setCurrentView('guides');
            }}
            className="text-xs font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer"
          >
            <span>{isEn ? 'Open Full Application Guide' : 'ಸಂಪೂರ್ಣ ಅರ್ಜಿ ಮಾರ್ಗದರ್ಶಿ ನೋಡಿ'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleSaveScheme(scheme.id)}
              className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                saved
                  ? 'bg-blue-600/20 text-[#42DCC5] border-blue-500/40'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
              }`}
            >
              {saved ? t.savedInWallet : t.saveToWallet}
            </button>
            <a
              href={scheme.officialPortalUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-xs font-semibold text-white bg-[#3678F6] hover:bg-blue-600 rounded-lg shadow-sm flex items-center gap-1.5 transition-colors"
            >
              <span>{t.officialWebsite}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
