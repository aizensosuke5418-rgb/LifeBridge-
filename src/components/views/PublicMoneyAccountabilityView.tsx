import React, { useState } from 'react';
import { 
  BarChart3, AlertOctagon, TrendingDown, Clock, Search, 
  ExternalLink, ShieldAlert, FileText, CheckCircle2, 
  Filter, HelpCircle, AlertTriangle, Scale, Eye, 
  Building2, ArrowRight, UserX, Landmark
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { 
  BUDGET_SPENDING_METRICS, 
  DELAYED_PROJECTS_AUDIT, 
  GHOST_BENEFICIARIES_DATA, 
  DARK_SIDE_INSIGHTS, 
  BudgetSpendingMetric, 
  DelayedProjectAudit 
} from '../../data/publicMoney';

export const PublicMoneyAccountabilityView: React.FC = () => {
  const { language } = useApp();
  const isEn = language === 'en';

  const [activeTab, setActiveTab] = useState<'budget_spending' | 'delayed_projects' | 'ghost_purges' | 'dark_side_insights'>('budget_spending');
  const [selectedAuditFlag, setSelectedAuditFlag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMetrics = BUDGET_SPENDING_METRICS.filter(item => {
    const matchesFlag = selectedAuditFlag === 'all' || item.auditFlag === selectedAuditFlag;
    const matchesSearch = 
      item.schemeOrMinistry.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.schemeOrMinistry.kn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.keyFindingSummary.en.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFlag && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-rose-950/40 border border-amber-800/40 rounded-2xl p-6 lg:p-8 mb-8 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-xs font-semibold text-amber-300 mb-3">
              <Eye className="w-3.5 h-3.5 text-amber-400" />
              <span>{isEn ? 'Citizen Public Spending Watchdog' : 'ಸಾರ್ವಜನಿಕ ಹಣಕಾಸು ಮತ್ತು ಹೊಣೆಗಾರಿಕೆ ಪರಿಶೀಲನೆ'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              {isEn ? 'Government Money & The Dark Side: Civic Accountability Tracker' : 'ಸರ್ಕಾರಿ ಹಣ ಮತ್ತು ಕರಾಳ ವಾಸ್ತವ: ಸಾರ್ವಜನಿಕ ಲೆಕ್ಕಪರಿಶೋಧನಾ ವೇದಿಕೆ'}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {isEn 
                ? 'Transparent tracking of budget allocations vs real spending, unspent funds, delayed welfare payments, CAG audit findings, project cost overruns, ghost beneficiary purges, and RTI investigation guides.'
                : 'ಬಜೆಟ್‌ನಲ್ಲಿ ಘೋಷಿಸಿದ ಹಣ ಮತ್ತು ವಾಸ್ತವವಾಗಿ ಖರ್ಚಾದ ಮೊತ್ತ, ಬಳಕೆಯಾಗದ ಅನುದಾನ, ತಡೆಹಿಡಿದ ಕೂಲಿ/ವಿದ್ಯಾರ್ಥಿವೇತನ, ಸಿಎಜಿ ವರದಿಗಳು, ವಿಳಂಬ ಕಾಮಗಾರಿಗಳು ಮತ್ತು ಮಾಹಿತಿ ಹಕ್ಕು (RTI) ಬಳಕೆ ಮಾರ್ಗದರ್ಶಿ.'}
            </p>
          </div>

          <div className="flex flex-col gap-2 shrink-0">
            <a
              href="https://cag.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-amber-600 hover:bg-amber-500 text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-amber-600/20"
            >
              <span>{isEn ? 'Official CAG Audit Reports' : 'ಅಧಿಕೃತ ಸಿಎಜಿ ವರದಿಗಳು'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <span className="text-[11px] text-slate-400 text-center">
              {isEn ? 'Audited Public Records • No Partisan Spin' : 'ಅಧಿಕೃತ ಆಡಿಟ್ ದಾಖಲೆಗಳು • ನಿಷ್ಪಕ್ಷಪಾತ ವಿಶ್ಲೇಷಣೆ'}
            </span>
          </div>
        </div>

        {/* Accountability Stat Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-800/80">
          <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
            <p className="text-xs text-slate-400">{isEn ? 'Tracked Welfare Budget' : 'ಪರಿಶೀಲಿಸಿದ ಬಜೆಟ್'}</p>
            <p className="text-lg font-bold text-white mt-0.5">₹49,094 Cr</p>
            <p className="text-[10px] text-slate-400">{isEn ? 'Key State & Central Heads' : 'ಕರ್ನಾಟಕ & ಕೇಂದ್ರ ಯೋಜನೆಗಳು'}</p>
          </div>
          <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
            <p className="text-xs text-slate-400">{isEn ? 'Unspent / Diverted' : 'ಬಳಕೆಯಾಗದ ಅನುದಾನ'}</p>
            <p className="text-lg font-bold text-amber-400 mt-0.5">₹11,404 Cr</p>
            <p className="text-[10px] text-slate-400">{isEn ? '23.2% Unutilized or Delayed' : 'ಶೇ. ೨೩.೨ ರಷ್ಟು ವಿಳಂಬ'}</p>
          </div>
          <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
            <p className="text-xs text-slate-400">{isEn ? 'Major Project Overrun' : 'ಯೋಜನೆಗಳ ಹೆಚ್ಚುವರಿ ವೆಚ್ಚ'}</p>
            <p className="text-lg font-bold text-rose-400 mt-0.5">+₹13,877 Cr</p>
            <p className="text-[10px] text-slate-400">{isEn ? 'Yettinahole & Suburban Rail' : 'ಎತ್ತಿನಹೊಳೆ & ಉಪನಗರ ರೈಲು'}</p>
          </div>
          <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
            <p className="text-xs text-slate-400">{isEn ? 'Ghost Cards Purged' : 'ರದ್ದುಪಡಿಸಿದ ನಕಲಿ ಕಾರ್ಡ್'}</p>
            <p className="text-lg font-bold text-emerald-400 mt-0.5">14.65 Lakh</p>
            <p className="text-[10px] text-slate-400">{isEn ? '₹1,630 Cr Saved via Aadhaar' : '₹1,630 ಕೋಟಿ ಉಳಿತಾಯ'}</p>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-thin">
        {[
          { id: 'budget_spending', labelEn: '1. Budget Allocation vs Real Spending', labelKn: '೧. ಬಜೆಟ್ ಮತ್ತು ನೈಜ ಖರ್ಚು ವಿಶ್ಲೇಷಣೆ' },
          { id: 'delayed_projects', labelEn: '2. Delayed Projects & Cost Overruns', labelKn: '೨. ವಿಳಂಬ ಯೋಜನೆಗಳು ಮತ್ತು ಹೆಚ್ಚುವರಿ ವೆಚ್ಚ' },
          { id: 'ghost_purges', labelEn: '3. Ghost Beneficiaries & Aadhaar Audit', labelKn: '೩. ನಕಲಿ ಫಲಾನುಭವಿಗಳ ಪತ್ತೆ' },
          { id: 'dark_side_insights', labelEn: '4. The Dark Side: Digital Exclusion & RTI Weapon', labelKn: '೪. ಕರಾಳ ವಾಸ್ತವ: ದಾಖಲೆ ದೋಷ & ಆರ್‌ಟಿಐ' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === tab.id
                ? 'bg-amber-600 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700/60'
            }`}
          >
            {isEn ? tab.labelEn : tab.labelKn}
          </button>
        ))}
      </div>

      {/* TAB 1: BUDGET SPENDING METRICS */}
      {activeTab === 'budget_spending' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isEn ? "Search schemes or ministries (e.g. SCSP, MGNREGA, PM-KISAN, SSP)..." : "ಯೋಜನೆ ಅಥವಾ ಸಚಿವಾಲಯ ಹುಡುಕಿ..."}
                className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
              />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-slate-400">{isEn ? 'Filter Flag:' : 'ವರ್ಗೀಕರಣ:'}</span>
              {(['all', 'critical_leakage', 'delayed_payments'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setSelectedAuditFlag(f)}
                  className={`px-2.5 py-1 rounded text-xs font-medium cursor-pointer ${
                    selectedAuditFlag === f
                      ? 'bg-amber-600 text-white'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  {f === 'all' ? 'All' : f === 'critical_leakage' ? 'Leakage / Diverted' : 'Delayed DBT'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredMetrics.map((item) => (
              <div 
                key={item.id}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 hover:border-amber-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                      {item.fiscalYear}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                      item.auditFlag === 'critical_leakage' 
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                        : item.auditFlag === 'delayed_payments'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : 'bg-blue-500/20 text-blue-300'
                    }`}>
                      {item.auditFlag.replace('_', ' ')}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {isEn ? item.schemeOrMinistry.en : item.schemeOrMinistry.kn}
                  </h3>

                  {/* Visual Utilization Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-slate-400">{isEn ? 'Budget Utilization Rate:' : 'ಬಳಕೆಯಾದ ಪ್ರಮಾಣ:'}</span>
                      <span className="font-extrabold text-white">{item.utilizationRatePercentage}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden flex">
                      <div 
                        className={`h-full ${
                          item.utilizationRatePercentage < 80 ? 'bg-amber-500' : 'bg-emerald-500'
                        }`}
                        style={{ width: `${item.utilizationRatePercentage}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1">
                      <span>{isEn ? 'Spent' : 'ಖರ್ಚು'}: ₹{item.actualSpentCrores.toLocaleString()} Cr</span>
                      <span className="text-rose-400">{isEn ? 'Unspent / Backlog' : 'ಬಾಕಿ'}: ₹{item.unspentFundsCrores.toLocaleString()} Cr</span>
                    </div>
                  </div>

                  {/* People Promised vs Real Reach */}
                  <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 mb-4 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">{isEn ? 'Targeted Beneficiaries:' : 'ಗುರಿ ಹೊಂದಿದ ಫಲಾನುಭವಿಗಳು:'}</span>
                      <span className="font-semibold text-slate-200">{item.targetedBeneficiaries}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">{isEn ? 'Actual People Cleared:' : 'ನಿಜವಾಗಿ ತಲುಪಿದವರು:'}</span>
                      <span className="font-bold text-emerald-400">{item.actualBeneficiariesHelped}</span>
                    </div>
                  </div>

                  {/* Key Finding */}
                  <div className="mb-3">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {isEn ? item.keyFindingSummary.en : item.keyFindingSummary.kn}
                    </p>
                  </div>

                  {/* Bottleneck Cause */}
                  <div className="p-3 bg-rose-950/20 border border-rose-900/30 rounded-xl text-xs text-rose-200 mb-3">
                    <p className="font-bold mb-0.5">{isEn ? 'Root Bottleneck:' : 'ಮೂಲ ಕಾರಣ:'}</p>
                    <p className="text-slate-300 text-[11px]">
                      {isEn ? item.bottleneckCause.en : item.bottleneckCause.kn}
                    </p>
                  </div>
                </div>

                {item.cagReportReference && (
                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="line-clamp-1">Ref: {item.cagReportReference}</span>
                    <a
                      href="https://cag.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:text-white flex items-center gap-1 shrink-0 font-medium"
                    >
                      <span>CAG</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: DELAYED PROJECTS & COST OVERRUNS */}
      {activeTab === 'delayed_projects' && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-2">
              {isEn ? 'Mega Infrastructure Projects Delay & Cost Escalation Tracker' : 'ಬೃಹತ್ ಮೂಲಸೌಕರ್ಯ ಯೋಜನೆಗಳ ವಿಳಂಬ ಮತ್ತು ವೆಚ್ಚ ಹೆಚ್ಚಳದ ಪಟ್ಟಿ'}
            </h2>
            <p className="text-xs text-slate-400 mb-6">
              {isEn 
                ? 'When public projects are delayed by years, taxpayers bear thousands of crores in cost overruns while citizens wait for water and transit.'
                : 'ವರ್ಷಗಟ್ಟಲೆ ವಿಳಂಬವಾಗುವ ಯೋಜನೆಗಳಿಂದ ಸಾವಿರಾರು ಕೋಟಿ ಜನರ ತೆರಿಗೆ ಹಣ ವ್ಯರ್ಥವಾಗುವುದಲ್ಲದೆ ಜನರಿಗೆ ಮೂಲಸೌಕರ್ಯ ಸಿಗದೆ ತೊಂದರೆಯಾಗುತ್ತದೆ.'}
            </p>

            <div className="space-y-4">
              {DELAYED_PROJECTS_AUDIT.map((proj) => (
                <div key={proj.id} className="p-5 bg-slate-800/50 border border-slate-700/60 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 uppercase">
                        {proj.sector.replace('_', ' ')}
                      </span>
                      <h3 className="text-base font-bold text-white mt-1">
                        {isEn ? proj.projectName.en : proj.projectName.kn}
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="px-2.5 py-1 rounded-md text-xs font-extrabold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                        {isEn ? `Delayed by ${proj.delayMonths} Months` : `${proj.delayMonths} ತಿಂಗಳುಗಳ ವಿಳಂಬ`}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 bg-slate-900/60 rounded-lg border border-slate-800 mb-3 text-xs">
                    <div>
                      <p className="text-slate-400">{isEn ? 'Original Cost' : 'ಮೂಲ ಅಂದಾಜು ವೆಚ್ಚ'}</p>
                      <p className="font-bold text-white">₹{proj.originalCostCrores.toLocaleString()} Cr</p>
                    </div>
                    <div>
                      <p className="text-slate-400">{isEn ? 'Revised Current Cost' : 'ಪರಿಷ್ಕೃತ ವೆಚ್ಚ'}</p>
                      <p className="font-bold text-amber-400">₹{proj.revisedCostCrores.toLocaleString()} Cr</p>
                    </div>
                    <div>
                      <p className="text-slate-400">{isEn ? 'Cost Escalation' : 'ಹೆಚ್ಚುವರಿ ಹೊರೆ'}</p>
                      <p className="font-extrabold text-rose-400">+₹{proj.costOverrunCrores.toLocaleString()} Cr</p>
                    </div>
                    <div>
                      <p className="text-slate-400">{isEn ? 'Original Target' : 'ಮೂಲ ಗುರಿ'}</p>
                      <p className="font-semibold text-slate-300">{proj.originalDeadline}</p>
                    </div>
                  </div>

                  <div className="space-y-1 text-xs">
                    <p className="text-slate-300">
                      <span className="font-bold text-slate-400">{isEn ? 'Status:' : 'ಪ್ರಸ್ತುತ ಸ್ಥಿತಿ:'} </span>
                      {isEn ? proj.currentStatus.en : proj.currentStatus.kn}
                    </p>
                    <p className="text-slate-300">
                      <span className="font-bold text-slate-400">{isEn ? 'Official Cause of Delay:' : 'ವಿಳಂಬಕ್ಕೆ ಕಾರಣ:'} </span>
                      {isEn ? proj.causeOfDelay.en : proj.causeOfDelay.kn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: GHOST BENEFICIARIES PURGE */}
      {activeTab === 'ghost_purges' && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-2">
              {isEn ? 'Ghost Beneficiaries, Duplicate Ration Cards & Deduplication Audits' : 'ನಕಲಿ ಫಲಾನುಭವಿಗಳ ಪತ್ತೆ ಮತ್ತು ರದ್ದುಪಡಿಸುವಿಕೆಯ ಪರಿಶೀಲನಾ ವರದಿ'}
            </h2>
            <p className="text-xs text-slate-400 mb-6">
              {isEn 
                ? 'How database cross-matching (Aadhaar, Vahan, Income Tax, and e-Janma death records) eliminated fake claimants to protect public funds.'
                : 'ಆಧಾರ್, ವಾಹನ ನೋಂದಣಿ, ಪ್ಯಾನ್ ಕಾರ್ಡ್ ಮತ್ತು ಮರಣ ನೋಂದಣಿ ಡೇಟಾ ವಿಶ್ಲೇಷಣೆ ಮೂಲಕ ನಕಲಿ ಫಲಾನುಭವಿಗಳನ್ನು ತೆಗೆದುಹಾಕಿದ ಅಧಿಕೃತ ಅಂಕಿ-ಅಂಶಗಳು.'}
            </p>

            <div className="space-y-4">
              {GHOST_BENEFICIARIES_DATA.map((item) => (
                <div key={item.id} className="p-5 bg-slate-800/50 border border-slate-700/60 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-base font-bold text-white">
                      {isEn ? item.schemeName.en : item.schemeName.kn}
                    </h3>
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 rounded-lg text-xs font-bold">
                      {isEn ? `₹${item.recoveredOrSavedCrores} Cr Annual Tax Savings` : `ವಾರ್ಷಿಕ ₹${item.recoveredOrSavedCrores} ಕೋಟಿ ಉಳಿತಾಯ`}
                    </span>
                  </div>

                  <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg mb-3 text-xs">
                    <p className="font-bold text-rose-300 mb-0.5">{isEn ? 'Ineligible Entities Detected:' : 'ಪತ್ತೆಯಾದ ಅನರ್ಹರು:'}</p>
                    <p className="text-slate-200">{item.ghostOrIneligibleDetected}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
                      <p className="font-semibold text-blue-300 mb-0.5">{isEn ? 'Audit Mechanism:' : 'ಪತ್ತೆ ಹಚ್ಚಿದ ವಿಧಾನ:'}</p>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        {isEn ? item.auditMechanism.en : item.auditMechanism.kn}
                      </p>
                    </div>
                    <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
                      <p className="font-semibold text-emerald-300 mb-0.5">{isEn ? 'Permanent Systemic Fix:' : 'ಕೈಗೊಂಡ ಸುಧಾರಣೆ:'}</p>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        {isEn ? item.systemicFix.en : item.systemicFix.kn}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: DARK SIDE INSIGHTS & RTI WEAPON */}
      {activeTab === 'dark_side_insights' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {DARK_SIDE_INSIGHTS.map((insight) => (
              <div 
                key={insight.id}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 hover:border-amber-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {insight.topic.en.split(':')[0]}
                    </span>
                    <span className="text-[10px] font-bold text-rose-400 uppercase">
                      {insight.severity} SEVERITY
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {isEn ? insight.headline.en : insight.headline.kn}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {isEn ? insight.summary.en : insight.summary.kn}
                  </p>

                  <div className="p-3 bg-slate-800/60 border border-slate-700/60 rounded-xl mb-4 text-xs">
                    <p className="font-semibold text-slate-400 mb-0.5">{isEn ? 'Real Life Impact:' : 'ನೈಜ ಪರಿಣಾಮ:'}</p>
                    <p className="text-slate-200 text-[11px] leading-relaxed">
                      {isEn ? insight.realLifeImpact.en : insight.realLifeImpact.kn}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="p-3 bg-amber-950/20 border border-amber-800/30 rounded-xl text-xs text-amber-200">
                    <p className="font-bold mb-1 flex items-center gap-1.5">
                      <Scale className="w-3.5 h-3.5 text-amber-400" />
                      {isEn ? 'Citizen RTI / Remedy Action:' : 'ಮಾಹಿತಿ ಹಕ್ಕು / ನಾಗರಿಕ ಪರಿಹಾರ:'}
                    </p>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      {isEn ? insight.citizenRemedyOrRTI.en : insight.citizenRemedyOrRTI.kn}
                    </p>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-2 text-right">
                    Stat: {insight.keyStats}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
