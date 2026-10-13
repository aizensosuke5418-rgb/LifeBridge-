export interface WidowWelfareScheme {
  id: string;
  name: { en: string; kn: string };
  authority: { en: string; kn: string };
  pensionAmount: { en: string; kn: string };
  ageLimit: { en: string; kn: string };
  incomeCeiling: { en: string; kn: string };
  description: { en: string; kn: string };
  keyBenefits: { en: string[]; kn: string[] };
  mandatoryDocuments: { en: string[]; kn: string[] };
  applicationSteps: { en: string[]; kn: string[] };
  remarriageRule: { en: string; kn: string };
  childrenEducationSupport: { en: string; kn: string };
  housingSupport: { en: string; kn: string };
  freeLegalAid: { en: string; kn: string };
  helpline: string;
  portalUrl: string;
}

export const WIDOW_WELFARE_DATABASE: WidowWelfareScheme[] = [
  {
    id: 'karnataka-widow-pension',
    name: {
      en: 'Karnataka Destitute Widow Pension Scheme (Vidhava Vethana)',
      kn: 'ಕರ್ನಾಟಕ ವಿಧವಾ ವೇತನ ಪಿಂಚಣಿ ಯೋಜನೆ'
    },
    authority: {
      en: 'Directorate of Social Security and Pensions, Revenue Department, Karnataka',
      kn: 'ಸಾಮಾಜಿಕ ಭದ್ರತೆ ಮತ್ತು ಪಿಂಚಣಿಗಳ ನಿರ್ದೇಶನಾಲಯ, ಕಂದಾಯ ಇಲಾಖೆ, ಕರ್ನಾಟಕ'
    },
    pensionAmount: {
      en: '₹1,200 per month credited directly to bank account via DBT',
      kn: 'ಪ್ರತಿ ತಿಂಗಳು ₹1,200 ನೇರ ನಗದು ಬ್ಯಾಂಕ್ ಜಮೆ (ಡಿಬಿಟಿ)'
    },
    ageLimit: {
      en: 'Minimum 18 years of age (No upper age ceiling; transfers to Sandhya Suraksha if applicable)',
      kn: 'ಕನಿಷ್ಠ ೧೮ ವರ್ಷ ತುಂಬಿರಬೇಕು (ಗರಿಷ್ಠ ವಯೋಮಿತಿಯಿಲ್ಲ)'
    },
    incomeCeiling: {
      en: 'Combined family income must not exceed ₹32,000 per annum (Urban/Rural)',
      kn: 'ಕುಟುಂಬದ ವಾರ್ಷಿಕ ಆದಾಯ ₹32,000 ಕ್ಕಿಂತ ಹೆಚ್ಚಿರಬಾರದು'
    },
    description: {
      en: 'Provides lifelong financial sustenance and monthly dignity pension for women who have lost their husbands and have no independent adequate livelihood or family support.',
      kn: 'ಪತಿಯನ್ನು ಕಳೆದುಕೊಂಡು ಆರ್ಥಿಕ ಆಸರೆಯಿಲ್ಲದ ಅಸಹಾಯಕ ವಿಧವೆಯರಿಗೆ ಘನತೆಯ ಜೀವನ ನಡೆಸಲು ಸರ್ಕಾರ ನೀಡುವ ಮಾಸಿಕ ಪಿಂಚಣಿ.'
    },
    keyBenefits: {
      en: [
        'Guaranteed monthly pension of ₹1,200 deposited between 1st and 10th of every month',
        'Direct linkage with Karnataka Gruha Lakshmi (₹2,000/mo) if registered as household head',
        'Free bus pass concessions and preference in public distribution ration allocations'
      ],
      kn: [
        'ಪ್ರತಿ ತಿಂಗಳು ₹1,200 ಖಚಿತ ಪಿಂಚಣಿ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಜಮೆ',
        'ಕುಟುಂಬದ ಯಜಮಾನಿಯಾಗಿದ್ದರೆ ಗೃಹಲಕ್ಷ್ಮಿ ₹2,000 ಜೊತೆಗೆ ಹೆಚ್ಚುವರಿಯಾಗಿ ಲಭ್ಯ',
        'ಸರ್ಕಾರಿ ಬಸ್‌ಗಳಲ್ಲಿ ರಿಯಾಯಿತಿ ಮತ್ತು ಪಡಿತರದಲ್ಲಿ ಆದ್ಯತೆ'
      ]
    },
    mandatoryDocuments: {
      en: [
        'Official Death Certificate of the deceased husband (issued by Corporation/Panchayat)',
        'Applicant Aadhaar Card with active mobile linkage',
        'Income Certificate from Nadakacheri (RD Number verified by Tahsildar)',
        'Unremarried Certificate / Self-Declaration endorsed by Village Accountant',
        'Aadhaar-seeded active Bank or Post Office Passbook with NPCI mapping'
      ],
      kn: [
        'ಪತಿಯ ಅಧಿಕೃತ ಮರಣ ಪ್ರಮಾಣಪತ್ರ (ಡೆತ್ ಸರ್ಟಿಫಿಕೇಟ್)',
        'ವಿಧವಾ ಮಹಿಳೆಯ ಆಧಾರ್ ಕಾರ್ಡ್',
        'ನಾಡಕಚೇರಿಯ ಆರ್‌ಡಿ ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ',
        'ಮರುಮದುವೆಯಾಗಿಲ್ಲ ಎಂದು ಗ್ರಾಮ ಲೆಕ್ಕಿಗರು ನೀಡಿದ ದೃಢೀಕರಣ ಪತ್ರ',
        'ಆಧಾರ್-ಡಿಬಿಟಿ ಲಿಂಕ್ ಆಗಿರುವ ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್'
      ]
    },
    applicationSteps: {
      en: [
        'Step 1: Obtain certified Death Certificate and Nadakacheri Income Certificate (≤ ₹32,000/yr).',
        'Step 2: Visit nearest Bangalore One, Grama One, or Atalji Janasnehi Kendra (Nadakacheri).',
        'Step 3: Submit application with bank account details. Operator issues official acknowledgement slip.',
        'Step 4: Village Accountant (VA) & Revenue Inspector (RI) conduct quick local field verification.',
        'Step 5: Tahsildar passes digital sanction order; ₹1,200 monthly DBT pension starts.'
      ],
      kn: [
        'ಹಂತ ೧: ಪತಿಯ ಮರಣ ಪ್ರಮಾಣಪತ್ರ ಮತ್ತು ನಾಡಕಚೇರಿ ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ ಪಡೆಯಿರಿ.',
        'ಹಂತ ೨: ಹತ್ತಿರದ ಗ್ರಾಮ ಒನ್, ಬೆಂಗಳೂರು ಒನ್ ಅಥವಾ ನಾಡಕಚೇರಿಗೆ ಭೇಟಿ ನೀಡಿ.',
        'ಹಂತ ೩: ಮೂಲ ದಾಖಲೆಗಳೊಂದಿಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ ಸ್ವೀಕೃತಿ ರಶೀದಿ ಪಡೆಯಿರಿ.',
        'ಹಂತ ೪: ಗ್ರಾಮ ಲೆಕ್ಕಿಗರು ಮತ್ತು ಕಂದಾಯ ನಿರೀಕ್ಷಕರು ಸ್ಥಳ ಪರಿಶೀಲನೆ ನಡೆಸುತ್ತಾರೆ.',
        'ಹಂತ ೫: ತಹಶೀಲ್ದಾರ್ ಮಂಜೂರಾತಿ ನೀಡಿದ ನಂತರ ಪ್ರತಿ ತಿಂಗಳು ₹1,200 ಜಮೆಯಾಗುತ್ತದೆ.'
      ]
    },
    remarriageRule: {
      en: 'If a young widow remarries, Karnataka Women & Child Welfare provides an incentive grant of up to ₹3,00,000 under the Widow Remarriage Promotion Scheme, after which monthly widow pension ceases.',
      kn: 'ಮಹಿಳೆಯು ಮರುಮದುವೆಯಾದಲ್ಲಿ ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ವಿಧವಾ ಮರುಮದುವೆ ಪ್ರೋತ್ಸಾಹ ಯೋಜನೆಯಡಿ ₹3,00,000 ಆರ್ಥಿಕ ಪ್ರೋತ್ಸಾಹ ಧನ ನೀಡಲಾಗುತ್ತದೆ (ನಂತರ ಮಾಸಿಕ ಪಿಂಚಣಿ ನಿಲ್ಲುತ್ತದೆ).'
    },
    childrenEducationSupport: {
      en: 'Children of widows receive 100% full fee waiver and priority admission into Morarji Desai, Kittur Rani Chennamma residential schools, plus Vidyasiri hostel stipends.',
      kn: 'ವಿಧವೆಯರ ಮಕ್ಕಳಿಗೆ ಮೊರಾರ್ಜಿ ದೇಸಾಯಿ, ಕಿತ್ತೂರು ಚೆನ್ನಮ್ಮ ವಸತಿ ಶಾಲೆಗಳಲ್ಲಿ ಉಚಿತ ಪ್ರವೇಶ ಮತ್ತು ಎಸ್‌ಎಸ್‌ಪಿ ಪೂರ್ಣ ಶುಲ್ಕ ವಿನಾಯಿತಿ.'
    },
    housingSupport: {
      en: 'Special priority quota in Rajiv Gandhi Housing Corporation & Dr. B.R. Ambedkar Nivas Yojana with subsidy up to ₹1.75 Lakhs for building a house.',
      kn: 'ರಾಜೀವ್ ಗಾಂಧಿ ವಸತಿ ನಿಗಮ ಹಾಗೂ ಅಂಬೇಡ್ಕರ್ ನಿವಾಸ್ ಯೋಜನೆಯಡಿ ಸ್ವಂತ ಮನೆ ನಿರ್ಮಾಣಕ್ಕೆ ₹1.75 ಲಕ್ಷದವರೆಗೆ ಸಬ್ಸಿಡಿ.'
    },
    freeLegalAid: {
      en: 'Free legal aid and lawyer assistance for property inheritance disputes and matrimonial claims through Karnataka State Legal Services Authority (KSLSA) at any Taluk court.',
      kn: 'ಆಸ್ತಿ ಹಕ್ಕು ಮತ್ತು ಕೌಟುಂಬಿಕ ವಿವಾದಗಳಿಗೆ ತಾಲೂಕು ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರದ (ಕೆಎಸ್‌ಎಲ್‌ಎಸ್‌ಎ) ಮೂಲಕ ಉಚಿತ ವಕೀಲರ ಸೇವೆ.'
    },
    helpline: '155214 (Karnataka Revenue / Pension Helpline) / 181 (Women Helpline)',
    portalUrl: 'https://nadakacheri.karnataka.gov.in/'
  },
  {
    id: 'central-ignwps-pension',
    name: {
      en: 'Indira Gandhi National Widow Pension Scheme (IGNWPS)',
      kn: 'ಇಂದಿರಾ ಗಾಂಧಿ ರಾಷ್ಟ್ರೀಯ ವಿಧವಾ ಪಿಂಚಣಿ ಯೋಜನೆ'
    },
    authority: {
      en: 'Ministry of Rural Development, Government of India (NSAP)',
      kn: 'ಗ್ರಾಮೀಣಾಭಿವೃದ್ಧಿ ಸಚಿವಾಲಯ, ಭಾರತ ಸರ್ಕಾರ (ರಾಷ್ಟ್ರೀಯ ಸಾಮಾಜಿಕ ನೆರವು ಯೋಜನೆ)'
    },
    pensionAmount: {
      en: '₹300/month central share + State supplementary share (Karnataka pays ₹1,200 total)',
      kn: 'ಕೇಂದ್ರ ಮತ್ತು ರಾಜ್ಯ ಸರ್ಕಾರದ ಜಂಟಿ ಸಾಮಾಜಿಕ ಭದ್ರತಾ ಪಿಂಚಣಿ'
    },
    ageLimit: {
      en: 'Widows aged between 40 and 79 years belonging to BPL households',
      kn: '೪೦ ರಿಂದ ೭೯ ವರ್ಷ ವಯಸ್ಸಿನ ಬಿಪಿಎಲ್ ಕುಟುಂಬದ ವಿಧವೆಯರು'
    },
    incomeCeiling: {
      en: 'Must be listed in the official National BPL / SECC Census Register',
      kn: 'ರಾಷ್ಟ್ರೀಯ ಬಿಪಿಎಲ್ ಪಟ್ಟಿಯಲ್ಲಿ ಹೆಸರು ನೋಂದಣಿಯಾಗಿರಬೇಕು'
    },
    description: {
      en: 'Centrally-sponsored welfare scheme providing national financial floor for destitute widows in rural and urban below-poverty-line families across India.',
      kn: 'ಬಡತನ ರೇಖೆಗಿಂತ ಕೆಳಗಿರುವ ನಿರ್ಗತಿಕ ವಿಧವೆಯರಿಗೆ ದೇಶಾದ್ಯಂತ ಆರ್ಥಿಕ ಭದ್ರತೆ ಕಲ್ಪಿಸುವ ಕೇಂದ್ರ ಸರ್ಕಾರದ ಪ್ರಮುಖ ಯೋಜನೆ.'
    },
    keyBenefits: {
      en: [
        'Nationally assured social security transferred directly to Aadhaar-linked savings accounts',
        'Automatic transition to IGNOAPS senior citizen pension upon turning 80 years',
        'Zero deduction bank accounts through PM Jan Dhan Yojana'
      ],
      kn: [
        'ನೇರ ನಗದು ವರ್ಗಾವಣೆ ಮೂಲಕ ರಾಷ್ಟ್ರೀಯ ಭದ್ರತೆ',
        '೮೦ ವರ್ಷ ತುಂಬಿದ ನಂತರ ಇಂದಿರಾ ಗಾಂಧಿ ವೃದ್ಧಾಪ್ಯ ಪಿಂಚಣಿಗೆ ಸ್ವಯಂಚಾಲಿತ ಪರಿವರ್ತನೆ',
        'ಜನ್‌ಧನ್ ಖಾತೆಗೆ ಯಾವುದೇ ಶುಲ್ಕವಿಲ್ಲದೆ ಹಣ ಜಮೆ'
      ]
    },
    mandatoryDocuments: {
      en: ['BPL Ration Card or SECC ID', 'Death certificate of husband', 'Aadhaar Card', 'Bank Passbook'],
      kn: ['ಬಿಪಿಎಲ್ ಪಡಿತರ ಚೀಟಿ', 'ಪತಿಯ ಮರಣ ಪ್ರಮಾಣಪತ್ರ', 'ಆಧಾರ್ ಕಾರ್ಡ್', 'ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್']
    },
    applicationSteps: {
      en: [
        'Apply through District Social Welfare / Panchayat Development Officer (PDO) or on Seva Sindhu.',
        'Gram Panchayat verifies widowhood and BPL list entry.',
        'Tahsildar approves and registers on the national NSAP portal.'
      ],
      kn: [
        'ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ಪಿಡಿಒ ಅಥವಾ ಸೇವಾ ಸಿಂಧು ಮೂಲಕ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.',
        'ಗ್ರಾಮ ಪಂಚಾಯಿತಿಯು ಬಿಪಿಎಲ್ ಪಟ್ಟಿ ಪರಿಶೀಲಿಸಿ ಶಿಫಾರಸು ಮಾಡುತ್ತದೆ.',
        'ತಹಶೀಲ್ದಾರ್ ಅನುಮೋದಿಸಿ ಎನ್‌ಎಸ್‌ಎಪಿ ಪೋರ್ಟಲ್‌ಗೆ ಸೇರಿಸುತ್ತಾರೆ.'
      ]
    },
    remarriageRule: {
      en: 'Pension ceases immediately upon legal remarriage.',
      kn: 'ಮರುಮದುವೆಯಾದಲ್ಲಿ ಮಾಸಿಕ ಪಿಂಚಣಿ ಸೌಲಭ್ಯ ರದ್ದಾಗುತ್ತದೆ.'
    },
    childrenEducationSupport: {
      en: 'National Scholarship Portal (NSP) Pre-Matric support for dependent children.',
      kn: 'ರಾಷ್ಟ್ರೀಯ ವಿದ್ಯಾರ್ಥಿವೇತನ ಪೋರ್ಟಲ್ ಮೂಲಕ ಮಕ್ಕಳಿಗೆ ನೆರವು.'
    },
    housingSupport: {
      en: 'Pradhan Mantri Awas Yojana (PMAY-G) 100% prioritization for female-headed widow families.',
      kn: 'ಪಿಎಂ ಆವಾಸ್ ಯೋಜನೆಯಡಿ ಪಕ್ಕಾ ಮನೆ ನಿರ್ಮಾಣಕ್ಕೆ ಆದ್ಯತೆ.'
    },
    freeLegalAid: {
      en: 'Free legal defense through National Legal Services Authority (NALSA helpline: 15100).',
      kn: 'ರಾಷ್ಟ್ರೀಯ ಕಾನೂನು ಸೇವೆಗಳ ಪ್ರಾಧಿಕಾರ (ನಾಲ್ಸಾ ಸಹಾಯವಾಣಿ: ೧೫೧೦೦) ಮೂಲಕ ಉಚಿತ ನೆರವು.'
    },
    helpline: '1800-180-6127 (National Social Assistance Programme NSAP)',
    portalUrl: 'https://nsap.nic.in/'
  }
];
