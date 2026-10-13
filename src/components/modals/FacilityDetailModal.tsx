import React from 'react';
import { X, MapPin, Phone, Clock, Navigation, Bookmark, ShieldCheck, Check } from 'lucide-react';
import { PublicFacility } from '../../types';
import { useApp } from '../../context/AppContext';

interface FacilityDetailModalProps {
  facility: PublicFacility;
  onClose: () => void;
}

export const FacilityDetailModal: React.FC<FacilityDetailModalProps> = ({ facility, onClose }) => {
  const { language, isFacilitySaved, toggleSaveFacility, t } = useApp();
  const isEn = language === 'en';
  const saved = isFacilitySaved(facility.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#0F1E36] border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-start justify-between gap-4 bg-[#0B1628]">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="capitalize font-semibold text-[#42DCC5]">
                {facility.category.replace('_', ' ')}
              </span>
              <span aria-hidden="true">·</span>
              <span>{facility.district}</span>
            </div>
            <h3 className="text-lg font-bold text-white mt-1">
              {isEn ? facility.name.en : facility.name.kn}
            </h3>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => toggleSaveFacility(facility.id)}
              className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                saved
                  ? 'bg-blue-600/20 text-[#42DCC5] border-blue-500/40'
                  : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-white'
              }`}
              title={saved ? 'Saved in Wallet' : 'Save to Wallet'}
            >
              <Bookmark className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-4 text-xs md:text-sm">
          {/* Address */}
          <div className="flex items-start gap-2.5 text-slate-300">
            <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-white">{facility.locality}</p>
              <p className="text-xs text-slate-400 mt-0.5">{isEn ? facility.address.en : facility.address.kn}</p>
            </div>
          </div>

          {/* Timings */}
          {facility.timings && (
            <div className="flex items-start gap-2.5 text-slate-300">
              <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-white">{isEn ? 'Operating Hours' : 'ಕೆಲಸದ ಸಮಯ'}</p>
                <p className="text-xs text-slate-400 mt-0.5">{facility.timings}</p>
              </div>
            </div>
          )}

          {/* Contact */}
          {facility.contactNumber && (
            <div className="flex items-start gap-2.5 text-slate-300">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-white">{isEn ? 'Public Helpline / Phone' : 'ಸಾರ್ವಜನಿಕ ಸಹಾಯವಾಣಿ'}</p>
                <a
                  href={`tel:${facility.contactNumber}`}
                  className="text-xs text-blue-400 hover:underline font-mono mt-0.5 block"
                >
                  {facility.contactNumber}
                </a>
              </div>
            </div>
          )}

          {/* Services Provided */}
          <div className="pt-2">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              {isEn ? 'Key Public Services & Schemes Available' : 'ಲಭ್ಯವಿರುವ ಪ್ರಮುಖ ಸೇವೆಗಳು'}
            </h4>
            <div className="space-y-1.5">
              {(isEn ? facility.servicesProvided.en : facility.servicesProvided.kn).map((service, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2 rounded bg-[#0C172A] border border-slate-800 text-xs">
                  <Check className="w-3.5 h-3.5 text-[#42DCC5] shrink-0 mt-0.5" />
                  <span className="text-slate-200">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Source */}
          <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>{isEn ? 'Directory Source: ' : 'ಮಾಹಿತಿ ಮೂಲ: '}{facility.verifiedSource}</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-800 bg-[#0B1628] flex items-center justify-between gap-3">
          <button
            onClick={() => toggleSaveFacility(facility.id)}
            className={`px-3 py-2 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
              saved
                ? 'bg-blue-600/20 text-[#42DCC5] border-blue-500/40'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
          >
            {saved ? (isEn ? 'Saved in Wallet' : 'ವಾಲೆಟ್‌ನಲ್ಲಿದೆ') : (isEn ? 'Save Facility' : 'ಸೌಲಭ್ಯ ಉಳಿಸಿ')}
          </button>

          <a
            href={facility.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 text-xs font-semibold text-white bg-[#3678F6] hover:bg-blue-600 rounded-lg shadow-sm flex items-center gap-1.5 transition-colors"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>{isEn ? 'Get Directions (Maps)' : 'ಮಾರ್ಗ ನೋಡಿ (ನಕ್ಷೆ)'}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
