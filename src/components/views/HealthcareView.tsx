import React, { useState } from 'react';
import { 
  HeartPulse, Shield, MapPin, Phone, Clock, Navigation, CheckCircle2, 
  ExternalLink, ArrowRight, Building2, AlertCircle, FileText 
} from 'lucide-react';
import { PUBLIC_FACILITIES_DATABASE } from '../../data/facilities';
import { SCHEMES_DATABASE } from '../../data/schemes';
import { useApp } from '../../context/AppContext';
import { PublicFacility } from '../../types';

export const HealthcareView: React.FC = () => {
  const { language, setSelectedFacilityForDetail, setSelectedSchemeForDetail, setCurrentView } = useApp();
  const isEn = language === 'en';

  const [activeTab, setActiveTab] = useState<'all' | 'hospital' | 'phc' | 'chc'>('all');

  const healthFacilities = PUBLIC_FACILITIES_DATABASE.filter(f => 
    ['hospital', 'phc', 'chc'].includes(f.category)
  );

  const displayedFacilities = activeTab === 'all'
    ? healthFacilities
    : healthFacilities.filter(f => f.category === activeTab);

  const pmjayScheme = SCHEMES_DATABASE.find(s => s.id === 'ayushman-bharat-pmjay');

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 space-y-10">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs uppercase tracking-widest text-[#42DCC5] font-semibold">
          {isEn ? 'Civic Healthcare Navigator' : 'ಸಾರ್ವಜನಿಕ ಆರೋಗ್ಯ ಮಾರ್ಗದರ್ಶಿ'}
        </span>
        <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
          {isEn ? 'Public Healthcare & Free Treatment Services' : 'ಉಚಿತ ಸಾರ್ವಜನಿಕ ಆರೋಗ್ಯ ಸೇವೆಗಳು & ಆಸ್ಪತ್ರೆಗಳು'}
        </h1>
        <p className="text-xs md:text-sm text-slate-300 max-w-3xl leading-relaxed">
          {isEn
            ? 'Discover Ayushman Bharat PM-JAY and Arogya Karnataka cashless benefits up to ₹5 Lakhs, explore district hospitals and primary health centres, and understand the official patient referral pathway.'
            : 'ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ₹5 ಲಕ್ಷದ ನಗದು ರಹಿತ ಚಿಕಿತ್ಸೆ, ಸರ್ಕಾರಿ ಜಿಲ್ಲಾ ಆಸ್ಪತ್ರೆಗಳು, ಸಮುದಾಯ ಆರೋಗ್ಯ ಕೇಂದ್ರಗಳು ಮತ್ತು ನಮ್ಮ ಕ್ಲಿನಿಕ್ ವಿವರಗಳು.'}
        </p>
      </div>

      {/* Featured Banner: Ayushman Bharat PM-JAY & Arogya Karnataka */}
      <div className="p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-[#122442] via-[#0E1A30] to-[#0A1322] border border-blue-900/60 shadow-xl space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-semibold text-[#42DCC5]">
              <Shield className="w-3.5 h-3.5" />
              <span>{isEn ? 'Joint Central & State Programme (AB-ArK)' : 'ಕೇಂದ್ರ ಮತ್ತು ರಾಜ್ಯ ಸರ್ಕಾರದ ಸಂಯೋಜಿತ ಯೋಜನೆ'}</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
              {isEn ? 'Cashless Hospitalization up to ₹5,00,000 / Year' : 'ವರ್ಷಕ್ಕೆ ₹5,00,000 ವರೆಗೆ ಉಚಿತ ಆಸ್ಪತ್ರೆ ಚಿಕಿತ್ಸೆ'}
            </h2>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              {isEn
                ? 'Every eligible BPL / Priority family in Karnataka is covered for 1,600+ secondary and tertiary surgical & medical procedures in public and empaneled private hospitals. Non-BPL (APL) families receive 30% co-payment up to ₹1.5 Lakhs.'
                : 'ಬಿಪಿಎಲ್ ಕುಟುಂಬಗಳಿಗೆ 1,600ಕ್ಕೂ ಹೆಚ್ಚು ಚಿಕಿತ್ಸೆಗಳಿಗೆ ಸಂಪೂರ್ಣ ಉಚಿತ ರಕ್ಷಣೆ ಮತ್ತು ಎಪಿಎಲ್ ಕುಟುಂಬಗಳಿಗೆ ಶೇ.30 ರಿಯಾಯಿತಿ ದೊರೆಯುತ್ತದೆ.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0">
            {pmjayScheme && (
              <button
                onClick={() => setSelectedSchemeForDetail(pmjayScheme)}
                className="px-5 py-3 rounded-xl bg-[#3678F6] hover:bg-blue-600 text-white font-semibold text-xs md:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>{isEn ? 'View Full PM-JAY Eligibility' : 'ಅರ್ಹತೆ ಮತ್ತು ವಿವರ ನೋಡಿ'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
            <a
              href="https://beneficiary.nha.gov.in/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>{isEn ? 'Download Ayushman Card (NHA)' : 'ಆಯುಷ್ಮಾನ್ ಕಾರ್ಡ್ ಡೌನ್‌ಲೋಡ್'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4 Steps to Cashless Care in Karnataka */}
        <div className="pt-4 border-t border-slate-800/80">
          <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
            {isEn ? 'Official Treatment Pathway in Karnataka' : 'ಕರ್ನಾಟಕದಲ್ಲಿ ಚಿಕಿತ್ಸೆ ಪಡೆಯುವ ಅಧಿಕೃತ ಹಂತಗಳು'}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-[#09111E] border border-slate-800 space-y-1">
              <span className="text-[#42DCC5] font-bold font-mono">01. Primary Check</span>
              <p className="text-white font-medium">{isEn ? 'Visit PHC / Govt Hospital' : 'ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಗೆ ಭೇಟಿ'}</p>
              <p className="text-[11px] text-slate-400">
                {isEn ? 'Consult doctors at CHC, General or District Hospital first.' : 'ಮೊದಲು ಸಮುದಾಯ ಆರೋಗ್ಯ ಕೇಂದ್ರ ಅಥವಾ ತಾಲೂಕು ಆಸ್ಪತ್ರೆಗೆ ಭೇಟಿ ನೀಡಿ.'}
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#09111E] border border-slate-800 space-y-1">
              <span className="text-[#42DCC5] font-bold font-mono">02. Arogya Mitra Desk</span>
              <p className="text-white font-medium">{isEn ? 'Arogya Mitra Helpdesk' : 'ಆರೋಗ್ಯ ಮಿತ್ರ ಡೆಸ್ಕ್'}</p>
              <p className="text-[11px] text-slate-400">
                {isEn ? 'Present Ration Card and Aadhaar at the hospital front desk.' : 'ರೇಷನ್ ಕಾರ್ಡ್ ಮತ್ತು ಆಧಾರ್ ತೋರಿಸಿ ಅರ್ಹತೆ ದೃಢೀಕರಿಸಿಕೊಳ್ಳಿ.'}
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#09111E] border border-slate-800 space-y-1">
              <span className="text-[#42DCC5] font-bold font-mono">03. Referral Code</span>
              <p className="text-white font-medium">{isEn ? 'Referral to Private Care' : 'ಖಾಸಗಿ ಆಸ್ಪತ್ರೆಗೆ ರೆಫರಲ್'}</p>
              <p className="text-[11px] text-slate-400">
                {isEn ? 'If specialty is unavailable, government doctor issues online referral.' : 'ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಯಲ್ಲಿ ಚಿಕಿತ್ಸೆ ಇಲ್ಲದಿದ್ದರೆ ರೆಫರಲ್ ಕೋಡ್ ನೀಡಲಾಗುತ್ತದೆ.'}
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#09111E] border border-slate-800 space-y-1">
              <span className="text-[#42DCC5] font-bold font-mono">04. Cashless Care</span>
              <p className="text-white font-medium">{isEn ? 'Pre-Auth Admission' : 'ನಗದುರಹಿತ ಚಿಕಿತ್ಸೆ'}</p>
              <p className="text-[11px] text-slate-400">
                {isEn ? 'Admit under pre-authorized package with zero out-of-pocket costs.' : 'ಯಾವುದೇ ನಗದು ಪಾವತಿಯಿಲ್ಲದೆ ಉಚಿತವಾಗಿ ಚಿಕಿತ್ಸೆ ಪಡೆಯಿರಿ.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Verified Healthcare Facility Directory */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white">
              {isEn ? 'Verified Public Health Facilities in Bengaluru' : 'ಬೆಂಗಳೂರಿನ ಸಾರ್ವಜನಿಕ ಆರೋಗ್ಯ ಕೇಂದ್ರಗಳು'}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {isEn ? 'Real hospital contact info, OPD timings, and directions' : 'ನೈಜ ವಿಳಾಸ, ದೂರವಾಣಿ ಸಂಖ್ಯೆ ಮತ್ತು ಕೆಲಸದ ಸಮಯ'}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-[#0F1E36] rounded-xl border border-slate-700 text-xs shrink-0">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                activeTab === 'all' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {isEn ? 'All Facilities' : 'ಎಲ್ಲಾ'} ({healthFacilities.length})
            </button>
            <button
              onClick={() => setActiveTab('hospital')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                activeTab === 'hospital' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {isEn ? 'Hospitals' : 'ಆಸ್ಪತ್ರೆಗಳು'}
            </button>
            <button
              onClick={() => setActiveTab('phc')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                activeTab === 'phc' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {isEn ? 'PHCs / Namma Clinics' : 'ಪ್ರಾಥಮಿಕ ಕೇಂದ್ರ'}
            </button>
            <button
              onClick={() => setActiveTab('chc')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                activeTab === 'chc' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {isEn ? 'CHCs' : 'ಸಿಎಚ್‌ಸಿ'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedFacilities.map((facility) => (
            <div
              key={facility.id}
              className="rounded-2xl bg-[#0F1E36] border border-slate-800 p-5 flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="capitalize font-semibold text-[#42DCC5]">
                    {facility.category === 'hospital' ? 'General Hospital' : facility.category === 'phc' ? 'Urban PHC / Clinic' : 'Community Health Centre'}
                  </span>
                  <span>{facility.district}</span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#42DCC5] transition-colors">
                    {isEn ? facility.name.en : facility.name.kn}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{facility.locality} — {isEn ? facility.address.en : facility.address.kn}</span>
                  </p>
                </div>

                {facility.timings && (
                  <p className="text-xs text-slate-400 flex items-center gap-1.5 pt-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{facility.timings}</span>
                  </p>
                )}

                {facility.contactNumber && (
                  <p className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <a href={`tel:${facility.contactNumber}`} className="text-blue-400 hover:underline font-mono">
                      {facility.contactNumber}
                    </a>
                  </p>
                )}

                {/* Key services preview */}
                <div className="space-y-1 pt-1 text-xs">
                  {(isEn ? facility.servicesProvided.en : facility.servicesProvided.kn).slice(0, 2).map((s, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-slate-300">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedFacilityForDetail(facility)}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 cursor-pointer"
                >
                  {isEn ? 'View All Services' : 'ಎಲ್ಲಾ ಸೇವೆಗಳು'}
                </button>

                <a
                  href={facility.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-[#3678F6] text-white text-xs font-medium flex items-center gap-1 transition-colors"
                >
                  <Navigation className="w-3 h-3" />
                  <span>{isEn ? 'Directions' : 'ಮಾರ್ಗ'}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
