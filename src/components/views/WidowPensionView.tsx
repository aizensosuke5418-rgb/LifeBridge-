import React, { useState } from 'react';
import { 
  Heart, ShieldCheck, Banknote, FileText, CheckCircle2, 
  ExternalLink, Phone, AlertTriangle, Home, BookOpen, 
  Scale, Calendar, Users, HelpCircle, ArrowRight, CheckSquare, Square
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { WIDOW_WELFARE_DATABASE, WidowWelfareScheme } from '../../data/widowWelfare';

export const WidowPensionView: React.FC = () => {
  const { language, setCurrentView } = useApp();
  const isEn = language === 'en';

  const [selectedScheme, setSelectedScheme] = useState<WidowWelfareScheme>(WIDOW_WELFARE_DATABASE[0]);
  const [activeTab, setActiveTab] = useState<'overview' | 'steps' | 'documents' | 'remarriage_housing' | 'complaints'>('overview');
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});

  const toggleDoc = (doc: string) => {
    setCheckedDocs(prev => ({ ...prev, [doc]: !prev[doc] }));
  };

  const helplineCards = [
    {
      number: '181 / 1091',
      titleEn: 'Women Helpline & Distress Rescue',
      titleKn: 'ಮಹಿಳಾ ಸುರಕ್ಷತಾ ಸಹಾಯವಾಣಿ',
      descEn: '24/7 immediate police intervention, counseling, and shelter home access',
      descKn: '೨೪/೭ ತುರ್ತು ಪೊಲೀಸ್ ನೆರವು ಮತ್ತು ಆಶ್ರಯ ಮನೆ'
    },
    {
      number: '155214',
      titleEn: 'Karnataka Pension / Revenue Helpline',
      titleKn: 'ಕರ್ನಾಟಕ ಪಿಂಚಣಿ / ಕಂದಾಯ ಸಹಾಯವಾಣಿ',
      descEn: 'Track monthly DBT deposit date, check status with RD / Acknowledgement number',
      descKn: 'ತಿಂಗಳ ಪಿಂಚಣಿ ಜಮೆ ಸ್ಥಿತಿ ಮತ್ತು ಆರ್‌ಡಿ ಸಂಖ್ಯೆ ಪರಿಶೀಲನೆ'
    },
    {
      number: '15100',
      titleEn: 'NALSA / KSLSA Free Legal Aid',
      titleKn: 'ಉಚಿತ ಕಾನೂನು ಸೇವೆಗಳ ಪ್ರಾಧಿಕಾರ',
      descEn: 'Free government advocates for property disputes, husband’s family eviction, wills',
      descKn: 'ಆಸ್ತಿ ಹಕ್ಕು ಮತ್ತು ಕೌಟುಂಬಿಕ ವಿವಾದಗಳಿಗೆ ಉಚಿತ ವಕೀಲರ ಸೇವೆ'
    },
    {
      number: '1902',
      titleEn: 'Janaspandana CM Grievance Cell',
      titleKn: 'ಜನಸ್ಪಂದನ ಮುಖ್ಯಮಂತ್ರಿ ಪರಿಹಾರ ಕೋಶ',
      descEn: 'Escalate pension stopped for more than 60 days without reason',
      descKn: 'ಪಿಂಚಣಿ ನಿಂತುಹೋದರೆ ನೇರ ಮುಖ್ಯಮಂತ್ರಿಗಳ ದೂರು ವಿಭಾಗ'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-rose-950/40 via-slate-900 to-indigo-950/50 border border-rose-800/30 rounded-2xl p-6 lg:p-8 mb-8 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/10 border border-rose-400/30 rounded-full text-xs font-semibold text-rose-300 mb-3">
              <Heart className="w-3.5 h-3.5 text-rose-400" />
              <span>{isEn ? 'Social Security & Dignity for Widows' : 'ವಿಧವಾ ಮಹಿಳೆಯರಿಗೆ ಸಾಮಾಜಿಕ ಭದ್ರತೆ ಮತ್ತು ಗೌರವ'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              {isEn ? 'Widow Pension Schemes & Family Welfare Guide' : 'ವಿಧವಾ ವೇತನ ಪಿಂಚಣಿ ಮತ್ತು ಕುಟುಂಬ ಕಲ್ಯಾಣ ಸಮಗ್ರ ಮಾರ್ಗದರ್ಶಿ'}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {isEn 
                ? 'Complete guidance on Karnataka Destitute Widow Pension (₹1,200/month), Central IGNWPS, how to apply via Nadakacheri, remarriage incentives up to ₹3 Lakhs, children scholarships, free legal aid, and pension delay resolution.'
                : 'ಕರ್ನಾಟಕ ವಿಧವಾ ವೇತನ (ಮಾಸಿಕ ₹1,200), ಕೇಂದ್ರ ಸರ್ಕಾರದ ಪಿಂಚಣಿ, ಅರ್ಜಿ ಸಲ್ಲಿಕೆ ವಿಧಾನ, ಮರುಮದುವೆ ಪ್ರೋತ್ಸಾಹಧನ ₹3 ಲಕ್ಷ, ಮಕ್ಕಳ ಉಚಿತ ಶಿಕ್ಷಣ, ಉಚಿತ ವಕೀಲರ ಸೇವೆ ಮತ್ತು ತಡೆಹಿಡಿದ ಪಿಂಚಣಿ ಪರಿಹಾರ.'}
            </p>
          </div>

          <div className="flex flex-col gap-2 shrink-0">
            <a
              href="https://nadakacheri.karnataka.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-rose-600 hover:bg-rose-500 text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-rose-600/20"
            >
              <span>{isEn ? 'Apply on Nadakacheri' : 'ನಾಡಕಚೇರಿಯಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <span className="text-[11px] text-slate-400 text-center">
              {isEn ? 'Direct Bank Transfer (DBT) • Lifelong Support' : 'ನೇರ ನಗದು ಜಮೆ (DBT) • ಜೀವಮಾನ ಭದ್ರತೆ'}
            </span>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-800/80">
          <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
            <p className="text-xs text-slate-400">{isEn ? 'Monthly Pension' : 'ಮಾಸಿಕ ಪಿಂಚಣಿ'}</p>
            <p className="text-lg font-bold text-emerald-400 mt-0.5">₹1,200 / {isEn ? 'mo' : 'ತಿಂಗಳು'}</p>
            <p className="text-[10px] text-slate-400">{isEn ? 'Deposited 1st–10th' : 'ಪ್ರತಿ ತಿಂಗಳ ೧-೧೦ ರಂದು ಜಮೆ'}</p>
          </div>
          <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
            <p className="text-xs text-slate-400">{isEn ? 'Remarriage Grant' : 'ಮರುಮದುವೆ ಪ್ರೋತ್ಸಾಹ'}</p>
            <p className="text-lg font-bold text-amber-400 mt-0.5">₹3,00,000</p>
            <p className="text-[10px] text-slate-400">{isEn ? 'One-time incentive' : 'ಸರ್ಕಾರದ ಪ್ರೋತ್ಸಾಹ ಧನ'}</p>
          </div>
          <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
            <p className="text-xs text-slate-400">{isEn ? 'Children Education' : 'ಮಕ್ಕಳ ಶಿಕ್ಷಣ'}</p>
            <p className="text-lg font-bold text-blue-400 mt-0.5">100% Free</p>
            <p className="text-[10px] text-slate-400">{isEn ? 'Morarji Desai / SSP' : 'ವಸತಿ ಶಾಲೆ & ಶುಲ್ಕ ವಿನಾಯಿತಿ'}</p>
          </div>
          <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
            <p className="text-xs text-slate-400">{isEn ? 'Housing Priority' : 'ಮನೆ ನಿರ್ಮಾಣ ಸಬ್ಸಿಡಿ'}</p>
            <p className="text-lg font-bold text-purple-400 mt-0.5">₹1.75 Lakh</p>
            <p className="text-[10px] text-slate-400">{isEn ? 'Ambedkar Niwas Quota' : 'ಆಶ್ರಯ ವಸತಿ ಯೋಜನೆ'}</p>
          </div>
        </div>
      </div>

      {/* Scheme Selector Tabs */}
      <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-3">
        {WIDOW_WELFARE_DATABASE.map((s) => (
          <button
            key={s.id}
            onClick={() => setSelectedScheme(s)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedScheme.id === s.id
                ? 'bg-rose-600 text-white shadow-lg shadow-rose-900/30'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80'
            }`}
          >
            {isEn ? s.name.en : s.name.kn}
          </button>
        ))}
      </div>

      {/* Sub-nav Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-thin">
        {[
          { id: 'overview', labelEn: 'Overview & Benefits', labelKn: 'ವಿವರ & ಸವಲತ್ತುಗಳು' },
          { id: 'steps', labelEn: 'Application Steps (Online/Offline)', labelKn: 'ಅರ್ಜಿ ಸಲ್ಲಿಸುವ ಹಂತಗಳು' },
          { id: 'documents', labelEn: 'Mandatory Documents Checklist', labelKn: 'ದಾಖಲೆಗಳ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ' },
          { id: 'remarriage_housing', labelEn: 'Remarriage, Housing & Children', labelKn: 'ಮರುಮದುವೆ, ವಸತಿ & ಮಕ್ಕಳು' },
          { id: 'complaints', labelEn: 'Helplines & Pension Delays', labelKn: 'ಸಹಾಯವಾಣಿ & ದೂರು ಪರಿಹಾರ' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
              activeTab === tab.id
                ? 'bg-[#3678F6] text-white font-semibold'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700/60'
            }`}
          >
            {isEn ? tab.labelEn : tab.labelKn}
          </button>
        ))}
      </div>

      {/* Main Tab Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (Content) */}
        <div className="lg:col-span-2 space-y-6">
          {activeTab === 'overview' && (
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-2">
                {isEn ? selectedScheme.name.en : selectedScheme.name.kn}
              </h2>
              <p className="text-xs text-slate-400 mb-4">
                {isEn ? selectedScheme.authority.en : selectedScheme.authority.kn}
              </p>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {isEn ? selectedScheme.description.en : selectedScheme.description.kn}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-800/60 rounded-xl border border-slate-700/60 mb-6 text-xs">
                <div>
                  <p className="text-slate-400">{isEn ? 'Monthly Pension' : 'ಮಾಸಿಕ ಪಿಂಚಣಿ'}</p>
                  <p className="font-bold text-emerald-400 text-sm mt-0.5">{isEn ? selectedScheme.pensionAmount.en : selectedScheme.pensionAmount.kn}</p>
                </div>
                <div>
                  <p className="text-slate-400">{isEn ? 'Age Limit' : 'ವಯೋಮಿತಿ'}</p>
                  <p className="font-semibold text-white mt-0.5">{isEn ? selectedScheme.ageLimit.en : selectedScheme.ageLimit.kn}</p>
                </div>
                <div>
                  <p className="text-slate-400">{isEn ? 'Income Ceiling' : 'ಆದಾಯ ಮಿತಿ'}</p>
                  <p className="font-semibold text-white mt-0.5">{isEn ? selectedScheme.incomeCeiling.en : selectedScheme.incomeCeiling.kn}</p>
                </div>
              </div>

              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {isEn ? 'Key Benefits & Entitlements:' : 'ಪ್ರಮುಖ ಸವಲತ್ತುಗಳು:'}
              </h3>
              <div className="space-y-2 mb-6">
                {(isEn ? selectedScheme.keyBenefits.en : selectedScheme.keyBenefits.kn).map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 bg-slate-800/40 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-[10px]">
                      {idx + 1}
                    </span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Crucial Insight on Gruha Lakshmi Convergence */}
              <div className="p-4 bg-blue-950/40 border border-blue-800/50 rounded-xl text-xs text-blue-200">
                <p className="font-bold mb-1 flex items-center gap-1.5 text-[#42DCC5]">
                  <ShieldCheck className="w-4 h-4" />
                  {isEn ? 'Double Benefit Convergence in Karnataka:' : 'ಕರ್ನಾಟಕದಲ್ಲಿ ದ್ವಿಗುಣ ಸೌಲಭ್ಯದ ಮಾಹಿತಿ:'}
                </p>
                <p className="leading-relaxed text-slate-300">
                  {isEn 
                    ? 'Receiving Karnataka Widow Pension (₹1,200/mo) DOES NOT DISQUALIFY the woman from Karnataka Gruha Lakshmi (₹2,000/mo). If she is listed as the female head of the family on the BPL ration card, she is fully eligible to receive BOTH benefits, amounting to ₹3,200 per month.'
                    : 'ವಿಧವಾ ವೇತನ (₹1,200) ಪಡೆಯುವ ಮಹಿಳೆಯರು ಕರ್ನಾಟಕ ಗೃಹಲಕ್ಷ್ಮಿ ಯೋಜನೆಗೂ (₹2,000) ಅರ್ಹರಾಗಿರುತ್ತಾರೆ. ಬಿಪಿಎಲ್ ಪಡಿತರ ಚೀಟಿಯಲ್ಲಿ ಕುಟುಂಬದ ಯಜಮಾನಿಯಾಗಿದ್ದರೆ ಎರಡೂ ಸೇರಿ ಒಟ್ಟು ₹3,200 ಪ್ರತಿ ತಿಂಗಳು ಪಡೆಯಬಹುದು.'}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'steps' && (
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-2">
                {isEn ? 'Step-by-Step Application Procedure' : 'ಹಂತ-ಹಂತವಾಗಿ ಅರ್ಜಿ ಸಲ್ಲಿಸುವ ವಿಧಾನ'}
              </h2>
              <p className="text-xs text-slate-400 mb-6">
                {isEn ? 'Follow this authentic procedure to ensure smooth approval within 21 working days.' : '೨೧ ಕೆಲಸದ ದಿನಗಳಲ್ಲಿ ಮಂಜೂರಾತಿ ಪಡೆಯಲು ಈ ಅಧಿಕೃತ ಹಂತಗಳನ್ನು ಪಾಲಿಸಿ.'}
              </p>

              <div className="space-y-4">
                {(isEn ? selectedScheme.applicationSteps.en : selectedScheme.applicationSteps.kn).map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-4 bg-slate-800/50 border border-slate-700/60 rounded-xl">
                    <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-white leading-relaxed">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-200">
                <p className="font-bold mb-1 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  {isEn ? 'Important Advice on Unremarried Certificate:' : 'ಮರುಮದುವೆಯಾಗದಿರುವ ದೃಢೀಕರಣದ ಬಗ್ಗೆ ಎಚ್ಚರಿಕೆ:'}
                </p>
                <p className="text-slate-300 leading-relaxed">
                  {isEn 
                    ? 'Do not pay any middlemen or touts for unremarried certification. A simple self-affidavit endorsed by the local Village Accountant (Grama Lekkiga) or Panchayat Development Officer (PDO) is officially sufficient.'
                    : 'ಮರುಮದುವೆಯಾಗಿಲ್ಲ ಎಂಬ ಪ್ರಮಾಣಪತ್ರಕ್ಕೆ ಮಧ್ಯವರ್ತಿಗಳಿಗೆ ಹಣ ನೀಡಬೇಡಿ. ಸ್ಥಳೀಯ ಗ್ರಾಮ ಲೆಕ್ಕಿಗರು ಅಥವಾ ಪಿಡಿಒ ನೀಡುವ ದೃಢೀಕರಣವೇ ಸಾಕಾಗುತ್ತದೆ.'}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-bold text-white">
                    {isEn ? 'Mandatory Documents Checklist' : 'ಕಡ್ಡಾಯ ದಾಖಲೆಗಳ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ'}
                  </h2>
                  <p className="text-xs text-slate-400">
                    {isEn ? 'Tick the documents you have ready before visiting the kiosk' : 'ಕೇಂದ್ರಕ್ಕೆ ಭೇಟಿ ನೀಡುವ ಮುನ್ನ ನಿಮ್ಮಲ್ಲಿರುವ ದಾಖಲೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ'}
                  </p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/20 text-[#42DCC5]">
                  {Object.values(checkedDocs).filter(Boolean).length} / {selectedScheme.mandatoryDocuments.en.length} {isEn ? 'Ready' : 'ಸಿದ್ಧ'}
                </span>
              </div>

              <div className="space-y-3 mb-6">
                {(isEn ? selectedScheme.mandatoryDocuments.en : selectedScheme.mandatoryDocuments.kn).map((doc, idx) => {
                  const isChecked = !!checkedDocs[doc];
                  return (
                    <div 
                      key={idx}
                      onClick={() => toggleDoc(doc)}
                      className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all cursor-pointer ${
                        isChecked 
                          ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-100'
                          : 'bg-slate-800/40 border-slate-700/60 text-slate-300 hover:bg-slate-800/80'
                      }`}
                    >
                      <button className="mt-0.5 text-blue-400 cursor-pointer">
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-500" />
                        )}
                      </button>
                      <div className="text-xs leading-relaxed font-medium">
                        {doc}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-4 bg-slate-800/60 border border-slate-700 rounded-xl text-xs text-slate-300">
                <p className="font-bold text-white mb-1">
                  {isEn ? 'Crucial Banking Rule (NPCI Mapping):' : 'ಬ್ಯಾಂಕ್ ಖಾತೆಯ ಕಡ್ಡಾಯ ನಿಯಮ (NPCI ಮ್ಯಾಪಿಂಗ್):'}
                </p>
                <p className="leading-relaxed">
                  {isEn 
                    ? 'Pension payments fail if your bank account is not mapped on the NPCI Aadhaar Bridge. When visiting your bank branch, ask the cashier specifically for: "Aadhaar DBT / NPCI Seeding Confirmation Form".'
                    : 'ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಎನ್‌ಪಿಸಿಐ ಮ್ಯಾಪಿಂಗ್ ಆಗದಿದ್ದರೆ ಪಿಂಚಣಿ ಹಣ ಜಮೆಯಾಗುವುದಿಲ್ಲ. ಬ್ಯಾಂಕ್‌ಗೆ ಹೋಗಿ "ಆಧಾರ್ ಡಿಬಿಟಿ ಸೀಡಿಂಗ್ ಫಾರ್ಮ್" ಭರ್ತಿ ಮಾಡಿ ನೀಡಿ.'}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'remarriage_housing' && (
            <div className="space-y-4">
              {/* Remarriage Grant */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                    <Heart className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {isEn ? 'Widow Remarriage Promotion Grant (₹3,00,000)' : 'ವಿಧವಾ ಮರುಮದುವೆ ಪ್ರೋತ್ಸಾಹಧನ (₹3 ಲಕ್ಷ)'}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {isEn ? 'Department of Women & Child Development, Karnataka' : 'ಮಹಿಳಾ ಮತ್ತು ಮಕ್ಕಳ ಅಭಿವೃದ್ಧಿ ಇಲಾಖೆ'}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {isEn ? selectedScheme.remarriageRule.en : selectedScheme.remarriageRule.kn}
                </p>
                <div className="p-3 bg-amber-950/20 border border-amber-800/30 rounded-xl text-xs text-amber-200">
                  <p className="font-semibold">{isEn ? 'Eligibility Note:' : 'ಅರ್ಹತಾ ನಿಯಮ:'}</p>
                  <p className="text-slate-300 mt-0.5">
                    {isEn 
                      ? 'The marriage must be officially registered under the Special Marriage Act or Hindu Marriage Act with Sub-Registrar within 6 months of marriage.'
                      : 'ವಿವಾಹವು ಉಪನೋಂದಣಾಧಿಕಾರಿ (Sub-Registrar) ಕಚೇರಿಯಲ್ಲಿ ಅಧಿಕೃತವಾಗಿ ನೋಂದಣಿಯಾಗಿರಬೇಕು.'}
                  </p>
                </div>
              </div>

              {/* Children Education */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {isEn ? 'Special Scholarship & Residential Seats for Children' : 'ಮಕ್ಕಳಿಗೆ ಉಚಿತ ಶಿಕ್ಷಣ ಮತ್ತು ವಸತಿ ಶಾಲಾ ಸೌಲಭ್ಯ'}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {isEn ? 'Morarji Desai Residential Schools & State Scholarship Portal' : 'ಮೊರಾರ್ಜಿ ದೇಸಾಯಿ ವಸತಿ ಶಾಲೆಗಳು ಮತ್ತು ಎಸ್‌ಎಸ್‌ಪಿ'}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {isEn ? selectedScheme.childrenEducationSupport.en : selectedScheme.childrenEducationSupport.kn}
                </p>
              </div>

              {/* Housing & Free Legal Aid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Home className="w-4 h-4 text-emerald-400" />
                    <h4 className="text-xs font-bold text-white">{isEn ? 'Housing Help for Widows' : 'ವಸತಿ ನೆರವು'}</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isEn ? selectedScheme.housingSupport.en : selectedScheme.housingSupport.kn}
                  </p>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Scale className="w-4 h-4 text-purple-400" />
                    <h4 className="text-xs font-bold text-white">{isEn ? 'Free Legal Aid for Property & In-laws' : 'ಉಚಿತ ಕಾನೂನು ನೆರವು'}</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isEn ? selectedScheme.freeLegalAid.en : selectedScheme.freeLegalAid.kn}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'complaints' && (
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-2">
                {isEn ? 'Resolving Delayed or Stopped Pension Payments' : 'ಪಿಂಚಣಿ ವಿಳಂಬ ಅಥವಾ ತಡೆಹಿಡಿದ ಹಣ ಬಿಡುಗಡೆಗೆ ಪರಿಹಾರ'}
              </h2>
              <p className="text-xs text-slate-400 mb-6">
                {isEn ? 'If your monthly ₹1,200 has not been credited, here is the official 3-step escalation protocol.' : 'ನಿಮ್ಮ ಖಾತೆಗೆ ಪಿಂಚಣಿ ಬಾರದಿದ್ದರೆ ಈ ಮೂರು ಹಂತಗಳನ್ನು ಅನುಸರಿಸಿ.'}
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-4 bg-slate-800/50 border border-slate-700/60 rounded-xl">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-400 mb-1">
                    <span>{isEn ? 'Step 1: Check NPCI Status at Bank' : 'ಹಂತ ೧: ಬ್ಯಾಂಕ್‌ನಲ್ಲಿ ಎನ್‌ಪಿಸಿಐ ಸ್ಥಿತಿ ಪರಿಶೀಲನೆ'}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isEn 
                      ? 'In 80% of delay cases, the bank has unlinked the Aadhaar bridge. Request the bank branch to re-seed your Aadhaar with NPCI Direct Benefit Transfer.'
                      : 'ಶೇ. ೮೦ ರಷ್ಟು ಪ್ರಕರಣಗಳಲ್ಲಿ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಆಧಾರ್ ಡಿಬಿಟಿ ಅನ್‌ಲಿಂಕ್ ಆಗಿರುತ್ತದೆ. ಬ್ಯಾಂಕ್‌ಗೆ ತೆರಳಿ ಮರು-ಲಿಂಕ್ ಮಾಡಿಸಿ.'}
                  </p>
                </div>

                <div className="p-4 bg-slate-800/50 border border-slate-700/60 rounded-xl">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-400 mb-1">
                    <span>{isEn ? 'Step 2: Visit Taluk Tahsildar / Nadakacheri' : 'ಹಂತ ೨: ತಾಲೂಕು ತಹಶೀಲ್ದಾರ್ ಕಚೇರಿ / ನಾಡಕಚೇರಿ'}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isEn 
                      ? 'Quote your Pension Sanction Order Number. Check if your Annual Life Certificate (Jeevan Pramaan) or Unremarried renewal was missed.'
                      : 'ನಿಮ್ಮ ಪಿಂಚಣಿ ಮಂಜೂರಾತಿ ಸಂಖ್ಯೆ ನೀಡಿ, ವಾರ್ಷಿಕ ಜೀವನ ಪ್ರಮಾಣಪತ್ರ ಬಾಕಿ ಇದೆಯೇ ಎಂದು ವಿಚಾರಿಸಿ.'}
                  </p>
                </div>

                <div className="p-4 bg-slate-800/50 border border-slate-700/60 rounded-xl">
                  <div className="flex items-center gap-2 text-xs font-bold text-rose-400 mb-1">
                    <span>{isEn ? 'Step 3: File Online Grievance on Janaspandana (CM Helpline 1902)' : 'ಹಂತ ೩: ಜನಸ್ಪಂದನ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ದೂರು ದಾಖಲಿಸಿ (೧೯೦೨)'}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isEn 
                      ? 'Call 1902 toll-free or file a complaint on janaspandana.karnataka.gov.in. A formal complaint ticket will be issued with a mandatory 14-day officer disposal deadline.'
                      : '೧೯೦೨ ಗೆ ಕರೆ ಮಾಡಿ ದೂರು ದಾಖಲಿಸಿ. ಅಧಿಕಾರಿಗಳಿಗೆ ೧೪ ದಿನಗಳಲ್ಲಿ ಪರಿಹರಿಸುವ ಕಡ್ಡಾಯ ಆದೇಶ ಹೋಗುತ್ತದೆ.'}
                  </p>
                </div>
              </div>

              {/* Swadhar Greh Shelter Home info */}
              <div className="p-4 bg-blue-950/30 border border-blue-800/40 rounded-xl">
                <h4 className="text-xs font-bold text-[#42DCC5] mb-1">
                  {isEn ? 'Destitute Widow Shelter Homes (Swadhar Greh):' : 'ಅಸಹಾಯಕ ವಿಧವೆಯರ ಆಶ್ರಯ ಮನೆಗಳು (ಸ್ವಧಾರ್ ಗೃಹ):'}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {isEn 
                    ? 'Widows facing domestic abuse, abandonment, or eviction can obtain free safe residential stay, vocational training, and food at government-sponsored Swadhar Greh homes in every district. Contact Helpline 181 for nearest location dispatch.'
                    : 'ಕುಟುಂಬದಿಂದ ಹೊರಹಾಕಲ್ಪಟ್ಟ ಅಥವಾ ಸಂಕಷ್ಟದಲ್ಲಿರುವ ವಿಧವೆಯರಿಗೆ ಪ್ರತಿಯೊಂದು ಜಿಲ್ಲೆಯಲ್ಲೂ ಉಚಿತ ಊಟ, ವಸತಿ ಮತ್ತು ಕೌಶಲ್ಯ ತರಬೇತಿ ನೀಡುವ ಸರ್ಕಾರಿ "ಸ್ವಧಾರ್ ಗೃಹ" ಆಶ್ರಯ ತಾಣಗಳಿವೆ. ೧೮೧ ಗೆ ಕರೆ ಮಾಡಿ.'}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Helplines & Direct Links */}
        <div className="space-y-4">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
            <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400" />
              {isEn ? 'Emergency & Assistance Helplines' : 'ತುರ್ತು ಸಹಾಯವಾಣಿ ಸಂಖ್ಯೆಗಳು'}
            </h3>
            <div className="space-y-3">
              {helplineCards.map((item, idx) => (
                <div key={idx} className="p-3 bg-slate-800/50 rounded-xl border border-slate-700/60">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{isEn ? item.titleEn : item.titleKn}</span>
                    <span className="px-2 py-0.5 text-xs font-bold bg-rose-500/20 text-rose-300 rounded-md">
                      {item.number}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                    {isEn ? item.descEn : item.descKn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
            <h3 className="text-sm font-bold text-white mb-3">
              {isEn ? 'Official Portal Gateways' : 'ಅಧಿಕೃತ ಪೋರ್ಟಲ್ ಕೊಂಡಿಗಳು'}
            </h3>
            <div className="space-y-2">
              <a
                href="https://nadakacheri.karnataka.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/40 hover:bg-slate-800 border border-slate-700/60 rounded-xl flex items-center justify-between text-xs text-slate-200 transition-colors"
              >
                <div>
                  <p className="font-semibold text-white">Nadakacheri (Atalji Janasnehi)</p>
                  <p className="text-[10px] text-slate-400">Online pension & income certificate</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>

              <a
                href="https://sevasindhu.karnataka.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/40 hover:bg-slate-800 border border-slate-700/60 rounded-xl flex items-center justify-between text-xs text-slate-200 transition-colors"
              >
                <div>
                  <p className="font-semibold text-white">Seva Sindhu Citizen Portal</p>
                  <p className="text-[10px] text-slate-400">Integrated social security login</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>

              <a
                href="https://nsap.nic.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/40 hover:bg-slate-800 border border-slate-700/60 rounded-xl flex items-center justify-between text-xs text-slate-200 transition-colors"
              >
                <div>
                  <p className="font-semibold text-white">National Social Assistance (NSAP)</p>
                  <p className="text-[10px] text-slate-400">Central government IGNWPS registry</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
