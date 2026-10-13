export interface SkillCourse {
  id: string;
  title: { en: string; kn: string };
  category: 
    | 'technical_iti' 
    | 'digital_it' 
    | 'trade_craft' 
    | 'women_exclusive' 
    | 'rural_youth' 
    | 'exam_coaching' 
    | 'self_employment' 
    | 'dropouts_bridge';
  provider: { en: string; kn: string };
  duration: { en: string; kn: string };
  eligibility: { en: string; kn: string };
  stipendOrCost: { en: string; kn: string };
  certification: { en: string; kn: string };
  jobLinkage: { en: string; kn: string };
  officialLink: string;
  description: { en: string; kn: string };
  syllabusHighlights: { en: string[]; kn: string[] };
  admissionProcedure?: { en: string; kn: string };
}

export const SKILL_COURSES_DATABASE: SkillCourse[] = [
  {
    id: 'skill-iti-electrician',
    title: {
      en: 'Government ITI Electrician & Wireman Trade (NCVT)',
      kn: 'ಸರ್ಕಾರಿ ಐಟಿಐ ಎಲೆಕ್ಟ್ರಿಷಿಯನ್ & ವೈರ್‌ಮ್ಯಾನ್ ವೃತ್ತಿ ತರಬೇತಿ (ಎನ್‌ಸಿವಿಟಿ)'
    },
    category: 'technical_iti',
    provider: {
      en: 'Directorate of Industrial Training & Employment (DTE), Karnataka',
      kn: 'ಕೈಗಾರಿಕಾ ತರಬೇತಿ ಮತ್ತು ಉದ್ಯೋಗ ನಿರ್ದೇಶನಾಲಯ, ಕರ್ನಾಟಕ'
    },
    duration: { en: '2 Years (Full-time practical & theory)', kn: '೨ ವರ್ಷಗಳು (ಪ್ರಾಯೋಗಿಕ & ಸೈದ್ಧಾಂತಿಕ)' },
    eligibility: { en: '10th Standard (SSLC) Pass with Science & Math', kn: 'ಎಸ್ಸೆಸ್ಸೆಲ್ಸಿ ಉತ್ತೀರ್ಣ (ವಿಜ್ಞಾನ & ಗಣಿತ)' },
    stipendOrCost: {
      en: '100% Free Tuition in Govt ITIs + Monthly ₹1,500 stipend for eligible categories & Free Bus Pass',
      kn: 'ಸರ್ಕಾರಿ ಐಟಿಐಗಳಲ್ಲಿ ಉಚಿತ ಪ್ರವೇಶ + ಮಾಸಿಕ ₹1,500 ಶಿಷ್ಯವೇತನ & ಉಚಿತ ಬಸ್ ಪಾಸ್'
    },
    certification: { en: 'National Trade Certificate (NTC) recognized by Govt of India', kn: 'ರಾಷ್ಟ್ರೀಯ ವೃತ್ತಿ ಪ್ರಮಾಣಪತ್ರ (NTC)' },
    jobLinkage: { en: 'BESCOM/KPTCL Junior Lineman, Metro Rail, Private Manufacturing plants', kn: 'ಬೆಸ್ಕಾಂ, ಮೆಟ್ರೋ, ಕೈಗಾರಿಕೆಗಳಲ್ಲಿ ತಕ್ಷಣದ ಉದ್ಯೋಗ' },
    officialLink: 'https://iti.karnataka.gov.in/',
    description: {
      en: 'Hands-on electrical installation, domestic wiring, motor winding, industrial switchgear, solar panel connectivity, and safety compliance in accredited government training workshops.',
      kn: 'ಮನೆ ಮತ್ತು ಕಾರ್ಖಾನೆಗಳ ವಿದ್ಯುತ್ ವೈರಿಂಗ್, ಮೋಟಾರ್ ರಿಪೇರಿ, ಸೋಲಾರ್ ಅಳವಡಿಕೆ ಮತ್ತು ಸುರಕ್ಷತಾ ನಿಯಮಗಳ ಪ್ರಾಯೋಗಿಕ ತರಬೇತಿ.'
    },
    syllabusHighlights: {
      en: ['Domestic & Industrial Conduit Wiring', 'AC/DC Motors & Transformers', 'Solar PV Rooftop Installation', 'Earthing & Lightning Protection Systems'],
      kn: ['ಮನೆ ಹಾಗೂ ಕಾರ್ಖಾನೆಗಳ ವೈರಿಂಗ್', 'ಎಸಿ/ಡಿಸಿ ಮೋಟಾರ್ ಮತ್ತು ಟ್ರಾನ್ಸ್‌ಫಾರ್ಮರ್', 'ಸೋಲಾರ್ ರೂಫ್‌ಟಾಪ್ ಅಳವಡಿಕೆ', 'ಅರ್ಥಿಂಗ್ ಮತ್ತು ಸುರಕ್ಷತಾ ನಿಯಮಗಳು']
    },
    admissionProcedure: {
      en: 'Statewide centralized merit counselling via iti.karnataka.gov.in every June/July. Direct entry options available at nodal Govt ITIs.',
      kn: 'ಪ್ರತಿ ಜೂನ್/ಜುಲೈನಲ್ಲಿ iti.karnataka.gov.in ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಕೇಂದ್ರೀಕೃತ ಕೌನ್ಸೆಲಿಂಗ್ ಮೂಲಕ ಪ್ರವೇಶ.'
    }
  },
  {
    id: 'skill-pmkvy-data-entry',
    title: {
      en: 'PMKVY 4.0 Digital Literacy & Office IT Operations',
      kn: 'ಪಿಎಂಕೆವಿವೈ ೪.೦ ಡಿಜಿಟಲ್ ಸಾಕ್ಷರತೆ ಮತ್ತು ಕಂಪ್ಯೂಟರ್ ತರಬೇತಿ'
    },
    provider: {
      en: 'National Skill Development Corporation (NSDC) & Kaushalya Karnataka',
      kn: 'ರಾಷ್ಟ್ರೀಯ ಕೌಶಲ್ಯಾಭಿವೃದ್ಧಿ ನಿಗಮ (NSDC) & ಕೌಶಲ್ಯ ಕರ್ನಾಟಕ'
    },
    category: 'digital_it',
    duration: { en: '3 Months (300 Hours blended)', kn: '೩ ತಿಂಗಳು (೩೦೦ ಗಂಟೆಗಳು)' },
    eligibility: { en: '10th / 12th Pass or School Dropouts aged 18–35', kn: '೧೦ ಅಥವಾ ೧೨ನೇ ತರಗತಿ ಉತ್ತೀರ್ಣ (೧೮-೩೫ ವರ್ಷ)' },
    stipendOrCost: { en: 'Free Training + Free Assessment + ₹500 Assessment Conveyance', kn: 'ಸಂಪೂರ್ಣ ಉಚಿತ ತರಬೇತಿ ಮತ್ತು ಪರೀಕ್ಷಾ ಭತ್ಯೆ' },
    certification: { en: 'NSQF Level 4 Government Certificate with QR Verification', kn: 'ಎನ್‌ಎಸ್‌ಕ್ಯೂಎಫ್ ಹಂತ ೪ ಅಧಿಕೃತ ಪ್ರಮಾಣಪತ್ರ' },
    jobLinkage: { en: 'BPO, Data Entry Operator in BBMP / e-Governance centres, Back-office assistant', kn: 'ಬೆಂಗಳೂರು ಒನ್ ಕೇಂದ್ರಗಳು, ಡೇಟಾ ಎಂಟ್ರಿ, ಬ್ಯಾಕ್ ಆಫೀಸ್ ಉದ್ಯೋಗ' },
    officialLink: 'https://www.pmkvyofficial.org/',
    description: {
      en: 'Practical training in MS Office, Google Workspace, regional Kannada Nudi/Baraha typing, Internet banking safety, and basic database management.',
      kn: 'ಎಂಎಸ್ ಆಫೀಸ್, ಕಂಪ್ಯೂಟರ್ ಟೈಪಿಂಗ್, ಕನ್ನಡ ನುಡಿ/ಬರಹ, ಇ-ಆಡಳಿತ ಪೋರ್ಟಲ್ ಬಳಕೆ ಮತ್ತು ಡೇಟಾ ನಿರ್ವಹಣೆ.'
    },
    syllabusHighlights: {
      en: ['Advanced Excel & Spreadsheets', 'English & Kannada Nudi Typing', 'Online Government Service Submissions', 'Cyber Hygiene & Data Privacy'],
      kn: ['ಅಡ್ವಾನ್ಸ್ಡ್ ಎಕ್ಸೆಲ್ ಮತ್ತು ಸ್ಪ್ರೆಡ್‌ಶೀಟ್', 'ಕನ್ನಡ ನುಡಿ ಮತ್ತು ಇಂಗ್ಲಿಷ್ ಟೈಪಿಂಗ್', 'ಆನ್‌ಲೈನ್ ಪೋರ್ಟಲ್ ಅರ್ಜಿ ಸಲ್ಲಿಕೆ', 'ಸೈಬರ್ ಸುರಕ್ಷತೆ']
    }
  },
  {
    id: 'skill-women-tailoring-fashion',
    title: {
      en: 'Women-Exclusive Tailoring, Boutique & Garment Design',
      kn: 'ಮಹಿಳೆಯರಿಗಾಗಿ ಉಚಿತ ಹೊಲಿಗೆ ಮತ್ತು ಉಡುಪು ವಿನ್ಯಾಸ ತರಬೇತಿ (ರುಡ್‌ಸೆಟ್)'
    },
    category: 'women_exclusive',
    provider: {
      en: 'Rural Development & Self Employment Training Institute (RUDSETI / Canara RSETI)',
      kn: 'ಗ್ರಾಮೀಣಾಭಿವೃದ್ಧಿ ಮತ್ತು ಸ್ವಯಂ ಉದ್ಯೋಗ ತರಬೇತಿ ಸಂಸ್ಥೆ (ರುಡ್‌ಸೆಟ್)'
    },
    duration: { en: '30 Days (Residential with Free Food & Accommodation)', kn: '೩೦ ದಿನಗಳು (ಉಚಿತ ಊಟ-ವಸತಿ ಸಹಿತ ವಸತಿ ತರಬೇತಿ)' },
    eligibility: { en: 'Women aged 18 to 45 years (Rural and semi-urban preference)', kn: '೧೮ ರಿಂದ ೪೫ ವರ್ಷದ ಮಹಿಳೆಯರು (ಗ್ರಾಮೀಣ ಮಹಿಳೆಯರಿಗೆ ಆದ್ಯತೆ)' },
    stipendOrCost: { en: '100% Free including material, food and hostel accommodation', kn: 'ಉಚಿತ ತರಬೇತಿ, ಉಚಿತ ಊಟ ಮತ್ತು ಹಾಸ್ಟೆಲ್ ವಸತಿ' },
    certification: { en: 'Ministry of Rural Development (MoRD) Accredited Certificate', kn: 'ಗ್ರಾಮೀಣಾಭಿವೃದ್ಧಿ ಸಚಿವಾಲಯದ ಪ್ರಮಾಣಪತ್ರ' },
    jobLinkage: { en: 'Mudra Loan linkage for purchasing stitching machines, boutique self-employment', kn: 'ಸ್ವಂತ ಟೈಲರಿಂಗ್ ಅಂಗಡಿಗೆ ಮುದ್ರಾ ಸಾಲ ಸೌಲಭ್ಯ' },
    officialLink: 'https://rudsetitraining.org/',
    description: {
      en: 'Comprehensive residential tailoring program for rural and homemaker women covering pattern cutting, blouses, salwar suits, uniforms, machine maintenance, and basic business bookkeeping.',
      kn: 'ಮಹಿಳೆಯರು ಮನೆಯಲ್ಲೇ ಸ್ವಾವಲಂಬಿ ಹೊಲಿಗೆ ವೃತ್ತಿ ನಡೆಸಲು ಬಟ್ಟೆ ಕಟಿಂಗ್, ಬ್ಲೌಸ್, ಸಮವಸ್ತ್ರ ಹೊಲಿಯುವುದು ಮತ್ತು ವ್ಯಾಪಾರ ನಿರ್ವಹಣೆಯ ಸಮಗ್ರ ತರಬೇತಿ.'
    },
    syllabusHighlights: {
      en: ['Garment Pattern Cutting & Measurement', 'Electric Sewing Machine Maintenance', 'Boutique Design & Finishing', 'PMEGP & Mudra Loan Application Assistance'],
      kn: ['ಬಟ್ಟೆ ಅಳತೆ ಮತ್ತು ಕಟಿಂಗ್ ಕೌಶಲ್ಯ', 'ಹೊಲಿಗೆ ಯಂತ್ರದ ರಿಪೇರಿ ಮತ್ತು ನಿರ್ವಹಣೆ', 'ಡಿಸೈನರ್ ಉಡುಪುಗಳ ಹೊಲಿಗೆ', 'ಮುದ್ರಾ ಯೋಜನೆಯಡಿ ಸಾಲ ಮಾರ್ಗದರ್ಶನ']
    }
  },
  {
    id: 'skill-mechanic-ev-repair',
    title: {
      en: 'Two-Wheeler & EV Service Technician Course (GTTC)',
      kn: 'ದ್ವಿಚಕ್ರ ವಾಹನ & ಇವಿ (ಎಲೆಕ್ಟ್ರಿಕ್ ವಾಹನ) ರಿಪೇರಿ ತರಬೇತಿ (ಜಿಟಿಟಿಸಿ)'
    },
    category: 'trade_craft',
    provider: {
      en: 'Government Tool Room & Training Centre (GTTC), Karnataka',
      kn: 'ಸರ್ಕಾರಿ ಟೂಲ್ ರೂಂ & ತರಬೇತಿ ಕೇಂದ್ರ (ಜಿಟಿಟಿಸಿ), ಕರ್ನಾಟಕ'
    },
    duration: { en: '6 Months (Intensive workshop hands-on)', kn: '೬ ತಿಂಗಳು (ವರ್ಕ್‌ಶಾಪ್ ತರಬೇತಿ)' },
    eligibility: { en: 'SSLC (10th) or 8th Pass with mechanical aptitude', kn: '೮ ಅಥವಾ ೧೦ನೇ ತರಗತಿ ಉತ್ತೀರ್ಣ' },
    stipendOrCost: { en: 'Subsidized / Free under Kaushalya Karnataka CMKKY scheme', kn: 'ಕೌಶಲ್ಯ ಕರ್ನಾಟಕ ಯೋಜನೆಯಡಿ ಉಚಿತ' },
    certification: { en: 'Automotive Skills Development Council (ASDC) Certificate', kn: 'ಎಎಸ್‌ಡಿಸಿ ವಾಹನ ಕೌಶಲ್ಯ ಪ್ರಮಾಣಪತ್ರ' },
    jobLinkage: { en: 'Authorized EV dealerships (Ather, Ola, TVS, Honda service centres)', kn: 'ಪ್ರಮುಖ ಇವಿ ಶೋರೂಂ ಮತ್ತು ಅಧಿಕೃತ ಸರ್ವೀಸ್ ಸೆಂಟರ್‌ಗಳಲ್ಲಿ ಉದ್ಯೋಗ' },
    officialLink: 'https://gttc.karnataka.gov.in/',
    description: {
      en: 'Diagnostics and repair of electric scooters, battery pack health monitoring, brushless motor maintenance, regenerative braking, wiring harness diagnostics, and IC engines.',
      kn: 'ಎಲೆಕ್ಟ್ರಿಕ್ ಬೈಕ್ ಮತ್ತು ಸ್ಕೂಟರ್‌ಗಳ ಬ್ಯಾಟರಿ, ಮೋಟಾರ್ ಮತ್ತು ವೈರಿಂಗ್ ರಿಪೇರಿ ಹಾಗೂ ಆಧುನಿಕ ದ್ವಿಚಕ್ರ ವಾಹನಗಳ ಸರ್ವೀಸ್ ತರಬೇತಿ.'
    },
    syllabusHighlights: {
      en: ['Lithium-ion Battery Swapping & BMS Diagnostics', 'BLDC Motor Troubleshooting', 'Digital Multimeter & Circuit Tracing', 'Workshop Tool Ergonomics & Customer Handling'],
      kn: ['ಲಿಥಿಯಂ ಬ್ಯಾಟರಿ ಮತ್ತು ಬಿಎಂಎಸ್ ತಪಾಸಣೆ', 'ಬಿಎಲ್‌ಡಿಸಿ ಮೋಟಾರ್ ರಿಪೇರಿ', 'ಸರ್ಕ್ಯೂಟ್ ಟ್ರೇಸಿಂಗ್ ಮತ್ತು ಮಲ್ಟಿಮೀಟರ್', 'ವರ್ಕ್‌ಶಾಪ್ ನಿರ್ವಹಣೆ']
    }
  },
  {
    id: 'skill-exam-coaching-free',
    title: {
      en: 'Chief Minister Free Competitive Exam Coaching Scheme (UPSC/KPSC/Banking)',
      kn: 'ಮುಖ್ಯಮಂತ್ರಿಗಳ ಉಚಿತ ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷಾ ತರಬೇತಿ (ಯುಪಿಎಸ್‌ಸಿ / ಕೆಪಿಎಸ್‌ಸಿ)'
    },
    category: 'exam_coaching',
    provider: {
      en: 'Social Welfare & Backward Classes Departments, Karnataka',
      kn: 'ಸಮಾಜ ಕಲ್ಯಾಣ & ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಕಲ್ಯಾಣ ಇಲಾಖೆ, ಕರ್ನಾಟಕ'
    },
    duration: { en: '6 to 9 Months (Full-time classroom in Bengaluru / Dharwad)', kn: '೬ ರಿಂದ ೯ ತಿಂಗಳು (ಬೆಂಗಳೂರು/ಧಾರವಾಡದಲ್ಲಿ ತರಬೇತಿ)' },
    eligibility: { en: 'Degree Graduates from SC, ST, OBC, Minority, or EWS categories with state domicile', kn: 'ಪದವೀಧರರು (ಎಸ್‌ಸಿ, ಎಸ್‌ಟಿ, ಹಿಂದುಳಿದ ವರ್ಗ, ಅಲ್ಪಸಂಖ್ಯಾತರು)' },
    stipendOrCost: { en: '100% Free Coaching + ₹5,000 to ₹10,000 monthly living stipend + Study Library', kn: 'ಸಂಪೂರ್ಣ ಉಚಿತ ಕೋಚಿಂಗ್ + ಮಾಸಿಕ ₹5,000 ರಿಂದ ₹10,000 ಊಟ-ವಸತಿ ಭತ್ಯೆ' },
    certification: { en: 'Government Exam Preparedness Endorsement', kn: 'ಸರ್ಕಾರಿ ಪರೀಕ್ಷಾ ಸಿದ್ಧತಾ ಕೋರ್ಸ್' },
    jobLinkage: { en: 'IAS, KAS, Police Sub-Inspector (PSI), Banking PO, FDA/SDA examinations', kn: 'ಐಎಎಸ್, ಕೆಎಎಸ್, ಪಿಎಸ್‌ಐ, ಬ್ಯಾಂಕಿಂಗ್ ಮತ್ತು ಎಫ್‌ಡಿಎ ಪರೀಕ್ಷೆಗಳಿಗೆ ನೇರ ಸಿದ್ಧತೆ' },
    officialLink: 'https://sw.kar.nic.in/',
    description: {
      en: 'State-sponsored intensive coaching through top private empaneled institutes in Bengaluru for UPSC, KPSC Gazetted Probationers, Banking, and SSC CGL examinations.',
      kn: 'ಬೆಂಗಳೂರಿನ ಪ್ರತಿಷ್ಠಿತ ಕೋಚಿಂಗ್ ಸೆಂಟರ್‌ಗಳಲ್ಲಿ ಯುಪಿಎಸ್‌ಸಿ, ಕೆಪಿಎಸ್‌ಸಿ, ಪಿಎಸ್‌ಐ ಮತ್ತು ಬ್ಯಾಂಕಿಂಗ್ ಪರೀಕ್ಷೆಗಳಿಗೆ ಸರ್ಕಾರವೇ ಶುಲ್ಕ ಭರಿಸಿ ತರಬೇತಿ ಕೊಡಿಸುತ್ತದೆ.'
    },
    syllabusHighlights: {
      en: ['Indian Polity, Economy & Karnataka History', 'Quantitative Aptitude & Logical Reasoning', 'English & Kannada Essay Writing', 'Weekly Mock Test Series with Mentorship'],
      kn: ['ಭಾರತದ ಸಂವಿಧಾನ, ಆರ್ಥಿಕತೆ ಮತ್ತು ಕರ್ನಾಟಕ ಇತಿಹಾಸ', 'ಮೆಂಟಲ್ ಎಬಿಲಿಟಿ ಮತ್ತು ಗಣಿತ', 'ಪ್ರಬಂಧ ರಚನೆ ಮತ್ತು ಸಂದರ್ಶನ ಸಿದ್ಧತೆ', 'ಪ್ರತಿ ವಾರ ಅಣಕು ಪರೀಕ್ಷೆಗಳು']
    }
  },
  {
    id: 'skill-naps-apprenticeship',
    title: {
      en: 'National Apprenticeship Promotion Scheme (NAPS)',
      kn: 'ರಾಷ್ಟ್ರೀಯ ಅಪ್ರೆಂಟಿಸ್‌ಶಿಪ್ ಪ್ರೋತ್ಸಾಹ ಯೋಜನೆ (NAPS)'
    },
    category: 'rural_youth',
    provider: {
      en: 'Ministry of Skill Development and Entrepreneurship (MSDE) & Karnataka Industries',
      kn: 'ಕೌಶಲ್ಯಾಭಿವೃದ್ಧಿ ಸಚಿವಾಲಯ ಮತ್ತು ಕರ್ನಾಟಕ ಕೈಗಾರಿಕೆಗಳು'
    },
    duration: { en: '1 Year On-the-Job Industrial Training', kn: '೧ ವರ್ಷ ಕಾರ್ಖಾನೆಗಳಲ್ಲಿ ನೈಜ ತರಬೇತಿ' },
    eligibility: { en: 'ITI / Diploma / Non-Technical Graduates (BSc, BCom, BA) aged 18–35', kn: 'ಐಟಿಐ, ಡಿಪ್ಲೋಮಾ ಅಥವಾ ಪದವೀಧರರು' },
    stipendOrCost: { en: 'Monthly Stipend: ₹8,000 to ₹14,000 (Govt reimburses up to ₹1,500/month)', kn: 'ತಿಂಗಳಿಗೆ ₹8,000 ರಿಂದ ₹14,000 ನೇರ ಬ್ಯಾಂಕ್ ಶಿಷ್ಯವೇತನ' },
    certification: { en: 'National Apprenticeship Certificate (NAC)', kn: 'ರಾಷ್ಟ್ರೀಯ ಅಪ್ರೆಂಟಿಸ್ ಪ್ರಮಾಣಪತ್ರ (NAC)' },
    jobLinkage: { en: '80%+ absorption into permanent roles in manufacturing and service firms', kn: 'ತರಬೇತಿ ಮುಗಿದ ತಕ್ಷಣ ಅದೇ ಕಂಪನಿಯಲ್ಲಿ ಕಾಯಂ ಉದ್ಯೋಗ ಅವಕಾಶ' },
    officialLink: 'https://www.apprenticeshipindia.gov.in/',
    description: {
      en: 'Combines direct shopfloor work experience with guaranteed monthly stipend transfer directly into the candidate’s bank account, transforming theoretical education into industry-ready competency.',
      kn: 'ಕಾರ್ಖಾನೆಗಳಲ್ಲಿ ಪ್ರಾಯೋಗಿಕ ಕೆಲಸದ ಅನುಭವದೊಂದಿಗೆ ಪ್ರತಿ ತಿಂಗಳು ಖಾತೆಗೆ ನೇರ ಶಿಷ್ಯವೇತನ ಪಡೆಯುವ ಮಹತ್ವದ ಕೈಗಾರಿಕಾ ತರಬೇತಿ.'
    },
    syllabusHighlights: {
      en: ['Real Assembly Line Operations', 'Industrial Safety & Quality Auditing', 'CNC Machine Workflows', 'Direct Benefit Transfer (DBT) Stipend Disbursal'],
      kn: ['ಕಾರ್ಖಾನೆಗಳ ಪ್ರೊಡಕ್ಷನ್ ಲೈನ್ ಕೆಲಸ', 'ಕೈಗಾರಿಕಾ ಸುರಕ್ಷತೆ ಮತ್ತು ಗುಣಮಟ್ಟ ಪರಿಶೀಲನೆ', 'ಸಿಎನ್‌ಸಿ ಯಂತ್ರಗಳ ಕಾರ್ಯಾಚರಣೆ', 'ನೇರ ನಗದು ಶಿಷ್ಯವೇತನ ಜಮೆ']
    }
  },
  {
    id: 'skill-plumbing-sanitary',
    title: {
      en: 'Plumbing & Sanitary Systems Technician (Jal Jeevan Mission)',
      kn: 'ಪ್ಲಂಬಿಂಗ್ ಮತ್ತು ನೈರ್ಮಲ್ಯ ತಂತ್ರಜ್ಞ ತರಬೇತಿ (ಜಲ ಜೀವನ್ ಮಿಷನ್)'
    },
    category: 'trade_craft',
    provider: {
      en: 'Indian Plumbing Skills Council (IPSC) & Rural Drinking Water Department',
      kn: 'ಗ್ರಾಮೀಣ ಕುಡಿಯುವ ನೀರು ಮತ್ತು ನೈರ್ಮಲ್ಯ ಇಲಾಖೆ'
    },
    duration: { en: '45 Days Practical Workshop', kn: '೪೫ ದಿನಗಳ ಪ್ರಾಯೋಗಿಕ ಕಾರ್ಯಾಗಾರ' },
    eligibility: { en: '8th or 10th Standard Pass (Age 18–40)', kn: '೮ ಅಥವಾ ೧೦ನೇ ತರಗತಿ (೧೮-೪೦ ವರ್ಷ)' },
    stipendOrCost: { en: 'Free Training + Tool Kit with Pipe Wrenches & Sealants given post-course', kn: 'ಉಚಿತ ತರಬೇತಿ + ಉಚಿತ ಪ್ಲಂಬಿಂಗ್ ಟೂಲ್ ಕಿಟ್' },
    certification: { en: 'IPSC Certified Plumber Card (Skill India QR)', kn: 'ಕೌಶಲ್ಯ ಭಾರತ ಕ್ಯೂಆರ್ ಪ್ರಮಾಣಪತ್ರ' },
    jobLinkage: { en: 'High urban demand in Bengaluru apartments, Gram Panchayat water supply roles', kn: 'ಅಪಾರ್ಟ್‌ಮೆಂಟ್‌ಗಳು ಮತ್ತು ಗ್ರಾಮ ಪಂಚಾಯತ್ ನೀರು ಸರಬರಾಜು ವಿಭಾಗದಲ್ಲಿ ಉದ್ಯೋಗ' },
    officialLink: 'https://kaushalkar.karnataka.gov.in/',
    description: {
      en: 'Modern CPVC, UPVC pipe jointing, overhead tank ball valves, bathroom sanitary fittings, booster pumps installation, water filter servicing, and leak troubleshooting.',
      kn: 'ಆಧುನಿಕ ಪೈಪ್ ಫಿಟ್ಟಿಂಗ್, ನೀರಿನ ಟ್ಯಾಂಕ್ ಕನೆಕ್ಷನ್, ವಾಟರ್ ಪಂಪ್ ರಿಪೇರಿ ಮತ್ತು ಮನೆಗಳ ನೈರ್ಮಲ್ಯ ಸಾಧನಗಳ ಅಳವಡಿಕೆ.'
    },
    syllabusHighlights: {
      en: ['CPVC & GI Pipe Fitting & Threading', 'Sanitary Fixtures (Washbasins, Cisterns, Taps)', 'Motor Pump Installation & Testing', 'Underground Drainage Pipe Alignment'],
      kn: ['ಪೈಪ್ ಫಿಟ್ಟಿಂಗ್ ಮತ್ತು ಥ್ರೆಡಿಂಗ್', 'ಸ್ಯಾನಿಟರಿ ಸಾಮಗ್ರಿಗಳ ಜೋಡಣೆ', 'ಮೋಟಾರ್ ಪಂಪ್ ಅಳವಡಿಕೆ', 'ಒಳಚರಂಡಿ ಪೈಪ್ ಲೈನ್ ನಿರ್ವಹಣೆ']
    }
  },
  {
    id: 'skill-beauty-wellness',
    title: {
      en: 'Women-Only Beauty & Wellness Cosmetologist (RSETI)',
      kn: 'ಮಹಿಳೆಯರಿಗಾಗಿ ಬ್ಯೂಟಿಷಿಯನ್ ಮತ್ತು ಕೇಶವಿನ್ಯಾಸ ತರಬೇತಿ'
    },
    category: 'women_exclusive',
    provider: {
      en: 'RSETI / Kaushalya Karnataka Women Wing',
      kn: 'ರುಡ್‌ಸೆಟ್ / ಕೌಶಲ್ಯ ಕರ್ನಾಟಕ ಮಹಿಳಾ ವಿಭಾಗ'
    },
    duration: { en: '30 Days Residential', kn: '೩೦ ದಿನಗಳು (ವಸತಿ ಸಹಿತ)' },
    eligibility: { en: 'Women aged 18 to 40 (Minimum 8th pass)', kn: '೧೮ ರಿಂದ ೪೦ ವರ್ಷದ ಮಹಿಳೆಯರು (೮ನೇ ತರಗತಿ)' },
    stipendOrCost: { en: '100% Free with consumables and free board', kn: 'ಉಚಿತ ತರಬೇತಿ, ಉಚಿತ ಊಟ-ವಸತಿ' },
    certification: { en: 'BWSSC Assistant Beauty Therapist Certificate', kn: 'ಅಧಿಕೃತ ಬ್ಯೂಟಿ ಥೆರಪಿಸ್ಟ್ ಪ್ರಮಾಣಪತ್ರ' },
    jobLinkage: { en: 'Beauty parlours, salon chains, home-service self-employment with Mudra loan', kn: 'ಬ್ಯೂಟಿ ಪಾರ್ಲರ್ ಆರಂಭಿಸಲು ಅಥವಾ ಕೆಲಸಕ್ಕೆ ಸೇರಲು ಸೂಕ್ತ' },
    officialLink: 'https://rudsetitraining.org/',
    description: {
      en: 'Skin treatment, bridal makeup, hair styling, threading, facial care, hygiene practices, and client appointment management for self-reliant female entrepreneurs.',
      kn: 'ಸ್ಕಿನ್ ಕೇರ್, ಬ್ರೈಡಲ್ ಮೇಕಪ್, ಹೇರ್ ಸ್ಟೈಲ್, ಫೇಶಿಯಲ್ ಮತ್ತು ಸ್ವಂತ ಪಾರ್ಲರ್ ಆರಂಭಿಸುವ ಬಗ್ಗೆ ಸಮಗ್ರ ಪ್ರಾಯೋಗಿಕ ಮಾಹಿತಿ.'
    },
    syllabusHighlights: {
      en: ['Skin Care Treatments & Facials', 'Bridal & Traditional Makeup', 'Sterilization & Hygiene Protocols', 'Home Salon Business Planning'],
      kn: ['ಫೇಶಿಯಲ್ ಮತ್ತು ತ್ವಚೆ ರಕ್ಷಣೆ', 'ಬ್ರೈಡಲ್ ಮೇಕಪ್ ಕಲೆ', 'ನೈರ್ಮಲ್ಯ ಮತ್ತು ಸಾಧನಗಳ ಸ್ವಚ್ಛತೆ', 'ಸ್ವಂತ ಪಾರ್ಲರ್ ವ್ಯವಹಾರ ಯೋಜನೆ']
    }
  },
  {
    id: 'skill-heavy-vehicle-driver',
    title: {
      en: 'Commercial Driver & Heavy Vehicle Transport Training (KSRTC)',
      kn: 'ವಾಣಿಜ್ಯ ವಾಹನ & ಹೆವಿ ವೆಹಿಕಲ್ ಚಾಲನಾ ತರಬೇತಿ (ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ)'
    },
    category: 'trade_craft',
    provider: {
      en: 'KSRTC Heavy Vehicle Driving Training Institute & Transport Dept',
      kn: 'ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಹೆವಿ ವೆಹಿಕಲ್ ಡ್ರೈವಿಂಗ್ ಇನ್‌ಸ್ಟಿಟ್ಯೂಟ್'
    },
    duration: { en: '45 Days Full-Time Practical Ground', kn: '೪೫ ದಿನಗಳು (ಪ್ರಾಯೋಗಿಕ ಟ್ರ್ಯಾಕ್)' },
    eligibility: { en: 'Minimum 20 Years, LMV license holder for 1+ year, 8th pass', kn: 'ಕನಿಷ್ಠ ೨೦ ವರ್ಷ, ಲಘು ವಾಹನ ಲೈಸೆನ್ಸ್ ಹೊಂದಿರಬೇಕು' },
    stipendOrCost: { en: 'Govt sponsored for SC/ST and OBC youth; nominal fee for general', kn: 'ಹಿಂದುಳಿದ ವರ್ಗ ಮತ್ತು ಪರಿಶಿಷ್ಟರಿಗೆ ಉಚಿತ' },
    certification: { en: 'Commercial Transport Driving Badge & HMV License Endorsement', kn: 'ಹೆವಿ ಡ್ರೈವಿಂಗ್ ಬ್ಯಾಡ್ಜ್ & ಲೈಸೆನ್ಸ್' },
    jobLinkage: { en: 'BMTC/KSRTC driver recruitment eligibility, logistics and tanker companies', kn: 'ಬಿಎಂಟಿಸಿ, ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಮತ್ತು ಸರಕು ಸಾಗಣೆ ಲಾರಿ ಚಾಲಕರಾಗಿ ಕೆಲಸ' },
    officialLink: 'https://transport.karnataka.gov.in/',
    description: {
      en: 'Heavy vehicle manoeuvring, highway safety, night driving rules, basic engine troubleshooting, and defensive driving on government dedicated test tracks.',
      kn: 'ಬಸ್ಸು, ಲಾರಿ ಚಾಲನೆ, ರಾತ್ರಿ ಪ್ರಯಾಣ ನಿಯಮಗಳು, ರಸ್ತೆ ಸುರಕ್ಷತೆ ಮತ್ತು ಇಂಜಿನ್ ಸಣ್ಣಪುಟ್ಟ ರಿಪೇರಿಯ ನೈಜ ಟ್ರ್ಯಾಕ್ ತರಬೇತಿ.'
    },
    syllabusHighlights: {
      en: ['Eight & H-Track Heavy Vehicle Control', 'Air Brake System Maintenance', 'First Aid & Road Incident Management', 'Fuel Efficiency Driving Habits'],
      kn: ['ಹೆವಿ ವೆಹಿಕಲ್ ಎಂಟು & ಎಚ್ ಟ್ರ್ಯಾಕ್ ಚಾಲನೆ', 'ಏರ್ ಬ್ರೇಕ್ ಸಿಸ್ಟಮ್ ನಿರ್ವಹಣೆ', 'ಪ್ರಥಮ ಚಿಕಿತ್ಸೆ ಮತ್ತು ರಸ್ತೆ ಸುರಕ್ಷತೆ', 'ಮೈಲೇಜ್ ಹೆಚ್ಚಿಸುವ ಚಾಲನಾ ವಿಧಾನ']
    }
  },
  {
    id: 'skill-smartphone-hardware-repair',
    title: {
      en: 'Smartphone & Tablet Hardware Repair Technician',
      kn: 'ಮೊಬೈಲ್ ಫೋನ್ ಮತ್ತು ಸ್ಮಾರ್ಟ್‌ಫೋನ್ ರಿಪೇರಿ ತರಬೇತಿ'
    },
    category: 'self_employment',
    provider: {
      en: 'Electronics Sector Skills Council of India (ESSCI) / CEDOK',
      kn: 'ಕೌಶಲ್ಯ ಕರ್ನಾಟಕ / ಸಿಡಾಕ್ (CEDOK)'
    },
    duration: { en: '45 Days', kn: '೪೫ ದಿನಗಳು' },
    eligibility: { en: '10th / 12th / ITI or school dropouts aged 18–35', kn: '೧೦ನೇ ತರಗತಿ ಅಥವಾ ಶಾಲೆಯಿಂದ ಹೊರಗುಳಿದವರು' },
    stipendOrCost: { en: 'Free under Kaushalya Karnataka scheme', kn: 'ಕೌಶಲ್ಯ ಕರ್ನಾಟಕ ಯೋಜನೆಯಡಿ ಉಚಿತ' },
    certification: { en: 'ESSCI Level 4 Mobile Repair Specialist', kn: 'ಮೊಬೈಲ್ ರಿಪೇರಿ ತಜ್ಞ ಪ್ರಮಾಣಪತ್ರ' },
    jobLinkage: { en: 'Authorized mobile service centres (Samsung, Xiaomi, Apple) or own repair kiosk', kn: 'ಸರ್ವೀಸ್ ಸೆಂಟರ್‌ಗಳಲ್ಲಿ ಕೆಲಸ ಅಥವಾ ಸ್ವಂತ ಮೊಬೈಲ್ ಶಾಪ್' },
    officialLink: 'https://essc-india.org/',
    description: {
      en: 'SMD soldering, display & touch folder replacement, charging port fixes, battery replacement, water damage ultrasonic cleaning, and flashing software recovery.',
      kn: 'ಮೊಬೈಲ್ ಡಿಸ್ಪ್ಲೇ ಬದಲಾವಣೆ, ಚಾರ್ಜಿಂಗ್ ಸಾಕೆಟ್ ರಿಪೇರಿ, ಸಾಫ್ಟ್‌ವೇರ್ ಫ್ಲ್ಯಾಶಿಂಗ್ ಮತ್ತು ಮದರ್‌ಬೋರ್ಡ್ ಸರ್ಕ್ಯೂಟ್ ದುರಸ್ತಿ.'
    },
    syllabusHighlights: {
      en: ['SMD Hot Air Gun & Micro Soldering', 'Screen OCA Laminating & Glass Replacement', 'Short Circuit Detection with Multimeter', 'OS Flashing & Firmware Unlock Ethics'],
      kn: ['ಮೈಕ್ರೋ ಸೋಲ್ಡರಿಂಗ್ ಕೌಶಲ್ಯ', 'ಸ್ಕ್ರೀನ್ ಗ್ಲಾಸ್ ಬದಲಾವಣೆ', 'ಮಲ್ಟಿಮೀಟರ್ ಮೂಲಕ ಶಾರ್ಟ್ ಸರ್ಕ್ಯೂಟ್ ಪತ್ತೆ', 'ಸಾಫ್ಟ್‌ವೇರ್ ಇನ್‌ಸ್ಟಾಲೇಶನ್']
    }
  },
  {
    id: 'skill-spoken-english-interview',
    title: {
      en: 'Corporate Employability, Spoken English & Interview Readiness',
      kn: 'ಇಂಗ್ಲಿಷ್ ಸಂವಹನ ಮತ್ತು ಸಂದರ್ಶನ ಸಿದ್ಧತಾ ಕೌಶಲ್ಯ ಕೋರ್ಸ್'
    },
    category: 'digital_it',
    provider: {
      en: 'Karnataka Innovation & Technology Society (KITS) / Yuva Yuga',
      kn: 'ಕರ್ನಾಟಕ ನಾವೀನ್ಯತಾ ಸೊಸೈಟಿ & ಯುವ ಯುಗ'
    },
    duration: { en: '60 Hours (Evening / Weekend batches)', kn: '೬೦ ಗಂಟೆಗಳು (ಸಂಜೆ / ವಾರಾಂತ್ಯದ ತರಗತಿಗಳು)' },
    eligibility: { en: 'College students, diploma holders, graduates looking for first jobs', kn: 'ಕಾಲೇಜು ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಪದವೀಧರರು' },
    stipendOrCost: { en: 'Free of Cost for rural and government college students', kn: 'ಸರ್ಕಾರಿ ಕಾಲೇಜು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸಂಪೂರ್ಣ ಉಚಿತ' },
    certification: { en: 'Govt of Karnataka Certificate of Corporate Readiness', kn: 'ಉದ್ಯೋಗ ಸನ್ನದ್ಧತಾ ಪ್ರಮಾಣಪತ್ರ' },
    jobLinkage: { en: 'Direct participation in district Megajob Melas and IT/ITES campus drives', kn: 'ಜಿಲ್ಲಾ ಮಟ್ಟದ ಬೃಹತ್ ಉದ್ಯೋಗ ಮೇಳಗಳಲ್ಲಿ ನೇರ ಸಂದರ್ಶನ' },
    officialLink: 'https://skill.karnataka.gov.in/',
    description: {
      en: 'Professional email writing, conversational English, resume building with ATS scoring, group discussions, and simulated mock HR interviews.',
      kn: 'ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಆತ್ಮವಿಶ್ವಾಸದಿಂದ ಮಾತನಾಡುವುದು, ರೆಸ್ಯೂಮೆ ತಯಾರಿ, ಗ್ರೂಪ್ ಡಿಸ್ಕಷನ್ ಮತ್ತು ಎಚ್‌ಆರ್ ಸಂದರ್ಶನವನ್ನು ಎದುರಿಸುವ ವಿಧಾನ.'
    },
    syllabusHighlights: {
      en: ['Everyday Corporate Conversation', 'Resume Crafting & LinkedIn Profile Optimization', 'Facing Tough HR Questions', 'Email Etiquette & Professional Conduct'],
      kn: ['ದೈನಂದಿನ ಇಂಗ್ಲಿಷ್ ಸಂಭಾಷಣೆ', 'ಉತ್ತಮ ರೆಸ್ಯೂಮೆ ಮತ್ತು ಲಿಂಕ್ಡ್‌ಇನ್ ಪ್ರೊಫೈಲ್ ರಚನೆ', 'ಸಂದರ್ಶನದ ಕಠಿಣ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರ', 'ವೃತ್ತಿಪರ ನಡವಳಿಕೆ']
    }
  },
  {
    id: 'skill-dropouts-rpl-bridge',
    title: {
      en: 'Vocational Bridge & Recognition of Prior Learning (RPL) for School Dropouts',
      kn: 'ಶಾಲೆಯಿಂದ ಹೊರಗುಳಿದ ಯುವಕರಿಗೆ ಕೌಶಲ್ಯ ಸೇತು ಮತ್ತು ಪ್ರಮಾಣೀಕರಣ'
    },
    category: 'dropouts_bridge',
    provider: {
      en: 'National Institute of Open Schooling (NIOS) & Skill India RPL',
      kn: 'ರಾಷ್ಟ್ರೀಯ ಮುಕ್ತ ಶಾಲೆ (NIOS) ಮತ್ತು ಸ್ಕಿಲ್ ಇಂಡಿಯಾ'
    },
    duration: { en: 'Flexible (1 to 3 Months modular)', kn: 'ಹೊಂದಿಕೊಳ್ಳುವ ಅವಧಿ (೧-೩ ತಿಂಗಳು)' },
    eligibility: { en: 'School dropouts of 8th, 9th, or 10th standard aged 15–30', kn: '೮, ೯ ಅಥವಾ ೧೦ನೇ ತರಗತಿಯಲ್ಲಿ ಶಾಲೆ ಬಿಟ್ಟ ಯುವಕರು' },
    stipendOrCost: { en: 'Free Training + ₹500 RPL Certificate Reward via DBT', kn: 'ಉಚಿತ ತರಬೇತಿ + ₹500 ನೇರ ಪ್ರೋತ್ಸಾಹ ಧನ' },
    certification: { en: 'Govt Recognized 10th Equivalent Vocational Certificate', kn: '೧೦ನೇ ತರಗತಿಗೆ ಸಮಾನಾಂತರ ವೃತ್ತಿ ಪ್ರಮಾಣಪತ್ರ' },
    jobLinkage: { en: 'Entry into formal ITI admission, apprentice roles, security, retail', kn: 'ಐಟಿಐಗೆ ನೇರ ಪ್ರವೇಶ ಅಥವಾ ಸೂಪರ್‌ಮಾರ್ಕೆಟ್, ಸೆಕ್ಯುರಿಟಿ ಕೆಲಸ' },
    officialLink: 'https://www.nios.ac.in/',
    description: {
      en: 'Helps young people who dropped out of formal schooling obtain recognized government trade credentials based on practical skills, opening doors to ITI and stable employment.',
      kn: 'ಶಾಲೆ ಅರ್ಧಕ್ಕೆ ಬಿಟ್ಟವರು ತಮ್ಮ ಕೆಲಸದ ಅನುಭವದ ಆಧಾರದ ಮೇಲೆ ಸರ್ಕಾರಿ ಪ್ರಮಾಣಪತ್ರ ಪಡೆದು ಉತ್ತಮ ಉದ್ಯೋಗ ಅಥವಾ ಐಟಿಐಗೆ ಸೇರಲು ಅವಕಾಶ ನೀಡುತ್ತದೆ.'
    },
    syllabusHighlights: {
      en: ['Skill Gap Assessment', 'Workplace Safety & Digital Literacy', 'Standard Trade Best Practices', 'Basic Financial Literacy & Bank Accounts'],
      kn: ['ಪ್ರಾಯೋಗಿಕ ಕೌಶಲ್ಯ ಪರೀಕ್ಷೆ', 'ಕಾರ್ಯಕ್ಷೇತ್ರದ ಸುರಕ್ಷತೆ', 'ಮೂಲಭೂತ ಡಿಜಿಟಲ್ ಜ್ಞಾನ', 'ಬ್ಯಾಂಕಿಂಗ್ ವ್ಯವಹಾರ']
    }
  },
  {
    id: 'skill-cedok-entrepreneurship',
    title: {
      en: 'CEDOK Self-Employment & Micro-Enterprise Entrepreneurship Program',
      kn: 'ಸಿಡಾಕ್ (CEDOK) ಸ್ವಯಂ ಉದ್ಯೋಗ ಮತ್ತು ಉದ್ಯಮಶೀಲತಾ ತರಬೇತಿ'
    },
    category: 'self_employment',
    provider: {
      en: 'Centre for Entrepreneurship Development of Karnataka (CEDOK)',
      kn: 'ಕರ್ನಾಟಕ ಉದ್ಯಮಶೀಲತಾ ಅಭಿವೃದ್ಧಿ ಕೇಂದ್ರ (ಸಿಡಾಕ್)'
    },
    duration: { en: '15 to 30 Days (Practical business coaching)', kn: '೧೫ ರಿಂದ ೩೦ ದಿನಗಳು (ವ್ಯಾಪಾರ ಮಾರ್ಗದರ್ಶನ)' },
    eligibility: { en: 'Aspiring entrepreneurs, rural youth, women SHG members (18–50 years)', kn: 'ಸ್ವಂತ ವ್ಯಾಪಾರ ಆರಂಭಿಸಲು ಬಯಸುವವರು (೧೮-೫೦ ವರ್ಷ)' },
    stipendOrCost: { en: 'Highly subsidized / 100% free under special state schemes', kn: 'ಸರ್ಕಾರದ ನೆರವಿನೊಂದಿಗೆ ರಿಯಾಯಿತಿ ದರ/ಉಚಿತ' },
    certification: { en: 'Govt of Karnataka Certified EDP Certificate (Mandatory for subsidies)', kn: 'ಸರ್ಕಾರಿ ಮಾನ್ಯತೆ ಪಡೆದ ಇಡಿಪಿ ಪ್ರಮಾಣಪತ್ರ' },
    jobLinkage: { en: 'Direct linkage to PMEGP (35% subsidy) and CMEGP government loans', kn: 'ಪಿಎಂಇಜಿಪಿ (೩೫% ಸಬ್ಸಿಡಿ) ಮತ್ತು ಸಿಎಂಇಜಿಪಿ ಸಾಲಕ್ಕೆ ನೇರ ಲಿಂಕ್' },
    officialLink: 'https://cedok.karnataka.gov.in/',
    description: {
      en: 'Detailed project report (DPR) preparation, GST registration guide, market survey methods, bank loan appraisal secrets, and government capital subsidies for manufacturing and service units.',
      kn: 'ಸ್ವಂತ ಉದ್ಯಮ ಆರಂಭಿಸಲು ಪ್ರಾಜೆಕ್ಟ್ ರಿಪೋರ್ಟ್ ತಯಾರಿ, ಜಿಎಸ್‌ಟಿ ಮಾಹಿತಿ, ಬ್ಯಾಂಕ್ ಸಾಲ ಮಂಜೂರಾತಿ ಮತ್ತು ಸರ್ಕಾರದ ಸಬ್ಸಿಡಿ ಪಡೆಯುವ ಸಂಪೂರ್ಣ ತರಬೇತಿ.'
    },
    syllabusHighlights: {
      en: ['Project Report (DPR) Creation for Bank Loans', 'PMEGP / CMEGP 35% Capital Subsidy Application', 'GST & MSME Udyam Registration', 'Marketing & Vendor Negotiation Tactics'],
      kn: ['ಬ್ಯಾಂಕ್ ಸಾಲಕ್ಕಾಗಿ ಪ್ರಾಜೆಕ್ಟ್ ರಿಪೋರ್ಟ್ ಸಿದ್ಧತೆ', '೩೫% ಸರ್ಕಾರಿ ಸಬ್ಸಿಡಿ ಅರ್ಜಿ ಸಲ್ಲಿಕೆ', 'ಜಿಎಸ್‌ಟಿ ಮತ್ತು ಉದ್ಯಮ್ ನೋಂದಣಿ', 'ಮಾರುಕಟ್ಟೆ ವಿಸ್ತರಣಾ ತಂತ್ರಗಳು']
    }
  }
];
