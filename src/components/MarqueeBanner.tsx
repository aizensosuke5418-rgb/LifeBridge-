import React from 'react';
import { useApp } from '../context/AppContext';

export const MarqueeBanner: React.FC = () => {
  const { language } = useApp();
  const isEn = language === 'en';

  const phrasesEn = [
    'Discover support. Unlock opportunity.',
    'Healthcare · Education · Food Security',
    'Your next step starts here.',
    'Direct citizen navigation across Karnataka & India',
    'Zero intermediaries · 100% Client-side privacy'
  ];

  const phrasesKn = [
    'ಬೆಂಬಲವನ್ನು ಕಂಡುಕೊಳ್ಳಿ. ಅವಕಾಶಗಳನ್ನು ತೆರೆಯಿರಿ.',
    'ಆರೋಗ್ಯ · ಶಿಕ್ಷಣ · ಆಹಾರ ಭದ್ರತೆ',
    'ನಿಮ್ಮ ಮುಂದಿನ ಹೆಜ್ಜೆ ಇಲ್ಲಿಂದ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ.',
    'ಕರ್ನಾಟಕ ಮತ್ತು ಭಾರತದ ನೇರ ನಾಗರಿಕ ಮಾರ್ಗದರ್ಶನ',
    'ಮಧ್ಯವರ್ತಿಗಳಿಲ್ಲ · ೧೦೦% ಬ್ರೌಸರ್ ಗೌಪ್ಯತೆ'
  ];

  const phrases = isEn ? phrasesEn : phrasesKn;

  return (
    <div
      className="w-full bg-[#070D18] border-y border-slate-800/80 py-2.5 overflow-hidden select-none"
      aria-label="Civic Announcement Marquee"
    >
      <div className="animate-marquee-rtl flex items-center whitespace-nowrap">
        {/* Sequence 1 */}
        <div className="flex items-center gap-10 shrink-0 pr-10">
          {phrases.map((phrase, idx) => (
            <div key={`s1-${idx}`} className="flex items-center gap-4 text-xs font-medium text-slate-300">
              <span className="text-[#42DCC5]">◆</span>
              <span className="tracking-wide">{phrase}</span>
            </div>
          ))}
        </div>
        {/* Sequence 2 for continuous loop */}
        <div className="flex items-center gap-10 shrink-0 pr-10" aria-hidden="true">
          {phrases.map((phrase, idx) => (
            <div key={`s2-${idx}`} className="flex items-center gap-4 text-xs font-medium text-slate-300">
              <span className="text-[#3678F6]">◆</span>
              <span className="tracking-wide">{phrase}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
