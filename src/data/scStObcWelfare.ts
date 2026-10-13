export interface ScStObcScheme {
  id: string;
  title: { en: string; kn: string };
  category: 
    | 'scholarship_education' 
    | 'hostel_boarding' 
    | 'exam_coaching' 
    | 'education_loans' 
    | 'self_employment_loans' 
    | 'housing_welfare' 
    | 'land_agriculture' 
    | 'atrocity_legal_aid' 
    | 'certificates_reservation';
  targetCommunities: ('SC' | 'ST' | 'OBC' | 'Minority')[];
  administeringDepartment: { en: string; kn: string };
  keyBenefits: { en: string[]; kn: string[] };
  eligibilitySummary: { en: string; kn: string };
  incomeCeiling: { en: string; kn: string };
  documentsRequired: { en: string[]; kn: string[] };
  howToApply: { en: string[]; kn: string[] };
  officialLink: string;
  importantNote?: { en: string; kn: string };
}

export interface CasteCertificateGuide {
  title: { en: string; kn: string };
  certificateType: 'caste' | 'income' | 'domicile' | 'reservation_category';
  portalName: string;
  portalUrl: string;
  expectedTurnaroundDays: number;
  officialFee: string;
  mandatoryDocuments: { en: string[]; kn: string[] };
  steps: { en: string[]; kn: string[] };
  commonRejectionReasons: { en: string[]; kn: string[] };
}

export interface ReservationBreakdown {
  category: string;
  nameKn: string;
  percentageKarnataka: string;
  percentageCentral: string;
  communitiesCovered: string;
  incomeLimitOBC: string;
}

export const RESERVATION_ROSTER: ReservationBreakdown[] = [
  {
    category: 'Scheduled Castes (SC)',
    nameKn: 'ಪರಿಶಿಷ್ಟ ಜಾತಿ (SC)',
    percentageKarnataka: '17% (Increased from 15%)',
    percentageCentral: '15%',
    communitiesCovered: 'Adi Karnataka, Adi Dravida, Madiga, Holeya, Bhovi, Banjara, and allied sub-castes',
    incomeLimitOBC: 'No creamy layer concept for SC'
  },
  {
    category: 'Scheduled Tribes (ST)',
    nameKn: 'ಪರಿಶಿಷ್ಟ ಪಂಗಡ (ST)',
    percentageKarnataka: '7% (Increased from 3%)',
    percentageCentral: '7.5%',
    communitiesCovered: 'Nayaka, Valmiki, Jenu Kuruba, Kadu Kuruba, Soliga, Koraga, Hakki Pikki',
    incomeLimitOBC: 'No creamy layer concept for ST'
  },
  {
    category: 'Category 1 (OBC Most Backward)',
    nameKn: 'ಪ್ರವರ್ಗ ೧ (ಅತ್ಯಂತ ಹಿಂದುಳಿದ)',
    percentageKarnataka: '4%',
    percentageCentral: 'Covered under Central OBC (27%)',
    communitiesCovered: 'Tigala, Uppara, Meda, Kumbara, Agasa, Vishwakarma, Idiga, and nomad communities',
    incomeLimitOBC: 'Family income up to ₹2.5 Lakhs/year'
  },
  {
    category: 'Category 2A (OBC Relatively Backward)',
    nameKn: 'ಪ್ರವರ್ಗ ೨ಎ (ಸಾಕಷ್ಟು ಹಿಂದುಳಿದ)',
    percentageKarnataka: '15%',
    percentageCentral: 'Covered under Central OBC (27%)',
    communitiesCovered: 'Kuruba, Devanga, Ganiga, Padmashali, Vishwakarma, Ediga, Billava, and others (102 castes)',
    incomeLimitOBC: 'Family income up to ₹8 Lakhs/year (Creamy layer ceiling)'
  },
  {
    category: 'Category 2B (Backward Muslim Minority)',
    nameKn: 'ಪ್ರವರ್ಗ ೨ಬಿ (ಅಲ್ಪಸಂಖ್ಯಾತರು)',
    percentageKarnataka: '4%',
    percentageCentral: 'Covered under Central OBC (27%)',
    communitiesCovered: 'Muslim community in Karnataka',
    incomeLimitOBC: 'Family income up to ₹8 Lakhs/year'
  },
  {
    category: 'Category 3A (OBC Farming Backward)',
    nameKn: 'ಪ್ರವರ್ಗ ೩ಎ',
    percentageKarnataka: '4%',
    percentageCentral: 'Covered under Central OBC (27%)',
    communitiesCovered: 'Vokkaliga, Gowda, Reddys, Kunchitiga, and allied sub-groups',
    incomeLimitOBC: 'Family income up to ₹8 Lakhs/year'
  },
  {
    category: 'Category 3B (OBC Backward Other)',
    nameKn: 'ಪ್ರವರ್ಗ ೩ಬಿ',
    percentageKarnataka: '5%',
    percentageCentral: 'Covered under Central OBC (27%)',
    communitiesCovered: 'Lingayat/Veerashaiva sub-sects, Marathas, Bunt, Christian, and allied sub-groups',
    incomeLimitOBC: 'Family income up to ₹8 Lakhs/year'
  }
];

export const SC_ST_OBC_SCHEMES_DATABASE: ScStObcScheme[] = [
  {
    id: 'ssp-post-matric-sc-st',
    title: {
      en: 'State Scholarship Portal (SSP) Post-Matric SC/ST Scholarship',
      kn: 'ರಾಜ್ಯ ವಿದ್ಯಾರ್ಥಿವೇತನ ಪೋರ್ಟಲ್ (ಎಸ್‌ಎಸ್‌ಪಿ) ಮೆಟ್ರಿಕ್ ನಂತರದ ಎಸ್‌ಸಿ/ಎಸ್‌ಟಿ ವಿದ್ಯಾರ್ಥಿವೇತನ'
    },
    category: 'scholarship_education',
    targetCommunities: ['SC', 'ST'],
    administeringDepartment: {
      en: 'Social Welfare & Scheduled Tribes Welfare Departments, Karnataka',
      kn: 'ಸಮಾಜ ಕಲ್ಯಾಣ ಇಲಾಖೆ ಮತ್ತು ಪರಿಶಿಷ್ಟ ಪಂಗಡಗಳ ಕಲ್ಯಾಣ ಇಲಾಖೆ, ಕರ್ನಾಟಕ'
    },
    keyBenefits: {
      en: [
        '100% Full college tuition fee and exam fee reimbursement directly to institution',
        'Monthly maintenance allowance (Day Scholar: ₹550–₹1,200/mo; Hosteller: ₹1,200–₹4,000/mo depending on degree/professional course)',
        'Zero tuition fee burden in engineering, medical, degree, polytechnic, and post-grad courses'
      ],
      kn: [
        'ಕಾಲೇಜು ಬೋಧನಾ ಶುಲ್ಕ ಮತ್ತು ಪರೀಕ್ಷಾ ಶುಲ್ಕದ ಶೇ. ೧೦೦ ರಷ್ಟು ಮರುಪಾವತಿ',
        'ಮಾಸಿಕ ನಿರ್ವಹಣಾ ಭತ್ಯೆ (ಡೇ ಸ್ಕಾಲರ್: ₹550-₹1,200; ಹಾಸ್ಟೆಲರ್: ₹1,200-₹4,000)',
        'ಎಂಜಿನಿಯರಿಂಗ್, ವೈದ್ಯಕೀಯ ಮತ್ತು ಪದವಿ ಕೋರ್ಸ್‌ಗಳಿಗೆ ಸಂಪೂರ್ಣ ಉಚಿತ ಶಿಕ್ಷಣ'
      ]
    },
    eligibilitySummary: {
      en: 'Karnataka SC/ST students studying in PUC, ITI, Diploma, Degree, Masters, Engineering, or Medical with valid Caste RD number.',
      kn: 'ಪಿಯುಸಿ, ಐಟಿಐ, ಡಿಪ್ಲೋಮಾ, ಪದವಿ, ಎಂಜಿನಿಯರಿಂಗ್, ವೈದ್ಯಕೀಯ ಓದುತ್ತಿರುವ ಎಸ್‌ಸಿ/ಎಸ್‌ಟಿ ವಿದ್ಯಾರ್ಥಿಗಳು.'
    },
    incomeCeiling: {
      en: 'Parental annual income limit is ₹2,50,000 per annum for 100% reimbursement (extended subsidies up to ₹10 Lakhs for professional courses)',
      kn: 'ಪೋಷಕರ ವಾರ್ಷಿಕ ಆದಾಯ ₹2.5 ಲಕ್ಷಕ್ಕಿಂತ ಕಡಿಮೆ ಇರಬೇಕು'
    },
    documentsRequired: {
      en: ['Student & Parent Aadhaar with active mobile OTP link', 'Caste & Income Certificate RD Numbers (from Nadakacheri)', 'SSLC Register Number (KSEEB)', 'College Admission Receipt & Fee Details', 'Aadhaar-seeded Bank Passbook (NPCI mapped)'],
      kn: ['ಆಧಾರ್ ಕಾರ್ಡ್', 'ನಾಡಕಚೇರಿಯ ಜಾತಿ ಮತ್ತು ಆದಾಯ ಪ್ರಮಾಣಪತ್ರದ ಆರ್‌ಡಿ ಸಂಖ್ಯೆ', 'ಎಸ್ಸೆಸ್ಸೆಲ್ಸಿ ಅಂಕಪಟ್ಟಿ', 'ಕಾಲೇಜು ಪ್ರವೇಶ ರಸೀದಿ', 'ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್']
    },
    howToApply: {
      en: [
        'Step 1: Obtain Caste & Income Certificate from Nadakacheri.',
        'Step 2: Visit https://ssp.postmatric.karnataka.gov.in/ and create student account using Aadhaar.',
        'Step 3: Enter E-Attestation of documents through college nodal officer.',
        'Step 4: Submit application online; track DBT disbursal on portal.'
      ],
      kn: [
        'ಹಂತ ೧: ನಾಡಕಚೇರಿಯಿಂದ ಜಾತಿ & ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ ಪಡೆಯಿರಿ.',
        'ಹಂತ ೨: ssp.postmatric.karnataka.gov.in ಗೆ ಭೇಟಿ ನೀಡಿ ಆಧಾರ್ ಮೂಲಕ ಖಾತೆ ತೆರೆಯಿರಿ.',
        'ಹಂತ ೩: ಕಾಲೇಜು ಪ್ರಾಧ್ಯಾಪಕರ ಮೂಲಕ ಇ-ದೃಢೀಕರಣ (E-Attestation) ಮಾಡಿಸಿ.',
        'ಹಂತ ೪: ಅರ್ಜಿ ಸಲ್ಲಿಸಿ ಡಿಬಿಟಿ ಸ್ಟೇಟಸ್ ಪರಿಶೀಲಿಸಿ.'
      ]
    },
    officialLink: 'https://ssp.postmatric.karnataka.gov.in/',
    importantNote: {
      en: 'E-Attestation at your college is MANDATORY before your SSP application is verified by the department.',
      kn: 'ನಿಮ್ಮ ಕಾಲೇಜಿನಲ್ಲಿ ಇ-ಅಟೆಸ್ಟೇಶನ್ (E-Attestation) ಮಾಡಿಸುವುದು ಕಡ್ಡಾಯವಾಗಿದೆ.'
    }
  },
  {
    id: 'ssp-post-matric-obc-vidyasiri',
    title: {
      en: 'SSP OBC Vidyasiri & Fee Concession Scheme (Epass Karnataka)',
      kn: 'ಹಿಂದುಳಿದ ವರ್ಗಗಳ (OBC) ವಿದ್ಯಾಸಿರಿ & ಶುಲ್ಕ ರಿಯಾಯಿತಿ ಯೋಜನೆ'
    },
    category: 'scholarship_education',
    targetCommunities: ['OBC'],
    administeringDepartment: {
      en: 'Backward Classes Welfare Department (D. Devaraj Urs Bhavan), Karnataka',
      kn: 'ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಕಲ್ಯಾಣ ಇಲಾಖೆ (ಡಿ. ದೇವರಾಜ ಅರಸು ಭವನ), ಕರ್ನಾಟಕ'
    },
    keyBenefits: {
      en: [
        'Fee Concession: Complete or partial waiver of government tuition and laboratory fees',
        'Vidyasiri Food & Accommodation: ₹1,500 per month credited directly to bank account for 10 months (₹15,000/year) for students who could not get government hostel seats'
      ],
      kn: [
        'ಶುಲ್ಕ ವಿನಾಯಿತಿ: ಸರ್ಕಾರಿ ಕಾಲೇಜು ಬೋಧನಾ ಶುಲ್ಕ ಸಂಪೂರ್ಣ ವಿನಾಯಿತಿ',
        'ವಿದ್ಯಾಸಿರಿ ಊಟ & ವಸತಿ ಸಹಾಯ: ಹಾಸ್ಟೆಲ್ ಸೀಟು ಸಿಗದ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಪ್ರತಿ ತಿಂಗಳು ₹1,500 ರಂತೆ ವರ್ಷಕ್ಕೆ ₹15,000 ನೇರ ಜಮೆ'
      ]
    },
    eligibilitySummary: {
      en: 'Category 1, 2A, 2B, 3A, 3B students studying in recognized post-matric colleges residing at least 5km away from college.',
      kn: 'ಪ್ರವರ್ಗ ೧, ೨ಎ, ೨ಬಿ, ೩ಎ, ೩ಬಿ ವಿದ್ಯಾರ್ಥಿಗಳು (ಕಾಲೇಜಿನಿಂದ ೫ ಕಿಮೀ ಗಿಂತ ದೂರದಲ್ಲಿರುವವರು).'
    },
    incomeCeiling: {
      en: 'Category 1: ₹2.50 Lakhs/year; Category 2A, 2B, 3A, 3B: ₹1.00 Lakh to ₹2.50 Lakhs/year',
      kn: 'ಪ್ರವರ್ಗ ೧ ಕ್ಕೆ ₹2.5 ಲಕ್ಷ; ಇತರ ಪ್ರವರ್ಗಗಳಿಗೆ ₹1 ಲಕ್ಷದಿಂದ ₹2.5 ಲಕ್ಷ'
    },
    documentsRequired: {
      en: ['OBC Caste & Income Certificate (RD number)', 'College Bonafide Certificate', 'Distance Certificate (Rural to Urban)', 'Aadhaar-seeded Bank Account'],
      kn: ['ಜಾತಿ & ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ', 'ಕಾಲೇಜು ದೃಢೀಕರಣ ಪತ್ರ', 'ದೂರದ ಪ್ರಮಾಣಪತ್ರ', 'ಆಧಾರ್ ಲಿಂಕ್ ಬ್ಯಾಂಕ್ ಖಾತೆ']
    },
    howToApply: {
      en: [
        'Apply on SSP Post-Matric Portal under Backward Classes Welfare Department.',
        'Select Vidyasiri or Fee Concession during application.',
        'Verification done by Taluk Backward Classes Welfare Officer (BCWO).'
      ],
      kn: [
        'ಎಸ್‌ಎಸ್‌ಪಿ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಕಲ್ಯಾಣ ಇಲಾಖೆಯಡಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.',
        'ವಿದ್ಯಾಸಿರಿ ಅಥವಾ ಶುಲ್ಕ ವಿನಾಯಿತಿಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿ.',
        'ತಾಲೂಕು ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಕಲ್ಯಾಣಾಧಿಕಾರಿ ಪರಿಶೀಲಿಸುತ್ತಾರೆ.'
      ]
    },
    officialLink: 'https://bcwd.karnataka.gov.in/'
  },
  {
    id: 'free-govt-hostel-facilities',
    title: {
      en: 'Free Government Hostels & Residential Facilities (Pre & Post Matric)',
      kn: 'ಸರ್ಕಾರಿ ಉಚಿತ ವಸತಿ ನಿಲಯಗಳು (ಪೂರ್ವ & ಮೆಟ್ರಿಕ್ ನಂತರದ ಹಾಸ್ಟೆಲ್‌ಗಳು)'
    },
    category: 'hostel_boarding',
    targetCommunities: ['SC', 'ST', 'OBC', 'Minority'],
    administeringDepartment: {
      en: 'Social Welfare & Backward Classes Departments, Karnataka',
      kn: 'ಸಮಾಜ ಕಲ್ಯಾಣ ಮತ್ತು ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಕಲ್ಯಾಣ ಇಲಾಖೆ'
    },
    keyBenefits: {
      en: [
        '100% Free nutritious boarding, breakfast, lunch, and dinner everyday',
        'Free accommodation, study cots, bedding, uniforms, and study books',
        'Dedicated library, digital computer room, and mentorship in district/taluk centres'
      ],
      kn: [
        'ಸಂಪೂರ್ಣ ಉಚಿತ ಪೌಷ್ಟಿಕ ಊಟ, ಉಪಾಹಾರ ಮತ್ತು ರಾತ್ರಿಯ ಊಟ',
        'ಉಚಿತ ವಸತಿ, ಮಂಚ, ಬೆಡ್ಡಿಂಗ್, ಸಮವಸ್ತ್ರ ಮತ್ತು ಪಠ್ಯಪುಸ್ತಕಗಳು',
        'ಡಿಜಿಟಲ್ ಲೈಬ್ರರಿ ಮತ್ತು ಸುರಕ್ಷಿತ ಪರಿಸರ'
      ]
    },
    eligibilitySummary: {
      en: 'School and college students whose permanent home is at least 5 km away from their educational institution.',
      kn: 'ಶಾಲಾ-ಕಾಲೇಜುಗಳಿಂದ ೫ ಕಿ.ಮೀ ಗಿಂತ ದೂರದ ಊರುಗಳಿಂದ ಬರುವ ಬಡ ವಿದ್ಯಾರ್ಥಿಗಳು.'
    },
    incomeCeiling: {
      en: 'SC/ST: up to ₹2.50 Lakhs; OBC: up to ₹1.00 Lakh/year',
      kn: 'ಎಸ್‌ಸಿ/ಎಸ್‌ಟಿ: ₹2.5 ಲಕ್ಷ; ಹಿಂದುಳಿದ ವರ್ಗ: ₹1 ಲಕ್ಷ'
    },
    documentsRequired: {
      en: ['College admission receipt', 'Caste & Income Certificate', 'Residence certificate / Ration card', 'Aadhaar Card'],
      kn: ['ಕಾಲೇಜು ಪ್ರವೇಶ ರಸೀದಿ', 'ಜಾತಿ & ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ', 'ಪಡಿತರ ಚೀಟಿ', 'ಆಧಾರ್ ಕಾರ್ಡ್']
    },
    howToApply: {
      en: [
        'Apply online on the Karnataka State Hostel Admission Portal (sw.kar.nic.in / bcwd.karnataka.gov.in) every year in June/July.',
        'Merit-based admission allotment with reservation roster.',
        'Direct check-in with warden after physical document verification.'
      ],
      kn: [
        'ಪ್ರತಿ ವರ್ಷ ಜೂನ್/ಜುಲೈನಲ್ಲಿ ಆನ್‌ಲೈನ್ ಹಾಸ್ಟೆಲ್ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.',
        'ಮೆರಿಟ್ ಮತ್ತು ಮೀಸಲಾತಿ ಆಧಾರದ ಮೇಲೆ ವಾರ್ಡನ್ ಸೀಟು ಹಂಚಿಕೆ ಮಾಡುತ್ತಾರೆ.'
      ]
    },
    officialLink: 'https://sw.kar.nic.in/'
  },
  {
    id: 'arivu-education-loan-scheme',
    title: {
      en: 'Arivu Education Loan Scheme (Zero / 2% Interest for Higher Studies)',
      kn: 'ಅರಿವು ಶೈಕ್ಷಣಿಕ ಸಾಲ ಯೋಜನೆ (ಉನ್ನತ ಶಿಕ್ಷಣಕ್ಕಾಗಿ ಶೇ. ೨ ಬಡ್ಡಿದರದಲ್ಲಿ ಸಾಲ)'
    },
    category: 'education_loans',
    targetCommunities: ['OBC', 'Minority', 'SC', 'ST'],
    administeringDepartment: {
      en: 'D. Devaraj Urs Backward Classes Dev Corp & Karnataka Minority Dev Corp',
      kn: 'ಡಿ. ದೇವರಾಜ ಅರಸು ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಅಭಿವೃದ್ಧಿ ನಿಗಮ ಮತ್ತು ಅಲ್ಪಸಂಖ್ಯಾತರ ಅಭಿವೃದ್ಧಿ ನಿಗಮ'
    },
    keyBenefits: {
      en: [
        'Loans up to ₹1,00,000 per year for Engineering, MBA, MCA, Law, Agricultural BSc',
        'Loans up to ₹5,00,000 to ₹10,00,000 for MBBS, BDS, and Post-Graduate Medical studies',
        'Subsidized annual interest rate of only 2% with repayment starting only after course completion'
      ],
      kn: [
        'ಎಂಜಿನಿಯರಿಂಗ್, ಎಂಬಿಎ, ಕಾನೂನು ಕೋರ್ಸ್‌ಗಳಿಗೆ ವರ್ಷಕ್ಕೆ ₹1,00,000 ದವರೆಗೆ ಸಾಲ',
        'ಎಂಬಿಬಿಎಸ್ ಮತ್ತು ವೈದ್ಯಕೀಯ ಶಿಕ್ಷಣಕ್ಕೆ ₹5,00,000 ದಿಂದ ₹10,00,000 ದವರೆಗೆ ಸಾಲ',
        'ಕೇವಲ ಶೇ. ೨ ರ ರಿಯಾಯಿತಿ ಬಡ್ಡಿದರ; ಕೋರ್ಸ್ ಮುಗಿದ ನಂತರ ಮರುಪಾವತಿ ಆರಂಭ'
      ]
    },
    eligibilitySummary: {
      en: 'Students admitted through Karnataka Examination Authority (KEA / CET / NEET) into professional colleges.',
      kn: 'ಕೆಇಎ (KEA / CET / NEET) ಮೂಲಕ ಮೆರಿಟ್ ಆಧಾರದಲ್ಲಿ ಕಾಲೇಜು ಪ್ರವೇಶ ಪಡೆದ ವಿದ್ಯಾರ್ಥಿಗಳು.'
    },
    incomeCeiling: {
      en: 'Family annual income must not exceed ₹3,50,000 per annum',
      kn: 'ಕುಟುಂಬದ ವಾರ್ಷಿಕ ಆದಾಯ ₹3.50 ಲಕ್ಷ ಮೀರಿರಬಾರದು'
    },
    documentsRequired: {
      en: ['KEA CET/NEET Admission Allotment Order', 'Caste and Income Certificate', 'Aadhaar Card', 'College Fee Structure', 'Surety/Guarantor agreement'],
      kn: ['ಕೆಇಎ ಸೀಟ್ ಹಂಚಿಕೆ ಪತ್ರ', 'ಜಾತಿ & ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ', 'ಆಧಾರ್ ಕಾರ್ಡ್', 'ಕಾಲೇಜು ಶುಲ್ಕ ಪಟ್ಟಿ']
    },
    howToApply: {
      en: [
        'Apply online on kmdc.karnataka.gov.in or devrajurs.karnataka.gov.in after receiving KEA allotment.',
        'Loan amount directly transferred to KEA / College bank account via RTGS.'
      ],
      kn: [
        'ಕೆಇಎ ಸೀಟು ಹಂಚಿಕೆ ಬಂದ ತಕ್ಷಣ ನಿಗಮದ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಆನ್‌ಲೈನ್ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.',
        'ಸಾಲದ ಮೊತ್ತವನ್ನು ನೇರವಾಗಿ ಕಾಲೇಜಿಗೆ ಆರ್‌ಟಿಜಿಎಸ್ ಮಾಡಲಾಗುತ್ತದೆ.'
      ]
    },
    officialLink: 'https://kmdc.karnataka.gov.in/'
  },
  {
    id: 'ganga-kalyana-irrigation-scheme',
    title: {
      en: 'Ganga Kalyana Scheme (Free Borewell & Irrigation for Small Farmers)',
      kn: 'ಗಂಗಾ ಕಲ್ಯಾಣ ಯೋಜನೆ (ಸಣ್ಣ ರೈತರಿಗೆ ಉಚಿತ ಕೊಳವೆಬಾವಿ & ನೀರಾವರಿ)'
    },
    category: 'land_agriculture',
    targetCommunities: ['SC', 'ST', 'OBC', 'Minority'],
    administeringDepartment: {
      en: 'Dr. B.R. Ambedkar, Valmiki & D. Devaraj Urs Development Corporations',
      kn: 'ಡಾ. ಬಿ.ಆರ್. ಅಂಬೇಡ್ಕರ್, ಮಹರ್ಷಿ ವಾಲ್ಮೀಕಿ & ದೇವರಾಜ ಅರಸು ಅಭಿವೃದ್ಧಿ ನಿಗಮಗಳು'
    },
    keyBenefits: {
      en: [
        '100% Free drilling of deep agricultural borewell on the farmer’s land',
        'Free submersible motor pump, electrification, pipes, and control panel installation',
        'Complete capital subsidy of ₹2.50 Lakhs to ₹3.50 Lakhs per individual/group borewell'
      ],
      kn: [
        'ರೈತರ ಜಮೀನಿನಲ್ಲಿ ಸಂಪೂರ್ಣ ಉಚಿತ ಕೊಳವೆಬಾವಿ ಕೊರೆಯಿಸುವುದು',
        'ಉಚಿತ ಸಬ್‌ಮರ್ಸಿಬಲ್ ಮೋಟಾರ್, ವಿದ್ಯುತ್ ಸಂಪರ್ಕ, ಪೈಪ್‌ಗಳು ಮತ್ತು ಸ್ಟಾರ್ಟರ್ ಪ್ಯಾನಲ್',
        'ಪ್ರತಿ ಕೊಳವೆಬಾವಿಗೆ ₹2.50 ಲಕ್ಷದಿಂದ ₹3.50 ಲಕ್ಷದವರೆಗೆ ಪೂರ್ಣ ಸಹಾಯಧನ'
      ]
    },
    eligibilitySummary: {
      en: 'Small and marginal farmers holding between 1.20 acres to 5 acres of dry agricultural land without other water sources.',
      kn: '೧.೨೦ ಎಕರೆಯಿಂದ ೫ ಎಕರೆಯವರೆಗೆ ಖುಷ್ಕಿ ಜಮೀನು ಹೊಂದಿರುವ ಸಣ್ಣ ಮತ್ತು ಅತಿ ಸಣ್ಣ ರೈತರು.'
    },
    incomeCeiling: {
      en: 'Rural family annual income below ₹1,50,000; Urban family below ₹2,00,000',
      kn: 'ಗ್ರಾಮೀಣ ಕುಟುಂಬದ ವಾರ್ಷಿಕ ಆದಾಯ ₹1.50 ಲಕ್ಷದೊಳಗಿರಬೇಕು'
    },
    documentsRequired: {
      en: ['Land RTC (Pahani) in farmer name', 'Caste and Income certificate from Nadakacheri', 'Small Farmer Certificate from Tahsildar/Agriculture Dept', 'Aadhaar Card and Bank Passbook'],
      kn: ['ಜಮೀನಿನ ಆರ್‌ಟಿಸಿ (ಪಹಣಿ)', 'ಜಾತಿ & ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ', 'ಸಣ್ಣ ರೈತರ ಪ್ರಮಾಣಪತ್ರ', 'ಆಧಾರ್ ಮತ್ತು ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್']
    },
    howToApply: {
      en: [
        'Call for applications opened in August/September on Seva Sindhu.',
        'Selection done by District-Level MLA/DC Selection Committee.',
        'Govt geo-hydrologist marks drilling point on satellite survey.'
      ],
      kn: [
        'ಸೇವಾ ಸಿಂಧು ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಅರ್ಜಿ ಆಹ್ವಾನಿಸಿದಾಗ ಆನ್‌ಲೈನ್ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.',
        'ಜಿಲ್ಲಾ ಮಟ್ಟದ ಶಾಸಕರ ಸಮಿತಿ ಫಲಾನುಭವಿಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ.'
      ]
    },
    officialLink: 'https://adcl.karnataka.gov.in/'
  },
  {
    id: 'self-employment-corp-loans',
    title: {
      en: 'Dr. B.R. Ambedkar & Devaraj Urs Self-Employment Business Loans',
      kn: 'ಡಾ. ಬಿ.ಆರ್. ಅಂಬೇಡ್ಕರ್ ಮತ್ತು ದೇವರಾಜ ಅರಸು ಸ್ವಯಂ ಉದ್ಯೋಗ ಸಾಲ ಯೋಜನೆ'
    },
    category: 'self_employment_loans',
    targetCommunities: ['SC', 'ST', 'OBC'],
    administeringDepartment: {
      en: 'Karnataka State Scheduled Castes/Tribes & Backward Classes Dev Corporations',
      kn: 'ಕರ್ನಾಟಕ ಪರಿಶಿಷ್ಟ ಜಾತಿ/ಪಂಗಡ ಮತ್ತು ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಅಭಿವೃದ್ಧಿ ನಿಗಮಗಳು'
    },
    keyBenefits: {
      en: [
        'Udyoga Seva: 50% capital subsidy (up to ₹1,00,000 to ₹2,00,000) for micro-enterprises, dairy farming, retail shops, and transport vehicles',
        'Easy bank-tie up with 4% interest rate on the margin money component',
        'Special incentive for women SHG groups and youth entrepreneurs'
      ],
      kn: [
        'ಉದ್ಯೋಗ ಸೇವಾ: ಸಣ್ಣ ವ್ಯಾಪಾರ, ಹೈನುಗಾರಿಕೆ, ಅಂಗಡಿ ಮತ್ತು ವಾಹನ ಖರೀದಿಗೆ ಶೇ. ೫೦ ಸಬ್ಸಿಡಿ (₹1 ಲಕ್ಷದಿಂದ ₹2 ಲಕ್ಷದವರೆಗೆ)',
        'ಕೇವಲ ಶೇ. ೪ ರ ಬಡ್ಡಿದರದಲ್ಲಿ ಬ್ಯಾಂಕ್ ಸಾಲ ಸೌಲಭ್ಯ'
      ]
    },
    eligibilitySummary: {
      en: 'Unemployed youth aged 21 to 50 belonging to SC/ST/OBC categories desiring to start their own enterprise.',
      kn: 'ಸ್ವಂತ ವ್ಯಾಪಾರ ಅಥವಾ ಉದ್ಯೋಗ ಆರಂಭಿಸಲು ಬಯಸುವ ೨೧ ರಿಂದ ೫೦ ವರ್ಷದ ಯುವಕ-ಯುವತಿಯರು.'
    },
    incomeCeiling: {
      en: 'Below ₹1,50,000 for rural and ₹2,00,000 for urban areas',
      kn: 'ಗ್ರಾಮೀಣ: ₹1.5 ಲಕ್ಷ; ನಗರ: ₹2 ಲಕ್ಷ'
    },
    documentsRequired: {
      en: ['Project Proposal (DPR) / Quotation for machinery/vehicle', 'Caste and Income Certificate', 'Driving License (for transport vehicle loan)', 'Aadhaar Card'],
      kn: ['ಪ್ರಾಜೆಕ್ಟ್ ಪ್ರಪೋಸಲ್ / ಯಂತ್ರೋಪಕರಣದ ಕೊಟೇಶನ್', 'ಜಾತಿ & ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ', 'ಆಧಾರ್ ಕಾರ್ಡ್', 'ಡ್ರೈವಿಂಗ್ ಲೈಸೆನ್ಸ್']
    },
    howToApply: {
      en: [
        'Submit online application via Seva Sindhu during notification window.',
        'Attend District Selection Committee interview at Zilla Panchayat.'
      ],
      kn: [
        'ಸೇವಾ ಸಿಂಧು ಮೂಲಕ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ ಜಿಲ್ಲಾ ಸಮಿತಿ ಸಂದರ್ಶನಕ್ಕೆ ಹಾಜರಾಗಿ.'
      ]
    },
    officialLink: 'https://adcl.karnataka.gov.in/'
  },
  {
    id: 'atrocity-prevention-victim-relief',
    title: {
      en: 'SC/ST Prevention of Atrocities (PoA) Act Legal Aid & Monetary Relief',
      kn: 'ಪರಿಶಿಷ್ಟ ಜಾತಿ ಮತ್ತು ಪರಿಶಿಷ್ಟ ಪಂಗಡಗಳ ಮೇಲಿನ ದೌರ್ಜನ್ಯ ತಡೆ ಕಾಯ್ದೆ ಪರಿಹಾರ ಮತ್ತು ಕಾನೂನು ನೆರವು'
    },
    category: 'atrocity_legal_aid',
    targetCommunities: ['SC', 'ST'],
    administeringDepartment: {
      en: 'Social Welfare Department & District Magistrate (DC) / SP Office',
      kn: 'ಸಮಾಜ ಕಲ್ಯಾಣ ಇಲಾಖೆ ಹಾಗೂ ಜಿಲ್ಲಾಧಿಕಾರಿ / ಪೊಲೀಸ್ ವರಿಷ್ಠಾಧಿಕಾರಿ ಕಚೇರಿ'
    },
    keyBenefits: {
      en: [
        'Immediate statutory financial compensation from ₹85,000 up to ₹8,25,000 depending on crime severity under PoA Rules Schedule II',
        '25% released on FIR registration, 50% on chargesheet filing, and remaining 25% on court trial conclusion',
        'Free state legal counsel, travel allowance for court dates, and monthly maintenance allowance',
        'Full police protection and arms license priority for vulnerable witnesses'
      ],
      kn: [
        'ದೌರ್ಜನ್ಯಕ್ಕೊಳಗಾದ ಸಂತ್ರಸ್ತರಿಗೆ ₹85,000 ದಿಂದ ₹8,25,000 ದವರೆಗೆ ಕಾನೂನುಬದ್ಧ ಸರ್ಕಾರದ ತಕ್ಷಣದ ಪರಿಹಾರ',
        'ಎಫ್‌ಐಆರ್ ದಾಖಲಾದ ತಕ್ಷಣ ಶೇ. ೨೫, ಚಾರ್ಜ್‌ಶೀಟ್ ಸಲ್ಲಿಕೆಯಾದಾಗ ಶೇ. ೫೦ ಪರಿಹಾರ ಬಿಡುಗಡೆ',
        'ಉಚಿತ ಸರ್ಕಾರಿ ವಿಶೇಷ ವಕೀಲರ ಸೇವೆ, ಕೋರ್ಟ್ ಹಾಜರಾತಿಗೆ ಪ್ರಯಾಣ ಭತ್ಯೆ',
        'ಸಾಕ್ಷಿಗಳಿಗೆ ಸಂಪೂರ್ಣ ಪೊಲೀಸ್ ರಕ್ಷಣೆ'
      ]
    },
    eligibilitySummary: {
      en: 'Any SC or ST citizen who has been a victim of caste-based abuse, discrimination, physical assault, land grabbing, or indignity by non-SC/ST persons.',
      kn: 'ಜಾತಿ ನಿಂದನೆ, ದೌರ್ಜನ್ಯ, ಹಲ್ಲೆ ಅಥವಾ ಭೂಕಬಳಿಕೆಗೆ ಒಳಗಾದ ಯಾವುದೇ ಎಸ್‌ಸಿ ಅಥವಾ ಎಸ್‌ಟಿ ಸಮುದಾಯದ ನಾಗರಿಕರು.'
    },
    incomeCeiling: {
      en: 'Zero income ceiling — compensation is a constitutional fundamental right under PoA Act 1989',
      kn: 'ಯಾವುದೇ ಆದಾಯ ಮಿತಿಯಿಲ್ಲ (ಇದು ಸಂವಿಧಾನಬದ್ಧ ಹಕ್ಕು)'
    },
    documentsRequired: {
      en: ['Copy of registered FIR with PoA Act sections', 'Caste Certificate of the victim', 'Medical injury report / Post-mortem report (if applicable)', 'Bank account details of victim/heirs'],
      kn: ['ದಾಖಲಾದ ಎಫ್‌ಐಆರ್ ಪ್ರತಿ', 'ಜಾತಿ ಪ್ರಮಾಣಪತ್ರ', 'ವೈದ್ಯಕೀಯ ತಪಾಸಣಾ ವರದಿ', 'ಬ್ಯಾಂಕ್ ವಿವರ']
    },
    howToApply: {
      en: [
        'File complaint at nearest Police Station (Station House Officer is bound by law to register FIR immediately).',
        'Deputy Superintendent of Police (DySP) conducts mandatory enquiry.',
        'Social Welfare Department transfers relief fund via DBT under District Vigilance & Monitoring Committee.'
      ],
      kn: [
        'ಹತ್ತಿರದ ಪೊಲೀಸ್ ಠಾಣೆಯಲ್ಲಿ ದೂರು ದಾಖಲಿಸಿ ಎಫ್‌ಐಆರ್ ಪ್ರತಿ ಪಡೆಯಿರಿ.',
        'ಡಿವೈಎಸ್‌ಪಿ ತನಿಖೆ ನಡೆಸಿ ಸಮಾಜ ಕಲ್ಯಾಣ ಇಲಾಖೆಗೆ ಪರಿಹಾರ ಪ್ರಸ್ತಾವನೆ ಸಲ್ಲಿಸುತ್ತಾರೆ.'
      ]
    },
    officialLink: 'https://sw.kar.nic.in/',
    importantNote: {
      en: 'Toll-free National SC/ST Helpline: 14566 / 1800-202-1989. You can also approach the District Legal Services Authority (DLSA) for a free advocate.',
      kn: 'ರಾಷ್ಟ್ರೀಯ ಎಸ್‌ಸಿ/ಎಸ್‌ಟಿ ಸಹಾಯವಾಣಿ: ೧೪೫೬೬. ಉಚಿತ ವಕೀಲರ ಸೇವೆಗೆ ಡಿಎಲ್‌ಎಸ್‌ಎ ಸಂಪರ್ಕಿಸಿ.'
    }
  },
  {
    id: 'housing-dr-ambedkar-niwas',
    title: {
      en: 'Dr. B.R. Ambedkar & Devaraj Urs Rural/Urban Housing Schemes',
      kn: 'ಡಾ. ಬಿ.ಆರ್. ಅಂಬೇಡ್ಕರ್ ನಿವಾಸ್ & ದೇವರಾಜ ಅರಸು ವಸತಿ ಯೋಜನೆ'
    },
    category: 'housing_welfare',
    targetCommunities: ['SC', 'ST', 'OBC'],
    administeringDepartment: {
      en: 'Rajiv Gandhi Housing Corporation Limited (RGHCL), Karnataka',
      kn: 'ರಾಜೀವ್ ಗಾಂಧಿ ವಸತಿ ನಿಗಮ ನಿಯಮಿತ (ಆರ್‌ಜಿಎಚ್‌ಸಿಎಲ್), ಕರ್ನಾಟಕ'
    },
    keyBenefits: {
      en: [
        'Government subsidy of ₹1,75,000 for SC/ST beneficiaries and ₹1,20,000 for OBC beneficiaries to construct a permanent pucca house',
        'Direct stage-by-stage geo-tagged GPS mobile photo payment releases into beneficiary bank account',
        'Free electricity and drinking water tap connection under central convergence'
      ],
      kn: [
        'ಎಸ್‌ಸಿ/ಎಸ್‌ಟಿ ಫಲಾನುಭವಿಗಳಿಗೆ ₹1,75,000 ಹಾಗೂ ಒಬಿಸಿ ವರ್ಗಕ್ಕೆ ₹1,20,000 ನೇರ ಮನೆ ನಿರ್ಮಾಣ ಸಬ್ಸಿಡಿ',
        'ಜಿಪಿಎಸ್ ಮೊಬೈಲ್ ಫೋಟೋ ಆಧಾರದಲ್ಲಿ ಹಂತ-ಹಂತವಾಗಿ ನೇರ ಖಾತೆಗೆ ಹಣ ಜಮೆ',
        'ಉಚಿತ ವಿದ್ಯುತ್ ಮತ್ತು ಕುಡಿಯುವ ನೀರಿನ ನಲ್ಲಿ ಸಂಪರ್ಕ'
      ]
    },
    eligibilitySummary: {
      en: 'Houseless families or those living in kutcha/thatched roofs with own site or government-allotted Hakku Patra.',
      kn: 'ಸ್ವಂತ ಸೈಟ್ ಅಥವಾ ಹಕ್ಕು ಪತ್ರ ಹೊಂದಿರುವ ನಿರಾಶ್ರಿತ ಅಥವಾ ಗುಡಿಸಲಿನಲ್ಲಿ ವಾಸಿಸುವ ಕುಟುಂಬಗಳು.'
    },
    incomeCeiling: {
      en: 'Rural: Annual income ≤ ₹32,000; Urban: Annual income ≤ ₹87,600',
      kn: 'ಗ್ರಾಮೀಣ: ₹32,000; ನಗರ: ₹87,600'
    },
    documentsRequired: {
      en: ['Site Hakku Patra / Title Deed', 'BPL Ration Card', 'Caste and Income certificate', 'Aadhaar Card and Bank Passbook'],
      kn: ['ಸೈಟ್ ಹಕ್ಕುಪತ್ರ / ಜಾಗದ ದಾಖಲೆ', 'ಬಿಪಿಎಲ್ ಪಡಿತರ ಚೀಟಿ', 'ಜಾತಿ & ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ', 'ಆಧಾರ್ ಕಾರ್ಡ್']
    },
    howToApply: {
      en: [
        'Gram Panchayat conducts Ashraya housing grama sabha every year.',
        'Eligible list entered in Ashraya portal of Rajiv Gandhi Housing Corporation.',
        'Mobile app captures Foundation, Lintel, and Roof stage photos for auto-release of funds.'
      ],
      kn: [
        'ಗ್ರಾಮ ಪಂಚಾಯತಿಯ ಆಶ್ರಯ ಗ್ರಾಮ ಸಭೆಯಲ್ಲಿ ಫಲಾನುಭವಿಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಲಾಗುತ್ತದೆ.',
        'ಆಶ್ರಯ ಮೊಬೈಲ್ ಆ್ಯಪ್ ಮೂಲಕ ಹಂತವಾರು ಫೋಟೋ ತೆಗೆದು ಹಣ ಬಿಡುಗಡೆ ಮಾಡಲಾಗುತ್ತದೆ.'
      ]
    },
    officialLink: 'https://ashraya.karnataka.gov.in/'
  }
];

export const CASTE_CERTIFICATE_GUIDES: CasteCertificateGuide[] = [
  {
    title: {
      en: 'How to Obtain Official Caste Certificate (SC/ST Form D & OBC Form F)',
      kn: 'ಅಧಿಕೃತ ಜಾತಿ ಪ್ರಮಾಣಪತ್ರ ಪಡೆಯುವ ವಿಧಾನ (ನಮೂನೆ ಡಿ & ನಮೂನೆ ಎಫ್)'
    },
    certificateType: 'caste',
    portalName: 'Nadakacheri (Atalji Janasnehi Kendra) / Seva Sindhu',
    portalUrl: 'https://nadakacheri.karnataka.gov.in/',
    expectedTurnaroundDays: 21,
    officialFee: '₹40 at Bangalore One / Grama One Kiosk (or ₹25 online)',
    mandatoryDocuments: {
      en: [
        'School Transfer Certificate (TC) or Cumulative Record showing Caste of applicant or father',
        'Applicant Aadhaar Card with active mobile linkage',
        'Father or Paternal Blood Relative Caste Certificate (if available)',
        'Ration Card (BPL or APL) or Voter ID',
        'Affidavit / Self-declaration of caste'
      ],
      kn: [
        'ಶಾಲಾ ವರ್ಗಾವಣೆ ಪತ್ರ (ಟಿಸಿ) - ಜಾತಿ ನಮೂದಾಗಿರಬೇಕು',
        'ಆಧಾರ್ ಕಾರ್ಡ್',
        'ತಂದೆ ಅಥವಾ ರಕ್ತ ಸಂಬಂಧಿಯ ಜಾತಿ ಪ್ರಮಾಣಪತ್ರ',
        'ಪಡಿತರ ಚೀಟಿ ಅಥವಾ ಮತದಾರರ ಗುರುತಿನ ಚೀಟಿ',
        'ಸ್ವಯಂ ಘೋಷಣಾ ಪತ್ರ'
      ]
    },
    steps: {
      en: [
        '1. Visit nadakacheri.karnataka.gov.in or nearest Grama One / Bangalore One centre.',
        '2. Select "Caste Certificate" (SC/ST Form D or Category 1 Form E or Category 2A/2B/3A/3B Form F).',
        '3. Enter Aadhaar and upload school TC showing father/candidate caste.',
        '4. Pay ₹40 government fee and collect Acknowledgement Number (RD Number).',
        '5. Village Accountant (VA) verifies family lineage and submits recommendation to Revenue Inspector (RI).',
        '6. Tahsildar digitally signs the certificate. Download directly with RD number from Nadakacheri.'
      ],
      kn: [
        '೧. nadakacheri.karnataka.gov.in ಅಥವಾ ಹತ್ತಿರದ ಗ್ರಾಮ ಒನ್ / ಬೆಂಗಳೂರು ಒನ್‌ಗೆ ಭೇಟಿ ನೀಡಿ.',
        '೨. ಜಾತಿ ಪ್ರಮಾಣಪತ್ರ ಆಯ್ಕೆ ಮಾಡಿ (ಎಸ್‌ಸಿ/ಎಸ್‌ಟಿ ನಮೂನೆ ಡಿ, ಒಬಿಸಿ ನಮೂನೆ ಎಫ್).',
        '೩. ಆಧಾರ್ ಹಾಗೂ ಶಾಲಾ ಟಿಸಿ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.',
        '೪. ₹೪೦ ಶುಲ್ಕ ಪಾವತಿಸಿ ಆರ್‌ಡಿ ಸಂಖ್ಯೆ ಇರುವ ಸ್ವೀಕೃತಿ ರಸೀದಿ ಪಡೆಯಿರಿ.',
        '೫. ಗ್ರಾಮ ಲೆಕ್ಕಿಗರು ಮತ್ತು ಕಂದಾಯ ನಿರೀಕ್ಷಕರು ಪರಿಶೀಲಿಸುತ್ತಾರೆ.',
        '೬. ತಹಶೀಲ್ದಾರ್ ಡಿಜಿಟಲ್ ಸಹಿ ಮಾಡಿದ ನಂತರ ಆನ್‌ಲೈನ್‌ನಲ್ಲೇ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿಕೊಳ್ಳಿ.'
      ]
    },
    commonRejectionReasons: {
      en: [
        'School TC does not mention exact sub-caste or has spelling variance',
        'No historical lineage document connecting father and candidate',
        'Applying for mother’s caste (Under Indian personal law, caste follows paternal lineage except in matrilineal tribes)'
      ],
      kn: [
        'ಶಾಲಾ ಟಿಸಿಯಲ್ಲಿ ಜಾತಿ ಸ್ಪಷ್ಟವಾಗಿ ನಮೂದಾಗದಿರುವುದು',
        'ತಂದೆಯ ವಂಶಾವಳಿ ದಾಖಲೆ ಇಲ್ಲದಿರುವುದು',
        'ತಾಯಿಯ ಜಾತಿಯ ಆಧಾರದಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸುವುದು (ಪಿತೃಪ್ರಧಾನ ಕಾನೂನು ಅನ್ವಯ)'
      ]
    }
  },
  {
    title: {
      en: 'How to Obtain Income Certificate (Form G) for Scholarships & Subsidies',
      kn: 'ವಿದ್ಯಾರ್ಥಿವೇತನ & ಸಬ್ಸಿಡಿಗಾಗಿ ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ (ನಮೂನೆ ಜಿ) ಪಡೆಯುವ ವಿಧಾನ'
    },
    certificateType: 'income',
    portalName: 'Nadakacheri (Atalji Janasnehi Kendra)',
    portalUrl: 'https://nadakacheri.karnataka.gov.in/',
    expectedTurnaroundDays: 14,
    officialFee: '₹40 at citizen service centre',
    mandatoryDocuments: {
      en: [
        'Ration Card (BPL or APL)',
        'Aadhaar Card of earning family members',
        'Salary Slip / Form 16 (for salaried) OR Self-declaration of agricultural/informal income',
        'Electricity Bill / Tax Receipt of residential house'
      ],
      kn: [
        'ಪಡಿತರ ಚೀಟಿ (ಬಿಪಿಎಲ್ ಅಥವಾ ಎಪಿಎಲ್)',
        'ಕುಟುಂಬದ ಸದಸ್ಯರ ಆಧಾರ್ ಕಾರ್ಡ್',
        'ವೇತನ ಚೀಟಿ ಅಥವಾ ಕೃಷಿ ಆದಾಯದ ಸ್ವಯಂ ಘೋಷಣೆ',
        'ಮನೆಯ ವಿದ್ಯುತ್ ಬಿಲ್'
      ]
    },
    steps: {
      en: [
        '1. Login to Nadakacheri or visit Seva Sindhu centre.',
        '2. Fill in all sources of household income (agriculture, wage, business).',
        '3. Village Accountant field-verifies local living conditions and submits report.',
        '4. Tahsildar approves digital Income Certificate valid for 5 years.'
      ],
      kn: [
        '೧. ನಾಡಕಚೇರಿಯಲ್ಲಿ ಆದಾಯ ಪ್ರಮಾಣಪತ್ರಕ್ಕಾಗಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.',
        '೨. ಕುಟುಂಬದ ಎಲ್ಲಾ ಮೂಲಗಳ ಆದಾಯ ವಿವರ ನಮೂದಿಸಿ.',
        '೩. ಗ್ರಾಮ ಲೆಕ್ಕಿಗರ ಸ್ಥಳ ಪರಿಶೀಲನೆ ನಂತರ ತಹಶೀಲ್ದಾರ್ ಅನುಮೋದಿಸುತ್ತಾರೆ.',
        '೪. ಈ ಆದಾಯ ಪ್ರಮಾಣಪತ್ರವು ೫ ವರ್ಷಗಳವರೆಗೆ ಮಾನ್ಯತೆ ಹೊಂದಿರುತ್ತದೆ.'
      ]
    },
    commonRejectionReasons: {
      en: [
        'Mismatch between declared income and vehicle ownership / IT returns',
        'Failure to disclose income of government-employed parent'
      ],
      kn: [
        'ಐಟಿ ರಿಟರ್ನ್ಸ್ ಅಥವಾ ವಾಹನ ಮಾಲೀಕತ್ವ ಮುಚ್ಚಿಡುವುದು',
        'ಸರ್ಕಾರಿ ನೌಕರರ ವಿವರ ನಮೂದಿಸದಿರುವುದು'
      ]
    }
  }
];
