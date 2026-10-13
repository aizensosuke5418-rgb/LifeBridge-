import React, { useState } from 'react';
import { AlertCircle, ChevronDown, ChevronUp, Lock } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const DisclaimerBanner: React.FC = () => {
  const { language, t } = useApp();
  const [expanded, setExpanded] = useState(false);
  const isEn = language === 'en';

  return (
    <div className="w-full bg-[#0F1E38] border-b border-blue-900/40 text-xs text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="font-medium text-slate-200">
            {t.disclaimerShort}
          </span>
          <span className="hidden lg:inline text-slate-400">
            · {isEn ? 'Official government authorities reserve sole approval authority.' : 'ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಇಲಾಖೆಗಳಿಗೆ ಮಾತ್ರ ಅಂತಿಮ ಅನುಮೋದನೆಯ ಹಕ್ಕಿದೆ.'}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-[11px] text-emerald-400">
            <Lock className="w-3 h-3" />
            <span>{isEn ? 'No Aadhaar or OTP ever requested' : 'ಆಧಾರ್ ಅಥವಾ ಒಟಿಪಿ ಕೇಳಲಾಗುವುದಿಲ್ಲ'}</span>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[11px] text-blue-400 hover:text-blue-300 flex items-center gap-1 font-medium transition-colors cursor-pointer"
            aria-expanded={expanded}
          >
            {expanded ? (isEn ? 'Less info' : 'ಸಂಕ್ಷಿಪ್ತ') : (isEn ? 'Read full notice' : 'ಪೂರ್ಣ ಸೂಚನೆ')}
            {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>
      </div>

      {expanded && (
        <div className="bg-[#0A1424] border-t border-slate-800 px-4 py-3 text-slate-400 text-xs">
          <div className="max-w-7xl mx-auto space-y-1.5 leading-relaxed">
            <p className="text-slate-200 font-medium">{t.disclaimerFull}</p>
            <p>
              {isEn
                ? 'All official portals and application links provided redirect directly to government portals (e.g. sevasindhu.karnataka.gov.in, ahara.karnataka.gov.in, scholarships.gov.in). LifeBridge does not act as an agent, broker, or financial processor.'
                : 'ಇಲ್ಲಿ ನೀಡಲಾಗಿರುವ ಎಲ್ಲಾ ಅಧಿಕೃತ ಲಿಂಕ್‌ಗಳು ಸರ್ಕಾರಿ ವೆಬ್‌ಸೈಟ್‌ಗಳಿಗೆ ಮಾತ್ರ ನೇರವಾಗಿ ಕರೆದೊಯ್ಯುತ್ತವೆ. ಲೈಫ್‌ಬ್ರಿಡ್ಜ್ ಯಾವುದೇ ಮಧ್ಯವರ್ತಿ ಅಥವಾ ಏಜೆಂಟ್ ಆಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುವುದಿಲ್ಲ.'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
