import React from 'react';
import { 
  ShieldCheck, Lock, HeartHandshake, Eye, AlertCircle, 
  HelpCircle, ExternalLink, ArrowRight, Building2, UserCheck, BookOpen 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { BridgeLogo } from '../BridgeLogo';

export const AboutView: React.FC = () => {
  const { language, setCurrentView, t } = useApp();
  const isEn = language === 'en';

  return (
    <div className="max-w-5xl mx-auto px-4 lg:px-6 py-8 space-y-10">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 space-y-3 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2.5">
          <BridgeLogo size="lg" />
          <span className="text-2xl font-bold text-white tracking-tight">{t.brandName}</span>
        </div>
        <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
          {isEn ? 'Mission, Methodology & Privacy Constitution' : 'ಧ್ಯೇಯ, ಕಾರ್ಯವಿಧಾನ ಮತ್ತು ಗೌಪ್ಯತಾ ಸಂವಿಧಾನ'}
        </h1>
        <p className="text-xs md:text-sm text-slate-300 max-w-2xl leading-relaxed">
          {isEn
            ? 'LifeBridge was founded on a simple principle: every citizen deserves transparent, direct access to public welfare schemes without paying bribes or intermediaries.'
            : 'ಲೈಫ್‌ಬ್ರಿಡ್ಜ್‌ನ ಮುಖ್ಯ ಗುರಿ: ಪ್ರತಿಯೊಬ್ಬ ನಾಗರಿಕನಿಗೂ ಯಾವುದೇ ಮಧ್ಯವರ್ತಿಗಳಿಲ್ಲದೆ ಸರ್ಕಾರದ ಸವಲತ್ತುಗಳು ನೇರವಾಗಿ ತಲುಪಬೇಕು.'}
        </p>
      </div>

      {/* 5-Step Visual Philosophy */}
      <div className="p-6 rounded-2xl bg-[#0F1E36] border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-[#42DCC5] uppercase tracking-wider">
          {isEn ? 'The 5-Step Citizen Journey' : 'ನಾಗರಿಕ ಪಯಣದ ೫ ಹಂತಗಳು'}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-[#0B1526] border border-slate-800 space-y-1">
            <span className="text-[#42DCC5] font-mono font-bold">1. Discover</span>
            <p className="text-white font-medium">{isEn ? 'Uncover Schemes' : 'ಯೋಜನೆ ಹುಡುಕಿ'}</p>
            <p className="text-[11px] text-slate-400">{isEn ? 'Explore programs suited to your background' : 'ನಿಮ್ಮ ಅಗತ್ಯಕ್ಕೆ ತಕ್ಕ ಯೋಜನೆ ನೋಡಿ'}</p>
          </div>
          <div className="p-3 rounded-xl bg-[#0B1526] border border-slate-800 space-y-1">
            <span className="text-blue-400 font-mono font-bold">2. Check</span>
            <p className="text-white font-medium">{isEn ? 'Verify Criteria' : 'ಅರ್ಹತೆ ಪರೀಕ್ಷಿಸಿ'}</p>
            <p className="text-[11px] text-slate-400">{isEn ? 'Rule-based matching against official gazettes' : 'ಅಧಿಕೃತ ನಿಯಮಗಳೊಂದಿಗೆ ಪರಿಶೀಲನೆ'}</p>
          </div>
          <div className="p-3 rounded-xl bg-[#0B1526] border border-slate-800 space-y-1">
            <span className="text-purple-400 font-mono font-bold">3. Understand</span>
            <p className="text-white font-medium">{isEn ? 'Plain Language' : 'ಸರಳ ವಿವರಣೆ'}</p>
            <p className="text-[11px] text-slate-400">{isEn ? 'Bilingual explanations without bureaucratic jargon' : 'ಕನ್ನಡ ಹಾಗೂ ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಸರಳ ವಿವರ'}</p>
          </div>
          <div className="p-3 rounded-xl bg-[#0B1526] border border-slate-800 space-y-1">
            <span className="text-amber-400 font-mono font-bold">4. Prepare</span>
            <p className="text-white font-medium">{isEn ? 'Document Checklist' : 'ದಾಖಲೆ ಸಿದ್ಧತೆ'}</p>
            <p className="text-[11px] text-slate-400">{isEn ? 'Check off required papers in Support Wallet' : 'ಅಗತ್ಯ ದಾಖಲೆಗಳನ್ನು ಪಟ್ಟಿಮಾಡಿ'}</p>
          </div>
          <div className="p-3 rounded-xl bg-[#0B1526] border border-slate-800 space-y-1">
            <span className="text-emerald-400 font-mono font-bold">5. Apply</span>
            <p className="text-white font-medium">{isEn ? 'Official Portal' : 'ಅಧಿಕೃತ ಅರ್ಜಿ'}</p>
            <p className="text-[11px] text-slate-400">{isEn ? 'Direct links to Seva Sindhu, Ahara & SSP' : 'ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ನೇರ ಅರ್ಜಿ'}</p>
          </div>
        </div>
      </div>

      {/* Core Principles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-[#0F1E36] border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">
            {isEn ? 'Independent & Non-Governmental' : 'ಸ್ವತಂತ್ರ ಸಾರ್ವಜನಿಕ ಉಪಕ್ರಮ'}
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            {isEn
              ? 'LifeBridge is an independent public interest platform. We are not a government agency and cannot approve applications or grant funds. All benefits are determined and disbursed strictly by authorized government departments.'
              : 'ಲೈಫ್‌ಬ್ರಿಡ್ಜ್ ಒಂದು ಸ್ವತಂತ್ರ ನಾಗರಿಕ ವೇದಿಕೆಯಾಗಿದ್ದು, ಯಾವುದೇ ಸರ್ಕಾರಿ ಸೌಲಭ್ಯಗಳನ್ನು ಮಂಜೂರು ಮಾಡುವ ಅಧಿಕಾರ ಹೊಂದಿಲ್ಲ. ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಇಲಾಖೆಗಳಿಗೆ ಮಾತ್ರ ಅಂತಿಮ ಅನುಮೋದನೆಯ ಹಕ್ಕಿದೆ.'}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0F1E36] border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <Lock className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">
            {isEn ? 'Zero Data Harvesting Constitution' : 'ಶೂನ್ಯ ಮಾಹಿತಿ ಸಂಗ್ರಹಣೆ ನಿಯಮ'}
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            {isEn
              ? 'We never ask for Aadhaar numbers, OTPs, phone logins, or passwords. Your profile responses and saved wallet items stay strictly inside your device’s browser storage (localStorage) and never touch an external database.'
              : 'ನಾವು ಎಂದಿಗೂ ಆಧಾರ್ ಸಂಖ್ಯೆ, ಒಟಿಪಿ ಅಥವಾ ಪಾಸ್‌ವರ್ಡ್ ಕೇಳುವುದಿಲ್ಲ. ನಿಮ್ಮ ಎಲ್ಲಾ ವಿವರಗಳು ನಿಮ್ಮ ಮೊಬೈಲ್ ಅಥವಾ ಕಂಪ್ಯೂಟರ್‌ನಲ್ಲಿ ಮಾತ್ರ ಉಳಿಯುತ್ತವೆ.'}
          </p>
        </div>
      </div>

      {/* What LifeBridge CAN and CANNOT Do */}
      <div className="p-6 rounded-2xl bg-[#0F1E36] border border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-white">
          {isEn ? 'Clear Operational Boundaries' : 'ಸ್ಪಷ್ಟ ಕಾರ್ಯವ್ಯಾಪ್ತಿ'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
            <h4 className="font-bold text-emerald-300">
              {isEn ? 'What LifeBridge DOES:' : 'ಲೈಫ್‌ಬ್ರಿಡ್ಜ್ ಏನು ಮಾಡುತ್ತದೆ:'}
            </h4>
            <ul className="space-y-1.5 text-slate-300 pl-4 list-disc">
              <li>{isEn ? 'Aggregate and verify eligibility criteria from official government gazettes' : 'ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಸುತ್ತೋಲೆಗಳ ಮಾನದಂಡಗಳನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ'}</li>
              <li>{isEn ? 'Provide step-by-step instructions for completing applications without brokers' : 'ಮಧ್ಯವರ್ತಿಗಳಿಲ್ಲದೆ ಸ್ವತಃ ಅರ್ಜಿ ಸಲ್ಲಿಸಲು ಹಂತ-ಹಂತದ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತದೆ'}</li>
              <li>{isEn ? 'Direct citizens directly to authentic government websites (.gov.in / .karnataka.gov.in)' : 'ಅಧಿಕೃತ ಸರ್ಕಾರಿ ವೆಬ್‌ಸೈಟ್‌ಗಳಿಗೆ ನೇರ ಲಿಂಕ್ ಒದಗಿಸುತ್ತದೆ'}</li>
              <li>{isEn ? 'Help locate nearby public facilities (hospitals, schools, ration shops)' : 'ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಗಳು ಮತ್ತು ರೇಷನ್ ಅಂಗಡಿಗಳ ವಿಳಾಸ ತೋರಿಸುತ್ತದೆ'}</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-2">
            <h4 className="font-bold text-rose-300">
              {isEn ? 'What LifeBridge CANNOT do:' : 'ಲೈಫ್‌ಬ್ರಿಡ್ಜ್ ಏನು ಮಾಡುವುದಿಲ್ಲ:'}
            </h4>
            <ul className="space-y-1.5 text-slate-300 pl-4 list-disc">
              <li>{isEn ? 'Cannot officially approve or sanction any scheme application' : 'ಯಾವುದೇ ಅರ್ಜಿಯನ್ನು ಅಧಿಕೃತವಾಗಿ ಮಂಜೂರು ಮಾಡುವುದಿಲ್ಲ'}</li>
              <li>{isEn ? 'Cannot disburse funds or cash transfers' : 'ಯಾವುದೇ ನಗದು ಅಥವಾ ಹಣಕಾಸು ವರ್ಗಾವಣೆ ಮಾಡುವುದಿಲ್ಲ'}</li>
              <li>{isEn ? 'Cannot act as an intermediary or fee-charging representative' : 'ಯಾವುದೇ ಶುಲ್ಕ ಪಡೆಯುವ ಮಧ್ಯವರ್ತಿಯಾಗಿ ಕೆಲಸ ಮಾಡುವುದಿಲ್ಲ'}</li>
              <li>{isEn ? 'Cannot override government department rules or deadlines' : 'ಸರ್ಕಾರಿ ನಿಯಮಗಳು ಅಥವಾ ದಿನಾಂಕಗಳನ್ನು ಬದಲಾಯಿಸಲಾಗುವುದಿಲ್ಲ'}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
