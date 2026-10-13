import React, { useState } from 'react';
import { 
  Compass, Radio, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, 
  Baby, GraduationCap, Briefcase, Users, Sprout, UserCheck, HeartPulse, Shield 
} from 'lucide-react';
import { SCHEMES_DATABASE } from '../../data/schemes';
import { useApp } from '../../context/AppContext';
import { evaluateAllSchemes } from '../../utils/matchingEngine';

export const LifeMapRadarView: React.FC = () => {
  const { language, profile, setSelectedSchemeForDetail, setCurrentView, t } = useApp();
  const isEn = language === 'en';

  const evaluated = evaluateAllSchemes(profile, language);
  const potentialMatches = evaluated.filter(e => e.status === 'potential_match');
  const moreInfoMatches = evaluated.filter(e => e.status === 'more_info_needed');

  const [selectedLifeStage, setSelectedLifeStage] = useState<string>('youth');

  const lifeStages = [
    {
      id: 'maternal',
      titleEn: '1. Early Childhood & Mothers',
      titleKn: '೧. ತಾಯಿ & ಶಿಶು ಆರೈಕೆ',
      icon: Baby,
      color: '#EC4899',
      schemes: ['central-pm-matru-vandana']
    },
    {
      id: 'school',
      titleEn: '2. School Education',
      titleKn: '೨. ಶಾಲಾ ಶಿಕ್ಷಣ',
      icon: GraduationCap,
      color: '#3B82F6',
      schemes: ['karnataka-ssp-scholarship']
    },
    {
      id: 'youth',
      titleEn: '3. College, Youth & Skills',
      titleKn: '೩. ಕಾಲೇಜು & ಯುವಜನತೆ',
      icon: GraduationCap,
      color: '#3678F6',
      schemes: ['karnataka-ssp-scholarship', 'karnataka-vidyasiri', 'karnataka-yuva-nidhi']
    },
    {
      id: 'work',
      titleEn: '4. Livelihood & Small Vendors',
      titleKn: '೪. ಜೀವನೋಪಾಯ & ವ್ಯಾಪಾರಿಗಳು',
      icon: Briefcase,
      color: '#06B6D4',
      schemes: ['central-pm-svanidhi', 'karnataka-yuva-nidhi']
    },
    {
      id: 'family',
      titleEn: '5. Women & Family Well-Being',
      titleKn: '೫. ಮಹಿಳೆಯರು & ಕುಟುಂಬ',
      icon: Users,
      color: '#8B5CF6',
      schemes: ['karnataka-gruha-lakshmi', 'karnataka-shakti-scheme', 'karnataka-gruha-jyothi', 'karnataka-anna-bhagya']
    },
    {
      id: 'agriculture',
      titleEn: '6. Agriculture & Farmers',
      titleKn: '೬. ಕೃಷಿ & ರೈತರು',
      icon: Sprout,
      color: '#10B981',
      schemes: ['central-pm-kisan']
    },
    {
      id: 'senior',
      titleEn: '7. Senior Citizens & Pensions',
      titleKn: '೭. ಹಿರಿಯ ನಾಗರಿಕರು & ಪಿಂಚಣಿ',
      icon: UserCheck,
      color: '#A855F7',
      schemes: ['karnataka-sandhya-suraksha']
    },
    {
      id: 'health',
      titleEn: '8. Universal Healthcare',
      titleKn: '೮. ಸಾರ್ವತ್ರಿಕ ಆರೋಗ್ಯ ರಕ್ಷಣೆ',
      icon: HeartPulse,
      color: '#EF4444',
      schemes: ['ayushman-bharat-pmjay', 'karnataka-disability-assistance']
    }
  ];

  const activeStage = lifeStages.find(s => s.id === selectedLifeStage) || lifeStages[2];
  const activeSchemes = SCHEMES_DATABASE.filter(s => activeStage.schemes.includes(s.id));

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 space-y-10">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs uppercase tracking-widest text-[#42DCC5] font-semibold">
          {isEn ? 'Lifecycle Mapping & Eligibility Radar' : 'ಜೀವನ ಹಂತಗಳು & ಅವಕಾಶ ರೇಡಾರ್'}
        </span>
        <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
          {isEn ? 'Life Map & Opportunity Radar' : 'ಲೈಫ್ ಮ್ಯಾಪ್ ಮತ್ತು ಅವಕಾಶ ರೇಡಾರ್'}
        </h1>
        <p className="text-xs md:text-sm text-slate-300 max-w-3xl leading-relaxed">
          {isEn
            ? 'Interactive visual roadmap tracing welfare entitlements across every stage of life, paired with a live radar reflecting your profile matches.'
            : 'ಹುಟ್ಟಿನಿಂದ ವೃದ್ಧಾಪ್ಯದವರೆಗೆ ಪ್ರತಿಯೊಂದು ಜೀವನ ಹಂತದಲ್ಲಿ ಸಿಗುವ ಸರ್ಕಾರಿ ಸೌಲಭ್ಯಗಳ ನಕ್ಷೆ ಮತ್ತು ನಿಮ್ಮ ಪ್ರೊಫೈಲ್‌ನ ನೇರ ರೇಡಾರ್.'}
        </p>
      </div>

      {/* Opportunity Radar Visual Card */}
      <div className="p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-[#0F1E36] via-[#0B1526] to-[#070D18] border border-blue-900/60 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <Radio className="w-5 h-5 text-[#42DCC5] animate-pulse" />
              <h3 className="text-xl font-bold text-white">
                {isEn ? 'Opportunity Radar' : 'ಅವಕಾಶ ರೇಡಾರ್'}
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {isEn
                ? `Scanning verified rules against your location (${profile.state}, ${profile.district}) and profile.`
                : `ನಿಮ್ಮ ಸ್ಥಳ ಮತ್ತು ಪ್ರೊಫೈಲ್‌ನ ಆಧಾರದ ಮೇಲೆ ಯೋಜನೆಗಳ ಲೈವ್ ಸ್ಕ್ಯಾನ್.`}
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>{potentialMatches.length} {isEn ? 'Matches' : 'ಹೊಂದಾಣಿಕೆಗಳು'}</span>
            </span>
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <AlertTriangle className="w-4 h-4" />
              <span>{moreInfoMatches.length} {isEn ? 'Pending Details' : 'ಮಾಹಿತಿ ಅಗತ್ಯ'}</span>
            </span>
          </div>
        </div>

        {/* Radar concentric circular visual (SVG) */}
        <div className="relative py-4 flex flex-col items-center justify-center">
          <svg viewBox="0 0 400 240" className="w-full max-w-lg h-auto" fill="none">
            {/* Concentric radar rings */}
            <circle cx="200" cy="200" r="180" stroke="#1E3A8A" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
            <circle cx="200" cy="200" r="130" stroke="#1E3A8A" strokeWidth="1.5" opacity="0.6" />
            <circle cx="200" cy="200" r="80" stroke="#3678F6" strokeWidth="2" opacity="0.8" />
            <circle cx="200" cy="200" r="30" stroke="#42DCC5" strokeWidth="2" />

            {/* Sweep radar beam line */}
            <line x1="200" y1="200" x2="100" y2="40" stroke="#42DCC5" strokeWidth="2" strokeOpacity="0.8" />

            {/* User Center Node */}
            <circle cx="200" cy="200" r="6" fill="#42DCC5" />
            <text x="200" y="225" textAnchor="middle" fill="#94A3B8" fontSize="10" fontWeight="600">
              YOU ({profile.district})
            </text>

            {/* Detected Opportunity Blips */}
            {potentialMatches.slice(0, 5).map((match, idx) => {
              const angles = [60, 110, 140, 40, 160];
              const dists = [70, 75, 120, 125, 160];
              const rad = (angles[idx] * Math.PI) / 180;
              const x = 200 - dists[idx] * Math.cos(rad);
              const y = 200 - dists[idx] * Math.sin(rad);

              return (
                <g key={match.scheme.id} className="cursor-pointer">
                  <circle cx={x} cy={y} r="5" fill="#42DCC5" />
                  <circle cx={x} cy={y} r="10" stroke="#42DCC5" strokeWidth="1" opacity="0.5" />
                  <text x={x + 8} y={y + 3} fill="#F8FAFC" fontSize="9" fontWeight="bold">
                    {match.scheme.shortName || match.scheme.name.en.split(' ')[0]}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Quick Links from Radar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2 border-t border-slate-800">
          {potentialMatches.slice(0, 3).map((match) => (
            <button
              key={match.scheme.id}
              onClick={() => setSelectedSchemeForDetail(match.scheme)}
              className="p-3 rounded-xl bg-[#09111E] border border-emerald-500/30 hover:border-emerald-500 text-left transition-colors cursor-pointer"
            >
              <span className="text-[10px] text-emerald-400 font-semibold uppercase">Potential Match</span>
              <h5 className="text-xs font-bold text-white truncate mt-0.5">
                {isEn ? match.scheme.name.en : match.scheme.name.kn}
              </h5>
              <p className="text-[11px] text-slate-400 truncate mt-0.5">
                {isEn ? match.scheme.tagline.en : match.scheme.tagline.kn}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Life Map Stages */}
      <div className="space-y-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#42DCC5] font-semibold">
            {isEn ? 'Lifecycle Trajectory' : 'ಜೀವನದ ಹಂತಗಳು'}
          </span>
          <h3 className="text-xl lg:text-2xl font-bold text-white mt-1">
            {isEn ? 'Select a Life Stage to Discover Targeted Assistance' : 'ಜೀವನದ ಹಂತವನ್ನು ಆಯ್ಕೆಮಾಡಿ ಸವಲತ್ತುಗಳನ್ನು ನೋಡಿ'}
          </h3>
        </div>

        {/* 8 Life Stage Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
          {lifeStages.map((stage) => {
            const Icon = stage.icon;
            const isSelected = selectedLifeStage === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setSelectedLifeStage(stage.id)}
                className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600/30 border-blue-500 shadow-md scale-105'
                    : 'bg-[#0F1E36] border-slate-800 hover:border-slate-700 text-slate-300'
                }`}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-2"
                  style={{ backgroundColor: `${stage.color}20`, color: stage.color }}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-white leading-tight">
                  {isEn ? stage.titleEn : stage.titleKn}
                </span>
              </button>
            );
          })}
        </div>

        {/* Stage Schemes Display */}
        <div className="p-6 rounded-2xl bg-[#0F1E36] border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs font-semibold text-[#42DCC5]">
                {isEn ? 'Entitlements in this Life Phase:' : 'ಈ ಹಂತದಲ್ಲಿ ಲಭ್ಯವಿರುವ ಸವಲತ್ತುಗಳು:'}
              </span>
              <h4 className="text-lg font-bold text-white mt-0.5">
                {isEn ? activeStage.titleEn : activeStage.titleKn}
              </h4>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              {activeSchemes.length} {isEn ? 'Schemes' : 'ಯೋಜನೆಗಳು'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeSchemes.map((scheme) => (
              <div
                key={scheme.id}
                className="p-4 rounded-xl bg-[#0B1526] border border-slate-800 flex flex-col justify-between space-y-3"
              >
                <div>
                  <span className="text-[10px] text-blue-400 font-semibold uppercase">
                    {scheme.level === 'karnataka' ? 'Karnataka' : 'Central / Both'}
                  </span>
                  <h5 className="text-sm font-bold text-white mt-0.5">
                    {isEn ? scheme.name.en : scheme.name.kn}
                  </h5>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    {isEn ? scheme.description.en : scheme.description.kn}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedSchemeForDetail(scheme)}
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 cursor-pointer"
                  >
                    {isEn ? 'View Guide' : 'ವಿವರ ನೋಡಿ'} →
                  </button>
                  <a
                    href={scheme.officialPortalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-slate-400 hover:text-white"
                  >
                    Official Portal
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
