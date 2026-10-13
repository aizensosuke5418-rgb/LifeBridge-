import React from 'react';
import { Sparkles, ArrowRight, Shield, Lock, Compass, MapPin, HeartPulse, Utensils, GraduationCap, Users, UserCheck, Briefcase, ChevronRight, CheckCircle2, Heart, ShieldCheck, BarChart3 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AnimatedBridgeVisual } from '../AnimatedBridgeVisual';
import { MarqueeBanner } from '../MarqueeBanner';

export const HomeView: React.FC = () => {
  const { language, setCurrentView, loadDemoProfile, t } = useApp();
  const isEn = language === 'en';

  const audienceCards = [
    {
      titleEn: 'Students & Youth',
      titleKn: 'ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಯುವಜನತೆ',
      descEn: 'State SSP scholarships, NSP, fee concessions, hostel stipends, and vocational ITI training.',
      descKn: 'ಎಸ್‌ಎಸ್‌ಪಿ ವಿದ್ಯಾರ್ಥಿವೇತನ, ಎನ್‌ಎಸ್‌ಪಿ, ಶುಲ್ಕ ವಿನಾಯಿತಿ, ಹಾಸ್ಟೆಲ್ ಭತ್ಯೆ ಮತ್ತು ಐಟಿಐ ತರಬೇತಿ.',
      icon: GraduationCap,
      actionView: 'education' as const,
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/30'
    },
    {
      titleEn: 'Families & Food Security',
      titleKn: 'ಕುಟುಂಬಗಳು & ಆಹಾರ ಭದ್ರತೆ',
      descEn: 'Anna Bhagya free grains, cash DBT transfer, BPL/AAY ration cards, and local fair-price shops.',
      descKn: 'ಅನ್ನಭಾಗ್ಯ ಉಚಿತ ಅಕ್ಕಿ, ನಗದು ಡಿಬಿಟಿ, ಬಿಪಿಎಲ್ ಪಡಿತರ ಚೀಟಿ ಮತ್ತು ನ್ಯಾಯಬೆಲೆ ಅಂಗಡಿಗಳು.',
      icon: Utensils,
      actionView: 'food_ration' as const,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/30'
    },
    {
      titleEn: 'Healthcare Seekers',
      titleKn: 'ಆರೋಗ್ಯ ನೆರವು ಬಯಸುವವರು',
      descEn: 'Ayushman Bharat PM-JAY ₹5L cashless care, Arogya Karnataka, and local Namma Clinics.',
      descKn: 'ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ₹5 ಲಕ್ಷ ನಗದು ರಹಿತ ಚಿಕಿತ್ಸೆ, ಆರೋಗ್ಯ ಕರ್ನಾಟಕ ಮತ್ತು ನಮ್ಮ ಕ್ಲಿನಿಕ್.',
      icon: HeartPulse,
      actionView: 'healthcare' as const,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
    },
    {
      titleEn: 'Women & Mothers',
      titleKn: 'ಮಹಿಳೆಯರು & ತಾಯಂದಿರು',
      descEn: 'Gruha Lakshmi ₹2,000 monthly DBT, Shakti free bus travel, and PMMVY maternity allowances.',
      descKn: 'ಗೃಹಲಕ್ಷ್ಮಿ ₹2,000 ಮಾಸಿಕ ಡಿಬಿಟಿ, ಶಕ್ತಿ ಉಚಿತ ಬಸ್ ಪ್ರಯಾಣ ಮತ್ತು ಮಾತೃ ವಂದನಾ ಹೆರಿಗೆ ನೆರವು.',
      icon: Users,
      actionView: 'dashboard' as const,
      color: 'text-rose-400 bg-rose-500/10 border-rose-500/30'
    },
    {
      titleEn: 'Senior Citizens',
      titleKn: 'ಹಿರಿಯ ನಾಗರಿಕರು',
      descEn: 'Sandhya Suraksha monthly pension ₹1,200, transport concessions, and geriatric care.',
      descKn: 'ಸಂಧ್ಯಾ ಸುರಕ್ಷಾ ಮಾಸಿಕ ₹1,200 ವೃದ್ಧಾಪ್ಯ ಪಿಂಚಣಿ ಮತ್ತು ಹಿರಿಯ ನಾಗರಿಕರ ಸಾರಿಗೆ ರಿಯಾಯಿತಿ.',
      icon: UserCheck,
      actionView: 'dashboard' as const,
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/30'
    },
    {
      titleEn: 'Job Seekers & Artisans',
      titleKn: 'ಉದ್ಯೋಗಾಕಾಂಕ್ಷಿಗಳು & ಕುಶಲಕರ್ಮಿಗಳು',
      descEn: 'Yuva Nidhi unemployment allowance (₹3,000/mo), PM SVANidhi loans, and PM Vishwakarma aid.',
      descKn: 'ಯುವನಿಧಿ ಮಾಸಿಕ ₹3,000 ಭತ್ಯೆ, ಪಿಎಂ ಸ್ವನಿಧಿ ಸಾಲ ಮತ್ತು ಪಿಎಂ ವಿಶ್ವಕರ್ಮ ಉಪಕರಣ ನೆರವು.',
      icon: Briefcase,
      actionView: 'dashboard' as const,
      color: 'text-teal-400 bg-teal-500/10 border-teal-500/30'
    }
  ];

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 lg:pt-14 pb-12 px-4 lg:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Hero Copy (Left Column) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-semibold text-[#42DCC5]">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.tagline}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              {t.heroHeadline}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {t.heroSubheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => setCurrentView('dashboard')}
                className="px-5 py-3 text-sm font-semibold text-white bg-[#3678F6] hover:bg-blue-600 active:scale-95 rounded-xl shadow-lg shadow-blue-500/20 flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>{t.findMySchemes}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={loadDemoProfile}
                className="px-4 py-3 text-sm font-medium text-slate-200 hover:text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{t.exploreDemo}</span>
              </button>

              <button
                onClick={() => setCurrentView('explore_schemes')}
                className="px-4 py-3 text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                {t.exploreAllSchemes} →
              </button>
            </div>

            {/* Trust Markers */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{isEn ? 'Rule-Based Matching (No AI Guesswork)' : 'ನಿಖರ ನಿಯಮ-ಆಧಾರಿತ ಹೊಂದಾಣಿಕೆ'}</span>
              </div>
              <div className="flex items-center gap-1.5 text-blue-400">
                <Lock className="w-3.5 h-3.5" />
                <span>{isEn ? 'No Aadhaar / OTP Required' : 'ಆಧಾರ್ ಅಥವಾ ಒಟಿಪಿ ಅಗತ್ಯವಿಲ್ಲ'}</span>
              </div>
              <div className="flex items-center gap-1.5 text-purple-400">
                <Shield className="w-3.5 h-3.5" />
                <span>{isEn ? 'Direct Official Portal Links' : 'ನೇರ ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಲಿಂಕ್‌ಗಳು'}</span>
              </div>
            </div>
          </div>

          {/* Hero Image (Right Column) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#0E1B31] aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[420px]">
              <img
                src="/src/assets/images/hero_lifebridge_civic_1791898749499.jpg"
                alt="LifeBridge digital public infrastructure spanning healthcare, education, and social welfare"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0B1220]/80 backdrop-blur-md border border-slate-700 text-xs text-slate-200">
                <p className="font-semibold text-white">
                  {isEn ? 'Unified Civic Navigator · Karnataka & Pan-India' : 'ಏಕೀಕೃತ ನಾಗರಿಕ ವೇದಿಕೆ · ಕರ್ನಾಟಕ & ಭಾರತ'}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {isEn
                    ? 'Start with Bengaluru & Karnataka schemes. Discover verified central entitlements.'
                    : 'ಬೆಂಗಳೂರು ಮತ್ತು ಕರ್ನಾಟಕದ ಯೋಜನೆಗಳೊಂದಿಗೆ ಪ್ರಾರಂಭಿಸಿ. ಕೇಂದ್ರದ ಸವಲತ್ತುಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RTL Marquee Banner */}
      <MarqueeBanner />

      {/* Custom Animated Bridge Connecting 3 Pillars */}
      <section className="max-w-7xl mx-auto px-4 lg:px-6">
        <AnimatedBridgeVisual />
      </section>

      {/* Target Audiences Grid */}
      <section className="max-w-7xl mx-auto px-4 lg:px-6 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#42DCC5] font-semibold">
              {isEn ? 'Tailored Public Discovery' : 'ವಿವಿಧ ವರ್ಗಗಳಿಗೆ ಮಾರ್ಗದರ್ಶನ'}
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mt-1">
              {isEn ? 'Who LifeBridge is Built to Support' : 'ಲೈಫ್‌ಬ್ರಿಡ್ಜ್ ಯಾರಿಗೆ ನೆರವಾಗುತ್ತದೆ?'}
            </h2>
          </div>
          <button
            onClick={() => setCurrentView('dashboard')}
            className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer"
          >
            <span>{isEn ? 'Take 2-Minute Eligibility Check' : '೨ ನಿಮಿಷದ ಅರ್ಹತಾ ಪರೀಕ್ಷೆ ಮಾಡಿ'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {audienceCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <button
                key={idx}
                onClick={() => setCurrentView(card.actionView)}
                className="group p-5 rounded-2xl bg-[#0F1E36] border border-slate-800 hover:border-slate-700 hover:bg-[#132544] transition-all text-left flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${card.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#42DCC5] transition-colors">
                    {isEn ? card.titleEn : card.titleKn}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {isEn ? card.descEn : card.descKn}
                  </p>
                </div>
                <div className="pt-4 mt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 group-hover:text-blue-400 transition-colors">
                  <span>{isEn ? 'Discover assistance' : 'ಸೌಲಭ್ಯಗಳನ್ನು ನೋಡಿ'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3 High-Fidelity Feature Spotlight Stories */}
      <section className="max-w-7xl mx-auto px-4 lg:px-6 space-y-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#42DCC5] font-semibold">
            {isEn ? 'Key Welfare Sectors' : 'ಪ್ರಮುಖ ಸಾರ್ವಜನಿಕ ರಂಗಗಳು'}
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mt-1">
            {isEn ? 'Deep Dives into Essential Public Services' : 'ಅಗತ್ಯ ಸಾರ್ವಜನಿಕ ಸೇವೆಗಳ ಸಮಗ್ರ ಮಾಹಿತಿ'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Spotlight 1: Healthcare */}
          <div className="rounded-2xl bg-[#0F1E36] border border-slate-800 overflow-hidden flex flex-col justify-between group">
            <div className="h-48 overflow-hidden relative">
              <img
                src="/src/assets/images/feature_healthcare_support_1791898750047.jpg"
                alt="Healthcare clinic in Karnataka"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36] via-transparent to-transparent" />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0B1220]/80 backdrop-blur-md text-[11px] font-semibold text-emerald-400 border border-emerald-500/30">
                {isEn ? 'Healthcare & PM-JAY' : 'ಆರೋಗ್ಯ ಸೇವೆಗಳು'}
              </span>
            </div>
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-[#42DCC5] transition-colors">
                  {isEn ? 'Ayushman Bharat & Public Hospitals' : 'ಆಯುಷ್ಮಾನ್ ಭಾರತ್ & ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಗಳು'}
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  {isEn
                    ? 'Up to ₹5 Lakhs cashless hospital treatment, Arogya Mitra assistance desks, and public hospital directories.'
                    : 'ವರ್ಷಕ್ಕೆ ₹5 ಲಕ್ಷದವರೆಗೆ ನಗದು ರಹಿತ ಚಿಕಿತ್ಸೆ, ಆರೋಗ್ಯ ಮಿತ್ರ ಡೆಸ್ಕ್ ಹಾಗೂ ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಗಳ ವಿವರ.'}
                </p>
              </div>
              <button
                onClick={() => setCurrentView('healthcare')}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 hover:text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>{isEn ? 'Explore Healthcare Services' : 'ಆರೋಗ್ಯ ಸೇವೆಗಳನ್ನು ನೋಡಿ'}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Spotlight 2: Education */}
          <div className="rounded-2xl bg-[#0F1E36] border border-slate-800 overflow-hidden flex flex-col justify-between group">
            <div className="h-48 overflow-hidden relative">
              <img
                src="/src/assets/images/feature_education_scholarship_1791898749927.jpg"
                alt="Students studying in college library"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36] via-transparent to-transparent" />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0B1220]/80 backdrop-blur-md text-[11px] font-semibold text-blue-400 border border-blue-500/30">
                {isEn ? 'Scholarships & ITI' : 'ವಿದ್ಯಾರ್ಥಿವೇತನ & ಐಟಿಐ'}
              </span>
            </div>
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-[#42DCC5] transition-colors">
                  {isEn ? 'SSP Portal, Fee Waivers & Hostels' : 'ಎಸ್‌ಎಸ್‌ಪಿ, ಶುಲ್ಕ ವಿನಾಯಿತಿ & ಹಾಸ್ಟೆಲ್'}
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  {isEn
                    ? 'State Scholarship Portal navigation, Vidyasiri food stipend, ITI courses, and higher education assistance.'
                    : 'ರಾಜ್ಯ ವಿದ್ಯಾರ್ಥಿವೇತನ ತಂತ್ರಾಂಶ, ವಿದ್ಯಾಸಿರಿ ಊಟ-ವಸತಿ ಭತ್ಯೆ, ಸರ್ಕಾರಿ ಐಟಿಐ ಮತ್ತು ಉನ್ನತ ಶಿಕ್ಷಣ ನೆರವು.'}
                </p>
              </div>
              <button
                onClick={() => setCurrentView('education')}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 hover:text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>{isEn ? 'Explore Scholarships' : 'ವಿದ್ಯಾರ್ಥಿವೇತನ ಅನ್ವೇಷಿಸಿ'}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Spotlight 3: Food Security */}
          <div className="rounded-2xl bg-[#0F1E36] border border-slate-800 overflow-hidden flex flex-col justify-between group">
            <div className="h-48 overflow-hidden relative">
              <img
                src="/src/assets/images/feature_food_security_1791898750784.jpg"
                alt="Community grain and ration distribution"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36] via-transparent to-transparent" />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0B1220]/80 backdrop-blur-md text-[11px] font-semibold text-amber-400 border border-amber-500/30">
                {isEn ? 'Food & Ration Security' : 'ಆಹಾರ & ಪಡಿತರ ಭದ್ರತೆ'}
              </span>
            </div>
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-[#42DCC5] transition-colors">
                  {isEn ? 'Anna Bhagya & Fair Price Shops' : 'ಅನ್ನಭಾಗ್ಯ & ನ್ಯಾಯಬೆಲೆ ಅಂಗಡಿಗಳು'}
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  {isEn
                    ? '10 kg food grains / cash DBT equivalent, BPL/AAY card guidance, and nearby ration shop locator.'
                    : '10 ಕೆಜಿ ಆಹಾರ ಧಾನ್ಯ / ನಗದು ಡಿಬಿಟಿ, ಬಿಪಿಎಲ್ ಪಡಿತರ ಚೀಟಿ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ರೇಷನ್ ಅಂಗಡಿ ಶೋಧನೆ.'}
                </p>
              </div>
              <button
                onClick={() => setCurrentView('food_ration')}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 hover:text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>{isEn ? 'Explore Ration Services' : 'ಪಡಿತರ ಸೇವೆಗಳನ್ನು ನೋಡಿ'}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Citizen Welfare Hubs & Public Money Watchdog */}
      <section className="max-w-7xl mx-auto px-4 lg:px-6 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#42DCC5] font-semibold">
              {isEn ? 'Specialized Citizen Portals' : 'ವಿಶೇಷ ನಾಗರಿಕ ಕಲ್ಯಾಣ ವೇದಿಕೆಗಳು'}
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mt-1">
              {isEn ? 'Critical Assistance, Rights & Public Watchdog' : 'ತುರ್ತು ನೆರವು, ಸಾಮಾಜಿಕ ನ್ಯಾಯ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಲೆಕ್ಕಪರಿಶೋಧನೆ'}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Card 1: Skill Training */}
          <button
            onClick={() => setCurrentView('skill_training')}
            className="p-5 rounded-2xl bg-[#0F1E36] border border-slate-800 hover:border-blue-500/50 hover:bg-[#132544] transition-all text-left flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-[#42DCC5] transition-colors mb-1">
                {isEn ? 'Skill Training & Courses' : 'ಕೌಶಲ್ಯ ತರಬೇತಿ & ಐಟಿಐ'}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isEn ? 'Free ITI, PMKVY 4.0, women tailoring, EV mechanic, and CM exam coaching with stipends.' : 'ಉಚಿತ ಐಟಿಐ, ಹೊಲಿಗೆ, ಎಲೆಕ್ಟ್ರಿಕ್ ವಾಹನ ರಿಪೇರಿ & ಪರೀಕ್ಷಾ ಕೋಚಿಂಗ್.'}
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-blue-400 font-semibold">
              <span>{isEn ? 'Explore Courses' : 'ಕೋರ್ಸ್‌ಗಳು'}</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Card 2: Widow Pension */}
          <button
            onClick={() => setCurrentView('widow_pension')}
            className="p-5 rounded-2xl bg-[#0F1E36] border border-slate-800 hover:border-rose-500/50 hover:bg-[#132544] transition-all text-left flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center mb-3">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-rose-300 transition-colors mb-1">
                {isEn ? 'Widow Pension Schemes' : 'ವಿಧವಾ ವೇತನ ಪಿಂಚಣಿ'}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isEn ? '₹1,200/mo Karnataka DBT, remarriage grant ₹3L, free legal aid, and delay complaint resolution.' : 'ಮಾಸಿಕ ₹1,200 ಪಿಂಚಣಿ, ಮರುಮದುವೆ ಪ್ರೋತ್ಸಾಹ ₹3 ಲಕ್ಷ ಮತ್ತು ಉಚಿತ ವಕೀಲರ ಸೇವೆ.'}
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-rose-400 font-semibold">
              <span>{isEn ? 'Pension Guide' : 'ಮಾರ್ಗದರ್ಶಿ'}</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Card 3: Cybercrime & Helplines */}
          <button
            onClick={() => setCurrentView('cyber_police_helplines')}
            className="p-5 rounded-2xl bg-[#0F1E36] border border-slate-800 hover:border-red-500/50 hover:bg-[#132544] transition-all text-left flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-red-300 transition-colors mb-1">
                {isEn ? 'Cybercrime & Police 1930' : 'ಸೈಬರ್ ಕ್ರೈಂ & ೧೯೩೦'}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isEn ? 'Golden hour stolen UPI fund freeze, 112 emergency dispatch, FIR filing rights, and scam defense.' : 'ಯುಪಿಐ ವಂಚನೆ ಹಣ ಫ್ರೀಜ್, ೧೧೨ ತುರ್ತು ಕರೆ ಮತ್ತು ಝೀರೋ ಎಫ್‌ಐಆರ್ ಹಕ್ಕುಗಳು.'}
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-red-400 font-semibold">
              <span>{isEn ? 'Emergency Help' : 'ತುರ್ತು ನೆರವು'}</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Card 4: SC/ST/OBC Welfare */}
          <button
            onClick={() => setCurrentView('sc_st_obc_welfare')}
            className="p-5 rounded-2xl bg-[#0F1E36] border border-slate-800 hover:border-indigo-500/50 hover:bg-[#132544] transition-all text-left flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors mb-1">
                {isEn ? 'SC / ST / OBC Welfare' : 'ಎಸ್‌ಸಿ/ಎಸ್‌ಟಿ/ಒಬಿಸಿ ಕಲ್ಯಾಣ'}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isEn ? 'SSP scholarships, hostels, Arivu loans, Ganga Kalyana borewells, and caste certificate steps.' : 'ಎಸ್‌ಎಸ್‌ಪಿ ವಿದ್ಯಾರ್ಥಿವೇತನ, ಹಾಸ್ಟೆಲ್, ಅರಿವು ಸಾಲ ಮತ್ತು ಗಂಗಾ ಕಲ್ಯಾಣ.'}
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-indigo-400 font-semibold">
              <span>{isEn ? 'Welfare Schemes' : 'ಕಲ್ಯಾಣ ಯೋಜನೆಗಳು'}</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Card 5: Public Money Watchdog */}
          <button
            onClick={() => setCurrentView('public_money_accountability')}
            className="p-5 rounded-2xl bg-[#0F1E36] border border-slate-800 hover:border-amber-500/50 hover:bg-[#132544] transition-all text-left flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-3">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors mb-1">
                {isEn ? 'Public Money & Dark Side' : 'ಸರ್ಕಾರಿ ಹಣ & ಆಡಿಟ್ ವಾಚ್'}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isEn ? 'Budget vs actual spending, CAG findings, unspent fund diversions, cost overruns, and RTI guide.' : 'ಬಜೆಟ್ ಬಳಕೆ, ಸಿಎಜಿ ವರದಿ, ವಿಳಂಬ ಕಾಮಗಾರಿಗಳು ಮತ್ತು ಮಾಹಿತಿ ಹಕ್ಕು (RTI).'}
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-amber-400 font-semibold">
              <span>{isEn ? 'Audit Tracker' : 'ಆಡಿಟ್ ವಿವರ'}</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </section>

      {/* Interactive Tools Teaser Banner */}
      <section className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-[#142B4D] via-[#0E1F3B] to-[#0A1629] border border-blue-900/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-semibold text-[#42DCC5] uppercase tracking-wider">
              {isEn ? 'Interactive Citizen Mapping' : 'ಸಂವಾದಾತ್ಮಕ ನಾಗರಿಕ ನಕ್ಷೆ'}
            </span>
            <h3 className="text-xl lg:text-2xl font-bold text-white">
              {isEn ? 'Locate Government Hospitals, Schools & Service Centres' : 'ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಗಳು, ಶಾಲೆಗಳು ಮತ್ತು ಬೆಂಗಳೂರು ಒನ್ ಕೇಂದ್ರಗಳನ್ನು ಹುಡುಕಿ'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {isEn
                ? 'Search across 8 verified public facility layers in Bengaluru and Karnataka with OpenStreetMap directions, operating timings, and phone numbers.'
                : 'ಆಸ್ಪತ್ರೆಗಳು, ಶಾಲೆಗಳು, ಐಟಿಐಗಳು ಮತ್ತು ನ್ಯಾಯಬೆಲೆ ಅಂಗಡಿಗಳ ನೈಜ ವಿಳಾಸ ಮತ್ತು ಸಂಪರ್ಕ ಮಾಹಿತಿ.'}
            </p>
          </div>
          <button
            onClick={() => setCurrentView('maps')}
            className="shrink-0 px-5 py-3 rounded-xl bg-[#3678F6] hover:bg-blue-600 text-white font-semibold text-xs md:text-sm shadow-md transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Compass className="w-4 h-4" />
            <span>{isEn ? 'Open Public Service Map' : 'ಸೇವಾ ನಕ್ಷೆ ತೆರೆಯಿರಿ'}</span>
          </button>
        </div>
      </section>
    </div>
  );
};
