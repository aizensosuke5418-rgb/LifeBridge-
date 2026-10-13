import { PublicFacility } from '../types';

export const PUBLIC_FACILITIES_DATABASE: PublicFacility[] = [
  // ==========================================
  // 1. PRADHAN MANTRI JANAUSHADHI KENDRAS (GOVT GENERIC MEDICAL STORES - BENGALURU)
  // ==========================================
  {
    id: 'fac-pmbjp-majestic',
    name: {
      en: 'PM Janaushadhi Kendra — Majestic City Central (PMBJP Store #1042)',
      kn: 'ಪ್ರಧಾನಮಂತ್ರಿ ಭಾರತೀಯ ಜನೌಷಧಿ ಕೇಂದ್ರ — ಮೆಜೆಸ್ಟಿಕ್ (ಪಿಎಂಬಿಜೆಪಿ)'
    },
    category: 'janaushadhi_kendra',
    district: 'Bengaluru Urban',
    locality: 'Majestic / Kempegowda Bus Station',
    address: {
      en: 'Shop 14, Platform 1 Exit, Kempegowda Bus Station, Majestic, Bengaluru 560009',
      kn: 'ಶಾಪ್ ೧೪, ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ೧ ನಿರ್ಗಮನ, ಕೆಂಪೇಗೌಡ ಬಸ್ ನಿಲ್ದಾಣ, ಮೆಜೆಸ್ಟಿಕ್, ಬೆಂಗಳೂರು 560009'
    },
    latitude: 12.9767,
    longitude: 77.5713,
    contactNumber: '080-22874112 / 1800-180-8080',
    timings: 'Open Daily 8:00 AM – 10:00 PM (Including Sundays)',
    servicesProvided: {
      en: [
        '50% to 90% Discounted Generic Medicines vs Branded Equivalents',
        'Over 1,900 Generic Formulations & 293 Surgical Items in Stock',
        'Chronic Illness Medicines (Diabetes, BP, Heart, Thyroid, Kidney)',
        'Suvidha Oxo-Biodegradable Sanitary Napkins at ₹1 per pad',
        'Protein Powders, Glucometers, BP Monitors & Pulse Oximeters at Factory Price'
      ],
      kn: [
        'ಬ್ರ್ಯಾಂಡೆಡ್ ಔಷಧಿಗಳಿಗಿಂತ ಶೇ. ೫೦ ರಿಂದ ೯೦ ರಷ್ಟು ಕಡಿಮೆ ಬೆಲೆಯಲ್ಲಿ ಜನರಿಕ್ ಔಷಧಿಗಳು',
        '೧,೯೦೦ಕ್ಕೂ ಹೆಚ್ಚು ಔಷಧಿಗಳು ಮತ್ತು ೨೯೩ ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ಸಾಮಗ್ರಿಗಳು ಲಭ್ಯ',
        'ಮಧುಮೇಹ, ಬಿಪಿ, ಹೃದಯ ಮತ್ತು ಥೈರಾಯ್ಡ್ ಕಾಯಿಲೆಗಳಿಗೆ ಅತಿ ಕಡಿಮೆ ಬೆಲೆಯ ಮಾತ್ರೆಗಳು',
        'ಸುವಿಧಾ ಸ್ಯಾನಿಟರಿ ಪ್ಯಾಡ್ ಪ್ರತಿ ಪ್ಯಾಡ್‌ಗೆ ಕೇವಲ ₹೧',
        'ಗ್ಲುಕೋಮೀಟರ್, ಬಿಪಿ ಮಾನಿಟರ್ ಮತ್ತು ವೈದ್ಯಕೀಯ ಸಲಕರಣೆಗಳು'
      ]
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Pradhan+Mantri+Janaushadhi+Kendra+Majestic+Bangalore',
    verifiedSource: 'Pharmaceuticals & Medical Devices Bureau of India (PMBI)'
  },
  {
    id: 'fac-pmbjp-jayanagar',
    name: {
      en: 'PM Janaushadhi Kendra — Jayanagar 4th Block',
      kn: 'ಪ್ರಧಾನಮಂತ್ರಿ ಜನೌಷಧಿ ಕೇಂದ್ರ — ಜಯನಗರ ೪ನೇ ಬ್ಲಾಕ್'
    },
    category: 'janaushadhi_kendra',
    district: 'Bengaluru Urban',
    locality: 'Jayanagar',
    address: {
      en: '11th Main, Near Jayanagar 4th Block BDA Complex, Bengaluru 560011',
      kn: '೧೧ನೇ ಮುಖ್ಯರಸ್ತೆ, ಜಯನಗರ ೪ನೇ ಬ್ಲಾಕ್ ಬಿಡಿಎ ಕಾಂಪ್ಲೆಕ್ಸ್ ಹತ್ತಿರ, ಬೆಂಗಳೂರು 560011'
    },
    latitude: 12.9298,
    longitude: 77.5834,
    contactNumber: '080-26651239',
    timings: '8:30 AM – 9:30 PM (Mon–Sun)',
    servicesProvided: {
      en: [
        'Full range of verified generic drugs with QR code quality testing',
        'Cardiac and Anti-hypertensive generic tablets',
        'Subsidized orthopedic support belts and surgical bandages',
        'Cashless UPI & Debit card accepted with digital receipts'
      ],
      kn: [
        'ಕ್ಯೂಆರ್ ಕೋಡ್ ಪರೀಕ್ಷಿತ ಗುಣಮಟ್ಟದ ಜನೌಷಧಿಗಳು',
        'ಬಿಪಿ, ಶುಗರ್ ಮತ್ತು ಹೃದಯ ಸಂಬಂಧಿ ಮಾತ್ರೆಗಳು',
        'ಕಡಿಮೆ ಬೆಲೆಯ ಆರ್ಥೋಪೆಡಿಕ್ ಬೆಲ್ಟ್ ಮತ್ತು ಸರ್ಜಿಕಲ್ ಸಾಮಗ್ರಿಗಳು',
        'ಯುಪಿಐ ಮತ್ತು ಡಿಜಿಟಲ್ ಪಾವತಿ ಸೌಲಭ್ಯ'
      ]
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Janaushadhi+Kendra+Jayanagar+4th+Block+Bangalore',
    verifiedSource: 'PMBI Bureau / Department of Pharmaceuticals, GoI'
  },
  {
    id: 'fac-pmbjp-malleshwaram',
    name: {
      en: 'PM Janaushadhi Kendra — Malleshwaram 8th Cross',
      kn: 'ಪ್ರಧಾನಮಂತ್ರಿ ಜನೌಷಧಿ ಕೇಂದ್ರ — ಮಲ್ಲೇಶ್ವರಂ ೮ನೇ ಕ್ರಾಸ್'
    },
    category: 'janaushadhi_kendra',
    district: 'Bengaluru Urban',
    locality: 'Malleshwaram',
    address: {
      en: 'Margosa Road, Near 8th Cross Corner, Malleshwaram, Bengaluru 560003',
      kn: 'ಮಾರ್ಗೋಸಾ ರಸ್ತೆ, ೮ನೇ ಕ್ರಾಸ್ ಮೂಲೆ, ಮಲ್ಲೇಶ್ವರಂ, ಬೆಂಗಳೂರು 560003'
    },
    latitude: 13.0031,
    longitude: 77.5702,
    contactNumber: '080-23348870',
    timings: '9:00 AM – 9:30 PM (Daily)',
    servicesProvided: {
      en: [
        'Over-the-counter and prescription generic pharmaceuticals',
        'Jan Aushadhi Janani Nutritional Supplements',
        'Ayurvedic and nutraceutical immune formulations',
        'Subsidized insulin syringes & diabetes test strips'
      ],
      kn: [
        'ವೈದ್ಯರ ಚೀಟಿಯ ಜನರಿಕ್ ಔಷಧಿಗಳು',
        'ಜನೌಷಧಿ ಜನನಿ ಪೌಷ್ಟಿಕ ಸತ್ವಗಳು',
        'ಇನ್ಸುಲಿನ್ ಸಿರಿಂಜ್ ಮತ್ತು ಡಯಾಬಿಟಿಸ್ ಟೆಸ್ಟ್ ಸ್ಟ್ರಿಪ್ಸ್'
      ]
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Janaushadhi+Kendra+Margosa+Road+Malleshwaram+Bangalore',
    verifiedSource: 'PMBI Network'
  },
  {
    id: 'fac-pmbjp-indiranagar',
    name: {
      en: 'PM Janaushadhi Kendra — Indiranagar CMH Road',
      kn: 'ಪ್ರಧಾನಮಂತ್ರಿ ಜನೌಷಧಿ ಕೇಂದ್ರ — ಇಂದಿರಾನಗರ ಸಿಎಂಎಚ್ ರಸ್ತೆ'
    },
    category: 'janaushadhi_kendra',
    district: 'Bengaluru Urban',
    locality: 'Indiranagar',
    address: {
      en: 'Chinmaya Mission Hospital (CMH) Road, Near Metro Pillar 68, Indiranagar, Bengaluru 560038',
      kn: 'ಸಿಎಂಎಚ್ ರಸ್ತೆ, ಮೆಟ್ರೋ ಪಿಲ್ಲರ್ ೬೮ ಹತ್ತಿರ, ಇಂದಿರಾನಗರ, ಬೆಂಗಳೂರು 560038'
    },
    latitude: 12.9784,
    longitude: 77.6395,
    contactNumber: '080-25219940',
    timings: '8:30 AM – 10:00 PM',
    servicesProvided: {
      en: [
        'Essential drugs at 70% cheaper rates than corporate pharmacy chains',
        'Free medicine prescription cost comparison counseling',
        'Pediatric syrups and multivitamin drops',
        'Elderly home delivery assistance in 2 km radius'
      ],
      kn: [
        'ಖಾಸಗಿ ಮೆಡಿಕಲ್ ಶಾಪ್‌ಗಳಿಗಿಂತ ಶೇ. ೭೦ ಕಡಿಮೆ ದರ',
        'ಮಕ್ಕಳ ಸಿರಪ್ ಮತ್ತು ಮಲ್ಟಿವಿಟಮಿನ್ ಹನಿಗಳು',
        'ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ಔಷಧ ಮಾರ್ಗದರ್ಶನ'
      ]
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Janaushadhi+Store+CMH+Road+Indiranagar+Bangalore',
    verifiedSource: 'PMBI Verified Pharmacy'
  },
  {
    id: 'fac-pmbjp-victoria-gate',
    name: {
      en: 'PM Janaushadhi Kendra — Victoria Hospital Complex Gate',
      kn: 'ಪ್ರಧಾನಮಂತ್ರಿ ಜನೌಷಧಿ ಕೇಂದ್ರ — ವಿಕ್ಟೋರಿಯಾ ಆಸ್ಪತ್ರೆ ಪ್ರವೇಶ ದ್ವಾರ'
    },
    category: 'janaushadhi_kendra',
    district: 'Bengaluru Urban',
    locality: 'Kalasipalya / Fort',
    address: {
      en: 'BMCRI Main Hospital Gate, Fort Road, Kalasipalya, Bengaluru 560002',
      kn: 'ಬಿಎಂಸಿಆರ್‌ಐ ಆಸ್ಪತ್ರೆ ಮುಖ್ಯ ದ್ವಾರ, ಕೋಟೆ ರಸ್ತೆ, ಕಲಾಸಿಪಾಳ್ಯ, ಬೆಂಗಳೂರು 560002'
    },
    latitude: 12.9632,
    longitude: 77.5758,
    contactNumber: '080-26702214',
    timings: 'Open 24 Hours / 7 Days for Outpatients & Hospital Visitors',
    servicesProvided: {
      en: [
        '24/7 round-the-clock generic medicine dispensing',
        'Direct coordination with Victoria & Vani Vilas hospital doctors',
        'Emergency surgical sutures, cannulas & IV sets at wholesale rate',
        'Oncology and organ transplant immunosuppressants at deep subsidy'
      ],
      kn: [
        '೨೪ ಗಂಟೆಗಳ ನಿರಂತರ ಜನೌಷಧಿ ವಿತರಣೆ',
        'ವಿಕ್ಟೋರಿಯಾ ಮತ್ತು ವಾಣಿ ವಿಲಾಸ ಆಸ್ಪತ್ರೆಗಳ ರೋಗಿಗಳಿಗೆ ನೆರವು',
        'ತುರ್ತು ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ಸಾಮಗ್ರಿಗಳು ರಿಯಾಯಿತಿ ದರದಲ್ಲಿ',
        'ಕ್ಯಾನ್ಸರ್ ಮತ್ತು ಕಿಡ್ನಿ ಔಷಧಿಗಳು ಅತ್ಯಂತ ಕಡಿಮೆ ಬೆಲೆಗೆ'
      ]
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Janaushadhi+Kendra+Victoria+Hospital+Bangalore',
    verifiedSource: 'BMCRI / PMBI Hospital Convergence'
  },
  {
    id: 'fac-pmbjp-rajajinagar',
    name: {
      en: 'PM Janaushadhi Kendra — Rajajinagar ESI Hospital Road',
      kn: 'ಪ್ರಧಾನಮಂತ್ರಿ ಜನೌಷಧಿ ಕೇಂದ್ರ — ರಾಜಾಜಿನಗರ ಇಎಸ್‌ಐ ರಸ್ತೆ'
    },
    category: 'janaushadhi_kendra',
    district: 'Bengaluru Urban',
    locality: 'Rajajinagar',
    address: {
      en: 'Opposite ESI Hospital Gate 2, Dr. Rajkumar Road, Rajajinagar, Bengaluru 560010',
      kn: 'ಇಎಸ್‌ಐ ಆಸ್ಪತ್ರೆ ಗೇಟ್ ೨ ಎದುರು, ಡಾ. ರಾಜ್‌ಕುಮಾರ್ ರಸ್ತೆ, ರಾಜಾಜಿನಗರ, ಬೆಂಗಳೂರು 560010'
    },
    latitude: 12.9912,
    longitude: 77.5546,
    contactNumber: '080-23126780',
    timings: '8:00 AM – 9:30 PM (Daily)',
    servicesProvided: {
      en: [
        'Generic antibiotic, gastro-intestinal & pain management formulations',
        'Elderly monthly chronic prescription refills',
        'Nebulizer machines and BP cuffs at non-profit pricing'
      ],
      kn: [
        'ಜನರಿಕ್ ಆಂಟಿಬಯೋಟಿಕ್ ಮತ್ತು ನೋವು ನಿವಾರಕ ಮಾತ್ರೆಗಳು',
        'ಹಿರಿಯ ನಾಗರಿಕರ ಮಾಸಿಕ ಔಷಧ ಪ್ಯಾಕೇಜ್',
        'ನೆಬುಲೈಜರ್ ಮತ್ತು ಬಿಪಿ ಮಾನಿಟರ್ ಯಂತ್ರಗಳು'
      ]
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Janaushadhi+Kendra+ESI+Road+Rajajinagar+Bangalore',
    verifiedSource: 'PMBI Network'
  },
  {
    id: 'fac-pmbjp-koramangala',
    name: {
      en: 'PM Janaushadhi Kendra — Koramangala 5th Block',
      kn: 'ಪ್ರಧಾನಮಂತ್ರಿ ಜನೌಷಧಿ ಕೇಂದ್ರ — ಕೋರಮಂಗಲ ೫ನೇ ಬ್ಲಾಕ್'
    },
    category: 'janaushadhi_kendra',
    district: 'Bengaluru Urban',
    locality: 'Koramangala',
    address: {
      en: '80 Feet Road, Near Koramangala Post Office, 5th Block, Bengaluru 560095',
      kn: '೮೦ ಅಡಿ ರಸ್ತೆ, ಕೋರಮಂಗಲ ಪೋಸ್ಟ್ ಆಫೀಸ್ ಹತ್ತಿರ, ೫ನೇ ಬ್ಲಾಕ್, ಬೆಂಗಳೂರು 560095'
    },
    latitude: 12.9351,
    longitude: 77.6183,
    contactNumber: '080-25531991',
    timings: '9:00 AM – 9:00 PM',
    servicesProvided: {
      en: [
        'Complete family generic medicine dispensary',
        'Discounted dermatological creams and lotions',
        'Senior citizen doorstep medicine delivery in Koramangala'
      ],
      kn: [
        'ಸಂಪೂರ್ಣ ಕುಟುಂಬ ಜನೌಷಧಿ ಕೇಂದ್ರ',
        'ಚರ್ಮ ರೋಗದ ಕ್ರೀಮ್ ಮತ್ತು ಲೋಷನ್‌ಗಳು',
        'ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ಮನೆ ಬಾಗಿಲಿಗೆ ಔಷಧ ಸರಬರಾಜು'
      ]
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Janaushadhi+Kendra+Koramangala+Bangalore',
    verifiedSource: 'PMBI Store Register'
  },
  {
    id: 'fac-pmbjp-yelahanka',
    name: {
      en: 'PM Janaushadhi Kendra — Yelahanka Old Town',
      kn: 'ಪ್ರಧಾನಮಂತ್ರಿ ಜನೌಷಧಿ ಕೇಂದ್ರ — ಯಲಹಂಕ ಹಳೇ ಊರು'
    },
    category: 'janaushadhi_kendra',
    district: 'Bengaluru Urban',
    locality: 'Yelahanka',
    address: {
      en: 'BBMP Main Road, Near Yelahanka Police Station, Bengaluru 560064',
      kn: 'ಬಿಬಿಎಂಪಿ ಮುಖ್ಯರಸ್ತೆ, ಯಲಹಂಕ ಪೊಲೀಸ್ ಠಾಣೆ ಹತ್ತಿರ, ಬೆಂಗಳೂರು 560064'
    },
    latitude: 13.1007,
    longitude: 77.5963,
    contactNumber: '080-28560122',
    timings: '8:30 AM – 9:00 PM',
    servicesProvided: {
      en: [
        'North Bengaluru regional generic hub',
        'Direct support for rural and peri-urban farm laborers',
        'Veterinary generic supplements & human medications'
      ],
      kn: [
        'ಉತ್ತರ ಬೆಂಗಳೂರಿನ ಜನೌಷಧಿ ಕೇಂದ್ರ',
        'ಕೃಷಿ ಕಾರ್ಮಿಕರಿಗೆ ರಿಯಾಯಿತಿ ದರದ ಔಷಧಗಳು',
        'ಮನೆ ಬಳಕೆ ಹಾಗೂ ಜಾನುವಾರು ಪೂರಕ ಔಷಧಗಳು'
      ]
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Janaushadhi+Kendra+Yelahanka+Old+Town+Bangalore',
    verifiedSource: 'PMBI Store Register'
  },

  // ==========================================
  // 2. GOVERNMENT HOSPITALS (BENGALURU URBAN)
  // ==========================================
  {
    id: 'fac-victoria-hospital',
    name: {
      en: 'Victoria Hospital (BMCRI Medical College)',
      kn: 'ವಿಕ್ಟೋರಿಯಾ ಆಸ್ಪತ್ರೆ (ಬಿಎಂಸಿಆರ್‌ಐ)'
    },
    category: 'hospital',
    district: 'Bengaluru Urban',
    locality: 'Kalasipalya / Fort Area',
    address: {
      en: 'Fort Road, Near City Market, Kalasipalya, Bengaluru, Karnataka 560002',
      kn: 'ಕೋಟೆ ರಸ್ತೆ, ಸಿಟಿ ಮಾರ್ಕೆಟ್ ಹತ್ತಿರ, ಕಲಾಸಿಪಾಳ್ಯ, ಬೆಂಗಳೂರು 560002'
    },
    latitude: 12.9628,
    longitude: 77.5753,
    contactNumber: '080-26701150',
    timings: '24/7 Emergency & Inpatient; OPD 8:30 AM – 1:00 PM',
    servicesProvided: {
      en: ['24/7 Trauma & Emergency', 'Ayushman Bharat AB-ArK Arogya Mitra Desk', 'Surgical & Orthopedic Specialities', 'Free Generic Pharmacy', 'CT / MRI / Blood Bank'],
      kn: ['24/7 ತುರ್ತು ಚಿಕಿತ್ಸೆ ಮತ್ತು ಟ್ರಾಮಾ ಕೇರ್', 'ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ಆರೋಗ್ಯ ಮಿತ್ರ ಡೆಸ್ಕ್', 'ಉಚಿತ ಜನರಿಕ್ ಔಷಧಿ ವಿತರಣೆ', 'ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಮತ್ತು ರಕ್ತನಿಧಿ']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Victoria+Hospital+Bangalore',
    verifiedSource: 'Bangalore Medical College and Research Institute (BMCRI)'
  },
  {
    id: 'fac-kc-general-hospital',
    name: {
      en: 'KC General Hospital Malleshwaram',
      kn: 'ಕೆ.ಸಿ. ಜನರಲ್ ಆಸ್ಪತ್ರೆ ಮಲ್ಲೇಶ್ವರಂ'
    },
    category: 'hospital',
    district: 'Bengaluru Urban',
    locality: 'Malleshwaram',
    address: {
      en: '5th Cross, Malleshwaram, Bengaluru, Karnataka 560003',
      kn: '5ನೇ ಕ್ರಾಸ್, ಮಲ್ಲೇಶ್ವರಂ, ಬೆಂಗಳೂರು 560003'
    },
    latitude: 12.9989,
    longitude: 77.5714,
    contactNumber: '080-23341771',
    timings: '24/7 Emergency; OPD 9:00 AM – 2:00 PM',
    servicesProvided: {
      en: ['Maternal & Child Health Care', 'AB-PMJAY Cashless Desk', 'Dialysis Centre', 'Pediatric ICU', 'Diagnostic Lab'],
      kn: ['ತಾಯಿ ಮತ್ತು ಮಕ್ಕಳ ಆರೈಕೆ', 'ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ನಗದು ರಹಿತ ಡೆಸ್ಕ್', 'ಡಯಾಲಿಸಿಸ್ ಕೇಂದ್ರ', 'ಶಿಶು ತೀವ್ರ ನಿಗಾ ಘಟಕ']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=KC+General+Hospital+Malleshwaram+Bengaluru',
    verifiedSource: 'Department of Health & Family Welfare, Karnataka'
  },
  {
    id: 'fac-bowring-hospital',
    name: {
      en: 'Bowring & Lady Curzon Hospital',
      kn: 'ಬೌರಿಂಗ್ ಮತ್ತು ಲೇಡಿ ಕರ್ಜನ್ ಆಸ್ಪತ್ರೆ'
    },
    category: 'hospital',
    district: 'Bengaluru Urban',
    locality: 'Shivajinagar / Tasker Town',
    address: {
      en: 'Lady Curzon Road, Tasker Town, Shivajinagar, Bengaluru, Karnataka 560001',
      kn: 'ಲೇಡಿ ಕರ್ಜನ್ ರಸ್ತೆ, ಶಿವಾಜಿನಗರ, ಬೆಂಗಳೂರು 560001'
    },
    latitude: 12.9836,
    longitude: 77.6042,
    contactNumber: '080-25591362',
    timings: '24/7 Casualty & Trauma; OPD 8:30 AM – 1:30 PM',
    servicesProvided: {
      en: ['Major General Surgery', 'Cardiology & Dialysis', 'Arogya Karnataka Desk', 'Neonatal Intensive Care (NICU)', 'Free Generic Dispensary'],
      kn: ['ಜನರಲ್ ಸರ್ಜರಿ', 'ಡಯಾಲಿಸಿಸ್ ಮತ್ತು ಹೃದಯ ರೋಗ ವಿಭಾಗ', 'ಆರೋಗ್ಯ ಕರ್ನಾಟಕ ಡೆಸ್ಕ್', 'ಉಚಿತ ಔಷಧಿ ವಿತರಣೆ']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Bowring+Hospital+Shivajinagar+Bangalore',
    verifiedSource: 'BMCRI Allied Hospitals Network'
  },
  {
    id: 'fac-jayanagar-general-hospital',
    name: {
      en: 'Jayanagar General Hospital',
      kn: 'ಜಯನಗರ ಸಾರ್ವಜನಿಕ ಆಸ್ಪತ್ರೆ'
    },
    category: 'hospital',
    district: 'Bengaluru Urban',
    locality: 'Jayanagar 4th T Block',
    address: {
      en: '32nd Cross Road, Jayanagar 4th T Block, Bengaluru 560041',
      kn: '೩೨ನೇ ಕ್ರಾಸ್ ರಸ್ತೆ, ಜಯನಗರ ೪ನೇ ಟಿ ಬ್ಲಾಕ್, ಬೆಂಗಳೂರು 560041'
    },
    latitude: 12.9234,
    longitude: 77.5898,
    contactNumber: '080-22445885',
    timings: '24/7 Emergency; OPD 9:00 AM – 1:30 PM',
    servicesProvided: {
      en: ['Orthopedic Care & Joint Surgery', 'Government Dialysis Center', 'AB-PMJAY Cashless Helpdesk', 'Maternity Delivery Suites', 'Digital X-Ray & Ultrasound'],
      kn: ['ಮೂಳೆ ರೋಗ ಚಿಕಿತ್ಸೆ', 'ಸರ್ಕಾರಿ ಡಯಾಲಿಸಿಸ್ ಕೇಂದ್ರ', 'ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ಡೆಸ್ಕ್', 'ಹೆರಿಗೆ ಸೌಲಭ್ಯ', 'ಡಿಜಿಟಲ್ ಎಕ್ಸ್‌ರೇ']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Jayanagar+General+Hospital+Bangalore',
    verifiedSource: 'Directorate of Health & Family Welfare, Karnataka'
  },
  {
    id: 'fac-vanivilas-hospital',
    name: {
      en: 'Vani Vilas Women & Children Hospital',
      kn: 'ವಾಣಿ ವಿಲಾಸ ಮಹಿಳಾ ಮತ್ತು ಮಕ್ಕಳ ಆಸ್ಪತ್ರೆ'
    },
    category: 'hospital',
    district: 'Bengaluru Urban',
    locality: 'Kalasipalya',
    address: {
      en: 'Kalasipalya, Opposite Victoria Hospital, Bengaluru 560002',
      kn: 'ಕಲಾಸಿಪಾಳ್ಯ, ವಿಕ್ಟೋರಿಯಾ ಆಸ್ಪತ್ರೆ ಎದುರು, ಬೆಂಗಳೂರು 560002'
    },
    latitude: 12.9621,
    longitude: 77.5746,
    contactNumber: '080-26705663',
    timings: '24/7 Maternity Emergency; OPD 9:00 AM – 1:00 PM',
    servicesProvided: {
      en: ['Premier Government Maternity Hospital', 'Level-3 Neonatal ICU (NICU)', 'High Risk Pregnancy Management', 'Kangaroo Mother Care', '100% Free Deliveries under JSSK'],
      kn: ['ಕರ್ನಾಟಕದ ಪ್ರಮುಖ ಸರ್ಕಾರಿ ಹೆರಿಗೆ ಆಸ್ಪತ್ರೆ', 'ಶಿಶು ತೀವ್ರ ನಿಗಾ ಘಟಕ (NICU)', 'ಜೆಎಸ್‌ಎಸ್‌ಕೆ ಅಡಿಯಲ್ಲಿ ಉಚಿತ ಹೆರಿಗೆ', 'ತಾಯಿ ಮತ್ತು ಮಗು ರಕ್ಷಣೆ']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Vani+Vilas+Hospital+Bangalore',
    verifiedSource: 'BMCRI Teaching Hospital'
  },
  {
    id: 'fac-cv-raman-hospital',
    name: {
      en: 'Sir C.V. Raman General Hospital',
      kn: 'ಸರ್ ಸಿ.ವಿ. ರಾಮನ್ ಸಾರ್ವಜನಿಕ ಆಸ್ಪತ್ರೆ'
    },
    category: 'hospital',
    district: 'Bengaluru Urban',
    locality: 'Indiranagar',
    address: {
      en: '80 Feet Road, Michael Palya, Indiranagar, Bengaluru 560038',
      kn: '೮೦ ಅಡಿ ರಸ್ತೆ, ಮೈಕೆಲ್ ಪಾಳ್ಯ, ಇಂದಿರಾನಗರ, ಬೆಂಗಳೂರು 560038'
    },
    latitude: 12.9842,
    longitude: 77.6437,
    contactNumber: '080-25281245',
    timings: '24/7 Emergency & Inpatient Services',
    servicesProvided: {
      en: ['East Bengaluru Multi-speciality Government Care', 'AB-PMJAY Arogya Mitra Desk', 'Free Cataract Eye Surgeries', 'General Medicine & Pediatrics'],
      kn: ['ಪೂರ್ವ ಬೆಂಗಳೂರಿನ ಸರ್ಕಾರಿ ಜನರಲ್ ಆಸ್ಪತ್ರೆ', 'ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ಡೆಸ್ಕ್', 'ಉಚಿತ ಕಣ್ಣಿನ ಪೊರೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Sir+CV+Raman+General+Hospital+Indiranagar+Bangalore',
    verifiedSource: 'Health Dept Karnataka'
  },

  // ==========================================
  // 3. URBAN PRIMARY HEALTH CENTRES (UPHC & NAMMA CLINICS - BENGALURU)
  // ==========================================
  {
    id: 'fac-uphc-malleshwaram',
    name: {
      en: 'Namma Clinic & UPHC Malleshwaram',
      kn: 'ನಮ್ಮ ಕ್ಲಿನಿಕ್ & ಯುಪಿಎಚ್‌ಸಿ ಮಲ್ಲೇಶ್ವರಂ'
    },
    category: 'phc',
    district: 'Bengaluru Urban',
    locality: 'Malleshwaram East',
    address: {
      en: 'East Park Road, Near 4th Cross, Malleshwaram, Bengaluru 560003',
      kn: 'ಈಸ್ಟ್ ಪಾರ್ಕ್ ರಸ್ತೆ, ೪ನೇ ಕ್ರಾಸ್ ಹತ್ತಿರ, ಮಲ್ಲೇಶ್ವರಂ, ಬೆಂಗಳೂರು 560003'
    },
    latitude: 13.0012,
    longitude: 77.5721,
    contactNumber: '080-23467119',
    timings: '9:00 AM – 4:30 PM (Mon–Sat)',
    servicesProvided: {
      en: ['Free General Physician Consultations', '14 Basic Diagnostic Blood/Urine Tests Free', 'Essential Medicine Dispensation (Free 128 Drugs)', 'Vaccination for Infants & Expecting Mothers'],
      kn: ['ಉಚಿತ ವೈದ್ಯರ ತಪಾಸಣೆ', '೧೪ ಉಚಿತ ರಕ್ತ ಹಾಗೂ ಮೂತ್ರ ಪರೀಕ್ಷೆಗಳು', '೧೨೮ ಅಗತ್ಯ ಔಷಧಗಳ ಉಚಿತ ವಿತರಣೆ', 'ತಾಯಿ ಮತ್ತು ಮಗುವಿಗೆ ಉಚಿತ ಲಸಿಕೆ']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Namma+Clinic+Malleshwaram+Bangalore',
    verifiedSource: 'BBMP Health Department'
  },
  {
    id: 'fac-uphc-ulsoor',
    name: {
      en: 'Namma Clinic & UPHC Ulsoor',
      kn: 'ನಮ್ಮ ಕ್ಲಿನಿಕ್ & ಯುಪಿಎಚ್‌ಸಿ ಹಲಸೂರು'
    },
    category: 'phc',
    district: 'Bengaluru Urban',
    locality: 'Ulsoor / Murphy Town',
    address: {
      en: 'Near Murphy Town Market, Ulsoor, Bengaluru 560008',
      kn: 'ಮರ್ಫಿ ಟೌನ್ ಮಾರುಕಟ್ಟೆ ಹತ್ತಿರ, ಹಲಸೂರು, ಬೆಂಗಳೂರು 560008'
    },
    latitude: 12.9814,
    longitude: 77.6258,
    contactNumber: '080-25540912',
    timings: '9:00 AM – 4:30 PM (Mon–Sat)',
    servicesProvided: {
      en: ['Walk-in OPD Care', 'Fever & Respiratory Illness Triage', 'Direct Referral to Bowring Hospital', 'Free Diabetes & BP Screening'],
      kn: ['ಉಚಿತ ಒಪಿಡಿ ಚಿಕಿತ್ಸೆ', 'ಜ್ವರ ಮತ್ತು ಕೆಮ್ಮು ತಪಾಸಣೆ', 'ಬೌರಿಂಗ್ ಆಸ್ಪತ್ರೆಗೆ ರೆಫರಲ್', 'ಉಚಿತ ಬಿಪಿ ಮತ್ತು ಶುಗರ್ ಪರೀಕ್ಷೆ']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Namma+Clinic+Ulsoor+Bangalore',
    verifiedSource: 'BBMP Health'
  },
  {
    id: 'fac-uphc-banashankari',
    name: {
      en: 'Namma Clinic & UPHC Banashankari',
      kn: 'ನಮ್ಮ ಕ್ಲಿನಿಕ್ & ಯುಪಿಎಚ್‌ಸಿ ಬನಶಂಕರಿ'
    },
    category: 'phc',
    district: 'Bengaluru Urban',
    locality: 'Banashankari 2nd Stage',
    address: {
      en: 'Near BDA Complex, 2nd Stage, Banashankari, Bengaluru 560070',
      kn: 'ಬಿಡಿಎ ಕಾಂಪ್ಲೆಕ್ಸ್ ಹತ್ತಿರ, ೨ನೇ ಹಂತ, ಬನಶಂಕರಿ, ಬೆಂಗಳೂರು 560070'
    },
    latitude: 12.9254,
    longitude: 77.5689,
    contactNumber: '080-26710433',
    timings: '9:00 AM – 4:30 PM',
    servicesProvided: {
      en: ['Primary Healthcare OPD', 'Free Maternal Iron & Folic Acid Tablets', 'Child Immunization Schedule', 'Free Oral Rehydration & Antibiotics'],
      kn: ['ಪ್ರಾಥಮಿಕ ಆರೋಗ್ಯ ತಪಾಸಣೆ', 'ಗರ್ಭಿಣಿಯರಿಗೆ ಉಚಿತ ಕಬ್ಬಿಣಾಂಶ ಮಾತ್ರೆಗಳು', 'ಮಕ್ಕಳ ಲಸಿಕೆ ಸೌಲಭ್ಯ']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=UPHC+Banashankari+Bangalore',
    verifiedSource: 'BBMP Health'
  },

  // ==========================================
  // 4. INDIRA CANTEENS (SUBSIDIZED PUBLIC FOOD CENTERS - BENGALURU)
  // ==========================================
  {
    id: 'fac-indira-canteen-majestic',
    name: {
      en: 'Indira Canteen — Majestic Kempegowda Station',
      kn: 'ಇಂದಿರಾ ಕ್ಯಾಂಟೀನ್ — ಮೆಜೆಸ್ಟಿಕ್ ಕೆಂಪೇಗೌಡ ನಿಲ್ದಾಣ'
    },
    category: 'canteen',
    district: 'Bengaluru Urban',
    locality: 'Majestic / City Central',
    address: {
      en: 'Subhashnagar, Opposite Sangam Theatre Road, Majestic, Bengaluru 560009',
      kn: 'ಸುಭಾಷ್‌ನಗರ, ಸಂಗಮ್ ಥಿಯೇಟರ್ ಎದುರು, ಮೆಜೆಸ್ಟಿಕ್, ಬೆಂಗಳೂರು 560009'
    },
    latitude: 12.9772,
    longitude: 77.5731,
    timings: 'Breakfast: 7:30 AM – 10:00 AM | Lunch: 12:30 PM – 2:30 PM | Dinner: 7:30 PM – 9:00 PM',
    servicesProvided: {
      en: [
        'Subsidized Healthy Breakfast at ₹5 (Idli-Vada with Chutney, Khara Bhath, or Pongal)',
        'Nutritious Full Lunch at ₹10 (Rice, Sambar, Palya, Butter Milk)',
        'Full Dinner at ₹10 (Rice, Rasam/Curry, Vegetable accompaniment)',
        'Clean RO Drinking Water & Dignified Dining for daily wage workers, students, commuters'
      ],
      kn: [
        'ಕೇವಲ ₹೫ ಕ್ಕೆ ಪೌಷ್ಟಿಕ ಉಪಾಹಾರ (ಇಡ್ಲಿ, ವಡೆ, ಖಾರಾಭಾತ್, ಪೊಂಗಲ್)',
        'ಕೇವಲ ₹೧೦ ಕ್ಕೆ ಸಂಪೂರ್ಣ ಮಧ್ಯಾಹ್ನದ ಊಟ (ಅನ್ನ, ಸಾಂಬಾರ್, ಪಲ್ಯ, ಮಜ್ಜಿಗೆ)',
        'ಕೇವಲ ₹೧೦ ಕ್ಕೆ ರಾತ್ರಿಯ ಊಟ',
        'ಶುದ್ಧ ಕುಡಿಯುವ ನೀರು ಮತ್ತು ಸ್ವಚ್ಛ ಪರಿಸರ'
      ]
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Indira+Canteen+Majestic+Bangalore',
    verifiedSource: 'Bruhat Bengaluru Mahanagara Palike (BBMP) Food Scheme'
  },
  {
    id: 'fac-indira-canteen-jayanagar',
    name: {
      en: 'Indira Canteen — Jayanagar 4th Block',
      kn: 'ಇಂದಿರಾ ಕ್ಯಾಂಟೀನ್ — ಜಯನಗರ ೪ನೇ ಬ್ಲಾಕ್'
    },
    category: 'canteen',
    district: 'Bengaluru Urban',
    locality: 'Jayanagar',
    address: {
      en: 'Behind Jayanagar Bus Terminal, 4th Block, Bengaluru 560011',
      kn: 'ಜಯನಗರ ಬಸ್ ನಿಲ್ದಾಣದ ಹಿಂಭಾಗ, ೪ನೇ ಬ್ಲಾಕ್, ಬೆಂಗಳೂರು 560011'
    },
    latitude: 12.9304,
    longitude: 77.5841,
    timings: 'Breakfast: 7:30–10:00 AM | Lunch: 12:30–2:30 PM | Dinner: 7:30–9:00 PM',
    servicesProvided: {
      en: [
        'Fresh breakfast at ₹5 and hot wholesome meals at ₹10',
        'FSSAI quality hygiene monitoring protocols',
        'Direct hunger relief for elderly pensioners, gig workers, and auto drivers'
      ],
      kn: [
        'ತಾಜಾ ಉಪಾಹಾರ ₹೫ ಮತ್ತು ಬಿಸಿ ಊಟ ₹೧೦',
        'ಆಹಾರ ಸುರಕ್ಷತಾ ಗುಣಮಟ್ಟ ಪರಿಶೀಲನೆ',
        'ಆಟೋ ಚಾಲಕರು, ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಬಡ ಜನರಿಗೆ ಅನುಕೂಲ'
      ]
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Indira+Canteen+Jayanagar+4th+Block+Bangalore',
    verifiedSource: 'BBMP Canteen Network'
  },
  {
    id: 'fac-indira-canteen-malleshwaram',
    name: {
      en: 'Indira Canteen — Malleshwaram 18th Cross',
      kn: 'ಇಂದಿರಾ ಕ್ಯಾಂಟೀನ್ — ಮಲ್ಲೇಶ್ವರಂ ೧೮ನೇ ಕ್ರಾಸ್'
    },
    category: 'canteen',
    district: 'Bengaluru Urban',
    locality: 'Malleshwaram West',
    address: {
      en: 'Near Malleshwaram Play Ground, 18th Cross, Bengaluru 560055',
      kn: 'ಮಲ್ಲೇಶ್ವರಂ ಆಟದ ಮೈದಾನ ಹತ್ತಿರ, ೧೮ನೇ ಕ್ರಾಸ್, ಬೆಂಗಳೂರು 560055'
    },
    latitude: 13.0118,
    longitude: 77.5684,
    timings: 'Breakfast: 7:30–10:00 AM | Lunch: 12:30–2:30 PM | Dinner: 7:30–9:00 PM',
    servicesProvided: {
      en: [
        'Subsidized hygienic South Indian meals',
        'Freshly prepared in BBMP centralized master kitchens',
        '₹5 Breakfast / ₹10 Lunch / ₹10 Dinner'
      ],
      kn: [
        'ಶುಚಿರುಚಿಯಾದ ದಕ್ಷಿಣ ಭಾರತೀಯ ಊಟ',
        'ಬಿಬಿಎಂಪಿ ಕೇಂದ್ರೀಕೃತ ಅಡುಗೆ ಮನೆಯಿಂದ ಸರಬರಾಜು'
      ]
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Indira+Canteen+Malleshwaram+18th+Cross+Bangalore',
    verifiedSource: 'BBMP Canteen Network'
  },
  {
    id: 'fac-indira-canteen-indiranagar',
    name: {
      en: 'Indira Canteen — Indiranagar Binnamangala',
      kn: 'ಇಂದಿರಾ ಕ್ಯಾಂಟೀನ್ — ಇಂದಿರಾನಗರ ಬಿನ್ನಮಂಗಲ'
    },
    category: 'canteen',
    district: 'Bengaluru Urban',
    locality: 'Indiranagar',
    address: {
      en: 'Near Old Madras Road Junction, Binnamangala, Indiranagar, Bengaluru 560038',
      kn: 'ಹಳೇ ಮದ್ರಾಸ್ ರಸ್ತೆ ಜಂಕ್ಷನ್ ಹತ್ತಿರ, ಬಿನ್ನಮಂಗಲ, ಇಂದಿರಾನಗರ, ಬೆಂಗಳೂರು 560038'
    },
    latitude: 12.9818,
    longitude: 77.6412,
    timings: 'Breakfast: 7:30–10:00 AM | Lunch: 12:30–2:30 PM | Dinner: 7:30–9:00 PM',
    servicesProvided: {
      en: ['Breakfast ₹5, Lunch ₹10, Dinner ₹10', 'Clean dining area and drinking water'],
      kn: ['ಉಪಾಹಾರ ₹೫, ಊಟ ₹೧೦', 'ಸ್ವಚ್ಛ ಕುಡಿಯುವ ನೀರು']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Indira+Canteen+Indiranagar+Bangalore',
    verifiedSource: 'BBMP'
  },

  // ==========================================
  // 5. FAIR PRICE RATION SHOPS (FOOD SECURITY - BENGALURU URBAN)
  // ==========================================
  {
    id: 'fac-fps-kalasipalya',
    name: {
      en: 'Fair Price Ration Shop #12 (Ahara BPL/AAY Store)',
      kn: 'ನ್ಯಾಯಬೆಲೆ ರೇಷನ್ ಅಂಗಡಿ #೧೨ (ಆಹಾರ ಇಲಾಖೆ)'
    },
    category: 'fair_price_shop',
    district: 'Bengaluru Urban',
    locality: 'Kalasipalya Market',
    address: {
      en: 'Near Market Square, Kalasipalya, Bengaluru 560002',
      kn: 'ಮಾರುಕಟ್ಟೆ ಚೌಕದ ಹತ್ತಿರ, ಕಲಾಸಿಪಾಳ್ಯ, ಬೆಂಗಳೂರು 560002'
    },
    latitude: 12.9612,
    longitude: 77.5768,
    contactNumber: '1967 (Toll-Free Food Helpline)',
    timings: '8:00 AM – 12:00 PM & 4:00 PM – 8:00 PM (1st to 20th of every month)',
    servicesProvided: {
      en: [
        'Anna Bhagya Foodgrains Distribution (10 kg free rice per person)',
        'Antyodaya Anna Yojana (AAY) 35 kg grain quota',
        'Biometric e-POS fingerprint and iris authentication',
        'One Nation One Ration Card (ONORC) interstate portability'
      ],
      kn: [
        'ಅನ್ನಭಾಗ್ಯ ಉಚಿತ ಅಕ್ಕಿ ವಿತರಣೆ (ಪ್ರತಿ ಸದಸ್ಯರಿಗೆ ೧೦ ಕೆಜಿ)',
        'ಅಂತ್ಯೋದಯ ಪಡಿತರ ಕೋಟಾ (೩೫ ಕೆಜಿ)',
        'ಬಯೋಮೆಟ್ರಿಕ್ ಇ-ಪಿಒಎಸ್ ಬೆರಳಚ್ಚು ಮತ್ತು ಐರಿಸ್ ಸ್ಕ್ಯಾನರ್',
        'ಒಂದು ದೇಶ ಒಂದು ರೇಷನ್ ಕಾರ್ಡ್ ಸೌಲಭ್ಯ'
      ]
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Fair+Price+Shop+Kalasipalya+Bangalore',
    verifiedSource: 'Food, Civil Supplies & Consumer Affairs Dept, Karnataka'
  },
  {
    id: 'fac-fps-malleshwaram',
    name: {
      en: 'Fair Price Ration Shop #45 — Malleshwaram',
      kn: 'ನ್ಯಾಯಬೆಲೆ ರೇಷನ್ ಅಂಗಡಿ #೪೫ — ಮಲ್ಲೇಶ್ವರಂ'
    },
    category: 'fair_price_shop',
    district: 'Bengaluru Urban',
    locality: 'Malleshwaram 7th Cross',
    address: {
      en: '7th Cross, Near Malleshwaram Market, Bengaluru 560003',
      kn: '೭ನೇ ಕ್ರಾಸ್, ಮಲ್ಲೇಶ್ವರಂ ಮಾರುಕಟ್ಟೆ ಹತ್ತಿರ, ಬೆಂಗಳೂರು 560003'
    },
    latitude: 13.0025,
    longitude: 77.5718,
    contactNumber: '1967',
    timings: '8:00 AM – 12:00 PM & 4:00 PM – 8:00 PM',
    servicesProvided: {
      en: ['Free Rice Distribution for BPL cardholders', 'Digital weighing balance with POS integration', 'Aadhaar e-KYC validation kiosk'],
      kn: ['ಬಿಪಿಎಲ್ ಪಡಿತರ ಅಕ್ಕಿ ವಿತರಣೆ', 'ಡಿಜಿಟಲ್ ತೂಕದ ಯಂತ್ರ', 'ಆಧಾರ್ ಇ-ಕೆವೈಸಿ ಪರಿಶೀಲನೆ']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Ration+Shop+Malleshwaram+Bangalore',
    verifiedSource: 'Ahara Karnataka'
  },
  {
    id: 'fac-fps-basavanagudi',
    name: {
      en: 'Fair Price Ration Shop #88 — Basavanagudi',
      kn: 'ನ್ಯಾಯಬೆಲೆ ರೇಷನ್ ಅಂಗಡಿ #೮೮ — ಬಸವನಗುಡಿ'
    },
    category: 'fair_price_shop',
    district: 'Bengaluru Urban',
    locality: 'Basavanagudi',
    address: {
      en: 'Near Gandhi Bazaar Main Road, Basavanagudi, Bengaluru 560004',
      kn: 'ಗಾಂಧಿ ಬಜಾರ್ ಮುಖ್ಯರಸ್ತೆ ಹತ್ತಿರ, ಬಸವನಗುಡಿ, ಬೆಂಗಳೂರು 560004'
    },
    latitude: 12.9421,
    longitude: 77.5739,
    contactNumber: '1967',
    timings: '8:00 AM – 12:00 PM & 4:00 PM – 8:00 PM',
    servicesProvided: {
      en: ['PDS Anna Bhagya Rice & Grain allocation', 'AAY Family Quota allotment', 'Biometric Aadhaar mapping'],
      kn: ['ಪಡಿತರ ಅಕ್ಕಿ ವಿತರಣೆ', 'ಅಂತ್ಯೋದಯ ಕುಟುಂಬ ಕೋಟಾ']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Ration+Shop+Basavanagudi+Bangalore',
    verifiedSource: 'Ahara Karnataka'
  },

  // ==========================================
  // 6. BANGALORE ONE CITIZEN SERVICE CENTRES
  // ==========================================
  {
    id: 'fac-b1-jayanagar',
    name: {
      en: 'Bangalore One Citizen Service Centre — Jayanagar BDA',
      kn: 'ಬೆಂಗಳೂರು ಒನ್ ಕೇಂದ್ರ — ಜಯನಗರ ಬಿಡಿಎ ಕಾಂಪ್ಲೆಕ್ಸ್'
    },
    category: 'service_centre',
    district: 'Bengaluru Urban',
    locality: 'Jayanagar',
    address: {
      en: 'Jayanagar BDA Complex, 4th Block, Bengaluru, Karnataka 560011',
      kn: 'ಜಯನಗರ ಬಿಡಿಎ ಕಾಂಪ್ಲೆಕ್ಸ್, ೪ನೇ ಬ್ಲಾಕ್, ಬೆಂಗಳೂರು 560011'
    },
    latitude: 12.9292,
    longitude: 77.5829,
    contactNumber: '080-26639988',
    timings: '8:00 AM – 7:00 PM (Monday to Saturday); 9:00 AM – 3:00 PM (Sunday)',
    servicesProvided: {
      en: ['Gruha Lakshmi & Gruha Jyothi Free Registration', 'Seva Sindhu Government Services', 'Nadakacheri Caste, Income & Residence Certificates', 'BESCOM Electricity & BWSSB Water Bill Payment', 'Aadhaar Updation & Senior Citizen Card Issuance'],
      kn: ['ಗೃಹಲಕ್ಷ್ಮಿ ಮತ್ತು ಗೃಹಜ್ಯೋತಿ ಉಚಿತ ನೋಂದಣಿ', 'ಸೇವಾ ಸಿಂಧು ಸಾರ್ವಜನಿಕ ಸೇವೆಗಳು', 'ನಾಡಕಚೇರಿ ಜಾತಿ ಮತ್ತು ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ', 'ಬೆಸ್ಕಾಂ ಮತ್ತು ಬಿಡಬ್ಲ್ಯೂಎಸ್‌ಎಸ್‌ಬಿ ಬಿಲ್ ಪಾವತಿ', 'ಹಿರಿಯ ನಾಗರಿಕರ ಗುರುತಿನ ಚೀಟಿ']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Bangalore+One+Jayanagar+BDA+Complex',
    verifiedSource: 'Directorate of Electronic Delivery of Citizen Services (EDCS)'
  },
  {
    id: 'fac-b1-malleshwaram',
    name: {
      en: 'Bangalore One Citizen Service Centre — Malleshwaram Mini BDA',
      kn: 'ಬೆಂಗಳೂರು ಒನ್ ಕೇಂದ್ರ — ಮಲ್ಲೇಶ್ವರಂ ಮಿನಿ ಬಿಡಿಎ'
    },
    category: 'service_centre',
    district: 'Bengaluru Urban',
    locality: 'Malleshwaram',
    address: {
      en: 'Near 13th Cross Bus Stand, Margosa Road, Malleshwaram, Bengaluru 560003',
      kn: '೧೩ನೇ ಕ್ರಾಸ್ ಬಸ್ ನಿಲ್ದಾಣದ ಹತ್ತಿರ, ಮಾರ್ಗೋಸಾ ರಸ್ತೆ, ಮಲ್ಲೇಶ್ವರಂ, ಬೆಂಗಳೂರು 560003'
    },
    latitude: 13.0072,
    longitude: 77.5701,
    contactNumber: '080-23447712',
    timings: '8:00 AM – 7:00 PM (Daily)',
    servicesProvided: {
      en: ['All Guarantee Scheme Applications', 'RTC / Pahani Revenue Land Extracts (Bhoomi)', 'Police Verification Certificate Application', 'KSRTC / BMTC Bus Pass Tokens'],
      kn: ['ಎಲ್ಲಾ ಗ್ಯಾರಂಟಿ ಯೋಜನೆಗಳ ಅರ್ಜಿ ಸಲ್ಲಿಕೆ', 'ಭೂಮಿ ಆರ್‌ಟಿಸಿ / ಪಹಣಿ ಮುದ್ರಣ', 'ಪೊಲೀಸ್ ಪರಿಶೀಲನಾ ಪ್ರಮಾಣಪತ್ರ']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Bangalore+One+Malleshwaram',
    verifiedSource: 'EDCS Karnataka'
  },
  {
    id: 'fac-b1-indiranagar',
    name: {
      en: 'Bangalore One Citizen Service Centre — Indiranagar',
      kn: 'ಬೆಂಗಳೂರು ಒನ್ ಕೇಂದ್ರ — ಇಂದಿರಾನಗರ'
    },
    category: 'service_centre',
    district: 'Bengaluru Urban',
    locality: 'Indiranagar CMH Road',
    address: {
      en: 'CMH Road, Near Metro Station, Indiranagar, Bengaluru 560038',
      kn: 'ಸಿಎಂಎಚ್ ರಸ್ತೆ, ಮೆಟ್ರೋ ನಿಲ್ದಾಣದ ಹತ್ತಿರ, ಇಂದಿರಾನಗರ, ಬೆಂಗಳೂರು 560038'
    },
    latitude: 12.9789,
    longitude: 77.6401,
    contactNumber: '080-25210045',
    timings: '8:00 AM – 7:00 PM',
    servicesProvided: {
      en: ['Digital Citizen Submissions', 'Property Tax Payment (BBMP SAS)', 'Birth & Death Certificate Copies', 'Passport Appointment Token Desk'],
      kn: ['ಡಿಜಿಟಲ್ ನಾಗರಿಕ ಸೇವೆಗಳು', 'ಬಿಬಿಎಂಪಿ ಆಸ್ತಿ ತೆರಿಗೆ ಪಾವತಿ', 'ಜನನ ಮತ್ತು ಮರಣ ಪ್ರಮಾಣಪತ್ರ']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Bangalore+One+Indiranagar',
    verifiedSource: 'EDCS Karnataka'
  },

  // ==========================================
  // 7. GOVERNMENT SCHOOLS & COLLEGES (BENGALURU URBAN)
  // ==========================================
  {
    id: 'fac-govt-school-malleshwaram',
    name: {
      en: 'Government Model High School Malleshwaram',
      kn: 'ಸರ್ಕಾರಿ ಮಾದರಿ ಪ್ರೌಢಶಾಲೆ ಮಲ್ಲೇಶ್ವರಂ'
    },
    category: 'school',
    district: 'Bengaluru Urban',
    locality: 'Malleshwaram 4th Main',
    address: {
      en: '4th Main Road, Malleshwaram, Bengaluru 560003',
      kn: '೪ನೇ ಮುಖ್ಯರಸ್ತೆ, ಮಲ್ಲೇಶ್ವರಂ, ಬೆಂಗಳೂರು 560003'
    },
    latitude: 12.9995,
    longitude: 77.5728,
    contactNumber: '080-23340019',
    timings: '9:30 AM – 4:30 PM (School Hours)',
    servicesProvided: {
      en: ['100% Free Tuition Class 1 to 10', 'PM POSHAN Daily Hot Mid-day Meals & Milk', 'Free Textbooks, 2 Pairs Uniforms & Shoes', 'SSP Pre-matric Scholarship Helpdesk'],
      kn: ['೧ ರಿಂದ ೧೦ನೇ ತರಗತಿವರೆಗೆ ಉಚಿತ ಶಿಕ್ಷಣ', 'ಉಚಿತ ಬಿಸಿಯೂಟ ಮತ್ತು ಹಾಲು', 'ಉಚಿತ ಪಠ್ಯಪುಸ್ತಕ, ಸಮವಸ್ತ್ರ ಮತ್ತು ಶೂ', 'ವಿದ್ಯಾರ್ಥಿವೇತನ ಮಾರ್ಗದರ್ಶನ']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Government+Model+High+School+Malleshwaram+Bangalore',
    verifiedSource: 'Department of School Education, Karnataka'
  },
  {
    id: 'fac-fort-high-school',
    name: {
      en: 'Government Fort High School Chamarajpet',
      kn: 'ಸರ್ಕಾರಿ ಕೋಟೆ ಪ್ರೌಢಶಾಲೆ ಚಾಮರಾಜಪೇಟೆ'
    },
    category: 'school',
    district: 'Bengaluru Urban',
    locality: 'Chamarajpet / Fort',
    address: {
      en: 'Near Bangalore Fort, K.R. Road, Chamarajpet, Bengaluru 560018',
      kn: 'ಬೆಂಗಳೂರು ಕೋಟೆ ಹತ್ತಿರ, ಕೆ.ಆರ್. ರಸ್ತೆ, ಚಾಮರಾಜಪೇಟೆ, ಬೆಂಗಳೂರು 560018'
    },
    latitude: 12.9598,
    longitude: 77.5732,
    contactNumber: '080-26703310',
    timings: '9:30 AM – 4:30 PM',
    servicesProvided: {
      en: ['Historic heritage government school founded 1907', 'Free English & Kannada medium instruction', 'Science laboratories & computer room', 'Free cycle & bus pass endorsement'],
      kn: ['ಐತಿಹಾಸಿಕ ಸರ್ಕಾರಿ ಶಾಲೆ', 'ಉಚಿತ ಇಂಗ್ಲಿಷ್ ಮತ್ತು ಕನ್ನಡ ಮಾಧ್ಯಮ', 'ವಿಜ್ಞಾನ ಪ್ರಯೋಗಾಲಯ ಮತ್ತು ಕಂಪ್ಯೂಟರ್ ತರಬೇತಿ']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Fort+High+School+Chamarajpet+Bangalore',
    verifiedSource: 'Karnataka School Education Dept'
  },
  {
    id: 'fac-gfgc-vijayanagar',
    name: {
      en: 'Government First Grade College Vijayanagar',
      kn: 'ಸರ್ಕಾರಿ ಪ್ರಥಮ ದರ್ಜೆ ಕಾಲೇಜು ವಿಜಯನಗರ'
    },
    category: 'college',
    district: 'Bengaluru Urban',
    locality: 'Vijayanagar',
    address: {
      en: 'Near Vijayanagar Water Tank, Bengaluru 560040',
      kn: 'ವಿಜಯನಗರ ನೀರಿನ ಟ್ಯಾಂಕ್ ಹತ್ತಿರ, ಬೆಂಗಳೂರು 560040'
    },
    latitude: 12.9711,
    longitude: 77.5372,
    contactNumber: '080-23391880',
    timings: '9:00 AM – 5:00 PM',
    servicesProvided: {
      en: ['Subsidized BA, BSc, BCom, BBA & BCA degrees', '100% Free Tuition for SC/ST and Category 1 students', 'SSP Post-matric Scholarship Nodal Center', 'Free Placement Cell and Competitive Exam Library'],
      kn: ['ಬಿಎ, ಬಿಎಸ್ಸಿ, ಬಿಕಾಂ, ಬಿಸಿಎ ಪದವಿಗಳು', 'ಎಸ್‌ಸಿ/ಎಸ್‌ಟಿ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸಂಪೂರ್ಣ ಉಚಿತ ಪ್ರವೇಶ', 'ಎಸ್‌ಎಸ್‌ಪಿ ವಿದ್ಯಾರ್ಥಿವೇತನ ಕೇಂದ್ರ']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Government+First+Grade+College+Vijayanagar+Bangalore',
    verifiedSource: 'Department of Collegiate Education, Karnataka'
  },
  {
    id: 'fac-maharani-college',
    name: {
      en: 'Maharani Cluster University & Science College',
      kn: 'ಮಹಾರಾಣಿ ಕ್ಲಸ್ಟರ್ ವಿಶ್ವವಿದ್ಯಾಲಯ & ಕಾಲೇಜು'
    },
    category: 'college',
    district: 'Bengaluru Urban',
    locality: 'Palace Road / City Centre',
    address: {
      en: 'Palace Road, Near K.R. Circle, Bengaluru 560001',
      kn: 'ಅರಮನೆ ರಸ್ತೆ, ಕೆ.ಆರ್. ವೃತ್ತದ ಹತ್ತಿರ, ಬೆಂಗಳೂರು 560001'
    },
    latitude: 12.9765,
    longitude: 77.5872,
    contactNumber: '080-22262796',
    timings: '9:00 AM – 5:00 PM',
    servicesProvided: {
      en: ['Premier women public university campus', 'Undergraduate and postgraduate courses', 'State-of-the-art research labs', 'Vidyasiri & Post-matric scholarship cell'],
      kn: ['ಪ್ರತಿಷ್ಠಿತ ಸರ್ಕಾರಿ ಮಹಿಳಾ ವಿಶ್ವವಿದ್ಯಾಲಯ', 'ಪದವಿ ಮತ್ತು ಸ್ನಾತಕೋತ್ತರ ಕೋರ್ಸ್‌ಗಳು', 'ವಿದ್ಯಾಸಿರಿ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿವೇತನ ಕೋಶ']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Maharani+College+Palace+Road+Bangalore',
    verifiedSource: 'Higher Education Dept, Karnataka'
  },

  // ==========================================
  // 8. GOVERNMENT ITIs (INDUSTRIAL TRAINING INSTITUTES - BENGALURU)
  // ==========================================
  {
    id: 'fac-iti-peenya',
    name: {
      en: 'Government Industrial Training Institute (ITI) Peenya',
      kn: 'ಸರ್ಕಾರಿ ಕೈಗಾರಿಕಾ ತರಬೇತಿ ಸಂಸ್ಥೆ (ಐಟಿಐ) ಪೀಣ್ಯ'
    },
    category: 'iti',
    district: 'Bengaluru Urban',
    locality: 'Peenya Industrial Area',
    address: {
      en: 'Near Peenya 2nd Stage, Industrial Estate, Bengaluru 560058',
      kn: 'ಪೀಣ್ಯ ೨ನೇ ಹಂತ, ಇಂಡಸ್ಟ್ರಿಯಲ್ ಎಸ್ಟೇಟ್, ಬೆಂಗಳೂರು 560058'
    },
    latitude: 13.0312,
    longitude: 77.5195,
    contactNumber: '080-28394420',
    timings: '8:30 AM – 5:00 PM',
    servicesProvided: {
      en: ['NCVT Electrician, Fitter, Machinist, Turner, Welder & Electronic Mechanic', '100% Free Tuition + ₹1,500 Monthly Stipend for eligible students', 'Direct campus placement in Peenya manufacturing and aerospace industries', 'National Apprenticeship Promotion Scheme (NAPS) registration'],
      kn: ['ಎಲೆಕ್ಟ್ರಿಷಿಯನ್, ಫಿಟ್ಟರ್, ವೆಲ್ಡರ್ ಮತ್ತು ಟರ್ನರ್ ವೃತ್ತಿ ತರಬೇತಿ', 'ಉಚಿತ ಪ್ರವೇಶ ಮತ್ತು ಮಾಸಿಕ ₹1,500 ಶಿಷ್ಯವೇತನ', 'ಪೀಣ್ಯ ಕೈಗಾರಿಕೆಗಳಲ್ಲಿ ತಕ್ಷಣದ ಉದ್ಯೋಗಾವಕಾಶ']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Government+ITI+Peenya+Bangalore',
    verifiedSource: 'Department of Industrial Training and Employment (DTE), Karnataka'
  },
  {
    id: 'fac-iti-women-dairy-circle',
    name: {
      en: 'Government ITI (Women) Dairy Circle',
      kn: 'ಸರ್ಕಾರಿ ಮಹಿಳಾ ಐಟಿಐ ಡೈರಿ ಸರ್ಕಲ್'
    },
    category: 'iti',
    district: 'Bengaluru Urban',
    locality: 'Dairy Circle / Bannerghatta Road',
    address: {
      en: 'Hosur Road, Near Dairy Circle, Adugodi, Bengaluru 560030',
      kn: 'ಹೊಸೂರು ರಸ್ತೆ, ಡೈರಿ ಸರ್ಕಲ್ ಹತ್ತಿರ, ಆಡುಗೋಡಿ, ಬೆಂಗಳೂರು 560030'
    },
    latitude: 12.9387,
    longitude: 77.5991,
    contactNumber: '080-22223940',
    timings: '9:00 AM – 5:00 PM',
    servicesProvided: {
      en: ['Exclusively for women candidates', 'Computer Operator and Programming Assistant (COPA)', 'Dressmaking and Fashion Design Technology', 'Electronics and IoT Device Assembly'],
      kn: ['ಮಹಿಳೆಯರಿಗಾಗಿ ಪ್ರತ್ಯೇಕ ಸರ್ಕಾರಿ ಐಟಿಐ', 'ಕಂಪ್ಯೂಟರ್ (COPA) ಮತ್ತು ಸಾಫ್ಟ್‌ವೇರ್ ತರಬೇತಿ', 'ಉಡುಪು ವಿನ್ಯಾಸ ಮತ್ತು ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Government+Women+ITI+Hosur+Road+Bangalore',
    verifiedSource: 'DTE Karnataka'
  }
];
