import React from 'react';
import { HeartPulse, Utensils, GraduationCap, ShieldCheck, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AnimatedBridgeVisual: React.FC = () => {
  const { language, setCurrentView } = useApp();
  const isEn = language === 'en';

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-slate-800 bg-[#0E1B31] p-6 lg:p-8">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />

      {/* Top Banner Headline */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#42DCC5] font-semibold">
            {isEn ? 'The Civic Connection' : 'ನಾಗರಿಕ ಸಂಪರ್ಕ ಸೇತು'}
          </span>
          <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight mt-1">
            {isEn
              ? 'One Bridge Connecting Essential Public Pillars'
              : 'ಮೂರು ಪ್ರಮುಖ ಜನಪರ ಆಧಾರಸ್ತಂಭಗಳನ್ನು ಬೆಸೆಯುವ ಸೇತು'}
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-[#42DCC5]" />
          <span>{isEn ? 'Direct Citizen Navigation · Zero Intermediaries' : 'ನೇರ ನಾಗರಿಕ ಮಾರ್ಗದರ್ಶನ · ಮಧ್ಯವರ್ತಿಗಳಿಲ್ಲ'}</span>
        </div>
      </div>

      {/* SVG Bridge Visualization */}
      <div className="relative z-10 my-4">
        <svg
          viewBox="0 0 900 240"
          className="w-full h-auto drop-shadow-lg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bridgeFlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3678F6" />
              <stop offset="50%" stopColor="#42DCC5" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
            <linearGradient id="cableGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3678F6" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#42DCC5" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3678F6" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Water/Foundation Level */}
          <line x1="50" y1="210" x2="850" y2="210" stroke="#1E3A8A" strokeWidth="2" strokeDasharray="4 4" />

          {/* Pylons */}
          {/* Left Pylon (Healthcare Anchor) */}
          <rect x="180" y="40" width="16" height="170" rx="3" fill="#142B4D" stroke="#3678F6" strokeWidth="2" />
          <line x1="188" y1="40" x2="188" y2="20" stroke="#3678F6" strokeWidth="2" />

          {/* Center Pylon (Citizen Core) */}
          <rect x="442" y="20" width="16" height="190" rx="3" fill="#142B4D" stroke="#42DCC5" strokeWidth="2.5" />
          <line x1="450" y1="20" x2="450" y2="6" stroke="#42DCC5" strokeWidth="2" />

          {/* Right Pylon (Education Anchor) */}
          <rect x="704" y="40" width="16" height="170" rx="3" fill="#142B4D" stroke="#3678F6" strokeWidth="2" />
          <line x1="712" y1="40" x2="712" y2="20" stroke="#3678F6" strokeWidth="2" />

          {/* Main Suspension Cables */}
          <path
            d="M 50 160 Q 188 50 450 40 Q 712 50 850 160"
            stroke="url(#cableGrad)"
            strokeWidth="3.5"
            fill="none"
          />

          {/* Roadway Bridge Deck */}
          <path
            d="M 50 160 C 200 155, 700 155, 850 160"
            stroke="url(#bridgeFlowGrad)"
            strokeWidth="4"
            fill="none"
          />

          {/* Vertical Suspenders */}
          {[100, 140, 240, 290, 340, 390, 510, 560, 610, 660, 760, 800].map((x) => (
            <line
              key={x}
              x1={x}
              y1={x < 450 ? 160 - (1 - Math.abs(x - 188) / 300) * 80 : 160 - (1 - Math.abs(x - 712) / 300) * 80}
              x2={x}
              y2="160"
              stroke="#334155"
              strokeWidth="1.2"
            />
          ))}

          {/* Animated Energy Flow on Bridge */}
          <circle cx="450" cy="158" r="6" fill="#42DCC5">
            <animate attributeName="cx" values="100;450;800;450;100" dur="14s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* 3 Interactive Pillar Stations */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
        {/* 1. Healthcare Pillar */}
        <button
          onClick={() => setCurrentView('healthcare')}
          className="group flex flex-col text-left p-4 rounded-xl bg-[#0B1628] border border-slate-800 hover:border-blue-500/50 hover:bg-[#122340] transition-all"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-[#3678F6]">
              <HeartPulse className="w-5 h-5" />
            </div>
            <span className="text-[11px] text-slate-400 group-hover:text-blue-400 flex items-center gap-1 transition-colors">
              {isEn ? 'Explore' : 'ನೋಡಿ'} <ArrowRight className="w-3 h-3" />
            </span>
          </div>
          <h4 className="text-sm font-bold text-white group-hover:text-[#42DCC5] transition-colors">
            {isEn ? '1. Healthcare Pillar' : '೧. ಆರೋಗ್ಯ ಆಧಾರಸ್ತಂಭ'}
          </h4>
          <p className="text-xs text-slate-400 mt-1 line-clamp-2">
            {isEn
              ? 'Ayushman Bharat, Arogya Karnataka, district hospitals & local Namma Clinics.'
              : 'ಆಯುಷ್ಮಾನ್ ಭಾರತ್, ಆರೋಗ್ಯ ಕರ್ನಾಟಕ, ಸರ್ಕಾರಿ ಜಿಲ್ಲಾ ಆಸ್ಪತ್ರೆಗಳು ಮತ್ತು ನಮ್ಮ ಕ್ಲಿನಿಕ್.'}
          </p>
        </button>

        {/* 2. Food & Ration Pillar */}
        <button
          onClick={() => setCurrentView('food_ration')}
          className="group flex flex-col text-left p-4 rounded-xl bg-[#0B1628] border border-slate-800 hover:border-amber-500/50 hover:bg-[#122340] transition-all"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Utensils className="w-5 h-5" />
            </div>
            <span className="text-[11px] text-slate-400 group-hover:text-amber-400 flex items-center gap-1 transition-colors">
              {isEn ? 'Explore' : 'ನೋಡಿ'} <ArrowRight className="w-3 h-3" />
            </span>
          </div>
          <h4 className="text-sm font-bold text-white group-hover:text-[#42DCC5] transition-colors">
            {isEn ? '2. Food Security Pillar' : '೨. ಆಹಾರ ಭದ್ರತೆ ಆಧಾರಸ್ತಂಭ'}
          </h4>
          <p className="text-xs text-slate-400 mt-1 line-clamp-2">
            {isEn
              ? 'Anna Bhagya grains, DBT cash equivalent, BPL/AAY ration cards & fair-price shops.'
              : 'ಅನ್ನಭಾಗ್ಯ ಉಚಿತ ಧಾನ್ಯ, ನಗದು ಡಿಬಿಟಿ, ಬಿಪಿಎಲ್/ಅಂತ್ಯೋದಯ ಪಡಿತರ ಹಾಗೂ ನ್ಯಾಯಬೆಲೆ ಅಂಗಡಿಗಳು.'}
          </p>
        </button>

        {/* 3. Education Pillar */}
        <button
          onClick={() => setCurrentView('education')}
          className="group flex flex-col text-left p-4 rounded-xl bg-[#0B1628] border border-slate-800 hover:border-teal-500/50 hover:bg-[#122340] transition-all"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-[#42DCC5]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="text-[11px] text-slate-400 group-hover:text-teal-400 flex items-center gap-1 transition-colors">
              {isEn ? 'Explore' : 'ನೋಡಿ'} <ArrowRight className="w-3 h-3" />
            </span>
          </div>
          <h4 className="text-sm font-bold text-white group-hover:text-[#42DCC5] transition-colors">
            {isEn ? '3. Education & Scholarships' : '೩. ಶಿಕ್ಷಣ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿವೇತನ'}
          </h4>
          <p className="text-xs text-slate-400 mt-1 line-clamp-2">
            {isEn
              ? 'Karnataka SSP, NSP, Vidyasiri food stipend, government ITIs & college fee concessions.'
              : 'ಕರ್ನಾಟಕ ಎಸ್‌ಎಸ್‌ಪಿ, ವಿದ್ಯಾಸಿರಿ ಊಟ-ವಸತಿ ಭತ್ಯೆ, ಸರ್ಕಾರಿ ಐಟಿಐ ಮತ್ತು ಕಾಲೇಜು ಶುಲ್ಕ ವಿನಾಯಿತಿ.'}
          </p>
        </button>
      </div>
    </div>
  );
};
