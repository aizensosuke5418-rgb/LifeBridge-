import React, { useState } from 'react';
import { 
  Utensils, Shield, MapPin, ExternalLink, ArrowRight, CheckCircle2, 
  HelpCircle, ChevronRight, FileText, Building2 
} from 'lucide-react';
import { SCHEMES_DATABASE } from '../../data/schemes';
import { PUBLIC_FACILITIES_DATABASE } from '../../data/facilities';
import { useApp } from '../../context/AppContext';

export const RationFoodView: React.FC = () => {
  const { language, setSelectedSchemeForDetail, setSelectedFacilityForDetail, setCurrentView } = useApp();
  const isEn = language === 'en';

  const [wizardGoal, setWizardGoal] = useState<string>('check_dbt');

  const annaBhagyaScheme = SCHEMES_DATABASE.find(s => s.id === 'karnataka-anna-bhagya');
  const fpsFacilities = PUBLIC_FACILITIES_DATABASE.filter(f => f.category === 'fair_price_shop');

  const rationCardCategories = [
    {
      code: 'AAY',
      nameEn: 'Antyodaya Anna Yojana (AAY)',
      nameKn: 'ಅಂತ್ಯೋದಯ ಅನ್ನ ಯೋಜನೆ (ಎಎವೈ)',
      descEn: 'Poorest of the poor households. Entitled to 35 kg of food grains per household per month at zero cost + Karnataka Anna Bhagya DBT.',
      descKn: 'ಅತಿ ಬಡ ಕುಟುಂಬಗಳು. ಪ್ರತಿ ಕುಟುಂಬಕ್ಕೆ ತಿಂಗಳಿಗೆ 35 ಕೆಜಿ ಉಚಿತ ಧಾನ್ಯ ಮತ್ತು ಅನ್ನಭಾಗ್ಯ ನಗದು ಸೌಲಭ್ಯ.',
      color: 'border-amber-500/40 bg-amber-950/20 text-amber-300'
    },
    {
      code: 'BPL / PHH',
      nameEn: 'Priority Household (BPL / PHH)',
      nameKn: 'ಆದ್ಯತಾ ಪಡಿತರ ಚೀಟಿ (ಬಿಪಿಎಲ್)',
      descEn: 'Families below the poverty line. Entitled to 5 kg free rice/person/month via NFSA + 5 kg cash equivalent (₹170/person/month) under Anna Bhagya.',
      descKn: 'ಬಡತನ ರೇಖೆಗಿಂತ ಕೆಳಗಿರುವ ಕುಟುಂಬಗಳು. ಪ್ರತಿ ಸದಸ್ಯರಿಗೆ 5 ಕೆಜಿ ಉಚಿತ ಅಕ್ಕಿ + ₹170 ನಗದು ಡಿಬಿಟಿ.',
      color: 'border-emerald-500/40 bg-emerald-950/20 text-emerald-300'
    },
    {
      code: 'APL / NPHH',
      nameEn: 'Non-Priority Household (APL)',
      nameKn: 'ಆದ್ಯತೇತರ ಪಡಿತರ ಚೀಟಿ (ಎಪಿಎಲ್)',
      descEn: 'Above poverty line households. Used as official address proof and identity document. Can purchase subsidized items during surplus cycles.',
      descKn: 'ಬಡತನ ರೇಖೆಗಿಂತ ಮೇಲಿರುವ ಕುಟುಂಬಗಳು. ಅಧಿಕೃತ ವಿಳಾಸ ಮತ್ತು ಗುರುತಿನ ದಾಖಲೆಯಾಗಿ ಬಳಕೆ.',
      color: 'border-blue-500/40 bg-blue-950/20 text-blue-300'
    }
  ];

  const wizardOptions = [
    {
      id: 'check_dbt',
      titleEn: 'Check Anna Bhagya Cash DBT Transfer Status',
      titleKn: 'ಅನ್ನಭಾಗ್ಯ ನಗದು ಜಮೆ (ಡಿಬಿಟಿ) ಸ್ಥಿತಿ ಪರಿಶೀಲನೆ',
      stepsEn: [
        'Open the Ahara Karnataka DBT Status Portal at ahara.karnataka.gov.in/status_dbt',
        'Select your district, taluk, year, and disbursement month',
        'Enter your 10-digit Ration Card (RC) Number',
        'Verify the Aadhaar-linked bank account credit details (₹170 per family member for 5kg entitlement)'
      ],
      stepsKn: [
        'ahara.karnataka.gov.in/status_dbt ಪೋರ್ಟಲ್ ತೆರೆಯಿರಿ',
        'ನಿಮ್ಮ ಜಿಲ್ಲೆ, ತಾಲೂಕು, ವರ್ಷ ಮತ್ತು ತಿಂಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        '10 ಅಂಕಿಯ ರೇಷನ್ ಕಾರ್ಡ್ (RC) ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ',
        'ಪ್ರತಿ ಸದಸ್ಯರಿಗೆ ಜಮೆಯಾಗಿರುವ ₹170 ನಗದು ವಿವರ ಪರಿಶೀಲಿಸಿ'
      ],
      link: 'https://ahara.karnataka.gov.in/status_dbt',
      linkTextEn: 'Open Official Ahara DBT Tracker'
    },
    {
      id: 'new_card',
      titleEn: 'Apply for a New Ration Card in Karnataka',
      titleKn: 'ಹೊಸ ರೇಷನ್ ಕಾರ್ಡ್‌ಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಕೆ',
      stepsEn: [
        'New BPL ration card applications open periodically on ahara.karnataka.gov.in or Bangalore One / Grama One',
        'Gather Aadhaar cards of all family members and electricity account ID / rental proof',
        'Ensure the female elder of the family is nominated as the head of family',
        'Biometric authentication of all family members is required at submission'
      ],
      stepsKn: [
        'ಆಹಾರ ಇಲಾಖೆಯು ಪೋರ್ಟಲ್ ತೆರೆದಾಗ ಬೆಂಗಳೂರು ಒನ್ ಅಥವಾ ಗ್ರಾಮ ಒನ್‌ನಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ',
        'ಎಲ್ಲಾ ಕುಟುಂಬ ಸದಸ್ಯರ ಆಧಾರ್ ಕಾರ್ಡ್ ಮತ್ತು ವಿದ್ಯುತ್ ಬಿಲ್ ತೆಗೆದುಕೊಂಡು ಹೋಗಿ',
        'ಮನೆಯ ಹಿರಿಯ ಮಹಿಳೆಯನ್ನು ಕುಟುಂಬದ ಯಜಮಾನಿ ಎಂದು ಹೆಸರಿಸಿ',
        'ಬಯೋಮೆಟ್ರಿಕ್ ಬೆರಳಚ್ಚು ನೀಡಿ ಸ್ವೀಕೃತಿ ರಶೀದಿ ಪಡೆಯಿರಿ'
      ],
      link: 'https://ahara.karnataka.gov.in/',
      linkTextEn: 'Ahara Portal Guidelines'
    },
    {
      id: 'add_member',
      titleEn: 'Add Member or Update Aadhaar e-KYC',
      titleKn: 'ಸದಸ್ಯರ ಹೆಸರು ಸೇರ್ಪಡೆ ಅಥವಾ ಇ-ಕೆವೈಸಿ ನವೀಕರಣ',
      stepsEn: [
        'Visit your assigned local Fair Price Shop (FPS) with the original Ration Card',
        'To add a new born child: provide Aadhaar and official Birth Certificate issued by Corporation/Panchayat',
        'To add a bride: provide Marriage Certificate and deletion certificate from her parental ration card',
        'FPS dealer captures biometric fingerprint to link the member into the NFSA database'
      ],
      stepsKn: [
        'ನಿಮ್ಮ ರೇಷನ್ ಅಂಗಡಿಗೆ (ನ್ಯಾಯಬೆಲೆ ಅಂಗಡಿ) ಭೇಟಿ ನೀಡಿ',
        'ಮಗುವಿನ ಹೆಸರು ಸೇರಿಸಲು ಜನನ ಪ್ರಮಾಣಪತ್ರ ಮತ್ತು ಆಧಾರ್ ನೀಡಿ',
        'ಮದುವೆಯಾದ ಮಹಿಳೆಯ ಹೆಸರು ಸೇರಿಸಲು ವಿವಾಹ ಪ್ರಮಾಣಪತ್ರ ಮತ್ತು ತವರು ಮನೆಯಿಂದ ಹೆಸರು ರದ್ದು ಪತ್ರ ನೀಡಿ',
        'ಡೀಲರ್ ಇ-ಪಿಒಎಸ್ ಯಂತ್ರದಲ್ಲಿ ಬೆರಳಚ್ಚು ಪಡೆದು ಹೆಸರು ಸೇರಿಸುತ್ತಾರೆ'
      ],
      link: 'https://ahara.karnataka.gov.in/',
      linkTextEn: 'Verify FPS Dealer Rules'
    }
  ];

  const activeWizard = wizardOptions.find(w => w.id === wizardGoal) || wizardOptions[0];

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 space-y-10">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
          {isEn ? 'Food Security & Public Distribution System' : 'ಆಹಾರ ಭದ್ರತೆ & ಸಾರ್ವಜನಿಕ ವಿತರಣಾ ವ್ಯವಸ್ಥೆ'}
        </span>
        <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
          {isEn ? 'Ration Cards & Food Grain Services' : 'ಪಡಿತರ ಚೀಟಿ ಮತ್ತು ಆಹಾರ ಧಾನ್ಯ ಸೇವೆಗಳು'}
        </h1>
        <p className="text-xs md:text-sm text-slate-300 max-w-3xl leading-relaxed">
          {isEn
            ? 'Complete guidance for Karnataka Anna Bhagya, NFSA entitlements, BPL/AAY categories, Fair Price Shop locations, and online DBT cash status tracking.'
            : 'ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಅನ್ನಭಾಗ್ಯ ಯೋಜನೆ, ಉಚಿತ ಅಕ್ಕಿ, ನಗದು ಡಿಬಿಟಿ, ರೇಷನ್ ಕಾರ್ಡ್ ವಿಧಗಳು ಮತ್ತು ನ್ಯಾಯಬೆಲೆ ಅಂಗಡಿಗಳ ಪೂರ್ಣ ಮಾಹಿತಿ.'}
        </p>
      </div>

      {/* Featured: Anna Bhagya Breakdown Card */}
      <div className="p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-[#231A0F] via-[#1A1612] to-[#0E1524] border border-amber-900/50 shadow-xl space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-300">
              <Utensils className="w-3.5 h-3.5" />
              <span>{isEn ? 'Karnataka Anna Bhagya Guarantee' : 'ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಅನ್ನಭಾಗ್ಯ ಗ್ಯಾರಂಟಿ'}</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
              {isEn ? '10 kg Food Grain Entitlement per Person / Month' : 'ಪ್ರತಿ ವ್ಯಕ್ತಿಗೆ ತಿಂಗಳಿಗೆ 10 ಕೆಜಿ ಆಹಾರ ಧಾನ್ಯದ ಸವಲತ್ತು'}
            </h2>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              {isEn
                ? 'Under Anna Bhagya, eligible BPL/AAY cardholders receive 5 kg free grains distributed through Fair Price Shops, and cash equivalent of ₹170/month per member (at ₹34/kg) credited directly to the woman head of household’s bank account.'
                : 'ಪ್ರತಿ ಬಿಪಿಎಲ್ ಸದಸ್ಯರಿಗೆ ನ್ಯಾಯಬೆಲೆ ಅಂಗಡಿ ಮೂಲಕ 5 ಕೆಜಿ ಉಚಿತ ಅಕ್ಕಿ ಮತ್ತು ಹೆಚ್ಚುವರಿ 5 ಕೆಜಿಗೆ ತಲಾ ₹170 ನಗದು ಹಣ ಕುಟುಂಬದ ಯಜಮಾನಿ ಮಹಿಳೆಯ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ನೇರವಾಗಿ ಜಮೆಯಾಗುತ್ತದೆ.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0">
            {annaBhagyaScheme && (
              <button
                onClick={() => setSelectedSchemeForDetail(annaBhagyaScheme)}
                className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs md:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>{isEn ? 'View Anna Bhagya Rules' : 'ಅನ್ನಭಾಗ್ಯ ನಿಯಮಗಳು'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
            <a
              href="https://ahara.karnataka.gov.in/status_dbt"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>{isEn ? 'Check Monthly DBT Cash Credit' : 'ಮಾಸಿಕ ನಗದು ಜಮೆ ಪರಿಶೀಲಿಸಿ'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Ration Card Categories Explained */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white">
            {isEn ? 'Understand Your Ration Card Category' : 'ಪಡಿತರ ಚೀಟಿಗಳ ವರ್ಗೀಕರಣ ಮತ್ತು ಸವಲತ್ತುಗಳು'}
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            {isEn ? 'Official classifications under NFSA and Karnataka Food & Civil Supplies' : 'ಆಹಾರ ಇಲಾಖೆಯ ಅಧಿಕೃತ ವರ್ಗಗಳು'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {rationCardCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border flex flex-col justify-between space-y-3 ${cat.color}`}
            >
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider">{cat.code}</span>
                <h4 className="text-base font-bold text-white">
                  {isEn ? cat.nameEn : cat.nameKn}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {isEn ? cat.descEn : cat.descKn}
                </p>
              </div>
              <div className="pt-2 text-[11px] text-slate-400 flex items-center gap-1">
                <Shield className="w-3.5 h-3.5" />
                <span>{isEn ? 'Central NFSA + State Guarantee' : 'ಕೇಂದ್ರ ಎನ್‌ಎಫ್‌ಎಸ್‌ಎ + ರಾಜ್ಯ ಯೋಜನೆ'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Ration Service Wizard */}
      <div className="p-6 rounded-2xl bg-[#0F1E36] border border-slate-800 space-y-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#42DCC5] font-semibold">
            {isEn ? 'Interactive Assistance' : 'ಸೇವಾ ಮಾರ್ಗದರ್ಶಿ'}
          </span>
          <h3 className="text-xl font-bold text-white mt-1">
            {isEn ? 'Ration Service Wizard: What Do You Need to Do?' : 'ಪಡಿತರ ಸೇವಾ ವಿಝಾರ್ಡ್: ನಿಮಗೆ ಯಾವ ನೆರವು ಬೇಕು?'}
          </h3>
        </div>

        {/* Wizard Option Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {wizardOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setWizardGoal(opt.id)}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                wizardGoal === opt.id
                  ? 'bg-blue-600/20 border-blue-500 text-white font-semibold'
                  : 'bg-[#0B1526] border-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              <p className="text-xs md:text-sm">{isEn ? opt.titleEn : opt.titleKn}</p>
            </button>
          ))}
        </div>

        {/* Selected Wizard Steps */}
        <div className="p-5 rounded-xl bg-[#0B1526] border border-slate-800 space-y-4">
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#42DCC5]" />
            <span>{isEn ? activeWizard.titleEn : activeWizard.titleKn}</span>
          </h4>

          <div className="space-y-2.5">
            {(isEn ? activeWizard.stepsEn : activeWizard.stepsKn).map((step, sIdx) => (
              <div key={sIdx} className="flex items-start gap-3 text-xs text-slate-200">
                <span className="w-5 h-5 rounded-full bg-slate-800 text-[#42DCC5] flex items-center justify-center font-mono font-bold shrink-0 text-[11px]">
                  {sIdx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 flex justify-end">
            <a
              href={activeWizard.link}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-[#3678F6] hover:bg-blue-600 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <span>{activeWizard.linkTextEn}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Fair Price Shop Discovery Highlights */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-white">
              {isEn ? 'Nearby Fair Price Shops (PDS FPS)' : 'ನ್ಯಾಯಬೆಲೆ ಪಡಿತರ ಅಂಗಡಿಗಳು (ಪಿಡಿಎಸ್)'}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {isEn ? 'Operating hours and verified address details in Bengaluru' : 'ಬೆಂಗಳೂರಿನ ನ್ಯಾಯಬೆಲೆ ಅಂಗಡಿಗಳ ವಿಳಾಸ ಮತ್ತು ಸಮಯ'}
            </p>
          </div>
          <button
            onClick={() => setCurrentView('maps')}
            className="text-xs text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 cursor-pointer"
          >
            <span>{isEn ? 'View on Map' : 'ನಕ್ಷೆಯಲ್ಲಿ ನೋಡಿ'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fpsFacilities.map((fps) => (
            <div
              key={fps.id}
              className="p-5 rounded-2xl bg-[#0F1E36] border border-slate-800 space-y-3"
            >
              <div>
                <span className="text-[10px] text-amber-400 font-semibold uppercase tracking-wider block">
                  Fair Price Shop
                </span>
                <h4 className="text-base font-bold text-white mt-0.5">
                  {isEn ? fps.name.en : fps.name.kn}
                </h4>
                <p className="text-xs text-slate-300 mt-1 flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span>{fps.locality} — {isEn ? fps.address.en : fps.address.kn}</span>
                </p>
              </div>

              {fps.timings && (
                <p className="text-xs text-slate-400">
                  <strong className="text-slate-300">{isEn ? 'Distribution Timings: ' : 'ವಿತರಣಾ ಸಮಯ: '}</strong>
                  {fps.timings}
                </p>
              )}

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setSelectedFacilityForDetail(fps)}
                  className="text-xs text-blue-400 hover:text-blue-300 font-medium cursor-pointer"
                >
                  {isEn ? 'Facility Details' : 'ವಿವರಗಳು'}
                </button>
                <a
                  href={fps.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-[#3678F6] text-white text-xs font-medium flex items-center gap-1 transition-colors"
                >
                  <span>{isEn ? 'Directions' : 'ಮಾರ್ಗ'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
