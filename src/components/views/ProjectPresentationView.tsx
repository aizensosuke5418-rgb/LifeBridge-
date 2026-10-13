import React, { useState } from 'react';
import { 
  Award, Users, HeartPulse, Utensils, GraduationCap, Briefcase, 
  Heart, ShieldAlert, Scale, BarChart3, MapPin, ShieldCheck, 
  CheckCircle2, ArrowRight, BookOpen, Clock, AlertTriangle, 
  Sparkles, ExternalLink, HelpCircle, FileText, Printer, 
  ChevronRight, Compass, Copy, Check, MessageSquareQuote, 
  Flame, Lightbulb, Share2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { BridgeLogo } from '../BridgeLogo';

export const ProjectPresentationView: React.FC = () => {
  const { language, setCurrentView } = useApp();
  const isEn = language === 'en';

  const [activeTab, setActiveTab] = useState<'sectors' | 'presentation_deck' | 'team' | 'qa_evaluators'>('sectors');
  const [selectedSector, setSelectedSector] = useState<string>('healthcare');
  const [copiedPitch, setCopiedPitch] = useState<boolean>(false);

  const handleCopyPitch = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPitch(true);
    setTimeout(() => setCopiedPitch(false), 2500);
  };

  const teamMembers = [
    {
      name: 'Raj',
      initials: 'R',
      role: 'Field Research & Ground Verification',
      roleKn: 'ಕ್ಷೇತ್ರ ಸಂಶೋಧನೆ ಮತ್ತು ನೆಲಮಟ್ಟದ ಪರಿಶೀಲನೆ',
      category: 'PU College Member',
      categoryKn: 'ಪಿಯು ಸದಸ್ಯ',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-500/10 border-blue-500/30 text-blue-300',
      description: 'Led field visits to Bengaluru One centers and taluk offices; mapped primary document bottlenecks and ground verification checklists for BPL families.',
      descriptionKn: 'ಬೆಂಗಳೂರು ಒನ್ ಕೇಂದ್ರಗಳು ಮತ್ತು ತಾಲೂಕು ಕಚೇರಿಗಳಲ್ಲಿ ಭೇಟಿ ನೀಡಿ ಬಿಪಿಎಲ್ ಕುಟುಂಬಗಳ ದಾಖಲೆ ಸಮಸ್ಯೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿದರು.'
    },
    {
      name: 'Kushi',
      initials: 'K',
      role: 'User Experience & Student Journey Specialist',
      roleKn: 'ಬಳಕೆದಾರ ಅನುಭವ & ವಿದ್ಯಾರ್ಥಿ ಹಂತಗಳ ವಿನ್ಯಾಸ',
      category: 'PU College Member',
      categoryKn: 'ಪಿಯು ಸದಸ್ಯ',
      color: 'from-teal-400 to-emerald-600',
      bgColor: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
      description: 'Designed the mobile-first questionnaire flow, ensuring zero bureaucratic friction for students and rural citizens navigating complex eligibility rules.',
      descriptionKn: 'ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಗ್ರಾಮೀಣ ನಾಗರಿಕರಿಗೆ ಸುಲಭವಾಗಿ ಅರ್ಥವಾಗುವಂತಹ ಮೊಬೈಲ್-ಸ್ನೇಹಿ ಪ್ರಶ್ನಾವಳಿ ಹರಿವನ್ನು ವಿನ್ಯಾಸಗೊಳಿಸಿದರು.'
    },
    {
      name: 'Saubhiya',
      initials: 'S',
      role: 'Karnataka State Schemes & Kannada Localization',
      roleKn: 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಯೋಜನೆಗಳು & ಕನ್ನಡ ಸ್ಥಳೀಕರಣ',
      category: 'PU College Member',
      categoryKn: 'ಪಿಯು ಸದಸ್ಯ',
      color: 'from-amber-400 to-orange-600',
      bgColor: 'bg-amber-500/10 border-amber-500/30 text-amber-300',
      description: 'Curated Karnataka-specific programs (Anna Bhagya, Vidhava Vethana, SSP, Kaushalya) and translated legal terminology into clear, accessible Kannada.',
      descriptionKn: 'ಅನ್ನಭಾಗ್ಯ, ವಿಧವಾ ವೇತನ, ಎಸ್‌ಎಸ್‌ಪಿ ಮುಂತಾದ ಕರ್ನಾಟಕ ಯೋಜನೆಗಳನ್ನು ಸಂಶೋಧಿಸಿ ಸರಳ ಕನ್ನಡಕ್ಕೆ ಭಾಷಾಂತರಿಸಿದರು.'
    },
    {
      name: 'Arfa Jasmine',
      initials: 'AJ',
      role: 'Civic Architecture & Public Accountability Watchdog',
      roleKn: 'ನಾಗರಿಕ ವಾಸ್ತುಶಿಲ್ಪ & ಸಾರ್ವಜನಿಕ ಹಣಕಾಸು ವಿಶ್ಲೇಷಣೆ',
      category: 'University Member',
      categoryKn: 'ವಿಶ್ವವಿದ್ಯಾಲಯ ಸದಸ್ಯೆ',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-500/10 border-purple-500/30 text-purple-300',
      description: 'Architected cross-sector taxonomy, CAG audit data integration, unspent welfare budgets analysis, and the citizen Right to Information (RTI) toolkit.',
      descriptionKn: 'ವಿವಿಧ ಇಲಾಖೆಗಳ ಸಮಗ್ರ ವಿಂಗಡಣೆ, ಸಿಎಜಿ ಆಡಿಟ್ ವರದಿಗಳು, ಬಳಕೆಯಾಗದ ಬಜೆಟ್ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಆರ್‌ಟಿಐ ಟೂಲ್‌ಕಿಟ್ ನಿರ್ಮಿಸಿದರು.'
    },
    {
      name: 'Akshaya',
      initials: 'A',
      role: 'Systems Logic, Privacy Constitution & Emergency Protocols',
      roleKn: 'ಸಿಸ್ಟಮ್ ಲಾಜಿಕ್, ಗೌಪ್ಯತೆ ಸಂವಿಧಾನ & ತುರ್ತು ಪ್ರೋಟೋಕಾಲ್',
      category: 'University Member',
      categoryKn: 'ವಿಶ್ವವಿದ್ಯಾಲಯ ಸದಸ್ಯೆ',
      color: 'from-cyan-400 to-blue-600',
      bgColor: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300',
      description: 'Engineered client-side zero-tracking matching rules, Jan Aushadhi geo-directory, 1930 Cyber Fraud golden-hour protocols, and comparison logic.',
      descriptionKn: 'ಕ್ಲೈಂಟ್-ಸೈಡ್ ಗೌಪ್ಯತೆ ನಿಯಮಗಳು, ಜನೌಷಧಿ ಜಿಯೋ-ಡೈರೆಕ್ಟರಿ, ೧೯೩೦ ಸೈಬರ್ ವಂಚನೆ ಪ್ರೋಟೋಕಾಲ್ ಮತ್ತು ಯೋಜನೆ ಹೋಲಿಕೆ ವ್ಯವಸ್ಥೆಯನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸಿದರು.'
    }
  ];

  const sectorGuides = [
    {
      id: 'healthcare',
      titleEn: '1. Healthcare & Affordable Medicine',
      titleKn: '೧. ಆರೋಗ್ಯ ಮತ್ತು ಕೈಗೆಟುಕುವ ಔಷಧ',
      icon: HeartPulse,
      badgeColor: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
      summary: 'Cashless hospital treatment up to ₹5 Lakhs, Jan Aushadhi generic medicines at 50-90% discount, and Bengaluru government referral hospital mapping.',
      summaryKn: '₹೫ ಲಕ್ಷದವರೆಗೆ ನಗದು ರಹಿತ ಚಿಕಿತ್ಸೆ, ಜನೌಷಧಿ ಕೇಂದ್ರಗಳಲ್ಲಿ ೫೦-೯೦% ರಿಯಾಯಿತಿ ಔಷಧಗಳು ಮತ್ತು ಬೆಂಗಳೂರಿನ ಪ್ರಮುಖ ಆಸ್ಪತ್ರೆಗಳ ವಿವರ.',
      problem: 'High out-of-pocket medical expenditure pushes 55+ million Indians into poverty each year. Poor citizens do not know which hospitals accept BPL cards, and branded medicines are sold at 10x markups.',
      schemesCovered: [
        'Ayushman Bharat - PM-JAY & Arogya Karnataka (₹5L/year cashless for BPL families, 30% co-pay up to ₹1.5L for APL)',
        'Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP) - 1,800+ generic medicines & surgicals at 50-90% discounts',
        'National Health Mission (NHM) Maternal & Child Health (Janani Shishu Suraksha Karyakram - 100% free delivery)',
        'Free Dialysis & Chemotherapy programs in Karnataka District Hospitals'
      ],
      bengaluruGroundReality: 'Victoria Hospital (K.R. Market), Bowring & Lady Curzon Hospital (Shivajinagar), K.C. General Hospital (Malleshwaram), and Vanivilas Hospital provide tertiary care. PMBJP counters are active inside Victoria and Bowring campuses, providing affordable insulin, cardiac drugs, and antibiotics.',
      keyFeaturesInApp: [
        'Direct eligibility rules explaining the difference between BPL (100% free) and APL (subsidized) treatment',
        'Interactive OpenStreetMap locator pinpointing Bengaluru Jan Aushadhi generic medicine stores',
        'Step-by-step guidance on obtaining government hospital OPD registration and referral slips'
      ],
      evaluatorTalkingPoints: [
        'Explaining how LifeBridge eliminates middleman charges at hospital help desks by giving citizens direct portal rules',
        'Showing how the Jan Aushadhi map directly tackles out-of-pocket pharmacy costs for chronic conditions',
        'Highlighting that zero personal medical data is stored on external servers'
      ]
    },
    {
      id: 'food_ration',
      titleEn: '2. Food Security & Ration Distribution',
      titleKn: '೨. ಆಹಾರ ಭದ್ರತೆ ಮತ್ತು ಪಡಿತರ ಸೇವೆಗಳು',
      icon: Utensils,
      badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      summary: 'Antyodaya Anna Yojana (35 kg grains), Karnataka Anna Bhagya 5 kg rice + DBT cash transfer, Fair Price Shops, and Bengaluru Indira Canteens.',
      summaryKn: 'ಅಂತ್ಯೋದಯ ೩೫ ಕೆಜಿ ಧಾನ್ಯ, ಕರ್ನಾಟಕ ಅನ್ನಭಾಗ್ಯ ೫ ಕೆಜಿ ಅಕ್ಕಿ + ನಗದು ಡಿಬಿಟಿ ಮತ್ತು ಬೆಂಗಳೂರಿನ ಇಂದಿರಾ ಕ್ಯಾಂಟೀನ್‌ಗಳು.',
      problem: 'Citizens are confused about why they receive cash instead of grain for part of their Anna Bhagya entitlement, face unauthorized cuts from Fair Price Shops, and lack access to affordable hot meals.',
      schemesCovered: [
        'National Food Security Act (NFSA) - Priority Household (PHH/BPL) & Antyodaya Anna Yojana (AAY)',
        'Karnataka Anna Bhagya - 5 kg free foodgrains per member + ₹170/person/month DBT cash transfer in lieu of additional 5 kg',
        'PM Garib Kalyan Anna Yojana (PMGKAY) - Extended central grain entitlement',
        'Bengaluru Indira Canteen Network - Fresh cooked meals at ₹5 (breakfast) and ₹10 (lunch/dinner)'
      ],
      bengaluruGroundReality: 'Bengaluru has over 2,000 Fair Price Shops and nearly 180 Indira Canteens located near bus stands, railway terminals, and hospitals (Majestic, KR Market, Yeshwanthpur). DBT cash transfers are linked to the female head of the family’s Aadhaar-seeded bank account.',
      keyFeaturesInApp: [
        'Ration Calculator breaking down monthly entitlements per family member (grain + DBT cash)',
        'Ahara Karnataka portal link to check RC status, Fair Price Shop allotment, and biometric e-KYC status',
        'Direct listing and map pins for Bengaluru Indira Canteens for working-class laborers and students'
      ],
      evaluatorTalkingPoints: [
        'Clarifies Karnataka’s hybrid food security model (5 kg grain + ₹170 direct bank transfer per person)',
        'Educates citizens on their legal entitlements under the NFSA so shop owners cannot shortchange them',
        'Provides emergency low-cost meal locations (Indira Canteens) across all Bengaluru zones'
      ]
    },
    {
      id: 'education',
      titleEn: '3. Education & Scholarships',
      titleKn: '೩. ಶಿಕ್ಷಣ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿವೇತನ',
      icon: GraduationCap,
      badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
      summary: 'State Scholarship Portal (SSP Karnataka), National Scholarship Portal (NSP), fee concessions, free hostel admissions, and Vidyasiri stipend.',
      summaryKn: 'ಕರ್ನಾಟಕ ಎಸ್‌ಎಸ್‌ಪಿ ಪೋರ್ಟಲ್, ರಾಷ್ಟ್ರೀಯ ವಿದ್ಯಾರ್ಥಿವೇತನ, ಶುಲ್ಕ ವಿನಾಯಿತಿ, ಉಚಿತ ವಸತಿ ನಿಲಯ ಮತ್ತು ವಿದ್ಯಾಸಿರಿ ಸಹಾಯಧನ.',
      problem: 'Deserving students miss out on tens of thousands of rupees in scholarship funding because of missed deadlines, lack of SATS IDs, unseeded bank accounts, and bureaucratic rejection of caste/income certificates.',
      schemesCovered: [
        'SSP Post-Matric & Pre-Matric Scholarship (Department of Social Welfare, Tribal Welfare, Backward Classes, Minority Welfare)',
        'Vidyasiri (Food & Accommodation Scheme) - ₹1,500/month for students in areas without hostel vacancies',
        'National Scholarship Portal (NSP) Central Schemes for Merit-cum-Means & Single Girl Child',
        'Free Government Hostels (BCM & Social Welfare Department hostels across Karnataka)'
      ],
      bengaluruGroundReality: 'College students across Bangalore University, VTU, and PU colleges must submit SATS numbers, College Registration IDs, and RD numbers from Nadakacheri. Aadhaar-NPCI bank mapping is the #1 reason for failed disbursements.',
      keyFeaturesInApp: [
        'Step-by-step SSP application flowchart: SATS ID verification, e-Attestation, and bank account NPCI seeding guide',
        'Scholarship comparison tool highlighting income ceilings (₹1 Lakh for OBC, ₹2.5 Lakhs for SC/ST)',
        'Checklist of required documentation before entering cyber cafes to avoid multiple visits'
      ],
      evaluatorTalkingPoints: [
        'Demonstrates our student-first design: reducing dropout rates caused by financial barriers',
        'Shows direct links to e-Attestation portal so students do not need to pay cyber cafe agents ₹200-₹500 per form',
        'Integrates hostel facility applications with academic scholarships'
      ]
    },
    {
      id: 'skill_training',
      titleEn: '4. Skill Training & Vocational Courses',
      titleKn: '೪. ಕೌಶಲ್ಯ ತರಬೇತಿ ಮತ್ತು ವೃತ್ತಿಪರ ಕೋರ್ಸ್‌ಗಳು',
      icon: Briefcase,
      badgeColor: 'text-teal-400 bg-teal-500/10 border-teal-500/30',
      summary: 'Free government skill training, Government ITI & Polytechnic admissions, PMKVY 4.0, women-exclusive trades, and competitive exam coaching.',
      summaryKn: 'ಉಚಿತ ಸರ್ಕಾರಿ ಕೌಶಲ್ಯ ತರಬೇತಿ, ಐಟಿಐ ಮತ್ತು ಪಾಲಿಟೆಕ್ನಿಕ್ ಪ್ರವೇಶ, ಪಿಎಂಕೆವಿವೈ ೪.೦, ಮಹಿಳಾ ವೃತ್ತಿಪರ ತರಬೇತಿ ಮತ್ತು ಉಚಿತ ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷೆ ತರಬೇತಿ.',
      problem: 'Millions of school dropouts and unemployed youth cannot afford high fees for private trade schools or coaching centers for government exams (UPSC, KPSC, Banking, SSC).',
      schemesCovered: [
        'Pradhan Mantri Kaushal Vikas Yojana (PMKVY 4.0) - Short-term training & Recognition of Prior Learning (RPL)',
        'Government ITI (Industrial Training Institutes) - Electrician, Fitter, Welder, Machinist, Draughtsman',
        'Kaushalya Karnataka (CMKKKY) - State-sponsored technical certifications with placement assistance',
        'Free Pre-Exam Coaching (Social Welfare Dept) for UPSC, KPSC, Banking, and Police Sub-Inspector exams'
      ],
      bengaluruGroundReality: 'Bengaluru has major government ITIs in Hosur Road, Peenya, and Dairy Circle. The electronics, EV mechanic, and CNC machining sectors in Peenya and Bommasandra have immediate job openings for certified technicians.',
      keyFeaturesInApp: [
        'Comprehensive catalog of 15+ trade courses with duration, minimum qualification (8th/10th/12th), and monthly stipends',
        'Dedicated filters for women-only courses (tailoring, beauty, cosmetology) and school dropout pathways (NIOS)',
        'Direct application paths to Kaushalya Karnataka portal and Apprenticeship (NAPS) opportunities'
      ],
      evaluatorTalkingPoints: [
        'Emphasizes self-reliance (Atmanirbhar) and tangible livelihood creation for non-academic youth',
        'Covers emerging high-demand sectors like Electric Vehicle (EV) maintenance and solar installation',
        'Highlights free competitive exam coaching to level the playing field for underprivileged aspirants'
      ]
    },
    {
      id: 'widow_pension',
      titleEn: '5. Widow Pension & Dignity Welfare',
      titleKn: '೫. ವಿಧವಾ ವೇತನ ಮತ್ತು ಸಂರಕ್ಷಣೆ',
      icon: Heart,
      badgeColor: 'text-pink-400 bg-pink-500/10 border-pink-500/30',
      summary: 'Karnataka Vidhava Vethana (₹800/mo), IGNWPS central pension, ₹3 Lakh remarriage grant, child educational aid, and non-payment grievance redressal.',
      summaryKn: 'ಕರ್ನಾಟಕ ವಿಧವಾ ವೇತನ (ತಿಂಗಳಿಗೆ ₹೮೦೦), ಕೇಂದ್ರ ಪಿಂಚಣಿ, ₹೩ ಲಕ್ಷ ಮರುಮದುವೆ ಪ್ರೋತ್ಸಾಹಧನ ಮತ್ತು ವಿಳಂಬ ಪಿಂಚಣಿ ದೂರು ಪರಿಹಾರ.',
      problem: 'Widows face severe social vulnerability, loss of household income, and procedural harassment when applying for pensions. Many are falsely turned away because they have an adult son.',
      schemesCovered: [
        'Karnataka Vidhava Vethana Scheme - ₹800 monthly direct bank transfer',
        'Indira Gandhi National Widow Pension Scheme (IGNWPS) - Central scheme for BPL widows aged 40-79',
        'Karnataka Widow Remarriage Incentive Scheme - One-time grant of ₹3,00,000 to encourage social rehabilitation',
        'Free Legal Aid for Widows via Karnataka State Legal Services Authority (KSLSA)'
      ],
      bengaluruGroundReality: 'Applications are submitted through Bangalore One, Seva Sindhu, or Nadakacheri. Delays often occur due to revenue inspector verification backlogs and joint bank account issues.',
      keyFeaturesInApp: [
        'Demystifies eligibility rules: Explains clearly that having an adult son does not disqualify if family income is below limits',
        'Interactive checklist for death certificate, survivor certificate, and independent single-holder bank account setup',
        'Direct grievance protocol for delayed or withheld pension payments with helpline contacts'
      ],
      evaluatorTalkingPoints: [
        'Demonstrates human compassion in civic tech—protecting one of the most vulnerable demographic groups',
        'Highlights the revolutionary ₹3,00,000 remarriage incentive scheme, which few citizens even know exists',
        'Provides actionable redressal steps when pension payments are arbitrarily delayed'
      ]
    },
    {
      id: 'sc_st_obc_welfare',
      titleEn: '6. SC / ST / OBC Welfare & Social Justice',
      titleKn: '೬. ಎಸ್‌ಸಿ / ಎಸ್‌ಟಿ / ಒಬಿಸಿ ಕಲ್ಯಾಣ & ಸಾಮಾಜಿಕ ನ್ಯಾಯ',
      icon: Scale,
      badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
      summary: 'SSP scholarships, Prabuddha overseas grants, Arivu 2% education loans, Ganga Kalyana borewells, Ambedkar corporation loans, and Caste certificate guides.',
      summaryKn: 'ಎಸ್‌ಎಸ್‌ಪಿ ವಿದ್ಯಾರ್ಥಿವೇತನ, ಪ್ರಬುದ್ಧ ವಿದೇಶಿ ಶಿಕ್ಷಣ, ಅರಿವು ೨% ಸಾಲ, ಗಂಗಾ ಕಲ್ಯಾಣ ಕೊಳವೆಬಾವಿ, ಅಂಬೇಡ್ಕರ್ ನಿಗಮ ಸಾಲಗಳು ಮತ್ತು ಜಾತಿ ಪ್ರಮಾಣಪತ್ರ ಮಾರ್ಗದರ್ಶಿ.',
      problem: 'Marginalized communities are entitled to constitutional safeguards and corporation loans, but intermediaries charge extortionate commissions for caste/income certificates and corporation loan approvals.',
      schemesCovered: [
        'SSP Post-Matric SC/ST 100% Fee Reimbursement & BCM Department Hostels',
        'Arivu Education Loan Scheme - Subsidized professional course loan at 2% interest rate',
        'Ganga Kalyana Scheme - 100% free borewell drilling and pump energization for small/marginal farmers',
        'Prabuddha Scheme - Up to ₹20 Lakhs funding for SC/ST students accepted to top 500 global universities',
        'Atrocity Prevention Legal Aid & Compensation scales under PoA Act 1989'
      ],
      bengaluruGroundReality: 'Caste certificates with RD numbers must be verified through the Nadakacheri system. Corporation loans are disbursed through Dr. B.R. Ambedkar, Karnataka Maharshi Valmiki, and D. Devaraj Urs development corporations in Bangalore.',
      keyFeaturesInApp: [
        'Karnataka Reservation Roster breakdown (SC 17%, ST 7%, Cat-1 4%, 2A 15%, 2B 4%, 3A 4%, 3B 5%)',
        'Step-by-step Nadakacheri guide explaining how to verify RD-number validity and download digital barcoded certificates',
        'Comprehensive guide on PoA Act legal rights, compensation amounts, and District Magistrate responsibilities'
      ],
      evaluatorTalkingPoints: [
        'Transforms complex constitutional reservations into actionable digital guidance for real families',
        'Promotes economic self-reliance through low-interest development loans and agricultural irrigation support',
        'Empowers citizens to bypass agents by obtaining authentic RD-barcoded certificates directly online'
      ]
    },
    {
      id: 'cyber_emergency',
      titleEn: '7. Cybercrime, Police & Emergency Helplines',
      titleKn: '೭. ಸೈಬರ್ ಕ್ರೈಂ, ಪೊಲೀಸ್ & ತುರ್ತು ಸಹಾಯವಾಣಿಗಳು',
      icon: ShieldAlert,
      badgeColor: 'text-red-400 bg-red-500/10 border-red-500/30',
      summary: '1930 Cyber Fraud Helpline (Golden 2-Hour Window to freeze funds), 112 National Emergency, cybercrime.gov.in complaint guide, and Karnataka e-FIR.',
      summaryKn: '೧೯೩೦ ಸೈಬರ್ ವಂಚನೆ ಹೆಲ್ಪ್‌ಲೈನ್ (ಹಣ ಸ್ಥಗಿತಗೊಳಿಸಲು ೨ ಗಂಟೆಯ ಸುವರ್ಣಾವಕಾಶ), ೧೧೨ ತುರ್ತು ಸೇವೆ, ಸೈಬರ್ ದೂರು ಮತ್ತು ಇ-ಎಫ್‌ಐಆರ್.',
      problem: 'Cybercrime in Bengaluru is at an all-time high (UPI scams, digital arrest fraud, OTP phishing). Citizens panic and delay reporting, causing stolen funds to be siphoned out across mules before banks can freeze them.',
      schemesCovered: [
        'Helpline 1930 - National Cybercrime Reporting Portal Citizen Financial Cyber Fraud Reporting System',
        'Helpline 112 - Unified National Emergency Number (combining Police, Fire 101, and Ambulance 108)',
        'Helpline 1091 / 181 - Women in Distress Helpline with round-the-clock police dispatch',
        'Helpline 1098 - Childline 24/7 emergency service for children in need of care and protection'
      ],
      bengaluruGroundReality: 'Bengaluru City Police operates dedicated CEN (Cyber, Economics & Narcotics) police stations across all divisions (East, West, South, North, Whitefield). The 1930 nodal desk directly coordinates with major banks headquartered in Bangalore.',
      keyFeaturesInApp: [
        'The Golden 2-Hour Protocol: Step-by-step instructions on what data to have ready (Transaction UTR, recipient account, SMS timestamp) before dialing 1930',
        'Guide to filing an e-FIR on KSP app for non-violent property theft and lost mobile phones without visiting a police station',
        'Scam awareness library covering digital arrest threats, electricity bill SMS frauds, and fake part-time job schemes'
      ],
      evaluatorTalkingPoints: [
        'Crucial public safety dimension: Explaining the 1930 Golden Hour mechanism that saves citizens’ life savings from online fraud',
        'Demystifies police interactions by teaching citizens how to file digital e-FIRs and avoid police station anxiety',
        'Combines physical 112 emergency response with modern cyber defense'
      ]
    },
    {
      id: 'public_money',
      titleEn: '8. Government Money & Dark Side (Audits & RTI)',
      titleKn: '೮. ಸರ್ಕಾರಿ ಹಣ, ಆಡಿಟ್ & ಸಾರ್ವಜನಿಕ ಉತ್ತರದಾಯಿತ್ವ',
      icon: BarChart3,
      badgeColor: 'text-violet-400 bg-violet-500/10 border-violet-500/30',
      summary: 'Budget allocation vs actual spending tracker, unspent funds watchdog, CAG audit findings on welfare leakages, and Citizen RTI application templates.',
      summaryKn: 'ಬಜೆಟ್ ಹಂಚಿಕೆ vs ನೈಜ ವೆಚ್ಚ, ಬಳಕೆಯಾಗದ ಹಣ, ಸಿಎಜಿ ಆಡಿಟ್ ವರದಿಗಳು ಮತ್ತು ಸಾರ್ವಜನಿಕ ಮಾಹಿತಿ ಹಕ್ಕು (ಆರ್‌ಟಿಐ) ಅರ್ಜಿ ಮಾದರಿ.',
      problem: 'Governments announce thousands of crores in welfare, but huge percentages remain unspent, ghost beneficiaries drain resources, and payments are delayed for months with zero citizen transparency.',
      schemesCovered: [
        'Comptroller and Auditor General of India (CAG) Performance Audits on Karnataka Welfare Departments',
        'Public Financial Management System (PFMS) - Direct Benefit Transfer (DBT) tracking',
        'Right to Information (RTI) Act 2005 - Citizen legal power to demand spending vouchers and project timelines',
        'K-PME & Karnataka Public Procurement Transparency (KTPP) monitoring'
      ],
      bengaluruGroundReality: 'BBMP and Karnataka State departments surrender hundreds of crores in unutilized grants at the end of each fiscal year. RTI applications submitted via rtionline.karnataka.gov.in cost just ₹10 and must be answered in 30 days.',
      keyFeaturesInApp: [
        'Interactive spending dashboard comparing allocated budget vs actual expenditure across major education, healthcare, and welfare programs',
        'Analysis of unspent welfare funds and systemic delay reasons (bureaucratic sanction delays, biometric mismatch)',
        'Ready-to-use RTI draft letter template that citizens can copy, customize, and file to demand accountability'
      ],
      evaluatorTalkingPoints: [
        'Elevates LifeBridge from a simple scheme directory to a mature civic accountability and transparency platform',
        'Educates citizens on democratic oversight: Taxpayers have the right to know how public money is utilized or wasted',
        'Uses authentic CAG audit methodologies to provide objective, non-partisan data'
      ]
    },
    {
      id: 'bengaluru_facilities',
      titleEn: '9. Bengaluru Civic Facility Geo-Locator',
      titleKn: '೯. ಬೆಂಗಳೂರು ಸಾರ್ವಜನಿಕ ಸೌಲಭ್ಯಗಳ ಜಿಯೋ-ನಕ್ಷೆ',
      icon: MapPin,
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      summary: 'Interactive OpenStreetMap mapping of Jan Aushadhi Kendras, Government Hospitals, Indira Canteens, Fair Price Shops, and Bengaluru One counters.',
      summaryKn: 'ಜನೌಷಧಿ ಕೇಂದ್ರಗಳು, ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಗಳು, ಇಂದಿರಾ ಕ್ಯಾಂಟೀನ್‌ಗಳು ಮತ್ತು ಬೆಂಗಳೂರು ಒನ್ ಕೇಂದ್ರಗಳ ಸಂವಾದಾತ್ಮಕ ನಕ್ಷೆ.',
      problem: 'Citizens often discover they qualify for a scheme but have no idea where to physically go in Bengaluru to submit documents, collect free medicines, or buy subsidized food.',
      schemesCovered: [
        'Pradhan Mantri Bhartiya Janaushadhi Kendras across Bengaluru city',
        'Bengaluru Government Referral Hospitals (Victoria, Bowring, KC General, Indira Gandhi Child Hospital, Jayanagar General)',
        'Bengaluru One Citizen Service Counters across BBMP East, West, and South zones',
        'BBMP Indira Canteens in key transport hubs (Majestic, KR Market, Shivajinagar, Yeshwanthpur)'
      ],
      bengaluruGroundReality: 'Bengaluru is a massive urban sprawl. A daily-wage laborer in Peenya or an elderly person in Jayanagar needs to know the exact landmark, bus route accessibility, and phone number of the nearest public facility.',
      keyFeaturesInApp: [
        'Clean OpenStreetMap integration with interactive category filters (Medical, Food, Citizen Services)',
        'Verified addresses, landmark notes, and official operational hours for Bengaluru facilities',
        'Zero API dependency: completely free, privacy-friendly, and functional even on low-bandwidth smartphones'
      ],
      evaluatorTalkingPoints: [
        'Converts digital awareness into physical action by giving citizens exact geographical directions',
        'Specifically focuses on Bengaluru ground infrastructure to ensure high accuracy and real-world utility',
        'Built with zero paid external mapping APIs—ensuring complete sustainability and zero server operating costs'
      ]
    },
    {
      id: 'privacy_wallet',
      titleEn: '10. Zero-Harvesting Privacy Constitution & Support Wallet',
      titleKn: '೧೦. ಶೂನ್ಯ ಮಾಹಿತಿ ಸಂಗ್ರಹಣೆ ಗೌಪ್ಯತೆ & ನೆರವಿನ ವಾಲೆಟ್',
      icon: ShieldCheck,
      badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
      summary: '100% Client-side matching without harvesting Aadhaar, phone numbers, or passwords. Support Wallet saves progress and prints offline dossiers.',
      summaryKn: 'ಆಧಾರ್ ಅಥವಾ ಫೋನ್ ಸಂಖ್ಯೆ ಸಂಗ್ರಹಿಸದೆ ೧೦೦% ಬ್ರೌಸರ್‌ನಲ್ಲಿಯೇ ಅರ್ಹತೆ ಪರೀಕ್ಷೆ. ವಾಲೆಟ್‌ನಲ್ಲಿ ದಾಖಲೆ ಪರಿಶೀಲನೆ ಮತ್ತು ಪ್ರಿಂಟ್ ಸೌಲಭ್ಯ.',
      problem: 'Government and private portals frequently demand mandatory Aadhaar authentication, phone OTPs, and personal trackers, creating security risks and excluding citizens without active digital identities.',
      schemesCovered: [
        'Rule-based client-side eligibility evaluation engine',
        'Browser LocalStorage persistent state for saved schemes and facilities',
        'Offline-capable application progress checklist and printable PDF application kit'
      ],
      bengaluruGroundReality: 'Many vulnerable citizens in Bengaluru (migrants, elderly, widows) do not have their own smartphones or have numbers linked to distant relatives. Mandatory OTP logins prevent them from even checking what benefits exist.',
      keyFeaturesInApp: [
        'Zero data harvesting: No registration, no login, no Aadhaar number, and no server database required',
        'Support Wallet lets users check off physical documents (Caste certificate, income certificate, bank passbook) as they gather them',
        'One-click Printable Application Dossier formatted for offline visits to Bangalore One or taluk offices'
      ],
      evaluatorTalkingPoints: [
        'Solves digital exclusion: Citizens can explore schemes on a shared phone or cyber cafe without leaving private data behind',
        'Privacy by design: We respect user dignity and data protection under the Digital Personal Data Protection (DPDP) Act 2023',
        'Support Wallet bridges the gap between online discovery and offline physical paperwork submission'
      ]
    }
  ];

  const currentSectorData = sectorGuides.find(s => s.id === selectedSector) || sectorGuides[0];

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 space-y-10">
      {/* Top Banner / Hero */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F1E36] via-[#142B4D] to-[#0B1526] border border-blue-900/40 p-6 lg:p-10 shadow-2xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-[#42DCC5] flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#42DCC5]">
                {isEn ? 'Official Project Defense & Master Sector Explainer' : 'ಅಧಿಕೃತ ಪ್ರಾಜೆಕ್ಟ್ ಪ್ರಸ್ತುತಿ ಮತ್ತು ಸಮಗ್ರ ವಿವರಣೆ'}
              </span>
              <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                {isEn ? 'LifeBridge: Project Walkthrough & Sector Guide' : 'ಲೈಫ್‌ಬ್ರಿಡ್ಜ್: ಪ್ರಾಜೆಕ್ಟ್ ಪ್ರಸ್ತುತಿ & ಸಮಗ್ರ ವಿಭಾಗಗಳ ವಿವರಣೆ'}
              </h1>
            </div>
          </div>

          {/* Defense Badge */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium">
            <Award className="w-4 h-4 text-amber-400" />
            <span>{isEn ? 'Ready for Presentation Tomorrow' : 'ನಾಳಿನ ಪ್ರಾಜೆಕ್ಟ್ ಪ್ರಸ್ತುತಿಗೆ ಸಿದ್ಧ'}</span>
          </div>
        </div>

        <p className="text-sm lg:text-base text-slate-300 max-w-4xl leading-relaxed">
          {isEn
            ? 'A complete master briefing designed for Raj, Kushi, Saubhiya, Arfa Jasmine, and Akshaya to effortlessly present, explain, and defend the LifeBridge platform. This section explains the real-world problem, government policies, Bengaluru ground realities, and core technical solutions across every public pillar.'
            : 'ರಾಜ್, ಖುಷಿ, ಸೌಭಿಯಾ, ಅರ್ಫಾ ಜಾಸ್ಮಿನ್ ಮತ್ತು ಅಕ್ಷಯ ಅವರ ನಾಳಿನ ಪ್ರಾಜೆಕ್ಟ್ ಪ್ರಸ್ತುತಿಗೆ ಅನುಕೂಲವಾಗುವಂತೆ ಎಲ್ಲಾ ವಿಭಾಗಗಳ ಸಮಗ್ರ ವಿವರಣೆ, ಸರ್ಕಾರದ ಯೋಜನೆಗಳು ಮತ್ತು ಬೆಂಗಳೂರಿನ ನೆಲಮಟ್ಟದ ವಾಸ್ತವಾಂಶಗಳ ಸಂಪೂರ್ಣ ಮಾರ್ಗದರ್ಶಿ.'}
        </p>

        {/* Team Credits Strip */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-slate-400 font-semibold">{isEn ? 'Research & Engineering Team:' : 'ಸಂಶೋಧನೆ ಮತ್ತು ತಾಂತ್ರಿಕ ತಂಡ:'}</span>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30 font-medium">
                PU Members: Raj (R), Kushi (K), Saubhiya (S)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30 font-medium">
                University Members: Arfa Jasmine (AJ), Akshaya (A)
              </span>
            </div>
          </div>
          <div className="text-slate-400 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#42DCC5]" />
            <span>{isEn ? 'Pilot Geography: Bengaluru & Karnataka' : 'ಪ್ರಮುಖ ಗಮನ: ಬೆಂಗಳೂರು & ಕರ್ನಾಟಕ'}</span>
          </div>
        </div>
      </div>

      {/* Main Tab Controls */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3">
        <button
          onClick={() => setActiveTab('sectors')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'sectors'
              ? 'bg-[#3678F6] text-white shadow-lg shadow-blue-500/20'
              : 'text-slate-300 bg-slate-800/50 hover:bg-slate-800 hover:text-white'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>{isEn ? 'All-Sectors Deep Dive (Food, Health, etc.)' : 'ಎಲ್ಲಾ ವಿಭಾಗಗಳ ಸಮಗ್ರ ವಿವರಣೆ (ಆಹಾರ, ಆರೋಗ್ಯ ಇತ್ಯಾದಿ)'}</span>
        </button>

        <button
          onClick={() => setActiveTab('presentation_deck')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'presentation_deck'
              ? 'bg-[#3678F6] text-white shadow-lg shadow-blue-500/20'
              : 'text-slate-300 bg-slate-800/50 hover:bg-slate-800 hover:text-white'
          }`}
        >
          <MessageSquareQuote className="w-4 h-4" />
          <span>{isEn ? 'Oral Presentation Scripts (30s & 2-Min)' : 'ಮೌಖಿಕ ಪ್ರಸ್ತುತಿ ಸ್ಕ್ರಿಪ್ಟ್ (೩೦ಸೆ & ೨ನಿಮಿಷ)'}</span>
        </button>

        <button
          onClick={() => setActiveTab('team')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'team'
              ? 'bg-[#3678F6] text-white shadow-lg shadow-blue-500/20'
              : 'text-slate-300 bg-slate-800/50 hover:bg-slate-800 hover:text-white'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>{isEn ? 'Team Members & Roles' : 'ತಂಡದ ಸದಸ್ಯರು ಮತ್ತು ಜವಾಬ್ದಾರಿಗಳು'}</span>
        </button>

        <button
          onClick={() => setActiveTab('qa_evaluators')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'qa_evaluators'
              ? 'bg-[#3678F6] text-white shadow-lg shadow-blue-500/20'
              : 'text-slate-300 bg-slate-800/50 hover:bg-slate-800 hover:text-white'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>{isEn ? 'Evaluator Q&A Defense Sheet' : 'ಮೌಲ್ಯಮಾಪಕರ ಪ್ರಶ್ನೆಗಳಿಗೆ ಸಿದ್ಧ ಉತ್ತರಗಳು'}</span>
        </button>
      </div>

      {/* TAB 1: ALL-SECTOR EXPLAINER */}
      {activeTab === 'sectors' && (
        <div className="space-y-8">
          <div className="bg-[#0F1E36] p-4 lg:p-6 rounded-2xl border border-slate-800">
            <h2 className="text-base lg:text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#42DCC5]" />
              <span>{isEn ? 'Select a Sector to Explain:' : 'ವಿವರಿಸಲು ಒಂದು ವಿಭಾಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ:'}</span>
            </h2>
            <p className="text-xs text-slate-300 mb-4">
              {isEn
                ? 'Click on any sector below to view its human problem, government schemes, Bangalore ground reality, and direct evaluator talking points.'
                : 'ಯಾವುದೇ ವಿಭಾಗವನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ ಅದರ ಸಮಸ್ಯೆಗಳು, ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು, ಬೆಂಗಳೂರಿನ ವಾಸ್ತವ ಮತ್ತು ಮೌಲ್ಯಮಾಪಕರಿಗೆ ವಿವರಿಸಬೇಕಾದ ಪ್ರಮುಖ ಅಂಶಗಳನ್ನು ನೋಡಿ.'}
            </p>

            {/* Sector Selector Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {sectorGuides.map((sector) => {
                const Icon = sector.icon;
                const isSelected = selectedSector === sector.id;
                return (
                  <button
                    key={sector.id}
                    onClick={() => setSelectedSector(sector.id)}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#142B4D] border-[#42DCC5] text-white shadow-md'
                        : 'bg-[#0B1526] border-slate-800/80 text-slate-300 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-[#42DCC5]' : 'text-slate-400'}`} />
                    <span className="text-xs font-semibold truncate">
                      {isEn ? sector.titleEn.split('. ')[1] : sector.titleKn.split('. ')[1]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Deep-Dive Card for Selected Sector */}
          <div className="bg-[#0F1E36] rounded-3xl border border-slate-800 p-6 lg:p-8 space-y-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
              <div className="flex items-center gap-3.5">
                <div className={`p-3 rounded-2xl border ${currentSectorData.badgeColor}`}>
                  <currentSectorData.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#42DCC5] uppercase tracking-wider">
                    {isEn ? 'Core Welfare Sector Walkthrough' : 'ಪ್ರಮುಖ ಕಲ್ಯಾಣ ವಿಭಾಗ'}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold text-white">
                    {isEn ? currentSectorData.titleEn : currentSectorData.titleKn}
                  </h3>
                </div>
              </div>

              {/* Quick Jump to Live App Feature */}
              <button
                onClick={() => {
                  if (currentSectorData.id === 'healthcare') setCurrentView('healthcare');
                  else if (currentSectorData.id === 'food_ration') setCurrentView('food_ration');
                  else if (currentSectorData.id === 'education') setCurrentView('education');
                  else if (currentSectorData.id === 'skill_training') setCurrentView('skill_training');
                  else if (currentSectorData.id === 'widow_pension') setCurrentView('widow_pension');
                  else if (currentSectorData.id === 'sc_st_obc_welfare') setCurrentView('sc_st_obc_welfare');
                  else if (currentSectorData.id === 'cyber_emergency') setCurrentView('cyber_police_helplines');
                  else if (currentSectorData.id === 'public_money') setCurrentView('public_money_accountability');
                  else if (currentSectorData.id === 'bengaluru_facilities') setCurrentView('maps');
                  else if (currentSectorData.id === 'privacy_wallet') setCurrentView('wallet');
                }}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 border border-blue-500/30 text-xs font-semibold transition-all cursor-pointer whitespace-nowrap self-start sm:self-auto"
              >
                <span>{isEn ? 'Open Live Module in App' : 'ಆ್ಯಪ್‌ನಲ್ಲಿ ಈ ಮಾಡ್ಯೂಲ್ ನೋಡಿ'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Summary Box */}
            <div className="p-4 rounded-xl bg-[#0B1526] border border-blue-900/30 text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              {isEn ? currentSectorData.summary : currentSectorData.summaryKn}
            </div>

            {/* Grid of Problem, Ground Reality, Features, Evaluator Talking Points */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Problem & Reality */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#0B1526]/80 border border-slate-800 space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span>{isEn ? 'The Real Human Problem (Why We Built This)' : 'ನೆಲಮಟ್ಟದ ನಿಜವಾದ ಸಮಸ್ಯೆ'}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {currentSectorData.problem}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#0B1526]/80 border border-slate-800 space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{isEn ? 'Bengaluru Ground Reality & Infrastructure' : 'ಬೆಂಗಳೂರಿನ ವಾಸ್ತವ ಮತ್ತು ಸೌಲಭ್ಯಗಳು'}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {currentSectorData.bengaluruGroundReality}
                  </p>
                </div>
              </div>

              {/* Schemes Covered & Features */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#0B1526]/80 border border-slate-800 space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#42DCC5] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{isEn ? 'Official Schemes & Policies Covered' : 'ಒಳಗೊಂಡಿರುವ ಅಧಿಕೃತ ಯೋಜನೆಗಳು'}</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {currentSectorData.schemesCovered.map((scheme, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#42DCC5] mt-1.5 shrink-0" />
                        <span>{scheme}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-[#0B1526]/80 border border-slate-800 space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>{isEn ? 'LifeBridge Technical Solutions in This Sector' : 'ಲೈಫ್‌ಬ್ರಿಡ್ಜ್‌ನ ತಾಂತ್ರಿಕ ಪರಿಹಾರಗಳು'}</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {currentSectorData.keyFeaturesInApp.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Golden Box: Evaluator Talking Points for Tomorrow */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-[#0F1E36] border border-blue-500/40 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-300 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>{isEn ? "Speaking Notes: What to Tell Evaluators About This Sector Tomorrow" : "ನಾಳೆ ಮೌಲ್ಯಮಾಪಕರಿಗೆ ಹೇಳಬೇಕಾದ ಪ್ರಮುಖ ಮಾತುಗಳು"}</span>
                </h4>
                <span className="text-[11px] text-slate-400 font-mono">Evaluation Defense</span>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                {currentSectorData.evaluatorTalkingPoints.map((point, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#0B1526] border border-slate-800 text-xs text-slate-200 leading-relaxed space-y-1">
                    <span className="text-[#42DCC5] font-bold font-mono">Point {idx + 1}</span>
                    <p>{point}</p>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: ORAL PRESENTATION SCRIPTS */}
      {activeTab === 'presentation_deck' && (
        <div className="space-y-8">
          {/* 30-Second Elevator Pitch */}
          <div className="p-6 lg:p-8 rounded-3xl bg-[#0F1E36] border border-slate-800 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base lg:text-lg font-bold text-white">
                    {isEn ? '30-Second Opening Elevator Pitch' : '೩೦-ಸೆಕೆಂಡಿನ ಆರಂಭಿಕ ಪಿಚ್'}
                  </h3>
                  <p className="text-xs text-slate-400">{isEn ? 'Use this to start your presentation with high confidence.' : 'ಪ್ರಸ್ತುತಿಯನ್ನು ಆತ್ಮವಿಶ್ವಾಸದಿಂದ ಪ್ರಾರಂಭಿಸಲು ಇದನ್ನು ಬಳಸಿ.'}</p>
                </div>
              </div>
              <button
                onClick={() => handleCopyPitch(
                  "Respected evaluators, every year over ₹50,000 crores in public welfare in India goes unspent or gets siphoned by middlemen simply because ordinary citizens don't know what they are eligible for. We built LifeBridge—an independent, zero-tracking, bilingual platform that connects healthcare, food security, education, vocational skills, widow pensions, and civic budgets directly to citizens in Bengaluru and Karnataka, without asking for Aadhaar numbers or fees. One bridge. A world of possibilities."
                )}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors cursor-pointer"
              >
                {copiedPitch ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedPitch ? (isEn ? 'Copied!' : 'ನಕಲಿಸಲಾಗಿದೆ!') : (isEn ? 'Copy Pitch' : 'ಪಿಚ್ ನಕಲಿಸಿ')}</span>
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-[#0B1526] border border-slate-800 text-sm md:text-base text-slate-100 italic leading-relaxed">
              &quot;Respected evaluators, every year over ₹50,000 crores in public welfare in India goes unspent or gets siphoned by middlemen simply because ordinary citizens don&apos;t know what they are eligible for. We built <strong>LifeBridge</strong>—an independent, zero-tracking, bilingual platform that connects healthcare, food security, education, vocational skills, widow pensions, and civic budgets directly to citizens in Bengaluru and Karnataka, without asking for Aadhaar numbers or fees. One bridge. A world of possibilities.&quot;
            </div>
          </div>

          {/* 2-Minute Full Project Walkthrough */}
          <div className="p-6 lg:p-8 rounded-3xl bg-[#0F1E36] border border-slate-800 space-y-6 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base lg:text-lg font-bold text-white">
                  {isEn ? 'The 2-Minute Structured Project Walkthrough (4 Phases)' : '೨-ನಿಮಿಷದ ಸಂಪೂರ್ಣ ಪ್ರಾಜೆಕ್ಟ್ ವಿವರಣೆ (೪ ಹಂತಗಳು)'}
                </h3>
                <p className="text-xs text-slate-400">{isEn ? 'Follow these 4 phases sequentially when demonstrating your project to the evaluator.' : 'ಮೌಲ್ಯಮಾಪಕರಿಗೆ ಪ್ರಾಜೆಕ್ಟ್ ಪ್ರದರ್ಶಿಸುವಾಗ ಈ ೪ ಹಂತಗಳನ್ನು ಅನುಸರಿಸಿ.'}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Phase 1 */}
              <div className="p-5 rounded-2xl bg-[#0B1526] border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#42DCC5]">Phase 1 (0:00 - 0:30)</span>
                  <span className="text-[11px] text-slate-400">The Problem & Hook</span>
                </div>
                <h4 className="text-sm font-bold text-white">The Administrative Divide</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Explain that government portals in India are heavily fragmented. A student goes to SSP, a patient goes to Ayushman Bharat, a family goes to Ahara, and a widow goes to Nadakacheri. Middlemen charge up to ₹500 per form in cyber cafes. LifeBridge unifies all these into a single digital sanctuary.
                </p>
              </div>

              {/* Phase 2 */}
              <div className="p-5 rounded-2xl bg-[#0B1526] border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue-400">Phase 2 (0:30 - 1:00)</span>
                  <span className="text-[11px] text-slate-400">The Core Engine</span>
                </div>
                <h4 className="text-sm font-bold text-white">Rule-Based Matching & Privacy</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Demonstrate the &quot;Find My Schemes&quot; questionnaire. Show how a user answers basic questions without ever entering an Aadhaar number or phone number. The matching runs 100% on the device (localStorage), protecting poor citizens from identity theft and fraud.
                </p>
              </div>

              {/* Phase 3 */}
              <div className="p-5 rounded-2xl bg-[#0B1526] border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-400">Phase 3 (1:00 - 1:30)</span>
                  <span className="text-[11px] text-slate-400">Ground Execution</span>
                </div>
                <h4 className="text-sm font-bold text-white">Bengaluru Ground Navigation & PMBJP</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Show the Bangalore OpenStreetMap map: Point out the Jan Aushadhi generic medicine stores (50-90% discount), Victoria & Bowring referral hospitals, and Fair Price Shops. Show that we bridge digital awareness into actual physical visits.
                </p>
              </div>

              {/* Phase 4 */}
              <div className="p-5 rounded-2xl bg-[#0B1526] border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-purple-400">Phase 4 (1:30 - 2:00)</span>
                  <span className="text-[11px] text-slate-400">Civic Accountability</span>
                </div>
                <h4 className="text-sm font-bold text-white">Public Money Watchdog & 1930 Cyber Defense</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Highlight our Government Money tracker (CAG audit findings, unspent welfare budgets, RTI guide) and the 1930 Golden Hour emergency protocol for stopping UPI fraud. Conclude that LifeBridge empowers citizens both as beneficiaries and as vigilant democratic taxpayers.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: TEAM MEMBERS & ROLES */}
      {activeTab === 'team' && (
        <div className="space-y-6">
          <div className="bg-[#0F1E36] p-6 rounded-2xl border border-slate-800 space-y-2">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-[#42DCC5]" />
              <span>{isEn ? 'Project Contributors & Research Initials' : 'ಪ್ರಾಜೆಕ್ಟ್ ಕೊಡುಗೆದಾರರು ಮತ್ತು ಸಂಶೋಧಕರ ಹೆಸರುಗಳು'}</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {isEn
                ? 'LifeBridge was designed and developed through joint interdisciplinary collaboration between Pre-University (PU) and University research members.'
                : 'ಲೈಫ್‌ಬ್ರಿಡ್ಜ್ ಯೋಜನೆಯನ್ನು ಪಿಯು (PU) ಮತ್ತು ವಿಶ್ವವಿದ್ಯಾಲಯದ ಸಂಶೋಧಕರ ಸಹಯೋಗದಲ್ಲಿ ಅಭಿವೃದ್ಧಿಪಡಿಸಲಾಗಿದೆ.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="p-6 rounded-2xl bg-[#0F1E36] border border-slate-800 space-y-4 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${member.color} flex items-center justify-center text-white font-extrabold text-lg shadow-md`}>
                      {member.initials}
                    </div>
                    <span className={`text-[11px] px-2.5 py-1 rounded-md font-semibold border ${member.bgColor}`}>
                      {isEn ? member.category : member.categoryKn}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white">{member.name}</h4>
                    <p className="text-xs text-[#42DCC5] font-medium">{isEn ? member.role : member.roleKn}</p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isEn ? member.description : member.descriptionKn}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-1.5 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isEn ? 'Verified Research Contributor' : 'ದೃಢೀಕೃತ ಸಂಶೋಧನಾ ಸದಸ್ಯ'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: EVALUATOR Q&A DEFENSE SHEET */}
      {activeTab === 'qa_evaluators' && (
        <div className="space-y-6">
          <div className="bg-[#0F1E36] p-6 rounded-2xl border border-slate-800 space-y-2">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-400" />
              <span>{isEn ? 'Evaluator Q&A Defense Sheet (Tough Questions & Ready Answers)' : 'ಮೌಲ್ಯಮಾಪಕರ ಕಠಿಣ ಪ್ರಶ್ನೆಗಳು ಮತ್ತು ಸಿದ್ಧ ಉತ್ತರಗಳು'}</span>
            </h3>
            <p className="text-xs text-slate-300">
              {isEn
                ? 'These are the most common questions evaluators will ask during project defense. Review these answers to score maximum marks.'
                : 'ಪ್ರಾಜೆಕ್ಟ್ ಮೌಲ್ಯಮಾಪನದ ವೇಳೆ ಪರೀಕ್ಷಕರು ಕೇಳಬಹುದಾದ ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು ಮತ್ತು ಅವುಗಳಿಗೆ ನೀಡಬೇಕಾದ ಸ್ಪಷ್ಟ ಉತ್ತರಗಳು.'}
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-[#0F1E36] border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 text-xs flex items-center justify-center font-mono">Q1</span>
                <span>Is LifeBridge an official government website? Can you sanction schemes?</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 pl-8 leading-relaxed">
                <strong>Answer:</strong> &quot;No, and we make that transparently clear on our disclaimer banner. LifeBridge is an independent civic navigation platform. Just as Google Maps indexes roads without being the highway department, or WebMD explains medical conditions without being a hospital, LifeBridge indexes public gazettes, decodes bureaucratic language, and directs citizens straight to official government portals (.gov.in) with complete document readiness.&quot;
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F1E36] border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 text-xs flex items-center justify-center font-mono">Q2</span>
                <span>Why did your team choose to focus on Bengaluru and Karnataka first?</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 pl-8 leading-relaxed">
                <strong>Answer:</strong> &quot;Bengaluru presents a unique socio-economic microcosm: it has a high concentration of working-class migrant laborers, daily-wage workers, and students who struggle with unfamiliar state portals, alongside dense public infrastructure (Victoria Hospital, Peenya ITIs, Jan Aushadhi Kendras). Piloting in Bengaluru allows us to verify exact physical facility coordinates, test bilingual Kannada-English flows, and establish ground truth before scaling across Karnataka and other Indian states.&quot;
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F1E36] border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-xs flex items-center justify-center font-mono">Q3</span>
                <span>How is LifeBridge different from portals like Seva Sindhu or myScheme?</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 pl-8 leading-relaxed">
                <strong>Answer:</strong> &quot;Existing portals have three major limitations: First, they are siloed (e.g., Ahara for ration does not talk to SSP for scholarships or PMBJP for generic medicine). Second, they require Aadhaar OTP logins before a citizen can even browse, creating privacy risks and excluding those without active SIMs. Third, they lack physical ground navigation and public accountability tracking. LifeBridge requires zero logins, integrates 10 distinct sectors, includes physical facility mapping, and features an audit watchdog on unspent public funds.&quot;
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F1E36] border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 text-xs flex items-center justify-center font-mono">Q4</span>
                <span>How do you handle user privacy and sensitive data?</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 pl-8 leading-relaxed">
                <strong>Answer:</strong> &quot;We implemented a strict Zero-Data-Harvesting constitution. All eligibility evaluations, profile attributes, and saved wallet items exist strictly in the client&apos;s browser memory (localStorage). We do not operate an external database that stores user profiles, we never request Aadhaar or bank account numbers, and we comply with the spirit of India&apos;s Digital Personal Data Protection (DPDP) Act 2023.&quot;
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F1E36] border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 text-xs flex items-center justify-center font-mono">Q5</span>
                <span>What are the roles of the PU and University members in this project?</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 pl-8 leading-relaxed">
                <strong>Answer:</strong> &quot;Our team is composed of PU members: Raj, Kushi, and Saubhiya, who drove the field surveys, Karnataka state scheme documentation, and Kannada localization; and University members: Arfa Jasmine and Akshaya, who engineered the civic architecture, zero-tracking privacy models, emergency protocol workflows, and the public money audit tracker.&quot;
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
