import React, { useState } from 'react';
import { 
  GraduationCap, BookOpen, Shield, MapPin, ExternalLink, ArrowRight, 
  CheckCircle2, Building2, ChevronRight, School, Award 
} from 'lucide-react';
import { SCHEMES_DATABASE } from '../../data/schemes';
import { PUBLIC_FACILITIES_DATABASE } from '../../data/facilities';
import { useApp } from '../../context/AppContext';

export const EducationView: React.FC = () => {
  const { language, setSelectedSchemeForDetail, setSelectedFacilityForDetail, setCurrentView } = useApp();
  const isEn = language === 'en';

  const [filterLevel, setFilterLevel] = useState<string>('all');

  const sspScheme = SCHEMES_DATABASE.find(s => s.id === 'karnataka-ssp-scholarship');
  const vidyasiriScheme = SCHEMES_DATABASE.find(s => s.id === 'karnataka-vidyasiri');

  const eduFacilities = PUBLIC_FACILITIES_DATABASE.filter(f => 
    ['school', 'college', 'iti'].includes(f.category)
  );

  const displayedFacilities = filterLevel === 'all'
    ? eduFacilities
    : eduFacilities.filter(f => f.category === filterLevel);

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 space-y-10">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs uppercase tracking-widest text-[#42DCC5] font-semibold">
          {isEn ? 'Civic Education & Scholarships' : 'ಶಿಕ್ಷಣ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿವೇತನ ಮಾರ್ಗದರ್ಶಿ'}
        </span>
        <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
          {isEn ? 'Scholarships, Fee Reimbursements & Public Colleges' : 'ವಿದ್ಯಾರ್ಥಿವೇತನ, ಶುಲ್ಕ ವಿನಾಯಿತಿ ಮತ್ತು ಸರ್ಕಾರಿ ಕಾಲೇಜುಗಳು'}
        </h1>
        <p className="text-xs md:text-sm text-slate-300 max-w-3xl leading-relaxed">
          {isEn
            ? 'Complete guide to Karnataka State Scholarship Portal (SSP), Vidyasiri hostel food stipends, National Scholarship Portal (NSP), and verified public schools, colleges, and ITIs.'
            : 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ವಿದ್ಯಾರ್ಥಿವೇತನ ತಂತ್ರಾಂಶ (ಎಸ್‌ಎಸ್‌ಪಿ), ವಿದ್ಯಾಸಿರಿ ಊಟ-ವಸತಿ ಭತ್ಯೆ, ಶುಲ್ಕ ಮರುಪಾವತಿ ಹಾಗೂ ಸರ್ಕಾರಿ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಗಳ ವಿವರ.'}
        </p>
      </div>

      {/* Featured: SSP & Vidyasiri Double Spotlight */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SSP Portal Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#122442] via-[#0E1A30] to-[#0A1322] border border-blue-900/60 flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-semibold text-[#42DCC5]">
              <Award className="w-3.5 h-3.5" />
              <span>{isEn ? 'Single-Window Portal for Karnataka' : 'ಕರ್ನಾಟಕದ ಏಕ ಗವಾಕ್ಷಿ ತಂತ್ರಾಂಶ'}</span>
            </div>
            <h2 className="text-xl lg:text-2xl font-bold text-white tracking-tight">
              {isEn ? 'Karnataka State Scholarship Portal (SSP)' : 'ರಾಜ್ಯ ವಿದ್ಯಾರ್ಥಿವೇತನ ತಂತ್ರಾಂಶ (SSP)'}
            </h2>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              {isEn
                ? 'Covers Pre-Matric, Post-Matric, and Full Fee Reimbursement for SC, ST, OBC, Minority, and EWS students across PUC, ITI, Diplomas, Degrees, and Engineering in Karnataka.'
                : 'ಪಿಯುಸಿ, ಐಟಿಐ, ಡಿಪ್ಲೋಮಾ, ಪದವಿ ಮತ್ತು ಸ್ನಾತಕೋತ್ತರ ವ್ಯಾಸಂಗ ಮಾಡುವ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಬೋಧನಾ ಶುಲ್ಕ ಮತ್ತು ನಿರ್ವಹಣಾ ಭತ್ಯೆ ಒದಗಿಸುತ್ತದೆ.'}
            </p>
            <div className="p-3 rounded-xl bg-[#09111E] border border-slate-800 text-xs text-slate-300 space-y-1">
              <span className="font-semibold text-blue-400">{isEn ? 'Key Requirement:' : 'ಪ್ರಮುಖ ಅವಶ್ಯಕತೆ:'}</span>
              <p className="text-[11px] text-slate-400">
                {isEn
                  ? 'Nadakacheri RD number for Caste & Income verification + Student SATS ID or University Reg No.'
                  : 'ನಾಡಕಚೇರಿಯ ಆರ್‌ಡಿ (RD) ಸಂಖ್ಯೆಯುಳ್ಳ ಜಾತಿ-ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ ಹಾಗೂ ಕಾಲೇಜು ನೋಂದಣಿ ಸಂಖ್ಯೆ ಕಡ್ಡಾಯ.'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80">
            {sspScheme && (
              <button
                onClick={() => setSelectedSchemeForDetail(sspScheme)}
                className="px-4 py-2.5 rounded-xl bg-[#3678F6] hover:bg-blue-600 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>{isEn ? 'View SSP Guide' : 'ಎಸ್‌ಎಸ್‌ಪಿ ಮಾರ್ಗದರ್ಶಿ'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
            <a
              href="https://ssp.postmatric.karnataka.gov.in/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors"
            >
              <span>{isEn ? 'Open SSP Portal' : 'ಎಸ್‌ಎಸ್‌ಪಿ ಪೋರ್ಟಲ್'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Vidyasiri Food & Accommodation Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1A1E29] via-[#121622] to-[#0B0F18] border border-teal-900/40 flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-xs font-semibold text-[#42DCC5]">
              <School className="w-3.5 h-3.5" />
              <span>{isEn ? 'Hostel Non-Allottee Welfare' : 'ಹಾಸ್ಟೆಲ್ ಸಿಗದ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ನೆರವು'}</span>
            </div>
            <h2 className="text-xl lg:text-2xl font-bold text-white tracking-tight">
              {isEn ? 'Vidyasiri Food & Accommodation Stipend' : 'ವಿದ್ಯಾಸಿರಿ (ಊಟ ಮತ್ತು ವಸತಿ ಸಹಾಯ ಯೋಜನೆ)'}
            </h2>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              {isEn
                ? 'Monthly direct allowance of ₹1,500 for 10 academic months (Total ₹15,000/year) for rural backward classes students studying in urban colleges who did not secure a government department hostel bed.'
                : 'ಸರ್ಕಾರಿ ಹಾಸ್ಟೆಲ್‌ಗಳಲ್ಲಿ ಪ್ರವೇಶ ಸಿಗದ ಗ್ರಾಮೀಣ ಬಡ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಬಾಡಿಗೆ ಮನೆ ಅಥವಾ ಪಿಜಿಗಳಲ್ಲಿ ಉಳಿದುಕೊಳ್ಳಲು 10 ತಿಂಗಳವರೆಗೆ ಮಾಸಿಕ ₹1,500 ನೆರವು.'}
            </p>
            <div className="p-3 rounded-xl bg-[#09111E] border border-slate-800 text-xs text-slate-300 space-y-1">
              <span className="font-semibold text-[#42DCC5]">{isEn ? 'Eligibility Tip:' : 'ಅರ್ಹತಾ ಸೂಚನೆ:'}</span>
              <p className="text-[11px] text-slate-400">
                {isEn
                  ? 'Student village must be minimum 5 km away from college, with family annual income under ₹2.5 Lakhs.'
                  : 'ಕಾಲೇಜು ಮತ್ತು ಮನೆಯ ನಡುವೆ ಕನಿಷ್ಠ 5 ಕಿಮೀ ಅಂತರವಿರಬೇಕು ಹಾಗೂ ಕುಟುಂಬದ ಆದಾಯ ₹2.5 ಲಕ್ಷದೊಳಗಿರಬೇಕು.'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80">
            {vidyasiriScheme && (
              <button
                onClick={() => setSelectedSchemeForDetail(vidyasiriScheme)}
                className="px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>{isEn ? 'View Vidyasiri Details' : 'ವಿದ್ಯಾಸಿರಿ ವಿವರಗಳು'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
            <a
              href="https://bcwd.karnataka.gov.in/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors"
            >
              <span>{isEn ? 'BCWD Karnataka' : 'ಬಿಸಿಡಬ್ಲ್ಯೂಡಿ ಇಲಾಖೆ'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Directory of Government Educational Institutions */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white">
              {isEn ? 'Government Schools, Colleges & ITIs in Bengaluru' : 'ಬೆಂಗಳೂರಿನ ಸರ್ಕಾರಿ ಶಾಲೆಗಳು, ಕಾಲೇಜುಗಳು ಮತ್ತು ಐಟಿಐಗಳು'}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {isEn ? 'Verified autonomous degree colleges, technical training ITIs, and schools' : 'ಸರ್ಕಾರಿ ಪದವಿ ಕಾಲೇಜುಗಳು, ತಾಂತ್ರಿಕ ತರಬೇತಿ ಸಂಸ್ಥೆಗಳು'}
            </p>
          </div>

          {/* Level Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-[#0F1E36] rounded-xl border border-slate-700 text-xs shrink-0">
            <button
              onClick={() => setFilterLevel('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                filterLevel === 'all' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {isEn ? 'All Institutions' : 'ಎಲ್ಲಾ'} ({eduFacilities.length})
            </button>
            <button
              onClick={() => setFilterLevel('college')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                filterLevel === 'college' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {isEn ? 'Colleges' : 'ಕಾಲೇಜುಗಳು'}
            </button>
            <button
              onClick={() => setFilterLevel('iti')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                filterLevel === 'iti' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {isEn ? 'ITIs & Vocational' : 'ಐಟಿಐ'}
            </button>
            <button
              onClick={() => setFilterLevel('school')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                filterLevel === 'school' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {isEn ? 'Schools' : 'ಶಾಲೆಗಳು'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedFacilities.map((fac) => (
            <div
              key={fac.id}
              className="rounded-2xl bg-[#0F1E36] border border-slate-800 p-5 flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="capitalize font-semibold text-[#42DCC5]">
                    {fac.category === 'college' ? 'Autonomous College' : fac.category === 'iti' ? 'Industrial Training ITI' : 'Government School'}
                  </span>
                  <span>{fac.district}</span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#42DCC5] transition-colors">
                    {isEn ? fac.name.en : fac.name.kn}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{fac.locality} — {isEn ? fac.address.en : fac.address.kn}</span>
                  </p>
                </div>

                {fac.timings && (
                  <p className="text-xs text-slate-400">
                    <strong className="text-slate-300">{isEn ? 'Hours: ' : 'ಸಮಯ: '}</strong>
                    {fac.timings}
                  </p>
                )}

                {/* Key services preview */}
                <div className="space-y-1 pt-1 text-xs">
                  {(isEn ? fac.servicesProvided.en : fac.servicesProvided.kn).slice(0, 2).map((s, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-slate-300">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedFacilityForDetail(fac)}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 cursor-pointer"
                >
                  {isEn ? 'View Facilities' : 'ವಿವರ ನೋಡಿ'}
                </button>

                <a
                  href={fac.directionsUrl}
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
