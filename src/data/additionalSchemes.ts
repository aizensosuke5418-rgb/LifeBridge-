import { Scheme } from '../types';

export const ADDITIONAL_SCHEMES: Scheme[] = [
  // ==========================================
  // 1. HEALTHCARE (4 SCHEMES -> TOTAL 5)
  // ==========================================
  {
    id: 'central-pm-janaushadhi',
    name: {
      en: 'Pradhan Mantri Bharatiya Janaushadhi Pariyojana (PMBJP)',
      kn: 'ಪ್ರಧಾನಮಂತ್ರಿ ಭಾರತೀಯ ಜನೌಷಧಿ ಪರಿಯೋಜನೆ (ಪಿಎಂಬಿಜೆಪಿ)'
    },
    shortName: 'PM Janaushadhi',
    authority: {
      en: 'Pharmaceuticals & Medical Devices Bureau of India (PMBI), Ministry of Chemicals & Fertilizers',
      kn: 'ಭಾರತೀಯ ಔಷಧ ಮತ್ತು ವೈದ್ಯಕೀಯ ಸಾಧನಗಳ ಬ್ಯೂರೋ, ಭಾರತ ಸರ್ಕಾರ'
    },
    level: 'central',
    category: 'healthcare',
    tagline: {
      en: 'Quality generic medicines and surgical items at 50% to 90% cheaper prices than branded equivalents.',
      kn: 'ಬ್ರ್ಯಾಂಡೆಡ್ ಮಾತ್ರೆಗಳಿಗಿಂತ ಶೇ. ೫೦ ರಿಂದ ೯೦ ರಷ್ಟು ಕಡಿಮೆ ಬೆಲೆಯಲ್ಲಿ ಗುಣಮಟ್ಟದ ಜನರಿಕ್ ಔಷಧಿಗಳು.'
    },
    description: {
      en: 'PMBJP operates over 10,000 Jan Aushadhi Kendras across India (including over 300 in Bengaluru) dispensing 1,900+ certified generic formulations and 290+ surgical consumables tested by NABL laboratories at affordable prices for all citizens.',
      kn: 'ಬೆಂಗಳೂರು ಸೇರಿದಂತೆ ದೇಶಾದ್ಯಂತ ಇರುವ ಜನೌಷಧಿ ಕೇಂದ್ರಗಳಲ್ಲಿ ೧,೯೦೦ಕ್ಕೂ ಹೆಚ್ಚು ಜನರಿಕ್ ಔಷಧಿಗಳು ಮತ್ತು ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ಸಾಮಗ್ರಿಗಳನ್ನು ಎನ್‌ಎಬಿಎಲ್ ಪ್ರಯೋಗಾಲಯಗಳಿಂದ ಪರೀಕ್ಷಿಸಿ ಅತ್ಯಂತ ರಿಯಾಯಿತಿ ದರದಲ್ಲಿ ಸಾರ್ವಜನಿಕರಿಗೆ ಒದಗಿಸಲಾಗುತ್ತದೆ.'
    },
    benefits: {
      en: [
        '50% to 90% savings on essential daily medicines for diabetes, blood pressure, cardiac and thyroid ailments',
        'Oxo-biodegradable Suvidha sanitary pads at ₹1 per pad',
        'Direct walk-in purchase with any valid doctor prescription; no BPL card required',
        'NABL certified chemical bio-equivalence matching expensive branded drugs'
      ],
      kn: [
        'ಮಧುಮೇಹ, ಬಿಪಿ, ಹೃದಯ ಮತ್ತು ಥೈರಾಯ್ಡ್ ದೈನಂದಿನ ಮಾತ್ರೆಗಳ ಮೇಲೆ ಶೇ. ೫೦ ರಿಂದ ೯೦ ರಿಯಾಯಿತಿ',
        'ಸುವಿಧಾ ಸ್ಯಾನಿಟರಿ ಪ್ಯಾಡ್ ಪ್ರತಿ ಪ್ಯಾಡ್‌ಗೆ ಕೇವಲ ₹೧',
        'ಯಾವುದೇ ನಾಗರಿಕರು ವೈದ್ಯರ ಚೀಟಿಯೊಂದಿಗೆ ನೇರವಾಗಿ ಖರೀದಿಸಬಹುದು; ಬಿಪಿಎಲ್ ಕಾರ್ಡ್ ಕಡ್ಡಾಯವಿಲ್ಲ',
        'ಉನ್ನತ ದರ್ಜೆಯ ಲ್ಯಾಬ್ ಪರೀಕ್ಷಿತ ಗುಣಮಟ್ಟ'
      ]
    },
    knownCriteria: {
      needsHealthcareHelp: true
    },
    disqualifyingConditions: {
      en: ['Prescription drugs require valid registered medical practitioner prescription'],
      kn: ['ವೈದ್ಯರ ಚೀಟಿ ಅಗತ್ಯವಿರುವ ಔಷಧಿಗಳಿಗೆ ಅಧಿಕೃತ ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಇರಬೇಕು']
    },
    requiredDocuments: {
      mandatory: {
        en: ['Doctor’s prescription for schedule H/X drugs (OTC items require no documents)'],
        kn: ['ವೈದ್ಯರ ಲಿಖಿತ ಚೀಟಿ (ಸಾಮಾನ್ಯ ವಸ್ತುಗಳಿಗೆ ದಾಖಲೆ ಅಗತ್ಯವಿಲ್ಲ)']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: ['Aadhaar for voluntary billing record'], kn: ['ಬಿಲ್ಲಿಂಗ್‌ಗಾಗಿ ಆಧಾರ್ ಸಂಖ್ಯೆ'] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Locate Nearest Janaushadhi Kendra', kn: 'ಹತ್ತಿರದ ಜನೌಷಧಿ ಕೇಂದ್ರ ಹುಡುಕಿ' },
        description: {
          en: 'Use LifeBridge Maps or the Jan Aushadhi Sugam app to find the nearest store in your Bengaluru ward.',
          kn: 'ಲೈಫ್‌ಬ್ರಿಡ್ಜ್ ನಕ್ಷೆ ಅಥವಾ ಜನೌಷಧಿ ಸುಗಮ್ ಆ್ಯಪ್ ಬಳಸಿ ನಿಮ್ಮ ಹತ್ತಿರದ ಮಳಿಗೆಯನ್ನು ಪತ್ತೆ ಮಾಡಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Show Prescription & Check Generic Name', kn: 'ವೈದ್ಯರ ಚೀಟಿ ನೀಡಿ ಜನರಿಕ್ ಹೆಸರು ಪರಿಶೀಲಿಸಿ' },
        description: {
          en: 'Pharmacist maps the chemical molecule (e.g., Metformin, Amlodipine, Telmisartan) to the low-cost PMBJP equivalent.',
          kn: 'ಔಷಧ ತಜ್ಞರು ನಿಮ್ಮ ಚೀಟಿಯಲ್ಲಿರುವ ರಾಸಾಯನಿಕ ಸೂತ್ರಕ್ಕೆ ತಕ್ಕ ಜನರಿಕ್ ಔಷಧ ನೀಡುತ್ತಾರೆ.'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Instant Purchase with Printed Bill', kn: 'ಮುದ್ರಿತ ರಸೀದಿಯೊಂದಿಗೆ ರಿಯಾಯಿತಿ ಖರೀದಿ' },
        description: {
          en: 'Collect medicines with digital bill. Average family savings range from ₹1,500 to ₹3,500 every month.',
          kn: 'ಡಿಜಿಟಲ್ ರಸೀದಿಯೊಂದಿಗೆ ಔಷಧಗಳನ್ನು ಪಡೆಯಿರಿ. ಪ್ರತಿ ತಿಂಗಳು ಸಾವಿರಾರು ರೂಪಾಯಿ ಉಳಿತಾಯವಾಗುತ್ತದೆ.'
        }
      }
    ],
    officialPortalUrl: 'https://janaushadhi.gov.in/',
    officialGuidelineUrl: 'https://janaushadhi.gov.in/pmbjp.aspx',
    responsibleDepartment: {
      en: 'Pharmaceuticals & Medical Devices Bureau of India (PMBI)',
      kn: 'ಭಾರತೀಯ ಔಷಧ ಬ್ಯೂರೋ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },
  {
    id: 'karnataka-namma-clinic',
    name: {
      en: 'Namma Clinic Urban Primary Health Centers (Bengaluru)',
      kn: 'ನಮ್ಮ ಕ್ಲಿನಿಕ್ ನಗರ ಪ್ರಾಥಮಿಕ ಆರೋಗ್ಯ ಕೇಂದ್ರಗಳು (ಬೆಂಗಳೂರು)'
    },
    category: 'healthcare',
    shortName: 'Namma Clinic',
    authority: {
      en: 'Bruhat Bengaluru Mahanagara Palike (BBMP) & Department of Health & Family Welfare, Karnataka',
      kn: 'ಬಿಬಿಎಂಪಿ & ಆರೋಗ್ಯ ಮತ್ತು ಕುಟುಂಬ ಕಲ್ಯಾಣ ಇಲಾಖೆ, ಕರ್ನಾಟಕ'
    },
    level: 'karnataka',
    tagline: {
      en: 'Free neighborhood primary healthcare, 14 diagnostic tests, and 128 essential drugs across BBMP wards.',
      kn: 'ಬಿಬಿಎಂಪಿ ವಾರ್ಡ್‌ಗಳಲ್ಲಿ ಉಚಿತ ಪ್ರಾಥಮಿಕ ಚಿಕಿತ್ಸೆ, ೧೪ ಉಚಿತ ಲ್ಯಾಬ್ ಪರೀಕ್ಷೆಗಳು & ೧೨೮ ಉಚಿತ ಔಷಧಿಗಳು.'
    },
    description: {
      en: 'Over 243 Namma Clinics are established across Bengaluru city wards to provide easily accessible outpatient care for daily wage earners, urban slum dwellers, and middle-class residents within walking distance.',
      kn: 'ಬೆಂಗಳೂರಿನ ಬಡ ಮತ್ತು ಮಧ್ಯಮ ವರ್ಗದ ನಾಗರಿಕರಿಗೆ ಮನೆಯ ಹತ್ತಿರವೇ ಉಚಿತ ವೈದ್ಯಕೀಯ ತಪಾಸಣೆ, ಪರೀಕ್ಷೆಗಳು ಮತ್ತು ಔಷಧಿಗಳನ್ನು ಒದಗಿಸಲು ಬಿಬಿಎಂಪಿ ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ೨೪೩ ಕ್ಕೂ ಹೆಚ್ಚು ನಮ್ಮ ಕ್ಲಿನಿಕ್‌ಗಳನ್ನು ಆರಂಭಿಸಲಾಗಿದೆ.'
    },
    benefits: {
      en: [
        '100% Free General Physician Consultation (OPD) 9:00 AM to 4:30 PM',
        '14 Basic Diagnostic Laboratory Tests free of charge (Blood Sugar, Hemoglobin, Urine, Typhoid)',
        '128 Essential Generic Medicines dispensed completely free of cost',
        'Maternal and child health counseling & early screening for hypertension and cancer'
      ],
      kn: [
        'ಬೆಳಿಗ್ಗೆ ೯ ರಿಂದ ಸಂಜೆ ೪:೩೦ ರವರೆಗೆ ಸಂಪೂರ್ಣ ಉಚಿತ ವೈದ್ಯರ ತಪಾಸಣೆ',
        '೧೪ ಅಗತ್ಯ ರಕ್ತ ಮತ್ತು ಮೂತ್ರ ಪರೀಕ್ಷೆಗಳು ಸಂಪೂರ್ಣ ಉಚಿತ',
        '೧೨೮ ಬಗೆಯ ಅತ್ಯಗತ್ಯ ಔಷಧಗಳು ನಯಾಪೈಸೆ ಶುಲ್ಕವಿಲ್ಲದೆ ಉಚಿತ ವಿತರಣೆ',
        'ತಾಯಿ ಮತ್ತು ಮಕ್ಕಳ ಆರೈಕೆ ಹಾಗೂ ಕ್ಯಾನ್ಸರ್ ಪೂರ್ವ ಪತ್ತೆ'
      ]
    },
    knownCriteria: {
      karnatakaResidentOnly: true,
      needsHealthcareHelp: true
    },
    disqualifyingConditions: {
      en: ['Tertiary and major surgical emergency procedures are referred to Victoria / KC General Hospitals'],
      kn: ['ದೊಡ್ಡ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗಳನ್ನು ವಿಕ್ಟೋರಿಯಾ ಅಥವಾ ಕೆ.ಸಿ. ಜನರಲ್ ಆಸ್ಪತ್ರೆಗೆ ರೆಫರ್ ಮಾಡಲಾಗುತ್ತದೆ']
    },
    requiredDocuments: {
      mandatory: {
        en: ['Any government ID or Aadhaar card for patient OPD registration slip'],
        kn: ['ನೋಂದಣಿಗಾಗಿ ಯಾವುದೇ ಸರ್ಕಾರಿ ಗುರುತಿನ ಚೀಟಿ ಅಥವಾ ಆಧಾರ್']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Visit Local Ward Namma Clinic', kn: 'ಸ್ಥಳೀಯ ವಾರ್ಡ್‌ನ ನಮ್ಮ ಕ್ಲಿನಿಕ್‌ಗೆ ಭೇಟಿ ನೀಡಿ' },
        description: {
          en: 'Walk in directly between 9:00 AM and 4:30 PM (Monday to Saturday). No pre-appointment required.',
          kn: 'ಸೋಮವಾರದಿಂದ ಶನಿವಾರದವರೆಗೆ ಬೆಳಿಗ್ಗೆ ೯ ರಿಂದ ಸಂಜೆ ೪:೩೦ ರೊಳಗೆ ನೇರವಾಗಿ ಭೇಟಿ ನೀಡಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Free Registration & Doctor Consultation', kn: 'ಉಚಿತ ನೋಂದಣಿ & ವೈದ್ಯರ ತಪಾಸಣೆ' },
        description: {
          en: 'Staff nurse registers basic vitals (BP, temperature, pulse) and doctor conducts thorough medical checkup.',
          kn: 'ಶುಶ್ರೂಷಕಿ ಬಿಪಿ ಹಾಗೂ ತೂಕ ಪರೀಕ್ಷಿಸಿದ ನಂತರ ವೈದ್ಯರು ಉಚಿತವಾಗಿ ತಪಾಸಣೆ ನಡೆಸುತ್ತಾರೆ.'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Free Lab Testing & In-House Pharmacy', kn: 'ಉಚಿತ ಲ್ಯಾಬ್ ಪರೀಕ್ಷೆ & ಔಷಧ ಪಡೆಯಿರಿ' },
        description: {
          en: 'Undergo blood/urine tests on the spot and collect prescribed medicines from the in-house free pharmacy.',
          kn: 'ಅಗತ್ಯವಿದ್ದರೆ ತಕ್ಷಣವೇ ರಕ್ತ ಪರೀಕ್ಷೆ ಮಾಡಿಸಿಕೊಂಡು ಕ್ಲಿನಿಕ್‌ನಲ್ಲೇ ಉಚಿತ ಔಷಧಿಗಳನ್ನು ಪಡೆದುಕೊಳ್ಳಿ.'
        }
      }
    ],
    officialPortalUrl: 'https://bbmp.karnataka.gov.in/',
    officialGuidelineUrl: 'https://hfw.karnataka.gov.in/',
    responsibleDepartment: {
      en: 'BBMP Health Directorate, Karnataka',
      kn: 'ಬಿಬಿಎಂಪಿ ಆರೋಗ್ಯ ನಿರ್ದೇಶನಾಲಯ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-10'
  },
  {
    id: 'karnataka-santwana-harish',
    name: {
      en: 'Mukhyamantri Santwana Harish Road Accident Scheme',
      kn: 'ಮುಖ್ಯಮಂತ್ರಿ ಸಾಂತ್ವನ ಹರೀಶ್ ರಸ್ತೆ ಅಪಘಾತ ಪರಿಹಾರ ಯೋಜನೆ'
    },
    category: 'healthcare',
    shortName: 'Santwana Harish Scheme',
    authority: {
      en: 'Suvarna Arogya Suraksha Trust (SAST), Government of Karnataka',
      kn: 'ಸುವರ್ಣ ಆರೋಗ್ಯ ಸುರಕ್ಷಾ ಟ್ರಸ್ಟ್ (ಸಾಸ್ತ್), ಕರ್ನಾಟಕ ಸರ್ಕಾರ'
    },
    level: 'karnataka',
    tagline: {
      en: 'Free cashless emergency trauma treatment up to ₹25,000 for the first 48 hours for any road accident victim.',
      kn: 'ರಸ್ತೆ ಅಪಘಾತಕ್ಕೊಳಗಾದವರಿಗೆ ಮೊದಲ ೪೮ ಗಂಟೆಗಳಲ್ಲಿ ₹25,000 ದವರೆಗೆ ಸಂಪೂರ್ಣ ಉಚಿತ ತುರ್ತು ಚಿಕಿತ್ಸೆ.'
    },
    description: {
      en: 'Named after Good Samaritan Harish Nanjappa, this scheme guarantees that any person injured in a road accident on Karnataka roads receives immediate trauma stabilization, ICU care, diagnostics, and surgery up to ₹25,000 across government and private empaneled hospitals without demanding cash deposits.',
      kn: 'ಕರ್ನಾಟಕದ ರಸ್ತೆಗಳಲ್ಲಿ ಅಪಘಾತಕ್ಕೊಳಗಾದ ಯಾವುದೇ ವ್ಯಕ್ತಿಗೆ (ಯಾವುದೇ ರಾಜ್ಯದವರಾದರೂ) ಅಪಘಾತವಾದ ಮೊದಲ ೪೮ ಗಂಟೆಗಳಲ್ಲಿ ಯಾವುದೇ ಮುಂಗಡ ಹಣ ಕೇಳದೆ ಖಾಸಗಿ ಹಾಗೂ ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ ₹25,000 ದವರೆಗೆ ತುರ್ತು ಉಚಿತ ಚಿಕಿತ್ಸೆ ನೀಡಲಾಗುತ್ತದೆ.'
    },
    benefits: {
      en: [
        'Cashless trauma care up to ₹25,000 for the critical golden first 48 hours',
        'Applicable to anyone meeting an accident in Karnataka regardless of domicile, income, or nationality',
        'Covers ICU charges, CT scans, blood transfusions, emergency wound suturing, and pain stabilization',
        'Private empaneled hospitals cannot demand advance cash before starting emergency care'
      ],
      kn: [
        'ಮೊದಲ ೪೮ ಗಂಟೆಗಳ ತುರ್ತು ಅವಧಿಯಲ್ಲಿ ₹25,000 ವರೆಗೆ ಉಚಿತ ಚಿಕಿತ್ಸೆ',
        'ಕರ್ನಾಟಕದ ರಸ್ತೆಗಳಲ್ಲಿ ಅಪಘಾತವಾದ ಯಾವುದೇ ವ್ಯಕ್ತಿಗೆ ಅನ್ವಯ (ಯಾವುದೇ ಜಾತಿ, ಆದಾಯ ಅಥವಾ ರಾಜ್ಯದ ಭೇದವಿಲ್ಲ)',
        'ಐಸಿಯು, ಸಿಟಿ ಸ್ಕ್ಯಾನ್, ರಕ್ತ ಮತ್ತು ತುರ್ತು ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಸೇರ್ಪಡೆ',
        'ಖಾಸಗಿ ಆಸ್ಪತ್ರೆಗಳು ಮುಂಗಡ ಹಣಕ್ಕಾಗಿ ಚಿಕಿತ್ಸೆ ತಡೆಯುವಂತಿಲ್ಲ'
      ]
    },
    knownCriteria: {
      needsHealthcareHelp: true
    },
    disqualifyingConditions: {
      en: ['Applies strictly to road accidents; non-road emergency illnesses are routed through PM-JAY'],
      kn: ['ರಸ್ತೆ ಅಪಘಾತಗಳಿಗೆ ಮಾತ್ರ ಅನ್ವಯ']
    },
    requiredDocuments: {
      mandatory: {
        en: ['Hospital generates cashless casualty entry directly; no documents required at admission'],
        kn: ['ಆಸ್ಪತ್ರೆಗೆ ದಾಖಲಿಸುವಾಗ ಯಾವುದೇ ದಾಖಲೆ ಅಗತ್ಯವಿಲ್ಲ (ನೇರ ತುರ್ತು ದಾಖಲಾತಿ)']
      },
      conditional: {
        en: ['Police intimation memo (MLC) generated automatically by treating hospital'],
        kn: ['ಆಸ್ಪತ್ರೆಯೇ ಪೊಲೀಸರಿಗೆ ಎಂಎಲ್‌ಸಿ ಮಾಹಿತಿ ನೀಡುತ್ತದೆ']
      },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Call 112 / 108 Emergency Ambulance', kn: '೧೧೨ ಅಥವಾ ೧೦೮ ಆಂಬ್ಯುಲೆನ್ಸ್‌ಗೆ ಕರೆ ಮಾಡಿ' },
        description: {
          en: 'Ambulance rushes victim to nearest designated trauma care hospital.',
          kn: 'ಆಂಬ್ಯುಲೆನ್ಸ್ ಮೂಲಕ ಗಾಯಾಳುವನ್ನು ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಗೆ ತಲುಪಿಸಲಾಗುತ್ತದೆ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Instant Admission under Santwana Harish', kn: 'ಸಾಂತ್ವನ ಯೋಜನೆಯಡಿ ತಕ್ಷಣದ ದಾಖಲಾತಿ' },
        description: {
          en: 'Casualty medical officer logs the incident on the SAST portal and triggers immediate resuscitation and diagnostic scans.',
          kn: 'ಆಸ್ಪತ್ರೆಯ ಸಿಬ್ಬಂದಿ ಸಾಸ್ತ್ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ನೋಂದಾಯಿಸಿ ತಕ್ಷಣ ಜೀವ ಉಳಿಸುವ ಚಿಕಿತ್ಸೆ ಆರಂಭಿಸುತ್ತಾರೆ.'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Cashless Hospital Bill Settlement', kn: 'ನಗದು ರಹಿತ ಬಿಲ್ ಇತ್ಯರ್ಥ' },
        description: {
          en: 'Government of Karnataka reimburses up to ₹25,000 directly to the hospital.',
          kn: 'ಸರ್ಕಾರವೇ ನೇರವಾಗಿ ₹25,000 ವರೆಗಿನ ಬಿಲ್ ಮೊತ್ತವನ್ನು ಆಸ್ಪತ್ರೆಗೆ ಪಾವತಿಸುತ್ತದೆ.'
        }
      }
    ],
    officialPortalUrl: 'https://arogya.karnataka.gov.in/',
    officialGuidelineUrl: 'https://sast.karnataka.gov.in/',
    responsibleDepartment: {
      en: 'Suvarna Arogya Suraksha Trust, Karnataka',
      kn: 'ಸುವರ್ಣ ಆರೋಗ್ಯ ಸುರಕ್ಷಾ ಟ್ರಸ್ಟ್'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-15'
  },
  {
    id: 'central-pm-dialysis',
    name: {
      en: 'Pradhan Mantri National Dialysis Programme (PMNDP)',
      kn: 'ಪ್ರಧಾನಮಂತ್ರಿ ರಾಷ್ಟ್ರೀಯ ಡಯಾಲಿಸಿಸ್ ಕಾರ್ಯಕ್ರಮ'
    },
    category: 'healthcare',
    shortName: 'PM National Dialysis',
    authority: {
      en: 'Ministry of Health & Family Welfare, GoI & Suvarna Arogya Trust, Karnataka',
      kn: 'ಕೇಂದ್ರ ಆರೋಗ್ಯ ಸಚಿವಾಲಯ & ಕರ್ನಾಟಕ ಆರೋಗ್ಯ ಇಲಾಖೆ'
    },
    level: 'both',
    tagline: {
      en: '100% Free hemodialysis sessions for kidney disease patients belonging to BPL families.',
      kn: 'ಬಿಪಿಎಲ್ ಕುಟುಂಬಗಳ ಕಿಡ್ನಿ ರೋಗಿಗಳಿಗೆ ಸಂಪೂರ್ಣ ಉಚಿತ ಹಿಮೋಡಯಾಲಿಸಿಸ್ ಚಿಕಿತ್ಸೆ.'
    },
    description: {
      en: 'PMNDP operates specialized dialysis wings across KC General, Victoria, Bowring, and district hospitals in Bengaluru, providing life-sustaining hemodialysis sessions, consumables, dialyzers, and erythropoietin injections free of charge for renal failure patients.',
      kn: 'ಬೆಂಗಳೂರಿನ ಕೆ.ಸಿ. ಜನರಲ್, ವಿಕ್ಟೋರಿಯಾ, ಬೌರಿಂಗ್ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ ಕಿಡ್ನಿ ವೈಫಲ್ಯದಿಂದ ಬಳಲುತ್ತಿರುವ ಬಡ ರೋಗಿಗಳಿಗೆ ಉಚಿತ ಡಯಾಲಿಸಿಸ್ ಮತ್ತು ಚುಚ್ಚುಮದ್ದುಗಳನ್ನು ಒದಗಿಸಲಾಗುತ್ತದೆ.'
    },
    benefits: {
      en: [
        'Completely free dialysis sessions (saves ₹2,500 to ₹4,000 per session in private clinics)',
        'Free high-flux dialyzers, blood tubing, and heparin anticoagulants',
        'Regular free renal function lab tests (Serum Creatinine, Blood Urea, Potassium)',
        'Assistance with renal transplant registration through Jeevasarthakathe'
      ],
      kn: [
        'ಪ್ರತಿ ಡಯಾಲಿಸಿಸ್ ಸೆಷನ್ ಸಂಪೂರ್ಣ ಉಚಿತ (ಖಾಸಗಿಯಲ್ಲಿ ಪ್ರತಿ ಬಾರಿಗೆ ₹2,500-₹4,000 ಉಳಿತಾಯ)',
        'ಉಚಿತ ಡಯಾಲೈಜರ್ ಕಿಟ್ ಮತ್ತು ಹೆಪಾರಿನ್ ಚುಚ್ಚುಮದ್ದು',
        'ಉಚಿತ ಕಿಡ್ನಿ ರಕ್ತ ಪರೀಕ್ಷೆಗಳು',
        'ಜೀವಸಾರ್ಥಕತೆ ಮೂಲಕ ಅಂಗಾಂಗ ಕಸಿ ನೋಂದಣಿ ನೆರವು'
      ]
    },
    knownCriteria: {
      rationCards: ['BPL', 'AAY'],
      needsHealthcareHelp: true
    },
    disqualifyingConditions: {
      en: ['APL cardholders can avail service at highly subsidized government rates of ₹300 per session'],
      kn: ['ಎಪಿಎಲ್ ಕಾರ್ಡುದಾರರಿಗೆ ರಿಯಾಯಿತಿ ದರದಲ್ಲಿ ₹300 ಶುಲ್ಕ ವಿಧಿಸಲಾಗುತ್ತದೆ']
    },
    requiredDocuments: {
      mandatory: {
        en: ['Nephrologist prescription / CKD medical certificate', 'BPL / Antyodaya Ration Card', 'Patient Aadhaar Card'],
        kn: ['ಕಿಡ್ನಿ ತಜ್ಞರ ಪ್ರಮಾಣಪತ್ರ', 'ಬಿಪಿಎಲ್ ಅಥವಾ ಅಂತ್ಯೋದಯ ಪಡಿತರ ಚೀಟಿ', 'ಆಧಾರ್ ಕಾರ್ಡ್']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: ['ABHA Health ID'], kn: ['ಆಭಾ ಕಾರ್ಡ್'] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Consult Nephrologist at Govt Hospital', kn: 'ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಯ ಕಿಡ್ನಿ ತಜ್ಞರನ್ನು ಸಂಪರ್ಕಿಸಿ' },
        description: {
          en: 'Visit KC General, Victoria, or Bowring dialysis unit with recent creatinine and urea blood reports.',
          kn: 'ಇತ್ತೀಚಿನ ರಕ್ತ ಪರೀಕ್ಷಾ ವರದಿಯೊಂದಿಗೆ ಆಸ್ಪತ್ರೆಯ ಡಯಾಲಿಸಿಸ್ ವಿಭಾಗಕ್ಕೆ ಭೇಟಿ ನೀಡಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Register BPL Card at Arogya Mitra Desk', kn: 'ಆರೋಗ್ಯ ಮಿತ್ರ ಡೆಸ್ಕ್‌ನಲ್ಲಿ ಬಿಪಿಎಲ್ ಕಾರ್ಡ್ ನೋಂದಾಯಿಸಿ' },
        description: {
          en: 'Arogya Mitra generates cashless PMNDP pre-authorization number.',
          kn: 'ಆರೋಗ್ಯ ಮಿತ್ರ ಸಿಬ್ಬಂದಿ ಉಚಿತ ಡಯಾಲಿಸಿಸ್ ಕೂಪನ್ ಜನರೇಟ್ ಮಾಡುತ್ತಾರೆ.'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Schedule Weekly Dialysis Slots', kn: 'ವಾರದ ಡಯಾಲಿಸಿಸ್ ಸಮಯ ನಿಗದಿಪಡಿಸಿ' },
        description: {
          en: 'Receive 2 to 3 sessions per week without paying any charges.',
          kn: 'ವಾರಕ್ಕೆ ೨ ರಿಂದ ೩ ಬಾರಿ ಉಚಿತವಾಗಿ ಡಯಾಲಿಸಿಸ್ ಮಾಡಿಸಿಕೊಳ್ಳಿ.'
        }
      }
    ],
    officialPortalUrl: 'https://nhm.gov.in/',
    officialGuidelineUrl: 'https://sast.karnataka.gov.in/',
    responsibleDepartment: {
      en: 'National Health Mission & SAST Karnataka',
      kn: 'ರಾಷ್ಟ್ರೀಯ ಆರೋಗ್ಯ ಅಭಿಯಾನ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-12'
  },

  // ==========================================
  // 2. FOOD RATION (4 SCHEMES -> TOTAL 5)
  // ==========================================
  {
    id: 'central-antyodaya-anna',
    name: {
      en: 'Antyodaya Anna Yojana (AAY) Food Security Scheme',
      kn: 'ಅಂತ್ಯೋದಯ ಅನ್ನ ಯೋಜನೆ (ಎಎವೈ ಪಡಿತರ)'
    },
    category: 'food_ration',
    shortName: 'AAY Ration Scheme',
    authority: {
      en: 'Department of Food and Public Distribution, Government of India & Ahara Karnataka',
      kn: 'ಆಹಾರ ಮತ್ತು ಸಾರ್ವಜನಿಕ ವಿತರಣಾ ಇಲಾಖೆ, ಭಾರತ ಸರ್ಕಾರ & ಕರ್ನಾಟಕ'
    },
    level: 'both',
    tagline: {
      en: 'Guaranteed 35 kg of foodgrains per month per household for the poorest of the poor families.',
      kn: 'ಅತ್ಯಂತ ಬಡ ಕುಟುಂಬಗಳಿಗೆ ಪ್ರತಿ ತಿಂಗಳು ಖಚಿತ ೩೫ ಕೆಜಿ ಆಹಾರ ಧಾನ್ಯ ವಿತರಣೆ.'
    },
    description: {
      en: 'Targeted at destitute households, landless laborers, widows, terminally ill persons, and primitive tribes, AAY provides 35 kg of foodgrains every month at heavily subsidized rates (₹3/kg rice, ₹2/kg wheat) or completely free under PMGKAY convergence.',
      kn: 'ನಿರ್ಗತಿಕರು, ವಿಧವೆಯರು, ವಿಕಲಚೇತನರು ಮತ್ತು ಭೂರಹಿತ ಕೂಲಿಕಾರರ ಕುಟುಂಬಗಳಿಗೆ ಪ್ರತಿ ತಿಂಗಳು ೩೫ ಕೆಜಿ ಅಕ್ಕಿ ಮತ್ತು ಗೋಧಿಯನ್ನು ಸಂಪೂರ್ಣ ಉಚಿತವಾಗಿ ಅಥವಾ ₹೩ ರಂತೆ ವಿತರಿಸುವ ಕೇಂದ್ರದ ಪ್ರಮುಖ ಯೋಜನೆ.'
    },
    benefits: {
      en: [
        'Fixed quota of 35 kg of grain per family irrespective of number of family members',
        'Highest priority in fair price ration shop allocation every month',
        'Free sugar and fortified nutritional salt during festive allocations',
        'Portability across all fair price shops in Bengaluru via biometric e-POS'
      ],
      kn: [
        'ಕುಟುಂಬದ ಸದಸ್ಯರ ಸಂಖ್ಯೆಯನ್ನು ಲೆಕ್ಕಿಸದೆ ಪ್ರತಿ ಕುಟುಂಬಕ್ಕೆ ನಿಗದಿತ ೩೫ ಕೆಜಿ ಪಡಿತರ',
        'ನ್ಯಾಯಬೆಲೆ ಅಂಗಡಿಗಳಲ್ಲಿ ತಿಂಗಳ ಆರಂಭದಲ್ಲೇ ಆದ್ಯತೆಯ ವಿತರಣೆ',
        'ಹಬ್ಬಗಳ ಸಮಯದಲ್ಲಿ ಸಬ್ಸಿಡಿ ಸಕ್ಕರೆ ಮತ್ತು ಉಪ್ಪು',
        'ಬಯೋಮೆಟ್ರಿಕ್ ಮೂಲಕ ಬೆಂಗಳೂರಿನ ಯಾವುದೇ ನ್ಯಾಯಬೆಲೆ ಅಂಗಡಿಯಲ್ಲಿ ಪಡೆಯಬಹುದು'
      ]
    },
    knownCriteria: {
      rationCards: ['AAY']
    },
    disqualifyingConditions: {
      en: ['Income tax payers or families with salaried government employees cannot hold AAY cards'],
      kn: ['ಆದಾಯ ತೆರಿಗೆ ಪಾವತಿದಾರರು ಅಥವಾ ಸರ್ಕಾರಿ ನೌಕರರು ಅನರ್ಹರು']
    },
    requiredDocuments: {
      mandatory: {
        en: ['Antyodaya Yellow Ration Card with Aadhaar seeding', 'Aadhaar of head of household'],
        kn: ['ಹಳದಿ ಬಣ್ಣದ ಅಂತ್ಯೋದಯ ಪಡಿತರ ಚೀಟಿ', 'ಕುಟುಂಬದ ಮುಖ್ಯಸ್ಥರ ಆಧಾರ್']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Apply via Bangalore One or Ahara Portal', kn: 'ಬೆಂಗಳೂರು ಒನ್ ಅಥವಾ ಆಹಾರ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಅರ್ಜಿ' },
        description: {
          en: 'Submit destitute income certification and family details on ahara.kar.nic.in.',
          kn: 'ಆಹಾರ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಕಡುಬಡತನದ ದಾಖಲೆಗಳೊಂದಿಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Food Inspector Ward Verification', kn: 'ಆಹಾರ ನಿರೀಕ್ಷಕರ ಸ್ಥಳ ಪರಿಶೀಲನೆ' },
        description: {
          en: 'Food Inspector conducts field check to ensure applicant fits destitute guidelines.',
          kn: 'ಆಹಾರ ಇಲಾಖೆಯ ಅಧಿಕಾರಿಗಳು ಮನೆ ಪರಿಶೀಲನೆ ನಡೆಸಿ ಅನುಮೋದಿಸುತ್ತಾರೆ.'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Monthly 35 kg Grain Collection', kn: 'ಪ್ರತಿ ತಿಂಗಳು ೩೫ ಕೆಜಿ ಪಡಿತರ ಪಡೆಯಿರಿ' },
        description: {
          en: 'Collect 35 kg quota from local Fair Price Shop between 1st and 20th of every month.',
          kn: 'ಸ್ಥಳೀಯ ನ್ಯಾಯಬೆಲೆ ಅಂಗಡಿಯಲ್ಲಿ ಬೆರಳಚ್ಚು ನೀಡಿ ಪಡಿತರ ಪಡೆಯಿರಿ.'
        }
      }
    ],
    officialPortalUrl: 'https://ahara.kar.nic.in/',
    officialGuidelineUrl: 'https://dfpd.gov.in/',
    responsibleDepartment: {
      en: 'Department of Food, Civil Supplies and Consumer Affairs, Karnataka',
      kn: 'ಆಹಾರ ಮತ್ತು ನಾಗರಿಕ ಸರಬರಾಜು ಇಲಾಖೆ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },
  {
    id: 'karnataka-indira-canteen',
    name: {
      en: 'Indira Canteen Subsidized Meals (Bengaluru)',
      kn: 'ಇಂದಿರಾ ಕ್ಯಾಂಟೀನ್ ಸಬ್ಸಿಡಿ ಆಹಾರ ಯೋಜನೆ (ಬೆಂಗಳೂರು)'
    },
    category: 'food_ration',
    shortName: 'Indira Canteen',
    authority: {
      en: 'Bruhat Bengaluru Mahanagara Palike (BBMP) & Urban Development Department',
      kn: 'ಬಿಬಿಎಂಪಿ & ನಗರಾಭಿವೃದ್ಧಿ ಇಲಾಖೆ, ಕರ್ನಾಟಕ'
    },
    level: 'karnataka',
    tagline: {
      en: 'Wholesome nutritious hot meals at ₹5 for breakfast and ₹10 for lunch & dinner across 198 BBMP wards.',
      kn: 'ಬೆಂಗಳೂರಿನ ೧೯೮ ವಾರ್ಡ್‌ಗಳಲ್ಲಿ ಕೇವಲ ₹೫ ಕ್ಕೆ ಉಪಾಹಾರ ಮತ್ತು ₹೧೦ ಕ್ಕೆ ಪೌಷ್ಟಿಕ ಊಟ.'
    },
    description: {
      en: 'Established to eradicate urban hunger and reduce living expenses for daily-wage laborers, auto drivers, garment workers, and students, Indira Canteens serve clean, hot meals prepared in centralized master kitchens under strict FSSAI hygiene standards across Bengaluru.',
      kn: 'ನಗರ ಪ್ರದೇಶದ ಕೂಲಿಕಾರರು, ಆಟೋ ಚಾಲಕರು, ಗಾರ್ಮೆಂಟ್ಸ್ ಕಾರ್ಮಿಕರು ಮತ್ತು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಕನಿಷ್ಠ ವೆಚ್ಚದಲ್ಲಿ ಪೌಷ್ಟಿಕ ಆಹಾರ ನೀಡಲು ಬೆಂಗಳೂರಿನ ಎಲ್ಲಾ ವಾರ್ಡ್‌ಗಳಲ್ಲಿ ಇಂದಿರಾ ಕ್ಯಾಂಟೀನ್‌ಗಳನ್ನು ನಡೆಸಲಾಗುತ್ತಿದೆ.'
    },
    benefits: {
      en: [
        'Breakfast at ₹5 (Idli-Vada with Chutney, Khara Bhath, Kesari Bhath, or Pongal)',
        'Full Lunch at ₹10 (Rice, Sambar, Vegetable Palya, Butter Milk)',
        'Full Dinner at ₹10 (Rice, Tomato Bath/Sambar, Vegetable side)',
        'Clean RO drinking water and dignified dining tables open to all citizens without any cards or IDs'
      ],
      kn: [
        'ಕೇವಲ ₹೫ ಕ್ಕೆ ರುಚಿಯಾದ ಉಪಾಹಾರ (ಇಡ್ಲಿ, ವಡೆ, ಖಾರಾಭಾತ್, ಪೊಂಗಲ್)',
        'ಕೇವಲ ₹೧೦ ಕ್ಕೆ ಸಂಪೂರ್ಣ ಮಧ್ಯಾಹ್ನದ ಊಟ (ಅನ್ನ, ಸಾಂಬಾರ್, ಪಲ್ಯ, ಮಜ್ಜಿಗೆ)',
        'ಕೇವಲ ₹೧೦ ಕ್ಕೆ ರಾತ್ರಿಯ ಊಟ',
        'ಯಾವುದೇ ಕಾರ್ಡ್ ಅಥವಾ ಗುರುತಿನ ಚೀಟಿ ಇಲ್ಲದೆ ಯಾರಾದರೂ ಊಟ ಮಾಡಬಹುದು'
      ]
    },
    knownCriteria: {},
    disqualifyingConditions: {
      en: ['None — Open to all members of the public with zero barriers'],
      kn: ['ಯಾವುದೇ ನಿಬಂಧನೆಗಳಿಲ್ಲ — ಸಾರ್ವಜನಿಕರಿಗೆ ಮುಕ್ತ ಪ್ರವೇಶ']
    },
    requiredDocuments: {
      mandatory: { en: ['No documents required; direct walk-in cash or UPI token purchase'], kn: ['ಯಾವುದೇ ದಾಖಲೆಗಳಿಲ್ಲ; ನೇರ ನಗದು/ಯುಪಿಐ ಪಾವತಿ'] },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Locate Nearest Ward Indira Canteen', kn: 'ಹತ್ತಿರದ ಇಂದಿರಾ ಕ್ಯಾಂಟೀನ್ ಹುಡುಕಿ' },
        description: {
          en: 'Use LifeBridge Maps to see live locations across Majestic, Jayanagar, Malleshwaram, Indiranagar, and all 198 BBMP wards.',
          kn: 'ಲೈಫ್‌ಬ್ರಿಡ್ಜ್ ನಕ್ಷೆ ಬಳಸಿ ನಿಮ್ಮ ವಾರ್ಡ್‌ನ ಕ್ಯಾಂಟೀನ್ ಪತ್ತೆ ಮಾಡಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Service Meal Timings', kn: 'ಊಟದ ಸಮಯ ಪರಿಶೀಲಿಸಿ' },
        description: {
          en: 'Breakfast: 7:30 AM – 10:00 AM | Lunch: 12:30 PM – 2:30 PM | Dinner: 7:30 PM – 9:00 PM.',
          kn: 'ತಿಂಡಿ: ಬೆಳಿಗ್ಗೆ ೭:೩೦-೧೦:೦೦ | ಊಟ: ಮಧ್ಯಾಹ್ನ ೧೨:೩೦-೨:೩೦ | ರಾತ್ರಿ ಊಟ: ೭:೩೦-೯:೦೦.'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Purchase Token & Dine', kn: 'ಟೋಕನ್ ಪಡೆದು ಊಟ ಮಾಡಿ' },
        description: {
          en: 'Pay ₹5 or ₹10 at counter and enjoy fresh hot food.',
          kn: 'ಕೌಂಟರ್‌ನಲ್ಲಿ ಟೋಕನ್ ಪಡೆದು ಬಿಸಿ ಊಟ ಸವಿಯಿರಿ.'
        }
      }
    ],
    officialPortalUrl: 'https://bbmp.karnataka.gov.in/',
    responsibleDepartment: {
      en: 'Bruhat Bengaluru Mahanagara Palike (BBMP)',
      kn: 'ಬೃಹತ್ ಬೆಂಗಳೂರು ಮಹಾನಗರ ಪಾಲಿಕೆ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-14'
  },
  {
    id: 'central-pm-poshan',
    name: {
      en: 'PM POSHAN (National Mid-Day Meal Programme in Schools)',
      kn: 'ಪಿಎಂ ಪೋಷಣ್ (ಶಾಲಾ ಬಿಸಿಯೂಟ ಯೋಜನೆ)'
    },
    category: 'food_ration',
    shortName: 'PM POSHAN / Mid-Day Meal',
    authority: {
      en: 'Ministry of Education, Government of India & School Education Dept, Karnataka',
      kn: 'ಶಿಕ್ಷಣ ಸಚಿವಾಲಯ, ಭಾರತ ಸರ್ಕಾರ & ಕರ್ನಾಟಕ ಶಾಲಾ ಶಿಕ್ಷಣ ಇಲಾಖೆ'
    },
    level: 'both',
    tagline: {
      en: 'Free hot cooked nutritious daily meals, boiled eggs, and bananas for school children in Class 1 to 10.',
      kn: '೧ ರಿಂದ ೧೦ನೇ ತರಗತಿ ಸರ್ಕಾರಿ ಶಾಲಾ ಮಕ್ಕಳಿಗೆ ಪ್ರತಿದಿನ ಉಚಿತ ಪೌಷ್ಟಿಕ ಬಿಸಿಯೂಟ, ಮೊಟ್ಟೆ & ಬಾಳೆಹಣ್ಣು.'
    },
    description: {
      en: 'PM POSHAN provides freshly cooked hot lunches meeting strict nutritional guidelines (450 calories and 12g protein for primary; 700 calories and 20g protein for upper primary) to all students attending government and government-aided schools in Bengaluru and Karnataka.',
      kn: 'ಬೆಂಗಳೂರು ಹಾಗೂ ಕರ್ನಾಟಕದ ಎಲ್ಲಾ ಸರ್ಕಾರಿ ಮತ್ತು ಅನುದಾನಿತ ಶಾಲೆಗಳಲ್ಲಿ ಕಲಿಯುವ ಮಕ್ಕಳಿಗೆ ಅಪೌಷ್ಟಿಕತೆ ಹೋಗಲಾಡಿಸಲು ಪ್ರತಿದಿನ ಉಚಿತ ಬಿಸಿಯೂಟ, ಸಾಂಬಾರ್, ವಾರಕ್ಕೆ ೨ ದಿನ ಬೇಯಿಸಿದ ಮೊಟ್ಟೆ ಅಥವಾ ಶೇಂಗಾ ಚಿಕ್ಕಿ ನೀಡಲಾಗುತ್ತದೆ.'
    },
    benefits: {
      en: [
        '100% Free daily hot lunch on all working school days',
        'Supplementary nutrition: 2 boiled eggs per week (or bananas/chikki for vegetarian students)',
        'Iron, Folic Acid, and Deworming supplements distributed directly in school',
        'Improves attendance, student retention, and cognitive classroom focus'
      ],
      kn: [
        'ಎಲ್ಲಾ ಶಾಲಾ ದಿನಗಳಲ್ಲಿ ಸಂಪೂರ್ಣ ಉಚಿತ ಬಿಸಿಯೂಟ',
        'ವಾರಕ್ಕೆ ೨ ದಿನ ಬೇಯಿಸಿದ ಮೊಟ್ಟೆ ಅಥವಾ ಬಾಳೆಹಣ್ಣು/ಶೇಂಗಾ ಚಿಕ್ಕಿ',
        'ಕಬ್ಬಿಣಾಂಶ ಮತ್ತು ಜಂತುಹುಳು ನಿವಾರಣಾ ಮಾತ್ರೆಗಳ ವಿತರಣೆ',
        'ಮಕ್ಕಳ ಕಲಿಕಾ ಶಕ್ತಿ ಮತ್ತು ಹಾಜರಾತಿ ಹೆಚ್ಚಳ'
      ]
    },
    knownCriteria: {
      studentStatus: true
    },
    disqualifyingConditions: {
      en: ['Applies to government and government-aided schools; unaided private schools not covered'],
      kn: ['ಸರ್ಕಾರಿ ಮತ್ತು ಅನುದಾನಿತ ಶಾಲೆಗಳಿಗೆ ಮಾತ್ರ ಅನ್ವಯ']
    },
    requiredDocuments: {
      mandatory: {
        en: ['Automatic enrollment on school admission (no separate application)'],
        kn: ['ಶಾಲೆಗೆ ದಾಖಲಾದ ತಕ್ಷಣ ತಾನಾಗಿಯೇ ಸೌಲಭ್ಯ ದೊರೆಯುತ್ತದೆ']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Enroll in Govt / Aided School', kn: 'ಸರ್ಕಾರಿ ಶಾಲೆಗೆ ದಾಖಲಾಗಿ' },
        description: {
          en: 'Admit child into any government or aided primary/high school in Karnataka.',
          kn: 'ಮಗುವನ್ನು ಸರ್ಕಾರಿ ಅಥವಾ ಅನುದಾನಿತ ಶಾಲೆಗೆ ದಾಖಲಿಸಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Daily Automatic Mid-day Meal', kn: 'ದೈನಂದಿನ ಬಿಸಿಯೂಟ ವಿತರಣೆ' },
        description: {
          en: 'Mid-day meal is served daily between 12:30 PM and 1:30 PM at the school dining hall.',
          kn: 'ಪ್ರತಿದಿನ ಮಧ್ಯಾಹ್ನ ಶಾಲೆಯಲ್ಲಿ ಬಿಸಿಯೂಟ ನೀಡಲಾಗುತ್ತದೆ.'
        }
      }
    ],
    officialPortalUrl: 'https://pmposhan.education.gov.in/',
    responsibleDepartment: {
      en: 'Department of School Education & Literacy, Karnataka',
      kn: 'ಶಾಲಾ ಶಿಕ್ಷಣ ಮತ್ತು ಸಾಕ್ಷರತಾ ಇಲಾಖೆ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },
  {
    id: 'karnataka-ksheera-bhagya',
    name: {
      en: 'Ksheera Bhagya Scheme (Free Milk for School Children)',
      kn: 'ಕ್ಷೀರಭಾಗ್ಯ ಯೋಜನೆ (ಉಚಿತ ಹಾಲು ವಿತರಣೆ)'
    },
    category: 'food_ration',
    shortName: 'Ksheera Bhagya',
    authority: {
      en: 'Karnataka Milk Federation (KMF - Nandini) & Department of School Education, Karnataka',
      kn: 'ಕರ್ನಾಟಕ ಹಾಲು ಮಹಾಮಂಡಳಿ (ಕೆಎಂಎಫ್ - ನಂದಿನಿ) & ಶಾಲಾ ಶಿಕ್ಷಣ ಇಲಾಖೆ'
    },
    level: 'karnataka',
    tagline: {
      en: 'Free 150 ml hot nutritious Nandini milk served 5 days a week to school and Anganwadi children.',
      kn: 'ಅಂಗನವಾಡಿ ಮತ್ತು ಶಾಲಾ ಮಕ್ಕಳಿಗೆ ವಾರದಲ್ಲಿ ೫ ದಿನ ಉಚಿತ ೧೫೦ ಮಿ.ಲೀ ಪೌಷ್ಟಿಕ ನಂದಿನಿ ಹಾಲು.'
    },
    description: {
      en: 'Ksheera Bhagya provides 150ml of freshly prepared Nandini milk fortified with Vitamin A & D to over 65 lakh children in Anganwadis and government schools from Class 1 to 10 across Karnataka to fight childhood malnutrition and support dairy farmers.',
      kn: 'ಕರ್ನಾಟಕದ ೬೫ ಲಕ್ಷಕ್ಕೂ ಹೆಚ್ಚು ಶಾಲಾ ಮಕ್ಕಳು ಮತ್ತು ಅಂಗನವಾಡಿ ಕಂದಮ್ಮಗಳಿಗೆ ವಿಟಮಿನ್ ಎ ಮತ್ತು ಡಿ ಸಮೃದ್ಧ ನಂದಿನಿ ಹಾಲನ್ನು ವಾರಕ್ಕೆ ೫ ದಿನ ಉಚಿತವಾಗಿ ನೀಡಿ ಅಪೌಷ್ಟಿಕತೆ ನಿವಾರಿಸಲಾಗುತ್ತದೆ.'
    },
    benefits: {
      en: [
        '150 ml freshly boiled hot Nandini milk served in morning sessions',
        'Essential calcium, vitamin D, and high biological value protein for growing bones',
        'Direct convergence with local KMF milk cooperative unions',
        '100% free of charge for all enrolled students'
      ],
      kn: [
        'ಬೆಳಿಗ್ಗೆ ೧೫೦ ಮಿ.ಲೀ ಬಿಸಿ ನಂದಿನಿ ಹಾಲು ವಿತರಣೆ',
        'ಮೂಳೆಗಳ ಬೆಳವಣಿಗೆಗೆ ಕ್ಯಾಲ್ಸಿಯಂ ಮತ್ತು ಪ್ರೋಟೀನ್ ಪೂರೈಕೆ',
        'ಕೆಎಂಎಫ್ ನಂದಿನಿ ಹಾಲಿನ ನೇರ ಸಹಯೋಗ',
        'ಸಂಪೂರ್ಣ ಉಚಿತ'
      ]
    },
    knownCriteria: {
      studentStatus: true
    },
    disqualifyingConditions: {
      en: ['Private unaided school students not covered'],
      kn: ['ಖಾಸಗಿ ಅನುದಾನರಹಿತ ಶಾಲೆಗಳಿಗೆ ಅನ್ವಯಿಸುವುದಿಲ್ಲ']
    },
    requiredDocuments: {
      mandatory: { en: ['School enrollment verification'], kn: ['ಶಾಲಾ ಪ್ರವೇಶ ದಾಖಲೆ'] },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'School Attendance in Morning', kn: 'ಬೆಳಿಗ್ಗೆ ಶಾಲಾ ಹಾಜರಾತಿ' },
        description: {
          en: 'Milk is boiled on school premises and distributed to students at morning interval.',
          kn: 'ಶಾಲೆಯಲ್ಲೇ ಹಾಲನ್ನು ಬಿಸಿ ಮಾಡಿ ಬೆಳಿಗ್ಗೆ ವಿರಾಮದ ವೇಳೆ ಮಕ್ಕಳಿಗೆ ವಿತರಿಸಲಾಗುತ್ತದೆ.'
        }
      }
    ],
    officialPortalUrl: 'https://schooleducation.karnataka.gov.in/',
    responsibleDepartment: {
      en: 'Department of School Education, Karnataka & KMF',
      kn: 'ಶಾಲಾ ಶಿಕ್ಷಣ ಇಲಾಖೆ & ಕೆಎಂಎಫ್'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },

  // ==========================================
  // 3. EDUCATION & SCHOLARSHIP (3 SCHEMES -> TOTAL 5)
  // ==========================================
  {
    id: 'karnataka-ssp-pre-matric',
    name: {
      en: 'State Scholarship Portal (SSP) Pre-Matric Scholarship',
      kn: 'ರಾಜ್ಯ ವಿದ್ಯಾರ್ಥಿವೇತನ ಪೋರ್ಟಲ್ (ಎಸ್‌ಎಸ್‌ಪಿ) ಪೂರ್ವ ಮೆಟ್ರಿಕ್ ವಿದ್ಯಾರ್ಥಿವೇತನ'
    },
    category: 'education_scholarship',
    shortName: 'SSP Pre-Matric',
    authority: {
      en: 'Social Welfare, Tribal Welfare & BCWD Departments, Karnataka',
      kn: 'ಸಮಾಜ ಕಲ್ಯಾಣ, ಪರಿಶಿಷ್ಟ ಪಂಗಡ & ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಇಲಾಖೆ, ಕರ್ನಾಟಕ'
    },
    level: 'karnataka',
    tagline: {
      en: 'Direct scholarship support for school students from Class 1 to 10 from marginalized communities.',
      kn: '೧ ರಿಂದ ೧೦ನೇ ತರಗತಿಯ ಎಸ್‌ಸಿ, ಎಸ್‌ಟಿ, ಹಿಂದುಳಿದ ವರ್ಗದ ಶಾಲಾ ಮಕ್ಕಳಿಗೆ ನೇರ ವಿದ್ಯಾರ್ಥಿವೇತನ.'
    },
    description: {
      en: 'Transfers annual educational maintenance and book grants directly into bank accounts of students studying in government and aided schools from Class 1 to 10 across Karnataka.',
      kn: 'ಕರ್ನಾಟಕದ ಶಾಲೆಗಳಲ್ಲಿ ೧ ರಿಂದ ೧೦ನೇ ತರಗತಿ ಓದುತ್ತಿರುವ ಎಸ್‌ಸಿ, ಎಸ್‌ಟಿ ಹಾಗೂ ಹಿಂದುಳಿದ ವರ್ಗದ ವಿದ್ಯಾರ್ಥಿಗಳ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ನೇರವಾಗಿ ವಾರ್ಷಿಕ ಪುಸ್ತಕ ಹಾಗೂ ಸಮವಸ್ತ್ರ ಅನುದಾನವನ್ನು ವರ್ಗಾಯಿಸಲಾಗುತ್ತದೆ.'
    },
    benefits: {
      en: [
        'Annual scholarship grant between ₹1,500 and ₹4,500 deposited directly into student bank account',
        'Automatic linkage through SATS (Student Achievement Tracking System) student ID',
        'Zero fee for application submission at school nodal teacher desk'
      ],
      kn: [
        'ವಾರ್ಷಿಕ ₹1,500 ರಿಂದ ₹4,500 ವಿದ್ಯಾರ್ಥಿವೇತನ ನೇರ ಬ್ಯಾಂಕ್ ಜಮೆ',
        'ಸ್ಯಾಟ್ಸ್ (SATS) ಶಾಲಾ ಐಡಿ ಮೂಲಕ ನೇರ ಪರಿಶೀಲನೆ',
        'ಶಾಲೆಯಲ್ಲೇ ಮುಖ್ಯೋಪಾಧ್ಯಾಯರಿಂದ ಉಚಿತ ಅರ್ಜಿ ಸಲ್ಲಿಕೆ'
      ]
    },
    knownCriteria: {
      studentStatus: true,
      karnatakaResidentOnly: true
    },
    disqualifyingConditions: {
      en: ['Annual family income above ₹2.5 Lakhs for SC/ST or ₹1 Lakh for OBC'],
      kn: ['ಆದಾಯ ಮಿತಿ ಮೀರಿದವರು']
    },
    requiredDocuments: {
      mandatory: {
        en: ['SATS Student ID Number', 'Caste and Income Certificate RD Number', 'Aadhaar-linked Bank Passbook'],
        kn: ['ಸ್ಯಾಟ್ಸ್ (SATS) ವಿದ್ಯಾರ್ಥಿ ಐಡಿ', 'ನಾಡಕಚೇರಿ ಆರ್‌ಡಿ ಜಾತಿ-ಆದಾಯ ಸಂಖ್ಯೆ', 'ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'School Headmaster Enters SATS Data', kn: 'ಮುಖ್ಯೋಪಾಧ್ಯಾಯರಿಂದ ಸ್ಯಾಟ್ಸ್ ಮಾಹಿತಿ ದಾಖಲು' },
        description: {
          en: 'School enters caste RD number and bank details into SSP Pre-Matric portal.',
          kn: 'ಶಾಲಾ ಶಿಕ್ಷಕರು ವಿದ್ಯಾರ್ಥಿಯ ಆರ್‌ಡಿ ಸಂಖ್ಯೆಯನ್ನು ಎಸ್‌ಎಸ್‌ಪಿ ಪೋರ್ಟಲ್‌ಗೆ ಜೋಡಿಸುತ್ತಾರೆ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Taluk Officer Digital Approval', kn: 'ತಾಲೂಕು ಅಧಿಕಾರಿಗಳಿಂದ ಅನುಮೋದನೆ' },
        description: {
          en: 'Social Welfare officer verifies and sanctions DBT payment.',
          kn: 'ತಾಲೂಕು ಸಮಾಜ ಕಲ್ಯಾಣಾಧಿಕಾರಿ ಅನುಮೋದಿಸಿದ ನಂತರ ನೇರ ಖಾತೆಗೆ ಹಣ ಜಮೆಯಾಗುತ್ತದೆ.'
        }
      }
    ],
    officialPortalUrl: 'https://ssp.karnataka.gov.in/',
    responsibleDepartment: {
      en: 'Social Welfare & Backward Classes Welfare Dept, Karnataka',
      kn: 'ಸಮಾಜ ಕಲ್ಯಾಣ ಇಲಾಖೆ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },
  {
    id: 'central-nmmss-scholarship',
    name: {
      en: 'National Means-cum-Merit Scholarship Scheme (NMMSS)',
      kn: 'ರಾಷ್ಟ್ರೀಯ ಮೆರಿಟ್ ವಿದ್ಯಾರ್ಥಿವೇತನ ಯೋಜನೆ (ಎನ್‌ಎಂಎಂಎಸ್‌ಎಸ್)'
    },
    category: 'education_scholarship',
    shortName: 'NMMSS Scholarship',
    authority: {
      en: 'Department of School Education & Literacy, Ministry of Education, Government of India',
      kn: 'ಶಿಕ್ಷಣ ಸಚಿವಾಲಯ, ಭಾರತ ಸರ್ಕಾರ'
    },
    level: 'central',
    tagline: {
      en: '₹12,000 per year for meritorious students from economically weaker sections from Class 9 to 12.',
      kn: '೯ ರಿಂದ ೧೨ನೇ ತರಗತಿಯ ಪ್ರತಿಭಾವಂತ ಬಡ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ವಾರ್ಷಿಕ ₹12,000 ವಿದ್ಯಾರ್ಥಿವೇತನ.'
    },
    description: {
      en: 'NMMSS awards 1 lakh scholarships nationally (over 5,000 in Karnataka) through a state-level competitive examination in Class 8, providing ₹1,000 per month (₹12,000/year) through DBT to prevent high school dropouts.',
      kn: '೮ನೇ ತರಗತಿಯಲ್ಲಿ ನಡೆಯುವ ರಾಜ್ಯ ಮಟ್ಟದ ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷೆಯಲ್ಲಿ ತೇರ್ಗಡೆಯಾದ ಬಡ ಕುಟುಂಬದ ಪ್ರತಿಭಾವಂತ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ೯, ೧೦, ೧೧ ಮತ್ತು ೧೨ನೇ ತರಗತಿಯವರೆಗೆ ಪ್ರತಿ ವರ್ಷ ₹12,000 ವಿದ್ಯಾರ್ಥಿವೇತನ ನೀಡಲಾಗುತ್ತದೆ.'
    },
    benefits: {
      en: [
        '₹12,000 per year (₹1,000 per month) credited directly to student bank account for 4 continuous years',
        'Protects bright students from dropping out of secondary school due to financial stress',
        'Disbursed through National Scholarship Portal (NSP) with Direct Benefit Transfer'
      ],
      kn: [
        'ಸತತ ೪ ವರ್ಷಗಳ ಕಾಲ ಪ್ರತಿ ವರ್ಷ ₹12,000 ನೇರ ಬ್ಯಾಂಕ್ ಜಮೆ',
        'ಬಡತನದಿಂದ ಶಾಲೆ ಬಿಡುವುದನ್ನು ತಪ್ಪಿಸಿ ಉನ್ನತ ಶಿಕ್ಷಣಕ್ಕೆ ದಾರಿ',
        'ರಾಷ್ಟ್ರೀಯ ವಿದ್ಯಾರ್ಥಿವೇತನ ಪೋರ್ಟಲ್ (NSP) ಮೂಲಕ ಪಾರದರ್ಶಕ ವಿತರಣೆ'
      ]
    },
    knownCriteria: {
      studentStatus: true,
      maxAnnualIncome: 350000
    },
    disqualifyingConditions: {
      en: ['Students of Navodaya, Kendriya Vidyalayas, and private residential schools not eligible'],
      kn: ['ನವೋದಯ, ಕೇಂದ್ರೀಯ ವಿದ್ಯಾಲಯ ಮತ್ತು ಖಾಸಗಿ ಶಾಲೆಗಳ ಮಕ್ಕಳಿಗೆ ಅನ್ವಯಿಸುವುದಿಲ್ಲ']
    },
    requiredDocuments: {
      mandatory: {
        en: ['Class 7 Marksheet (minimum 55% marks)', 'Income Certificate (≤ ₹3.50 Lakhs/year)', 'Student Aadhaar & Bank Passbook'],
        kn: ['೭ನೇ ತರಗತಿ ಅಂಕಪಟ್ಟಿ (ಕನಿಷ್ಠ ಶೇ. ೫೫)', 'ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ', 'ಆಧಾರ್ ಮತ್ತು ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Appear for NMMS Exam in Class 8', kn: '೮ನೇ ತರಗತಿಯಲ್ಲಿ ಎನ್‌ಎಂಎಂಎಸ್ ಪರೀಕ್ಷೆ ಬರೆಯಿರಿ' },
        description: {
          en: 'Apply through school in August/September and appear for state exam conducted by DSEL Karnataka.',
          kn: 'ಶಾಲೆಯ ಮೂಲಕ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ ನವೆಂಬರ್‌ನಲ್ಲಿ ಪರೀಕ್ಷೆ ಬರೆಯಿರಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Register on National Scholarship Portal (NSP)', kn: 'ರಾಷ್ಟ್ರೀಯ ಸ್ಕಾಲರ್‌ಶಿಪ್ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ನೋಂದಣಿ' },
        description: {
          en: 'Selected students register on scholarships.gov.in with their exam roll number for annual DBT disbursement.',
          kn: 'ಆಯ್ಕೆಯಾದ ವಿದ್ಯಾರ್ಥಿಗಳು scholarships.gov.in ನಲ್ಲಿ ನೋಂದಾಯಿಸಿ ವಾರ್ಷಿಕ ಹಣ ಪಡೆಯಿರಿ.'
        }
      }
    ],
    officialPortalUrl: 'https://scholarships.gov.in/',
    responsibleDepartment: {
      en: 'Ministry of Education, GoI & DSEL Karnataka',
      kn: 'ಶಿಕ್ಷಣ ಸಚಿವಾಲಯ, ಭಾರತ ಸರ್ಕಾರ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },
  {
    id: 'central-aicte-pragati-saksham',
    name: {
      en: 'AICTE Pragati & Saksham Technical Scholarships',
      kn: 'ಎಐಸಿಟಿಇ ಪ್ರಗತಿ & ಸಕ್ಷಮ್ ತಾಂತ್ರಿಕ ವಿದ್ಯಾರ್ಥಿವೇತನ'
    },
    category: 'education_scholarship',
    shortName: 'AICTE Pragati / Saksham',
    authority: {
      en: 'All India Council for Technical Education (AICTE), Ministry of Education, GoI',
      kn: 'ಅಖಿಲ ಭಾರತ ತಾಂತ್ರಿಕ ಶಿಕ್ಷಣ ಮಂಡಳಿ (ಎಐಸಿಟಿಇ), ಭಾರತ ಸರ್ಕಾರ'
    },
    level: 'central',
    tagline: {
      en: '₹50,000 per year scholarship for female and differently-abled students in engineering & polytechnics.',
      kn: 'ಎಂಜಿನಿಯರಿಂಗ್ & ಡಿಪ್ಲೋಮಾ ಓದುವ ವಿದ್ಯಾರ್ಥಿನಿಯರು ಮತ್ತು ವಿಕಲಚೇತನರಿಗೆ ವಾರ್ಷಿಕ ₹50,000 ನೆರವು.'
    },
    description: {
      en: 'AICTE provides ₹50,000 every year towards college fee, books, laptop, and hostel expenses for girls (Pragati Scheme, up to 2 girls per family) and specially-abled students with >40% disability (Saksham Scheme) admitted to accredited degree and diploma courses.',
      kn: 'ಎಂಜಿನಿಯರಿಂಗ್ ಅಥವಾ ಪಾಲಿಟೆಕ್ನಿಕ್ ಡಿಪ್ಲೋಮಾ ಕಲಿಯುವ ಹೆಣ್ಣುಮಕ್ಕಳಿಗೆ (ಪ್ರಗತಿ) ಮತ್ತು ವಿಕಲಚೇತನ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ (ಸಕ್ಷಮ್) ಕಾಲೇಜು ಶುಲ್ಕ, ಲ್ಯಾಪ್‌ಟಾಪ್ ಮತ್ತು ಹಾಸ್ಟೆಲ್ ವೆಚ್ಚಕ್ಕಾಗಿ ವರ್ಷಕ್ಕೆ ₹50,000 ನೀಡಲಾಗುತ್ತದೆ.'
    },
    benefits: {
      en: [
        '₹50,000 lump sum per annum credited directly to bank account via DBT',
        'Awarded for maximum 4 years (degree) or 3 years (diploma)',
        'Can be used for buying laptops, books, college fees, or accommodation'
      ],
      kn: [
        'ಪ್ರತಿ ವರ್ಷ ₹50,000 ನೇರ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಜಮೆ',
        'ಡಿಪ್ಲೋಮಾಗೆ ೩ ವರ್ಷ, ಎಂಜಿನಿಯರಿಂಗ್‌ಗೆ ೪ ವರ್ಷಗಳ ಕಾಲ ಲಭ್ಯ',
        'ಲ್ಯಾಪ್‌ಟಾಪ್ ಖರೀದಿ ಮತ್ತು ಕಾಲೇಜು ಶುಲ್ಕಕ್ಕೆ ಬಳಸಬಹುದು'
      ]
    },
    knownCriteria: {
      studentStatus: true,
      maxAnnualIncome: 800000
    },
    disqualifyingConditions: {
      en: ['Family income exceeding ₹8 Lakhs per annum'],
      kn: ['ಕುಟುಂಬದ ವಾರ್ಷಿಕ ಆದಾಯ ₹8 ಲಕ್ಷ ಮೀರಬಾರದು']
    },
    requiredDocuments: {
      mandatory: {
        en: ['KEA CET / Direct Allotment Letter to AICTE approved college', 'Income Certificate (≤ ₹8 Lakhs)', 'Aadhaar Card and Student Bank Passbook'],
        kn: ['ಕೆಇಎ ಸೀಟ್ ಹಂಚಿಕೆ ಪತ್ರ', 'ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ', 'ಆಧಾರ್ ಮತ್ತು ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್']
      },
      conditional: {
        en: ['UDID card for Saksham disability scholarship applicants'],
        kn: ['ವಿಕಲಚೇತನ ಅಭ್ಯರ್ಥಿಗಳಿಗೆ ಯುಡಿಐಡಿ ಪ್ರಮಾಣಪತ್ರ']
      },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Secure Admission in AICTE College', kn: 'ಎಐಸಿಟಿಇ ಮಾನ್ಯತೆ ಪಡೆದ ಕಾಲೇಜಿನಲ್ಲಿ ಪ್ರವೇಶ' },
        description: {
          en: 'Get admission through CET / Management into AICTE approved college in Bengaluru.',
          kn: 'ಬೆಂಗಳೂರಿನ ಮಾನ್ಯತೆ ಪಡೆದ ಕಾಲೇಜಿನಲ್ಲಿ ಪ್ರವೇಶ ಪಡೆಯಿರಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Apply on National Scholarship Portal', kn: 'ನ್ಯಾಷನಲ್ ಸ್ಕಾಲರ್‌ಶಿಪ್ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಅರ್ಜಿ' },
        description: {
          en: 'Apply under AICTE section on scholarships.gov.in; college nodal officer verifies application.',
          kn: 'scholarships.gov.in ನಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ ಕಾಲೇಜಿನಿಂದ ಪರಿಶೀಲನೆ ಮಾಡಿಸಿ.'
        }
      }
    ],
    officialPortalUrl: 'https://www.aicte-india.org/',
    responsibleDepartment: {
      en: 'AICTE Student Development Cell, New Delhi',
      kn: 'ಎಐಸಿಟಿಇ ವಿದ್ಯಾರ್ಥಿ ಅಭಿವೃದ್ಧಿ ಕೋಶ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },

  // ==========================================
  // 4. WOMEN & CHILD WELFARE (2 SCHEMES -> TOTAL 5)
  // ==========================================
  {
    id: 'karnataka-bhagyalakshmi-scheme',
    name: {
      en: 'Bhagyalakshmi Scheme for the Girl Child',
      kn: 'ಭಾಗ್ಯಲಕ್ಷ್ಮಿ ಹೆಣ್ಣು ಮಗುವಿನ ರಕ್ಷಣಾ ಯೋಜನೆ'
    },
    category: 'women_child',
    shortName: 'Bhagyalakshmi Scheme',
    authority: {
      en: 'Department of Women & Child Development, Government of Karnataka & LIC of India',
      kn: 'ಮಹಿಳಾ ಮತ್ತು ಮಕ್ಕಳ ಅಭಿವೃದ್ಧಿ ಇಲಾಖೆ, ಕರ್ನಾಟಕ ಸರ್ಕಾರ & ಎಲ್‌ಐಸಿ'
    },
    level: 'karnataka',
    tagline: {
      en: 'Financial security bond of ₹1,00,000 for girl child born in BPL families upon reaching age 18.',
      kn: 'ಬಿಪಿಎಲ್ ಕುಟುಂಬದಲ್ಲಿ ಜನಿಸಿದ ಹೆಣ್ಣು ಮಗುವಿಗೆ ೧೮ ವರ್ಷ ತುಂಬಿದಾಗ ₹1,00,000 ಆರ್ಥಿಕ ಭದ್ರತಾ ಬಾಂಡ್.'
    },
    description: {
      en: 'Bhagyalakshmi promotes girl child survival, curbs female foeticide, and eliminates child marriage by opening a government-funded financial deposit with LIC in the name of the girl child, providing annual school scholarships and a maturity amount of ₹1 Lakh at age 18.',
      kn: 'ಹೆಣ್ಣು ಭ್ರೂಣಹತ್ಯೆ ಮತ್ತು ಬಾಲ್ಯವಿವಾಹ ತಡೆಯಲು ಬಿಪಿಎಲ್ ಕುಟುಂಬದ ಹೆಣ್ಣು ಮಗುವಿನ ಹೆಸರಿನಲ್ಲಿ ಎಲ್‌ಐಸಿಯಲ್ಲಿ ₹19,300 ಸರ್ಕಾರವೇ ಠೇವಣಿ ಇಡುತ್ತದೆ. ಮಗುವಿಗೆ ೧೮ ವರ್ಷ ತುಂಬಿದಾಗ ₹1 ಲಕ್ಷ ಮೆಚುರಿಟಿ ಮೊತ್ತ ಮತ್ತು ಶಾಲಾ ಅವಧಿಯಲ್ಲಿ ವಾರ್ಷಿಕ ವಿದ್ಯಾರ್ಥಿವೇತನ ದೊರೆಯುತ್ತದೆ.'
    },
    benefits: {
      en: [
        'Maturity payout of ₹1,00,000 directly to the girl child upon completing 18 years unmarried',
        'Annual scholarship from Class 1 to 10 (₹300 to ₹1,000 per year)',
        'Health insurance coverage up to ₹25,000 per year for the enrolled girl child',
        '₹42,000 parental accident relief in case of death of the earning parent'
      ],
      kn: [
        'ಮಗುವಿಗೆ ೧೮ ವರ್ಷ ತುಂಬಿದ ನಂತರ ₹1 ಲಕ್ಷ ಮೆಚುರಿಟಿ ಹಣ ನೇರ ಖಾತೆಗೆ',
        '೧ ರಿಂದ ೧೦ನೇ ತರಗತಿಯವರೆಗೆ ವಾರ್ಷಿಕ ವಿದ್ಯಾರ್ಥಿವೇತನ',
        'ವರ್ಷಕ್ಕೆ ₹25,000 ವರೆಗೆ ಉಚಿತ ಆರೋಗ್ಯ ವಿಮೆ',
        'ಪೋಷಕರ ಅಪಘಾತ ವಿಮಾ ರಕ್ಷಣೆ'
      ]
    },
    knownCriteria: {
      rationCards: ['BPL', 'AAY'],
      karnatakaResidentOnly: true
    },
    disqualifyingConditions: {
      en: ['Restricted to first 2 girl children in a BPL family; child marriage forfeits the bond'],
      kn: ['ಕುಟುಂಬದ ಮೊದಲ ಎರಡು ಹೆಣ್ಣು ಮಕ್ಕಳಿಗೆ ಮಾತ್ರ ಸೀಮಿತ; ೧೮ ವರ್ಷದೊಳಗೆ ಮದುವೆ ಮಾಡಿದರೆ ಬಾಂಡ್ ರದ್ದು']
    },
    requiredDocuments: {
      mandatory: {
        en: ['Birth Certificate of the girl child (registered within 1 year of birth)', 'BPL Ration Card', 'Parental Immunization Record / Mother Card'],
        kn: ['ಮಗುವಿನ ಜನನ ಪ್ರಮಾಣಪತ್ರ (ಜನನದ ೧ ವರ್ಷದೊಳಗೆ)', 'ಬಿಪಿಎಲ್ ಪಡಿತರ ಚೀಟಿ', 'ತಾಯಿ ಕಾರ್ಡ್ / ಲಸಿಕೆ ದಾಖಲೆ']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Visit Local Anganwadi Worker', kn: 'ಅಂಗನವಾಡಿ ಕಾರ್ಯಕರ್ತೆಯನ್ನು ಸಂಪರ್ಕಿಸಿ' },
        description: {
          en: 'Submit birth certificate and BPL card to Anganwadi worker within 1 year of girl child’s birth.',
          kn: 'ಮಗು ಜನಿಸಿದ ೧ ವರ್ಷದೊಳಗೆ ಅಂಗನವಾಡಿ ಕೇಂದ್ರದಲ್ಲಿ ಅರ್ಜಿ ನಮೂನೆ ಸಲ್ಲಿಸಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'CDPO Verification & Bond Issuance', kn: 'ಸಿಡಿಪಿಒ ಪರಿಶೀಲನೆ & ಬಾಂಡ್ ವಿತರಣೆ' },
        description: {
          en: 'Child Development Project Officer (CDPO) validates records and issues Sukanya Samriddhi / LIC Bhagyalakshmi Bond certificate.',
          kn: 'ಸಿಡಿಪಿಒ ಅಧಿಕಾರಿಗಳು ಪರಿಶೀಲಿಸಿ ಅಧಿಕೃತ ಭಾಗ್ಯಲಕ್ಷ್ಮಿ ಬಾಂಡ್ ಪ್ರಮಾಣಪತ್ರ ನೀಡುತ್ತಾರೆ.'
        }
      }
    ],
    officialPortalUrl: 'https://dwcd.karnataka.gov.in/',
    responsibleDepartment: {
      en: 'Women and Child Development Department, Karnataka',
      kn: 'ಮಹಿಳಾ ಮತ್ತು ಮಕ್ಕಳ ಅಭಿವೃದ್ಧಿ ಇಲಾಖೆ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },
  {
    id: 'karnataka-udyogini-scheme',
    name: {
      en: 'Udyogini Scheme for Women Entrepreneurs',
      kn: 'ಉದ್ಯೋಗಿನಿ ಮಹಿಳಾ ಸ್ವಯಂ ಉದ್ಯೋಗ ಯೋಜನೆ'
    },
    category: 'women_child',
    shortName: 'Udyogini Scheme',
    authority: {
      en: 'Karnataka State Women Development Corporation (KSWDC)',
      kn: 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಮಹಿಳಾ ಅಭಿವೃದ್ಧಿ ನಿಗಮ'
    },
    level: 'karnataka',
    tagline: {
      en: 'Bank business loans up to ₹3,00,000 with 30% capital subsidy to empower women entrepreneurs.',
      kn: 'ಸ್ವಂತ ವ್ಯಾಪಾರ ಆರಂಭಿಸಲು ಮಹಿಳೆಯರಿಗೆ ₹3 ಲಕ್ಷದವರೆಗೆ ಸಾಲ ಮತ್ತು ಶೇ. ೩೦ ರಿಯಾಯಿತಿ ಸಬ್ಸಿಡಿ.'
    },
    description: {
      en: 'Udyogini encourages micro-enterprise, catering, tailoring, grocery kiosks, and retail business among women by subsidizing bank loans with up to 30% government capital grant without requiring collateral security.',
      kn: 'ಮಹಿಳೆಯರು ಮನೆಯಲ್ಲೇ ಅಥವಾ ಸಣ್ಣ ಅಂಗಡಿ, ಬ್ಯೂಟಿ ಪಾರ್ಲರ್, ಬೇಕರಿ, ಹೊಲಿಗೆ ಕೇಂದ್ರ ಆರಂಭಿಸಲು ಬ್ಯಾಂಕ್ ಸಾಲ ಕೊಡಿಸಿ, ಅದರಲ್ಲಿ ಶೇ. ೩೦ ರಷ್ಟು (ಗರಿಷ್ಠ ₹೯೦,೦೦೦) ಹಣವನ್ನು ಸರ್ಕಾರವೇ ಉಚಿತ ಸಬ್ಸಿಡಿಯಾಗಿ ಭರಿಸುತ್ತದೆ.'
    },
    benefits: {
      en: [
        'Loans up to ₹3,00,000 from public sector and cooperative banks',
        'Government subsidy of 30% (up to ₹90,000 for general; up to 50% for SC/ST women)',
        'Zero collateral security required for eligible rural and urban women',
        'Free 3-day entrepreneurship orientation and accounting training'
      ],
      kn: [
        'ಬ್ಯಾಂಕ್‌ಗಳಿಂದ ₹3 ಲಕ್ಷದವರೆಗೆ ಸುಲಭ ಸಾಲ ಸೌಲಭ್ಯ',
        'ಸಾಮಾನ್ಯ ಮಹಿಳೆಯರಿಗೆ ಶೇ. ೩೦ ಹಾಗೂ ಎಸ್‌ಸಿ/ಎಸ್‌ಟಿ ಮಹಿಳೆಯರಿಗೆ ಶೇ. ೫೦ ಸರ್ಕಾರಿ ಸಬ್ಸಿಡಿ',
        'ಯಾವುದೇ ಆಸ್ತಿ ಅಡಮಾನ ಇಡುವ ಅಗತ್ಯವಿಲ್ಲ',
        'ಉಚಿತ ಉದ್ಯಮಶೀಲತಾ ತರಬೇತಿ'
      ]
    },
    knownCriteria: {
      gender: 'female',
      minAge: 18,
      maxAge: 55,
      maxAnnualIncome: 150000,
      karnatakaResidentOnly: true
    },
    disqualifyingConditions: {
      en: ['Annual family income exceeding ₹1,50,000 (No income limit for SC/ST women)'],
      kn: ['ಕುಟುಂಬದ ವಾರ್ಷಿಕ ಆದಾಯ ₹1.5 ಲಕ್ಷ ಮೀರಬಾರದು (ಪರಿಶಿಷ್ಟರಿಗೆ ಆದಾಯ ಮಿತಿಯಿಲ್ಲ)']
    },
    requiredDocuments: {
      mandatory: {
        en: ['Applicant Aadhaar Card', 'Income & Caste Certificate', 'Project Proposal / Quotation for business setup', 'Bank Account Passbook'],
        kn: ['ಆಧಾರ್ ಕಾರ್ಡ್', 'ಆದಾಯ & ಜಾತಿ ಪ್ರಮಾಣಪತ್ರ', 'ವ್ಯಾಪಾರ ಪ್ರಾಜೆಕ್ಟ್ ರಿಪೋರ್ಟ್', 'ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Apply Online via Seva Sindhu Portal', kn: 'ಸೇವಾ ಸಿಂಧು ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಅರ್ಜಿ' },
        description: {
          en: 'Apply on sevasindhu.karnataka.gov.in under Karnataka State Women Development Corporation.',
          kn: 'ಸೇವಾ ಸಿಂಧು ಮೂಲಕ ಮಹಿಳಾ ಅಭಿವೃದ್ಧಿ ನಿಗಮಕ್ಕೆ ಆನ್‌ಲೈನ್ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'District Committee Sanction & Bank Disbursement', kn: 'ಜಿಲ್ಲಾ ಸಮಿತಿ ಅನುಮೋದನೆ & ಸಾಲ ಬಿಡುಗಡೆ' },
        description: {
          en: 'District selection committee approves project and bank disburses loan with government subsidy credited upfront.',
          kn: 'ಸಮಿತಿ ಪರಿಶೀಲನೆ ನಂತರ ಬ್ಯಾಂಕ್ ಸಾಲ ಮಂಜೂರು ಮಾಡಿ ಸಬ್ಸಿಡಿ ಜಮೆ ಮಾಡುತ್ತದೆ.'
        }
      }
    ],
    officialPortalUrl: 'https://kswdc.karnataka.gov.in/',
    responsibleDepartment: {
      en: 'Karnataka State Women Development Corporation',
      kn: 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಮಹಿಳಾ ಅಭಿವೃದ್ಧಿ ನಿಗಮ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },

  // ==========================================
  // 5. SENIOR CITIZENS PENSION (4 SCHEMES -> TOTAL 5)
  // ==========================================
  {
    id: 'central-ignoaps-pension',
    name: {
      en: 'Indira Gandhi National Old Age Pension Scheme (IGNOAPS)',
      kn: 'ಇಂದಿರಾ ಗಾಂಧಿ ರಾಷ್ಟ್ರೀಯ ವೃದ್ಧಾಪ್ಯ ವೇತನ ಯೋಜನೆ'
    },
    category: 'senior_pension',
    shortName: 'IGNOAPS Pension',
    authority: {
      en: 'National Social Assistance Programme (NSAP), Ministry of Rural Development, GoI',
      kn: 'ರಾಷ್ಟ್ರೀಯ ಸಾಮಾಜಿಕ ನೆರವು ಯೋಜನೆ, ಭಾರತ ಸರ್ಕಾರ'
    },
    level: 'central',
    tagline: {
      en: 'Central social security monthly pension floor for BPL senior citizens aged 60 years and above.',
      kn: '೬೦ ವರ್ಷ ಮೇಲ್ಪಟ್ಟ ಬಡ ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ಮಾಸಿಕ ಕೇಂದ್ರ ಸಾಮಾಜಿಕ ಭದ್ರತಾ ಪಿಂಚಣಿ.'
    },
    description: {
      en: 'IGNOAPS provides non-contributory direct pension into bank accounts for elderly citizens living below the poverty line, guaranteeing lifelong dignity with higher assistance upon turning 80 years.',
      kn: 'ಬಡತನ ರೇಖೆಗಿಂತ ಕೆಳಗಿರುವ ೬೦ ವರ್ಷ ಮೇಲ್ಪಟ್ಟ ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ಯಾವುದೇ ವಂತಿಗೆ ಇಲ್ಲದೆ ಕೇಂದ್ರ ಮತ್ತು ರಾಜ್ಯ ಸರ್ಕಾರದ ಸಹಯೋಗದಲ್ಲಿ ನೇರ ಮಾಸಿಕ ಪಿಂಚಣಿ ನೀಡಲಾಗುತ್ತದೆ.'
    },
    benefits: {
      en: [
        'Monthly pension credited via DBT on the 1st to 10th of every month',
        'Combined with Karnataka Sandhya Suraksha to ensure ₹1,200/month',
        'Automatic upgrade to higher slab of ₹500/month central share upon turning 80 years',
        'Direct linkage to free KSRTC/BMTC bus passes'
      ],
      kn: [
        'ಪ್ರತಿ ತಿಂಗಳು ನೇರ ನಗದು ಜಮೆ',
        'ಕರ್ನಾಟಕ ಸಂಧ್ಯಾ ಸುರಕ್ಷಾ ಜೊತೆ ಸೇರಿ ಒಟ್ಟು ₹1,200 ಜಮೆ',
        '೮೦ ವರ್ಷ ತುಂಬಿದ ನಂತರ ಹೆಚ್ಚುವರಿ ಪಿಂಚಣಿ',
        'ಸರ್ಕಾರಿ ಬಸ್‌ಗಳಲ್ಲಿ ರಿಯಾಯಿತಿ ಪಾಸ್ ಸೌಲಭ್ಯ'
      ]
    },
    knownCriteria: {
      minAge: 60,
      rationCards: ['BPL', 'AAY'],
      exploringPension: true,
      seniorCitizen: true
    },
    disqualifyingConditions: {
      en: ['Senior citizens with regular pension from government or organized corporate sectors'],
      kn: ['ಸರ್ಕಾರಿ ಅಥವಾ ಇಪಿಎಫ್‌ಒ ಪಿಂಚಣಿ ಪಡೆಯುತ್ತಿರುವವರು']
    },
    requiredDocuments: {
      mandatory: {
        en: ['Aadhaar Card with age proof (≥ 60 years)', 'BPL Ration Card', 'Bank Passbook with NPCI Aadhaar seeding'],
        kn: ['ವಯಸ್ಸಿನ ದೃಢೀಕರಣವಿರುವ ಆಧಾರ್ ಕಾರ್ಡ್', 'ಬಿಪಿಎಲ್ ಪಡಿತರ ಚೀಟಿ', 'ಆಧಾರ್ ಲಿಂಕ್ ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Apply at Bangalore One or Nadakacheri', kn: 'ಬೆಂಗಳೂರು ಒನ್ ಅಥವಾ ನಾಡಕಚೇರಿಯಲ್ಲಿ ಅರ್ಜಿ' },
        description: {
          en: 'Submit application with BPL card and bank passbook.',
          kn: 'ಮೂಲ ದಾಖಲೆಗಳೊಂದಿಗೆ ನಾಡಕಚೇರಿಯಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Tahsildar Digital Sanction', kn: 'ತಹಶೀಲ್ದಾರ್ ಡಿಜಿಟಲ್ ಮಂಜೂರಾತಿ' },
        description: {
          en: 'Village Accountant field checks age and BPL status; monthly DBT commences.',
          kn: 'ಸ್ಥಳ ಪರಿಶೀಲನೆ ನಂತರ ತಹಶೀಲ್ದಾರ್ ಮಂಜೂರಾತಿ ನೀಡುತ್ತಾರೆ.'
        }
      }
    ],
    officialPortalUrl: 'https://nsap.nic.in/',
    responsibleDepartment: {
      en: 'Directorate of Social Security and Pensions, Revenue Dept',
      kn: 'ಸಾಮಾಜಿಕ ಭದ್ರತೆ ಮತ್ತು ಪಿಂಚಣಿಗಳ ನಿರ್ದೇಶನಾಲಯ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },
  {
    id: 'central-atal-pension-yojana',
    name: {
      en: 'Atal Pension Yojana (APY) Guaranteed Pension',
      kn: 'ಅಟಲ್ ಪಿಂಚಣಿ ಯೋಜನೆ (ಎಪಿವೈ ಖಚಿತ ಪಿಂಚಣಿ)'
    },
    category: 'senior_pension',
    shortName: 'Atal Pension Yojana',
    authority: {
      en: 'Pension Fund Regulatory and Development Authority (PFRDA), Government of India',
      kn: 'ಪಿಂಚಣಿ ನಿಧಿ ನಿಯಂತ್ರಣ ಮತ್ತು ಅಭಿವೃದ್ಧಿ ಪ್ರಾಧಿಕಾರ (ಪಿಎಫ್‌ಆರ್‌ಡಿಎ)'
    },
    level: 'central',
    tagline: {
      en: 'Guaranteed government monthly pension of ₹1,000 to ₹5,000 after age 60 for unorganized workers.',
      kn: 'ಅಸಂಘಟಿತ ವಲಯದ ಕಾರ್ಮಿಕರಿಗೆ ೬೦ ವರ್ಷದ ನಂತರ ಪ್ರತಿ ತಿಂಗಳು ₹1,000 ದಿಂದ ₹5,000 ಖಚಿತ ಪಿಂಚಣಿ.'
    },
    description: {
      en: 'A flagship government-guaranteed voluntary contributory pension scheme for citizens aged 18 to 40 years. Modest monthly savings of ₹42 to ₹210 auto-debited from your bank account guarantee lifelong monthly pension of ₹1,000 to ₹5,000 after age 60, followed by return of corpus to nominee upon demise.',
      kn: '೧೮ ರಿಂದ ೪೦ ವರ್ಷದ ಯಾವುದೇ ಭಾರತೀಯ ನಾಗರಿಕರು ತಿಂಗಳಿಗೆ ಕೇವಲ ₹೪೨ ರಿಂದ ₹೨೧೦ ರಷ್ಟು ಸಣ್ಣ ಉಳಿತಾಯ ಮಾಡುವ ಮೂಲಕ ೬೦ ವರ್ಷದ ನಂತರ ಜೀವಮಾನಪರ್ಯಂತ ₹1,000 ದಿಂದ ₹5,000 ವರೆಗೆ ಸರ್ಕಾರಿ ಖಚಿತ ಮಾಸಿಕ ಪಿಂಚಣಿ ಪಡೆಯಬಹುದು.'
    },
    benefits: {
      en: [
        'Government guaranteed fixed monthly pension (₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000)',
        'Spouse receives same pension amount lifelong after subscriber death',
        'Accumulated wealth corpus (up to ₹8.5 Lakhs) returned to children/nominee thereafter',
        'Tax deduction benefits under Section 80CCD(1B) up to ₹50,000'
      ],
      kn: [
        '೬೦ ವರ್ಷದ ನಂತರ ₹1,000 ದಿಂದ ₹5,000 ವರೆಗೆ ಖಚಿತ ಮಾಸಿಕ ಪಿಂಚಣಿ',
        'ಮರಣಾನಂತರ ಪತಿ/ಪತ್ನಿಗೆ ಅದೇ ಪಿಂಚಣಿ ಮುಂದುವರಿಕೆ',
        'ಇಬ್ಬರ ನಂತರ ಸಂಪೂರ್ಣ ಠೇವಣಿ ಮೊತ್ತ ₹8.5 ಲಕ್ಷ ಮಕ್ಕಳಿಗೆ ವಾಪಸ್',
        'ಆದಾಯ ತೆರಿಗೆ ಸೆಕ್ಷನ್ ೮೦ಸಿಸಿಡಿ ಅಡಿಯಲ್ಲಿ ರಿಯಾಯಿತಿ'
      ]
    },
    knownCriteria: {
      minAge: 18,
      maxAge: 40,
      exploringPension: true
    },
    disqualifyingConditions: {
      en: ['Citizens who are income tax payers are not eligible to join APY'],
      kn: ['ಆದಾಯ ತೆರಿಗೆ ಪಾವತಿದಾರರಿಗೆ ಅನ್ವಯಿಸುವುದಿಲ್ಲ']
    },
    requiredDocuments: {
      mandatory: {
        en: ['Savings Bank Account with Auto-Debit mandate', 'Aadhaar Card linked to mobile OTP'],
        kn: ['ಬ್ಯಾಂಕ್ ಅಥವಾ ಪೋಸ್ಟ್ ಆಫೀಸ್ ಉಳಿತಾಯ ಖಾತೆ', 'ಆಧಾರ್ ಕಾರ್ಡ್']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Visit Bank Branch or Mobile Banking App', kn: 'ಬ್ಯಾಂಕ್ ಅಥವಾ ಮೊಬೈಲ್ ಬ್ಯಾಂಕಿಂಗ್ ಮೂಲಕ ನೋಂದಣಿ' },
        description: {
          en: 'Login to SBI, Canara Bank, or Post Office mobile app or visit your home branch.',
          kn: 'ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆ ಇರುವ ಶಾಖೆಗೆ ಭೇಟಿ ನೀಡಿ ಎಪಿವೈ ಫಾರ್ಮ್ ನೀಡಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Choose Monthly Pension Slab', kn: 'ಪಿಂಚಣಿ ಮೊತ್ತ ಆಯ್ಕೆ ಮಾಡಿ' },
        description: {
          en: 'Select desired pension (e.g. ₹5,000/month). Small monthly premium auto-debited automatically.',
          kn: 'ನಿಮಗೆ ಬೇಕಾದ ಪಿಂಚಣಿ ಮೊತ್ತ ಆಯ್ಕೆ ಮಾಡಿ ಆಟೋ-ಡೆಬಿಟ್ ಸಕ್ರಿಯಗೊಳಿಸಿ.'
        }
      }
    ],
    officialPortalUrl: 'https://www.npscra.nsdl.co.in/',
    responsibleDepartment: {
      en: 'PFRDA, Ministry of Finance, Government of India',
      kn: 'ಹಣಕಾಸು ಸಚಿವಾಲಯ, ಭಾರತ ಸರ್ಕಾರ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },
  {
    id: 'karnataka-senior-bus-pass',
    name: {
      en: 'BMTC & KSRTC Senior Citizen Concession Smart Pass',
      kn: 'ಬಿಎಂಟಿಸಿ & ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಹಿರಿಯ ನಾಗರಿಕರ ರಿಯಾಯಿತಿ ಬಸ್ ಪಾಸ್'
    },
    category: 'senior_pension',
    shortName: 'Senior Citizen Bus Pass',
    authority: {
      en: 'Bangalore Metropolitan Transport Corporation (BMTC) & KSRTC',
      kn: 'ಬೆಂಗಳೂರು ಮಹಾನಗರ ಸಾರಿಗೆ ಸಂಸ್ಥೆ (ಬಿಎಂಟಿಸಿ) & ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ'
    },
    level: 'karnataka',
    tagline: {
      en: '25% to 50% bus fare concession for senior citizens aged 60+ across Bengaluru and Karnataka.',
      kn: '೬೦ ವರ್ಷ ಮೇಲ್ಪಟ್ಟ ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ಬಿಎಂಟಿಸಿ ಮತ್ತು ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಬಸ್‌ಗಳಲ್ಲಿ ಶೇ. ೨೫ ರಿಂದ ೫೦ ರಿಯಾಯಿತಿ.'
    },
    description: {
      en: 'Empowers senior citizens to travel freely across Bengaluru on BMTC city buses and across Karnataka on KSRTC rural and express buses with subsidized smart card passes or direct ticketing discounts upon displaying age proof.',
      kn: 'ಬೆಂಗಳೂರಿನಲ್ಲಿ ಸಂಚರಿಸುವ ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ಬಿಎಂಟಿಸಿ ಮಾಸಿಕ ಪಾಸುಗಳಲ್ಲಿ ರಿಯಾಯಿತಿ ಹಾಗೂ ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಸಾಮಾನ್ಯ ಮತ್ತು ವೇಗದೂತ ಬಸ್‌ಗಳಲ್ಲಿ ಪ್ರಯಾಣದ ಟಿಕೆಟ್ ದರದಲ್ಲಿ ಶೇ. ೨೫ ರಿಯಾಯಿತಿ ನೀಡಲಾಗುತ್ತದೆ.'
    },
    benefits: {
      en: [
        '25% discount on all ordinary, express, and semi-deluxe KSRTC bus tickets statewide',
        'Highly subsidized monthly BMTC Senior Citizen Smart Pass for unlimited Bengaluru city travel',
        'Dedicated reserved front seats in all public buses with priority boarding',
        'Valid for all senior citizens residing in Karnataka aged 60 and above'
      ],
      kn: [
        'ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಬಸ್‌ಗಳ ಟಿಕೆಟ್ ದರದಲ್ಲಿ ಶೇ. ೨೫ ರಿಯಾಯಿತಿ',
        'ಬೆಂಗಳೂರಿನಲ್ಲಿ ಅನಿಯಮಿತ ಪ್ರಯಾಣಕ್ಕೆ ಕಡಿಮೆ ದರದ ಬಿಎಂಟಿಸಿ ಮಾಸಿಕ ಪಾಸ್',
        'ಬಸ್‌ಗಳಲ್ಲಿ ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ಮೀಸಲಾದ ಮುಂಭಾಗದ ಸೀಟುಗಳು',
        '೬೦ ವರ್ಷ ತುಂಬಿದ ಎಲ್ಲಾ ಹಿರಿಯರಿಗೆ ಲಭ್ಯ'
      ]
    },
    knownCriteria: {
      minAge: 60,
      seniorCitizen: true,
      karnatakaResidentOnly: true
    },
    disqualifyingConditions: {
      en: ['Concession does not apply to luxury AC Volvo/Airavat services for basic tickets'],
      kn: ['ಐಷಾರಾಮಿ ಎಸಿ ಬಸ್‌ಗಳ ಸಾಮಾನ್ಯ ಟಿಕೆಟ್‌ಗೆ ಅನ್ವಯಿಸುವುದಿಲ್ಲ']
    },
    requiredDocuments: {
      mandatory: {
        en: ['Aadhaar Card or Voter ID showing date of birth ≥ 60 years', 'Senior Citizen Identity Card issued by Directorate of Disabled/Elderly'],
        kn: ['೬೦ ವರ್ಷ ವಯಸ್ಸು ದೃಢೀಕರಿಸುವ ಆಧಾರ್ ಕಾರ್ಡ್ ಅಥವಾ ಹಿರಿಯ ನಾಗರಿಕರ ಐಡಿ']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Direct Ticket Concession on Bus', kn: 'ಬಸ್‌ನಲ್ಲಿ ನೇರ ಟಿಕೆಟ್ ರಿಯಾಯಿತಿ' },
        description: {
          en: 'Show physical Aadhaar or Senior Citizen Card directly to conductor while boarding to get 25% discounted ticket.',
          kn: 'ಕಂಡಕ್ಟರ್‌ಗೆ ಆಧಾರ್ ಕಾರ್ಡ್ ತೋರಿಸಿ ಶೇ. ೨೫ ರಿಯಾಯಿತಿ ಟಿಕೆಟ್ ಪಡೆಯಿರಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Apply for BMTC Monthly Smart Pass', kn: 'ಬಿಎಂಟಿಸಿ ಮಾಸಿಕ ಸ್ಮಾರ್ಟ್ ಪಾಸ್ ಪಡೆಯಿರಿ' },
        description: {
          en: 'Visit Majestic, Kempegowda Bus Station, or Shivajinagar TTMC counter with 2 passport photos and Aadhaar to collect monthly smart card.',
          kn: 'ಮೆಜೆಸ್ಟಿಕ್ ಅಥವಾ ಶಿವಾಜಿನಗರ ಟಿಟಿಎಂಸಿ ಕೌಂಟರ್‌ನಲ್ಲಿ ಕಡಿಮೆ ದರದ ಮಾಸಿಕ ಪಾಸ್ ಪಡೆಯಿರಿ.'
        }
      }
    ],
    officialPortalUrl: 'https://mybmtc.karnataka.gov.in/',
    responsibleDepartment: {
      en: 'Transport Department, Government of Karnataka',
      kn: 'ಸಾರಿಗೆ ಇಲಾಖೆ, ಕರ್ನಾಟಕ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },
  {
    id: 'central-pmvv-pension',
    name: {
      en: 'Pradhan Mantri Vaya Vandana Yojana (Senior Income Security)',
      kn: 'ಪ್ರಧಾನಮಂತ್ರಿ ವಯ ವಂದನಾ ಯೋಜನೆ (ಹಿರಿಯರ ಆದಾಯ ಭದ್ರತೆ)'
    },
    category: 'senior_pension',
    shortName: 'PM Vaya Vandana Yojana',
    authority: {
      en: 'Life Insurance Corporation of India (LIC) & Ministry of Finance, GoI',
      kn: 'ಭಾರತೀಯ ಜೀವ ವಿಮಾ ನಿಗಮ (ಎಲ್‌ಐಸಿ) & ಹಣಕಾಸು ಸಚಿವಾಲಯ'
    },
    level: 'central',
    tagline: {
      en: 'Guaranteed 7.4% annual pension returns for seniors aged 60+ managed securely by LIC.',
      kn: '೬೦ ವರ್ಷ ಮೇಲ್ಪಟ್ಟ ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ಎಲ್‌ಐಸಿ ಮೂಲಕ ವಾರ್ಷಿಕ ಶೇ. ೭.೪ ಖಚಿತ ಪಿಂಚಣಿ ಲಾಭ.'
    },
    description: {
      en: 'A government-subsidized retirement investment scheme executed exclusively by LIC protecting senior citizens against declining interest rates by locking in guaranteed regular monthly, quarterly, or annual pension payouts for 10 full years.',
      kn: 'ಬ್ಯಾಂಕ್ ಬಡ್ಡಿದರ ಇಳಿಕೆಯಿಂದ ಹಿರಿಯ ನಾಗರಿಕರ ನಿವೃತ್ತಿ ಉಳಿತಾಯಕ್ಕೆ ತೊಂದರೆಯಾಗದಂತೆ, ಎಲ್‌ಐಸಿ ಮೂಲಕ ೧೦ ವರ್ಷಗಳ ಕಾಲ ಗ್ಯಾರಂಟಿ ಮಾಸಿಕ ಆದಾಯ ನೀಡುವ ಕೇಂದ್ರ ಸರ್ಕಾರದ ಪ್ರಮುಖ ಯೋಜನೆ.'
    },
    benefits: {
      en: [
        'Guaranteed assured return of 7.4% per annum payable monthly for 10 years',
        'Monthly pension up to ₹9,250 depending on investment sum (max ₹15 Lakhs)',
        'Full purchase price returned to retiree at end of 10 years or to nominee upon death',
        'Premature exit allowed for critical medical treatment with 98% refund'
      ],
      kn: [
        '೧೦ ವರ್ಷಗಳ ಕಾಲ ವಾರ್ಷಿಕ ಶೇ. ೭.೪ ರಷ್ಟು ಖಚಿತ ಪಿಂಚಣಿ ಲಾಭ',
        'ತಿಂಗಳಿಗೆ ಗರಿಷ್ಠ ₹9,250 ವರೆಗೆ ಖಾತೆಗೆ ನೇರ ಪಿಂಚಣಿ ಜಮೆ',
        '೧೦ ವರ್ಷ ಮುಗಿದ ನಂತರ ಸಂಪೂರ್ಣ ಹೂಡಿಕೆ ಮೊತ್ತ ವಾಪಸ್',
        'ತುರ್ತು ವೈದ್ಯಕೀಯ ಚಿಕಿತ್ಸೆಗೆ ಹಣ ಹಿಂಪಡೆಯುವ ಸೌಲಭ್ಯ'
      ]
    },
    knownCriteria: {
      minAge: 60,
      seniorCitizen: true
    },
    disqualifyingConditions: {
      en: ['Applicant must be at least 60 years of age at the time of purchase'],
      kn: ['೬೦ ವರ್ಷಕ್ಕಿಂತ ಕಡಿಮೆ ವಯಸ್ಸಿನವರಿಗೆ ಅನ್ವಯಿಸುವುದಿಲ್ಲ']
    },
    requiredDocuments: {
      mandatory: {
        en: ['Age proof (Aadhaar / PAN Card / Passport)', 'Bank Account details for monthly pension auto-credit', 'Address Proof'],
        kn: ['ಆಧಾರ್ ಕಾರ್ಡ್', 'ಪ್ಯಾನ್ ಕಾರ್ಡ್', 'ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Visit any LIC Branch in Bengaluru', kn: 'ಬೆಂಗಳೂರಿನ ಯಾವುದೇ ಎಲ್‌ಐಸಿ ಶಾಖೆಗೆ ಭೇಟಿ ನೀಡಿ' },
        description: {
          en: 'Meet LIC officer or apply online on licindia.in under PMVVY portal.',
          kn: 'ಎಲ್‌ಐಸಿ ಶಾಖೆಗೆ ಭೇಟಿ ನೀಡಿ ಅಥವಾ ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Deposit Lump Sum & Start Monthly Pension', kn: 'ಠೇವಣಿ ಇರಿಸಿ ಮಾಸಿಕ ಪಿಂಚಣಿ ಆರಂಭಿಸಿ' },
        description: {
          en: 'Deposit chosen principal and receive guaranteed pension every month into your bank.',
          kn: 'ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಪ್ರತಿ ತಿಂಗಳು ಖಚಿತ ಪಿಂಚಣಿ ಹಣ ಜಮೆಯಾಗುತ್ತದೆ.'
        }
      }
    ],
    officialPortalUrl: 'https://www.licindia.in/',
    responsibleDepartment: {
      en: 'LIC of India & Department of Financial Services',
      kn: 'ಎಲ್‌ಐಸಿ & ಹಣಕಾಸು ಸಚಿವಾಲಯ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },

  // ==========================================
  // 6. DISABILITY ASSISTANCE (4 SCHEMES -> TOTAL 5)
  // ==========================================
  {
    id: 'central-udid-card',
    name: {
      en: 'Unique Disability ID (UDID) Card & Universal Concession Pass',
      kn: 'ವಿಶಿಷ್ಟ ಅಂಗವೈಕಲ್ಯ ಗುರುತಿನ ಚೀಟಿ (ಯುಡಿಐಡಿ ಕಾರ್ಡ್)'
    },
    category: 'disability',
    shortName: 'UDID Card',
    authority: {
      en: 'Department of Empowerment of Persons with Disabilities, Ministry of Social Justice, GoI',
      kn: 'ಸಾಮಾಜಿಕ ನ್ಯಾಯ ಮತ್ತು ಸಬಲೀಕರಣ ಸಚಿವಾಲಯ, ಭಾರತ ಸರ್ಕಾರ'
    },
    level: 'central',
    tagline: {
      en: 'Single national smart card ensuring access to disability pensions, free bus/rail passes, and quotas.',
      kn: 'ದೇಶಾದ್ಯಂತ ಪಿಂಚಣಿ, ಉಚಿತ ಬಸ್/ರೈಲು ಪಾಸ್ ಮತ್ತು ಮೀಸಲಾತಿ ಪಡೆಯಲು ಏಕೈಕ ಸ್ಮಾರ್ಟ್ ಕಾರ್ಡ್.'
    },
    description: {
      en: 'UDID provides a tamper-proof QR-coded biometric smart identity card for persons with 21 specified disabilities under RPwD Act 2016, eliminating the need to carry multiple physical medical certificates for pensions, exam scribes, and transport concessions.',
      kn: 'ವಿಕಲಚೇತನರಿಗೆ ೨೧ ಬಗೆಯ ಅಂಗವೈಕಲ್ಯಗಳನ್ನು ಗುರುತಿಸಿ, ಆಸ್ಪತ್ರೆಯ ವೈದ್ಯಕೀಯ ಮಂಡಳಿಯಿಂದ ಪರೀಕ್ಷಿಸಿ ಕ್ಯೂಆರ್ ಕೋಡ್ ಹೊಂದಿರುವ ಅಧಿಕೃತ ಯುಡಿಐಡಿ ಸ್ಮಾರ್ಟ್ ಕಾರ್ಡ್ ನೀಡಲಾಗುತ್ತದೆ. ಇದು ದೇಶದ ಎಲ್ಲಾ ಸರ್ಕಾರಿ ಸೌಲಭ್ಯಗಳಿಗೆ ಮಾನ್ಯವಾಗಿರುತ್ತದೆ.'
    },
    benefits: {
      en: [
        'Nationwide single document accepted for all 21 types of benchmark disabilities',
        'Direct linkage to Karnataka Monthly Disability Pension (₹1,400 to ₹2,000/mo)',
        'Free bus pass in KSRTC/BMTC and subsidized railway concession certificate',
        'Mandatory 4% reservation in government jobs and 5% reservation in higher education'
      ],
      kn: [
        'ದೇಶಾದ್ಯಂತ ಎಲ್ಲಾ ಸೌಲಭ್ಯಗಳಿಗೆ ಮಾನ್ಯತೆ ಹೊಂದಿರುವ ಏಕೈಕ ಗುರುತಿನ ಚೀಟಿ',
        'ಕರ್ನಾಟಕ ಮಾಸಿಕ ಅಂಗವಿಕಲ ಪಿಂಚಣಿ (₹1,400-₹2,000) ನೇರ ಲಿಂಕ್',
        'ಉಚಿತ ಬಸ್ ಪಾಸ್ ಮತ್ತು ರೈಲ್ವೆ ರಿಯಾಯಿತಿ',
        'ಸರ್ಕಾರಿ ನೌಕರಿಯಲ್ಲಿ ಶೇ. ೪ ಮತ್ತು ಶಿಕ್ಷಣದಲ್ಲಿ ಶೇ. ೫ ಮೀಸಲಾತಿ'
      ]
    },
    knownCriteria: {
      hasDisability: true,
      disabilityAssistance: true
    },
    disqualifyingConditions: {
      en: ['Disability percentage below 40% does not qualify for benchmark disability benefits'],
      kn: ['ಶೇ. ೪೦ ಕ್ಕಿಂತ ಕಡಿಮೆ ಅಂಗವೈಕಲ್ಯ ಇರುವವರಿಗೆ ಬೆಂಚ್‌ಮಾರ್ಕ್ ಸೌಲಭ್ಯಗಳು ಸಿಗುವುದಿಲ್ಲ']
    },
    requiredDocuments: {
      mandatory: {
        en: ['Medical Disability Certificate (from Govt District Hospital)', 'Aadhaar Card', 'Passport size photograph showing disability'],
        kn: ['ಜಿಲ್ಲಾ ಆಸ್ಪತ್ರೆಯ ವೈದ್ಯಕೀಯ ಪ್ರಮಾಣಪತ್ರ', 'ಆಧಾರ್ ಕಾರ್ಡ್', 'ಭಾವಚಿತ್ರ']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Register on Swavlamban Portal', kn: 'ಸ್ವಾವಲಂಬನ್ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ನೋಂದಣಿ' },
        description: {
          en: 'Submit online application on swavlambancard.gov.in or via nearest Bangalore One centre.',
          kn: 'swavlambancard.gov.in ನಲ್ಲಿ ಅಥವಾ ಬೆಂಗಳೂರು ಒನ್ ಮೂಲಕ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Assessment at KC General or Victoria Hospital', kn: 'ಆಸ್ಪತ್ರೆಯ ವೈದ್ಯಕೀಯ ಮಂಡಳಿ ಪರೀಕ್ಷೆ' },
        description: {
          en: 'Attend appointment at designated medical authority to assess disability percentage.',
          kn: 'ಜಿಲ್ಲಾ ಆಸ್ಪತ್ರೆಗೆ ತೆರಳಿ ವೈದ್ಯಕೀಯ ಮಂಡಳಿಯಿಂದ ಅಂಗವೈಕಲ್ಯ ಶೇಕಡಾವಾರು ಪರೀಕ್ಷಿಸಿಕೊಳ್ಳಿ.'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Download Digital UDID Card', kn: 'ಡಿಜಿಟಲ್ ಯುಡಿಐಡಿ ಕಾರ್ಡ್ ಡೌನ್‌ಲೋಡ್' },
        description: {
          en: 'Download QR-coded UDID certificate online; plastic smart card arrives by post.',
          kn: 'ಆನ್‌ಲೈನ್‌ನಲ್ಲೇ ಕಾರ್ಡ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿಕೊಳ್ಳಿ; ಅಂಚೆ ಮೂಲಕ ಪ್ಲಾಸ್ಟಿಕ್ ಕಾರ್ಡ್ ಮನೆಗೆ ಬರುತ್ತದೆ.'
        }
      }
    ],
    officialPortalUrl: 'https://www.swavlambancard.gov.in/',
    responsibleDepartment: {
      en: 'Department of Empowerment of Persons with Disabilities, GoI',
      kn: 'ವಿಶೇಷ ಚೇತನರ ಸಬಲೀಕರಣ ಇಲಾಖೆ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },
  {
    id: 'central-adip-assistive-devices',
    name: {
      en: 'ADIP Scheme (Free Motorized Tricycles, Hearing Aids & Artificial Limbs)',
      kn: 'ಅಡಿಪ್ ಯೋಜನೆ (ಉಚಿತ ಮೋಟಾರೈಸ್ಡ್ ಟ್ರೈಸಿಕಲ್, ಶ್ರವಣ ಸಾಧನ & ಕೃತಕ ಅಂಗಗಳು)'
    },
    category: 'disability',
    shortName: 'ADIP Scheme',
    authority: {
      en: 'ALIMCO & Ministry of Social Justice and Empowerment, Government of India',
      kn: 'ಆಲಿಮ್ಕೊ (ALIMCO) & ಸಾಮಾಜಿಕ ನ್ಯಾಯ ಸಚಿವಾಲಯ, ಭಾರತ ಸರ್ಕಾರ'
    },
    level: 'central',
    tagline: {
      en: '100% Free modern motorized tricycles, smart cane, digital hearing aids, and prosthetics for disabled citizens.',
      kn: 'ವಿಕಲಚೇತನರಿಗೆ ಉಚಿತ ಮೋಟಾರ್ ಟ್ರೈಸಿಕಲ್, ಶ್ರವಣ ಯಂತ್ರ, ಗಾಲಿಕುರ್ಚಿ ಮತ್ತು ಕೃತಕ ಕೈ-ಕಾಲು ವಿತರಣೆ.'
    },
    description: {
      en: 'Under the ADIP scheme, the Government of India provides modern, durable, and sophisticated assistive aids completely free to persons with physical, visual, hearing, or loco-motor disabilities with monthly income up to ₹22,500.',
      kn: 'ಬಡ ವಿಕಲಚೇತನರಿಗೆ ಚಲನಶೀಲತೆ ಕಲ್ಪಿಸಲು ಕೇಂದ್ರ ಸರ್ಕಾರವು ಆಲಿಮ್ಕೊ ಮೂಲಕ ಮೋಟಾರ್ ಚಾಲಿತ ತ್ರಿಚಕ್ರ ವಾಹನಗಳು, ಡಿಜಿಟಲ್ ಶ್ರವಣ ಸಾಧನಗಳು, ದೃಷ್ಟಿದೋಷವುಳ್ಳವರಿಗೆ ಸ್ಮಾರ್ಟ್ ಕೇನ್ ಹಾಗೂ ಕೃತಕ ಅಂಗಗಳನ್ನು ಸಂಪೂರ್ಣ ಉಚಿತವಾಗಿ ನೀಡುತ್ತದೆ.'
    },
    benefits: {
      en: [
        'Free Motorized Battery-Operated Tricycles (costing ₹42,000 in open market)',
        'Digital BTE Hearing Aids and Cochlear Implant surgery assistance up to ₹6 Lakhs for young children',
        'Custom-fitted artificial limbs (Jaipur Foot) and modular prosthetics',
        'Smart Canes, Daisy Players, and Braille slates for visually impaired citizens'
      ],
      kn: [
        'ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ₹42,000 ಬೆಲೆಯ ಬ್ಯಾಟರಿ ಚಾಲಿತ ಮೋಟಾರ್ ಟ್ರೈಸಿಕಲ್ ಸಂಪೂರ್ಣ ಉಚಿತ',
        'ಕಿವುಡು ಮಕ್ಕಳಿಗೆ ಕಾಕ್ಲಿಯರ್ ಇಂಪ್ಲಾಂಟ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೆ ₹6 ಲಕ್ಷದವರೆಗೆ ನೆರವು',
        'ಕೃತಕ ಕೈ-ಕಾಲು ಮತ್ತು ವೀಲ್‌ಚೇರ್ ಉಚಿತ ವಿತರಣೆ',
        'ದೃಷ್ಟಿಹೀನರಿಗೆ ಸ್ಮಾರ್ಟ್ ವಾಕಿಂಗ್ ಸ್ಟಿಕ್ ಮತ್ತು ಬ್ರೈಲ್ ಸಾಮಗ್ರಿಗಳು'
      ]
    },
    knownCriteria: {
      hasDisability: true,
      disabilityAssistance: true
    },
    disqualifyingConditions: {
      en: ['Assistance for same device can only be repeated once every 3 years'],
      kn: ['ಒಂದೇ ಸಾಧನವನ್ನು ೩ ವರ್ಷಕ್ಕೊಮ್ಮೆ ಮಾತ್ರ ಮರುಪಡೆಯಬಹುದು']
    },
    requiredDocuments: {
      mandatory: {
        en: ['Disability Certificate / UDID Card (≥ 40% disability)', 'Income Certificate (≤ ₹22,500/month)', 'Aadhaar Card and Residence Proof'],
        kn: ['ಯುಡಿಐಡಿ ಕಾರ್ಡ್ (ಕನಿಷ್ಠ ಶೇ. ೪೦)', 'ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ (ತಿಂಗಳಿಗೆ ₹22,500 ರೊಳಗೆ)', 'ಆಧಾರ್ ಕಾರ್ಡ್']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Register at District Disability Rehabilitation Centre', kn: 'ಜಿಲ್ಲಾ ಪುನರ್ವಸತಿ ಕೇಂದ್ರದಲ್ಲಿ ನೋಂದಣಿ' },
        description: {
          en: 'Visit District Disability Welfare Office in Bengaluru or ALIMCO assessment camp.',
          kn: 'ಬೆಂಗಳೂರಿನ ಜಿಲ್ಲಾ ಅಂಗವಿಕಲರ ಕಲ್ಯಾಣಾಧಿಕಾರಿ ಕಚೇರಿ ಅಥವಾ ಆಲಿಮ್ಕೊ ಕ್ಯಾಂಪ್‌ನಲ್ಲಿ ನೋಂದಾಯಿಸಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Measurement & Custom Fitting Camp', kn: 'ಅಳತೆ ಪರೀಕ್ಷೆ & ಸಲಕರಣೆ ವಿತರಣೆ' },
        description: {
          en: 'Specialists measure prosthetic dimensions; motorized tricycles and aids distributed in mega civic camps.',
          kn: 'ಅಳತೆ ತೆಗೆದುಕೊಂಡು ಸಾರ್ವಜನಿಕ ಸಮಾರಂಭದಲ್ಲಿ ಉಚಿತವಾಗಿ ವಿತರಿಸಲಾಗುತ್ತದೆ.'
        }
      }
    ],
    officialPortalUrl: 'https://www.alimco.in/',
    responsibleDepartment: {
      en: 'Artificial Limbs Manufacturing Corporation of India (ALIMCO)',
      kn: 'ಆಲಿಮ್ಕೊ ಭಾರತೀಯ ಕೃತಕ ಅಂಗ ತಯಾರಿಕಾ ನಿಗಮ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },
  {
    id: 'karnataka-sadhana-digital-assist',
    name: {
      en: 'Sadhana Digital Laptop & Mobility Scheme for Disabled Students',
      kn: 'ಸಾಧನಾ ಡಿಜಿಟಲ್ ಲ್ಯಾಪ್‌ಟಾಪ್ & ವೀಲ್‌ಚೇರ್ ಯೋಜನೆ'
    },
    category: 'disability',
    shortName: 'Sadhana Scheme',
    authority: {
      en: 'Directorate for the Empowerment of Differently Abled and Senior Citizens, Karnataka',
      kn: 'ವಿಶೇಷ ಚೇತನರ ಹಾಗೂ ಹಿರಿಯ ನಾಗರಿಕರ ಸಬಲೀಕರಣ ನಿರ್ದೇಶನಾಲಯ, ಕರ್ನಾಟಕ'
    },
    level: 'karnataka',
    tagline: {
      en: 'Free customized laptops with screen readers and motorized wheelchairs for college students with disabilities.',
      kn: 'ಪದವಿ ಕಲಿಯುವ ವಿಕಲಚೇತನ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಉಚಿತ ಲ್ಯಾಪ್‌ಟಾಪ್ ಮತ್ತು ಮೋಟಾರೈಸ್ಡ್ ಗಾಲಿಕುರ್ಚಿ.'
    },
    description: {
      en: 'Sadhana provides state-of-the-art laptops equipped with NVDA/JAWS screen readers for visually impaired college students, and high-performance motorized wheelchairs for students with locomotor disabilities to pursue higher education independently.',
      kn: 'ಉನ್ನತ ಶಿಕ್ಷಣ ಪಡೆಯುತ್ತಿರುವ ದೃಷ್ಟಿಹೀನ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸ್ಕ್ರೀನ್ ರೀಡರ್ ಇರುವ ಉಚಿತ ಲ್ಯಾಪ್‌ಟಾಪ್ ಹಾಗೂ ಅಂಗವಿಕಲ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಕಾಲೇಜಿಗೆ ತೆರಳಲು ಮೋಟಾರ್ ಚಾಲಿತ ವೀಲ್‌ಚೇರ್ ನೀಡುವ ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಯೋಜನೆ.'
    },
    benefits: {
      en: [
        '100% Free modern laptop pre-loaded with talking software and accessibility tools',
        'Motorized battery-operated wheelchair for students with severe locomotor impairment',
        'Reimbursement of reader allowance for visually impaired scholars'
      ],
      kn: [
        'ಸ್ಕ್ರೀನ್ ರೀಡರ್ ಸಾಫ್ಟ್‌ವೇರ್ ಇರುವ ಉಚಿತ ಲ್ಯಾಪ್‌ಟಾಪ್ ವಿತರಣೆ',
        'ಕಾಲೇಜು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಉಚಿತ ಬ್ಯಾಟರಿ ಚಾಲಿತ ವೀಲ್‌ಚೇರ್',
        'ದೃಷ್ಟಿಹೀನ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ರೀಡರ್ ಭತ್ಯೆ'
      ]
    },
    knownCriteria: {
      studentStatus: true,
      hasDisability: true,
      karnatakaResidentOnly: true
    },
    disqualifyingConditions: {
      en: ['Applicant must be studying in recognized PUC, Degree, Post-Graduate, or Professional College'],
      kn: ['ಪಿಯುಸಿ, ಪದವಿ ಅಥವಾ ಉನ್ನತ ಶಿಕ್ಷಣ ಓದುತ್ತಿರುವ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಮಾತ್ರ']
    },
    requiredDocuments: {
      mandatory: {
        en: ['College Bonafide Study Certificate', 'UDID Card showing ≥ 40% disability', 'Aadhaar Card and Caste/Income Certificate'],
        kn: ['ಕಾಲೇಜು ವ್ಯಾಸಂಗ ದೃಢೀಕರಣ ಪತ್ರ', 'ಯುಡಿಐಡಿ ಕಾರ್ಡ್', 'ಆಧಾರ್ ಮತ್ತು ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Apply on Seva Sindhu Portal', kn: 'ಸೇವಾ ಸಿಂಧು ಮೂಲಕ ಆನ್‌ಲೈನ್ ಅರ್ಜಿ' },
        description: {
          en: 'Submit online application in July/August on sevasindhu.karnataka.gov.in with college fee receipt.',
          kn: 'ಕಾಲೇಜು ರಸೀದಿಯೊಂದಿಗೆ ಸೇವಾ ಸಿಂಧು ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'District Officer Verification & Distribution', kn: 'ಜಿಲ್ಲಾ ಅಧಿಕಾರಿಗಳ ಪರಿಶೀಲನೆ & ವಿತರಣೆ' },
        description: {
          en: 'District Disabled Welfare Officer approves and laptops/wheelchairs are distributed at district office.',
          kn: 'ಜಿಲ್ಲಾ ಅಂಗವಿಕಲರ ಕಲ್ಯಾಣಾಧಿಕಾರಿ ಪರಿಶೀಲಿಸಿ ಲ್ಯಾಪ್‌ಟಾಪ್ ಹಸ್ತಾಂತರಿಸುತ್ತಾರೆ.'
        }
      }
    ],
    officialPortalUrl: 'https://welfareofdisabled.karnataka.gov.in/',
    responsibleDepartment: {
      en: 'Directorate for Empowerment of Differently Abled, Karnataka',
      kn: 'ವಿಶೇಷ ಚೇತನರ ಸಬಲೀಕರಣ ಇಲಾಖೆ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },
  {
    id: 'karnataka-chethana-self-employment',
    name: {
      en: 'Chethana Self-Employment & Petty Business Scheme',
      kn: 'ಚೇತನ ಸ್ವಯಂ ಉದ್ಯೋಗ ಮತ್ತು ವ್ಯಾಪಾರ ಸಬ್ಸಿಡಿ ಯೋಜನೆ'
    },
    category: 'disability',
    shortName: 'Chethana Scheme',
    authority: {
      en: 'Karnataka State Commission for Persons with Disabilities & Lead Banks',
      kn: 'ಕರ್ನಾಟಕ ವಿಶೇಷ ಚೇತನರ ಆಯೋಗ & ಸಮಾಜ ಕಲ್ಯಾಣ ಇಲಾಖೆ'
    },
    level: 'karnataka',
    tagline: {
      en: 'Up to ₹50,000 capital financial assistance to establish small kiosks, tea stalls, and digital stores.',
      kn: 'ಅಂಗವಿಕಲ ವ್ಯಕ್ತಿಗಳು ಸ್ವಂತ ಗೂಡಂಗಡಿ, ಸಣ್ಣ ವ್ಯಾಪಾರ ಆರಂಭಿಸಲು ₹50,000 ನೇರ ನೆರವು.'
    },
    description: {
      en: 'Chethana provides seed capital and financial subsidies for persons with physical, sensory, or locomotor disabilities to start self-sustaining micro-businesses like telephone booths, xerox shops, tailoring, petty shops, or tea kiosks without debt burden.',
      kn: 'ವಿಕಲಚೇತನರು ಸ್ವಾವಲಂಬಿ ಜೀವನ ನಡೆಸಲು ಜೆರಾಕ್ಸ್ ಅಂಗಡಿ, ಟೀ ಅಂಗಡಿ, ತರಕಾರಿ ವ್ಯಾಪಾರ ಅಥವಾ ಸಣ್ಣ ಅಂಗಡಿ ಆರಂಭಿಸಲು ಸರ್ಕಾರದಿಂದ ₹50,000 ವರೆಗೆ ನೇರ ಸಹಾಯಧನ ನೀಡಲಾಗುತ್ತದೆ.'
    },
    benefits: {
      en: [
        'Outright capital subsidy of ₹50,000 credited to bank account for starting micro-enterprises',
        'Zero loan interest burden on the government grant component',
        'Priority allotment of municipal Corporation (BBMP) street vendor kiosks and milk booths'
      ],
      kn: [
        'ಸ್ವಂತ ವ್ಯಾಪಾರಕ್ಕೆ ₹50,000 ನೇರ ಸರ್ಕಾರಿ ಸಹಾಯಧನ',
        'ಸಬ್ಸಿಡಿ ಹಣಕ್ಕೆ ಯಾವುದೇ ಬಡ್ಡಿ ಇರುವುದಿಲ್ಲ',
        'ಬಿಬಿಎಂಪಿ ಗೂಡಂಗಡಿ ಮತ್ತು ನಂದಿನಿ ಮಿಲ್ಕ್ ಬೂತ್ ಹಂಚಿಕೆಯಲ್ಲಿ ಆದ್ಯತೆ'
      ]
    },
    knownCriteria: {
      minAge: 18,
      maxAge: 55,
      hasDisability: true,
      disabilityAssistance: true,
      karnatakaResidentOnly: true
    },
    disqualifyingConditions: {
      en: ['Applicant already employed in regular government or private salaried job'],
      kn: ['ಸರ್ಕಾರಿ ಅಥವಾ ಕಾಯಂ ನೌಕರಿ ಹೊಂದಿರುವವರು']
    },
    requiredDocuments: {
      mandatory: {
        en: ['UDID Card (≥ 40% disability)', 'Business Project Proposal / Quotation for kiosk', 'Income and Residence Certificate from Nadakacheri'],
        kn: ['ಯುಡಿಐಡಿ ಕಾರ್ಡ್', 'ವ್ಯಾಪಾರ ಯೋಜನೆ ವಿವರ', 'ನಾಡಕಚೇರಿ ಆದಾಯ ಮತ್ತು ನಿವಾಸಿ ಪ್ರಮಾಣಪತ್ರ']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Submit Proposal to District Disability Officer', kn: 'ಜಿಲ್ಲಾ ಅಂಗವಿಕಲ ಕಲ್ಯಾಣಾಧಿಕಾರಿಗೆ ಪ್ರಸ್ತಾವನೆ ಸಲ್ಲಿಕೆ' },
        description: {
          en: 'Apply via Seva Sindhu with brief budget details of your proposed kiosk/business.',
          kn: 'ಸೇವಾ ಸಿಂಧು ಮೂಲಕ ನಿಮ್ಮ ವ್ಯಾಪಾರದ ವಿವರಗಳೊಂದಿಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Sanction and Direct Bank Subsidy Release', kn: 'ಅನುಮೋದನೆ & ಖಾತೆಗೆ ಸಬ್ಸಿಡಿ ಬಿಡುಗಡೆ' },
        description: {
          en: 'District selection committee approves grant and funds transfer to purchase equipment/stock.',
          kn: 'ಸಮಿತಿ ಪರಿಶೀಲಿಸಿ ಸಲಕರಣೆ ಖರೀದಿಗೆ ನೇರ ಹಣ ಬಿಡುಗಡೆ ಮಾಡುತ್ತದೆ.'
        }
      }
    ],
    officialPortalUrl: 'https://welfareofdisabled.karnataka.gov.in/',
    responsibleDepartment: {
      en: 'Empowerment of Differently Abled Directorate, Karnataka',
      kn: 'ವಿಶೇಷ ಚೇತನರ ಸಬಲೀಕರಣ ಇಲಾಖೆ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },

  // ==========================================
  // 7. AGRICULTURE & FARMERS (4 SCHEMES -> TOTAL 5)
  // ==========================================
  {
    id: 'central-pm-fasal-bima',
    name: {
      en: 'Pradhan Mantri Fasal Bima Yojana (PMFBY Crop Insurance)',
      kn: 'ಪ್ರಧಾನಮಂತ್ರಿ ಫಸಲ್ ಬಿಮಾ ಯೋಜನೆ (ಬೆಳೆ ವಿಮೆ)'
    },
    category: 'agriculture',
    shortName: 'PM Fasal Bima Yojana',
    authority: {
      en: 'Ministry of Agriculture and Farmers Welfare, GoI & Samrakshane Portal, Karnataka',
      kn: 'ಕೃಷಿ ಸಚಿವಾಲಯ, ಭಾರತ ಸರ್ಕಾರ & ಸಂರಕ್ಷಣೆ ಪೋರ್ಟಲ್, ಕರ್ನಾಟಕ'
    },
    level: 'both',
    tagline: {
      en: 'Comprehensive crop insurance against drought, floods, and unseasonal rains at nominal 1.5% to 2% premium.',
      kn: 'ಬರಗಾಲ, ಪ್ರವಾಹ ಮತ್ತು ಅಕಾಲಿಕ ಮಳೆಗೆ ಕೇವಲ ಶೇ. ೧.೫ ರಿಂದ ೨ ರಷ್ಟು ಪ್ರೀಮಿಯಂನಲ್ಲಿ ಬೆಳೆ ನಷ್ಟ ಪರಿಹಾರ.'
    },
    description: {
      en: 'PMFBY shields farmers against unexpected harvest and yield losses due to natural calamities, dry spells, pest attacks, and post-harvest unseasonal rains. Karnataka operates this seamlessly through its dedicated Samrakshane satellite crop-cutting portal.',
      kn: 'ಬರ, ಪ್ರವಾಹ, ಕೀಟಬಾಧೆ ಅಥವಾ ಅಕಾಲಿಕ ಮಳೆಯಿಂದ ಬೆಳೆ ನಾಶವಾದರೆ ರೈತರಿಗೆ ಪೂರ್ಣ ಆರ್ಥಿಕ ನಷ್ಟ ಪರಿಹಾರ ನೀಡುವ ಪ್ರಮುಖ ಬೆಳೆ ವಿಮೆ ಯೋಜನೆ. ಕರ್ನಾಟಕದಲ್ಲಿ ಇದು "ಸಂರಕ್ಷಣೆ" ಪೋರ್ಟಲ್ ಮೂಲಕ ಜಾರಿಯಲ್ಲಿದೆ.'
    },
    benefits: {
      en: [
        'Lowest ever premium rates: Only 2% for Kharif crops, 1.5% for Rabi, and 5% for horticultural crops',
        'Direct satellite and mobile GPS Crop Cutting Experiment (CCE) objective yield loss calculation',
        'Covers prevented sowing, mid-season drought adversity, and post-harvest crop damage',
        'Claims credited directly to farmer’s bank account via DBT within 45 days'
      ],
      kn: [
        'ಖಾರಿಫ್ ಬೆಳೆಗೆ ಕೇವಲ ಶೇ. ೨, ರಬಿ ಬೆಳೆಗೆ ಶೇ. ೧.೫ ಹಾಗೂ ತೋಟಗಾರಿಕೆಗೆ ಶೇ. ೫ ಅತ್ಯಂತ ಕಡಿಮೆ ಪ್ರೀಮಿಯಂ',
        'ಉಪಗ್ರಹ ಹಾಗೂ ಜಿಪಿಎಸ್ ಆಧಾರಿತ ಬೆಳೆ ಸಮೀಕ್ಷೆಯ ಮೂಲಕ ನಿಖರ ಪರಿಹಾರ ಲೆಕ್ಕಾಚಾರ',
        'ಬಿತ್ತನೆ ವಿಫಲತೆ, ಬರಗಾಲ ಮತ್ತು ಕಟಾವಿನ ನಂತರದ ಮಳೆ ಹಾನಿಗೂ ರಕ್ಷಣೆ',
        'ರೈತರ ಖಾತೆಗೆ ನೇರ ಪರಿಹಾರ ಜಮೆ (ಡಿಬಿಟಿ)'
      ]
    },
    knownCriteria: {
      isFarmer: true,
      farmerSupport: true
    },
    disqualifyingConditions: {
      en: ['Must enroll before the seasonal crop notification cut-off date (July for Kharif, Nov for Rabi)'],
      kn: ['ಋತುಮಾನದ ಅಂತಿಮ ದಿನಾಂಕದೊಳಗೆ ನೋಂದಾಯಿಸಿಕೊಳ್ಳಬೇಕು']
    },
    requiredDocuments: {
      mandatory: {
        en: ['Land RTC (Pahani) with farmer name in Bhoomi', 'Aadhaar Card and Mobile Number', 'Sowing Certificate from Village Accountant / FRUITS ID', 'Bank Passbook'],
        kn: ['ಭೂಮಿ ಪಹಣಿ (ಆರ್‌ಟಿಸಿ)', 'ಆಧಾರ್ ಕಾರ್ಡ್', 'ಫ್ರೂಟ್ಸ್ (FRUITS) ಐಡಿ ಅಥವಾ ಬಿತ್ತನೆ ದೃಢೀಕರಣ ಪತ್ರ', 'ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Enroll at Samrakshane / Bangalore One Kiosk', kn: 'ಸಂರಕ್ಷಣೆ ಅಥವಾ ಬೆಂಗಳೂರು ಒನ್‌ನಲ್ಲಿ ನೋಂದಣಿ' },
        description: {
          en: 'Visit samrakshane.karnataka.gov.in or local Bangalore One kiosk before sowing cut-off deadline.',
          kn: 'ಸಂರಕ್ಷಣೆ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಅಥವಾ ಬೆಂಗಳೂರು ಒನ್ ಕೇಂದ್ರದಲ್ಲಿ ಬೆಳೆ ವಿಮೆ ಪ್ರೀಮಿಯಂ ಪಾವತಿಸಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Automatic Weather & Yield Assessment', kn: 'ಸ್ವಯಂಚಾಲಿತ ಹವಾಮಾನ & ಇಳುವರಿ ಪರಿಶೀಲನೆ' },
        description: {
          en: 'State agriculture department logs automated weather station data and crop cuts.',
          kn: 'ಕೃಷಿ ಇಲಾಖೆಯು ಮಳೆ ಕೊರತೆ ಮತ್ತು ಇಳುವರಿ ಹಾನಿಯನ್ನು ದಾಖಲಿಸುತ್ತದೆ.'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Direct Compensation Disbursal', kn: 'ನೇರ ಪರಿಹಾರ ಮೊತ್ತ ಜಮೆ' },
        description: {
          en: 'Insurance claim amount credited straight into your bank account.',
          kn: 'ವಿಮಾ ಮೊತ್ತವು ನೇರವಾಗಿ ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಜಮೆಯಾಗುತ್ತದೆ.'
        }
      }
    ],
    officialPortalUrl: 'https://samrakshane.karnataka.gov.in/',
    responsibleDepartment: {
      en: 'Department of Agriculture, Government of Karnataka',
      kn: 'ಕೃಷಿ ಇಲಾಖೆ, ಕರ್ನಾಟಕ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },
  {
    id: 'karnataka-raitha-siri',
    name: {
      en: 'Raitha Siri Millet Cultivation Support Scheme',
      kn: 'ರೈತ ಸಿರಿ ಸಿರಿಧಾನ್ಯ ಪ್ರೋತ್ಸಾಹಕ ಯೋಜನೆ'
    },
    category: 'agriculture',
    shortName: 'Raitha Siri Scheme',
    authority: {
      en: 'Department of Agriculture, Government of Karnataka',
      kn: 'ಕೃಷಿ ಇಲಾಖೆ, ಕರ್ನಾಟಕ ಸರ್ಕಾರ'
    },
    level: 'karnataka',
    tagline: {
      en: 'Direct financial incentive of ₹10,000 per hectare for farmers growing climate-resilient millets.',
      kn: 'ರಾಗಿ, ಸಿರಿಧಾನ್ಯ ಬೆಳೆಯುವ ರೈತರಿಗೆ ಪ್ರತಿ ಹೆಕ್ಟೇರ್‌ಗೆ ₹10,000 ನೇರ ಪ್ರೋತ್ಸಾಹಧನ.'
    },
    description: {
      en: 'Encourages water-conservation and sustainable agriculture around Bengaluru Rural and Karnataka drylands by transferring ₹10,000 per hectare directly into bank accounts of farmers cultivating Ragi, Jowar, Foxtail millet (Navane), Little millet (Same), and other nutritional grains.',
      kn: 'ನೀರಿನ ಉಳಿತಾಯ ಮತ್ತು ಆರೋಗ್ಯಕರ ಆಹಾರ ಉತ್ತೇಜಿಸಲು ರಾಗಿ, ನವಣೆ, ಸಾಮೆ, ಹಾರಕ, ಕೊರಲೆ, ಬರಗು ಸಿರಿಧಾನ್ಯಗಳನ್ನು ಬೆಳೆಯುವ ರೈತರಿಗೆ ಪ್ರತಿ ಹೆಕ್ಟೇರ್‌ಗೆ ₹10,000 ನೇರ ಸಹಾಯಧನ ನೀಡುವ ರಾಜ್ಯ ಸರ್ಕಾರದ ಯೋಜನೆ.'
    },
    benefits: {
      en: [
        'Direct Benefit Transfer (DBT) of ₹10,000 per hectare (up to maximum 2 hectares = ₹20,000)',
        'Guaranteed minimum support price (MSP) procurement at government APMC centers',
        'Free supply of certified quality millet seeds and micro-nutrient kits',
        'Promotes climate-resilient farming requiring 70% less water than paddy and sugarcane'
      ],
      kn: [
        'ಪ್ರತಿ ಹೆಕ್ಟೇರ್‌ಗೆ ₹10,000 (ಗರಿಷ್ಠ ೨ ಹೆಕ್ಟೇರ್‌ಗೆ ₹20,000) ನೇರ ಬ್ಯಾಂಕ್ ಜಮೆ',
        'ಸರ್ಕಾರಿ ಬೆಂಬಲ ಬೆಲೆ (MSP) ಮೂಲಕ ರಾಗಿ ಮತ್ತು ಸಿರಿಧಾನ್ಯ ಖರೀದಿ',
        'ಉಚಿತ ಸುಧಾರಿತ ಬಿತ್ತನೆ ಬೀಜ ಮತ್ತು ಪೋಷಕಾಂಶಗಳ ಕಿಟ್',
        'ಕಡಿಮೆ ನೀರಿನಲ್ಲಿ ಹೆಚ್ಚು ಇಳುವರಿ ಪಡೆಯುವ ಅವಕಾಶ'
      ]
    },
    knownCriteria: {
      isFarmer: true,
      farmerSupport: true,
      karnatakaResidentOnly: true
    },
    disqualifyingConditions: {
      en: ['Applicant must have registered RTC showing millet crop in Bhoomi crop survey'],
      kn: ['ಭೂಮಿ ಬೆಳೆ ಸಮೀಕ್ಷೆಯಲ್ಲಿ ಸಿರಿಧಾನ್ಯ ಬೆಳೆದಿರುವುದು ನಮೂದಾಗಿರಬೇಕು']
    },
    requiredDocuments: {
      mandatory: {
        en: ['FRUITS Farmer ID Card (Kisan ID)', 'Land Pahani (RTC) showing millet cultivation', 'Aadhaar Card and Bank Passbook'],
        kn: ['ಫ್ರೂಟ್ಸ್ (FRUITS) ಕಿಸಾನ್ ಐಡಿ', 'ಜಮೀನಿನ ಪಹಣಿ (ಆರ್‌ಟಿಸಿ)', 'ಆಧಾರ್ ಮತ್ತು ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Register Crop on Karnataka Bele Samikshe App', kn: 'ಕರ್ನಾಟಕ ಬೆಳೆ ಸಮೀಕ್ಷೆ ಆ್ಯಪ್‌ನಲ್ಲಿ ಬೆಳೆ ನೋಂದಣಿ' },
        description: {
          en: 'Upload geotagged photo of millet standing crop on Bele Samikshe mobile app during Kharif.',
          kn: 'ಬೆಳೆ ಸಮೀಕ್ಷೆ ಮೊಬೈಲ್ ಆ್ಯಪ್ ಮೂಲಕ ರಾಗಿ/ಸಿರಿಧಾನ್ಯ ಬೆಳೆಯ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'FRUITS Portal Direct DBT Release', kn: 'ಫ್ರೂಟ್ಸ್ ಪೋರ್ಟಲ್ ಮೂಲಕ ನೇರ ಹಣ ಜಮೆ' },
        description: {
          en: 'Agriculture department verifies satellite crop imagery and credits ₹10,000/hectare via DBT.',
          kn: 'ಕೃಷಿ ಇಲಾಖೆ ಪರಿಶೀಲಿಸಿ ನೇರವಾಗಿ ರೈತರ ಆಧಾರ್ ಲಿಂಕ್ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಹಣ ಜಮೆ ಮಾಡುತ್ತದೆ.'
        }
      }
    ],
    officialPortalUrl: 'https://fruits.karnataka.gov.in/',
    responsibleDepartment: {
      en: 'Department of Agriculture, Karnataka',
      kn: 'ಕೃಷಿ ಇಲಾಖೆ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },
  {
    id: 'karnataka-krishi-bhagya',
    name: {
      en: 'Krishi Bhagya Scheme (Farm Ponds & Micro Irrigation)',
      kn: 'ಕೃಷಿ ಭಾಗ್ಯ ಯೋಜನೆ (ಕೃಷಿ ಹೊಂಡ & ಹನಿ ನೀರಾವರಿ)'
    },
    category: 'agriculture',
    shortName: 'Krishi Bhagya',
    authority: {
      en: 'Department of Agriculture & Watershed Development, Karnataka',
      kn: 'ಕೃಷಿ ಇಲಾಖೆ & ಜಲಾನಯನ ಅಭಿವೃದ್ಧಿ ಇಲಾಖೆ, ಕರ್ನಾಟಕ'
    },
    level: 'karnataka',
    tagline: {
      en: '80% to 90% subsidy for digging farm ponds (Krishi Honda), polythene tarpaulin lining & diesel pumps.',
      kn: 'ಕೃಷಿ ಹೊಂಡ ನಿರ್ಮಾಣ, ಪಾಲಿಥಿನ್ ಹೊದಿಕೆ, ಡೀಸೆಲ್ ಪಂಪ್ ಮತ್ತು ಹನಿ ನೀರಾವರಿಗೆ ಶೇ. ೮೦ ರಿಂದ ೯೦ ಸಬ್ಸಿಡಿ.'
    },
    description: {
      en: 'Transforms dryland farming by harvesting every drop of rainwater into a dedicated farm pond (Krishi Honda) lined with heavy polythene sheet to prevent seepage, combined with 90% subsidized diesel pumps and micro-drip irrigation systems to provide lifelines for crops during dry spells.',
      kn: 'ಮಳೆ ನೀರು ವ್ಯರ್ಥವಾಗದೆ ಹೊಲದಲ್ಲೇ ಇಂಗಿಸಲು ಕೃಷಿ ಹೊಂಡ ನಿರ್ಮಾಣಕ್ಕೆ ಶೇ. ೮೦ ರಿಂದ ೯೦ ರಷ್ಟು ಸರ್ಕಾರದ ಸಹಾಯಧನ ನೀಡಲಾಗುತ್ತದೆ. ನೀರು ಇಂಗಿ ಹೋಗದಂತೆ ಟಾರ್ಪಲಿನ್ ಹೊದಿಕೆ ಮತ್ತು ನೀರೆತ್ತಲು ಡೀಸೆಲ್ ಪಂಪ್ ಒದಗಿಸಲಾಗುತ್ತದೆ.'
    },
    benefits: {
      en: [
        '80% to 90% capital subsidy for JCB farm pond excavation (up to ₹1,50,000 total package)',
        'Free heavy-duty UV stabilized polythene film lining to retain stored rainwater for months',
        'Subsidized diesel pumpset / solar pump and field fencing',
        'Saves rainfed crops from total ruin during 2 to 3-week mid-season drought breaks'
      ],
      kn: [
        'ಕೃಷಿ ಹೊಂಡ ನಿರ್ಮಾಣಕ್ಕೆ ಶೇ. ೮೦ ರಿಂದ ೯೦ ಸಹಾಯಧನ (ಒಟ್ಟು ₹1.5 ಲಕ್ಷದವರೆಗೆ)',
        'ನೀರು ನಿಲ್ಲಲು ಉಚಿತ ಯುವಿ ಪಾಲಿಥಿನ್ ಶೀಟ್ ಹೊದಿಕೆ',
        'ರಿಯಾಯಿತಿ ದರದಲ್ಲಿ ಡೀಸೆಲ್ ಅಥವಾ ಸೋಲಾರ್ ಪಂಪ್‌ಸೆಟ್',
        'ಮಳೆಯಿಲ್ಲದ ದಿನಗಳಲ್ಲಿ ಬೆಳೆಗೆ ರಕ್ಷಣಾತ್ಮಕ ನೀರಾವರಿ'
      ]
    },
    knownCriteria: {
      isFarmer: true,
      farmerSupport: true,
      karnatakaResidentOnly: true
    },
    disqualifyingConditions: {
      en: ['Farmer must own agricultural land and not already possess a functional perennial canal source'],
      kn: ['ಖುಷ್ಕಿ ಜಮೀನು ಹೊಂದಿರಬೇಕು']
    },
    requiredDocuments: {
      mandatory: {
        en: ['Land Record RTC (Pahani)', 'Farmer FRUITS Registration Card', 'Aadhaar Card and Caste Certificate'],
        kn: ['ಜಮೀನಿನ ಪಹಣಿ (ಆರ್‌ಟಿಸಿ)', 'ಫ್ರೂಟ್ಸ್ ಕಿಸಾನ್ ಐಡಿ', 'ಆಧಾರ್ ಮತ್ತು ಜಾತಿ ಪ್ರಮಾಣಪತ್ರ']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Apply at Raitha Samparka Kendra (RSK)', kn: 'ರೈತ ಸಂಪರ್ಕ ಕೇಂದ್ರದಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಕೆ' },
        description: {
          en: 'Visit local Hobli Raitha Samparka Kendra or apply on Seva Sindhu.',
          kn: 'ಹೋಬಳಿ ರೈತ ಸಂಪರ್ಕ ಕೇಂದ್ರದಲ್ಲಿ ಅಥವಾ ಸೇವಾ ಸಿಂಧು ಮೂಲಕ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Site Inspection & JCB Excavation', kn: 'ಸ್ಥಳ ಪರಿಶೀಲನೆ & ಹೊಂಡ ನಿರ್ಮಾಣ' },
        description: {
          en: 'Agricultural officer marks field GPS coordinates; excavation completed and photo uploaded for subsidy release.',
          kn: 'ಕೃಷಿ ಅಧಿಕಾರಿಗಳು ಸ್ಥಳ ಪರಿಶೀಲಿಸಿದ ನಂತರ ಜೆಸಿಬಿ ಮೂಲಕ ಹೊಂಡ ನಿರ್ಮಿಸಿ ಜಿಪಿಎಸ್ ಫೋಟೋ ತೆಗೆದು ಹಣ ಬಿಡುಗಡೆ ಮಾಡಲಾಗುತ್ತದೆ.'
        }
      }
    ],
    officialPortalUrl: 'https://raitamitra.karnataka.gov.in/',
    responsibleDepartment: {
      en: 'Department of Agriculture, Karnataka',
      kn: 'ಕೃಷಿ ಇಲಾಖೆ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },
  {
    id: 'central-pm-kisan-maandhan',
    name: {
      en: 'PM Kisan Maandhan Yojana (Farmers Old-Age Pension)',
      kn: 'ಪಿಎಂ ಕಿಸಾನ್ ಮಾನ್‌ಧನ್ ಯೋಜನೆ (ರೈತರ ಪಿಂಚಣಿ)'
    },
    category: 'agriculture',
    shortName: 'PM Kisan Maandhan',
    authority: {
      en: 'Ministry of Agriculture and Farmers Welfare, GoI & LIC of India',
      kn: 'ಕೃಷಿ ಸಚಿವಾಲಯ, ಭಾರತ ಸರ್ಕಾರ & ಎಲ್‌ಐಸಿ'
    },
    level: 'central',
    tagline: {
      en: 'Guaranteed pension of ₹3,000 per month after 60 years for small and marginal farmers.',
      kn: 'ಸಣ್ಣ ಮತ್ತು ಅತಿ ಸಣ್ಣ ರೈತರಿಗೆ ೬೦ ವರ್ಷದ ನಂತರ ಪ್ರತಿ ತಿಂಗಳು ₹3,000 ಖಚಿತ ಪಿಂಚಣಿ.'
    },
    description: {
      en: 'Provides social security for small and marginal farmers aged 18 to 40 years holding cultivable land up to 2 hectares. Small monthly savings of ₹55 to ₹200 (matched 1:1 by Government of India) guarantee a lifelong pension of ₹3,000/month after age 60.',
      kn: '೨ ಹೆಕ್ಟೇರ್‌ವರೆಗೆ ಜಮೀನು ಹೊಂದಿರುವ ೧೮ ರಿಂದ ೪೦ ವರ್ಷದ ಸಣ್ಣ ರೈತರಿಗೆ ವೃದ್ಧಾಪ್ಯ ಭದ್ರತೆ ಕಲ್ಪಿಸಲು, ತಿಂಗಳಿಗೆ ₹೫೫ ರಿಂದ ₹೨೦೦ ಉಳಿತಾಯ ಮಾಡಿದರೆ ಅಷ್ಟೇ ಮೊತ್ತವನ್ನು ಸರ್ಕಾರವೂ ಭರಿಸಿ, ೬೦ ವರ್ಷ ತುಂಬಿದ ನಂತರ ಪ್ರತಿ ತಿಂಗಳು ₹3,000 ಖಚಿತ ಪಿಂಚಣಿ ನೀಡಲಾಗುತ್ತದೆ.'
    },
    benefits: {
      en: [
        'Guaranteed lifelong monthly pension of ₹3,000 credited via DBT after turning 60',
        'Equal 50:50 matching contribution deposited by Central Government every month',
        'Spouse entitled to receive 50% family pension (₹1,500/month) after farmer demise',
        'Option to deduct monthly contribution automatically from PM-KISAN ₹6,000 installments'
      ],
      kn: [
        '೬೦ ವರ್ಷದ ನಂತರ ಪ್ರತಿ ತಿಂಗಳು ₹3,000 ಖಚಿತ ಪಿಂಚಣಿ',
        'ರೈತರು ಕಟ್ಟುವಷ್ಟೇ ಮೊತ್ತವನ್ನು ಸರ್ಕಾರವೂ ಜಮೆ ಮಾಡುತ್ತದೆ',
        'ಮರಣಾನಂತರ ಪತ್ನಿಗೆ ಶೇ. ೫೦ (₹1,500) ಕುಟುಂಬ ಪಿಂಚಣಿ',
        'ಪಿಎಂ-ಕಿಸಾನ್ ₹6,000 ಹಣದಿಂದಲೇ ತಿಂಗಳ ಕಂತು ಕಡಿತ ಮಾಡಿಕೊಳ್ಳುವ ಸುಲಭ ಸೌಲಭ್ಯ'
      ]
    },
    knownCriteria: {
      minAge: 18,
      maxAge: 40,
      isFarmer: true,
      farmerSupport: true
    },
    disqualifyingConditions: {
      en: ['Farmers holding more than 2 hectares (5 acres) of land or income tax payers are ineligible'],
      kn: ['೨ ಹೆಕ್ಟೇರ್‌ಗಿಂತ ಹೆಚ್ಚು ಜಮೀನು ಹೊಂದಿರುವವರು ಅಥವಾ ಆದಾಯ ತೆರಿಗೆ ಪಾವತಿದಾರರು ಅನರ್ಹರು']
    },
    requiredDocuments: {
      mandatory: {
        en: ['Aadhaar Card', 'Land RTC (showing ≤ 2 hectares)', 'Bank Account details for auto-debit'],
        kn: ['ಆಧಾರ್ ಕಾರ್ಡ್', '೨ ಹೆಕ್ಟೇರ್ ಒಳಗಿನ ಪಹಣಿ (ಆರ್‌ಟಿಸಿ)', 'ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Enroll at CSC / Bangalore One', kn: 'ಸಿಎಸ್‌ಸಿ ಅಥವಾ ಬೆಂಗಳೂರು ಒನ್‌ನಲ್ಲಿ ನೋಂದಣಿ' },
        description: {
          en: 'Visit nearest Common Service Centre (CSC) or apply on maandhan.in.',
          kn: 'ಹತ್ತಿರದ ನಾಗರಿಕ ಸೇವಾ ಕೇಂದ್ರಕ್ಕೆ ಭೇಟಿ ನೀಡಿ ಆಧಾರ್ ಮತ್ತು ಬ್ಯಾಂಕ್ ವಿವರ ನೀಡಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Auto-Debit Activation & Pension Card', kn: 'ಪಿಂಚಣಿ ಕಾರ್ಡ್ ಮುದ್ರಣ' },
        description: {
          en: 'Auto-debit mandate signed and instant Kisan Pension Smart Card with unique K-ID issued.',
          kn: 'ತಕ್ಷಣವೇ ಕಿಸಾನ್ ಪಿಂಚಣಿ ಸ್ಮಾರ್ಟ್ ಕಾರ್ಡ್ ಮುದ್ರಿಸಿ ನೀಡಲಾಗುತ್ತದೆ.'
        }
      }
    ],
    officialPortalUrl: 'https://maandhan.in/',
    responsibleDepartment: {
      en: 'Ministry of Agriculture, GoI & LIC',
      kn: 'ಕೃಷಿ ಸಚಿವಾಲಯ & ಎಲ್‌ಐಸಿ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },

  // ==========================================
  // 8. EMPLOYMENT & SKILLS (3 SCHEMES -> TOTAL 5)
  // ==========================================
  {
    id: 'karnataka-cmkky-kaushalya',
    name: {
      en: 'Chief Minister Kaushalya Karnataka Yojane (CMKKY)',
      kn: 'ಮುಖ್ಯಮಂತ್ರಿ ಕೌಶಲ್ಯ ಕರ್ನಾಟಕ ಯೋಜನೆ (ಸಿಎಂಕೆಕೆವೈ)'
    },
    category: 'employment_skills',
    shortName: 'Kaushalya Karnataka CMKKY',
    authority: {
      en: 'Skill Development, Entrepreneurship and Livelihood Dept, Karnataka',
      kn: 'ಕೌಶಲ್ಯಾಭಿವೃದ್ಧಿ, ಉದ್ಯಮಶೀಲತೆ ಮತ್ತು ಜೀವನೋಪಾಯ ಇಲಾಖೆ, ಕರ್ನಾಟಕ'
    },
    level: 'karnataka',
    tagline: {
      en: '100% Free NSQF accredited technical job training and guaranteed placement in Bengaluru industries.',
      kn: 'ಉಚಿತ ತಾಂತ್ರಿಕ ಕೌಶಲ್ಯ ತರಬೇತಿ ಮತ್ತು ಬೆಂಗಳೂರಿನ ಕಂಪನಿಗಳಲ್ಲಿ ನೇರ ಉದ್ಯೋಗಾವಕಾಶ.'
    },
    description: {
      en: 'CMKKY trains unemployed youth aged 18 to 35 in high-demand industry trades (Electric Vehicle servicing, CNC machining, digital marketing, AI data annotation, retail logistics) in state-of-the-art training centers across Bengaluru with 70%+ job placement mandates.',
      kn: 'ನಿರುದ್ಯೋಗಿ ಯುವಕ-ಯುವತಿಯರಿಗೆ ಉಚಿತವಾಗಿ ಎಲೆಕ್ಟ್ರಿಕ್ ವಾಹನ ರಿಪೇರಿ, ಸಿಎನ್‌ಸಿ ಮಷಿನ್, ಡಿಜಿಟಲ್ ಮಾರ್ಕೆಟಿಂಗ್, ಗಾರ್ಮೆಂಟ್ಸ್ ಮತ್ತು ಲಾಜಿಸ್ಟಿಕ್ಸ್ ತರಬೇತಿ ನೀಡಿ ಪ್ರಮುಖ ಕಂಪನಿಗಳಲ್ಲಿ ಉದ್ಯೋಗ ಕೊಡಿಸುವ ರಾಜ್ಯ ಸರ್ಕಾರದ ಯೋಜನೆ.'
    },
    benefits: {
      en: [
        '100% Free course tuition, books, tool kits, and assessment fees',
        'National Skill Qualification Framework (NSQF) government certificate with QR verification',
        'Direct campus interview participation in district mega job melas',
        'Conveyance allowance and post-placement tracking support for 6 months'
      ],
      kn: [
        'ಸಂಪೂರ್ಣ ಉಚಿತ ತರಬೇತಿ, ಟೂಲ್ ಕಿಟ್ ಮತ್ತು ಪರೀಕ್ಷಾ ಶುಲ್ಕ ವಿನಾಯಿತಿ',
        'ಸರ್ಕಾರಿ ಮಾನ್ಯತೆ ಪಡೆದ ಎನ್‌ಎಸ್‌ಕ್ಯೂಎಫ್ ಕ್ಯೂಆರ್ ಪ್ರಮಾಣಪತ್ರ',
        'ಜಿಲ್ಲಾ ಬೃಹತ್ ಉದ್ಯೋಗ ಮೇಳಗಳಲ್ಲಿ ನೇರ ಸಂದರ್ಶನ',
        'ಪ್ರಯಾಣ ಭತ್ಯೆ ಮತ್ತು ೬ ತಿಂಗಳ ಉದ್ಯೋಗ ಬೆಂಬಲ'
      ]
    },
    knownCriteria: {
      minAge: 18,
      maxAge: 35,
      seekingJobTrainingHelp: true,
      karnatakaResidentOnly: true
    },
    disqualifyingConditions: {
      en: ['Candidates already holding full-time permanent government employment'],
      kn: ['ಈಗಾಗಲೇ ಕಾಯಂ ಸರ್ಕಾರಿ ನೌಕರಿ ಹೊಂದಿರುವವರು']
    },
    requiredDocuments: {
      mandatory: {
        en: ['Aadhaar Card', 'Educational Certificate (8th / 10th / 12th / ITI / Degree)', 'Bank Passbook'],
        kn: ['ಆಧಾರ್ ಕಾರ್ಡ್', 'ವಿದ್ಯಾರ್ಹತೆ ಪ್ರಮಾಣಪತ್ರ', 'ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Register on Kaushalkar Portal', kn: 'ಕೌಶಲ್ಯಕರ್ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ನೋಂದಣಿ' },
        description: {
          en: 'Sign up on kaushalkar.karnataka.gov.in and select preferred course and training centre in Bengaluru.',
          kn: 'kaushalkar.karnataka.gov.in ನಲ್ಲಿ ನೋಂದಾಯಿಸಿ ನಿಮ್ಮ ಮೆಚ್ಚಿನ ಕೋರ್ಸ್ ಆಯ್ಕೆ ಮಾಡಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Hands-on Training & Job Placement', kn: 'ಪ್ರಾಯೋಗಿಕ ತರಬೇತಿ & ಉದ್ಯೋಗ ಸಂದರ್ಶನ' },
        description: {
          en: 'Complete 300-hour modular training and attend campus placement drive.',
          kn: 'ತರಬೇತಿ ಪೂರ್ಣಗೊಳಿಸಿ ಕಂಪನಿಗಳ ನೇರ ಸಂದರ್ಶನದಲ್ಲಿ ಭಾಗವಹಿಸಿ.'
        }
      }
    ],
    officialPortalUrl: 'https://kaushalkar.karnataka.gov.in/',
    responsibleDepartment: {
      en: 'Department of Skill Development, Karnataka',
      kn: 'ಕೌಶಲ್ಯಾಭಿವೃದ್ಧಿ ಇಲಾಖೆ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },
  {
    id: 'central-pmkvy-skills',
    name: {
      en: 'Pradhan Mantri Kaushal Vikas Yojana 4.0 (PMKVY)',
      kn: 'ಪ್ರಧಾನಮಂತ್ರಿ ಕೌಶಲ್ಯ ವಿಕಾಸ ಯೋಜನೆ ೪.೦ (ಪಿಎಂಕೆವಿವೈ)'
    },
    category: 'employment_skills',
    shortName: 'PMKVY 4.0',
    authority: {
      en: 'National Skill Development Corporation (NSDC), Ministry of Skill Development, GoI',
      kn: 'ರಾಷ್ಟ್ರೀಯ ಕೌಶಲ್ಯಾಭಿವೃದ್ಧಿ ನಿಗಮ (ಎನ್‌ಎಸ್‌ಡಿಸಿ), ಭಾರತ ಸರ್ಕಾರ'
    },
    level: 'central',
    tagline: {
      en: 'Free industry-relevant skill courses in AI, coding, solar, robotics, and hospitality with ₹500 stipend.',
      kn: 'ಎಐ, ಕೋಡಿಂಗ್, ಸೋಲಾರ್ ಮತ್ತು ರೋಬೋಟಿಕ್ಸ್‌ನಲ್ಲಿ ಉಚಿತ ತರಬೇತಿ ಮತ್ತು ₹500 ಪರೀಕ್ಷಾ ಭತ್ಯೆ.'
    },
    description: {
      en: 'PMKVY 4.0 emphasizes Industry 4.0 skills, digital literacy, coding, drone technology, green hydrogen, and advanced manufacturing across accredited training partner hubs in Bengaluru to boost national employability.',
      kn: 'ಯುವಜನರಿಗೆ ಆಧುನಿಕ ತಂತ್ರಜ್ಞಾನ, ಡ್ರೋನ್ ಆಪರೇಟಿಂಗ್, ಎಐ, ಕಂಪ್ಯೂಟರ್ ಕೋಡಿಂಗ್ ಮತ್ತು ಸೋಲಾರ್ ಎನರ್ಜಿಯಲ್ಲಿ ಉಚಿತ ತರಬೇತಿ ನೀಡಿ ಉದ್ಯೋಗಾರ್ಹತೆ ಹೆಚ್ಚಿಸುವ ಪ್ರಮುಖ ಕೇಂದ್ರ ಯೋಜನೆ.'
    },
    benefits: {
      en: [
        '100% Free technical training and skill assessment',
        'National Skill India Certificate with digital QR verification and DigiLocker integration',
        '₹500 assessment conveyance reward credited via DBT on certification',
        'Recognition of Prior Learning (RPL) certification for informal craftsmen'
      ],
      kn: [
        'ಸಂಪೂರ್ಣ ಉಚಿತ ತಾಂತ್ರಿಕ ತರಬೇತಿ',
        'ಡಿಜಿಲಾಕರ್ ಲಿಂಕ್ ಹೊಂದಿರುವ ಅಧಿಕೃತ ಸ್ಕಿಲ್ ಇಂಡಿಯಾ ಕ್ಯೂಆರ್ ಪ್ರಮಾಣಪತ್ರ',
        'ಪರೀಕ್ಷೆ ಉತ್ತೀರ್ಣರಾದಾಗ ₹500 ಪ್ರೋತ್ಸಾಹ ಭತ್ಯೆ ನೇರ ಖಾತೆಗೆ',
        'ಹಳೆಯ ಕೆಲಸಗಾರರಿಗೆ ಪೂರ್ವ ಕಲಿಕಾ ಮಾನ್ಯತೆ (RPL) ಪ್ರಮಾಣಪತ್ರ'
      ]
    },
    knownCriteria: {
      minAge: 15,
      maxAge: 45,
      seekingJobTrainingHelp: true
    },
    disqualifyingConditions: {
      en: ['Cannot repeat same course if already certified in PMKVY 3.0'],
      kn: ['ಹಿಂದೆ ಅದೇ ಕೋರ್ಸ್ ಮಾಡಿದವರು ಮರು-ನೋಂದಾಯಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ']
    },
    requiredDocuments: {
      mandatory: {
        en: ['Aadhaar Card', 'Educational Certificate or school dropout self-declaration', 'Bank Passbook'],
        kn: ['ಆಧಾರ್ ಕಾರ್ಡ್', 'ಶಾಲಾ ದಾಖಲೆ', 'ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Find PMKVY Centre on Skill India Digital', kn: 'ಸ್ಕಿಲ್ ಇಂಡಿಯಾ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಕೇಂದ್ರ ಹುಡುಕಿ' },
        description: {
          en: 'Search accredited PMKVY training centres on skillindiadigital.gov.in across Bengaluru.',
          kn: 'skillindiadigital.gov.in ನಲ್ಲಿ ಬೆಂಗಳೂರಿನ ತರಬೇತಿ ಕೇಂದ್ರ ಆಯ್ಕೆ ಮಾಡಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Join Batch & Get Certified', kn: 'ತರಬೇತಿ ಪೂರ್ಣಗೊಳಿಸಿ ಪ್ರಮಾಣಪತ್ರ ಪಡೆಯಿರಿ' },
        description: {
          en: 'Attend practical workshops and clear Sector Skill Council assessment.',
          kn: 'ಪ್ರಾಯೋಗಿಕ ತರಬೇತಿ ಮುಗಿಸಿ ಪರೀಕ್ಷೆ ಬರೆದು ಪ್ರಮಾಣಪತ್ರ ಪಡೆಯಿರಿ.'
        }
      }
    ],
    officialPortalUrl: 'https://www.skillindiadigital.gov.in/',
    responsibleDepartment: {
      en: 'National Skill Development Corporation (NSDC)',
      kn: 'ರಾಷ್ಟ್ರೀಯ ಕೌಶಲ್ಯಾಭಿವೃದ್ಧಿ ನಿಗಮ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },
  {
    id: 'central-pmegp-subsidy-loan',
    name: {
      en: 'Prime Minister’s Employment Generation Programme (PMEGP)',
      kn: 'ಪ್ರಧಾನಮಂತ್ರಿ ಉದ್ಯೋಗ ಸೃಜನ ಯೋಜನೆ (ಪಿಎಂಇಜಿಪಿ ಸಾಲ ಸಬ್ಸಿಡಿ)'
    },
    category: 'employment_skills',
    shortName: 'PMEGP Business Loan',
    authority: {
      en: 'Khadi and Village Industries Commission (KVIC), Ministry of MSME, Government of India',
      kn: 'ಖಾದಿ ಮತ್ತು ಗ್ರಾಮೋದ್ಯೋಗ ಆಯೋಗ (ಕೆವಿಐಸಿ), ಎಂಎಸ್‌ಎಂಇ ಸಚಿವಾಲಯ'
    },
    level: 'central',
    tagline: {
      en: 'Bank business loans up to ₹50 Lakhs with 15% to 35% government capital subsidy for new enterprises.',
      kn: 'ಹೊಸ ವ್ಯಾಪಾರ/ಉದ್ಯಮ ಆರಂಭಿಸಲು ₹50 ಲಕ್ಷದವರೆಗೆ ಬ್ಯಾಂಕ್ ಸಾಲ ಮತ್ತು ಶೇ. ೩೫ ಸರ್ಕಾರಿ ಸಬ್ಸಿಡಿ.'
    },
    description: {
      en: 'A premier credit-linked subsidy program to generate non-farm employment in manufacturing and service sectors. Entrepreneurs can avail bank loans up to ₹50 Lakhs for manufacturing units and ₹20 Lakhs for service setups with government paying 15% to 35% of the project cost as non-repayable margin money subsidy.',
      kn: 'ಹೊಸ ಕಾರ್ಖಾನೆ, ಉತ್ಪಾದನಾ ಘಟಕ ಅಥವಾ ಸೇವಾ ಕೇಂದ್ರ ಆರಂಭಿಸಲು ಬ್ಯಾಂಕ್ ಸಾಲ ಕೊಡಿಸಿ, ಅದರಲ್ಲಿ ಶೇ. ೧೫ ರಿಂದ ೩೫ ರಷ್ಟು (ಗರಿಷ್ಠ ₹೧೭.೫ ಲಕ್ಷ) ಹಣವನ್ನು ಸರ್ಕಾರವೇ ಉಚಿತ ಸಬ್ಸಿಡಿಯಾಗಿ ಬ್ಯಾಂಕಿಗೆ ಜಮೆ ಮಾಡುವ ಪ್ರಮುಖ ಯೋಜನೆ.'
    },
    benefits: {
      en: [
        'Loans up to ₹50 Lakhs for manufacturing projects and ₹20 Lakhs for service enterprises',
        'Capital subsidy of 25% (urban) and 35% (rural) for SC, ST, OBC, Women, and Minority applicants',
        'Only 5% to 10% own contribution required from the entrepreneur',
        'Direct tie-up with all public sector banks with no collateral security needed up to ₹10 Lakhs'
      ],
      kn: [
        'ಉತ್ಪಾದನಾ ಘಟಕಕ್ಕೆ ₹50 ಲಕ್ಷದವರೆಗೆ ಮತ್ತು ಸೇವಾ ಉದ್ಯಮಕ್ಕೆ ₹20 ಲಕ್ಷದವರೆಗೆ ಸಾಲ',
        'ಮಹಿಳೆಯರು, ಎಸ್‌ಸಿ/ಎಸ್‌ಟಿ ಮತ್ತು ಹಿಂದುಳಿದ ವರ್ಗದವರಿಗೆ ಶೇ. ೩೫ ರಷ್ಟು ಬೃಹತ್ ಸಬ್ಸಿಡಿ',
        'ಉದ್ಯಮಿಯಿಂದ ಕೇವಲ ಶೇ. ೫ ರಿಂದ ೧೦ ಸ್ವಂತ ಬಂಡವಾಳ ಸಾಕು',
        '₹10 ಲಕ್ಷದವರೆಗೆ ಯಾವುದೇ ಆಸ್ತಿ ಅಡಮಾನ ಇಡುವಂತಿಲ್ಲ'
      ]
    },
    knownCriteria: {
      minAge: 18
    },
    disqualifyingConditions: {
      en: ['Projects already availing other central or state capital subsidies cannot double claim'],
      kn: ['ಬೇರೆ ಸರ್ಕಾರಿ ಸಬ್ಸಿಡಿ ಪಡೆದಿರುವ ಉದ್ಯಮಗಳಿಗೆ ಅನ್ವಯಿಸುವುದಿಲ್ಲ']
    },
    requiredDocuments: {
      mandatory: {
        en: ['Detailed Project Report (DPR) with machinery quotations', 'Aadhaar Card and PAN Card', 'Caste and Special Category Certificate (if claiming 35% subsidy)', 'Minimum 8th pass certificate for projects > ₹10 Lakhs'],
        kn: ['ವಿವರವಾದ ಪ್ರಾಜೆಕ್ಟ್ ರಿಪೋರ್ಟ್ (ಡಿಪಿಆರ್)', 'ಆಧಾರ್ ಮತ್ತು ಪ್ಯಾನ್ ಕಾರ್ಡ್', 'ಜಾತಿ/ವರ್ಗ ಪ್ರಮಾಣಪತ್ರ', '೮ನೇ ತರಗತಿ ಅಂಕಪಟ್ಟಿ']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Apply Online on KVIC PMEGP Portal', kn: 'ಕೆವಿಐಸಿ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಆನ್‌ಲೈನ್ ಅರ್ಜಿ' },
        description: {
          en: 'Submit application along with DPR on kviconline.gov.in and select preferred bank branch.',
          kn: 'kviconline.gov.in ನಲ್ಲಿ ಪ್ರಾಜೆಕ್ಟ್ ರಿಪೋರ್ಟ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಬ್ಯಾಂಕ್ ಶಾಖೆ ಆಯ್ಕೆ ಮಾಡಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'District Task Force Review & Bank Sanction', kn: 'ಜಿಲ್ಲಾ ಸಮಿತಿ ಪರಿಶೀಲನೆ & ಬ್ಯಾಂಕ್ ಸಾಲ ಮಂಜೂರು' },
        description: {
          en: 'Task force forwards file to bank; bank sanctions loan and KVIC deposits 35% subsidy into 3-year lock-in TDR.',
          kn: 'ಬ್ಯಾಂಕ್ ಸಾಲ ಮಂಜೂರು ಮಾಡಿದ ನಂತರ ಸರ್ಕಾರವೇ ಶೇ. ೩೫ ಸಬ್ಸಿಡಿ ಹಣವನ್ನು ಬ್ಯಾಂಕಿಗೆ ಕಳುಹಿಸುತ್ತದೆ.'
        }
      }
    ],
    officialPortalUrl: 'https://www.kviconline.gov.in/pmegp/',
    responsibleDepartment: {
      en: 'Khadi & Village Industries Commission (KVIC), Ministry of MSME',
      kn: 'ಖಾದಿ ಮತ್ತು ಗ್ರಾಮೋದ್ಯೋಗ ಆಯೋಗ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },

  // ==========================================
  // 9. HOUSING & UTILITIES (4 SCHEMES -> TOTAL 5)
  // ==========================================
  {
    id: 'karnataka-ashraya-housing',
    name: {
      en: 'Dr. B.R. Ambedkar & Devaraj Urs Housing Scheme (Ashraya)',
      kn: 'ಡಾ. ಬಿ.ಆರ್. ಅಂಬೇಡ್ಕರ್ & ದೇವರಾಜ ಅರಸು ವಸತಿ ಯೋಜನೆ (ಆಶ್ರಯ)'
    },
    category: 'housing_utility',
    shortName: 'Ashraya Housing Scheme',
    authority: {
      en: 'Rajiv Gandhi Housing Corporation Limited (RGHCL), Karnataka',
      kn: 'ರಾಜೀವ್ ಗಾಂಧಿ ವಸತಿ ನಿಗಮ ನಿಯಮಿತ, ಕರ್ನಾಟಕ'
    },
    level: 'karnataka',
    tagline: {
      en: 'Direct capital housing grant of ₹1,75,000 for constructing a pucca house for homeless BPL families.',
      kn: 'ಸ್ವಂತ ಸೈಟ್ ಹೊಂದಿರುವ ಬಡ ಕುಟುಂಬಗಳಿಗೆ ಮನೆ ನಿರ್ಮಾಣಕ್ಕೆ ₹1,75,000 ನೇರ ಸರ್ಕಾರಿ ಸಹಾಯಧನ.'
    },
    description: {
      en: 'Provides direct construction grants of ₹1,75,000 (SC/ST) and ₹1,20,000 (OBC/General) released across Foundation, Lintel, Roof, and Completion stages via geo-tagged mobile GPS photographs to homeless families living in thatched roofs or huts.',
      kn: 'ಗುಡಿಸಲಿನಲ್ಲಿ ವಾಸಿಸುವ ಅಥವಾ ಸ್ವಂತ ಸೈಟ್ ಹೊಂದಿರುವ ನಿರಾಶ್ರಿತ ಬಡವರಿಗೆ ಪಕ್ಕಾ ಮನೆ ನಿರ್ಮಿಸಿಕೊಳ್ಳಲು ಹಂತ-ಹಂತವಾಗಿ ಜಿಪಿಎಸ್ ಫೋಟೋ ಆಧಾರದಲ್ಲಿ ₹1,75,000 ನೇರ ಸಹಾಯಧನ ನೀಡಲಾಗುತ್ತದೆ.'
    },
    benefits: {
      en: [
        'Direct subsidy of ₹1,75,000 (SC/ST) and ₹1,20,000 (OBC/EWS) credited straight to bank account',
        'Geo-tagged mobile tracking eliminates middlemen and contractor cuts',
        'Free electricity connection through Gruha Jyothi and piped tap water under Jal Jeevan Mission'
      ],
      kn: [
        'ಎಸ್‌ಸಿ/ಎಸ್‌ಟಿ ಫಲಾನುಭವಿಗಳಿಗೆ ₹1,75,000 ಹಾಗೂ ಇತರರಿಗೆ ₹1,20,000 ನೇರ ನಗದು ಸಬ್ಸಿಡಿ',
        'ಮೊಬೈಲ್ ಆ್ಯಪ್ ಮೂಲಕ ಫೋಟೋ ತೆಗೆದು ಹಂತ-ಹಂತವಾಗಿ ಹಣ ಬಿಡುಗಡೆ',
        'ಗೃಹಜ್ಯೋತಿ ಉಚಿತ ವಿದ್ಯುತ್ ಮತ್ತು ನಲ್ಲಿ ಸಂಪರ್ಕ'
      ]
    },
    knownCriteria: {
      rationCards: ['BPL', 'AAY'],
      seekingHousingUtilityHelp: true,
      karnatakaResidentOnly: true
    },
    disqualifyingConditions: {
      en: ['Families that already own a permanent concrete RCC pucca house anywhere in India'],
      kn: ['ಈಗಾಗಲೇ ಪಕ್ಕಾ ಆರ್.ಸಿ.ಸಿ ಕಾಂಕ್ರೀಟ್ ಮನೆ ಹೊಂದಿರುವವರು ಅನರ್ಹರು']
    },
    requiredDocuments: {
      mandatory: {
        en: ['Site Title Deed / Hakku Patra / Grama Thana Khata', 'BPL Ration Card', 'Aadhaar Card and Bank Passbook'],
        kn: ['ಸೈಟ್ ಹಕ್ಕುಪತ್ರ / ಖಾತಾ ದಾಖಲೆ', 'ಬಿಪಿಎಲ್ ಪಡಿತರ ಚೀಟಿ', 'ಆಧಾರ್ ಮತ್ತು ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Selection in Grama Sabha / Ward Committee', kn: 'ವಾರ್ಡ್ ಸಮಿತಿ / ಗ್ರಾಮ ಸಭೆಯಲ್ಲಿ ಆಯ್ಕೆ' },
        description: {
          en: 'Apply through local urban local body / Gram Panchayat during Ashraya notification window.',
          kn: 'ಸ್ಥಳೀಯ ಪುರಸಭೆ ಅಥವಾ ಗ್ರಾಮ ಪಂಚಾಯಿತಿಯಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ ಹೆಸರು ನೋಂದಾಯಿಸಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Stage-Wise GPS Mobile Photo Releases', kn: 'ಹಂತವಾರು ಫೋಟೋ & ಖಾತೆಗೆ ಹಣ ಜಮೆ' },
        description: {
          en: 'Upload foundation, lintel, and roof stage photos on Ashraya mobile app to trigger direct DBT releases.',
          kn: 'ಆಶ್ರಯ ಆ್ಯಪ್‌ನಲ್ಲಿ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಹಂತ-ಹಂತವಾಗಿ ಹಣ ಪಡೆಯಿರಿ.'
        }
      }
    ],
    officialPortalUrl: 'https://ashraya.karnataka.gov.in/',
    responsibleDepartment: {
      en: 'Rajiv Gandhi Housing Corporation Limited (RGHCL)',
      kn: 'ರಾಜೀವ್ ಗಾಂಧಿ ವಸತಿ ನಿಗಮ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },
  {
    id: 'central-pmay-urban',
    name: {
      en: 'Pradhan Mantri Awas Yojana - Urban (PMAY-U)',
      kn: 'ಪ್ರಧಾನಮಂತ್ರಿ ಆವಾಸ್ ಯೋಜನೆ - ನಗರ (ಪಿಎಂಎವೈ-ನಗರ)'
    },
    category: 'housing_utility',
    shortName: 'PMAY-Urban Housing',
    authority: {
      en: 'Ministry of Housing and Urban Affairs, Government of India & BBMP',
      kn: 'ವಸತಿ ಮತ್ತು ನಗರ ವ್ಯವಹಾರಗಳ ಸಚಿವಾಲಯ, ಭಾರತ ಸರ್ಕಾರ & ಬಿಬಿಎಂಪಿ'
    },
    level: 'central',
    tagline: {
      en: 'Up to ₹2.67 Lakhs upfront interest subsidy on home loans for first-time home buyers in Bengaluru.',
      kn: 'ಬೆಂಗಳೂರಿನಲ್ಲಿ ಸ್ವಂತ ಮನೆ/ಫ್ಲ್ಯಾಟ್ ಖರೀದಿಸುವ ಬಡ & ಮಧ್ಯಮ ವರ್ಗದವರಿಗೆ ₹2.67 ಲಕ್ಷದವರೆಗೆ ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ.'
    },
    description: {
      en: 'PMAY-U addresses the affordable housing shortage in urban areas like Bengaluru by providing Credit Linked Subsidy Scheme (CLSS) up to ₹2.67 Lakhs on housing loans and affordable apartment allotments constructed in partnership with BBMP and Karnataka Housing Board.',
      kn: 'ಬೆಂಗಳೂರಿನಲ್ಲಿ ಸ್ವಂತ ಮನೆ ಅಥವಾ ಫ್ಲ್ಯಾಟ್ ಖರೀದಿಸುವ ಬಡ ಮತ್ತು ಮಧ್ಯಮ ವರ್ಗದ ಕುಟುಂಬಗಳಿಗೆ ಗೃಹ ಸಾಲದ ಬಡ್ಡಿಯಲ್ಲಿ ₹2.67 ಲಕ್ಷದವರೆಗೆ ಮುಂಗಡ ಸಬ್ಸಿಡಿ ನೀಡುವ ಕೇಂದ್ರ ಸರ್ಕಾರದ ವಸತಿ ಯೋಜನೆ.'
    },
    benefits: {
      en: [
        'Up to ₹2.67 Lakhs upfront interest subsidy deducted directly from principal home loan',
        'Lower monthly home loan EMI installments over 20-year repayment tenure',
        'Mandatory ownership in the name of the female head of the family or joint ownership',
        'Direct apartment allotments in affordable KHB / BDA township projects'
      ],
      kn: [
        'ಗೃಹ ಸಾಲದ ಅಸಲು ಮೊತ್ತದಲ್ಲಿ ₹2.67 ಲಕ್ಷದವರೆಗೆ ನೇರ ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ ಕಡಿತ',
        'ಪ್ರತಿ ತಿಂಗಳ ಸಾಲದ ಇಎಂಐ (EMI) ಗಣನೀಯ ಇಳಿಕೆ',
        'ಮನೆಯ ನೋಂದಣಿಯಲ್ಲಿ ಮಹಿಳೆಯ ಹೆಸರು ಕಡ್ಡಾಯ',
        'ಬಿಡಿಎ ಮತ್ತು ಕೆಎಚ್‌ಬಿ ಅಪಾರ್ಟ್‌ಮೆಂಟ್‌ಗಳಲ್ಲಿ ಸಬ್ಸಿಡಿ ಮನೆಗಳು'
      ]
    },
    knownCriteria: {
      seekingHousingUtilityHelp: true
    },
    disqualifyingConditions: {
      en: ['Applicant or any family member must not own a pucca house anywhere in India'],
      kn: ['ಕುಟುಂಬದ ಯಾವುದೇ ಸದಸ್ಯರ ಹೆಸರಿನಲ್ಲಿ ಭಾರತದಲ್ಲಿ ಸ್ವಂತ ಪಕ್ಕಾ ಮನೆ ಇರಬಾರದು']
    },
    requiredDocuments: {
      mandatory: {
        en: ['Aadhaar Card of all family members', 'Income Certificate or ITR / Salary Slip', 'Property Purchase Agreement / Sale Deed in Bengaluru', 'Bank Loan Sanction Letter'],
        kn: ['ಕುಟುಂಬದ ಸದಸ್ಯರ ಆಧಾರ್', 'ಆದಾಯ ದಾಖಲೆ / ವೇತನ ಚೀಟಿ', 'ಫ್ಲ್ಯಾಟ್/ಮನೆ ಖರೀದಿ ಅಗ್ರಿಮೆಂಟ್', 'ಬ್ಯಾಂಕ್ ಸಾಲ ಮಂಜೂರಾತಿ ಪತ್ರ']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Apply for Home Loan at Empaneled Bank', kn: 'ಬ್ಯಾಂಕ್‌ನಲ್ಲಿ ಗೃಹ ಸಾಲಕ್ಕೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ' },
        description: {
          en: 'Apply at SBI, Canara Bank, HDFC, or any housing finance company and tick PMAY CLSS interest subsidy option.',
          kn: 'ಬ್ಯಾಂಕ್‌ನಲ್ಲಿ ಗೃಹ ಸಾಲ ಪಡೆಯುವಾಗ ಪಿಎಂಎವೈ ಸಬ್ಸಿಡಿ ಆಯ್ಕೆ ಮಾಡಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Central Nodal Agency Credits Subsidy', kn: 'ಖಾತೆಗೆ ನೇರ ಸಬ್ಸಿಡಿ ಜಮೆ' },
        description: {
          en: 'HUDCO / NHB verifies records and credits up to ₹2.67 Lakhs directly into your loan account reducing loan balance.',
          kn: 'ಸರ್ಕಾರವು ಸಬ್ಸಿಡಿ ಹಣವನ್ನು ನೇರವಾಗಿ ನಿಮ್ಮ ಸಾಲದ ಖಾತೆಗೆ ಜಮೆ ಮಾಡಿ ಸಾಲದ ಹೊರೆಯನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.'
        }
      }
    ],
    officialPortalUrl: 'https://pmaymis.gov.in/',
    responsibleDepartment: {
      en: 'Ministry of Housing and Urban Affairs, GoI',
      kn: 'ವಸತಿ ಮತ್ತು ನಗರ ಸಚಿವಾಲಯ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },
  {
    id: 'central-jal-jeevan-mission',
    name: {
      en: 'Jal Jeevan Mission (Functional Household Tap Water Connection)',
      kn: 'ಜಲ ಜೀವನ್ ಮಿಷನ್ (ಮನೆ ಮನೆಗೆ ಗಂಗೆ ಕುಡಿಯುವ ನೀರು)'
    },
    category: 'housing_utility',
    shortName: 'Jal Jeevan Mission',
    authority: {
      en: 'Department of Drinking Water and Sanitation, Ministry of Jal Shakti, GoI & RDPR Karnataka',
      kn: 'ಜಲ ಶಕ್ತಿ ಸಚಿವಾಲಯ, ಭಾರತ ಸರ್ಕಾರ & ಗ್ರಾಮೀಣಾಭಿವೃದ್ಧಿ ಇಲಾಖೆ'
    },
    level: 'both',
    tagline: {
      en: '100% Free piped drinking water tap connection inside every household premises.',
      kn: 'ಪ್ರತಿಯೊಂದು ಮನೆಗೂ ಸಂಪೂರ್ಣ ಉಚಿತ ನಲ್ಲಿ ಕುಡಿಯುವ ನೀರಿನ ಸಂಪರ್ಕ.'
    },
    description: {
      en: 'Provides safe, treated, and potable tap water connection (minimum 55 liters per person per day) directly into the premises of every home, ending the drudgery of women carrying heavy water pots from distant handpumps.',
      kn: 'ಪ್ರತಿ ಕುಟುಂಬಕ್ಕೂ ಮನೆ ಬಾಗಿಲಲ್ಲೇ ದಿನಕ್ಕೆ ತಲಾ ೫೫ ಲೀಟರ್ ಶುದ್ಧ ಕುಡಿಯುವ ನೀರು ಪೂರೈಸಲು ಸಂಪೂರ್ಣ ಉಚಿತ ನಲ್ಲಿ ಸಂಪರ್ಕ ಕಲ್ಪಿಸುವ ಮಹತ್ವಾಕಾಂಕ್ಷೆಯ ಯೋಜನೆ.'
    },
    benefits: {
      en: [
        '100% Free household tap connection without meter installation charges',
        'Regularly tested potable drinking water meeting BIS 10500 safety standards',
        'Water quality surveillance kit provided to local community women for testing',
        'Ends dependence on irregular water tankers and contaminated borewells'
      ],
      kn: [
        'ಉಚಿತ ನಲ್ಲಿ ಸಂಪರ್ಕ; ಯಾವುದೇ ಕನೆಕ್ಷನ್ ಶುಲ್ಕವಿಲ್ಲ',
        'ಶುದ್ಧೀಕರಿಸಿದ ಕುಡಿಯುವ ನೀರು ಸರಬರಾಜು',
        'ನೀರಿನ ಗುಣಮಟ್ಟ ಪರೀಕ್ಷಿಸಲು ಸ್ಥಳೀಯ ಸಮಿತಿಗೆ ಕಿಟ್',
        'ಖಾಸಗಿ ಟ್ಯಾಂಕರ್ ಅವಲಂಬನೆ ಮುಕ್ತ'
      ]
    },
    knownCriteria: {
      seekingHousingUtilityHelp: true
    },
    disqualifyingConditions: {
      en: ['Households that already have active BWSSB or municipal tap connections'],
      kn: ['ಈಗಾಗಲೇ ನೀರಿನ ಕನೆಕ್ಷನ್ ಹೊಂದಿರುವವರು']
    },
    requiredDocuments: {
      mandatory: {
        en: ['House tax receipt / Electricity bill', 'Aadhaar Card of resident'],
        kn: ['ಮನೆ ತೆರಿಗೆ ರಸೀದಿ ಅಥವಾ ವಿದ್ಯುತ್ ಬಿಲ್', 'ಆಧಾರ್ ಕಾರ್ಡ್']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Request Connection at Local Panchayat / Municipal Ward', kn: 'ವಾರ್ಡ್ ಅಥವಾ ಪಂಚಾಯಿತಿಯಲ್ಲಿ ಅರ್ಜಿ' },
        description: {
          en: 'Submit house tax details to village water & sanitation committee (VWSC) or municipal engineering cell.',
          kn: 'ಸ್ಥಳೀಯ ಕಚೇರಿಗೆ ಮನೆ ವಿವರ ನೀಡಿ ಉಚಿತ ನಲ್ಲಿ ಸಂಪರ್ಕಕ್ಕೆ ಕೋರಿಕೆ ಸಲ್ಲಿಸಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Pipeline Laying & Free Tap Installation', kn: 'ಪೈಪ್‌ಲೈನ್ ಅಳವಡಿಕೆ & ನೀರಿನ ಸಂಪರ್ಕ' },
        description: {
          en: 'Govt contractor connects distribution line directly inside compound wall at zero cost.',
          kn: 'ಸರ್ಕಾರಿ ವೆಚ್ಚದಲ್ಲೇ ನಿಮ್ಮ ಮನೆಗೆ ಪೈಪ್ ಜೋಡಿಸಿ ನಲ್ಲಿ ಕನೆಕ್ಷನ್ ಕೊಡಲಾಗುತ್ತದೆ.'
        }
      }
    ],
    officialPortalUrl: 'https://jaljeevanmission.gov.in/',
    responsibleDepartment: {
      en: 'Rural Drinking Water & Sanitation Dept, Karnataka',
      kn: 'ಗ್ರಾಮೀಣ ಕುಡಿಯುವ ನೀರು ಇಲಾಖೆ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },
  {
    id: 'central-pm-ujjwala',
    name: {
      en: 'Pradhan Mantri Ujjwala Yojana 2.0 (PMUY Free LPG)',
      kn: 'ಪ್ರಧಾನಮಂತ್ರಿ ಉಜ್ವಲ ಯೋಜನೆ ೨.೦ (ಉಚಿತ ಅಡುಗೆ ಅನಿಲ ಸಂಪರ್ಕ)'
    },
    category: 'housing_utility',
    shortName: 'PM Ujjwala Yojana',
    authority: {
      en: 'Ministry of Petroleum and Natural Gas, Government of India',
      kn: 'ಪೆಟ್ರೋಲಿಯಂ ಮತ್ತು ನೈಸರ್ಗಿಕ ಅನಿಲ ಸಚಿವಾಲಯ, ಭಾರತ ಸರ್ಕಾರ'
    },
    level: 'central',
    tagline: {
      en: 'Free LPG gas connection, stove, first cylinder refill, and ₹300 monthly refill subsidy for women in poor households.',
      kn: 'ಬಡ ಕುಟುಂಬದ ಮಹಿಳೆಯರಿಗೆ ಉಚಿತ ಗ್ಯಾಸ್ ಕನೆಕ್ಷನ್, ಒಲೆ, ಮೊದಲ ಸಿಲಿಂಡರ್ & ಪ್ರತಿ ಸಿಲಿಂಡರ್‌ಗೆ ₹300 ಸಬ್ಸಿಡಿ.'
    },
    description: {
      en: 'Ujjwala 2.0 provides smokeless clean cooking fuel to adult women in economically weaker households by providing a free LPG connection, stove, safety hose, first 14.2 kg gas cylinder refill completely free, and an ongoing direct bank subsidy of ₹300 on every cylinder refill.',
      kn: 'ಅಡುಗೆ ಹೊಗೆಯಿಂದ ಮಹಿಳೆಯರ ಶ್ವಾಸಕೋಶವನ್ನು ರಕ್ಷಿಸಲು ಬಡ ಮಹಿಳೆಯರಿಗೆ ಉಚಿತ ಗ್ಯಾಸ್ ಸಿಲಿಂಡರ್, ಗ್ಯಾಸ್ ಸ್ಟೌವ್, ರೆಗ್ಯುಲೇಟರ್ ಒದಗಿಸಲಾಗುತ್ತದೆ ಹಾಗೂ ಪ್ರತಿ ಸಿಲಿಂಡರ್ ಮರು-ಭರ್ತಿಗೆ ₹300 ನೇರ ನಗದು ಸಬ್ಸಿಡಿ ನೀಡಲಾಗುತ್ತದೆ.'
    },
    benefits: {
      en: [
        '100% Free deposit-free LPG gas connection (cylinder + regulator + hose)',
        'Free gas stove (hotplate) and first 14.2 kg gas cylinder refill provided completely free',
        'Direct subsidy of ₹300 credited into bank account for every subsequent cylinder refill',
        'Migrant families can apply with a simple self-declaration of address (no rent agreement required)'
      ],
      kn: [
        'ಠೇವಣಿ ರಹಿತ ಉಚಿತ ಗ್ಯಾಸ್ ಕನೆಕ್ಷನ್',
        'ಉಚಿತ ಗ್ಯಾಸ್ ಒಲೆ ಮತ್ತು ಮೊದಲ ಸಿಲಿಂಡರ್ ಸಂಪೂರ್ಣ ಉಚಿತ',
        'ಪ್ರತಿ ಸಿಲಿಂಡರ್ ಖರೀದಿಸಿದಾಗ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ₹300 ನೇರ ಸಬ್ಸಿಡಿ ಜಮೆ',
        'ವಲಸೆ ಕುಟುಂಬಗಳಿಗೆ ವಿಳಾಸದ ಸ್ವಯಂ ಘೋಷಣೆಯಲ್ಲೇ ಸಿಲಿಂಡರ್ ಲಭ್ಯ'
      ]
    },
    knownCriteria: {
      gender: 'female',
      minAge: 18,
      rationCards: ['BPL', 'AAY'],
      seekingHousingUtilityHelp: true
    },
    disqualifyingConditions: {
      en: ['Household that already possesses an existing LPG connection from any gas agency'],
      kn: ['ಕುಟುಂಬದಲ್ಲಿ ಈಗಾಗಲೇ ಗ್ಯಾಸ್ ಕನೆಕ್ಷನ್ ಹೊಂದಿರುವವರು ಅನರ್ಹರು']
    },
    requiredDocuments: {
      mandatory: {
        en: ['BPL Ration Card or SECC certification', 'Aadhaar Card of female applicant and adult family members', 'Bank Passbook linked with NPCI Aadhaar bridge'],
        kn: ['ಬಿಪಿಎಲ್ ಪಡಿತರ ಚೀಟಿ', 'ಮಹಿಳೆಯ ಆಧಾರ್ ಕಾರ್ಡ್', 'ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Visit Local Indane, Bharat, or HP Gas Agency', kn: 'ಹತ್ತಿರದ ಇಂಡೇನ್/ಭಾರತ್/ಎಚ್‌ಪಿ ಗ್ಯಾಸ್ ಏಜೆನ್ಸಿಗೆ ಭೇಟಿ ನೀಡಿ' },
        description: {
          en: 'Apply at nearest authorized LPG distributor in your ward or online on pmuy.gov.in.',
          kn: 'ನಿಮ್ಮ ವಾರ್ಡ್‌ನ ಗ್ಯಾಸ್ ಏಜೆನ್ಸಿಯಲ್ಲಿ ಅಥವಾ pmuy.gov.in ನಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Free Home Delivery & Installation', kn: 'ಉಚಿತ ಸಿಲಿಂಡರ್ ಮತ್ತು ಒಲೆ ವಿತರಣೆ' },
        description: {
          en: 'Distributor delivers cylinder and stove to your home and activates subsidized DBT account.',
          kn: 'ಏಜೆನ್ಸಿಯವರು ಮನೆಗೆ ಸಿಲಿಂಡರ್ ಮತ್ತು ಒಲೆ ತಲುಪಿಸಿ ಸಬ್ಸಿಡಿ ಸಕ್ರಿಯಗೊಳಿಸುತ್ತಾರೆ.'
        }
      }
    ],
    officialPortalUrl: 'https://www.pmuy.gov.in/',
    responsibleDepartment: {
      en: 'Ministry of Petroleum and Natural Gas, GoI',
      kn: 'ಪೆಟ್ರೋಲಿಯಂ ಸಚಿವಾಲಯ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },

  // ==========================================
  // 10. CERTIFICATES & GENERAL CITIZEN SERVICES (5 SCHEMES -> TOTAL 5)
  // ==========================================
  {
    id: 'karnataka-sakala-services',
    name: {
      en: 'Karnataka Sakala Citizen Services Guarantee Scheme',
      kn: 'ಕರ್ನಾಟಕ ಸಕಾಲ ನಾಗರಿಕ ಸೇವೆಗಳ ಖಾತರಿ ಯೋಜನೆ'
    },
    category: 'certificates_general',
    shortName: 'Sakala Scheme',
    authority: {
      en: 'Department of Personnel and Administrative Reforms (DPAR), Government of Karnataka',
      kn: 'ಸಿಬ್ಬಂದಿ ಮತ್ತು ಆಡಳಿತ ಸುಧಾರಣಾ ಇಲಾಖೆ (ಡಿಪಿಎಆರ್), ಕರ್ನಾಟಕ ಸರ್ಕಾರ'
    },
    level: 'karnataka',
    tagline: {
      en: 'Statutory legal right guaranteeing time-bound delivery of 1,025 government citizen services with delay compensation.',
      kn: '೧,೦೨೫ ಸರ್ಕಾರಿ ಸೇವೆಗಳನ್ನು ನಿಗದಿತ ಸಮಯದಲ್ಲಿ ಪಡೆಯುವ ಕಾನೂನುಬದ್ಧ ಹಕ್ಕು; ವಿಳಂಬವಾದರೆ ದಿನಕ್ಕೆ ₹೨೦ ಪರಿಹಾರ.'
    },
    description: {
      en: 'Under the Karnataka Guarantee of Services to Citizens Act, citizens have the legal right to receive over 1,025 public services (Khata, certificates, electricity connections, driving licenses, pensions) within specified deadlines. If delayed, citizens are entitled to receive ₹20 per day compensation recovered directly from the salary of the defaulting officer.',
      kn: 'ಸರ್ಕಾರಿ ಕಚೇರಿಗಳಲ್ಲಿ ಕೆಲಸಗಳು ವಿಳಂಬವಾಗದಂತೆ, ಖಾತಾ, ಜಾತಿ-ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ, ವಿದ್ಯುತ್ ಸಂಪರ್ಕ, ಡ್ರೈವಿಂಗ್ ಲೈಸೆನ್ಸ್ ಸೇರಿದಂತೆ ೧,೦೨೫ ಸೇವೆಗಳನ್ನು ನಿಗದಿತ ದಿನಗಳಲ್ಲಿ ನೀಡಲೇಬೇಕೆಂಬ ಕಡ್ಡಾಯ ಕಾನೂನು. ತಪ್ಪಿದರೆ ಅಧಿಕಾರಿಗಳ ವೇತನದಿಂದಲೇ ದಂಡ ಕಡಿತ ಮಾಡಿ ನಾಗರಿಕರಿಗೆ ಪರಿಹಾರ ನೀಡಲಾಗುತ್ತದೆ.'
    },
    benefits: {
      en: [
        'Legal entitlement to 1,025 state government services within guaranteed statutory days (e.g. 7 to 21 days)',
        'Unique 15-digit GSC (Guarantee of Services to Citizens) tracking number for every application',
        'Automatic compensation of ₹20 per day up to ₹500 for delayed delivery paid directly to citizen',
        'Right to appeal to First and Second Appellate Authorities if an application is wrongfully rejected'
      ],
      kn: [
        '೧,೦೨೫ ಸರ್ಕಾರಿ ಸೇವೆಗಳು ನಿಗದಿತ ದಿನಗಳಲ್ಲಿ ಕಡ್ಡಾಯವಾಗಿ ಲಭ್ಯ',
        'ಪ್ರತಿ ಅರ್ಜಿಗೆ ೧೫ ಅಂಕಿಯ ಅಧಿಕೃತ ಜಿಎಸ್‌ಸಿ (GSC) ಟ್ರ್ಯಾಕಿಂಗ್ ಸಂಖ್ಯೆ',
        'ವಿಳಂಬವಾದರೆ ದಿನಕ್ಕೆ ₹೨೦ ರಂತೆ ಅಧಿಕಾರಿಯಿಂದಲೇ ಪರಿಹಾರ ಪಡೆಯುವ ಹಕ್ಕು',
        'ಅರ್ಜಿ ತಿರಸ್ಕರಿಸಿದರೆ ಮೇಲ್ಮನವಿ ಸಲ್ಲಿಸುವ ಕಾನೂನುಬದ್ಧ ಅವಕಾಶ'
      ]
    },
    knownCriteria: {},
    disqualifyingConditions: {
      en: ['Applies to services notified under Sakala Act schedule; civil court matters excluded'],
      kn: ['ಸಕಾಲ ಕಾಯ್ದೆಯ ಅಡಿಯಲ್ಲಿ ಬರುವ ೧,೦೨೫ ಸೇವೆಗಳಿಗೆ ಮಾತ್ರ ಅನ್ವಯ']
    },
    requiredDocuments: {
      mandatory: {
        en: ['Application submitted through Bangalore One, Seva Sindhu, or departmental office with GSC receipt'],
        kn: ['ಜಿಎಸ್‌ಸಿ (GSC) ಸಂಖ್ಯೆ ಹೊಂದಿರುವ ಸ್ವೀಕೃತಿ ರಸೀದಿ']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Obtain Sakala 15-Digit GSC Number', kn: '೧೫ ಅಂಕಿಯ ಸಕಾಲ ಜಿಎಸ್‌ಸಿ ಸಂಖ್ಯೆ ಪಡೆಯಿರಿ' },
        description: {
          en: 'Whenever you apply for any government service, demand your Sakala GSC acknowledgement slip.',
          kn: 'ಯಾವುದೇ ಸರ್ಕಾರಿ ಕಚೇರಿ ಅಥವಾ ಬೆಂಗಳೂರು ಒನ್‌ನಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿದಾಗ ಸಕಾಲ ಜಿಎಸ್‌ಸಿ ರಸೀದಿ ಕೇಳಿ ಪಡೆಯಿರಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Track Status Online or via SMS', kn: 'ಆನ್‌ಲೈನ್ ಅಥವಾ ಎಸ್‌ಎಂಎಸ್ ಮೂಲಕ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ' },
        description: {
          en: 'Track your application status on sakala.kar.nic.in or dial Sakala helpline 080-44554455.',
          kn: 'sakala.kar.nic.in ಅಥವಾ 080-44554455 ಸಹಾಯವಾಣಿಗೆ ಕರೆ ಮಾಡಿ ನಿಮ್ಮ ಫೈಲ್ ಸ್ಥಿತಿ ಪರಿಶೀಲಿಸಿ.'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'File Appeal for Delay / Claim Compensation', kn: 'ವಿಳಂಬವಾದರೆ ದಂಡ ಪರಿಹಾರ ಕೋರಿ ಮೇಲ್ಮನವಿ' },
        description: {
          en: 'If deadline crosses, file an appeal online; competent authority issues compensation order.',
          kn: 'ದಿನಾಂಕ ಮೀರಿದರೆ ಆನ್‌ಲೈನ್‌ನಲ್ಲೇ ಮೇಲ್ಮನವಿ ಸಲ್ಲಿಸಿ ಅಧಿಕಾರಿಯಿಂದ ಪರಿಹಾರ ಪಡೆಯಿರಿ.'
        }
      }
    ],
    officialPortalUrl: 'https://sakala.kar.nic.in/',
    responsibleDepartment: {
      en: 'Department of Personnel and Administrative Reforms (DPAR Sakala Mission)',
      kn: 'ಸಿಬ್ಬಂದಿ ಮತ್ತು ಆಡಳಿತ ಸುಧಾರಣಾ ಇಲಾಖೆ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },
  {
    id: 'karnataka-nadakacheri-certificates',
    name: {
      en: 'Nadakacheri Atalji Janasnehi Digital Certificates Portal',
      kn: 'ನಾಡಕಚೇರಿ ಅಟಲ್‌ಜೀ ಜನಸ್ನೇಹಿ ಡಿಜಿಟಲ್ ಪ್ರಮಾಣಪತ್ರಗಳ ಪೋರ್ಟಲ್'
    },
    category: 'certificates_general',
    shortName: 'Nadakacheri Portal',
    authority: {
      en: 'Revenue Department, Government of Karnataka',
      kn: 'ಕಂದಾಯ ಇಲಾಖೆ, ಕರ್ನಾಟಕ ಸರ್ಕಾರ'
    },
    level: 'karnataka',
    tagline: {
      en: 'Online application and digital download of 38 official revenue documents with RD verification numbers.',
      kn: 'ಜಾತಿ, ಆದಾಯ, ವಾಸಸ್ಥಳ ಸೇರಿದಂತೆ ೩೮ ಅಧಿಕೃತ ಕಂದಾಯ ಪ್ರಮಾಣಪತ್ರಗಳ ಆನ್‌ಲೈನ್ ಸೇವೆ.'
    },
    description: {
      en: 'Nadakacheri delivers 38 essential citizen certificates digitally (Caste, Income, Residence/Domicile, Living, Landless, Widowhood, Non-Creamy Layer) authenticated with a permanent 15-digit RD registration number verifiable by any government department or university.',
      kn: 'ನಾಡಕಚೇರಿಯ ಮೂಲಕ ಜಾತಿ ಪ್ರಮಾಣಪತ್ರ, ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ, ವಾಸಸ್ಥಳ ಪ್ರಮಾಣಪತ್ರ ಸೇರಿದಂತೆ ೩೮ ಪ್ರಮುಖ ದಾಖಲೆಗಳನ್ನು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ ಡಿಜಿಟಲ್ ಸಹಿ ಇರುವ ಅಧಿಕೃತ ಆರ್‌ಡಿ (RD) ಸಂಖ್ಯೆಯೊಂದಿಗೆ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿಕೊಳ್ಳಬಹುದು.'
    },
    benefits: {
      en: [
        'Digitally signed tamper-proof certificates valid for 5 years across all colleges and government jobs',
        'Direct download using RD number from anywhere without visiting government offices',
        'Transparent tracking of Village Accountant and Revenue Inspector verification stages',
        'Nominal government fee of ₹25 online or ₹40 at citizen service kiosks'
      ],
      kn: [
        '೫ ವರ್ಷಗಳ ಕಾಲ ಮಾನ್ಯತೆ ಇರುವ ಡಿಜಿಟಲ್ ಸಹಿ ಹೊಂದಿರುವ ಅಧಿಕೃತ ಪ್ರಮಾಣಪತ್ರಗಳು',
        'ಆರ್‌ಡಿ ಸಂಖ್ಯೆ ಬಳಸಿ ಕಚೇರಿಗೆ ಹೋಗದೆ ಮನೆಯಲ್ಲೇ ಡೌನ್‌ಲೋಡ್ ಮಾಡುವ ಸೌಲಭ್ಯ',
        'ಗ್ರಾಮ ಲೆಕ್ಕಿಗರು ಮತ್ತು ಕಂದಾಯ ನಿರೀಕ್ಷಕರ ಪರಿಶೀಲನಾ ಹಂತಗಳ ಆನ್‌ಲೈನ್ ಟ್ರ್ಯಾಕಿಂಗ್',
        'ಕೇವಲ ₹೨೫ ರಿಂದ ₹೪೦ ಅತ್ಯಂತ ಕಡಿಮೆ ಸರ್ಕಾರಿ ಶುಲ್ಕ'
      ]
    },
    knownCriteria: {
      karnatakaResidentOnly: true
    },
    disqualifyingConditions: {
      en: ['Fraudulent income concealment or fake school transfer certificates lead to criminal rejection under IPC'],
      kn: ['ತಪ್ಪಾದ ದಾಖಲೆಗಳನ್ನು ನೀಡಿದರೆ ಅರ್ಜಿ ರದ್ದಾಗುತ್ತದೆ']
    },
    requiredDocuments: {
      mandatory: {
        en: ['Aadhaar Card of applicant', 'Ration Card (BPL or APL)', 'School Transfer Certificate showing Caste (for Caste certificate)'],
        kn: ['ಆಧಾರ್ ಕಾರ್ಡ್', 'ಪಡಿತರ ಚೀಟಿ', 'ಶಾಲಾ ವರ್ಗಾವಣೆ ಪತ್ರ (ಟಿಸಿ)']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Apply Online on Nadakacheri Portal', kn: 'ನಾಡಕಚೇರಿ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಆನ್‌ಲೈನ್ ಅರ್ಜಿ' },
        description: {
          en: 'Login to nadakacheri.karnataka.gov.in and select required certificate.',
          kn: 'nadakacheri.karnataka.gov.in ನಲ್ಲಿ ಲಾಗಿನ್ ಆಗಿ ಬೇಕಾದ ಪ್ರಮಾಣಪತ್ರ ಆಯ್ಕೆ ಮಾಡಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Field Verification by Revenue Inspector', kn: 'ಕಂದಾಯ ನಿರೀಕ್ಷಕರ ಪರಿಶೀಲನೆ' },
        description: {
          en: 'Village Accountant and RI inspect records and submit digital report to Tahsildar.',
          kn: 'ಗ್ರಾಮ ಲೆಕ್ಕಿಗರು ಹಾಗೂ ಕಂದಾಯ ನಿರೀಕ್ಷಕರು ಪರಿಶೀಲಿಸಿ ತಹಶೀಲ್ದಾರ್‌ಗೆ ಶಿಫಾರಸು ಮಾಡುತ್ತಾರೆ.'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Instant Download with Digitally Signed RD Barcode', kn: 'ಡಿಜಿಟಲ್ ಸಹಿ ಇರುವ ಪ್ರಮಾಣಪತ್ರ ಡೌನ್‌ಲೋಡ್' },
        description: {
          en: 'Download final certificate with digital barcode directly onto your phone.',
          kn: 'ಆನ್‌ಲೈನ್‌ನಲ್ಲೇ ಕ್ಯೂಆರ್ ಕೋಡ್ ಇರುವ ಅಧಿಕೃತ ಪ್ರಮಾಣಪತ್ರವನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿಕೊಳ್ಳಿ.'
        }
      }
    ],
    officialPortalUrl: 'https://nadakacheri.karnataka.gov.in/',
    responsibleDepartment: {
      en: 'Revenue Department, Karnataka',
      kn: 'ಕಂದಾಯ ಇಲಾಖೆ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },
  {
    id: 'karnataka-e-aasthi-property',
    name: {
      en: 'BBMP E-Aasthi & E-Swathu Digital Property Khata',
      kn: 'ಬಿಬಿಎಂಪಿ ಇ-ಆಸ್ತಿ & ಇ-ಸ್ವತ್ತು ಡಿಜಿಟಲ್ ಪ್ರಾಪರ್ಟಿ ಖಾತಾ'
    },
    category: 'certificates_general',
    shortName: 'BBMP E-Aasthi',
    authority: {
      en: 'Bruhat Bengaluru Mahanagara Palike (BBMP) & Department of Urban Development',
      kn: 'ಬಿಬಿಎಂಪಿ & ನಗರಾಭಿವೃದ್ಧಿ ಇಲಾಖೆ, ಕರ್ನಾಟಕ'
    },
    level: 'karnataka',
    tagline: {
      en: 'Fraud-proof digitized property ownership cards and e-Khata certificates for Bengaluru properties.',
      kn: 'ಬೆಂಗಳೂರಿನ ಆಸ್ತಿಗಳಿಗೆ ವಂಚನೆ-ಮುಕ್ತ ಡಿಜಿಟಲ್ ಇ-ಖಾತಾ & ಆಸ್ತಿ ಗುರುತಿನ ಕಾರ್ಡ್.'
    },
    description: {
      en: 'E-Aasthi creates an authoritative digital registry of all properties in Bengaluru, issuing unique PID numbers, geo-tagged property boundaries, and digital A-Khata certificates to protect property owners against duplicate registrations and unauthorized land scams.',
      kn: 'ಬೆಂಗಳೂರಿನ ಎಲ್ಲಾ ಮನೆ, ನಿವೇಶನ ಮತ್ತು ಅಪಾರ್ಟ್‌ಮೆಂಟ್‌ಗಳಿಗೆ ನಕಲಿ ನೋಂದಣಿ ತಡೆಯಲು ಬಿಬಿಎಂಪಿಯು ಅನನ್ಯ ಪಿಐಡಿ (PID) ಸಂಖ್ಯೆ, ಜಿಪಿಎಸ್ ಗಡಿ ಗುರುತು ಮತ್ತು ಡಿಜಿಟಲ್ ಇ-ಖಾತಾ ನೀಡುವ ಅಧಿಕೃತ ವ್ಯವಸ್ಥೆ.'
    },
    benefits: {
      en: [
        'Tamper-proof digitized e-Khata extract issued with unique Property Identification Number (PID)',
        'Mandatory document for obtaining bank home loans and legal sale registration at Sub-Registrar',
        'Transparent online property tax calculation and automated digital receipt issuance',
        'Completely blocks fraudulent registration of someone else’s property'
      ],
      kn: [
        'ಅನನ್ಯ ಪಿಐಡಿ (PID) ಸಂಖ್ಯೆ ಹೊಂದಿರುವ ಅಧಿಕೃತ ಡಿಜಿಟಲ್ ಇ-ಖಾತಾ',
        'ಬ್ಯಾಂಕ್ ಸಾಲ ಪಡೆಯಲು ಮತ್ತು ಉಪನೋಂದಣಾಧಿಕಾರಿ ಕಚೇರಿಯಲ್ಲಿ ಆಸ್ತಿ ಮಾರಾಟಕ್ಕೆ ಕಡ್ಡಾಯ ದಾಖಲೆ',
        'ಆಸ್ತಿ ತೆರಿಗೆಯ ಪಾರದರ್ಶಕ ಆನ್‌ಲೈನ್ ಲೆಕ್ಕಾಚಾರ',
        'ನಕಲಿ ದಾಖಲೆ ಸೃಷ್ಟಿಸಿ ಆಸ್ತಿ ಕಬಳಿಸುವುದನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ತಡೆಯುತ್ತದೆ'
      ]
    },
    knownCriteria: {
      karnatakaResidentOnly: true
    },
    disqualifyingConditions: {
      en: ['Properties situated on buffer zones, storm water drains (Rajakaluve), or encroached govt lands cannot obtain A-Khata'],
      kn: ['ರಾಜಕಾಲುವೆ ಅಥವಾ ಸರ್ಕಾರಿ ಜಮೀನು ಒತ್ತುವರಿ ಮಾಡಿರುವ ಆಸ್ತಿಗಳಿಗೆ ಎ-ಖಾತಾ ಸಿಗುವುದಿಲ್ಲ']
    },
    requiredDocuments: {
      mandatory: {
        en: ['Registered Sale Deed / Title Deed', 'Encumbrance Certificate (EC Form 15 for 15 years)', 'Latest Property Tax Paid Receipt', 'Aadhaar Card and Electricity (BESCOM) RR Number'],
        kn: ['ನೋಂದಾಯಿತ ಕ್ರಯಪತ್ರ (ಸೇಲ್ ಡೀಡ್)', '೧೫ ವರ್ಷಗಳ ಇಸಿ (Encumbrance Certificate)', 'ಇತ್ತೀಚಿನ ಆಸ್ತಿ ತೆರಿಗೆ ರಸೀದಿ', 'ಬೆಸ್ಕಾಂ ವಿದ್ಯುತ್ ಬಿಲ್']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Apply Online on BBMP E-Aasthi Portal', kn: 'ಬಿಬಿಎಂಪಿ ಇ-ಆಸ್ತಿ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಅರ್ಜಿ' },
        description: {
          en: 'Submit sale deed and tax receipts on bbmp.gov.in or at local Assistant Revenue Officer (ARO) office.',
          kn: 'bbmp.gov.in ನಲ್ಲಿ ಅಥವಾ ಸಹಾಯಕ ಕಂದಾಯ ಅಧಿಕಾರಿ (ARO) ಕಚೇರಿಯಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'ARO Digital Verification & PID Allotment', kn: 'ಎಆರ್‌ಒ ಪರಿಶೀಲನೆ & ಪಿಐಡಿ ಸಂಖ್ಯೆ ಹಂಚಿಕೆ' },
        description: {
          en: 'BBMP revenue inspector inspects property and assigns permanent PID number.',
          kn: 'ಕಂದಾಯ ನಿರೀಕ್ಷಕರು ಆಸ್ತಿಯನ್ನು ಪರಿಶೀಲಿಸಿ ಶಾಶ್ವತ ಪಿಐಡಿ ಸಂಖ್ಯೆ ನೀಡುತ್ತಾರೆ.'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Download Digital E-Khata Certificate', kn: 'ಡಿಜಿಟಲ್ ಇ-ಖಾತಾ ಡೌನ್‌ಲೋಡ್' },
        description: {
          en: 'Download QR-verified digital e-Khata certificate accepted by all banks and courts.',
          kn: 'ಕ್ಯೂಆರ್ ಕೋಡ್ ಇರುವ ಅಧಿಕೃತ ಇ-ಖಾತಾ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿಕೊಳ್ಳಿ.'
        }
      }
    ],
    officialPortalUrl: 'https://bbmpeaasthi.karnataka.gov.in/',
    responsibleDepartment: {
      en: 'BBMP Revenue Directorate, Bengaluru',
      kn: 'ಬಿಬಿಎಂಪಿ ಕಂದಾಯ ವಿಭಾಗ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },
  {
    id: 'central-abha-health-id',
    name: {
      en: 'Ayushman Bharat Health Account (ABHA Digital Health Card)',
      kn: 'ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ಡಿಜಿಟಲ್ ಹೆಲ್ತ್ ಅಕೌಂಟ್ (ಆಭಾ ಕಾರ್ಡ್)'
    },
    category: 'certificates_general',
    shortName: 'ABHA Health Card',
    authority: {
      en: 'National Health Authority (NHA), Ministry of Health & Family Welfare, Government of India',
      kn: 'ರಾಷ್ಟ್ರೀಯ ಆರೋಗ್ಯ ಪ್ರಾಧಿಕಾರ (ಎನ್‌ಎಚ್‌ಎ), ಭಾರತ ಸರ್ಕಾರ'
    },
    level: 'central',
    tagline: {
      en: '14-digit universal digital health ID to store and share medical prescriptions, lab reports, and scans securely.',
      kn: 'ವೈದ್ಯಕೀಯ ವರದಿಗಳು, ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಮತ್ತು ಸ್ಕ್ಯಾನ್‌ಗಳನ್ನು ಮೊಬೈಲ್‌ನಲ್ಲೇ ಸುರಕ್ಷಿತವಾಗಿಡಲು ೧೪ ಅಂಕಿಯ ಡಿಜಿಟಲ್ ಕಾರ್ಡ್.'
    },
    description: {
      en: 'ABHA is a 14-digit unique health identifier that links a citizen’s entire medical history across government and private hospitals, allowing doctors to view past prescriptions, lab tests, and vaccination records instantly with the patient’s digital consent.',
      kn: 'ಆಸ್ಪತ್ರೆಗಳಿಗೆ ಹಳೆಯ ಕಾಗದದ ವರದಿಗಳನ್ನು ಹೊತ್ತೊಯ್ಯುವ ತೊಂದರೆ ತಪ್ಪಿಸಲು, ಪ್ರತಿಯೊಬ್ಬ ನಾಗರಿಕನಿಗೂ ೧೪ ಅಂಕಿಯ ವಿಶಿಷ್ಟ ಡಿಜಿಟಲ್ ಹೆಲ್ತ್ ಐಡಿ ನೀಡಲಾಗುತ್ತದೆ. ರೋಗಿಯ ಒಪ್ಪಿಗೆಯೊಂದಿಗೆ ವೈದ್ಯರು ಹಿಂದಿನ ಎಲ್ಲಾ ವೈದ್ಯಕೀಯ ಇತಿಹಾಸವನ್ನು ತಕ್ಷಣವೇ ವೀಕ್ಷಿಸಬಹುದು.'
    },
    benefits: {
      en: [
        'Instant digital access to all lab reports, X-rays, discharge summaries, and prescriptions on your smartphone',
        'Skip long hospital queues at Victoria, Bowring, and NIMHANS by scanning ABHA QR code (Scan & Share)',
        '100% consent-based: No doctor or hospital can view your records without your mobile OTP approval',
        'Universal interoperability across all government and private hospitals nationwide'
      ],
      kn: [
        'ಎಲ್ಲಾ ಲ್ಯಾಬ್ ವರದಿಗಳು, ಎಕ್ಸ್‌ರೇ ಮತ್ತು ಡಿಸ್ಚಾರ್ಜ್ ಸಮ್ಮರಿಗಳು ಮೊಬೈಲ್‌ನಲ್ಲೇ ಲಭ್ಯ',
        'ವಿಕ್ಟೋರಿಯಾ, ಬೌರಿಂಗ್ ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ ಕ್ಯೂಆರ್ ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಸರತಿ ಸಾಲಿನಲ್ಲಿ ನಿಲ್ಲದೆ ಒಪಿಡಿ ಟೋಕನ್ ಪಡೆಯಿರಿ',
        'ಸಂಪೂರ್ಣ ಗೌಪ್ಯತೆ: ನಿಮ್ಮ ಒಟಿಪಿ ಅನುಮೋದನೆ ಇಲ್ಲದೆ ಯಾರೂ ವರದಿ ನೋಡುವಂತಿಲ್ಲ',
        'ದೇಶದ ಯಾವುದೇ ಆಸ್ಪತ್ರೆಯಲ್ಲೂ ಬಳಸಬಹುದಾದ ಡಿಜಿಟಲ್ ಗುರುತು'
      ]
    },
    knownCriteria: {},
    disqualifyingConditions: {
      en: ['None — Open to all Indian citizens of all ages at zero cost'],
      kn: ['ಯಾವುದೇ ವಯಸ್ಸಿನ ಮಿತಿ ಇಲ್ಲ — ಸಂಪೂರ್ಣ ಉಚಿತ']
    },
    requiredDocuments: {
      mandatory: {
        en: ['Aadhaar Card with active mobile number linked for OTP verification'],
        kn: ['ಆಧಾರ್ ಕಾರ್ಡ್ ಮತ್ತು ಮೊಬೈಲ್ ನಂಬರ್']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Visit abha.abdm.gov.in or LifeBridge Link', kn: 'ಆಭಾ ಪೋರ್ಟಲ್‌ಗೆ ಭೇಟಿ ನೀಡಿ' },
        description: {
          en: 'Open abha.abdm.gov.in on smartphone or visit nearest government hospital registration counter.',
          kn: 'abha.abdm.gov.in ನಲ್ಲಿ ಅಥವಾ ಆಸ್ಪತ್ರೆಯ ಕೌಂಟರ್‌ನಲ್ಲಿ ಆಧಾರ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Authenticate with Aadhaar OTP', kn: 'ಆಧಾರ್ ಒಟಿಪಿ ದೃಢೀಕರಣ' },
        description: {
          en: 'Enter 6-digit OTP sent to your Aadhaar-registered mobile phone.',
          kn: 'ಮೊಬೈಲ್‌ಗೆ ಬರುವ ೬ ಅಂಕಿಯ ಒಟಿಪಿ ನಮೂದಿಸಿ.'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Instant Download of 14-Digit ABHA Card', kn: 'ತಕ್ಷಣದ ಆಭಾ ಕಾರ್ಡ್ ಡೌನ್‌ಲೋಡ್' },
        description: {
          en: 'Download your digital health card with photo and QR code directly onto your phone.',
          kn: 'ಕ್ಯೂಆರ್ ಕೋಡ್ ಇರುವ ೧೪ ಅಂಕಿಯ ಡಿಜಿಟಲ್ ಹೆಲ್ತ್ ಕಾರ್ಡ್ ಅನ್ನು ತಕ್ಷಣವೇ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿಕೊಳ್ಳಿ.'
        }
      }
    ],
    officialPortalUrl: 'https://abha.abdm.gov.in/',
    responsibleDepartment: {
      en: 'National Health Authority (NHA), GoI',
      kn: 'ರಾಷ್ಟ್ರೀಯ ಆರೋಗ್ಯ ಪ್ರಾಧಿಕಾರ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  },
  {
    id: 'karnataka-ahara-ration-services',
    name: {
      en: 'Ahara Karnataka Ration Card Management Services',
      kn: 'ಆಹಾರ ಕರ್ನಾಟಕ ಪಡಿತರ ಚೀಟಿ ಸೇವೆಗಳ ಪೋರ್ಟಲ್'
    },
    category: 'certificates_general',
    shortName: 'Ahara Ration Portal',
    authority: {
      en: 'Department of Food, Civil Supplies and Consumer Affairs, Karnataka',
      kn: 'ಆಹಾರ, ನಾಗರಿಕ ಸರಬರಾಜು ಮತ್ತು ಗ್ರಾಹಕರ ವ್ಯವಹಾರಗಳ ಇಲಾಖೆ, ಕರ್ನಾಟಕ'
    },
    level: 'karnataka',
    tagline: {
      en: 'Digital portal for new BPL/APL ration card applications, family member addition, and FPS transfers.',
      kn: 'ಹೊಸ ಬಿಪಿಎಲ್/ಎಪಿಎಲ್ ರೇಷನ್ ಕಾರ್ಡ್ ಅರ್ಜಿ, ಮಗುವಿನ ಹೆಸರು ಸೇರ್ಪಡೆ & ವಿಳಾಸ ಬದಲಾವಣೆ ಸೇವೆಗಳು.'
    },
    description: {
      en: 'Ahara provides unified e-governance services for ration cardholders across Karnataka, enabling online applications for new BPL cards, adding newborns or spouses, updating Aadhaar e-KYC, and changing Fair Price Shop allocations in Bengaluru.',
      kn: 'ಕರ್ನಾಟಕದಲ್ಲಿ ಹೊಸ ಬಿಪಿಎಲ್/ಎಪಿಎಲ್ ಪಡಿತರ ಚೀಟಿಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಲು, ಮದುವೆಯಾದ ಪತ್ನಿ ಅಥವಾ ನವಜಾತ ಶಿಶುವಿನ ಹೆಸರು ಸೇರಿಸಲು, ಪಡಿತರ ಅಂಗಡಿ ಬದಲಾವಣೆ ಮತ್ತು ಇ-ಕೆವೈಸಿ ಮಾಡಲು ಅಧಿಕೃತ ಆಹಾರ ಪೋರ್ಟಲ್.'
    },
    benefits: {
      en: [
        'Complete online citizen portal for adding newborn child or spouse to existing family ration card',
        'Direct check of monthly Anna Bhagya free rice allotment and DBT cash credit status',
        'Interstate & inter-district Fair Price Shop portability (One Nation One Ration Card)',
        'Biometric Aadhaar e-KYC status verification to prevent card cancellation'
      ],
      kn: [
        'ಕುಟುಂಬದ ಪಡಿತರ ಚೀಟಿಗೆ ಮಗು ಅಥವಾ ಪತ್ನಿಯ ಹೆಸರು ಆನ್‌ಲೈನ್‌ನಲ್ಲೇ ಸೇರ್ಪಡೆ',
        'ಅನ್ನಭಾಗ್ಯ ಅಕ್ಕಿ ಮತ್ತು ಡಿಬಿಟಿ ನಗದು ಜಮೆ ಸ್ಥಿತಿ ಪರಿಶೀಲನೆ',
        'ಒಂದು ದೇಶ ಒಂದು ರೇಷನ್ ಕಾರ್ಡ್ ಮೂಲಕ ಅಂಗಡಿ ಬದಲಾವಣೆ ಸೌಲಭ್ಯ',
        'ರದ್ದಾಗದಂತೆ ತಡೆಯಲು ಆಧಾರ್ ಇ-ಕೆವೈಸಿ ಪರಿಶೀಲನೆ'
      ]
    },
    knownCriteria: {
      karnatakaResidentOnly: true
    },
    disqualifyingConditions: {
      en: ['Income tax payers or four-wheeler (car) owners ineligible for BPL cards; eligible for APL cards'],
      kn: ['ಆದಾಯ ತೆರಿಗೆ ಪಾವತಿದಾರರು ಅಥವಾ ಕಾರು ಹೊಂದಿರುವವರು ಬಿಪಿಎಲ್ ಕಾರ್ಡ್‌ಗೆ ಅನರ್ಹರು (ಎಪಿಎಲ್ ಪಡೆಯಬಹುದು)']
    },
    requiredDocuments: {
      mandatory: {
        en: ['Aadhaar Card of all family members', 'Birth Certificate (for adding child)', 'Marriage Certificate (for adding spouse)'],
        kn: ['ಕುಟುಂಬದ ಸದಸ್ಯರ ಆಧಾರ್ ಕಾರ್ಡ್', 'ಮಗುವಿನ ಜನನ ಪ್ರಮಾಣಪತ್ರ', 'ವಿವಾಹ ನೋಂದಣಿ ಪತ್ರ']
      },
      conditional: { en: [], kn: [] },
      toConfirm: { en: [], kn: [] }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Visit ahara.kar.nic.in or Bangalore One', kn: 'ಆಹಾರ ಪೋರ್ಟಲ್ ಅಥವಾ ಬೆಂಗಳೂರು ಒನ್‌ಗೆ ಭೇಟಿ ನೀಡಿ' },
        description: {
          en: 'Go to E-Services tab on ahara.kar.nic.in and select "Amendment Request".',
          kn: 'ahara.kar.nic.in ನ ಇ-ಸೇವೆಗಳ ವಿಭಾಗದಲ್ಲಿ "ತಿದ್ದುಪಡಿ ಕೋರಿಕೆ" ಆಯ್ಕೆ ಮಾಡಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Upload Birth / Marriage Certificate', kn: 'ದಾಖಲೆಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ' },
        description: {
          en: 'Enter ration card number, verify OTP, and upload birth/marriage certificate.',
          kn: 'ಪಡಿತರ ಚೀಟಿ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ ಜನನ ಅಥವಾ ವಿವಾಹ ಪ್ರಮಾಣಪತ್ರ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Food Inspector Digital Approval', kn: 'ಆಹಾರ ನಿರೀಕ್ಷಕರ ಅನುಮೋದನೆ' },
        description: {
          en: 'Ward Food Inspector approves inclusion and updated RC printout is available online.',
          kn: 'ಆಹಾರ ನಿರೀಕ್ಷಕರು ಪರಿಶೀಲಿಸಿ ಅನುಮೋದಿಸಿದ ತಕ್ಷಣ ಹೊಸ ರೇಷನ್ ಕಾರ್ಡ್ ಮುದ್ರಿಸಿಕೊಳ್ಳಬಹುದು.'
        }
      }
    ],
    officialPortalUrl: 'https://ahara.kar.nic.in/',
    responsibleDepartment: {
      en: 'Department of Food and Civil Supplies, Karnataka',
      kn: 'ಆಹಾರ ಮತ್ತು ನಾಗರಿಕ ಸರಬರಾಜು ಇಲಾಖೆ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01'
  }
];
