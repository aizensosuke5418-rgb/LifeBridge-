import React, { useState } from 'react';
import { 
  ShieldAlert, PhoneCall, AlertTriangle, ShieldCheck, 
  ExternalLink, FileText, Lock, Eye, AlertOctagon, 
  Search, CheckCircle2, ChevronRight, HelpCircle, Siren, 
  UserX, HeartHandshake, Phone, ArrowRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { 
  EMERGENCY_HELPLINES_DATABASE, 
  SCAM_ALERTS_DATABASE, 
  EmergencyHelpline, 
  ScamAlert 
} from '../../data/emergencyHelplines';

export const CyberPoliceHelplinesView: React.FC = () => {
  const { language } = useApp();
  const isEn = language === 'en';

  const [activeTab, setActiveTab] = useState<'helplines' | 'cybercrime_guide' | 'fir_guide' | 'scam_alerts' | 'missing_persons'>('helplines');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', labelEn: 'All Helplines', labelKn: 'ಎಲ್ಲಾ ಸಹಾಯವಾಣಿಗಳು' },
    { id: 'national_emergency', labelEn: 'National 112 & Police', labelKn: 'ರಾಷ್ಟ್ರೀಯ ೧೧೨ & ಪೊಲೀಸ್' },
    { id: 'cyber_financial', labelEn: 'Cyber & UPI Fraud (1930)', labelKn: 'ಸೈಬರ್ & ಯುಪಿಐ ವಂಚನೆ (೧೯೩೦)' },
    { id: 'women_safety', labelEn: 'Women Safety (1091/181)', labelKn: 'ಮಹಿಳಾ ರಕ್ಷಣೆ' },
    { id: 'child_elderly', labelEn: 'Child & Senior (1098/14567)', labelKn: 'ಮಕ್ಕಳು & ಹಿರಿಯ ನಾಗರಿಕರು' },
    { id: 'police_legal', labelEn: 'Legal Aid & Consumer', labelKn: 'ಕಾನೂನು ನೆರವು & ಗ್ರಾಹಕ' }
  ];

  const filteredHelplines = EMERGENCY_HELPLINES_DATABASE.filter(h => {
    const matchesCat = selectedCategory === 'all' || h.category === selectedCategory;
    const matchesSearch = 
      h.title.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.title.kn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.number.includes(searchQuery) ||
      h.purpose.en.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
      {/* Top Urgent Emergency Bar */}
      <div className="bg-gradient-to-r from-red-950/70 via-slate-900 to-amber-950/40 border border-red-800/40 rounded-2xl p-6 lg:p-8 mb-8 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full text-xs font-semibold text-red-300 mb-3">
              <Siren className="w-4 h-4 text-red-400 animate-pulse" />
              <span>{isEn ? '24/7 Citizen Emergency & Fraud Rescue' : '೨೪/೭ ತುರ್ತು ರಕ್ಷಣೆ ಮತ್ತು ಸೈಬರ್ ವಂಚನೆ ತಡೆ'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              {isEn ? 'Cybercrime, Police & Emergency Helplines' : 'ಸೈಬರ್ ಕ್ರೈಂ, ಪೊಲೀಸ್ ಮತ್ತು ತುರ್ತು ಸಹಾಯವಾಣಿಗಳ ಕೇಂದ್ರ'}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {isEn 
                ? 'Immediate action protocols for online financial fraud (1930 golden hour fund freeze), national emergency (112), FIR filing rights, scam defense, and verified police reporting portals.'
                : 'ಆನ್‌ಲೈನ್ ಹಣಕಾಸು ವಂಚನೆಯಾದರೆ ತಕ್ಷಣ ಹಣ ಫ್ರೀಜ್ ಮಾಡಲು ೧೯೩೦ ಕರೆ ಮಾಡಿ. ತುರ್ತು ರಕ್ಷಣೆಗೆ ೧೧೨, ಎಫ್‌ಐಆರ್ ದಾಖಲಿಸುವ ಮಾರ್ಗದರ್ಶಿ ಮತ್ತು ಸೈಬರ್ ವಂಚನೆಗಳ ಎಚ್ಚರಿಕೆ.'}
            </p>
          </div>

          {/* Quick Call Action Boxes */}
          <div className="flex flex-row sm:flex-col gap-2 shrink-0">
            <a
              href="tel:1930"
              className="px-4 py-2.5 bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-red-600/30 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{isEn ? 'Call 1930 (Cyber Fraud)' : '೧೯೩೦ ಗೆ ಕರೆ ಮಾಡಿ'}</span>
            </a>
            <a
              href="tel:112"
              className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/30 cursor-pointer"
            >
              <Siren className="w-4 h-4" />
              <span>{isEn ? 'Call 112 (Police / SOS)' : '೧೧೨ ಗೆ ಕರೆ ಮಾಡಿ (ಪೊಲೀಸ್)'}</span>
            </a>
          </div>
        </div>

        {/* Golden Hour Fraud Rule Banner */}
        <div className="mt-6 p-4 bg-red-950/40 border border-red-800/60 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertOctagon className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs sm:text-sm font-bold text-white">
                {isEn ? 'THE "GOLDEN HOUR" RULE FOR UPI & BANK SCAMS:' : 'ಯುಪಿಐ ಮತ್ತು ಬ್ಯಾಂಕ್ ವಂಚನೆಗೆ "ಗೋಲ್ಡನ್ ಅವರ್" ನಿಯಮ:'}
              </p>
              <p className="text-xs text-red-200 mt-0.5">
                {isEn 
                  ? 'If money was stolen via UPI, OTP fraud, or unauthorized debit, call 1930 within 2 hours. Police will trigger the CFCFRMS server to freeze stolen money before the scammer withdraws it at an ATM.'
                  : 'ಖಾತೆಯಿಂದ ಹಣ ಕಡಿತವಾದ ೨ ಗಂಟೆಯೊಳಗೆ ೧೯೩೦ ಗೆ ಕರೆ ಮಾಡಿದರೆ, ವಂಚಕನು ಎಟಿಎಂನಿಂದ ಹಣ ಡ್ರಾ ಮಾಡುವ ಮುನ್ನವೇ ಬ್ಯಾಂಕ್ ಮಟ್ಟದಲ್ಲೇ ಹಣವನ್ನು ಫ್ರೀಜ್ ಮಾಡಬಹುದು.'}
              </p>
            </div>
          </div>
          <a
            href="https://cybercrime.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 text-red-200 text-xs font-semibold rounded-lg shrink-0 flex items-center gap-1.5"
          >
            <span>cybercrime.gov.in</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-thin">
        {[
          { id: 'helplines', labelEn: 'All Emergency Helplines', labelKn: 'ಎಲ್ಲಾ ತುರ್ತು ಸಂಖ್ಯೆಗಳು' },
          { id: 'cybercrime_guide', labelEn: '1930 & Cybercrime Step-by-Step Guide', labelKn: '೧೯೩೦ ಸೈಬರ್ ಕ್ರೈಂ ದೂರು ಮಾರ್ಗದರ್ಶಿ' },
          { id: 'fir_guide', labelEn: 'How to File Police FIR & Zero FIR', labelKn: 'ಪೊಲೀಸ್ ಎಫ್‌ಐಆರ್ ದಾಖಲಿಸುವ ಹಕ್ಕುಗಳು' },
          { id: 'scam_alerts', labelEn: 'Latest Scam Alerts (Digital Arrest, Job Scam)', labelKn: 'ಇತ್ತೀಚಿನ ವಂಚನೆಗಳ ಎಚ್ಚರಿಕೆ' },
          { id: 'missing_persons', labelEn: 'Missing Persons & Child Rescue', labelKn: 'ನಾಪತ್ತೆಯಾದವರು & ಮಕ್ಕಳ ರಕ್ಷಣೆ' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === tab.id
                ? 'bg-[#3678F6] text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700/60'
            }`}
          >
            {isEn ? tab.labelEn : tab.labelKn}
          </button>
        ))}
      </div>

      {/* Tab 1: Helplines Directory */}
      {activeTab === 'helplines' && (
        <div className="space-y-6">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isEn ? "Search helplines (e.g. 1930, 112, women, police, child, cyber)..." : "ಸಹಾಯವಾಣಿ ಹುಡುಕಿ (೧೯೩೦, ೧೧೨, ಮಹಿಳಾ, ಪೊಲೀಸ್)..."}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#42DCC5]"
              />
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap cursor-pointer ${
                    selectedCategory === c.id
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  {isEn ? c.labelEn : c.labelKn}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredHelplines.map((item) => (
              <div 
                key={item.id}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-slate-700 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-extrabold text-white tracking-wider px-3 py-1 rounded-lg bg-red-600/20 text-red-300 border border-red-500/30">
                      {item.number}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {item.operatingHours}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1.5">
                    {isEn ? item.title.en : item.title.kn}
                  </h3>

                  <p className="text-xs text-slate-400 mb-3">
                    {isEn ? item.authority.en : item.authority.kn}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {isEn ? item.purpose.en : item.purpose.kn}
                  </p>

                  {/* Action Tip */}
                  <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 text-xs">
                    <p className="font-semibold text-[#42DCC5] mb-0.5">
                      {isEn ? 'Citizen Action Tip:' : 'ನಾಗರಿಕ ಸಲಹೆ:'}
                    </p>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      {isEn ? item.actionTip.en : item.actionTip.kn}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <a
                    href={`tel:${item.number.split('/')[0].trim()}`}
                    className="px-3.5 py-1.5 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>{isEn ? 'Call Now' : 'ಈಗಲೇ ಕರೆ ಮಾಡಿ'}</span>
                  </a>

                  {item.onlinePortal && (
                    <a
                      href={item.onlinePortal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-400 hover:text-white flex items-center gap-1"
                    >
                      <span>{isEn ? 'Portal' : 'ಪೋರ್ಟಲ್'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: 1930 & Cybercrime Reporting Guide */}
      {activeTab === 'cybercrime_guide' && (
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-2">
              {isEn ? 'Step-by-Step Cybercrime Reporting Protocol (1930 & Portal)' : '೧೯೩೦ ಮತ್ತು ಸೈಬರ್ ಕ್ರೈಂ ದೂರು ದಾಖಲಿಸುವ ಹಂತ-ಹಂತದ ವಿಧಾನ'}
            </h2>
            <p className="text-xs text-slate-400 mb-6">
              {isEn 
                ? 'Follow these immediate steps to recover stolen money or report social media harassment.'
                : 'ಹಣ ಕಳೆದುಕೊಂಡ ತಕ್ಷಣ ಅಥವಾ ಸಾಮಾಜಿಕ ಜಾಲತಾಣ ಕಿರುಕುಳಕ್ಕೆ ಒಳಗಾದಾಗ ಈ ಕ್ರಮಗಳನ್ನು ಅನುಸರಿಸಿ.'}
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-slate-800/60 border border-slate-700/60 rounded-xl flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-red-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {isEn ? 'Step 1: Note Down Critical Transaction Identifiers' : 'ಹಂತ ೧: ವಹಿವಾಟಿನ ಪ್ರಮುಖ ದಾಖಲೆಗಳನ್ನು ಗುರುತಿಸಿ'}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {isEn 
                      ? 'Before dialing 1930, keep these 4 details in front of you: (1) Your Bank Account Number, (2) The 12-digit UPI Transaction ID / UTR Number, (3) Exact debit timestamp, (4) Scammer’s mobile number / UPI ID.'
                      : '೧೯೩೦ ಗೆ ಕರೆ ಮಾಡುವ ಮುನ್ನ ಈ ೪ ವಿಷಯಗಳನ್ನು ಬರೆದಿಟ್ಟುಕೊಳ್ಳಿ: (೧) ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆ ಸಂಖ್ಯೆ, (೨) ೧೨ ಅಂಕಿಯ ಯುಪಿಐ ಟ್ರಾನ್ಸಾಕ್ಷನ್ ಐಡಿ (UTR), (೩) ಹಣ ಕಡಿತವಾದ ನಿಖರ ಸಮಯ, (೪) ವಂಚಕನ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ/ಯುಪಿಐ ಐಡಿ.'}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-800/60 border border-slate-700/60 rounded-xl flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-red-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {isEn ? 'Step 2: Dial 1930 & Lodge Incident Token' : 'ಹಂತ ೨: ೧೯೩೦ ಗೆ ಕರೆ ಮಾಡಿ ದೂರು ಟೋಕನ್ ಪಡೆಯಿರಿ'}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {isEn 
                      ? 'The national police cyber operator will enter your details into CFCFRMS (Citizen Financial Cyber Fraud Reporting System). An automated SMS with an Acknowledgement Number and login link will arrive on your phone.'
                      : 'ಪೊಲೀಸ್ ಆಪರೇಟರ್ ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಸಿಎಫ್‌ಸಿಎಫ್‌ಆರ್‌ಎಂಎಸ್ ವ್ಯವಸ್ಥೆಯಲ್ಲಿ ದಾಖಲಿಸುತ್ತಾರೆ. ನಿಮ್ಮ ಮೊಬೈಲ್‌ಗೆ ದೂರಿನ ಸಂಖ್ಯೆ (Acknowledgement Number) ಇರುವ ಎಸ್‌ಎಂಎಸ್ ಬರುತ್ತದೆ.'}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-800/60 border border-slate-700/60 rounded-xl flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-red-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  3
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {isEn ? 'Step 3: Complete Formal Report on cybercrime.gov.in within 24 Hours' : 'ಹಂತ ೩: ೨೪ ಗಂಟೆಗಳ ಒಳಗಾಗಿ cybercrime.gov.in ನಲ್ಲಿ ಪೂರ್ಣ ವಿವರ ಭರ್ತಿ ಮಾಡಿ'}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {isEn 
                      ? 'Log in to https://cybercrime.gov.in/ using your acknowledgement number. Upload bank statement showing deduction, screenshots of WhatsApp chats, or fake APK installation proof.'
                      : 'ಪೋರ್ಟಲ್‌ಗೆ ಲಾಗಿನ್ ಆಗಿ ಬ್ಯಾಂಕ್ ಸ್ಟೇಟ್‌ಮೆಂಟ್, ವಾಟ್ಸಾಪ್ ಚಾಟ್ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಅಥವಾ ನಕಲಿ ಆ್ಯಪ್ ಪುರಾವೆಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.'}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-800/60 border border-slate-700/60 rounded-xl flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  4
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {isEn ? 'Step 4: Court De-Freeze Order for Money Refund' : 'ಹಂತ ೪: ನ್ಯಾಯಾಲಯದ ಆದೇಶ ಪಡೆದು ಹಣವನ್ನು ಖಾತೆಗೆ ಮರಳಿ ಪಡೆಯಿರಿ'}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {isEn 
                      ? 'Once the fraudulent recipient bank account is frozen, file a simple application under CrPC Section 457 at the local Magistrate Court to transfer the seized money back to your bank account.'
                      : 'ಹಣ ಫ್ರೀಜ್ ಆದ ನಂತರ ಸ್ಥಳೀಯ ನ್ಯಾಯಾಲಯದಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ ಜಪ್ತಿಯಾದ ಹಣವನ್ನು ನಿಮ್ಮ ಖಾತೆಗೆ ಮರುಪಾವತಿ ಮಾಡಿಸಿಕೊಳ್ಳಬಹುದು.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: FIR Filing Rights & Zero FIR */}
      {activeTab === 'fir_guide' && (
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-2">
              {isEn ? 'Citizen Rights: FIR Filing & "Zero FIR" Guide' : 'ನಾಗರಿಕರ ಹಕ್ಕು: ಎಫ್‌ಐಆರ್ ಮತ್ತು "ಝೀರೋ ಎಫ್‌ಐಆರ್" ಮಾಹಿತಿ'}
            </h2>
            <p className="text-xs text-slate-400 mb-6">
              {isEn 
                ? 'Under Supreme Court ruling (Lalita Kumari vs Govt of UP), police officers CANNOT refuse to register an FIR for cognizable crimes.'
                : 'ಸುಪ್ರೀಂ ಕೋರ್ಟ್ ತೀರ್ಪಿನ ಪ್ರಕಾರ, ಗಂಭೀರ ಅಪರಾಧಗಳ ಬಗ್ಗೆ ದೂರು ನೀಡಿದಾಗ ಎಫ್‌ಐಆರ್ ದಾಖಲಿಸಲು ನಿರಾಕರಿಸುವ ಹಕ್ಕು ಯಾವುದೇ ಪೊಲೀಸ್ ಅಧಿಕಾರಿಗೆ ಇಲ್ಲ.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-slate-800/60 border border-slate-700/60 rounded-xl">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{isEn ? 'What is a "Zero FIR"?' : '"ಝೀರೋ ಎಫ್‌ಐಆರ್" ಎಂದರೇನು?'}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {isEn 
                    ? 'A Zero FIR can be filed at ANY police station in India, regardless of where the crime took place. The police cannot say "this is not our jurisdiction". They must register it under number 0 and transfer it to the concerned police station later.'
                    : 'ಘಟನೆ ಎಲ್ಲಿಯೇ ನಡೆದಿದ್ದರೂ, ಭಾರತದ ಯಾವುದೇ ಪೊಲೀಸ್ ಠಾಣೆಯಲ್ಲಿ ದೂರು ನೀಡಬಹುದು. "ಇದು ನಮ್ಮ ವ್ಯಾಪ್ತಿಗೆ ಬರುವುದಿಲ್ಲ" ಎಂದು ನಿರಾಕರಿಸುವಂತಿಲ್ಲ. ಅವರು ಸಂಖ್ಯೆ ೦ ಎಂದು ದಾಖಲಿಸಿ ನಂತರ ಸಂಬಂಧಪಟ್ಟ ಠಾಣೆಗೆ ವರ್ಗಾಯಿಸಬೇಕು.'}
                </p>
              </div>

              <div className="p-4 bg-slate-800/60 border border-slate-700/60 rounded-xl">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm mb-2">
                  <FileText className="w-4 h-4" />
                  <span>{isEn ? 'Right to Free Copy of FIR' : 'ಉಚಿತ ಎಫ್‌ಐಆರ್ ಪ್ರತಿ ಪಡೆಯುವ ಹಕ್ಕು'}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {isEn 
                    ? 'Under Section 154(2) of the Code of Criminal Procedure, the complainant has the absolute right to receive a signed physical copy of the registered FIR immediately, completely FREE of cost.'
                    : 'ಕಾನೂನಿನ ಪ್ರಕಾರ ದೂರುದಾರರಿಗೆ ಎಫ್‌ಐಆರ್ ನ ಅಧಿಕೃತ ನಕಲು ಪ್ರತಿಯನ್ನು ತಕ್ಷಣವೇ ಸಂಪೂರ್ಣ ಉಚಿತವಾಗಿ ನೀಡಬೇಕಾದುದು ಪೊಲೀಸರ ಕರ್ತವ್ಯ.'}
                </p>
              </div>
            </div>

            {/* What to do if police refuse */}
            <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-slate-300">
              <h4 className="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                {isEn ? 'What if a Police Station Refuses to Register Your FIR?' : 'ಪೊಲೀಸರು ಎಫ್‌ಐಆರ್ ದಾಖಲಿಸಲು ನಿರಾಕರಿಸಿದರೆ ಏನು ಮಾಡಬೇಕು?'}
              </h4>
              <p className="leading-relaxed">
                {isEn 
                  ? '1. Send your written complaint to the Superintendent of Police (SP) or City Police Commissioner by Registered Post with Ack Due (CrPC 154(3)). 2. Approach the nearest Judicial Magistrate under Section 156(3) with the help of a legal aid advocate to order an immediate FIR.'
                  : '೧. ನಿಮ್ಮ ಲಿಖಿತ ದೂರನ್ನು ಜಿಲ್ಲಾ ಪೊಲೀಸ್ ವರಿಷ್ಠಾಧಿಕಾರಿಗಳಿಗೆ (SP) ಅಥವಾ ಕಮಿಷನರ್‌ಗೆ ರಿಜಿಸ್ಟರ್ಡ್ ಪೋಸ್ಟ್ ಮೂಲಕ ಕಳುಹಿಸಿ. ೨. ಉಚಿತ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರದ ವಕೀಲರ ಮೂಲಕ ನ್ಯಾಯಾಲಯದಲ್ಲಿ ಸೆಕ್ಷನ್ ೧೫೬(೩) ಅಡಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ ತನಿಖೆಗೆ ಆದೇಶ ಪಡೆಯಿರಿ.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Latest Scam Alerts */}
      {activeTab === 'scam_alerts' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SCAM_ALERTS_DATABASE.map((scam) => (
              <div 
                key={scam.id}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 hover:border-red-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-500/10 text-red-400 border border-red-500/20">
                      SCAM ALERT
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {isEn ? scam.title.en : scam.title.kn}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {isEn ? scam.howItWorks.en : scam.howItWorks.kn}
                  </p>

                  <div className="p-3 bg-red-950/30 border border-red-800/40 rounded-xl mb-4 text-xs">
                    <p className="font-bold text-red-300 mb-0.5">{isEn ? 'Warning Sign:' : 'ಎಚ್ಚರಿಕೆಯ ಸಂಕೇತ:'}</p>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      {isEn ? scam.warningSign.en : scam.warningSign.kn}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-[11px] font-bold text-slate-400 mb-1.5">{isEn ? 'How to Protect Yourself:' : 'ರಕ್ಷಣೆ ಹೇಗೆ:'}</p>
                  <ul className="space-y-1">
                    {(isEn ? scam.preventionSteps.en : scam.preventionSteps.kn).map((step, idx) => (
                      <li key={idx} className="text-[11px] text-slate-300 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: Missing Persons & Child Rescue */}
      {activeTab === 'missing_persons' && (
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-2">
              {isEn ? 'Missing Person & Lost Child Reporting Protocols' : 'ನಾಪತ್ತೆಯಾದ ವ್ಯಕ್ತಿಗಳು ಮತ್ತು ಮಕ್ಕಳ ರಕ್ಷಣಾ ಪೋರ್ಟಲ್'}
            </h2>
            <p className="text-xs text-slate-400 mb-6">
              {isEn 
                ? 'Immediate government portals to broadcast details across all police control rooms and shelter homes.'
                : 'ದೇಶದ ಎಲ್ಲಾ ಪೊಲೀಸ್ ಠಾಣೆಗಳು ಮತ್ತು ಬಾಲಮಂದಿರಗಳಿಗೆ ಮಾಹಿತಿ ರವಾನಿಸುವ ಅಧಿಕೃತ ಸರ್ಕಾರಿ ವ್ಯವಸ್ಥೆ.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-slate-800/60 border border-slate-700/60 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-bold text-white">Khoya-Paya / TrackChild</h3>
                  <span className="text-xs font-bold text-blue-400">trackchild.gov.in</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {isEn 
                    ? 'Ministry of Women and Child Development national portal matching photos of missing children with children found across child care institutions nationwide.'
                    : 'ದೇಶದ ಎಲ್ಲಾ ಬಾಲಮಂದಿರಗಳಲ್ಲಿ ಪತ್ತೆಯಾಗುವ ಮಕ್ಕಳ ಫೋಟೋ ಮತ್ತು ವಿವರಗಳೊಂದಿಗೆ ಹೊಂದಾಣಿಕೆ ಮಾಡುವ ಅಧಿಕೃತ ಪೋರ್ಟಲ್.'}
                </p>
                <a
                  href="https://trackchild.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-400 hover:text-white flex items-center gap-1 font-semibold"
                >
                  <span>{isEn ? 'Open TrackChild Portal' : 'ಟ್ರ್ಯಾಕ್ ಚೈಲ್ಡ್ ಪೋರ್ಟಲ್'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="p-4 bg-slate-800/60 border border-slate-700/60 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-bold text-white">Karnataka Police Missing Portal</h3>
                  <span className="text-xs font-bold text-emerald-400">ksp.karnataka.gov.in</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {isEn 
                    ? 'Direct broadcast to all highway patrol vehicles, railway stations, bus stands, and district control rooms across Karnataka within 1 hour of filing.'
                    : 'ದೂರು ದಾಖಲಾದ ೧ ಗಂಟೆಯೊಳಗೆ ರಾಜ್ಯದ ಎಲ್ಲಾ ರೈಲ್ವೆ ನಿಲ್ದಾಣಗಳು, ಬಸ್ ನಿಲ್ದಾಣಗಳು ಮತ್ತು ಗಸ್ತು ವಾಹನಗಳಿಗೆ ಮಾಹಿತಿ ರವಾನೆ.'}
                </p>
                <a
                  href="https://ksp.karnataka.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-400 hover:text-white flex items-center gap-1 font-semibold"
                >
                  <span>{isEn ? 'Open KSP Citizen Portal' : 'ಕರ್ನಾಟಕ ಪೊಲೀಸ್ ಪೋರ್ಟಲ್'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
