import { GovernmentPortal } from '../types';

export const OFFICIAL_PORTALS_DATABASE: GovernmentPortal[] = [
  {
    id: 'portal-sevasindhu',
    name: {
      en: 'Seva Sindhu (Karnataka Integrated Citizen Services)',
      kn: 'ಸೇವಾ ಸಿಂಧು (ಕರ್ನಾಟಕ ಏಕೀಕೃತ ನಾಗರಿಕ ಸೇವೆಗಳ ಪೋರ್ಟಲ್)'
    },
    department: {
      en: 'Department of Personnel and Administrative Reforms (e-Governance), Karnataka',
      kn: 'ಸಿಬ್ಬಂದಿ ಮತ್ತು ಆಡಳಿತ ಸುಧಾರಣೆ ಇಲಾಖೆ (ಇ-ಆಡಳಿತ), ಕರ್ನಾಟಕ'
    },
    purpose: {
      en: 'Single unified gateway for 500+ Karnataka government citizen services, including guarantee schemes (Gruha Lakshmi, Gruha Jyothi, Yuva Nidhi).',
      kn: 'ಗ್ಯಾರಂಟಿ ಯೋಜನೆಗಳು (ಗೃಹಲಕ್ಷ್ಮಿ, ಗೃಹಜ್ಯೋತಿ, ಯುವನಿಧಿ) ಸೇರಿದಂತೆ ಕರ್ನಾಟಕ ಸರ್ಕಾರದ 500ಕ್ಕೂ ಹೆಚ್ಚು ಸೇವೆಗಳ ಏಕೈಕ ಪೋರ್ಟಲ್.'
    },
    servicesAvailable: {
      en: ['Gruha Lakshmi Registration', 'Gruha Jyothi Zero Bill Subsidy', 'Yuva Nidhi Graduate Allowance', 'Birth & Death Certificates', 'Revenue Services'],
      kn: ['ಗೃಹಲಕ್ಷ್ಮಿ ನೋಂದಣಿ', 'ಗೃಹಜ್ಯೋತಿ ಅರ್ಜಿ', 'ಯುವನಿಧಿ ನಿರುದ್ಯೋಗ ಭತ್ಯೆ', 'ಜನನ/ಮರಣ ಪ್ರಮಾಣಪತ್ರ']
    },
    geographicCoverage: {
      en: 'State of Karnataka (All 31 Districts)',
      kn: 'ಕರ್ನಾಟಕ ರಾಜ್ಯ (ಎಲ್ಲಾ 31 ಜಿಲ್ಲೆಗಳು)'
    },
    url: 'https://sevasindhugs.karnataka.gov.in/',
    verificationStatus: 'verified_active',
    lastChecked: '2026-09-01'
  },
  {
    id: 'portal-ahara',
    name: {
      en: 'Ahara Karnataka (Food, Civil Supplies & Consumer Affairs)',
      kn: 'ಆಹಾರ ಕರ್ನಾಟಕ (ಆಹಾರ, ನಾಗರಿಕ ಸರಬರಾಜು ಮತ್ತು ಗ್ರಾಹಕರ ವ್ಯವಹಾರಗಳು)'
    },
    department: {
      en: 'Food, Civil Supplies & Consumer Affairs Department, Karnataka',
      kn: 'ಆಹಾರ ಮತ್ತು ನಾಗರಿಕ ಸರಬರಾಜು ಇಲಾಖೆ, ಕರ್ನಾಟಕ'
    },
    purpose: {
      en: 'Comprehensive ration card lifecycle management, e-Ration status, Anna Bhagya DBT status, fair-price shop allotment, and biometric e-KYC tracking.',
      kn: 'ಪಡಿತರ ಚೀಟಿ ಪರಿಶೀಲನೆ, ಅನ್ನಭಾಗ್ಯ ನಗದು ಜಮೆ (ಡಿಬಿಟಿ) ಸ್ಥಿತಿ, ನ್ಯಾಯಬೆಲೆ ಅಂಗಡಿಗಳ ವಿವರ ಮತ್ತು ಇ-ಕೆವೈಸಿ ಮೇಲ್ವಿಚಾರಣೆ.'
    },
    servicesAvailable: {
      en: ['Anna Bhagya DBT Cash Status Check', 'e-Ration Card Status & Search', 'Fair Price Shop FPS Locator', 'Addition / Deletion of Family Members', 'BPL/AAY Card Eligibility Rules'],
      kn: ['ಅನ್ನಭಾಗ್ಯ ಡಿಬಿಟಿ ಹಣ ಜಮೆ ಸ್ಥಿತಿ', 'ರೇಷನ್ ಕಾರ್ಡ್ ವಿವರ ಪರಿಶೀಲನೆ', 'ನ್ಯಾಯಬೆಲೆ ಅಂಗಡಿ ಮಾಹಿತಿ', 'ಕುಟುಂಬದ ಸದಸ್ಯರ ಹೆಸರು ಸೇರ್ಪಡೆ']
    },
    geographicCoverage: {
      en: 'Karnataka Statewide',
      kn: 'ಕರ್ನಾಟಕ ರಾಜ್ಯಾದ್ಯಂತ'
    },
    url: 'https://ahara.karnataka.gov.in/',
    verificationStatus: 'verified_active',
    lastChecked: '2026-09-10'
  },
  {
    id: 'portal-ssp',
    name: {
      en: 'Karnataka State Scholarship Portal (SSP)',
      kn: 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ವಿದ್ಯಾರ್ಥಿವೇತನ ತಂತ್ರಾಂಶ (SSP)'
    },
    department: {
      en: 'Centre for e-Governance, Karnataka with Social Welfare & BCWD',
      kn: 'ಇ-ಆಡಳಿತ ಕೇಂದ್ರ, ಕರ್ನಾಟಕ ಮತ್ತು ಸಮಾಜ ಕಲ್ಯಾಣ ಇಲಾಖೆ'
    },
    purpose: {
      en: 'Centralized pre-matric and post-matric scholarship application, verification, institution sanctioning, and DBT disbursement platform.',
      kn: 'ಶಾಲಾ ಮತ್ತು ಕಾಲೇಜು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಮೆಟ್ರಿಕ್ ಪೂರ್ವ ಮತ್ತು ಮೆಟ್ರಿಕ್ ನಂತರದ ವಿದ್ಯಾರ್ಥಿವೇತನದ ಏಕ ಗವಾಕ್ಷಿ ಅರ್ಜಿ ವೇದಿಕೆ.'
    },
    servicesAvailable: {
      en: ['Post-Matric Scholarship Applications', 'Pre-Matric Scholarship Status', 'Vidyasiri Hostel Food & Accommodation Support', 'Fee Reimbursement Tracking', 'Student e-Attestation System'],
      kn: ['ಮೆಟ್ರಿಕ್ ನಂತರದ ವಿದ್ಯಾರ್ಥಿವೇತನ ಅರ್ಜಿ', 'ವಿದ್ಯಾಸಿರಿ ಊಟ-ವಸತಿ ಭತ್ಯೆ', 'ಶುಲ್ಕ ಮರುಪಾವತಿ ಸ್ಥಿತಿ', 'ಇ-ದೃಢೀಕರಣ ವ್ಯವಸ್ಥೆ']
    },
    geographicCoverage: {
      en: 'Karnataka Students Studying in Recognized Institutions',
      kn: 'ಕರ್ನಾಟಕದ ಮಾನ್ಯತೆ ಪಡೆದ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಗಳ ವಿದ್ಯಾರ್ಥಿಗಳು'
    },
    url: 'https://ssp.postmatric.karnataka.gov.in/',
    verificationStatus: 'verified_active',
    lastChecked: '2026-08-20'
  },
  {
    id: 'portal-myscheme',
    name: {
      en: 'myScheme (National Government Scheme Gateway)',
      kn: 'ಮೈಸ್ಕೀಮ್ (ರಾಷ್ಟ್ರೀಯ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ ವೇದಿಕೆ)'
    },
    department: {
      en: 'National e-Governance Division (NeGD) & MeitY, Govt of India',
      kn: 'ರಾಷ್ಟ್ರೀಯ ಇ-ಆಡಳಿತ ವಿಭಾಗ ಮತ್ತು ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ಸಚಿವಾಲಯ, ಭಾರತ ಸರ್ಕಾರ'
    },
    purpose: {
      en: 'National official marketplace of central and state government schemes across 29 states and union territories.',
      kn: 'ಕೇಂದ್ರ ಮತ್ತು ಎಲ್ಲಾ ರಾಜ್ಯ ಸರ್ಕಾರಗಳ ಸಾವಿರಾರು ಯೋಜನೆಗಳನ್ನು ಒಂದೇ ವೇದಿಕೆಯಲ್ಲಿ ಹುಡುಕುವ ಅಧಿಕೃತ ತಾಣ.'
    },
    servicesAvailable: {
      en: ['National Scheme Search & Filtering', 'Eligibility Criteria Overviews', 'Official Application Links', 'Document Checklists', 'State & Central Scheme Catalogues'],
      kn: ['ರಾಷ್ಟ್ರೀಯ ಯೋಜನೆಗಳ ಶೋಧನೆ', 'ಅರ್ಹತಾ ನಿಯಮಾವಳಿಗಳು', 'ಅಧಿಕೃತ ಅರ್ಜಿ ಲಿಂಕ್‌ಗಳು', 'ದಾಖಲೆಗಳ ಪಟ್ಟಿ']
    },
    geographicCoverage: {
      en: 'All India (Central + 28 States & 8 UTs)',
      kn: 'ಭಾರತಾದ್ಯಂತ (ಕೇಂದ್ರ ಮತ್ತು ಎಲ್ಲಾ ರಾಜ್ಯಗಳು)'
    },
    url: 'https://www.myscheme.gov.in/',
    verificationStatus: 'official_gateway',
    lastChecked: '2026-09-05'
  },
  {
    id: 'portal-nha-pmjay',
    name: {
      en: 'Ayushman Bharat PM-JAY Beneficiary Portal',
      kn: 'ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ಪಿಎಂ-ಜೆಎವೈ ಫಲಾನುಭವಿ ಪೋರ್ಟಲ್'
    },
    department: {
      en: 'National Health Authority (NHA), Ministry of Health & Family Welfare',
      kn: 'ರಾಷ್ಟ್ರೀಯ ಆರೋಗ್ಯ ಪ್ರಾಧಿಕಾರ, ಆರೋಗ್ಯ ಸಚಿವಾಲಯ, ಭಾರತ ಸರ್ಕಾರ'
    },
    purpose: {
      en: 'Beneficiary verification, Ayushman Card download, hospital empanelement lookup, and treatment package claims for secondary/tertiary care.',
      kn: 'ಆಯುಷ್ಮಾನ್ ಕಾರ್ಡ್ ಡೌನ್‌ಲೋಡ್, ಆಸ್ಪತ್ರೆಗಳ ನೆಟ್‌ವರ್ಕ್ ಪರಿಶೀಲನೆ ಮತ್ತು ನಗದು ರಹಿತ ಚಿಕಿತ್ಸೆ ಮಾಹಿತಿ.'
    },
    servicesAvailable: {
      en: ['Ayushman Card e-KYC & Download', 'Find Empaneled Public/Private Hospitals', 'Arogya Mitra Helpdesk Directory', 'Grievance Redressal (CGRMS)'],
      kn: ['ಆಯುಷ್ಮಾನ್ ಕಾರ್ಡ್ ಡೌನ್‌ಲೋಡ್', 'ನೋಂದಾಯಿತ ಆಸ್ಪತ್ರೆಗಳ ಪಟ್ಟಿ', 'ದೂರು ಪರಿಹಾರ ವೇದಿಕೆ']
    },
    geographicCoverage: {
      en: 'Pan-India Coverage',
      kn: 'ಭಾರತಾದ್ಯಂತ'
    },
    url: 'https://beneficiary.nha.gov.in/',
    verificationStatus: 'verified_active',
    lastChecked: '2026-09-08'
  },
  {
    id: 'portal-nadakacheri',
    name: {
      en: 'Nadakacheri (Atalji Janasnehi Kendra)',
      kn: 'ನಾಡಕಚೇರಿ (ಅಟಲ್ ಜಿ ಜನಸ್ನೇಹಿ ಕೇಂದ್ರ)'
    },
    department: {
      en: 'Revenue Department, Government of Karnataka',
      kn: 'ಕಂದಾಯ ಇಲಾಖೆ, ಕರ್ನಾಟಕ ಸರ್ಕಾರ'
    },
    purpose: {
      en: 'Online issuance of digitally signed Caste, Income, Residence, Domicile, Living, and Social Security Pension certificates with tamper-proof RD numbers.',
      kn: 'ಡಿಜಿಟಲ್ ಸಹಿ ಹೊಂದಿದ ಜಾತಿ, ಆದಾಯ, ವಾಸಸ್ಥಳ ಮತ್ತು ಪಿಂಚಣಿ ಪ್ರಮಾಣಪತ್ರಗಳನ್ನು ಆರ್‌ಡಿ (RD) ಸಂಖ್ಯೆಯೊಂದಿಗೆ ನೀಡುವ ಅಧಿಕೃತ ತಾಣ.'
    },
    servicesAvailable: {
      en: ['Caste Certificate (SC/ST/Category-1/2A/2B/3A/3B)', 'Income Certificate (RD Number Generation)', 'Residence & Domicile Certificates', 'Social Security Pension Applications', 'Certificate Verification by RD Number'],
      kn: ['ಜಾತಿ ಪ್ರಮಾಣಪತ್ರ', 'ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ', 'ವಾಸಸ್ಥಳ ಪ್ರಮಾಣಪತ್ರ', 'ಆರ್‌ಡಿ ಸಂಖ್ಯೆ ಮೂಲಕ ಪ್ರಮಾಣಪತ್ರ ದೃಢೀಕರಣ']
    },
    geographicCoverage: {
      en: 'All Taluks and Hoblis of Karnataka',
      kn: 'ಕರ್ನಾಟಕದ ಎಲ್ಲಾ ತಾಲೂಕು ಮತ್ತು ಹೋಬಳಿಗಳು'
    },
    url: 'https://nadakacheri.karnataka.gov.in/',
    verificationStatus: 'verified_active',
    lastChecked: '2026-08-30'
  },
  {
    id: 'portal-bhoomi',
    name: {
      en: 'Bhoomi (Karnataka Land Records & RTC)',
      kn: 'ಭೂಮಿ (ಕರ್ನಾಟಕ ಭೂ ದಾಖಲೆಗಳು ಮತ್ತು ಆರ್‌ಟಿಸಿ)'
    },
    department: {
      en: 'Revenue Department (Land Records), Government of Karnataka',
      kn: 'ಕಂದಾಯ ಇಲಾಖೆ (ಭೂ ದಾಖಲೆಗಳು), ಕರ್ನಾಟಕ ಸರ್ಕಾರ'
    },
    purpose: {
      en: 'Pioneering digital land record registry for Karnataka. View and download certified Pahani/RTC, mutation status, and cadastral survey maps for PM-KISAN verification.',
      kn: 'ರೈತರ ಪಹಣಿ (ಆರ್‌ಟಿಸಿ), ಮ್ಯುಟೇಶನ್ ಸ್ಥಿತಿ ಮತ್ತು ಕಂದಾಯ ನಕ್ಷೆಗಳನ್ನು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಪಡೆಯುವ ತಾಣ.'
    },
    servicesAvailable: {
      en: ['View RTC / Pahani Online', 'Mutation Status Check', 'Pahani for PM-KISAN and Crop Loan Eligibility', 'Dispute Case Status'],
      kn: ['ಆನ್‌ಲೈನ್ ಪಹಣಿ (RTC) ವೀಕ್ಷಣೆ', 'ಮ್ಯುಟೇಶನ್ ಪರಿಶೀಲನೆ', 'ಪಿಎಂ-ಕಿಸಾನ್ ಜಮೀನು ದಾಖಲೆ ಪರಿಶೀಲನೆ']
    },
    geographicCoverage: {
      en: 'All Rural & Semi-Urban Agricultural Lands in Karnataka',
      kn: 'ಕರ್ನಾಟಕದ ಎಲ್ಲಾ ಕೃಷಿ ಜಮೀನುಗಳು'
    },
    url: 'https://landrecords.karnataka.gov.in/',
    verificationStatus: 'verified_active',
    lastChecked: '2026-08-25'
  },
  {
    id: 'portal-nsp',
    name: {
      en: 'National Scholarship Portal (NSP)',
      kn: 'ರಾಷ್ಟ್ರೀಯ ವಿದ್ಯಾರ್ಥಿವೇತನ ಪೋರ್ಟಲ್ (NSP)'
    },
    department: {
      en: 'Ministry of Electronics and Information Technology (MeitY), Govt of India',
      kn: 'ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ಮತ್ತು ಮಾಹಿತಿ ತಂತ್ರಜ್ಞಾನ ಸಚಿವಾಲಯ, ಭಾರತ ಸರ್ಕಾರ'
    },
    purpose: {
      en: 'Central government digital platform for Central Sector Scholarships, AICTE Technical Scholarships, UGC Fellowships, and Disability student stipends.',
      kn: 'ಕೇಂದ್ರ ಸರ್ಕಾರದ ವಿದ್ಯಾರ್ಥಿವೇತನಗಳು, ಎಐಸಿಟಿಇ ತಾಂತ್ರಿಕ ವಿದ್ಯಾರ್ಥಿವೇತನ ಹಾಗೂ ಅಂಗವಿಕಲ ವಿದ್ಯಾರ್ಥಿವೇತನದ ವೇದಿಕೆ.'
    },
    servicesAvailable: {
      en: ['Central Sector College Scholarship Scheme', 'AICTE Pragati & Saksham Technical Scholarships', 'Post-Matric Scholarships for Minorities & Disabilities', 'One-Time Registration (OTR) Face Auth'],
      kn: ['ಕೇಂದ್ರ ವಲಯದ ಕಾಲೇಜು ವಿದ್ಯಾರ್ಥಿವೇತನ', 'ಎಐಸಿಟಿಇ ಪ್ರಗತಿ ತಾಂತ್ರಿಕ ವಿದ್ಯಾರ್ಥಿವೇತನ', 'ಒಟಿಆರ್ ಮುಖ ಗುರುತಿಸುವಿಕೆ ನೋಂದಣಿ']
    },
    geographicCoverage: {
      en: 'All States & Union Territories of India',
      kn: 'ಭಾರತದ ಎಲ್ಲಾ ರಾಜ್ಯಗಳು ಮತ್ತು ಕೇಂದ್ರಾಡಳಿತ ಪ್ರದೇಶಗಳು'
    },
    url: 'https://scholarships.gov.in/',
    verificationStatus: 'verified_active',
    lastChecked: '2026-09-02'
  }
];
