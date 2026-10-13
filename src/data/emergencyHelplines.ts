export interface EmergencyHelpline {
  id: string;
  number: string;
  title: { en: string; kn: string };
  category: 'national_emergency' | 'cyber_financial' | 'women_safety' | 'child_elderly' | 'police_legal' | 'health_fire';
  purpose: { en: string; kn: string };
  operatingHours: string;
  authority: { en: string; kn: string };
  actionTip: { en: string; kn: string };
  onlinePortal?: string;
}

export const EMERGENCY_HELPLINES_DATABASE: EmergencyHelpline[] = [
  {
    id: 'help-1930',
    number: '1930',
    title: {
      en: 'National Cyber Financial Fraud Helpline (1930)',
      kn: 'ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಹಣಕಾಸು ವಂಚನೆ ಸಹಾಯವಾಣಿ (೧೯೩೦)'
    },
    category: 'cyber_financial',
    purpose: {
      en: 'Immediate emergency reporting of UPI scams, unauthorized bank debits, credit card frauds, fake investment links, and APK malware scams to freeze stolen funds in transit.',
      kn: 'ಯುಪಿಐ ವಂಚನೆ, ಬ್ಯಾಂಕ್ ಖಾತೆಯಿಂದ ಅಕ್ರಮ ಹಣ ಕಡಿತ, ಫೋನ್ ಪೇ/ಗೂಗಲ್ ಪೇ ವಂಚನೆ ಮತ್ತು ಫಿಶಿಂಗ್ ಲಿಂಕ್ ದೂರು ದಾಖಲಿಸಿ ಹಣ ವರ್ಗಾವಣೆ ತಡೆಯುವ ತಕ್ಷಣದ ಸಹಾಯವಾಣಿ.'
    },
    operatingHours: '24/7 (Toll-Free All Across India)',
    authority: {
      en: 'Indian Cyber Crime Coordination Centre (I4C), Ministry of Home Affairs',
      kn: 'ಗೃಹ ಸಚಿವಾಲಯ, ಭಾರತ ಸರ್ಕಾರ & ಸೈಬರ್ ಕ್ರೈಂ ವಿಭಾಗ'
    },
    actionTip: {
      en: 'GOLDEN HOUR RULE: Call 1930 within 2 hours of money leaving your bank account. State your Bank Name, Account Number, UPI Transaction ID, and fraudster mobile number to halt money in recipient banks.',
      kn: 'ಗೋಲ್ಡನ್ ಅವರ್ ನಿಯಮ: ಹಣ ಕಡಿತವಾದ ೨ ಗಂಟೆಗಳ ಒಳಗಾಗಿ ೧೯೩೦ ಗೆ ಕರೆ ಮಾಡಿ ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆ, ಯುಪಿಐ ವಹಿವಾಟು ಐಡಿ ಮತ್ತು ವಂಚಕನ ಸಂಖ್ಯೆ ತಿಳಿಸಿದರೆ ಹಣವನ್ನು ಬ್ಯಾಂಕಿನಲ್ಲೇ ಫ್ರೀಜ್ ಮಾಡಬಹುದು.'
    },
    onlinePortal: 'https://cybercrime.gov.in/'
  },
  {
    id: 'help-112',
    number: '112',
    title: {
      en: 'National Unified Emergency Response Support System (112)',
      kn: 'ರಾಷ್ಟ್ರೀಯ ಏಕೀಕೃತ ತುರ್ತು ಸಹಾಯವಾಣಿ (೧೧೨)'
    },
    category: 'national_emergency',
    purpose: {
      en: 'All-in-one emergency dispatch for Police, Ambulance, Fire rescue, and Highway patrol. Replaces 100 with GPS-enabled Hoysala patrol dispatch in Bengaluru in under 8 minutes.',
      kn: 'ಪೊಲೀಸ್, ಆಂಬ್ಯುಲೆನ್ಸ್ ಮತ್ತು ಅಗ್ನಿಶಾಮಕ ದಳದ ಏಕೀಕೃತ ತುರ್ತು ಸಂಖ್ಯೆ. ಬೆಂಗಳೂರಿನಲ್ಲಿ ಜಿಪಿಎಸ್ ಆಧಾರಿತ ಹೊಯ್ಸಳ ವಾಹನ ತಕ್ಷಣ ನಿಮ್ಮ ಸ್ಥಳಕ್ಕೆ ಬರುತ್ತದೆ.'
    },
    operatingHours: '24/7/365 Continuous Monitoring',
    authority: {
      en: 'Karnataka State Police (KSP) Command & Control Centre',
      kn: 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಪೊಲೀಸ್ ನಿಯಂತ್ರಣ ಕೊಠಡಿ'
    },
    actionTip: {
      en: 'Dial 112 directly or trigger SOS on your smartphone. Share landmarks and keep GPS location enabled on your phone.',
      kn: '೧೧೨ ಗೆ ಕರೆ ಮಾಡಿ ನಿಮ್ಮ ಹತ್ತಿರದ ಪ್ರಮುಖ ಸ್ಥಳ ತಿಳಿಸಿ. ಮೊಬೈಲ್ ಜಿಪಿಎಸ್ ಸಕ್ರಿಯವಾಗಿರಲಿ.'
    },
    onlinePortal: 'https://ksp.karnataka.gov.in/'
  },
  {
    id: 'help-1091',
    number: '1091 / 181',
    title: {
      en: 'Women Safety & Domestic Abuse Helpline (1091 / 181)',
      kn: 'ಮಹಿಳಾ ಸುರಕ್ಷತೆ ಮತ್ತು ಸಹಾಯವಾಣಿ (೧೦೯೧ / ೧೮೧)'
    },
    category: 'women_safety',
    purpose: {
      en: 'Immediate emergency police intervention for women facing eve-teasing, harassment, domestic violence, workplace abuse, or distress in transit.',
      kn: 'ದೌರ್ಜನ್ಯ, ಕೌಟುಂಬಿಕ ಹಿಂಸೆ, ಲೈಂಗಿಕ ಕಿರುಕುಳ ಅಥವಾ ಅಪಾಯದಲ್ಲಿರುವ ಮಹಿಳೆಯರ ರಕ್ಷಣೆ ಮತ್ತು ಆಪ್ತಸಮಾಲೋಚನೆಗಾಗಿ.'
    },
    operatingHours: '24/7 Dedicated Women Officers',
    authority: {
      en: 'Women & Child Development Dept & Karnataka Police Parihar Cell',
      kn: 'ಮಹಿಳಾ ಮತ್ತು ಮಕ್ಕಳ ಅಭಿವೃದ್ಧಿ ಇಲಾಖೆ ಮತ್ತು ಪರಿಹಾರ ವಿಭಾಗ'
    },
    actionTip: {
      en: 'Bengaluru Vanitha Sahayavani provides free counseling, legal advice, and immediate shelter home arrangements.',
      kn: 'ಬೆಂಗಳೂರು ವನಿತಾ ಸಹಾಯವಾಣಿಯು ಉಚಿತ ವಕೀಲರ ಸಲಹೆ, ಆಪ್ತಸಮಾಲೋಚನೆ ಮತ್ತು ಸುರಕ್ಷಿತ ಆಶ್ರಯ ನೀಡುತ್ತದೆ.'
    }
  },
  {
    id: 'help-1098',
    number: '1098',
    title: {
      en: 'Childline National Emergency Service (1098)',
      kn: 'ಮಕ್ಕಳ ರಾಷ್ಟ್ರೀಯ ತುರ್ತು ಸಹಾಯವಾಣಿ (೧೦೯೮)'
    },
    category: 'child_elderly',
    purpose: {
      en: 'Protection for children in distress: child labour, child marriage, physical abuse, missing children, runaways, and trafficking rescue.',
      kn: 'ಬಾಲಕಾರ್ಮಿಕ ಪದ್ಧತಿ, ಬಾಲ್ಯವಿವಾಹ, ಮಕ್ಕಳ ಮೇಲಿನ ದೌರ್ಜನ್ಯ, ನಾಪತ್ತೆಯಾದ ಮಕ್ಕಳು ಮತ್ತು ಸಂಕಷ್ಟದಲ್ಲಿರುವ ಮಕ್ಕಳ ರಕ್ಷಣೆ.'
    },
    operatingHours: '24/7 Toll-Free Dispatch',
    authority: {
      en: 'Ministry of Women & Child Development & Child Welfare Committees (CWC)',
      kn: 'ಮಕ್ಕಳ ಕಲ್ಯಾಣ ಸಮಿತಿ (CWC)'
    },
    actionTip: {
      en: 'Anyone seeing a child in danger, forced into begging, or facing child marriage can report anonymously.',
      kn: 'ಯಾರೇ ಆದರೂ ಅಪಾಯದಲ್ಲಿರುವ ಮಕ್ಕಳನ್ನು ಕಂಡಾಗ ತಮ್ಮ ಹೆಸರು ಬಹಿರಂಗಪಡಿಸದೆ ಗೌಪ್ಯವಾಗಿ ಮಾಹಿತಿ ನೀಡಬಹುದು.'
    }
  },
  {
    id: 'help-14567',
    number: '14567',
    title: {
      en: 'Elderline National Senior Citizens Helpline (14567)',
      kn: 'ಹಿರಿಯ ನಾಗರಿಕರ ರಾಷ್ಟ್ರೀಯ ಸಹಾಯವಾಣಿ (೧೪೫೬೭)'
    },
    category: 'child_elderly',
    purpose: {
      en: 'Support for abandoned senior citizens, elder abuse intervention, pension disputes, free legal counseling, and old age home rehabilitation.',
      kn: 'ಅನಾಥ ಹಿರಿಯ ನಾಗರಿಕರ ರಕ್ಷಣೆ, ಹಿಂಸೆ ತಡೆ, ಪಿಂಚಣಿ ಸಮಸ್ಯೆ ಪರಿಹಾರ ಮತ್ತು ವೃದ್ಧಾಶ್ರಮದ ಆಶ್ರಯ.'
    },
    operatingHours: '8:00 AM to 8:00 PM (Daily)',
    authority: {
      en: 'Ministry of Social Justice and Empowerment & Nightingales Medical Trust',
      kn: 'ಸಾಮಾಜಿಕ ನ್ಯಾಯ ಮತ್ತು ಸಬಲೀಕರಣ ಸಚಿವಾಲಯ'
    },
    actionTip: {
      en: 'Under Maintenance and Welfare of Parents Act 2007, senior citizens can seek court orders against children who neglect or evict them.',
      kn: 'ಪೋಷಕರ ರಕ್ಷಣೆ ಮತ್ತು ನಿರ್ವಹಣಾ ಕಾಯ್ದೆ ೨೦೦೭ ರ ಅಡಿಯಲ್ಲಿ ತಕ್ಷಣದ ಕಾನೂನು ರಕ್ಷಣೆ ಪಡೆಯಬಹುದು.'
    }
  },
  {
    id: 'help-1915',
    number: '1915',
    title: {
      en: 'National Consumer Helpline (1915)',
      kn: 'ರಾಷ್ಟ್ರೀಯ ಗ್ರಾಹಕರ ಸಹಾಯವಾಣಿ (೧೯೧೫)'
    },
    category: 'police_legal',
    purpose: {
      en: 'Lodging grievances against deceptive e-commerce sellers, flight refund delays, banking overcharges, insurance claim denials, and faulty products.',
      kn: 'ಆನ್‌ಲೈನ್ ಶಾಪಿಂಗ್ ವಂಚನೆ, ವಿಮಾನ ಟಿಕೆಟ್ ಮರುಪಾವತಿ ಸಮಸ್ಯೆ, ಬ್ಯಾಂಕ್ ಹೆಚ್ಚುವರಿ ಶುಲ್ಕ ಮತ್ತು ನಕಲಿ ಉತ್ಪನ್ನಗಳ ವಿರುದ್ಧ ದೂರು ದಾಖಲಿಸಲು.'
    },
    operatingHours: '8:00 AM to 8:00 PM',
    authority: {
      en: 'Department of Consumer Affairs, Govt of India',
      kn: 'ಗ್ರಾಹಕರ ವ್ಯವಹಾರಗಳ ಇಲಾಖೆ'
    },
    actionTip: {
      en: 'Register with invoice, receipt, or transaction screenshot on consumerhelpline.gov.in for direct company escalation.',
      kn: 'ಖರೀದಿ ರಸೀದಿ ಮತ್ತು ವಹಿವಾಟು ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಇಟ್ಟುಕೊಂಡು ದೂರು ದಾಖಲಿಸಿ.'
    },
    onlinePortal: 'https://consumerhelpline.gov.in/'
  }
];

export interface ScamAlert {
  id: string;
  title: { en: string; kn: string };
  category: 'upi_scam' | 'apk_loan' | 'part_time_job' | 'digital_arrest' | 'electricity_bill';
  howItWorks: { en: string; kn: string };
  warningSign: { en: string; kn: string };
  preventionSteps: { en: string[]; kn: string[] };
}

export const SCAM_ALERTS_DATABASE: ScamAlert[] = [
  {
    id: 'scam-digital-arrest',
    title: {
      en: 'Fake Police / CBI "Digital Arrest" Video Call Scam',
      kn: 'ನಕಲಿ ಪೊಲೀಸ್ / ಸಿಬಿಐ "ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್" ವಿಡಿಯೋ ಕಾಲ್ ವಂಚನೆ'
    },
    category: 'digital_arrest',
    howItWorks: {
      en: 'Scammers call via WhatsApp or Skype wearing fake police uniforms with fake police station backgrounds. They claim a parcel with drugs or money laundering has been caught in your name and order you to stay on video call while demanding lakhs into "verification accounts".',
      kn: 'ವಂಚಕರು ಪೊಲೀಸ್ ಸಮವಸ್ತ್ರ ಧರಿಸಿ ವಿಡಿಯೋ ಕಾಲ್ ಮಾಡಿ, ನಿಮ್ಮ ಹೆಸರಿನಲ್ಲಿ ಮಾದಕ ದ್ರವ್ಯದ ಪಾರ್ಸೆಲ್ ಸಿಕ್ಕಿದೆ ಎಂದು ಬೆದರಿಸಿ, ಪರಿಶೀಲನೆಯ ಹೆಸರಿನಲ್ಲಿ ಲಕ್ಷಾಂತರ ರೂಪಾಯಿ ಹಣವನ್ನು ತಮ್ಮ ಖಾತೆಗೆ ಹಾಕಿಸಿಕೊಳ್ಳುತ್ತಾರೆ.'
    },
    warningSign: {
      en: 'REAL LAW ENFORCEMENT NEVER conducts arrests over Skype/WhatsApp or asks citizens to transfer money for verification.',
      kn: 'ಯಾವುದೇ ನಿಜವಾದ ಪೊಲೀಸ್ ಅಥವಾ ಸಿಬಿಐ ವಿಡಿಯೋ ಕಾಲ್ ಮೂಲಕ ಬಂಧಿಸುವುದಿಲ್ಲ ಅಥವಾ ಪರಿಶೀಲನೆಗೆ ಹಣ ಕೇಳುವುದಿಲ್ಲ.'
    },
    preventionSteps: {
      en: [
        'Immediately disconnect any video call claiming to be Police/CBI/Customs/ED.',
        'Never transfer any money into so-called "reserve bank secret escrow accounts".',
        'Call 1930 immediately or file a report at your local police station.'
      ],
      kn: [
        'ಪೊಲೀಸ್ ಹೆಸರಿನಲ್ಲಿ ಬರುವ ಅಪರಿಚಿತ ವಿಡಿಯೋ ಕಾಲ್‌ಗಳನ್ನು ತಕ್ಷಣ ಕಟ್ ಮಾಡಿ.',
        'ಯಾವುದೇ ಖಾತೆಗೆ ಪರಿಶೀಲನೆಯ ಹೆಸರಿನಲ್ಲಿ ಹಣ ವರ್ಗಾಯಿಸಬೇಡಿ.',
        'ತಕ್ಷಣ ೧೯೩೦ ಗೆ ಕರೆ ಮಾಡಿ ದೂರು ನೀಡಿ.'
      ]
    }
  },
  {
    id: 'scam-part-time-job',
    title: {
      en: 'Telegram / WhatsApp "Like YouTube Videos & Earn ₹5000" Scam',
      kn: 'ಟೆಲಿಗ್ರಾಮ್ / ವಾಟ್ಸಾಪ್ "ವಿಡಿಯೋ ಲೈಕ್ ಮಾಡಿ ಹಣ ಗಳಿಸಿ" ವಂಚನೆ'
    },
    category: 'part_time_job',
    howItWorks: {
      en: 'Victims are sent messages offering ₹50–₹100 per Google review or YouTube like. Small amounts are paid initially. Then victims are invited to private Telegram groups to invest ₹10,000–₹5,00,000 for "crypto tasks", after which withdrawals are blocked and scammers disappear.',
      kn: 'ಮೊದಲು ಯೂಟ್ಯೂಬ್ ವಿಡಿಯೋ ಲೈಕ್ ಮಾಡಿದರೆ ₹೫೦ ನೀಡುವುದಾಗಿ ನಂಬಿಸುತ್ತಾರೆ. ನಂತರ ಟೆಲಿಗ್ರಾಮ್ ಗ್ರೂಪ್‌ಗೆ ಸೇರಿಸಿ ಹೆಚ್ಚಿನ ಹಣ ಹೂಡಿಕೆ ಮಾಡಿಸಿ ಸಂಪೂರ್ಣ ಹಣವನ್ನು ದೋಚುತ್ತಾರೆ.'
    },
    warningSign: {
      en: 'Demanding payment to release earned funds or task upgrades.',
      kn: 'ಗಳಿಸಿದ ಹಣವನ್ನು ಹಿಂಪಡೆಯಲು ನೀವೇ ಹಣ ಕಟ್ಟಬೇಕೆಂದು ಕೇಳುವುದು.'
    },
    preventionSteps: {
      en: [
        'No legitimate company recruits via unsolicited WhatsApp/Telegram messages.',
        'Never join task investment groups.',
        'Block and report the number immediately.'
      ],
      kn: [
        'ವಾಟ್ಸಾಪ್ ಸಂದೇಶಗಳಲ್ಲಿ ಬರುವ ಅರೆಕಾಲಿಕ ಕೆಲಸದ ಆಮಿಷಗಳನ್ನು ನಂಬಬೇಡಿ.',
        'ಯಾವುದೇ ಗ್ರೂಪ್‌ಗಳಿಗೆ ಹಣ ಹೂಡಿಕೆ ಮಾಡಬೇಡಿ.',
        'ಸಂಖ್ಯೆಯನ್ನು ತಕ್ಷಣ ಬ್ಲಾಕ್ ಮಾಡಿ.'
      ]
    }
  },
  {
    id: 'scam-electricity-bill',
    title: {
      en: 'BESCOM "Electricity Will Be Disconnected Tonight" SMS Scam',
      kn: 'ಬೆಸ್ಕಾಂ "ಇಂದೇ ವಿದ್ಯುತ್ ಸಂಪರ್ಕ ಕಡಿತಗೊಳ್ಳಲಿದೆ" ನಕಲಿ ಸಂದೇಶ'
    },
    category: 'electricity_bill',
    howItWorks: {
      en: 'An SMS arrives claiming your electricity bill was not updated and power will be cut at 9:30 PM. A personal mobile number is given. Calling it prompts downloading an APK file (AnyDesk/TeamViewer) which drains your bank balance.',
      kn: 'ನಿಮ್ಮ ವಿದ್ಯುತ್ ಬಿಲ್ ಪಾವತಿಯಾಗಿಲ್ಲ, ರಾತ್ರಿ ೯:೩೦ ಕ್ಕೆ ವಿದ್ಯುತ್ ಕಡಿತವಾಗಲಿದೆ ಎಂದು ನಕಲಿ ಸಂದೇಶ ಕಳುಹಿಸಿ, ಫೋನ್‌ನಲ್ಲಿ ಆ್ಯಪ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿಸಿ ಬ್ಯಾಂಕ್ ಖಾಲಿ ಮಾಡುತ್ತಾರೆ.'
    },
    warningSign: {
      en: 'BESCOM/ESCOMs send messages only via official government sender IDs (e.g., BESCOM), never from 10-digit personal phone numbers.',
      kn: 'ಬೆಸ್ಕಾಂ ಎಂದಿಗೂ ಖಾಸಗಿ ೧೦ ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯಿಂದ ಬೆದರಿಕೆಯ ಮೆಸೇಜ್ ಕಳುಹಿಸುವುದಿಲ್ಲ.'
    },
    preventionSteps: {
      en: [
        'Check your electricity bill status only on the official BESCOM portal or Bangalore One.',
        'Never install APK files sent via WhatsApp or SMS links.',
        'Call 1912 (official BESCOM 24/7 helpline) to verify genuine bill dues.'
      ],
      kn: [
        'ಬಿಲ್ ವಿವರವನ್ನು ಅಧಿಕೃತ ಬೆಸ್ಕಾಂ ಆ್ಯಪ್ ಅಥವಾ ೧೯೧೨ ಗೆ ಕರೆ ಮಾಡಿ ಪರಿಶೀಲಿಸಿ.',
        'ಯಾವುದೇ ಅಪರಿಚಿತ ಲಿಂಕ್ ಅಥವಾ ಆ್ಯಪ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಬೇಡಿ.',
        'ಬೆಸ್ಕಾಂ ಅಧಿಕೃತ ಸಹಾಯವಾಣಿ ಸಂಖ್ಯೆ ೧೯೧೨.'
      ]
    }
  }
];
