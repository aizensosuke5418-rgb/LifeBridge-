export interface BudgetSpendingMetric {
  id: string;
  schemeOrMinistry: { en: string; kn: string };
  fiscalYear: string;
  budgetAllocatedCrores: number;
  actualSpentCrores: number;
  unspentFundsCrores: number;
  utilizationRatePercentage: number;
  targetedBeneficiaries: string;
  actualBeneficiariesHelped: string;
  auditFlag: 'critical_leakage' | 'high_unspent' | 'delayed_payments' | 'moderate' | 'healthy';
  keyFindingSummary: { en: string; kn: string };
  bottleneckCause: { en: string; kn: string };
  cagReportReference?: string;
}

export interface DelayedProjectAudit {
  id: string;
  projectName: { en: string; kn: string };
  sector: 'irrigation_agriculture' | 'urban_infrastructure' | 'welfare_hostel' | 'health_hospital';
  originalCostCrores: number;
  revisedCostCrores: number;
  costOverrunCrores: number;
  originalDeadline: string;
  currentStatus: { en: string; kn: string };
  delayMonths: number;
  causeOfDelay: { en: string; kn: string };
}

export interface GhostBeneficiaryPurge {
  id: string;
  schemeName: { en: string; kn: string };
  ghostOrIneligibleDetected: string;
  recoveredOrSavedCrores: number;
  auditMechanism: { en: string; kn: string };
  systemicFix: { en: string; kn: string };
}

export interface DarkSideInsight {
  id: string;
  topic: { en: string; kn: string };
  headline: { en: string; kn: string };
  summary: { en: string; kn: string };
  severity: 'high' | 'critical' | 'moderate';
  realLifeImpact: { en: string; kn: string };
  citizenRemedyOrRTI: { en: string; kn: string };
  keyStats: string;
}

export const BUDGET_SPENDING_METRICS: BudgetSpendingMetric[] = [
  {
    id: 'scsp-tsp-unspent',
    schemeOrMinistry: {
      en: 'Karnataka SCSP / TSP Welfare Budget Allocation vs Utilization',
      kn: 'ಕರ್ನಾಟಕ ಎಸ್‌ಸಿಎಸ್‌ಪಿ / ಟಿಎಸ್‌ಪಿ ಅನುದಾನ ಮತ್ತು ಬಳಕೆ ವಿಶ್ಲೇಷಣೆ'
    },
    fiscalYear: '2023-24 to 2024-25',
    budgetAllocatedCrores: 34294,
    actualSpentCrores: 24650,
    unspentFundsCrores: 9644,
    utilizationRatePercentage: 71.8,
    targetedBeneficiaries: '1.25 Crore SC/ST Citizens',
    actualBeneficiariesHelped: '84 Lakh Verified Citizens',
    auditFlag: 'critical_leakage',
    keyFindingSummary: {
      en: 'Over ₹9,600 Crores of SCSP/TSP funds diverted into general infrastructure projects (roads, flyovers) under Section 7D of the Act rather than direct individual socio-economic upliftment.',
      kn: 'ಸೆಕ್ಷನ್ ೭ಡಿ ದುರ್ಬಳಕೆ ಮಾಡಿಕೊಂಡು ಎಸ್‌ಸಿ/ಎಸ್‌ಟಿ ಜನರ ನೇರ ಕಲ್ಯಾಣಕ್ಕೆ ಬಳಸಬೇಕಾದ ₹9,600 ಕೋಟಿಗೂ ಅಧಿಕ ಹಣವನ್ನು ಸಾಮಾನ್ಯ ರಸ್ತೆ ಮತ್ತು ಸೇತುವೆ ನಿರ್ಮಾಣಕ್ಕೆ ವರ್ಗಾಯಿಸಲಾಗಿದೆ.'
    },
    bottleneckCause: {
      en: 'Lack of timely project approvals by nodal departments and vague definition of community asset creation in Section 7D.',
      kn: 'ಇಲಾಖೆಗಳ ವಿಳಂಬ ಮತ್ತು ಕಾಯ್ದೆಯ ನಿಯಮಾವಳಿಗಳ ದುರುಪಯೋಗ.'
    },
    cagReportReference: 'CAG Karnataka State Finances Audit Report (Chapter IV - Social Justice)'
  },
  {
    id: 'mgnrega-wage-delays',
    schemeOrMinistry: {
      en: 'MGNREGA Rural Employment Guarantee Wage Disbursement Pipeline',
      kn: 'ನರೇಗಾ ಗ್ರಾಮೀಣ ಉದ್ಯೋಗ ಖಾತರಿ ಕೂಲಿ ಪಾವತಿ ವಿಳಂಬ'
    },
    fiscalYear: '2023-24',
    budgetAllocatedCrores: 7200,
    actualSpentCrores: 6410,
    unspentFundsCrores: 790,
    utilizationRatePercentage: 89.0,
    targetedBeneficiaries: '32 Lakh Rural Wage Workers in Karnataka',
    actualBeneficiariesHelped: '27.4 Lakh Active Workers',
    auditFlag: 'delayed_payments',
    keyFindingSummary: {
      en: 'Central fund release delays caused 42 to 90 days delay in transferring wages into workers accounts, in violation of the statutory 15-day compensation rule.',
      kn: 'ಕೇಂದ್ರ ಸರ್ಕಾರದ ಅನುದಾನ ಬಿಡುಗಡೆ ವಿಳಂಬದಿಂದಾಗಿ ಬಡ ಕೂಲಿಕಾರರಿಗೆ ನಿಯಮಾನುಸಾರ ೧೫ ದಿನಗಳಲ್ಲಿ ಸಿಗಬೇಕಾದ ಕೂಲಿ ೪೨ ರಿಂದ ೯೦ ದಿನಗಳವರೆಗೆ ವಿಳಂಬವಾಯಿತು.'
    },
    bottleneckCause: {
      en: 'FTO (Fund Transfer Order) bottlenecks between Central Ministry of Rural Development and NeFMS bank servers.',
      kn: 'ಕೇಂದ್ರ ಗ್ರಾಮೀಣಾಭಿವೃದ್ಧಿ ಸಚಿವಾಲಯ ಮತ್ತು ಬ್ಯಾಂಕಿಂಗ್ ಸರ್ವರ್ ನಡುವಿನ ಎಫ್‌ಟಿಒ ವಿಳಂಬ.'
    },
    cagReportReference: 'Performance Audit on MGNREGA Direct Benefit Transfer Delays'
  },
  {
    id: 'ssp-scholarship-backlog',
    schemeOrMinistry: {
      en: 'SSP Post-Matric Scholarship Disbursal (Social Welfare & BCWD)',
      kn: 'ಎಸ್‌ಎಸ್‌ಪಿ ಪೋಸ್ಟ್-ಮೆಟ್ರಿಕ್ ವಿದ್ಯಾರ್ಥಿವೇತನ ಹಂಚಿಕೆ ಮತ್ತು ವಿಳಂಬ'
    },
    fiscalYear: '2023-24',
    budgetAllocatedCrores: 2150,
    actualSpentCrores: 1680,
    unspentFundsCrores: 470,
    utilizationRatePercentage: 78.1,
    targetedBeneficiaries: '11.5 Lakh College Students',
    actualBeneficiariesHelped: '8.9 Lakh Students Cleared',
    auditFlag: 'delayed_payments',
    keyFindingSummary: {
      en: 'Approximately 2.6 Lakh eligible students experienced delays exceeding 6 months in receiving maintenance allowances due to college e-attestation pendency and NPCI Aadhaar seeding mismatches.',
      kn: 'ಕಾಲೇಜುಗಳ ಇ-ದೃಢೀಕರಣ ವಿಳಂಬ ಮತ್ತು ಎನ್‌ಪಿಸಿಐ ಆಧಾರ್ ಲಿಂಕಿಂಗ್ ದೋಷಗಳಿಂದಾಗಿ ೨.೬ ಲಕ್ಷಕ್ಕೂ ಹೆಚ್ಚು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ೬ ತಿಂಗಳಿಗೂ ಹೆಚ್ಚು ಕಾಲ ವಿದ್ಯಾರ್ಥಿವೇತನ ಸಿಗಲಿಲ್ಲ.'
    },
    bottleneckCause: {
      en: 'Inadequate technical staff at college nodal offices and students unaware that bank accounts were not mapped on NPCI Aadhaar bridge.',
      kn: 'ಕಾಲೇಜುಗಳಲ್ಲಿ ಸಿಬ್ಬಂದಿ ಕೊರತೆ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿಗಳ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಎನ್‌ಪಿಸಿಐ ಮ್ಯಾಪಿಂಗ್ ಆಗದಿರುವುದು.'
    },
    cagReportReference: 'Directorate of Evaluation & Public Grievances Review'
  },
  {
    id: 'ayushman-bharat-hospital-claims',
    schemeOrMinistry: {
      en: 'Ayushman Bharat PM-JAY / Arogya Karnataka Hospital Settlement',
      kn: 'ಆಯುಷ್ಮಾನ್ ಭಾರತ್ - ಆರೋಗ್ಯ ಕರ್ನಾಟಕ ಆಸ್ಪತ್ರೆ ಕ್ಲೈಮ್ ಇತ್ಯರ್ಥ'
    },
    fiscalYear: '2023-24',
    budgetAllocatedCrores: 1850,
    actualSpentCrores: 1720,
    unspentFundsCrores: 130,
    utilizationRatePercentage: 93.0,
    targetedBeneficiaries: '1.4 Crore Eligible Families',
    actualBeneficiariesHelped: '14.2 Lakh Hospitalized Patients',
    auditFlag: 'moderate',
    keyFindingSummary: {
      en: 'Private empaneled hospitals frequently reject cashless treatment or demand illegal cash deposits from poor patients citing slow government reimbursement processing times of 120+ days.',
      kn: 'ಸರ್ಕಾರದಿಂದ ಆಸ್ಪತ್ರೆಗಳಿಗೆ ಕ್ಲೈಮ್ ಹಣ ಬರಲು ೧೨೦ ದಿನಗಳಿಗೂ ಹೆಚ್ಚು ಸಮಯ ತೆಗೆದುಕೊಳ್ಳುವುದರಿಂದ, ಖಾಸಗಿ ಆಸ್ಪತ್ರೆಗಳು ಬಡ ರೋಗಿಗಳಿಂದ ಮುಂಗಡ ಹಣ ವಸೂಲಿ ಮಾಡುತ್ತಿವೆ.'
    },
    bottleneckCause: {
      en: 'Suvarna Arogya Suraksha Trust (SAST) medical auditor review backlogs for package pre-authorizations.',
      kn: 'ಸಾಸ್ತ್ (SAST) ಕಚೇರಿಯಲ್ಲಿ ಕ್ಲೈಮ್ ಪರಿಶೀಲನಾ ವೈದ್ಯರ ಕೊರತೆ.'
    },
    cagReportReference: 'National Health Authority Performance Review'
  },
  {
    id: 'pm-kisan-deduplication',
    schemeOrMinistry: {
      en: 'PM-KISAN Samman Nidhi Farmer Income Support',
      kn: 'ಪಿಎಂ-ಕಿಸಾನ್ ಸಮ್ಮಾನ್ ನಿಧಿ ರೈತರ ಆರ್ಥಿಕ ನೆರವು'
    },
    fiscalYear: '2023-24',
    budgetAllocatedCrores: 3600,
    actualSpentCrores: 3240,
    unspentFundsCrores: 360,
    utilizationRatePercentage: 90.0,
    targetedBeneficiaries: '54 Lakh Registered Landholders in Karnataka',
    actualBeneficiariesHelped: '49.2 Lakh Farmers Paid',
    auditFlag: 'critical_leakage',
    keyFindingSummary: {
      en: 'Over 4.8 Lakh ineligible beneficiaries (including income-tax payers, pensioners with >₹10k pension, and duplicate land entries) were receiving installments until FRUITS land-database linking purged them.',
      kn: 'ಆದಾಯ ತೆರಿಗೆ ಪಾವತಿದಾರರು ಮತ್ತು ನಕಲಿ ದಾಖಲೆದಾರರು ಸೇರಿದಂತೆ ೪.೮ ಲಕ್ಷ ಅನರ್ಹರು ಹಣ ಪಡೆಯುತ್ತಿದ್ದು, ಫ್ರೂಟ್ಸ್ ಪೋರ್ಟಲ್ ಪರಿಶೀಲನೆ ನಂತರ ಇವರನ್ನು ರದ್ದುಗೊಳಿಸಲಾಗಿದೆ.'
    },
    bottleneckCause: {
      en: 'Initial self-registration without cross-checking with Income Tax and Bhoomi RTC databases.',
      kn: 'ಆರಂಭದಲ್ಲಿ ಆದಾಯ ತೆರಿಗೆ ಮತ್ತು ಭೂಮಿ ದಾಖಲೆಗಳ ಸಮಗ್ರ ಪರಿಶೀಲನೆ ಇಲ್ಲದೆ ನೋಂದಣಿ ಮಾಡಿಕೊಂಡಿದ್ದು.'
    },
    cagReportReference: 'Union Ministry of Agriculture DBT Deduplication Audit'
  }
];

export const DELAYED_PROJECTS_AUDIT: DelayedProjectAudit[] = [
  {
    id: 'project-yettinahole-drinking-water',
    projectName: {
      en: 'Yettinahole Integrated Drinking Water Project (Kolar/Chikkaballapur)',
      kn: 'ಎತ್ತಿನಹೊಳೆ ಕುಡಿಯುವ ನೀರಿನ ಸಮಗ್ರ ಯೋಜನೆ'
    },
    sector: 'irrigation_agriculture',
    originalCostCrores: 12912,
    revisedCostCrores: 23251,
    costOverrunCrores: 10339,
    originalDeadline: '2018 (Original target)',
    currentStatus: {
      en: 'Partial trial flow into Vani Vilasa Sagar; complete distribution network still delayed',
      kn: 'ವಾಣಿ ವಿಲಾಸ ಸಾಗರಕ್ಕೆ ಪ್ರಾಯೋಗಿಕ ನೀರು ಹರಿವು; ಕೊಳವೆ ಜಾಲ ಇನ್ನೂ ಅಪೂರ್ಣ'
    },
    delayMonths: 72,
    causeOfDelay: {
      en: 'Forest clearance disputes in Western Ghats, slow land acquisition compensation, and repeated design modifications.',
      kn: 'ಅರಣ್ಯ ಇಲಾಖೆ ಅನುಮತಿ ವಿಳಂಬ, ಭೂಸ್ವಾಧೀನ ಪರಿಹಾರ ವಿವಾದ ಮತ್ತು ಪದೇ ಪದೇ ಯೋಜನಾ ಬದಲಾವಣೆ.'
    }
  },
  {
    id: 'project-metro-phase-2-suburban',
    projectName: {
      en: 'Bengaluru Suburban Railway Project (K-RIDE - 148 km)',
      kn: 'ಬೆಂಗಳೂರು ಉಪನಗರ ರೈಲು ಯೋಜನೆ (ಕೆ-ರೈಡ್)'
    },
    sector: 'urban_infrastructure',
    originalCostCrores: 15767,
    revisedCostCrores: 19100,
    costOverrunCrores: 3333,
    originalDeadline: '2025 (Initial Cabinet target)',
    currentStatus: {
      en: 'Only Corridor-2 civil work in progress; Corridor 1, 3, 4 facing tenders delay',
      kn: 'ಕಾರಿಡಾರ್-೨ ಕಾಮಗಾರಿ ಪ್ರಗತಿಯಲ್ಲಿದೆ; ಉಳಿದ ಮಾರ್ಗಗಳು ವಿಳಂಬ'
    },
    delayMonths: 36,
    causeOfDelay: {
      en: 'Disagreements over Railway land transfer leasing fees and delay in hiring key engineering specialists.',
      kn: 'ರೈಲ್ವೆ ಇಲಾಖೆಯ ಭೂಮಿ ಹಸ್ತಾಂತರ ವಿಳಂಬ ಮತ್ತು ತಾಂತ್ರಿಕ ಸಿಬ್ಬಂದಿ ಕೊರತೆ.'
    }
  },
  {
    id: 'project-district-civil-hospital-upgrade',
    projectName: {
      en: '300-Bed Super Specialty District Hospital Upgrades (Multiple Districts)',
      kn: 'ಜಿಲ್ಲಾ ಆಸ್ಪತ್ರೆಗಳ ಸೂಪರ್ ಸ್ಪೆಷಾಲಿಟಿ ಉನ್ನತೀಕರಣ ಕಾಮಗಾರಿಗಳು'
    },
    sector: 'health_hospital',
    originalCostCrores: 480,
    revisedCostCrores: 685,
    costOverrunCrores: 205,
    originalDeadline: '2021',
    currentStatus: {
      en: 'Civil buildings completed but lying idle without ICU doctors, nurses, and oxygen plants installed',
      kn: 'ಕಟ್ಟಡ ನಿರ್ಮಾಣ ಮುಗಿದಿದ್ದರೂ ವೈದ್ಯರು ಮತ್ತು ಉಪಕರಣಗಳಿಲ್ಲದೆ ಉದ್ಘಾಟನೆ ವಿಳಂಬ'
    },
    delayMonths: 40,
    causeOfDelay: {
      en: 'Separate procurement files for medical equipment stranded between KSEDC and Health Directorate.',
      kn: 'ವೈದ್ಯಕೀಯ ಉಪಕರಣಗಳ ಖರೀದಿ ಟೆಂಡರ್ ಪ್ರಕ್ರಿಯೆಯ ವಿಳಂಬ.'
    }
  }
];

export const GHOST_BENEFICIARIES_DATA: GhostBeneficiaryPurge[] = [
  {
    id: 'ghost-bpl-ration-cards',
    schemeName: {
      en: 'Ahara BPL / Antyodaya Ration Card Register',
      kn: 'ಆಹಾರ ಇಲಾಖೆಯ ಬಿಪಿಎಲ್ ಪಡಿತರ ಚೀಟಿಗಳು'
    },
    ghostOrIneligibleDetected: '13.2 Lakh Ineligible Ration Cards (Govt employees, four-wheeler owners, IT payers)',
    recoveredOrSavedCrores: 1420,
    auditMechanism: {
      en: 'Integrated cross-matching of Ration Database with Vahan (Transport), Bhoomi (Land RTC > 3 hectares), and IT Department PAN numbers.',
      kn: 'ವಾಹನ ನೋಂದಣಿ, ಭೂಮಿ ಪೋರ್ಟಲ್ ಮತ್ತು ಪ್ಯಾನ್ ಕಾರ್ಡ್ ಡೇಟಾ ಜೊತೆ ಆಧಾರ್ ಲಿಂಕ್ ಮಾಡಿ ಪರಿಶೀಲನೆ.'
    },
    systemicFix: {
      en: 'Automatic conversion of ineligible BPL cards into APL cards, saving thousands of tonnes of grain for genuinely poor families.',
      kn: 'ಅನರ್ಹ ಕಾರ್ಡುಗಳನ್ನು ರದ್ದುಪಡಿಸಿ ನಿಜವಾದ ಬಡವರಿಗೆ ಪಡಿತರ ಸಿಗುವಂತೆ ಮಾಡಲಾಗಿದೆ.'
    }
  },
  {
    id: 'ghost-pension-dead-beneficiaries',
    schemeName: {
      en: 'Social Security Old Age & Widow Pensions (Vrudhapya / Sandhya Suraksha)',
      kn: 'ಸಾಮಾಜಿಕ ಭದ್ರತಾ ವೃದ್ಧಾಪ್ಯ ಮತ್ತು ಸಂಧ್ಯಾ ಸುರಕ್ಷಾ ಪಿಂಚಣಿ'
    },
    ghostOrIneligibleDetected: '1.45 Lakh Deceased / Duplicate Pensioners Still Receiving Monthly Funds',
    recoveredOrSavedCrores: 210,
    auditMechanism: {
      en: 'Annual Jeevan Pramaan digital life certificate biometric verification and e-Janma civil death registration database linking.',
      kn: 'ಇ-ಜನ್ಮ ಮರಣ ನೋಂದಣಿ ಪೋರ್ಟಲ್ ಮತ್ತು ಜೀವನ್ ಪ್ರಮಾಣ್ ಡಿಜಿಟಲ್ ಲೈಫ್ ಸರ್ಟಿಫಿಕೇಟ್ ಪರಿಶೀಲನೆ.'
    },
    systemicFix: {
      en: 'Instant automated pension account freeze within 24 hours of Death Certificate issuance by Municipal Corporation.',
      kn: 'ಮರಣ ಪ್ರಮಾಣಪತ್ರ ದಾಖಲಾದ ತಕ್ಷಣ ಪಿಂಚಣಿ ಖಾತೆ ಸ್ಥಗಿತಗೊಳ್ಳುವ ಸ್ವಯಂಚಾಲಿತ ವ್ಯವಸ್ಥೆ.'
    }
  }
];

export const DARK_SIDE_INSIGHTS: DarkSideInsight[] = [
  {
    id: 'insight-digital-exclusion',
    topic: {
      en: 'Biometric & Document Exclusion: Why Genuine Poor Are Turned Away',
      kn: 'ಬಯೋಮೆಟ್ರಿಕ್ ಮತ್ತು ದಾಖಲೆಗಳ ದೋಷ: ಬಡವರಿಗೆ ಸಿಗದ ಸವಲತ್ತುಗಳು'
    },
    headline: {
      en: 'Worn fingerprints of elderly laborers and name spelling mismatches cause 15% welfare denials',
      kn: 'ವಯಸ್ಸಾದ ಕೂಲಿಕಾರರ ಬೆರಳಚ್ಚು ಅಳಿಸಿಹೋಗಿರುವುದು ಮತ್ತು ಹೆಸರಿನ ಕಾಗುಣಿತ ವ್ಯತ್ಯಾಸದಿಂದ ಶೇ. ೧೫ ರಷ್ಟು ಜನರು ಯೋಜನೆಗಳಿಂದ ವಂಚಿತರಾಗುತ್ತಿದ್ದಾರೆ'
    },
    summary: {
      en: 'When a daily-wage laborer or senior citizen’s biometric does not authenticate at fair price ration shops or banks, they are often turned away without manual iris scan fallback or OTP options. Similarly, a minor spelling difference between Aadhaar and Bank Passbook halts DBT scholarships for months.',
      kn: 'ಪಡಿತರ ಅಂಗಡಿಗಳಲ್ಲಿ ಅಥವಾ ಬ್ಯಾಂಕ್‌ಗಳಲ್ಲಿ ಬೆರಳಚ್ಚು ಮ್ಯಾಚ್ ಆಗದಿದ್ದಾಗ ಐರಿಸ್ ಸ್ಕ್ಯಾನ್ ಅಥವಾ ಒಟಿಪಿ ಸೌಲಭ್ಯ ನೀಡದೆ ಬಡವರನ್ನು ವಾಪಸ್ ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ. ಆಧಾರ್ ಮತ್ತು ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್‌ನಲ್ಲಿ ಹೆಸರಿನ ಸಣ್ಣ ವ್ಯತ್ಯಾಸವಿದ್ದರೂ ತಿಂಗಳುಗಟ್ಟಲೆ ಹಣ ಬರುವುದಿಲ್ಲ.'
    },
    severity: 'critical',
    realLifeImpact: {
      en: 'Families miss out on free rice rations and university fees despite being eligible.',
      kn: 'ಅರ್ಹರಾಗಿದ್ದರೂ ಉಚಿತ ಅಕ್ಕಿ ಮತ್ತು ಕಾಲೇಜು ಶುಲ್ಕದಿಂದ ವಂಚಿತರಾಗುವ ಅಪಾಯ.'
    },
    citizenRemedyOrRTI: {
      en: 'Demand "Manual Override or Iris Verification" at Fair Price Shops. Visit Bank Manager with Aadhaar NPCI Mapping Consent Form (Annexure I) to fix DBT link.',
      kn: 'ಪಡಿತರ ಅಂಗಡಿಯಲ್ಲಿ ಕಣ್ಣಿನ ಐರಿಸ್ (Iris) ಸ್ಕ್ಯಾನರ್ ಬಳಸಲು ಒತ್ತಾಯಿಸಿ. ಬ್ಯಾಂಕ್ ಮ್ಯಾನೇಜರ್ ಬಳಿ ಎನ್‌ಪಿಸಿಐ ಮ್ಯಾಪಿಂಗ್ ಫಾರ್ಮ್ ಸಲ್ಲಿಸಿ.'
    },
    keyStats: '15% to 18% rural DBT failure rates during initial biometric onboarding'
  },
  {
    id: 'insight-unspent-funds-diverted',
    topic: {
      en: 'The Unspent Budget Mystery: Millions Allocated on Paper, Returned Unused',
      kn: 'ಬಳಕೆಯಾಗದ ಬಜೆಟ್ ರಹಸ್ಯ: ಕಾಗದದಲ್ಲಷ್ಟೇ ಇರುವ ಕೋಟ್ಯಂತರ ಅನುದಾನ'
    },
    headline: {
      en: 'Departments rush to spend 40% of their annual budget in March ("March Rush"), often on unnecessary expenditures',
      kn: 'ವರ್ಷಪೂರ್ತಿ ಸುಮ್ಮನಿದ್ದು ಮಾರ್ಚ್ ತಿಂಗಳಲ್ಲಿ ಅನುದಾನ ಲ್ಯಾಪ್ಸ್ ಆಗದಂತೆ ಕಳಪೆ ಕೆಲಸಗಳಿಗೆ ತರಾತುರಿಯಲ್ಲಿ ಹಣ ಖರ್ಚು ಮಾಡುವುದು'
    },
    summary: {
      en: 'Government departments frequently delay releasing scheme guidelines until Q3 of the financial year. As March 31 approaches, unutilized funds are rushed into hurried procurement, or returned to the treasury, leaving planned beneficiary programs underfunded.',
      kn: 'ವರ್ಷದ ಮೊದಲ ೯ ತಿಂಗಳು ಯೋಜನೆಗಳ ಆದೇಶ ಹೊರಡಿಸದೆ ವಿಳಂಬ ಮಾಡಿ, ಕೊನೆಯ ಮಾರ್ಚ್ ತಿಂಗಳಲ್ಲಿ ಹಣ ಲ್ಯಾಪ್ಸ್ ಆಗುವುದನ್ನು ತಪ್ಪಿಸಲು ತರಾತುರಿಯಲ್ಲಿ ಕಾಮಗಾರಿ ನಡೆಸಿ ಹಣ ಬಿಡುಗಡೆ ಮಾಡುವುದು ಸಾಮಾನ್ಯವಾಗಿದೆ.'
    },
    severity: 'high',
    realLifeImpact: {
      en: 'Welfare schools go months without repair during monsoon, only to see painting works done in March.',
      kn: 'ಮಳೆಗಾಲದಲ್ಲಿ ದುರಸ್ತಿಯಾಗದ ಶಾಲೆಗಳಿಗೆ ಮಾರ್ಚ್‌ನಲ್ಲಿ ಕಳಪೆ ಬಣ್ಣ ಬಳಿದು ಬಿಲ್ ಮಾಡುವುದು.'
    },
    citizenRemedyOrRTI: {
      en: 'File RTI under Section 6(1) to District Treasury: "Provide monthly expenditure breakup and unspent balance under Budget Head 2225 for the current financial year."',
      kn: 'ಮಾಹಿತಿ ಹಕ್ಕು ಕಾಯ್ದೆಯಡಿ ಜಿಲ್ಲಾ ಖಜಾನೆಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ ಮಾಸಿಕ ಅನುದಾನ ಬಳಕೆ ವಿವರ ಪಡೆಯಿರಿ.'
    },
    keyStats: 'Up to 32% of total state annual capital budget disbursed in last 45 days of financial year'
  },
  {
    id: 'insight-rti-transparency-weapon',
    topic: {
      en: 'How Citizens Can Use RTI (Right to Information) to Expose Fund Delays',
      kn: 'ಅನುದಾನ ವಿಳಂಬ ಬಯಲಿಗೆಳೆಯಲು ಮಾಹಿತಿ ಹಕ್ಕು (RTI) ಬಳಸುವುದು ಹೇಗೆ?'
    },
    headline: {
      en: 'A ₹10 court fee stamp and a simple 3-line RTI application can force officials to clear held-up files',
      kn: 'ಕೇವಲ ₹೧೦ ಕೋರ್ಟ್ ಫೀ ಸ್ಟಾಂಪ್ ಮತ್ತು ೩ ಸಾಲಿನ ಆರ್‌ಟಿಐ ಅರ್ಜಿ ಮೂಲಕ ಅಧಿಕಾರಿಗಳು ಬಾಕಿ ಉಳಿಸಿಕೊಂಡ ಫೈಲ್ ಕ್ಲಿಯರ್ ಮಾಡಿಸಬಹುದು'
    },
    summary: {
      en: 'Under RTI Act 2005 Section 6(1), every citizen has the sovereign right to inspect public files, ask for certified copies of contractor measurements, sanction orders, and reasons for pension or scholarship delays. Public Information Officers (PIO) face daily personal penalties of ₹250 under Section 20 if they refuse.',
      kn: 'ಮಾಹಿತಿ ಹಕ್ಕು ಕಾಯ್ದೆ ೨೦೦೫ ರ ಅಡಿಯಲ್ಲಿ ಯಾವುದೇ ನಾಗರಿಕರು ಸರ್ಕಾರಿ ದಾಖಲೆಗಳು, ಕಾಮಗಾರಿ ಅಳತೆ ಪುಸ್ತಕ (MB Record), ಮಂಜೂರಾತಿ ಆದೇಶ ಮತ್ತು ಪಿಂಚಣಿ ವಿಳಂಬಕ್ಕೆ ಕಾರಣ ಕೇಳಿ ಅಧಿಕೃತ ದಾಖಲೆ ಪಡೆಯಬಹುದು. ಮಾಹಿತಿ ನೀಡದ ಅಧಿಕಾರಿಗೆ ನಿತ್ಯ ₹೨೫೦ ದಂಡ ಬೀಳುತ್ತದೆ.'
    },
    severity: 'moderate',
    realLifeImpact: {
      en: 'Empowers citizens to challenge local corruption without hiring lawyers or paying bribes.',
      kn: 'ಲಂಚ ನೀಡದೆ ನ್ಯಾಯಬದ್ಧವಾಗಿ ತಮ್ಮ ಹಕ್ಕು ಪಡೆಯಲು ನಾಗರಿಕರಿಗೆ ಸಂವಿಧಾನ ನೀಡಿರುವ ಪ್ರಬಲ ಅಸ್ತ್ರ.'
    },
    citizenRemedyOrRTI: {
      en: 'Draft RTI to PIO: 1. State current file tracking number. 2. Request certified copy of file movement register and name of official with whom application is pending.',
      kn: 'ಸಾರ್ವಜನಿಕ ಮಾಹಿತಿ ಅಧಿಕಾರಿಗೆ ಅರ್ಜಿ ಬರೆದು, ನಿಮ್ಮ ಫೈಲ್ ಯಾವ ಅಧಿಕಾರಿಯ ಬಳಿ ಎಷ್ಟು ದಿನಗಳಿಂದ ಬಾಕಿ ಇದೆ ಎಂದು ಪ್ರಮಾಣೀಕೃತ ಪ್ರತಿ ಕೇಳಿ.'
    },
    keyStats: '30-day statutory binding time limit for government to furnish information'
  }
];
