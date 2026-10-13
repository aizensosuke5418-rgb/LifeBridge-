import { Scheme } from '../types';

export const SCHEMES_DATABASE: Scheme[] = [
  {
    id: 'karnataka-gruha-lakshmi',
    name: {
      en: 'Gruha Lakshmi Scheme',
      kn: 'ಗೃಹಲಕ್ಷ್ಮಿ ಯೋಜನೆ'
    },
    shortName: 'Gruha Lakshmi',
    authority: {
      en: 'Department of Women & Child Development, Government of Karnataka',
      kn: 'ಮಹಿಳಾ ಮತ್ತು ಮಕ್ಕಳ ಅಭಿವೃದ್ಧಿ ಇಲಾಖೆ, ಕರ್ನಾಟಕ ಸರ್ಕಾರ'
    },
    level: 'karnataka',
    category: 'women_child',
    tagline: {
      en: 'Direct monthly financial assistance of ₹2,000 for female heads of families in Karnataka.',
      kn: 'ಕರ್ನಾಟಕದ ಕುಟುಂಬದ ಯಜಮಾನಿ ಮಹಿಳೆಗೆ ಮಾಸಿಕ ₹2,000 ನೇರ ಆರ್ಥಿಕ ನೆರವು.'
    },
    description: {
      en: 'Gruha Lakshmi provides ₹2,000 monthly direct benefit transfer (DBT) into the Aadhaar-linked bank accounts of verified woman heads of eligible households holding Antyodaya (AAY), BPL, or APL ration cards in Karnataka.',
      kn: 'ಕರ್ನಾಟಕದಲ್ಲಿ ಅಂತ್ಯೋದಯ, ಬಿಪಿಎಲ್ ಅಥವಾ ಎಪಿಎಲ್ ಪಡಿತರ ಚೀಟಿ ಹೊಂದಿರುವ ಕುಟುಂಬಗಳ ಮುಖ್ಯಸ್ಥೆ ಮಹಿಳೆಯರ ಆಧಾರ್ ಜೋಡಿತ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಪ್ರತಿ ತಿಂಗಳು ₹2,000 ನೇರ ನಗದು ವರ್ಗಾವಣೆ ಒದಗಿಸುತ್ತದೆ.'
    },
    benefits: {
      en: [
        'Monthly financial support of ₹2,000 directly deposited to bank account (DBT)',
        'Lifelong economic dignity for homemakers and women heads of family',
        'No registration fee at authorized government Grama One, Karnataka One, or B1 centres'
      ],
      kn: [
        'ಪ್ರತಿ ತಿಂಗಳು ₹2,000 ನೇರವಾಗಿ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಜಮೆ (ಡಿಬಿಟಿ)',
        'ಮನೆ ಮುಖ್ಯಸ್ಥೆ ಮಹಿಳೆಯರಿಗೆ ಆರ್ಥಿಕ ಭದ್ರತೆ ಮತ್ತು ಸ್ವಾವಲಂಬನೆ',
        'ಗ್ರಾಮ ಒನ್, ಕರ್ನಾಟಕ ಒನ್ ಮತ್ತು ಬೆಂಗಳೂರು ಒನ್ ಕೇಂದ್ರಗಳಲ್ಲಿ ಉಚಿತ ನೋಂದಣಿ'
      ]
    },
    knownCriteria: {
      gender: 'female',
      minAge: 18,
      karnatakaResidentOnly: true,
      rationCards: ['AAY', 'BPL', 'APL'],
      maternalSupport: false,
      maxAnnualIncome: 400000 // Ineligible if taxpayer or GST payer
    },
    disqualifyingConditions: {
      en: [
        'Woman or her husband is a taxpayer (income tax payees are ineligible)',
        'Woman or husband files GST returns',
        'Applicant is not listed as the head of family in the official Food & Civil Supplies ration database'
      ],
      kn: [
        'ಅರ್ಜಿದಾರ ಮಹಿಳೆ ಅಥವಾ ಆಕೆಯ ಪತಿ ಆದಾಯ ತೆರಿಗೆ ಪಾವತಿದಾರರಾಗಿದ್ದರೆ ಅನ್ವಯಿಸುವುದಿಲ್ಲ',
        'ಮಹಿಳೆ ಅಥವಾ ಪತಿ ಜಿಎಸ್‌ಟಿ ರಿಟರ್ನ್ ಸಲ್ಲಿಸುವವರಾಗಿದ್ದರೆ ಅನರ್ಹರು',
        'ಆಹಾರ ಇಲಾಖೆಯ ಪಡಿತರ ಚೀಟಿಯಲ್ಲಿ ಕುಟುಂಬದ ಮುಖ್ಯಸ್ಥೆ (ಯಜಮಾನಿ) ಎಂದು ನಮೂದಾಗಿರದಿದ್ದರೆ'
      ]
    },
    requiredDocuments: {
      mandatory: {
        en: ['Ration Card (RC number)', 'Aadhaar Card of the woman head', 'Aadhaar Card of the husband', 'Aadhaar-linked Bank Passbook'],
        kn: ['ಪಡಿತರ ಚೀಟಿ (ಆರ್‌ಸಿ ಸಂಖ್ಯೆ)', 'ಮನೆ ಮುಖ್ಯಸ್ಥೆಯ ಆಧಾರ್ ಕಾರ್ಡ್', 'ಪತಿಯ ಆಧಾರ್ ಕಾರ್ಡ್', 'ಆಧಾರ್ ಲಿಂಕ್ ಆಗಿರುವ ಬ್ಯಾಂಕ್ ಖಾತೆ ವಿವರ']
      },
      conditional: {
        en: ['Mobile number linked with Aadhaar for OTP verification'],
        kn: ['ಆಧಾರ್ ಲಿಂಕ್ ಆಗಿರುವ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ']
      },
      toConfirm: {
        en: ['NPCI bank mapping status (ensure DBT is enabled on your bank account)'],
        kn: ['ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಎನ್‌ಪಿಸಿಐ (ಡಿಬಿಟಿ) ಮ್ಯಾಪಿಂಗ್ ಸಕ್ರಿಯವಾಗಿದೆಯೇ ಎಂದು ದೃಢಪಡಿಸಿ']
      }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Verify Family Head on Ration Card', kn: 'ಪಡಿತರ ಚೀಟಿಯಲ್ಲಿ ಕುಟುಂಬದ ಮುಖ್ಯಸ್ಥೆ ಪರಿಶೀಲಿಸಿ' },
        description: {
          en: 'Check your ration card on ahara.karnataka.gov.in to confirm you are designated as the female head of the family.',
          kn: 'ಆಹಾರ ಇಲಾಖೆ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ನಿಮ್ಮ ಹೆಸರು ಕುಟುಂಬದ ಯಜಮಾನಿ ಎಂದು ದಾಖಲಾಗಿರುವುದನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Visit Authorized Centre or Seva Sindhu', kn: 'ಅಧಿಕೃತ ಕೇಂದ್ರ ಅಥವಾ ಸೇವಾ ಸಿಂಧುಗೆ ಭೇಟಿ ನೀಡಿ' },
        description: {
          en: 'Visit your nearest Grama One, Karnataka One, Bangalore One, or Bapuji Seva Kendra with original Aadhaar and ration card.',
          kn: 'ಗ್ರಾಮ ಒನ್, ಕರ್ನಾಟಕ ಒನ್ ಅಥವಾ ಬೆಂಗಳೂರು ಒನ್ ಕೇಂದ್ರಕ್ಕೆ ನಿಮ್ಮ ಮೂಲ ಆಧಾರ್ ಮತ್ತು ರೇಷನ್ ಕಾರ್ಡ್ ತೆಗೆದುಕೊಂಡು ಹೋಗಿ.'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Submit Details & Collect Acknowledgement', kn: 'ವಿವರ ಸಲ್ಲಿಸಿ ಸ್ವೀಕೃತಿ ರಶೀದಿ ಪಡೆಯಿರಿ' },
        description: {
          en: 'The operator will enter your RC number and generate the official application slip with an application reference number. Registration is free.',
          kn: 'ಆಪರೇಟರ್ ರೇಷನ್ ಕಾರ್ಡ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ ಉಚಿತವಾಗಿ ನೋಂದಾಯಿಸಿ ಅರ್ಜಿ ಸಂಖ್ಯೆಯ ರಸೀದಿ ನೀಡುತ್ತಾರೆ.'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Verify DBT / NPCI Mapping at Bank', kn: 'ಬ್ಯಾಂಕಿನಲ್ಲಿ ಡಿಬಿಟಿ ಸಕ್ರಿಯಗೊಳಿಸಿಕೊಳ್ಳಿ' },
        description: {
          en: 'Visit your bank branch to ensure your Aadhaar is actively seeded with NPCI for DBT credit of ₹2,000.',
          kn: 'ಪ್ರತಿ ತಿಂಗಳು ₹2,000 ಹಣ ನೇರವಾಗಿ ಜಮೆಯಾಗಲು ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಆಧಾರ್-ಡಿಬಿಟಿ ಸಕ್ರಿಯವಾಗಿರಬೇಕು.'
        }
      }
    ],
    officialPortalUrl: 'https://sevasindhugs.karnataka.gov.in/',
    officialGuidelineUrl: 'https://sevasindhu.karnataka.gov.in/',
    officialStatusCheckUrl: 'https://ahara.karnataka.gov.in/',
    responsibleDepartment: {
      en: 'Women and Child Development Department, Govt of Karnataka',
      kn: 'ಮಹಿಳಾ ಮತ್ತು ಮಕ್ಕಳ ಅಭಿವೃದ್ಧಿ ಇಲಾಖೆ, ಕರ್ನಾಟಕ ಸರ್ಕಾರ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-15',
    deadlineNote: {
      en: 'Continuous enrollment open throughout the year.',
      kn: 'ವರ್ಷಪೂರ್ತಿ ನಿರಂತರ ನೋಂದಣಿ ಮುಕ್ತವಾಗಿದೆ.'
    }
  },
  {
    id: 'karnataka-gruha-jyothi',
    name: {
      en: 'Gruha Jyothi Scheme',
      kn: 'ಗೃಹಜ್ಯೋತಿ ಯೋಜನೆ'
    },
    shortName: 'Gruha Jyothi',
    authority: {
      en: 'Energy Department, Government of Karnataka (BESCOM / MESCOM / HESCOM / GESCOM / CHESCOM)',
      kn: 'ಇಂಧನ ಇಲಾಖೆ, ಕರ್ನಾಟಕ ಸರ್ಕಾರ (ಬೆಸ್ಕಾಂ / ಮೆಸ್ಕಾಂ / ಹೆಸ್ಕಾಂ / ಜೆಸ್ಕಾಂ / ಚೆಸ್ಕಾಂ)'
    },
    level: 'karnataka',
    category: 'housing_utility',
    tagline: {
      en: 'Up to 200 units of free electricity per month for domestic households in Karnataka.',
      kn: 'ಕರ್ನಾಟಕದ ಗೃಹಬಳಕೆದಾರರಿಗೆ ಪ್ರತಿ ತಿಂಗಳು 200 ಯೂನಿಟ್‌ವರೆಗೆ ಉಚಿತ ವಿದ್ಯುತ್.'
    },
    description: {
      en: 'Gruha Jyothi provides zero electricity bills up to 200 monthly units for domestic consumers in Karnataka, calculated based on the households prior 12-month average consumption plus a 10% buffer.',
      kn: 'ಗೃಹಬಳಕೆ ಗ್ರಾಹಕರಿಗೆ ಹಿಂದಿನ 12 ತಿಂಗಳ ಸರಾಸರಿ ಬಳಕೆಯ ಮೇಲೆ ಶೇ.10 ಹೆಚ್ಚುವರಿ ಸೇರಿಸಿ, ತಿಂಗಳಿಗೆ ಗರಿಷ್ಠ 200 ಯೂನಿಟ್‌ವರೆಗೆ ಉಚಿತ ವಿದ್ಯುತ್ ನೀಡುವ ಯೋಜನೆ.'
    },
    benefits: {
      en: [
        'Zero-amount electricity bills for consumption within entitlement limit',
        'Maximum entitlement up to 200 units/month',
        'Applies to both homeowners and tenants living in Karnataka'
      ],
      kn: [
        'ನಿಗದಿತ ಮಿತಿಯೊಳಗೆ ವಿದ್ಯುತ್ ಬಳಸಿದರೆ ಶೂನ್ಯ ಮೊತ್ತದ (ಉಚಿತ) ಬಿಲ್',
        'ತಿಂಗಳಿಗೆ ಗರಿಷ್ಠ 200 ಯೂನಿಟ್‌ವರೆಗೆ ಪ್ರಯೋಜನ',
        'ಸ್ವಂತ ಮನೆ ಹಾಗೂ ಬಾಡಿಗೆ ಮನೆಯಲ್ಲಿರುವ ಇಬ್ಬರಿಗೂ ಅನ್ವಯಿಸುತ್ತದೆ'
      ]
    },
    knownCriteria: {
      karnatakaResidentOnly: true
    },
    disqualifyingConditions: {
      en: [
        'Commercial, industrial, or non-domestic electricity connections',
        'Monthly consumption exceeding 200 units (consumers pay the excess or standard tariff depending on slab rules)',
        'Multiple meters linked to a single Aadhaar number'
      ],
      kn: [
        'ವಾಣಿಜ್ಯ, ಕೈಗಾರಿಕಾ ಅಥವಾ ಕೃಷಿ ಪಂಪ್‌ಸೆಟ್ ವಿದ್ಯುತ್ ಮೀಟರ್‌ಗಳಿಗೆ ಅನ್ವಯಿಸುವುದಿಲ್ಲ',
        'ತಿಂಗಳಲ್ಲಿ 200 ಯೂನಿಟ್‌ಗಿಂತ ಹೆಚ್ಚು ಬಳಕೆ ಮಾಡಿದರೆ',
        'ಒಂದೇ ಆಧಾರ್ ಸಂಖ್ಯೆಗೆ ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು ಮೀಟರ್ ಲಿಂಕ್ ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ'
      ]
    },
    requiredDocuments: {
      mandatory: {
        en: ['Electricity Account ID / Consumer Connection Number', 'Aadhaar Card of the applicant', 'Rental agreement or voter ID (if living in a rented house)'],
        kn: ['ವಿದ್ಯುತ್ ಖಾತೆ ಐಡಿ (ಕನ್ಸ್ಯೂಮರ್ ಐಡಿ)', 'ಅರ್ಜಿದಾರರ ಆಧಾರ್ ಕಾರ್ಡ್', 'ಬಾಡಿಗೆ ಮನೆಯಾಗಿದ್ದರೆ ಬಾಡಿಗೆ ಒಪ್ಪಂದ ಪತ್ರ ಅಥವಾ ವಿಳಾಸ ಪುರಾವೆ']
      },
      conditional: {
        en: ['Active mobile number to receive confirmation SMS'],
        kn: ['ದೃಢೀಕರಣ ಸಂದೇಶ ಪಡೆಯಲು ಚಾಲ್ತಿಯಲ್ಲಿರುವ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ']
      },
      toConfirm: {
        en: ['Confirm ESCOM consumer ID matches your monthly physical electricity bill'],
        kn: ['ಮಾಸಿಕ ವಿದ್ಯುತ್ ಬಿಲ್‌ನಲ್ಲಿರುವ ಅಕೌಂಟ್ ಐಡಿ ಪರಿಶೀಲಿಸಿ']
      }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Find Your Electricity Account ID', kn: 'ವಿದ್ಯುತ್ ಖಾತೆ ಐಡಿ ಪಡೆದುಕೊಳ್ಳಿ' },
        description: {
          en: 'Locate the 10-digit Account ID printed on your monthly BESCOM or local ESCOM bill.',
          kn: 'ನಿಮ್ಮ ಮಾಸಿಕ ವಿದ್ಯುತ್ ಬಿಲ್‌ನಲ್ಲಿ ಮುದ್ರಿಸಲಾದ 10 ಅಂಕಿಯ ಖಾತೆ ಐಡಿ (Account ID) ಅನ್ನು ನೋಡಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Apply Online via Seva Sindhu', kn: 'ಸೇವಾ ಸಿಂಧು ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ' },
        description: {
          en: 'Visit sevasindhugs.karnataka.gov.in and click Gruha Jyothi Registration. Enter your Account ID, Aadhaar number, and select owner or tenant.',
          kn: 'sevasindhugs.karnataka.gov.in ಗೆ ಭೇಟಿ ನೀಡಿ, ಖಾತೆ ಐಡಿ ಮತ್ತು ಆಧಾರ್ ನಮೂದಿಸಿ ಮಾಲೀಕ/ಬಾಡಿಗೆದಾರ ಎಂದು ಆಯ್ಕೆಮಾಡಿ.'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Verify Aadhaar via OTP', kn: 'ಆಧಾರ್ ಒಟಿಪಿ ದೃಢೀಕರಿಸಿ' },
        description: {
          en: 'Authenticate with the OTP sent to your Aadhaar-registered mobile number and submit.',
          kn: 'ಆಧಾರ್ ಲಿಂಕ್ಡ್ ಮೊಬೈಲ್‌ಗೆ ಬರುವ ಒಟಿಪಿ ನಮೂದಿಸಿ ಅರ್ಜಿಯನ್ನು ಅಂತಿಮಗೊಳಿಸಿ.'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Check Next Month Bill for Subsidy', kn: 'ಮುಂದಿನ ತಿಂಗಳ ಬಿಲ್‌ನಲ್ಲಿ ರಿಯಾಯಿತಿ ಪರಿಶೀಲಿಸಿ' },
        description: {
          en: 'From the subsequent billing cycle, your entitlement units will appear as subsidized deduction on the bill.',
          kn: 'ಮುಂದಿನ ಬಿಲ್ಲಿಂಗ್ ಸೈಕಲ್‌ನಿಂದ ನಿಮ್ಮ ಬಿಲ್‌ನಲ್ಲಿ ಸಬ್ಸಿಡಿ ಕಡಿತವಾಗಿ ಶೂನ್ಯ ಬಿಲ್ ಬರುತ್ತದೆ.'
        }
      }
    ],
    officialPortalUrl: 'https://sevasindhugs.karnataka.gov.in/',
    officialGuidelineUrl: 'https://energy.karnataka.gov.in/',
    officialStatusCheckUrl: 'https://sevasindhugs.karnataka.gov.in/',
    responsibleDepartment: {
      en: 'Energy Department, Govt of Karnataka',
      kn: 'ಇಂಧನ ಇಲಾಖೆ, ಕರ್ನಾಟಕ ಸರ್ಕಾರ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-07-20',
    deadlineNote: {
      en: 'Open continuous enrollment. Takes effect from following billing cycle.',
      kn: 'ನಿರಂತರ ನೋಂದಣಿ ಚಾಲ್ತಿಯಲ್ಲಿದೆ. ಅರ್ಜಿ ಸಲ್ಲಿಸಿದ ಮುಂದಿನ ತಿಂಗಳ ಬಿಲ್‌ನಿಂದ ಜಾರಿಯಾಗುತ್ತದೆ.'
    }
  },
  {
    id: 'karnataka-anna-bhagya',
    name: {
      en: 'Anna Bhagya Scheme',
      kn: 'ಅನ್ನಭಾಗ್ಯ ಯೋಜನೆ'
    },
    shortName: 'Anna Bhagya',
    authority: {
      en: 'Department of Food, Civil Supplies and Consumer Affairs, Karnataka',
      kn: 'ಆಹಾರ, ನಾಗರಿಕ ಸರಬರಾಜು ಮತ್ತು ಗ್ರಾಹಕರ ವ್ಯವಹಾರಗಳ ಇಲಾಖೆ, ಕರ್ನಾಟಕ'
    },
    level: 'karnataka',
    category: 'food_ration',
    tagline: {
      en: '10 kg food grains per person per month (5 kg free grains + 5 kg DBT cash equivalent) for BPL & Antyodaya families.',
      kn: 'ಬಿಪಿಎಲ್ ಮತ್ತು ಅಂತ್ಯೋದಯ ಕುಟುಂಬಗಳ ಪ್ರತಿ ಸದಸ್ಯರಿಗೆ ತಿಂಗಳಿಗೆ 10 ಕೆಜಿ ಆಹಾರ ಧಾನ್ಯ (5 ಕೆಜಿ ಉಚಿತ ಧಾನ್ಯ + 5 ಕೆಜಿ ನಗದು ಡಿಬಿಟಿ).'
    },
    description: {
      en: 'Anna Bhagya guarantees food security by providing 5 kg of free rice via NFSA and direct cash transfer at ₹34 per kg for the additional 5 kg entitlement directly to the head of the family bank account.',
      kn: 'ಕರ್ನಾಟಕ ಸರ್ಕಾರವು ಬಡತನ ರೇಖೆಗಿಂತ ಕೆಳಗಿರುವ ಕುಟುಂಬಗಳಿಗೆ ಕೇಂದ್ರದ 5 ಕೆಜಿ ಉಚಿತ ಅಕ್ಕಿಯೊಂದಿಗೆ ಹೆಚ್ಚುವರಿ 5 ಕೆಜಿ ಅಕ್ಕಿಗೆ ಪ್ರತಿ ಕೆಜಿಗೆ ₹34 ರಂತೆ ನೇರ ನಗದು ವರ್ಗಾವಣೆ (ಡಿಬಿಟಿ) ನೀಡುತ್ತದೆ.'
    },
    benefits: {
      en: [
        '10 kg total food grain entitlement per person in eligible BPL/AAY card',
        'Direct cash transfer of ₹170/month per member (₹34/kg x 5kg) to bank account',
        'Distributed via Fair Price Shops (FPS) across all taluks in Karnataka'
      ],
      kn: [
        'ಅರ್ಹ ಬಿಪಿಎಲ್/ಅಂತ್ಯೋದಯ ಕಾರ್ಡ್‌ನ ಪ್ರತಿ ಸದಸ್ಯರಿಗೆ ಒಟ್ಟು 10 ಕೆಜಿ ಧಾನ್ಯದ ಸವಲತ್ತು',
        'ಹೆಚ್ಚುವರಿ 5 ಕೆಜಿಗೆ ಪ್ರತಿ ಸದಸ್ಯರಿಗೆ ತಿಂಗಳಿಗೆ ₹170 ನಗದು ನೇರ ಜಮೆ',
        'ರಾಜ್ಯದ ಎಲ್ಲಾ ನ್ಯಾಯಬೆಲೆ ಅಂಗಡಿಗಳ (ರೇಷನ್ ಶಾಪ್) ಮೂಲಕ ವಿತರಣೆ'
      ]
    },
    knownCriteria: {
      karnatakaResidentOnly: true,
      rationCards: ['AAY', 'BPL']
    },
    disqualifyingConditions: {
      en: [
        'APL (Above Poverty Line) ration cardholders',
        'Holders of Non-Priority Household (NPHH) cards',
        'Bank accounts without NPCI/Aadhaar seeding'
      ],
      kn: [
        'ಎಪಿಎಲ್ (ಬಡತನ ರೇಖೆಗಿಂತ ಮೇಲಿರುವ) ರೇಷನ್ ಕಾರ್ಡ್ ಹೊಂದಿರುವವರು',
        'ಆಧಾರ್ ಮತ್ತು ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಡಿಬಿಟಿ ಜೋಡಣೆ ಆಗದಿದ್ದರೆ ನಗದು ಜಮೆಯಾಗುವುದಿಲ್ಲ'
      ]
    },
    requiredDocuments: {
      mandatory: {
        en: ['Valid Karnataka BPL or Antyodaya (AAY) Ration Card', 'Aadhaar cards of all family members in the ration card', 'Aadhaar-seeded active bank account of the woman head'],
        kn: ['ಚಾಲ್ತಿಯಲ್ಲಿರುವ ಕರ್ನಾಟಕ ಬಿಪಿಎಲ್ ಅಥವಾ ಅಂತ್ಯೋದಯ ಪಡಿತರ ಚೀಟಿ', 'ಕಾರ್ಡ್‌ನಲ್ಲಿರುವ ಎಲ್ಲಾ ಸದಸ್ಯರ ಆಧಾರ್ ಸಂಖ್ಯೆ', 'ಮನೆ ಯಜಮಾನಿಯ ಆಧಾರ್ ಲಿಂಕ್ಡ್ ಬ್ಯಾಂಕ್ ಖಾತೆ']
      },
      conditional: {
        en: ['e-KYC biometric update at fair price shop (if pending)'],
        kn: ['ಪಡಿತರ ಅಂಗಡಿಯಲ್ಲಿ ಬಯೋಮೆಟ್ರಿಕ್ ಇ-ಕೆವೈಸಿ ಬಾಕಿ ಇದ್ದರೆ ಪೂರ್ಣಗೊಳಿಸಬೇಕು']
      },
      toConfirm: {
        en: ['Check DBT status on ahara.karnataka.gov.in DBT Status portal'],
        kn: ['ಆಹಾರ ಇಲಾಖೆಯ ಡಿಬಿಟಿ ಸ್ಟೇಟಸ್ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಜಮೆ ಸ್ಥಿತಿ ಪರಿಶೀಲಿಸಿ']
      }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Obtain or Verify BPL/AAY Ration Card', kn: 'ಬಿಪಿಎಲ್/ಅಂತ್ಯೋದಯ ಕಾರ್ಡ್ ಖಚಿತಪಡಿಸಿ' },
        description: {
          en: 'Ensure your household has an active BPL (Priority Household) or Antyodaya card on ahara.karnataka.gov.in.',
          kn: 'ahara.karnataka.gov.in ನಲ್ಲಿ ನಿಮ್ಮ ಪಡಿತರ ಚೀಟಿ ಸಕ್ರಿಯವಾಗಿದೆಯೇ ಎಂದು ನೋಡಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Complete e-KYC of All Members', kn: 'ಎಲ್ಲಾ ಸದಸ್ಯರ ಇ-ಕೆವೈಸಿ ಪೂರ್ಣಗೊಳಿಸಿ' },
        description: {
          en: 'Visit your assigned Fair Price Shop (FPS) and authenticate fingerprints for all listed family members.',
          kn: 'ನಿಮ್ಮ ನ್ಯಾಯಬೆಲೆ ಅಂಗಡಿಗೆ ತೆರಳಿ ಎಲ್ಲಾ ಸದಸ್ಯರ ಬೆರಳಚ್ಚು ಇ-ಕೆವೈಸಿ ಮಾಡಿಸಿ.'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Collect Free Monthly Grains', kn: 'ಮಾಸಿಕ ಉಚಿತ ರೇಷನ್ ಪಡೆದುಕೊಳ್ಳಿ' },
        description: {
          en: 'Collect your allocated 5kg rice per member at your local fair price ration shop using OTP or biometric verification.',
          kn: 'ಸ್ಥಳೀಯ ರೇಷನ್ ಅಂಗಡಿಯಲ್ಲಿ ಬಯೋಮೆಟ್ರಿಕ್ ಕೊಟ್ಟು ಉಚಿತ 5 ಕೆಜಿ ಅಕ್ಕಿ ಪಡೆದುಕೊಳ್ಳಿ.'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Track Direct Benefit Cash Transfer', kn: 'ಖಾತೆಗೆ ಜಮೆಯಾಗುವ ನಗದು ವಿವರ ನೋಡಿ' },
        description: {
          en: 'Check your bank SMS or Ahara Karnataka DBT portal for the ₹170 per member monthly allowance deposit.',
          kn: 'ಪ್ರತಿ ಸದಸ್ಯರಿಗೆ ಜಮೆಯಾಗುವ ₹170 ನಗದು ವಿವರವನ್ನು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿ.'
        }
      }
    ],
    officialPortalUrl: 'https://ahara.karnataka.gov.in/',
    officialGuidelineUrl: 'https://ahara.karnataka.gov.in/Home/AnnaBhagya',
    officialStatusCheckUrl: 'https://ahara.karnataka.gov.in/status_dbt',
    responsibleDepartment: {
      en: 'Food, Civil Supplies & Consumer Affairs Dept, Karnataka',
      kn: 'ಆಹಾರ ಮತ್ತು ನಾಗರಿಕ ಸರಬರಾಜು ಇಲಾಖೆ, ಕರ್ನಾಟಕ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-09-01',
    deadlineNote: {
      en: 'Active ongoing benefit; rations distributed monthly.',
      kn: 'ಪ್ರತಿ ತಿಂಗಳು ನ್ಯಾಯಬೆಲೆ ಅಂಗಡಿಗಳಲ್ಲಿ ನಿರಂತರ ವಿತರಣೆ.'
    }
  },
  {
    id: 'karnataka-ssp-scholarship',
    name: {
      en: 'Karnataka State Scholarship Portal (SSP)',
      kn: 'ರಾಜ್ಯ ವಿದ್ಯಾರ್ಥಿವೇತನ ತಂತ್ರಾಂಶ (SSP)'
    },
    shortName: 'SSP Karnataka',
    authority: {
      en: 'Social Welfare, Tribal, Backward Classes & Minority Welfare Departments, Karnataka',
      kn: 'ಸಮಾಜ ಕಲ್ಯಾಣ, ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಮತ್ತು ಅಲ್ಪಸಂಖ್ಯಾತರ ಕಲ್ಯಾಣ ಇಲಾಖೆ, ಕರ್ನಾಟಕ'
    },
    level: 'karnataka',
    category: 'education_scholarship',
    tagline: {
      en: 'Unified single-window portal for Pre-Matric, Post-Matric and Fee Reimbursement scholarships in Karnataka.',
      kn: 'ಕರ್ನಾಟಕದ ಮೆಟ್ರಿಕ್ ಪೂರ್ವ, ಮೆಟ್ರಿಕ್ ನಂತರದ ಮತ್ತು ಶುಲ್ಕ ಮರುಪಾವತಿ ವಿದ್ಯಾರ್ಥಿವೇತನದ ಏಕ ಗವಾಕ್ಷಿ ಪೋರ್ಟಲ್.'
    },
    description: {
      en: 'SSP Karnataka provides end-to-end scholarship discovery, application, and direct disbursement for SC, ST, OBC, EWS, Minority, and General students studying in schools, PUC, ITI, Diplomas, Degrees, and Professional courses across Karnataka.',
      kn: 'ಎಸ್‌ಎಸ್‌ಪಿ ಕರ್ನಾಟಕವು ರಾಜ್ಯದಲ್ಲಿ ಶಾಲಾ, ಪಿಯುಸಿ, ಐಟಿಐ, ಡಿಪ್ಲೋಮಾ, ಪದವಿ ಮತ್ತು ವೃತ್ತಿಪರ ಕೋರ್ಸ್‌ಗಳನ್ನು ಕಲಿಯುತ್ತಿರುವ ಎಸ್‌ಸಿ, ಎಸ್‌ಟಿ, ಹಿಂದುಳಿದ ವರ್ಗ ಹಾಗೂ ಅಲ್ಪಸಂಖ್ಯಾತ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ವಿದ್ಯಾರ್ಥಿವೇತನ ನೀಡುತ್ತದೆ.'
    },
    benefits: {
      en: [
        'Post-Matric scholarship covering tuition fees and maintenance allowance',
        'Fee reimbursement directly paid to approved educational institutions',
        'Food and accommodation stipend (Vidyasiri) for eligible hostel applicants',
        'Merit-cum-means awards for high-achieving students'
      ],
      kn: [
        'ಬೋಧನಾ ಶುಲ್ಕ ಮತ್ತು ನಿರ್ವಹಣಾ ವೆಚ್ಚವನ್ನು ಒಳಗೊಂಡ ಮೆಟ್ರಿಕ್ ನಂತರದ ವಿದ್ಯಾರ್ಥಿವೇತನ',
        'ಕಾಲೇಜುಗಳಿಗೆ ನೇರ ಶುಲ್ಕ ಮರುಪಾವತಿ ಸೌಲಭ್ಯ',
        'ವಿದ್ಯಾಸಿರಿ ಅಡಿ ಊಟ ಮತ್ತು ವಸತಿ ಭತ್ಯೆ',
        'ಪ್ರತಿಭಾವಂತ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಮೆರಿಟ್ ಪುರಸ್ಕಾರ'
      ]
    },
    knownCriteria: {
      karnatakaResidentOnly: true,
      studentStatus: true,
      educationLevels: ['school', 'puc', 'degree', 'diploma', 'postgrad'],
      maxAnnualIncome: 250000 // Standard OBC cap ₹2.5L; SC/ST ₹2.5L-10L category dependent
    },
    disqualifyingConditions: {
      en: [
        'Non-Karnataka residents studying outside without state domicile',
        'Household income exceeding department-specified category threshold',
        'Student already receiving another full government scholarship for the same academic year'
      ],
      kn: [
        'ಕರ್ನಾಟಕದ ಮೂಲ ನಿವಾಸಿಯಾಗಿರದ ವಿದ್ಯಾರ್ಥಿಗಳು',
        'ನಿಗದಿತ ಮಿತಿಗಿಂತ ಹೆಚ್ಚಿನ ಕುಟುಂಬದ ವಾರ್ಷಿಕ ಆದಾಯವಿದ್ದರೆ',
        'ಅದೇ ಶೈಕ್ಷಣಿಕ ವರ್ಷದಲ್ಲಿ ಬೇರೆ ಪೂರ್ಣ ಸರ್ಕಾರಿ ವಿದ್ಯಾರ್ಥಿವೇತನ ಪಡೆಯುತ್ತಿದ್ದರೆ'
      ]
    },
    requiredDocuments: {
      mandatory: {
        en: ['Student SATS ID (for school/PUC) or University Reg No', 'Aadhaar Card of the student', 'Caste and Income Certificate (RD number from Nadakacheri)', 'Fee Receipt / College Admission Acknowledgement', 'Aadhaar-linked Bank Account Passbook'],
        kn: ['ವಿದ್ಯಾರ್ಥಿ ಸ್ಯಾಟ್ಸ್ (SATS) ಸಂಖ್ಯೆ / ವಿಶ್ವವಿದ್ಯಾಲಯ ನೋಂದಣಿ ಸಂಖ್ಯೆ', 'ವಿದ್ಯಾರ್ಥಿಯ ಆಧಾರ್ ಕಾರ್ಡ್', 'ನಾಡಕಚೇರಿ ಆರ್‌ಡಿ ಸಂಖ್ಯೆಯುಳ್ಳ ಜಾತಿ ಮತ್ತು ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ', 'ಕಾಲೇಜು ಪ್ರವೇಶ ರಶೀದಿ', 'ಆಧಾರ್ ಲಿಂಕ್ ಆದ ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್']
      },
      conditional: {
        en: ['Hostel admission certificate for Vidyasiri stipend', 'Disability certificate (UDID) if claiming Divyangjan quota'],
        kn: ['ಹಾಸ್ಟೆಲ್ ಪ್ರವೇಶ ಪತ್ರ (ವಿದ್ಯಾಸಿರಿ ಬಯಸಿದರೆ)', 'ಅಂಗವಿಕಲರ ಪ್ರಮಾಣಪತ್ರ (ಯುಡಿಐಡಿ) ಅನ್ವಯಿಸಿದರೆ']
      },
      toConfirm: {
        en: ['Verify Nadakacheri RD number is valid and in student or parents name'],
        kn: ['ನಾಡಕಚೇರಿ ಪ್ರಮಾಣಪತ್ರದ ಆರ್‌ಡಿ ಸಂಖ್ಯೆ ಚಾಲ್ತಿಯಲ್ಲಿದೆಯೇ ಎಂದು ದೃಢಪಡಿಸಿ']
      }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Create Student Account on SSP Portal', kn: 'ಎಸ್‌ಎಸ್‌ಪಿ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಖಾತೆ ತೆರೆಯಿರಿ' },
        description: {
          en: 'Go to ssp.postmatric.karnataka.gov.in and click Create Account using your Aadhaar number and OTP.',
          kn: 'ssp.postmatric.karnataka.gov.in ಗೆ ತೆರಳಿ ಆಧಾರ್ ಮತ್ತು ಒಟಿಪಿ ಮೂಲಕ ವಿದ್ಯಾರ್ಥಿ ಖಾತೆ ಸೃಷ್ಟಿಸಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Fetch Caste & Income Certificate via RD Number', kn: 'ಆರ್‌ಡಿ ಸಂಖ್ಯೆಯಿಂದ ಪ್ರಮಾಣಪತ್ರ ಜೋಡಿಸಿ' },
        description: {
          en: 'Enter your 15-digit RD Number from your Nadakacheri certificate. The portal automatically validates family income.',
          kn: 'ನಾಡಕಚೇರಿಯ 15 ಅಂಕಿಯ ಆರ್‌ಡಿ ಸಂಖ್ಯೆ ನಮೂದಿಸಿದಾಗ ಜಾತಿ ಮತ್ತು ಆದಾಯ ಮಾಹಿತಿ ನೇರವಾಗಿ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಬರುತ್ತದೆ.'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Enter College & Course Details', kn: 'ಕಾಲೇಜು ಮತ್ತು ಕೋರ್ಸ್ ವಿವರಗಳನ್ನು ತುಂಬಿ' },
        description: {
          en: 'Select your university/board, college, registration number, course, and year of study.',
          kn: 'ನಿಮ್ಮ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆ, ಕೋರ್ಸ್, ನೋಂದಣಿ ಸಂಖ್ಯೆ ಮತ್ತು ಅಧ್ಯಯನ ವರ್ಷವನ್ನು ನಮೂದಿಸಿ.'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Submit Application & Submit Copy to College', kn: 'ಅರ್ಜಿ ಸಲ್ಲಿಸಿ ಕಾಲೇಜಿಗೆ ಪ್ರತಿ ನೀಡಿ' },
        description: {
          en: 'Submit online, download the acknowledgement slip, and submit a signed copy with fee receipt to your college scholarship officer.',
          kn: 'ಅರ್ಜಿ ಸಬ್ಮಿಟ್ ಮಾಡಿ, ರಸೀದಿಯನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿಕೊಂಡು ಕಾಲೇಜಿನ ವಿದ್ಯಾರ್ಥಿವೇತನ ವಿಭಾಗಕ್ಕೆ ಸಲ್ಲಿಸಿ.'
        }
      }
    ],
    officialPortalUrl: 'https://ssp.postmatric.karnataka.gov.in/',
    officialGuidelineUrl: 'https://ssp.postmatric.karnataka.gov.in/PDF/Guidelines.pdf',
    officialStatusCheckUrl: 'https://ssp.postmatric.karnataka.gov.in/studentstatus.aspx',
    responsibleDepartment: {
      en: 'Social Welfare & Backward Classes Dept, Karnataka',
      kn: 'ಸಮಾಜ ಕಲ್ಯಾಣ ಮತ್ತು ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಕಲ್ಯಾಣ ಇಲಾಖೆ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-10',
    deadlineNote: {
      en: 'Annual cycle: applications typically open Aug-Nov, with verification through academic year.',
      kn: 'ಶೈಕ್ಷಣಿಕ ವರ್ಷದಲ್ಲಿ ವಾರ್ಷಿಕ ಆನ್‌ಲೈನ್ ಅರ್ಜಿ ಸಲ್ಲಿಕೆ.'
    }
  },
  {
    id: 'ayushman-bharat-pmjay',
    name: {
      en: 'Ayushman Bharat PM-JAY & Arogya Karnataka',
      kn: 'ಆಯುಷ್ಮಾನ್ ಭಾರತ್ - ಆರೋಗ್ಯ ಕರ್ನಾಟಕ'
    },
    shortName: 'AB-PMJAY / Arogya Karnataka',
    authority: {
      en: 'National Health Authority & Dept of Health, Karnataka (SAST)',
      kn: 'ರಾಷ್ಟ್ರೀಯ ಆರೋಗ್ಯ ಪ್ರಾಧಿಕಾರ ಮತ್ತು ಆರೋಗ್ಯ ಇಲಾಖೆ, ಕರ್ನಾಟಕ (ಸಾಸ್ಟ್)'
    },
    level: 'both',
    category: 'healthcare',
    tagline: {
      en: 'Cashless hospital treatment up to ₹5 Lakhs per family per year for secondary and tertiary care.',
      kn: 'ದ್ವಿತೀಯ ಮತ್ತು ತೃತೀಯ ಹಂತದ ಆಸ್ಪತ್ರೆ ಚಿಕಿತ್ಸೆಗಾಗಿ ಪ್ರತಿ ಕುಟುಂಬಕ್ಕೆ ವರ್ಷಕ್ಕೆ ₹5 ಲಕ್ಷದವರೆಗೆ ನಗದು ರಹಿತ ಆರೋಗ್ಯ ರಕ್ಷಣೆ.'
    },
    description: {
      en: 'In Karnataka, Ayushman Bharat is integrated with Arogya Karnataka (AB-ArK). Eligible BPL families receive up to ₹5 Lakhs per year cashless coverage in empaneled public and private hospitals. APL families receive 30% co-payment support up to ₹1.5 Lakhs.',
      kn: 'ಕರ್ನಾಟಕದಲ್ಲಿ ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ಮತ್ತು ಆರೋಗ್ಯ ಕರ್ನಾಟಕ ಸಂಯೋಜಿತವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ. ಬಿಪಿಎಲ್ ಕಾರ್ಡ್‌ದಾರರಿಗೆ ವರ್ಷಕ್ಕೆ ₹5 ಲಕ್ಷದವರೆಗೆ ಉಚಿತ ನಗದುರಹಿತ ಚಿಕಿತ್ಸೆ ಮತ್ತು ಎಪಿಎಲ್ ಕುಟುಂಬಗಳಿಗೆ ಶೇ.30 ರಿಯಾಯಿತಿ ದೊರೆಯುತ್ತದೆ.'
    },
    benefits: {
      en: [
        'Up to ₹5,00,000 cashless medical coverage per eligible BPL family per year',
        'Covers 1,600+ secondary and tertiary medical and surgical packages',
        'Cashless access at government district hospitals, medical colleges, and empaneled private hospitals',
        'Pre-existing health conditions covered from day one'
      ],
      kn: [
        'ಅರ್ಹ ಬಿಪಿಎಲ್ ಕುಟುಂಬಕ್ಕೆ ವಾರ್ಷಿಕ ಗರಿಷ್ಠ ₹5 ಲಕ್ಷದವರೆಗೆ ಸಂಪೂರ್ಣ ಉಚಿತ ಚಿಕಿತ್ಸೆ',
        '1,600ಕ್ಕೂ ಹೆಚ್ಚು ರೋಗಗಳಿಗೆ ಮತ್ತು ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗಳಿಗೆ ರಕ್ಷಣೆ',
        'ಸರ್ಕಾರಿ ಜಿಲ್ಲಾ ಆಸ್ಪತ್ರೆಗಳು ಮತ್ತು ನೋಂದಾಯಿತ ಖಾಸಗಿ ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ ನಗದು ರಹಿತ ಸೇವೆ',
        'ಹಿಂದಿನಿಂದ ಇರುವ ಕಾಯಿಲೆಗಳಿಗೂ ಮೊದಲ ದಿನದಿಂದಲೇ ಚಿಕಿತ್ಸೆ ಲಭ್ಯ'
      ]
    },
    knownCriteria: {
      needsHealthcareHelp: true,
      rationCards: ['AAY', 'BPL', 'APL', 'any']
    },
    disqualifyingConditions: {
      en: [
        'Treatment sought at non-empaneled private hospitals without official referral',
        'Cosmetic or unlisted non-essential procedures not covered in the approved benefit package',
        'Failure to present valid ration card or ABHA/Arogya card at the Arogya Mitra desk'
      ],
      kn: [
        'ಸರ್ಕಾರಿ ರೆಫರಲ್ ಇಲ್ಲದೆ ಅನಧಿಕೃತ ಖಾಸಗಿ ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ ಚಿಕಿತ್ಸೆ ಪಡೆದರೆ',
        'ಯೋಜನೆಯ ಪ್ಯಾಕೇಜ್‌ನಲ್ಲಿ ಸೇರದ ಸೌಂದರ್ಯವರ್ಧಕ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗಳು',
        'ಆಸ್ಪತ್ರೆಯಲ್ಲಿರುವ ಆರೋಗ್ಯ ಮಿತ್ರ ಕೌಂಟರ್‌ನಲ್ಲಿ ದಾಖಲೆ ಹಾಜರುಪಡಿಸದಿದ್ದರೆ'
      ]
    },
    requiredDocuments: {
      mandatory: {
        en: ['Ration Card (BPL/AAY/APL)', 'Aadhaar Card of the patient', 'Ayushman / ABHA Card (can be generated instantly at hospital)'],
        kn: ['ಪಡಿತರ ಚೀಟಿ (ಬಿಪಿಎಲ್/ಅಂತ್ಯೋದಯ/ಎಪಿಎಲ್)', 'ರೋಗಿಯ ಆಧಾರ್ ಕಾರ್ಡ್', 'ಆಯುಷ್ಮಾನ್ ಭಾರತ್ / ಆಭಾ (ABHA) ಕಾರ್ಡ್']
      },
      conditional: {
        en: ['Referral letter from Government Public Hospital (required before admission to private empaneled hospital, except in life-threatening emergencies)'],
        kn: ['ಸರ್ಕಾರಿ ಸಾರ್ವಜನಿಕ ಆಸ್ಪತ್ರೆಯಿಂದ ರೆಫರಲ್ ಪತ್ರ (ಖಾಸಗಿ ಆಸ್ಪತ್ರೆಗೆ ದಾಖಲಾಗಲು ಕಡ್ಡಾಯ)']
      },
      toConfirm: {
        en: ['Check if the chosen hospital is active in the empaneled network on pmjay.gov.in'],
        kn: ['ಆಸ್ಪತ್ರೆಯು ಯೋಜನೆಯ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ಸಕ್ರಿಯವಾಗಿದೆಯೇ ಎಂದು pmjay.gov.in ನಲ್ಲಿ ನೋಡಿ']
      }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'First Visit Government Hospital', kn: 'ಮೊದಲು ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಗೆ ಭೇಟಿ ನೀಡಿ' },
        description: {
          en: 'Visit your nearest Community Health Centre, District Hospital, or Government Medical College for primary diagnosis.',
          kn: 'ಪ್ರಾಥಮಿಕ ಪರೀಕ್ಷೆಗಾಗಿ ನಿಮ್ಮ ಹತ್ತಿರದ ಸಮುದಾಯ ಆರೋಗ್ಯ ಕೇಂದ್ರ ಅಥವಾ ಸರ್ಕಾರಿ ಜಿಲ್ಲಾ ಆಸ್ಪತ್ರೆಗೆ ಭೇಟಿ ನೀಡಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Meet the Arogya Mitra', kn: 'ಆರೋಗ್ಯ ಮಿತ್ರ ಸಿಬ್ಬಂದಿಯನ್ನು ಭೇಟಿಯಾಗಿ' },
        description: {
          en: 'Every network hospital has a dedicated Arogya Mitra helpdesk. Present your Aadhaar and Ration Card to generate or verify your Ayushman health card.',
          kn: 'ಆಸ್ಪತ್ರೆಯಲ್ಲಿರುವ ಆರೋಗ್ಯ ಮಿತ್ರ ಡೆಸ್ಕ್‌ನಲ್ಲಿ ಆಧಾರ್ ಮತ್ತು ರೇಷನ್ ಕಾರ್ಡ್ ತೋರಿಸಿ ನಿಮ್ಮ ಅರ್ಹತೆ ಪರಿಶೀಲಿಸಿಕೊಳ್ಳಿ.'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Obtain Referral if Speciality is Unavailable', kn: 'ಅಗತ್ಯವಿದ್ದರೆ ಖಾಸಗಿ ಆಸ್ಪತ್ರೆಗೆ ರೆಫರಲ್ ಪಡೆಯಿರಿ' },
        description: {
          en: 'If the government facility lacks the specific super-specialty, the doctor will generate an official online referral code to an empaneled private hospital.',
          kn: 'ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಯಲ್ಲಿ ಚಿಕಿತ್ಸೆ ಲಭ್ಯವಿಲ್ಲದಿದ್ದರೆ, ವೈದ್ಯರು ನೋಂದಾಯಿತ ಖಾಸಗಿ ಆಸ್ಪತ್ರೆಗೆ ಆನ್‌ಲೈನ್ ರೆಫರಲ್ ಕೋಡ್ ನೀಡುತ್ತಾರೆ.'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Receive Cashless Treatment', kn: 'ನಗದುರಹಿತ ಚಿಕಿತ್ಸೆ ಪಡೆದುಕೊಳ್ಳಿ' },
        description: {
          en: 'Admit under the pre-authorized package. All medicines, tests, bed charges, and surgeries are billed directly to SAST/PM-JAY without out-of-pocket payment.',
          kn: 'ಪೂರ್ವ-ಅನುಮೋದಿತ ಪ್ಯಾಕೇಜ್ ಅಡಿಯಲ್ಲಿ ದಾಖಲಾಗಿ ಸಂಪೂರ್ಣ ಉಚಿತ ಅಥವಾ ರಿಯಾಯಿತಿ ಚಿಕಿತ್ಸೆ ಪಡೆಯಿರಿ.'
        }
      }
    ],
    officialPortalUrl: 'https://pmjay.gov.in/',
    officialGuidelineUrl: 'https://arogya.karnataka.gov.in/',
    officialStatusCheckUrl: 'https://beneficiary.nha.gov.in/',
    responsibleDepartment: {
      en: 'Suvarna Arogya Suraksha Trust (SAST) & National Health Authority',
      kn: 'ಸುವರ್ಣ ಆರೋಗ್ಯ ಸುರಕ್ಷಾ ಟ್ರಸ್ಟ್ (ಸಾಸ್ಟ್) ಮತ್ತು ರಾಷ್ಟ್ರೀಯ ಆರೋಗ್ಯ ಪ್ರಾಧಿಕಾರ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-09-12',
    deadlineNote: {
      en: 'Year-round emergency and planned care availability.',
      kn: 'ವರ್ಷಪೂರ್ತಿ ನಿರಂತರವಾಗಿ ಲಭ್ಯವಿರುವ ಆರೋಗ್ಯ ಸೇವೆ.'
    }
  },
  {
    id: 'karnataka-yuva-nidhi',
    name: {
      en: 'Yuva Nidhi Scheme',
      kn: 'ಯುವನಿಧಿ ಯೋಜನೆ'
    },
    shortName: 'Yuva Nidhi',
    authority: {
      en: 'Department of Skill Development, Entrepreneurship and Livelihood, Karnataka',
      kn: 'ಕೌಶಲ್ಯಾಭಿವೃದ್ಧಿ, ಉದ್ಯಮಶೀಲತೆ ಮತ್ತು ಜೀವನೋಪಾಯ ಇಲಾಖೆ, ಕರ್ನಾಟಕ ಸರ್ಕಾರ'
    },
    level: 'karnataka',
    category: 'employment_skills',
    tagline: {
      en: 'Monthly unemployment allowance of ₹3,000 for degree holders and ₹1,500 for diploma holders in Karnataka.',
      kn: 'ಕರ್ನಾಟಕದ ನಿರುದ್ಯೋಗಿ ಪದವೀಧರರಿಗೆ ಮಾಸಿಕ ₹3,000 ಮತ್ತು ಡಿಪ್ಲೋಮಾ ಪದವೀಧರರಿಗೆ ₹1,500 ನಿರುದ್ಯೋಗ ಭತ್ಯೆ.'
    },
    description: {
      en: 'Yuva Nidhi provides up to 2 years of monthly unemployment allowance directly into the bank accounts of recent graduates and diploma holders who have not secured employment within 180 days of graduating, alongside free skill development training.',
      kn: 'ಪದವಿ ಅಥವಾ ಡಿಪ್ಲೋಮಾ ಮುಗಿಸಿ 180 ದಿನಗಳಾದರೂ ಉದ್ಯೋಗ ಸಿಗದ ಯುವಜನತೆಗೆ 2 ವರ್ಷಗಳವರೆಗೆ ಮಾಸಿಕ ಆರ್ಥಿಕ ನೆರವು ಮತ್ತು ಉಚಿತ ಕೌಶಲ್ಯ ತರಬೇತಿ ನೀಡಲಾಗುತ್ತದೆ.'
    },
    benefits: {
      en: [
        '₹3,000 per month for degree holders',
        '₹1,500 per month for diploma holders',
        'Maximum duration of 24 months or until gaining employment / self-employment',
        'Free enrollment in government vocational skill training programmes'
      ],
      kn: [
        'ಪದವೀಧರರಿಗೆ ಪ್ರತಿ ತಿಂಗಳು ₹3,000 ನಗದು ನೆರವು',
        'ಡಿಪ್ಲೋಮಾ ಹೊಂದಿದವರಿಗೆ ತಿಂಗಳಿಗೆ ₹1,500 ನೆರವು',
        'ಗರಿಷ್ಠ 24 ತಿಂಗಳು ಅಥವಾ ಉದ್ಯೋಗ ದೊರೆಯುವವರೆಗೆ ಸೌಲಭ್ಯ',
        'ಸರ್ಕಾರದ ಉಚಿತ ಕೌಶಲ್ಯ ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮಗಳಿಗೆ ಆದ್ಯತೆ'
      ]
    },
    knownCriteria: {
      karnatakaResidentOnly: true,
      minAge: 18,
      maxAge: 35,
      educationLevels: ['degree', 'diploma', 'postgrad'],
      employmentStatus: ['unemployed']
    },
    disqualifyingConditions: {
      en: [
        'Currently employed in government, public sector, or private company',
        'Self-employed or registered business owner',
        'Continuing higher education (e.g. studying in Masters while claiming for Bachelors)',
        'Residing outside Karnataka or graduated from unaccredited universities'
      ],
      kn: [
        'ಸರ್ಕಾರಿ ಅಥವಾ ಖಾಸಗಿ ಸಂಸ್ಥೆಯಲ್ಲಿ ಉದ್ಯೋಗದಲ್ಲಿದ್ದರೆ',
        'ಸ್ವಯಂ ಉದ್ಯೋಗ ಹೊಂದಿರುವವರು',
        'ಮುಂದಿನ ಉನ್ನತ ಶಿಕ್ಷಣಕ್ಕೆ ದಾಖಲಾಗಿದ್ದರೆ (ಉದಾ: ಪಿಜಿ ಮಾಡುತ್ತಿದ್ದರೆ)',
        'ಕರ್ನಾಟಕದ ನಿವಾಸಿಯಾಗಿರದಿದ್ದರೆ'
      ]
    },
    requiredDocuments: {
      mandatory: {
        en: ['Degree or Diploma Marks Cards & Convocation / Provisional Certificate', 'Aadhaar Card of the applicant', 'Karnataka Domicile / Study Certificate proving min 6 years schooling in Karnataka', 'Aadhaar-linked Bank Account details'],
        kn: ['ಪದವಿ / ಡಿಪ್ಲೋಮಾ ಅಂಕಪಟ್ಟಿ ಮತ್ತು ಪ್ರಮಾಣಪತ್ರ', 'ಅರ್ಜಿದಾರರ ಆಧಾರ್ ಕಾರ್ಡ್', 'ಕರ್ನಾಟಕದಲ್ಲಿ ಕನಿಷ್ಠ 6 ವರ್ಷ ವ್ಯಾಸಂಗ ಮಾಡಿದ ಪ್ರಮಾಣಪತ್ರ', 'ಆಧಾರ್ ಲಿಂಕ್ ಆದ ಬ್ಯಾಂಕ್ ಖಾತೆ ವಿವರ']
      },
      conditional: {
        en: ['Self-declaration of unemployment submitted monthly on the portal'],
        kn: ['ಪ್ರತಿ ತಿಂಗಳು ಉದ್ಯೋಗದಲ್ಲಿಲ್ಲ ಎಂದು ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಸ್ವಯಂ ಘೋಷಣೆ ಸಲ್ಲಿಸಬೇಕು']
      },
      toConfirm: {
        en: ['Verify graduation year matches eligibility notification on Seva Sindhu'],
        kn: ['ಸೇವಾ ಸಿಂಧು ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಉತ್ತೀರ್ಣರಾದ ವರ್ಷದ ಅರ್ಹತೆ ಪರಿಶೀಲಿಸಿ']
      }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Confirm Unemployment Period', kn: 'ನಿರುದ್ಯೋಗ ಅವಧಿ ದೃಢಪಡಿಸಿ' },
        description: {
          en: 'Ensure a minimum of 180 days (6 months) has elapsed since your official date of passing without employment.',
          kn: 'ಪರೀಕ್ಷೆ ಉತ್ತೀರ್ಣರಾದ ದಿನಾಂಕದಿಂದ ಕನಿಷ್ಠ 180 ದಿನಗಳು (6 ತಿಂಗಳು) ಕಳೆದಿರುವುದನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Apply on Seva Sindhu Yuva Nidhi Portal', kn: 'ಸೇವಾ ಸಿಂಧು ಯುವನಿಧಿ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ' },
        description: {
          en: 'Visit sevasindhugs.karnataka.gov.in and click Yuva Nidhi. Enter your university registration number to fetch marks cards automatically.',
          kn: 'sevasindhugs.karnataka.gov.in ಗೆ ತೆರಳಿ ನಿಮ್ಮ ರಿಜಿಸ್ಟರ್ ನಂಬರ್ ನಮೂದಿಸಿ ಅಂಕಪಟ್ಟಿ ಮಾಹಿತಿ ಪಡೆದುಕೊಳ್ಳಿ.'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Authenticate with Aadhaar e-KYC', kn: 'ಆಧಾರ್ ಇ-ಕೆವೈಸಿ ದೃಢೀಕರಿಸಿ' },
        description: {
          en: 'Complete Aadhaar OTP verification and confirm that your bank account is active with DBT/NPCI.',
          kn: 'ಆಧಾರ್ ಒಟಿಪಿ ದೃಢೀಕರಿಸಿ ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಡಿಬಿಟಿ ಸಕ್ರಿಯವಾಗಿರುವುದನ್ನು ಪರೀಕ್ಷಿಸಿ.'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Submit Monthly Self-Declaration', kn: 'ಪ್ರತಿ ತಿಂಗಳು ಸ್ವಯಂ ಘೋಷಣೆ ಸಲ್ಲಿಸಿ' },
        description: {
          en: 'Log in between the 25th and 10th of every month to declare that you remain unemployed to receive the monthly DBT payout.',
          kn: 'ಪ್ರತಿ ತಿಂಗಳು ಪೋರ್ಟಲ್‌ಗೆ ಲಾಗಿನ್ ಆಗಿ ನಿರುದ್ಯೋಗ ಸ್ವಯಂ ಘೋಷಣೆ ಸಲ್ಲಿಸಿದಾಗ ಭತ್ಯೆ ಜಮೆಯಾಗುತ್ತದೆ.'
        }
      }
    ],
    officialPortalUrl: 'https://sevasindhugs.karnataka.gov.in/',
    officialGuidelineUrl: 'https://skill.karnataka.gov.in/',
    officialStatusCheckUrl: 'https://sevasindhugs.karnataka.gov.in/',
    responsibleDepartment: {
      en: 'Skill Development & Livelihood Dept, Govt of Karnataka',
      kn: 'ಕೌಶಲ್ಯಾಭಿವೃದ್ಧಿ ಮತ್ತು ಜೀವನೋಪಾಯ ಇಲಾಖೆ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-01',
    deadlineNote: {
      en: 'Open online registration for eligible batches.',
      kn: 'ಅರ್ಹ ಬ್ಯಾಚ್‌ನ ಅಭ್ಯರ್ಥಿಗಳಿಗೆ ನಿರಂತರ ಆನ್‌ಲೈನ್ ಅರ್ಜಿ ಸಲ್ಲಿಕೆ.'
    }
  },
  {
    id: 'karnataka-shakti-scheme',
    name: {
      en: 'Shakti Scheme (Free Bus Travel for Women)',
      kn: 'ಶಕ್ತಿ ಯೋಜನೆ (ಮಹಿಳೆಯರಿಗೆ ಉಚಿತ ಬಸ್ ಪ್ರಯಾಣ)'
    },
    shortName: 'Shakti Scheme',
    authority: {
      en: 'Transport Department, Government of Karnataka (KSRTC, BMTC, NWKRTC, KKRTC)',
      kn: 'ಸಾರಿಗೆ ಇಲಾಖೆ, ಕರ್ನಾಟಕ ಸರ್ಕಾರ (ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ, ಬಿಎಂಟಿಸಿ, ವಾಯುವ್ಯ ಮತ್ತು ಕಲ್ಯಾಣ ಸಾರಿಗೆ)'
    },
    level: 'karnataka',
    category: 'women_child',
    tagline: {
      en: 'Free travel for all women, girl students and transgender citizens across government ordinary & express buses in Karnataka.',
      kn: 'ಕರ್ನಾಟಕದಲ್ಲಿ ಸರ್ಕಾರಿ ಸಾಮಾನ್ಯ ಮತ್ತು ವೇಗದೂತ ಬಸ್‌ಗಳಲ್ಲಿ ಎಲ್ಲಾ ಮಹಿಳೆಯರು, ವಿದ್ಯಾರ್ಥಿನಿಯರು ಮತ್ತು ಲಿಂಗತ್ವ ಅಲ್ಪಸಂಖ್ಯಾತರಿಗೆ ಉಚಿತ ಪ್ರಯಾಣ.'
    },
    description: {
      en: 'The Shakti scheme empowers women by offering 100% fare-free public transport travel within Karnataka on ordinary, express, city, and suburban buses run by all four state transport corporations (BMTC, KSRTC, NWKRTC, KKRTC).',
      kn: 'ಕರ್ನಾಟಕದ ನಾಲ್ಕೂ ಸಾರಿಗೆ ನಿಗಮಗಳ ಬಸ್‌ಗಳಲ್ಲಿ (ಬಿಎಂಟಿಸಿ, ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ, ಎನ್‌ಡಬ್ಲ್ಯೂಕೆಆರ್‌ಟಿಸಿ, ಕೆಕೆಆರ್‌ಟಿಸಿ) ಮಹಿಳೆಯರು ಹಾಗೂ ಹೆಣ್ಣುಮಕ್ಕಳು ಯಾವುದೇ ದರವಿಲ್ಲದೆ ಉಚಿತವಾಗಿ ಪ್ರಯಾಣಿಸಬಹುದು.'
    },
    benefits: {
      en: [
        'Free bus travel anywhere within Karnataka borders',
        'Covers City, Ordinary, Suburban, and Express buses',
        'Instant zero-fare ticket issued on boarding upon showing valid Karnataka residential photo ID'
      ],
      kn: [
        'ಕರ್ನಾಟಕ ರಾಜ್ಯದ ವ್ಯಾಪ್ತಿಯೊಳಗೆ ಸಂಪೂರ್ಣ ಉಚಿತ ಬಸ್ ಪ್ರಯಾಣ',
        'ನಗರ, ಸಾಮಾನ್ಯ, ಉಪನಗರ ಮತ್ತು ವೇಗದೂತ ಬಸ್‌ಗಳಲ್ಲಿ ಅನ್ವಯ',
        'ಕರ್ನಾಟಕದ ವಿಳಾಸವುಳ್ಳ ಗುರುತಿನ ಚೀಟಿ ತೋರಿಸಿ ತಕ್ಷಣ ಉಚಿತ ಶೂನ್ಯ ದರದ ಟಿಕೆಟ್ ಪಡೆಯಬಹುದು'
      ]
    },
    knownCriteria: {
      gender: 'female',
      karnatakaResidentOnly: true
    },
    disqualifyingConditions: {
      en: [
        'Luxury, sleeper, AC, and premium inter-state services (e.g., Airavat, Flybus, Rajahamsa, EV Powerplus AC)',
        'Travel beyond Karnataka state borders (e.g. crossing into Tamil Nadu, Kerala, Maharashtra or Andhra Pradesh)'
      ],
      kn: [
        'ಐಷಾರಾಮಿ, ಹವಾನಿಯಂತ್ರಿತ (ಎಸಿ), ಸ್ಲೀಪರ್ ಬಸ್‌ಗಳಿಗೆ ಅನ್ವಯಿಸುವುದಿಲ್ಲ (ಉದಾ: ಐರಾವತ, ಫ್ಲೈಬಸ್, ರಾಜಹಂಸ)',
        'ಕರ್ನಾಟಕ ರಾಜ್ಯದ ಗಡಿ ದಾಟಿ ಬೇರೆ ರಾಜ್ಯಗಳಿಗೆ ಹೋಗುವ ಪ್ರಯಾಣಕ್ಕೆ ಅನ್ವಯಿಸುವುದಿಲ್ಲ'
      ]
    },
    requiredDocuments: {
      mandatory: {
        en: ['Any Government-issued Photo ID card proving Karnataka domicile (Aadhaar Card, Voter ID, Driving Licence, or Ration Card)'],
        kn: ['ಕರ್ನಾಟಕದ ವಿಳಾಸವಿರುವ ಸರ್ಕಾರಿ ಫೋಟೋ ಗುರುತಿನ ಚೀಟಿ (ಆಧಾರ್, ಮತದಾರರ ಗುರುತಿನ ಚೀಟಿ, ಡಿಎಲ್ ಅಥವಾ ರೇಷನ್ ಕಾರ್ಡ್)']
      },
      conditional: {
        en: ['Shakti Smart Card (when notified by Transport department)'],
        kn: ['ಶಕ್ತಿ ಸ್ಮಾರ್ಟ್ ಕಾರ್ಡ್ (ಸಾರಿಗೆ ಇಲಾಖೆ ಸೂಚಿಸಿದಾಗ)']
      },
      toConfirm: {
        en: ['Ensure photo and Karnataka residential address are clearly legible on the ID card'],
        kn: ['ಗುರುತಿನ ಚೀಟಿಯಲ್ಲಿ ಕರ್ನಾಟಕದ ವಿಳಾಸ ಸ್ಪಷ್ಟವಾಗಿರುವುದನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ']
      }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Carry Valid Photo ID', kn: 'ಗುರುತಿನ ಚೀಟಿ ಜೊತೆಯಲ್ಲಿಟ್ಟುಕೊಳ್ಳಿ' },
        description: {
          en: 'Keep your physical original Aadhaar card, Voter ID, or Karnataka Driving Licence with you when traveling.',
          kn: 'ಪ್ರಯಾಣ ಮಾಡುವಾಗ ಮೂಲ ಆಧಾರ್ ಕಾರ್ಡ್ ಅಥವಾ ಮತದಾರರ ಗುರುತಿನ ಚೀಟಿಯನ್ನು ಜೊತೆಯಲ್ಲಿಟ್ಟುಕೊಳ್ಳಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Board Ordinary or Express Bus', kn: 'ಸಾಮಾನ್ಯ ಅಥವಾ ವೇಗದೂತ ಬಸ್ ಹತ್ತಿ' },
        description: {
          en: 'Board eligible BMTC, KSRTC, NWKRTC, or KKRTC non-luxury buses within the state.',
          kn: 'ರಾಜ್ಯದ ಯಾವುದೇ ಬಿಎಂಟಿಸಿ ಅಥವಾ ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಸಾಮಾನ್ಯ/ವೇಗದೂತ ಬಸ್ ಹತ್ತಿ.'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Show ID to Conductor for Zero-Fare Ticket', kn: 'ನಿರ್ವಾಹಕರಿಗೆ ಐಡಿ ತೋರಿಸಿ ಶೂನ್ಯ ದರದ ಟಿಕೆಟ್ ಪಡೆಯಿರಿ' },
        description: {
          en: 'State your destination and present your Karnataka ID card. The conductor will scan or check the card and issue a zero-value printed Shakti ticket.',
          kn: 'ಕಂಡಕ್ಟರ್‌ಗೆ ಗುರುತಿನ ಚೀಟಿ ತೋರಿಸಿ ನಿಮ್ಮ ಇಳಿಯುವ ಸ್ಥಳ ತಿಳಿಸಿ ಉಚಿತ ಟಿಕೆಟ್ ಪಡೆದುಕೊಳ್ಳಿ.'
        }
      }
    ],
    officialPortalUrl: 'https://ksrtc.in/oprs-web/guest/home.do?h=1',
    officialGuidelineUrl: 'https://transport.karnataka.gov.in/',
    responsibleDepartment: {
      en: 'Transport Department, Govt of Karnataka',
      kn: 'ಸಾರಿಗೆ ಇಲಾಖೆ, ಕರ್ನಾಟಕ ಸರ್ಕಾರ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-07-15'
  },
  {
    id: 'central-pm-kisan',
    name: {
      en: 'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)',
      kn: 'ಪಿಎಂ-ಕಿಸಾನ್ (ಪ್ರಧಾನ ಮಂತ್ರಿ ಕಿಸಾನ್ ಸಮ್ಮಾನ್ ನಿಧಿ)'
    },
    shortName: 'PM-KISAN',
    authority: {
      en: 'Ministry of Agriculture and Farmers Welfare, Govt of India & Karnataka Agriculture Dept',
      kn: 'ಕೃಷಿ ಮತ್ತು ರೈತರ ಕಲ್ಯಾಣ ಸಚಿವಾಲಯ, ಭಾರತ ಸರ್ಕಾರ ಮತ್ತು ಕರ್ನಾಟಕ ಕೃಷಿ ಇಲಾಖೆ'
    },
    level: 'both',
    category: 'agriculture',
    tagline: {
      en: '₹6,000 annual income support in three equal instalments of ₹2,000 directly to small and marginal farmer families.',
      kn: 'ಸಣ್ಣ ಮತ್ತು ಅತಿ ಸಣ್ಣ ರೈತ ಕುಟುಂಬಗಳಿಗೆ ವರ್ಷಕ್ಕೆ ₹6,000 ಆರ್ಥಿಕ ನೆರವು (ತಲಾ ₹2,000 ರಂತೆ 3 ಕಂತುಗಳಲ್ಲಿ).'
    },
    description: {
      en: 'PM-KISAN transfers ₹6,000 per year directly to bank accounts of land-holding farmer families. Karnataka also pairs this with additional state Raita Siri or drought relief support when officially notified.',
      kn: 'ಭೂಮಿ ಹೊಂದಿರುವ ರೈತ ಕುಟುಂಬಗಳಿಗೆ ಪ್ರತಿ 4 ತಿಂಗಳಿಗೊಮ್ಮೆ ₹2,000 ರಂತೆ ವರ್ಷಕ್ಕೆ ಒಟ್ಟು ₹6,000 ನೇರ ನಗದು ವರ್ಗಾವಣೆ ಮಾಡುವ ಕೇಂದ್ರ ಸರ್ಕಾರದ ಮಹತ್ವದ ಕೃಷಿ ಯೋಜನೆ.'
    },
    benefits: {
      en: [
        '₹6,000 annual assured financial support via direct bank transfer (DBT)',
        'Disbursed in 3 equal four-monthly tranches of ₹2,000 each',
        'Financial aid for purchasing seeds, fertilizers, and farm inputs'
      ],
      kn: [
        'ರೈತರ ಖಾತೆಗೆ ನೇರವಾಗಿ ವಾರ್ಷಿಕ ₹6,000 ಆರ್ಥಿಕ ನೆರವು',
        'ವರ್ಷಕ್ಕೆ 3 ಕಂತುಗಳಲ್ಲಿ ತಲಾ ₹2,000 ರಂತೆ ಜಮೆ',
        'ಬೀಜ, ಗೊಬ್ಬರ ಮತ್ತು ಕೃಷಿ ವೆಚ್ಚಗಳಿಗೆ ಆಸರೆ'
      ]
    },
    knownCriteria: {
      isFarmer: true,
      farmerSupport: true
    },
    disqualifyingConditions: {
      en: [
        'Institutional landholders or non-agricultural land users',
        'Farmer or family member pays income tax',
        'Serving or retired government employees, ministers, doctors, engineers, or lawyers',
        'Pensioners receiving monthly pension of ₹10,000 or more'
      ],
      kn: [
        'ಸಂಸ್ಥೆಯ ಹೆಸರಿನಲ್ಲಿರುವ ಜಮೀನುಗಳು',
        'ಆದಾಯ ತೆರಿಗೆ ಪಾವತಿಸುವ ರೈತ ಕುಟುಂಬಗಳು',
        'ಸರ್ಕಾರಿ ನೌಕರರು, ವೈದ್ಯರು, ವಕೀಲರು, ಎಂಜಿನಿಯರ್‌ಗಳು',
        'ತಿಂಗಳಿಗೆ ₹10,000 ಕ್ಕಿಂತ ಹೆಚ್ಚು ಪಿಂಚಣಿ ಪಡೆಯುವ ಮಾಜಿ ನೌಕರರು'
      ]
    },
    requiredDocuments: {
      mandatory: {
        en: ['Land ownership records (Pahani / RTC in Karnataka from Bhoomi portal)', 'Aadhaar Card of the landholder', 'Aadhaar-linked active bank account with NPCI mapping'],
        kn: ['ಭೂಮಿ ಪೋರ್ಟಲ್‌ನ ಪಹಣಿ / ಆರ್‌ಟಿಸಿ (RTC) ದಾಖಲೆ', 'ರೈತನ ಆಧಾರ್ ಕಾರ್ಡ್', 'ಆಧಾರ್ ಲಿಂಕ್ ಆದ ಬ್ಯಾಂಕ್ ಖಾತೆ ವಿವರ']
      },
      conditional: {
        en: ['e-KYC biometric or OTP verification completed on pmkisan.gov.in'],
        kn: ['pmkisan.gov.in ನಲ್ಲಿ ಒಟಿಪಿ ಅಥವಾ ಬಯೋಮೆಟ್ರಿಕ್ ಇ-ಕೆವೈಸಿ ಮಾಡಿಸಿರಬೇಕು']
      },
      toConfirm: {
        en: ['Confirm land record details match the name spelled on the Aadhaar card'],
        kn: ['ಪಹಣಿಯಲ್ಲಿರುವ ಹೆಸರು ಮತ್ತು ಆಧಾರ್ ಹೆಸರು ಹೊಂದಿಕೆಯಾಗುವುದನ್ನು ದೃಢಪಡಿಸಿ']
      }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Verify Land Record (Bhoomi RTC)', kn: 'ಪಹಣಿ (ಆರ್‌ಟಿಸಿ) ಪರಿಶೀಲಿಸಿ' },
        description: {
          en: 'Check your current Pahani on landrecords.karnataka.gov.in (Bhoomi portal) to confirm your land ownership status.',
          kn: 'ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಭೂಮಿ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ನಿಮ್ಮ ಹೆಸರಿನಲ್ಲಿರುವ ಪಹಣಿಯನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ ಪರಿಶೀಲಿಸಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Register on PM-KISAN Portal or Raitha Samparka Kendra', kn: 'ರೈತ ಸಂಪರ್ಕ ಕೇಂದ್ರ ಅಥವಾ ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ನೋಂದಾಯಿಸಿ' },
        description: {
          en: 'Visit pmkisan.gov.in > New Farmer Registration or visit your local Raitha Samparka Kendra (RSK) in Karnataka.',
          kn: 'pmkisan.gov.in ನಲ್ಲಿ ರೈತ ನೋಂದಣಿ ಮಾಡಿ ಅಥವಾ ನಿಮ್ಮ ತಾಲೂಕಿನ ರೈತ ಸಂಪರ್ಕ ಕೇಂದ್ರಕ್ಕೆ ಭೇಟಿ ನೀಡಿ.'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Complete PM-KISAN e-KYC', kn: 'ಇ-ಕೆವೈಸಿ ಪೂರ್ಣಗೊಳಿಸಿ' },
        description: {
          en: 'Complete online OTP e-KYC on the portal or biometric e-KYC at any CSC / Karnataka One centre.',
          kn: 'ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಆಧಾರ್ ಒಟಿಪಿ ಅಥವಾ ಕರ್ನಾಟಕ ಒನ್ ಕೇಂದ್ರದಲ್ಲಿ ಬೆರಳಚ್ಚು ಇ-ಕೆವೈಸಿ ಪೂರ್ಣಗೊಳಿಸಿ.'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Track Instalment Payment Status', kn: 'ಕಂತಿನ ಜಮೆ ಸ್ಥಿತಿ ಪರಿಶೀಲಿಸಿ' },
        description: {
          en: 'Check instalment release dates and FTO generation status on pmkisan.gov.in under Beneficiary Status.',
          kn: 'ಫಲಾನುಭವಿ ಸ್ಥಿತಿ (Beneficiary Status) ಲಿಂಕ್ ಬಳಸಿ ಹಣ ಜಮೆ ಸ್ಥಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಿ.'
        }
      }
    ],
    officialPortalUrl: 'https://pmkisan.gov.in/',
    officialGuidelineUrl: 'https://pmkisan.gov.in/Documents/OperationalGuidelines.pdf',
    officialStatusCheckUrl: 'https://pmkisan.gov.in/BeneficiaryStatus_New.aspx',
    responsibleDepartment: {
      en: 'Dept of Agriculture, Cooperation and Farmers Welfare',
      kn: 'ಕೃಷಿ ಇಲಾಖೆ, ಭಾರತ ಸರ್ಕಾರ ಮತ್ತು ಕರ್ನಾಟಕ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-30'
  },
  {
    id: 'karnataka-sandhya-suraksha',
    name: {
      en: 'Sandhya Suraksha Pension Scheme',
      kn: 'ಸಂಧ್ಯಾ ಸುರಕ್ಷಾ ಪಿಂಚಣಿ ಯೋಜನೆ'
    },
    shortName: 'Sandhya Suraksha',
    authority: {
      en: 'Directorate of Social Security and Pensions, Revenue Department, Karnataka',
      kn: 'ಸಾಮಾಜಿಕ ಭದ್ರತೆ ಮತ್ತು ಪಿಂಚಣಿಗಳ ನಿರ್ದೇಶನಾಲಯ, ಕಂದಾಯ ಇಲಾಖೆ, ಕರ್ನಾಟಕ'
    },
    level: 'karnataka',
    category: 'senior_pension',
    tagline: {
      en: 'Monthly pension of ₹1,200 for destitute and low-income senior citizens aged 65 and above in Karnataka.',
      kn: 'ಕರ್ನಾಟಕದಲ್ಲಿ 65 ವರ್ಷ ಮತ್ತು ಮೇಲ್ಪಟ್ಟ ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ಮಾಸಿಕ ₹1,200 ವೃದ್ಧಾಪ್ಯ ಪಿಂಚಣಿ.'
    },
    description: {
      en: 'Sandhya Suraksha provides a monthly social security pension of ₹1,200 for senior citizens who have reached 65 years of age and do not have adequate familial financial support.',
      kn: '65 ವರ್ಷ ತುಂಬಿದ, ಆರ್ಥಿಕವಾಗಿ ಅಸಹಾಯಕರಾದ ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ಗೌರವಯುತ ಜೀವನ ನಡೆಸಲು ಕರ್ನಾಟಕ ಸರ್ಕಾರವು ಪ್ರತಿ ತಿಂಗಳು ₹1,200 ಪಿಂಚಣಿ ನೀಡುತ್ತದೆ.'
    },
    benefits: {
      en: [
        'Monthly pension of ₹1,200 paid directly to pensioner bank or post office account',
        'Free bus passes / discounted state transport concessions',
        'Priority healthcare access at Government Taluk and District hospitals'
      ],
      kn: [
        'ಪ್ರತಿ ತಿಂಗಳು ₹1,200 ಪಿಂಚಣಿ ಹಣ ನೇರವಾಗಿ ಬ್ಯಾಂಕ್ ಅಥವಾ ಅಂಚೆ ಕಚೇರಿ ಖಾತೆಗೆ ಜಮೆ',
        'ಸರ್ಕಾರಿ ಬಸ್ ಪಾಸ್ ರಿಯಾಯಿತಿ ಸೌಲಭ್ಯ',
        'ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ ಆದ್ಯತೆಯ ಉಚಿತ ಚಿಕಿತ್ಸೆ'
      ]
    },
    knownCriteria: {
      minAge: 65,
      seniorCitizen: true,
      exploringPension: true,
      karnatakaResidentOnly: true,
      maxAnnualIncome: 32000 // Destitute / low income criteria
    },
    disqualifyingConditions: {
      en: [
        'Applicants already receiving other government old-age pensions (e.g. IGNOAPS or civil pensions)',
        'Joint family income exceeding ₹32,000 per annum',
        'Age below 65 years at time of application'
      ],
      kn: [
        'ಬೇರೆ ಯಾವುದೇ ಸರ್ಕಾರಿ ಮಾಸಿಕ ಪಿಂಚಣಿ ಪಡೆಯುತ್ತಿದ್ದರೆ',
        'ಕುಟುಂಬದ ವಾರ್ಷಿಕ ಆದಾಯ ₹32,000 ಕ್ಕಿಂತ ಹೆಚ್ಚಿದ್ದರೆ',
        'ಅರ್ಜಿ ಸಲ್ಲಿಸುವ ದಿನಾಂಕಕ್ಕೆ 65 ವರ್ಷ ವಯಸ್ಸಾಗಿರದಿದ್ದರೆ'
      ]
    },
    requiredDocuments: {
      mandatory: {
        en: ['Age proof (School certificate, Voter ID or Aadhaar Card)', 'Karnataka Domicile / Residence Certificate (minimum 3 years in Karnataka)', 'Income Certificate from Nadakacheri (Tahsildar)', 'Bank or Post Office Passbook with Aadhaar seeding'],
        kn: ['ವಯಸ್ಸಿನ ದೃಢೀಕರಣ (ಶಾಲಾ ದಾಖಲೆ, ವೋಟರ್ ಐಡಿ ಅಥವಾ ಆಧಾರ್)', 'ಕರ್ನಾಟಕ ವಾಸಸ್ಥಳ ದೃಢೀಕರಣ ಪ್ರಮಾಣಪತ್ರ', 'ನಾಡಕಚೇರಿ ತಹಶೀಲ್ದಾರ್ ನೀಡಿದ ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ', 'ಬ್ಯಾಂಕ್ ಅಥವಾ ಪೋಸ್ಟ್ ಆಫೀಸ್ ಖಾತೆ ಪುಸ್ತಕ']
      },
      conditional: {
        en: ['Passport size photographs (2 copies)'],
        kn: ['ಪಾಸ್‌ಪೋರ್ಟ್ ಅಳತೆಯ ಇತ್ತೀಚಿನ ಭಾವಚಿತ್ರಗಳು']
      },
      toConfirm: {
        en: ['Confirm with Village Accountant or Revenue Inspector for physical verification'],
        kn: ['ಗ್ರಾಮ ಲೆಕ್ಕಿಗರು (ವಿಲೇಜ್ ಅಕೌಂಟೆಂಟ್) ಸ್ಥಳ ಪರಿಶೀಲನೆ ಮಾಡುವುದನ್ನು ಗಮನಿಸಿ']
      }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Obtain Income & Age Certificate via Nadakacheri', kn: 'ನಾಡಕಚೇರಿಯಲ್ಲಿ ಆದಾಯ ಹಾಗೂ ವಯಸ್ಸಿನ ಪ್ರಮಾಣಪತ್ರ ಪಡೆಯಿರಿ' },
        description: {
          en: 'Apply on nadakacheri.karnataka.gov.in or at your Atalji Janasnehi Kendra for the requisite pension eligibility certificate.',
          kn: 'nadakacheri.karnataka.gov.in ಅಥವಾ ಅಟಲ್ ಜಿ ಜನಸ್ನೇಹಿ ಕೇಂದ್ರದಲ್ಲಿ ಪಿಂಚಣಿ ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ ಪಡೆಯಿರಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Submit Application via Seva Sindhu / Nada Kacheri', kn: 'ಸೇವಾ ಸಿಂಧು / ನಾಡಕಚೇರಿ ಮೂಲಕ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ' },
        description: {
          en: 'Submit the completed Sandhya Suraksha application with Aadhaar and bank details at the nearest Nadakacheri or Bangalore One centre.',
          kn: 'ನಾಡಕಚೇರಿ ಅಥವಾ ಬೆಂಗಳೂರು ಒನ್ ಕೇಂದ್ರದಲ್ಲಿ ಮೂಲ ದಾಖಲೆಗಳೊಂದಿಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Field Verification by Revenue Inspector', kn: 'ಕಂದಾಯ ನಿರೀಕ್ಷಕರಿಂದ ಸ್ಥಳ ಪರಿಶೀಲನೆ' },
        description: {
          en: 'The Village Accountant and Revenue Inspector will verify the applicant’s age, living circumstances, and income.',
          kn: 'ಗ್ರಾಮ ಲೆಕ್ಕಿಗರು ಮತ್ತು ಕಂದಾಯ ನಿರೀಕ್ಷಕರು ವಯಸ್ಸು ಮತ್ತು ಕುಟುಂಬದ ಆದಾಯವನ್ನು ಪರಿಶೀಲಿಸುತ್ತಾರೆ.'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Sanction Order by Tahsildar & DBT Pension Credit', kn: 'ತಹಶೀಲ್ದಾರ್ ಮಂಜೂರಾತಿ ಮತ್ತು ಮಾಸಿಕ ಹಣ ಜಮೆ' },
        description: {
          en: 'The Tahsildar issues the official pension sanction order, and ₹1,200 is disbursed monthly via DBT to the bank or post office account.',
          kn: 'ತಾಲೂಕು ತಹಶೀಲ್ದಾರರು ಪಿಂಚಣಿ ಆದೇಶ ನೀಡಿದ ನಂತರ ಪ್ರತಿ ತಿಂಗಳು ಖಾತೆಗೆ ₹1,200 ಜಮೆಯಾಗುತ್ತದೆ.'
        }
      }
    ],
    officialPortalUrl: 'https://nadakacheri.karnataka.gov.in/',
    officialGuidelineUrl: 'https://dssp.karnataka.gov.in/',
    responsibleDepartment: {
      en: 'Directorate of Social Security and Pensions, Revenue Dept',
      kn: 'ಸಾಮಾಜಿಕ ಭದ್ರತೆ ಮತ್ತು ಪಿಂಚಣಿಗಳ ನಿರ್ದೇಶನಾಲಯ, ಕಂದಾಯ ಇಲಾಖೆ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-06-25'
  },
  {
    id: 'karnataka-vidyasiri',
    name: {
      en: 'Vidyasiri (Food & Accommodation Stipend)',
      kn: 'ವಿದ್ಯಾಸಿರಿ (ಊಟ ಮತ್ತು ವಸತಿ ಸಹಾಯ ಯೋಜನೆ)'
    },
    shortName: 'Vidyasiri',
    authority: {
      en: 'Department of Backward Classes Welfare, Government of Karnataka',
      kn: 'ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಕಲ್ಯಾಣ ಇಲಾಖೆ, ಕರ್ನಾಟಕ ಸರ್ಕಾರ'
    },
    level: 'karnataka',
    category: 'education_scholarship',
    tagline: {
      en: 'Monthly financial assistance of ₹1,500 for 10 months for backward classes students who did not secure government hostel admission.',
      kn: 'ಸರ್ಕಾರಿ ಹಾಸ್ಟೆಲ್ ಸೀಟು ಸಿಗದ ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಕಾಲೇಜು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ 10 ತಿಂಗಳವರೆಗೆ ಮಾಸಿಕ ₹1,500 ಊಟ-ವಸತಿ ಭತ್ಯೆ.'
    },
    description: {
      en: 'Vidyasiri provides monthly food and accommodation support of ₹1,500 directly into the bank accounts of post-matric rural and underprivileged students studying in urban colleges who applied for but could not get admission into government department hostels.',
      kn: 'ಸರ್ಕಾರಿ ಹಾಸ್ಟೆಲ್‌ಗಳಲ್ಲಿ ಪ್ರವೇಶ ಪಡೆಯಲು ಸಾಧ್ಯವಾಗದ ಗ್ರಾಮೀಣ ಹಾಗೂ ಬಡ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಬಾಡಿಗೆ ಮನೆ ಅಥವಾ ಪಿಜಿಗಳಲ್ಲಿ ಉಳಿದುಕೊಂಡು ವಿದ್ಯಾಭ್ಯಾಸ ಮುಂದುವರಿಸಲು ನೆರವಾಗುವ ಯೋಜನೆ.'
    },
    benefits: {
      en: [
        'Monthly stipend of ₹1,500 for 10 academic months (Total ₹15,000 per year)',
        'Direct benefit transfer (DBT) into student Aadhaar-linked bank account',
        'Empowers students from remote villages to attend top colleges in cities'
      ],
      kn: [
        'ಶೈಕ್ಷಣಿಕ ವರ್ಷದ 10 ತಿಂಗಳವರೆಗೆ ಮಾಸಿಕ ₹1,500 (ವರ್ಷಕ್ಕೆ ಒಟ್ಟು ₹15,000)',
        'ವಿದ್ಯಾರ್ಥಿಯ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ನೇರ ಹಣ ವರ್ಗಾವಣೆ',
        'ದೂರದ ಊರುಗಳಿಂದ ನಗರಗಳಿಗೆ ಬಂದು ಕಲಿಯುವ ಬಡ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ನೇರ ಆಸರೆ'
      ]
    },
    knownCriteria: {
      studentStatus: true,
      educationLevels: ['puc', 'degree', 'diploma', 'postgrad'],
      karnatakaResidentOnly: true,
      maxAnnualIncome: 250000
    },
    disqualifyingConditions: {
      en: [
        'Student already staying in any Government, BCM, Social Welfare, or University hostel',
        'Students whose residence is in the same city/town as their college (minimum 5 km distance required)',
        'Household income exceeding department ceiling'
      ],
      kn: [
        'ಸರ್ಕಾರಿ ಅಥವಾ ಅನುದಾನಿತ ಹಾಸ್ಟೆಲ್‌ನಲ್ಲಿ ಈಗಾಗಲೇ ಪ್ರವೇಶ ಪಡೆದಿದ್ದರೆ',
        'ಕಾಲೇಜು ಇರುವ ಅದೇ ಊರಿನಲ್ಲಿ ಸ್ವಂತ ಮನೆ ಹೊಂದಿದ್ದರೆ (ಕನಿಷ್ಠ 5 ಕಿಮೀ ಅಂತರವಿರಬೇಕು)',
        'ನಿಗದಿತ ಮಿತಿಗಿಂತ ಹೆಚ್ಚಿನ ಕುಟುಂಬ ಆದಾಯವಿದ್ದರೆ'
      ]
    },
    requiredDocuments: {
      mandatory: {
        en: ['Student Aadhaar Card', 'Caste and Income certificate RD number from Nadakacheri', 'College Study Certificate / Admission Fee Receipt', 'Aadhaar-linked Bank Passbook'],
        kn: ['ವಿದ್ಯಾರ್ಥಿಯ ಆಧಾರ್ ಕಾರ್ಡ್', 'ನಾಡಕಚೇರಿ ಆರ್‌ಡಿ ಜಾತಿ ಮತ್ತು ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ', 'ಕಾಲೇಜು ವ್ಯಾಸಂಗ ದೃಢೀಕರಣ ಪತ್ರ / ಶುಲ್ಕ ರಶೀದಿ', 'ಆಧಾರ್ ಲಿಂಕ್ ಆದ ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್']
      },
      conditional: {
        en: ['Distance certificate or declaration verifying college is min 5km away from village'],
        kn: ['ಮನೆ ಮತ್ತು ಕಾಲೇಜಿನ ನಡುವಿನ ಅಂತರದ ದೃಢೀಕರಣ']
      },
      toConfirm: {
        en: ['Ensure application is verified by the college principal on the SSP/BCM portal'],
        kn: ['ಕಾಲೇಜಿನ ಪ್ರಾಂಶುಪಾಲರು ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ದೃಢೀಕರಿಸಿದ್ದಾರೆಯೇ ಎಂದು ನೋಡಿ']
      }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Apply for BCM Hostel Admission', kn: 'ಮೊದಲು ಬಿಸಿಎಂ ಹಾಸ್ಟೆಲ್‌ಗೆ ಅರ್ಜಿ ಹಾಕಿ' },
        description: {
          en: 'Apply for department hostel admission. If hostel seats fill up and admission is not allotted, you become eligible for Vidyasiri.',
          kn: 'ಹಾಸ್ಟೆಲ್‌ಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿದಾಗ ಸೀಟು ಹಂಚಿಕೆಯಾಗದಿದ್ದರೆ ವಿದ್ಯಾರ್ಥಿ ವಿದ್ಯಾಸಿರಿಗೆ ಅರ್ಹರಾಗುತ್ತಾರೆ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Submit Vidyasiri on SSP Portal', kn: 'ಎಸ್‌ಎಸ್‌ಪಿ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ವಿದ್ಯಾಸಿರಿ ಆಯ್ಕೆಮಾಡಿ' },
        description: {
          en: 'Log in to ssp.postmatric.karnataka.gov.in and select the Vidyasiri (Food & Accommodation) option under Backward Classes Welfare.',
          kn: 'ssp.postmatric.karnataka.gov.in ಗೆ ಲಾಗಿನ್ ಆಗಿ ವಿದ್ಯಾಸಿರಿ ಆಯ್ಕೆಯನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'College Verification & District Sanction', kn: 'ಕಾಲೇಜು ಮತ್ತು ಜಿಲ್ಲಾ ಮಟ್ಟದ ಪರಿಶೀಲನೆ' },
        description: {
          en: 'College scholarship nodal officer approves your enrollment and attendance, forwarding to District BCM officer for sanction.',
          kn: 'ಕಾಲೇಜು ಪ್ರಾಂಶುಪಾಲರು ಮತ್ತು ಜಿಲ್ಲಾ ಬಿಸಿಎಂ ಅಧಿಕಾರಿಗಳು ಹಾಜರಾತಿ ಪರಿಶೀಲಿಸಿ ಅನುಮೋದಿಸುತ್ತಾರೆ.'
        }
      }
    ],
    officialPortalUrl: 'https://bcwd.karnataka.gov.in/',
    officialGuidelineUrl: 'https://ssp.postmatric.karnataka.gov.in/',
    responsibleDepartment: {
      en: 'Backward Classes Welfare Department, Karnataka',
      kn: 'ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಕಲ್ಯಾಣ ಇಲಾಖೆ, ಕರ್ನಾಟಕ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-14'
  },
  {
    id: 'central-pm-svanidhi',
    name: {
      en: 'PM SVANidhi (Street Vendors AtmaNirbhar Nidhi)',
      kn: 'ಪಿಎಂ ಸ್ವನಿಧಿ (ಬೀದಿ ಬದಿ ವ್ಯಾಪಾರಿಗಳ ಸ್ವಾವಲಂಬನೆ ಯೋಜನೆ)'
    },
    shortName: 'PM SVANidhi',
    authority: {
      en: 'Ministry of Housing and Urban Affairs (MoHUA) & Karnataka Urban Development Dept',
      kn: 'ವಸತಿ ಮತ್ತು ನಗರ ವ್ಯವಹಾರಗಳ ಸಚಿವಾಲಯ ಮತ್ತು ಪೌರಾಡಳಿತ ನಿರ್ದೇಶನಾಲಯ, ಕರ್ನಾಟಕ'
    },
    level: 'both',
    category: 'employment_skills',
    tagline: {
      en: 'Collateral-free working capital micro-loans of ₹10,000, ₹20,000 and ₹50,000 with 7% interest subsidy for urban street vendors.',
      kn: 'ಬೀದಿ ಬದಿ ವ್ಯಾಪಾರಿಗಳಿಗೆ ಯಾವುದೇ ಜಾಮೀನಿಲ್ಲದೆ ₹10,000, ₹20,000 ಮತ್ತು ₹50,000 ದುಡಿಯುವ ಬಂಡವಾಳ ಸಾಲ ಮತ್ತು ಶೇ.7 ಬಡ್ಡಿ ಸಹಾಯಧನ.'
    },
    description: {
      en: 'PM SVANidhi empowers street vendors with accessible formal credit without collateral, rewarding timely repayments with increased loan slabs up to ₹50,000 and cashback for digital transactions.',
      kn: 'ನಗರ ಪ್ರದೇಶಗಳಲ್ಲಿ ವ್ಯಾಪಾರ ಮಾಡುವ ಬೀದಿ ಬದಿ ವ್ಯಾಪಾರಿಗಳಿಗೆ ಶೂನ್ಯ ಖಾತರಿಯೊಂದಿಗೆ ಕಡಿಮೆ ಬಡ್ಡಿಯಲ್ಲಿ ಸಾಲ ಸೌಲಭ್ಯ ಮತ್ತು ಡಿಜಿಟಲ್ ವಹಿವಾಟಿಗೆ ಕ್ಯಾಶ್‌ಬ್ಯಾಕ್ ನೀಡುವ ಯೋಜನೆ.'
    },
    benefits: {
      en: [
        '1st tranche loan: ₹10,000 (repayable in 12 monthly instalments)',
        '2nd tranche: ₹20,000; 3rd tranche: ₹50,000 upon timely repayment',
        '7% annual interest subsidy credited directly to bank account',
        'Monthly cashback up to ₹100 for digital payments using QR code'
      ],
      kn: [
        '1ನೇ ಕಂತಿನಲ್ಲಿ ₹10,000 ಸಾಲ (12 ತಿಂಗಳ ಕಂತುಗಳಲ್ಲಿ ಮರುಪಾವತಿ)',
        'ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಮರುಪಾವತಿಸಿದರೆ 2ನೇ ಕಂತಿನಲ್ಲಿ ₹20,000 ಮತ್ತು 3ನೇ ಕಂತಿನಲ್ಲಿ ₹50,000 ಸಾಲ',
        'ಶೇ.7 ವಾರ್ಷಿಕ ಬಡ್ಡಿ ಸಹಾಯಧನ ನೇರವಾಗಿ ಖಾತೆಗೆ ಜಮೆ',
        'ಕ್ಯೂಆರ್ ಕೋಡ್ ಡಿಜಿಟಲ್ ವ್ಯಾಪಾರ ಮಾಡಿದರೆ ತಿಂಗಳಿಗೆ ₹100 ವರೆಗೆ ಕ್ಯಾಶ್‌ಬ್ಯಾಕ್'
      ]
    },
    knownCriteria: {
      employmentStatus: ['informal', 'self_employed'],
      minAge: 18
    },
    disqualifyingConditions: {
      en: [
        'Defaulted on prior bank loans with active willful default classification',
        'Vendor operating outside notified urban local body (BBMP, City Municipal Councils) without vendor survey certificate'
      ],
      kn: [
        'ಬ್ಯಾಂಕ್ ಸಾಲ ಮರುಪಾವತಿ ಮಾಡದೆ ಸುಸ್ತಿದಾರರಾಗಿದ್ದರೆ',
        'ನಗರ ಸ್ಥಳೀಯ ಸಂಸ್ಥೆಗಳ (ಬಿಬಿಎಂಪಿ/ನಗರಸಭೆ) ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ಬೀದಿ ವ್ಯಾಪಾರ ಪ್ರಮಾಣಪತ್ರ ಇಲ್ಲದಿದ್ದರೆ'
      ]
    },
    requiredDocuments: {
      mandatory: {
        en: ['Certificate of Vending / ID Card issued by Urban Local Body (ULB/BBMP) or Letter of Recommendation (LoR)', 'Aadhaar Card', 'Active Bank Passbook'],
        kn: ['ಬಿಬಿಎಂಪಿ ಅಥವಾ ಸ್ಥಳೀಯ ಸಂಸ್ಥೆ ನೀಡಿದ ಬೀದಿ ವ್ಯಾಪಾರಿ ಗುರುತಿನ ಚೀಟಿ ಅಥವಾ ಶಿಫಾರಸು ಪತ್ರ (LoR)', 'ಆಧಾರ್ ಕಾರ್ಡ್', 'ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್']
      },
      conditional: {
        en: ['Mobile phone linked with Aadhaar'],
        kn: ['ಆಧಾರ್ ಲಿಂಕ್ ಆದ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ']
      },
      toConfirm: {
        en: ['Verify vendor census listing with your ward BBMP Revenue Inspector'],
        kn: ['ನಿಮ್ಮ ವಾರ್ಡ್‌ನ ಬಿಬಿಎಂಪಿ ಕಚೇರಿಯಲ್ಲಿ ವ್ಯಾಪಾರಿ ಸಮೀಕ್ಷೆ ಪಟ್ಟಿ ಪರಿಶೀಲಿಸಿ']
      }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Check Vending Status in BBMP / ULB Survey', kn: 'ಬಿಬಿಎಂಪಿ ಸಮೀಕ್ಷೆಯಲ್ಲಿ ಹೆಸರು ಪರಿಶೀಲಿಸಿ' },
        description: {
          en: 'Check if your name exists in the street vendor survey on pmsvanidhi.mohua.gov.in or obtain a Letter of Recommendation (LoR) from BBMP.',
          kn: 'pmsvanidhi.mohua.gov.in ನಲ್ಲಿ ಹೆಸರು ನೋಡಿ ಅಥವಾ ಬಿಬಿಎಂಪಿಯಿಂದ ಶಿಫಾರಸು ಪತ್ರ (LoR) ಪಡೆದುಕೊಳ್ಳಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Apply Online or at Common Service Centre', kn: 'ಆನ್‌ಲೈನ್ ಅಥವಾ ಸಿಎಸ್‌ಸಿ ಕೇಂದ್ರದಲ್ಲಿ ಅರ್ಜಿ ಹಾಕಿ' },
        description: {
          en: 'Apply online or visit any Bangalore One / CSC centre with your Aadhaar and vending ID.',
          kn: 'ಬೆಂಗಳೂರು ಒನ್ ಅಥವಾ ಸಿಎಸ್‌ಸಿ ಕೇಂದ್ರದಲ್ಲಿ ಆಧಾರ್ ಮತ್ತು ವ್ಯಾಪಾರಿ ಕಾರ್ಡ್ ನೀಡಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Bank Loan Sanction & Disbursement', kn: 'ಬ್ಯಾಂಕಿನಿಂದ ಸಾಲ ಮಂಜೂರಾತಿ ಮತ್ತು ಜಮೆ' },
        description: {
          en: 'The preferred partner bank approves the collateral-free loan and disburses ₹10,000 directly to your account.',
          kn: 'ಆಯ್ಕೆಮಾಡಿದ ಬ್ಯಾಂಕ್ ಯಾವುದೇ ಗ್ಯಾರಂಟಿ ಇಲ್ಲದೆ ₹10,000 ಸಾಲವನ್ನು ನಿಮ್ಮ ಖಾತೆಗೆ ಜಮೆ ಮಾಡುತ್ತದೆ.'
        }
      }
    ],
    officialPortalUrl: 'https://pmsvanidhi.mohua.gov.in/',
    officialGuidelineUrl: 'https://pmsvanidhi.mohua.gov.in/Home/Schemes',
    responsibleDepartment: {
      en: 'Ministry of Housing and Urban Affairs & BBMP',
      kn: 'ವಸತಿ ಮತ್ತು ನಗರ ವ್ಯವಹಾರಗಳ ಸಚಿವಾಲಯ ಮತ್ತು ಬಿಬಿಎಂಪಿ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-07-30'
  },
  {
    id: 'central-pm-matru-vandana',
    name: {
      en: 'Pradhan Mantri Matru Vandana Yojana (PMMVY)',
      kn: 'ಪ್ರಧಾನ ಮಂತ್ರಿ ಮಾತೃ ವಂದನಾ ಯೋಜನೆ'
    },
    shortName: 'PMMVY',
    authority: {
      en: 'Ministry of Women and Child Development & Karnataka Women & Child Dept',
      kn: 'ಮಹಿಳಾ ಮತ್ತು ಮಕ್ಕಳ ಅಭಿವೃದ್ಧಿ ಸಚಿವಾಲಯ, ಭಾರತ ಸರ್ಕಾರ'
    },
    level: 'both',
    category: 'women_child',
    tagline: {
      en: 'Maternity cash benefit of ₹5,000 for the first child and ₹6,000 for a second girl child directly to mothers.',
      kn: 'ಮೊದಲ ಮಗುವಿಗೆ ₹5,000 ಮತ್ತು ಎರಡನೇ ಹೆಣ್ಣು ಮಗುವಿನ ಜನನಕ್ಕೆ ₹6,000 ತಾಯಂದಿರಿಗೆ ನೇರ ಹೆರಿಗೆ ಆರ್ಥಿಕ ನೆರವು.'
    },
    description: {
      en: 'PMMVY provides conditional cash incentive direct to the mother bank accounts to compensate for wage loss during pregnancy and lactation, improving maternal nutrition and institutional safe deliveries.',
      kn: 'ಗರ್ಭಿಣಿಯರು ಮತ್ತು ಬಾಣಂತಿಯರಿಗೆ ಪೌಷ್ಟಿಕ ಆಹಾರ ಒದಗಿಸಲು ಮತ್ತು ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ ಸುರಕ್ಷಿತ ಹೆರಿಗೆ ಉತ್ತೇಜಿಸಲು ನೇರ ನಗದು ನೆರವು ನೀಡುವ ಪ್ರಮುಖ ಯೋಜನೆ.'
    },
    benefits: {
      en: [
        '₹5,000 in two instalments for first living child',
        '₹6,000 in a single instalment upon birth of second girl child',
        'Promotes institutional delivery and infant immunization'
      ],
      kn: [
        'ಮೊದಲ ಮಗುವಿಗೆ ಎರಡು ಕಂತುಗಳಲ್ಲಿ ಒಟ್ಟು ₹5,000 ನೆರವು',
        'ಎರಡನೇ ಮಗು ಹೆಣ್ಣಾದಲ್ಲಿ ಒಂದೇ ಕಂತಿನಲ್ಲಿ ₹6,000 ನೆರವು',
        'ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ ಸುರಕ್ಷಿತ ಹೆರಿಗೆ ಹಾಗೂ ಮಗುವಿಗೆ ಲಸಿಕೆ ಪ್ರೋತ್ಸಾಹ'
      ]
    },
    knownCriteria: {
      gender: 'female',
      maternalSupport: true,
      minAge: 19
    },
    disqualifyingConditions: {
      en: [
        'Women who are in regular employment with Central or State Government or PSUs',
        'Women receiving similar paid maternity leave benefits under other laws'
      ],
      kn: [
        'ಸರ್ಕಾರಿ ಅಥವಾ ಸಾರ್ವಜನಿಕ ವಲಯದ ಉದ್ಯೋಗದಲ್ಲಿರುವ ಮಹಿಳೆಯರು',
        'ಇತರ ಕಾನೂನುಗಳಡಿ ವೇತನ ಸಹಿತ ಹೆರಿಗೆ ರಜೆ ಸೌಲಭ್ಯ ಪಡೆಯುವವರು'
      ]
    },
    requiredDocuments: {
      mandatory: {
        en: ['Mother and Father Aadhaar Cards', 'Mother and Child Protection (MCP) card / Thayi Card issued by Karnataka Anganwadi/Health Dept', 'Mother Aadhaar-linked Bank Account Passbook'],
        kn: ['ತಾಯಿ ಮತ್ತು ತಂದೆಯ ಆಧಾರ್ ಕಾರ್ಡ್', 'ಅಂಗನವಾಡಿ / ಆರೋಗ್ಯ ಇಲಾಖೆ ನೀಡಿದ ತಾಯಿ ಕಾರ್ಡ್ (MCP Card)', 'ತಾಯಿಯ ಆಧಾರ್ ಲಿಂಕ್ ಆದ ಬ್ಯಾಂಕ್ ಖಾತೆ ವಿವರ']
      },
      conditional: {
        en: ['Child birth certificate (for subsequent instalments)'],
        kn: ['ಮಗುವಿನ ಜನನ ಪ್ರಮಾಣಪತ್ರ (ನಂತರದ ಕಂತಿಗೆ)']
      },
      toConfirm: {
        en: ['Ensure early registration within 570 days of Last Menstrual Period (LMP) with local Anganwadi worker'],
        kn: ['ಸ್ಥಳೀಯ ಅಂಗನವಾಡಿ ಕಾರ್ಯಕರ್ತೆಯ ಬಳಿ ತಾಯಿ ಕಾರ್ಡ್ ನೋಂದಣಿ ಮಾಡಿಸಿರುವುದನ್ನು ಖಚಿತಪಡಿಸಿ']
      }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Register at Local Anganwadi Centre', kn: 'ಸ್ಥಳೀಯ ಅಂಗನವಾಡಿ ಕೇಂದ್ರದಲ್ಲಿ ನೋಂದಾಯಿಸಿ' },
        description: {
          en: 'Register your pregnancy at the local Anganwadi or PHC to receive your Thayi Card (Mother & Child Protection Card).',
          kn: 'ಗರ್ಭಾವಸ್ಥೆಯ ಆರಂಭದಲ್ಲೇ ಅಂಗನವಾಡಿ ಅಥವಾ ಪ್ರಾಥಮಿಕ ಆರೋಗ್ಯ ಕೇಂದ್ರದಲ್ಲಿ ತಾಯಿ ಕಾರ್ಡ್ ಪಡೆದುಕೊಳ್ಳಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Submit PMMVY Application Form', kn: 'ಪಿಎಂಎಂವಿವೈ ಅರ್ಜಿ ನಮೂನೆ ಸಲ್ಲಿಸಿ' },
        description: {
          en: 'Fill Form 1A with your Anganwadi worker or apply online on pmmvy.wcd.gov.in.',
          kn: 'ಅಂಗನವಾಡಿ ಕಾರ್ಯಕರ್ತೆ ಮೂಲಕ ಅಥವಾ pmmvy.wcd.gov.in ನಲ್ಲಿ ಆನ್‌ಲೈನ್ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Instalment DBT Disbursed', kn: 'ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಹಣ ಜಮೆ' },
        description: {
          en: 'Receive ₹3,000 at registration/antenatal checkup and remaining ₹2,000 post institutional birth & first immunization cycle.',
          kn: 'ಮೊದಲ ಕಂತು ನೋಂದಣಿ ವೇಳೆಗೆ ಮತ್ತು ಉಳಿದ ಕಂತು ಹೆರಿಗೆ ಹಾಗೂ ಮೊದಲ ಲಸಿಕೆ ಮುಗಿದ ನಂತರ ಜಮೆಯಾಗುತ್ತದೆ.'
        }
      }
    ],
    officialPortalUrl: 'https://pmmvy.wcd.gov.in/',
    officialGuidelineUrl: 'https://wcd.karnataka.gov.in/',
    responsibleDepartment: {
      en: 'Ministry of Women and Child Development',
      kn: 'ಮಹಿಳಾ ಮತ್ತು ಮಕ್ಕಳ ಅಭಿವೃದ್ಧಿ ಇಲಾಖೆ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-08-22'
  },
  {
    id: 'karnataka-disability-assistance',
    name: {
      en: 'Karnataka Disability Monthly Pension & ADIP',
      kn: 'ಕರ್ನಾಟಕ ವಿಶೇಷ ಚೇತನರ ಮಾಸಿಕ ಪಿಂಚಣಿ ಮತ್ತು ಸಾಧನ ನೆರವು'
    },
    shortName: 'Disability Pension & ADIP',
    authority: {
      en: 'Directorate for the Empowerment of Differently Abled and Senior Citizens, Karnataka',
      kn: 'ವಿಶೇಷ ಚೇತನರ ಹಾಗೂ ಹಿರಿಯ ನಾಗರಿಕರ ಸಬಲೀಕರಣ ನಿರ್ದೇಶನಾಲಯ, ಕರ್ನಾಟಕ'
    },
    level: 'both',
    category: 'disability',
    tagline: {
      en: 'Monthly pension up to ₹2,000 and free assistive devices (wheelchairs, hearing aids, tricycles) for persons with benchmark disabilities.',
      kn: 'ವಿಶೇಷ ಚೇತನರಿಗೆ ಮಾಸಿಕ ₹2,000 ವರೆಗೆ ಪಿಂಚಣಿ ಮತ್ತು ಉಚಿತ ಸಹಾಯಕ ಉಪಕರಣಗಳ (ಗಾಲಿಕುರ್ಚಿ, ಶ್ರವಣ ಸಾಧನ) ವಿತರಣೆ.'
    },
    description: {
      en: 'Provides monthly subsistence pension between ₹1,400 to ₹2,000 depending on disability severity (40% to 75%+) along with free motorized vehicles, braille kits, hearing aids, and aids under the ADIP scheme.',
      kn: 'ಶೇ.40 ಕ್ಕಿಂತ ಹೆಚ್ಚು ಅಂಗವೈಕಲ್ಯವಿರುವ ವ್ಯಕ್ತಿಗಳಿಗೆ ಮಾಸಿಕ ₹1,400 ರಿಂದ ₹2,000 ವರೆಗೆ ಗೌರವ ಪಿಂಚಣಿ ಮತ್ತು ಅವಶ್ಯಕ ಉಪಕರಣಗಳನ್ನು ಉಚಿತವಾಗಿ ನೀಡಲಾಗುತ್ತದೆ.'
    },
    benefits: {
      en: [
        'Monthly pension of ₹1,400 for 40%–74% disability; ₹2,000 for 75%+ disability',
        'Free motorized tricycles, wheelchairs, hearing aids, and artificial limbs under ADIP',
        '100% free bus travel on KSRTC/BMTC within Karnataka',
        'Job reservations and skill development quotas'
      ],
      kn: [
        'ಶೇ.40-74 ಅಂಗವೈಕಲ್ಯಕ್ಕೆ ಮಾಸಿಕ ₹1,400; ಶೇ.75 ಕ್ಕಿಂತ ಹೆಚ್ಚಿದ್ದರೆ ಮಾಸಿಕ ₹2,000 ಪಿಂಚಣಿ',
        'ಮೋಟಾರೀಕೃತ ತ್ರಿಚಕ್ರ ವಾಹನ, ವ್ಹೀಲ್‌ಚೇರ್, ಶ್ರವಣ ಸಾಧನಗಳ ಉಚಿತ ವಿತರಣೆ',
        'ರಾಜ್ಯದ ಸರ್ಕಾರಿ ಬಸ್‌ಗಳಲ್ಲಿ ಉಚಿತ ಪ್ರಯಾಣದ ಪಾಸ್',
        'ಸರ್ಕಾರಿ ಉದ್ಯೋಗಗಳಲ್ಲಿ ಮೀಸಲಾತಿ ಹಾಗೂ ಆದ್ಯತೆ'
      ]
    },
    knownCriteria: {
      hasDisability: true,
      disabilityAssistance: true
    },
    disqualifyingConditions: {
      en: [
        'Disability percentage below 40% threshold as certified by the District Medical Board',
        'Receiving other central/state civil government employee pensions'
      ],
      kn: [
        'ಜಿಲ್ಲಾ ವೈದ್ಯಕೀಯ ಮಂಡಳಿಯಿಂದ ಶೇ.40 ಕ್ಕಿಂತ ಕಡಿಮೆ ಅಂಗವೈಕಲ್ಯ ಪ್ರಮಾಣವಿದ್ದರೆ',
        'ಬೇರೆ ಸರ್ಕಾರಿ ನೌಕರರ ಪಿಂಚಣಿ ಪಡೆಯುತ್ತಿದ್ದರೆ'
      ]
    },
    requiredDocuments: {
      mandatory: {
        en: ['Unique Disability ID (UDID) Card / Medical Board Disability Certificate', 'Aadhaar Card', 'Income Certificate from Nadakacheri', 'Aadhaar-linked Bank Account Passbook'],
        kn: ['ವಿಶೇಷ ಚೇತನರ ಯುಡಿಐಡಿ (UDID) ಕಾರ್ಡ್ ಅಥವಾ ವೈದ್ಯಕೀಯ ಮಂಡಳಿಯ ಪ್ರಮಾಣಪತ್ರ', 'ಆಧಾರ್ ಕಾರ್ಡ್', 'ನಾಡಕಚೇರಿ ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ', 'ಆಧಾರ್ ಲಿಂಕ್ ಆದ ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್']
      },
      conditional: {
        en: ['Full body photograph showing disability condition'],
        kn: ['ಅಂಗವೈಕಲ್ಯ ಕಾಣಿಸುವ ಪೂರ್ಣ ಅಳತೆಯ ಭಾವಚಿತ್ರ']
      },
      toConfirm: {
        en: ['Ensure UDID card is generated or verified at swavlambancard.gov.in'],
        kn: ['swavlambancard.gov.in ನಲ್ಲಿ ಯುಡಿಐಡಿ ಕಾರ್ಡ್ ಸಕ್ರಿಯವಾಗಿದೆಯೇ ಎಂದು ನೋಡಿ']
      }
    },
    applicationSteps: [
      {
        stepNumber: 1,
        title: { en: 'Obtain UDID Card / Medical Assessment', kn: 'ಯುಡಿಐಡಿ ಕಾರ್ಡ್ / ವೈದ್ಯಕೀಯ ಮಂಡಳಿ ಪರೀಕ್ಷೆ' },
        description: {
          en: 'Apply on swavlambancard.gov.in and attend the designated district hospital medical board to get your UDID card.',
          kn: 'swavlambancard.gov.in ನಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ ಜಿಲ್ಲಾ ಆಸ್ಪತ್ರೆಯಲ್ಲಿ ವೈದ್ಯಕೀಯ ಪರೀಕ್ಷೆ ಮಾಡಿಸಿ ಯುಡಿಐಡಿ ಕಾರ್ಡ್ ಪಡೆಯಿರಿ.'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Apply on Seva Sindhu or Nadakacheri', kn: 'ಸೇವಾ ಸಿಂಧು ಅಥವಾ ನಾಡಕಚೇರಿಯಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ' },
        description: {
          en: 'Submit disability pension application on sevasindhu.karnataka.gov.in with your UDID and bank details.',
          kn: 'ಸೇವಾ ಸಿಂಧು ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಯುಡಿಐಡಿ ಸಂಖ್ಯೆಯೊಂದಿಗೆ ಪಿಂಚಣಿಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Sanction by Tahsildar and Monthly DBT', kn: 'ಮಂಜೂರಾತಿ ಮತ್ತು ಮಾಸಿಕ ಹಣ ಜಮೆ' },
        description: {
          en: 'Upon Tahsildar approval, pension is transferred directly to your bank account every month.',
          kn: 'ತಹಶೀಲ್ದಾರ್ ಮಂಜೂರಾತಿ ನೀಡಿದ ನಂತರ ಪ್ರತಿ ತಿಂಗಳು ಖಾತೆಗೆ ನೇರವಾಗಿ ಪಿಂಚಣಿ ಜಮೆಯಾಗುತ್ತದೆ.'
        }
      }
    ],
    officialPortalUrl: 'https://swavlambancard.gov.in/',
    officialGuidelineUrl: 'https://welfareofdisabled.karnataka.gov.in/',
    responsibleDepartment: {
      en: 'Empowerment of Differently Abled Directorate, Karnataka',
      kn: 'ವಿಶೇಷ ಚೇತನರ ಸಬಲೀಕರಣ ನಿರ್ದೇಶನಾಲಯ, ಕರ್ನಾಟಕ'
    },
    verificationStatus: 'verified_official',
    lastVerifiedDate: '2026-07-28'
  }
];
