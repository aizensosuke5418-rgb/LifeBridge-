import React from 'react';
import { Shield, Lock, ExternalLink, Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BridgeLogo } from './BridgeLogo';

export const Footer: React.FC = () => {
  const { language, setCurrentView, t } = useApp();
  const isEn = language === 'en';

  return (
    <footer className="w-full bg-[#070D18] border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <BridgeLogo size="md" />
              <span className="text-lg font-bold text-white tracking-tight">{t.brandName}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {t.footerMission}
            </p>
            <div className="flex flex-col gap-2 pt-2 text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <Shield className="w-3.5 h-3.5 shrink-0" />
                <span>{isEn ? 'Independent civic navigation · No political/commercial affiliation' : 'ಸ್ವತಂತ್ರ ಸಾರ್ವಜನಿಕ ಮಾರ್ಗದರ್ಶನ · ವಾಣಿಜ್ಯೇತರ'}</span>
              </div>
              <div className="flex items-center gap-1.5 text-blue-400">
                <Lock className="w-3.5 h-3.5 shrink-0" />
                <span>{isEn ? 'Local storage only · Zero identity documents uploaded' : 'ಬ್ರೌಸರ್ ಸಂಗ್ರಹಣೆ ಮಾತ್ರ · ಯಾವುದೇ ದಾಖಲೆ ಅಪ್‌ಲೋಡ್ ಇಲ್ಲ'}</span>
              </div>
            </div>
          </div>

          {/* Core Services & Specialized Portals */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              {isEn ? 'Citizen Welfare' : 'ಕಲ್ಯಾಣ ವಿಭಾಗಗಳು'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => setCurrentView('skill_training')}
                  className="hover:text-[#42DCC5] transition-colors cursor-pointer text-left"
                >
                  {isEn ? 'Skill Training & Courses' : 'ಕೌಶಲ್ಯ ತರಬೇತಿ & ಕೋರ್ಸ್‌ಗಳು'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('widow_pension')}
                  className="hover:text-[#42DCC5] transition-colors cursor-pointer text-left"
                >
                  {isEn ? 'Widow Pension & Welfare' : 'ವಿಧವಾ ವೇತನ ಪಿಂಚಣಿ'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('cyber_police_helplines')}
                  className="hover:text-red-400 transition-colors cursor-pointer text-left"
                >
                  {isEn ? 'Cybercrime & Police 1930/112' : 'ಸೈಬರ್ ಕ್ರೈಂ & ಪೊಲೀಸ್ ೧೯೩೦'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('sc_st_obc_welfare')}
                  className="hover:text-[#42DCC5] transition-colors cursor-pointer text-left"
                >
                  {isEn ? 'SC / ST / OBC Welfare & Caste' : 'ಎಸ್‌ಸಿ/ಎಸ್‌ಟಿ/ಒಬಿಸಿ ಕಲ್ಯಾಣ'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('public_money_accountability')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  {isEn ? 'Public Money & Audit Watch' : 'ಸರ್ಕಾರಿ ಹಣ & ಆಡಿಟ್ ವಾಚ್'}
                </button>
              </li>
            </ul>
          </div>

          {/* Discovery Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              {isEn ? 'Discovery Tools' : 'ಉಪಕರಣಗಳು'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => setCurrentView('dashboard')}
                  className="hover:text-[#42DCC5] transition-colors cursor-pointer text-left"
                >
                  {isEn ? 'Find My Schemes' : 'ನನ್ನ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('healthcare')}
                  className="hover:text-[#42DCC5] transition-colors cursor-pointer text-left"
                >
                  {isEn ? 'Healthcare & PM-JAY' : 'ಆರೋಗ್ಯ ಮತ್ತು ಪಿಎಂ-ಜೆಎವೈ'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('food_ration')}
                  className="hover:text-[#42DCC5] transition-colors cursor-pointer text-left"
                >
                  {isEn ? 'Food & Ration Services' : 'ಆಹಾರ ಮತ್ತು ರೇಷನ್ ಸೇವೆಗಳು'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('lifemap')}
                  className="hover:text-[#42DCC5] transition-colors cursor-pointer text-left"
                >
                  {isEn ? 'Life Map & Radar' : 'ಲೈಫ್ ಮ್ಯಾಪ್ & ರೇಡಾರ್'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('wallet')}
                  className="hover:text-[#42DCC5] transition-colors cursor-pointer text-left"
                >
                  {isEn ? 'My Support Wallet' : 'ನನ್ನ ನೆರವಿನ ವಾಲೆಟ್'}
                </button>
              </li>
            </ul>
          </div>

          {/* Official Gateways */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              {isEn ? 'Official Gateways' : 'ಅಧಿಕೃತ ಪೋರ್ಟಲ್‌ಗಳು'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://sevasindhugs.karnataka.gov.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-[#42DCC5] transition-colors"
                >
                  <span>Seva Sindhu GS</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://ahara.karnataka.gov.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-[#42DCC5] transition-colors"
                >
                  <span>Ahara Karnataka</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://ssp.postmatric.karnataka.gov.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-[#42DCC5] transition-colors"
                >
                  <span>SSP Karnataka</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.myscheme.gov.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-[#42DCC5] transition-colors"
                >
                  <span>myScheme India</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            {isEn
              ? '© 2026 LifeBridge. Independent civic platform built for public good. Not an official government body.'
              : '© ೨೦೨೬ ಲೈಫ್‌ಬ್ರಿಡ್ಜ್. ಸಾರ್ವಜನಿಕ ಹಿತಾಸಕ್ತಿಯ ಸ್ವತಂತ್ರ ವೇದಿಕೆ. ಯಾವುದೇ ಸರ್ಕಾರಿ ಅಂಗವಲ್ಲ.'}
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentView('about')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              {isEn ? 'Methodology & Data Verification' : 'ಕಾರ್ಯವಿಧಾನ & ದೃಢೀಕರಣ'}
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setCurrentView('about')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              {isEn ? 'Privacy Principles' : 'ಗೌಪ್ಯತೆ ನಿಯಮಗಳು'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
