import React, { useState } from 'react';
import { Menu, X, Globe, Sparkles, Bookmark, Compass, Share2, Check, Award } from 'lucide-react';
import { useApp, ViewType } from '../context/AppContext';
import { BridgeLogo } from './BridgeLogo';

export const Header: React.FC = () => {
  const { language, toggleLanguage, currentView, setCurrentView, t, loadDemoProfile, wallet } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const isEn = language === 'en';

  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareData = {
      title: "LifeBridge — India's Unified Government Schemes & Benefits",
      text: "Discover verified central & state government schemes, scholarships, rations, healthcare, and emergency helplines on LifeBridge:",
      url: shareUrl
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (e) {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      // Fallback prompt
    }
  };

  const handleNavClick = (view: ViewType) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { view: ViewType; labelEn: string; labelKn: string }[] = [
    { view: 'home', labelEn: 'Home', labelKn: 'ಮುಖಪುಟ' },
    { view: 'dashboard', labelEn: 'Find Schemes', labelKn: 'ಯೋಜನೆ ಹುಡುಕಿ' },
    { view: 'categories', labelEn: 'Categories', labelKn: 'ವಿಭಾಗವಾರು' },
    { view: 'explore_schemes', labelEn: 'All Schemes', labelKn: 'ಎಲ್ಲಾ ಯೋಜನೆಗಳು' },
    { view: 'presentation', labelEn: 'Project Guide & Team', labelKn: 'ಪ್ರಾಜೆಕ್ಟ್ ಪ್ರಸ್ತುತಿ' },
    { view: 'guides', labelEn: 'Application Guides', labelKn: 'ಮಾರ್ಗದರ್ಶಿ' },
    { view: 'maps', labelEn: 'Public Maps', labelKn: 'ಸೇವಾ ನಕ್ಷೆ' },
    { view: 'wallet', labelEn: 'My Wallet', labelKn: 'ವಾಲೆಟ್' }
  ];

  const fullNavItems: { view: ViewType; labelEn: string; labelKn: string; badge?: string }[] = [
    { view: 'presentation', labelEn: '⭐ 0. Project Defense & Sector Guide (Raj, Kushi, Saubhiya | Arfa Jasmine, Akshaya)', labelKn: '⭐ ೦. ಪ್ರಾಜೆಕ್ಟ್ ಪ್ರಸ್ತುತಿ & ಸಮಗ್ರ ವಿವರಣೆ', badge: 'Defense' },
    { view: 'home', labelEn: '1. Home', labelKn: '೧. ಮುಖಪುಟ' },
    { view: 'dashboard', labelEn: '2. Find My Schemes (Questionnaire)', labelKn: '೨. ನನ್ನ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ (ಪ್ರಶ್ನಾವಳಿ)' },
    { view: 'categories', labelEn: '3. Schemes by Category (Sector Breakdown)', labelKn: '೩. ವಿಭಾಗವಾರು ಯೋಜನೆಗಳು' },
    { view: 'explore_schemes', labelEn: '4. Explore All Schemes (Catalog)', labelKn: '೪. ಎಲ್ಲಾ ಯೋಜನೆಗಳು (ಪಟ್ಟಿ)' },
    { view: 'compare', labelEn: '5. Compare Schemes Tool', labelKn: '೫. ಯೋಜನೆಗಳ ಹೋಲಿಕೆ ಉಪಕರಣ' },
    { view: 'guides', labelEn: '6. Application Guides (Step-by-Step)', labelKn: '೬. ಅರ್ಜಿ ಮಾರ್ಗದರ್ಶಿಗಳು' },
    { view: 'skill_training', labelEn: '7. Skill Training & Vocational Courses', labelKn: '೭. ಉಚಿತ ಕೌಶಲ್ಯ ತರಬೇತಿ & ಐಟಿಐ' },
    { view: 'widow_pension', labelEn: '8. Widow Pension Schemes & Welfare', labelKn: '೮. ವಿಧವಾ ವೇತನ ಪಿಂಚಣಿ' },
    { view: 'cyber_police_helplines', labelEn: '9. Cybercrime & Emergency Helplines (1930 / 112)', labelKn: '೯. ಸೈಬರ್ ಕ್ರೈಂ & ಪೊಲೀಸ್ ೧೯೩೦/೧೧೨' },
    { view: 'sc_st_obc_welfare', labelEn: '10. SC / ST / OBC Welfare Schemes & Caste Guide', labelKn: '೧೦. ಎಸ್‌ಸಿ/ಎಸ್‌ಟಿ/ಒಬಿಸಿ ಕಲ್ಯಾಣ & ಜಾತಿ ಮಾರ್ಗದರ್ಶಿ' },
    { view: 'public_money_accountability', labelEn: '11. Government Money & Dark Side (Audits & RTI)', labelKn: '೧೧. ಸರ್ಕಾರಿ ಹಣ & ಆಡಿಟ್ ವಿಶ್ಲೇಷಣೆ' },
    { view: 'healthcare', labelEn: '12. Healthcare & PM-JAY', labelKn: '೧೨. ಆರೋಗ್ಯ ಮತ್ತು ಪಿಎಂ-ಜೆಎವೈ' },
    { view: 'food_ration', labelEn: '13. Food & Ration Services (Anna Bhagya)', labelKn: '೧೩. ಆಹಾರ ಮತ್ತು ರೇಷನ್ ಸೇವೆಗಳು' },
    { view: 'education', labelEn: '14. Education & Scholarships (SSP)', labelKn: '೧೪. ಶಿಕ್ಷಣ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿವೇತನ' },
    { view: 'maps', labelEn: '15. Public-Service Maps (OpenStreetMap)', labelKn: '೧೫. ಸಾರ್ವಜನಿಕ ಸೇವಾ ನಕ್ಷೆ' },
    { view: 'lifemap', labelEn: '16. Life Map & Opportunity Radar', labelKn: '೧೬. ಲೈಫ್ ಮ್ಯಾಪ್ & ರೇಡಾರ್' },
    { view: 'ask_lifebridge', labelEn: '17. Ask LifeBridge (Guided Assistant)', labelKn: '೧೭. ಲೈಫ್‌ಬ್ರಿಡ್ಜ್ ಕೇಳಿ' },
    { view: 'wallet', labelEn: '18. My Support Wallet', labelKn: '೧೮. ನನ್ನ ನೆರವಿನ ವಾಲೆಟ್', badge: String(wallet.savedSchemeIds.length + wallet.savedFacilityIds.length) },
    { view: 'portals', labelEn: '19. Official Government Portals', labelKn: '೧೯. ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್‌ಗಳು' },
    { view: 'about', labelEn: '20. About LifeBridge', labelKn: '೨೦. ಲೈಫ್‌ಬ್ರಿಡ್ಜ್ ಬಗ್ಗೆ' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0B1220]/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single element) */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left shrink-0 cursor-pointer group"
          aria-label="LifeBridge Home"
        >
          <BridgeLogo size="md" />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#42DCC5] transition-colors whitespace-nowrap">
              {t.brandName}
            </span>
          </div>
        </button>

        {/* Zone 2: 4-5 Concise Single-line Nav Links (Desktop) */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navItems.map((item) => {
            const isActive = currentView === item.view;
            return (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer ${
                  isActive
                    ? 'text-[#42DCC5] font-semibold border-b-2 border-[#42DCC5]'
                    : 'hover:text-white'
                }`}
              >
                {isEn ? item.labelEn : item.labelKn}
                {item.view === 'wallet' && (wallet.savedSchemeIds.length > 0 || wallet.savedFacilityIds.length > 0) && (
                  <span className="ml-1.5 px-1.5 py-0.2 text-[10px] bg-blue-600 text-white rounded-full">
                    {wallet.savedSchemeIds.length + wallet.savedFacilityIds.length}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions (Language switch + Demo trigger + Primary CTA) */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            title="Switch Language / ಭಾಷೆ ಬದಲಾಯಿಸಿ"
            aria-label="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-[#42DCC5]" />
            <span className={language === 'kn' ? 'font-kannada font-bold' : ''}>
              {t.switchLanguage}
            </span>
          </button>

          {/* Explore Demo Profile (Quick Testing for user) */}
          <button
            onClick={loadDemoProfile}
            className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            title={isEn ? 'Load sample student profile to test matching' : 'ಪರೀಕ್ಷಿಸಲು ಮಾದರಿ ಪ್ರೊಫೈಲ್ ಲೋಡ್ ಮಾಡಿ'}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.exploreDemo}</span>
          </button>

          {/* Share App Button */}
          <button
            onClick={handleShare}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer whitespace-nowrap ${
              copied
                ? 'bg-emerald-600/30 border-emerald-500 text-emerald-300'
                : 'text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 hover:text-white'
            }`}
            title={isEn ? 'Share link with friends, family, or WhatsApp' : 'ಸ್ನೇಹಿತರು ಅಥವಾ ವಾಟ್ಸಾಪ್ ಜೊತೆ ಲಿಂಕ್ ಹಂಚಿಕೊಳ್ಳಿ'}
            aria-label="Share App"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-bold">{isEn ? 'Copied!' : 'ನಕಲಿಸಲಾಗಿದೆ!'}</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-[#42DCC5]" />
                <span className="hidden sm:inline">{isEn ? 'Share' : 'ಹಂಚಿಕೊಳ್ಳಿ'}</span>
              </>
            )}
          </button>

          {/* Primary Action Button */}
          <button
            onClick={() => handleNavClick('dashboard')}
            className="px-3.5 py-2 text-xs md:text-sm font-semibold text-white bg-[#3678F6] hover:bg-blue-600 active:scale-95 rounded-lg shadow-sm transition-all whitespace-nowrap cursor-pointer"
          >
            {t.findMySchemes}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Full Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0B1220] border-b border-slate-800 px-4 py-4 max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs text-slate-400">
            <span>{isEn ? 'Directory & Navigation' : 'ನೇವಿಗೇಷನ್ ಮೆನು'}</span>
            <button
              onClick={loadDemoProfile}
              className="text-[#42DCC5] font-semibold flex items-center gap-1 hover:underline cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              {t.exploreDemo}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {fullNavItems.map((item) => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.view}
                  onClick={() => handleNavClick(item.view)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-xs md:text-sm font-medium transition-colors flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-blue-600/20 text-[#42DCC5] border border-blue-500/30'
                      : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                  }`}
                >
                  <span className="truncate">{isEn ? item.labelEn : item.labelKn}</span>
                  {item.badge && parseInt(item.badge) > 0 && (
                    <span className="px-2 py-0.5 text-[10px] bg-blue-600 text-white rounded-full font-mono">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
            <button
              onClick={handleShare}
              className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg border flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                copied
                  ? 'bg-emerald-600/30 border-emerald-500 text-emerald-300'
                  : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-white'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isEn ? 'Link Copied!' : 'ಲಿಂಕ್ ನಕಲಿಸಲಾಗಿದೆ!'}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#42DCC5]" />
                  <span>{isEn ? 'Share App with Friends' : 'ಸ್ನೇಹಿತರೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಿ'}</span>
                </>
              )}
            </button>

            <button
              onClick={toggleLanguage}
              className="py-2 px-3 text-xs font-semibold bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-[#42DCC5] flex items-center gap-1 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{t.switchLanguage}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
