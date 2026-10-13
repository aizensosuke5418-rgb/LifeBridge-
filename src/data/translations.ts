export interface TranslationStrings {
  brandName: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  disclaimerShort: string;
  disclaimerFull: string;
  findMySchemes: string;
  exploreDemo: string;
  exploreAllSchemes: string;
  applicationGuides: string;
  healthcare: string;
  foodAndRation: string;
  educationAndScholarships: string;
  publicServiceMaps: string;
  lifeMap: string;
  askLifeBridge: string;
  mySupportWallet: string;
  aboutLifeBridge: string;
  officialPortals: string;
  switchLanguage: string;
  
  // Questionnaire
  questionnaireTitle: string;
  questionnaireSubtitle: string;
  step1Location: string;
  step2BasicProfile: string;
  step3Circumstances: string;
  step4Review: string;
  step5Results: string;
  stateLabel: string;
  districtLabel: string;
  localityLabel: string;
  ageLabel: string;
  genderLabel: string;
  studentLabel: string;
  educationLevelLabel: string;
  employmentLabel: string;
  incomeLabel: string;
  rationCardLabel: string;
  circumstancesPrompt: string;
  nextStep: string;
  previousStep: string;
  runMatchingEngine: string;
  editAnswers: string;
  resetProfile: string;
  
  // Results
  potentialMatch: string;
  moreInfoNeeded: string;
  doesNotMatch: string;
  whySeeingThis: string;
  criteriaMatched: string;
  criteriaToConfirm: string;
  disqualifyingNotes: string;
  benefitsHeader: string;
  documentsNeeded: string;
  howToApply: string;
  officialWebsite: string;
  saveToWallet: string;
  savedInWallet: string;
  
  // Wallet
  walletTitle: string;
  walletSubtitle: string;
  savedSchemesTab: string;
  savedFacilitiesTab: string;
  readinessTrackerTab: string;
  notesTab: string;
  compareTab: string;
  clearAllWalletData: string;
  
  // Footer
  footerMission: string;
  independentNotice: string;
  privacyNotice: string;
}

export const TRANSLATIONS: Record<'en' | 'kn', TranslationStrings> = {
  en: {
    brandName: 'LifeBridge',
    tagline: 'One Bridge. A World of Possibilities.',
    heroHeadline: 'The Support You Need. The Opportunities You Deserve.',
    heroSubheadline: 'Empowering citizens across Karnataka and India to discover verified government welfare schemes, understand eligibility, navigate application steps, and find public hospitals, schools, and ration centres without intermediaries.',
    disclaimerShort: 'Independent civic discovery platform. Not an official government website.',
    disclaimerFull: 'LifeBridge is an independent, non-governmental public service navigation platform. We do not approve applications, grant financial benefits, or officially determine scheme eligibility. Official government authorities reserve final decision-making power. We never ask for Aadhaar numbers, OTPs, or passwords.',
    findMySchemes: 'Find My Schemes',
    exploreDemo: 'Explore Demo Profile',
    exploreAllSchemes: 'Explore All Schemes',
    applicationGuides: 'Application Guides',
    healthcare: 'Healthcare Services',
    foodAndRation: 'Food & Ration Services',
    educationAndScholarships: 'Education & Scholarships',
    publicServiceMaps: 'Public-Service Maps',
    lifeMap: 'Life Map & Radar',
    askLifeBridge: 'Ask LifeBridge',
    mySupportWallet: 'My Support Wallet',
    aboutLifeBridge: 'About LifeBridge',
    officialPortals: 'Official Portals',
    switchLanguage: 'ಕನ್ನಡ',

    questionnaireTitle: 'Tell Us About Yourself. Discover Your Opportunities.',
    questionnaireSubtitle: 'Complete a brief, private questionnaire to receive a personalized eligibility assessment based on verified official criteria. No account or identity documents required.',
    step1Location: '1. Location',
    step2BasicProfile: '2. Basic Profile',
    step3Circumstances: '3. Circumstances',
    step4Review: '4. Review Profile',
    step5Results: '5. Matched Schemes',
    stateLabel: 'State of Residence',
    districtLabel: 'District',
    localityLabel: 'Locality Type',
    ageLabel: 'Age (in years)',
    genderLabel: 'Gender',
    studentLabel: 'Are you currently a student?',
    educationLevelLabel: 'Current / Highest Education Level',
    employmentLabel: 'Employment Status',
    incomeLabel: 'Household Annual Income Range',
    rationCardLabel: 'Ration Card Category',
    circumstancesPrompt: 'Select any specific areas where you or your family require assistance:',
    nextStep: 'Continue to Next Step',
    previousStep: 'Go Back',
    runMatchingEngine: 'Discover Matching Schemes',
    editAnswers: 'Edit Profile Information',
    resetProfile: 'Start New Search',

    potentialMatch: 'Potential Match',
    moreInfoNeeded: 'More Information Needed',
    doesNotMatch: 'Does Not Appear to Match',
    whySeeingThis: 'Why am I seeing this scheme?',
    criteriaMatched: 'Criteria that appear to match',
    criteriaToConfirm: 'Criteria that need confirmation',
    disqualifyingNotes: 'Possible disqualifying conditions',
    benefitsHeader: 'Verified Scheme Benefits',
    documentsNeeded: 'Documents to Prepare',
    howToApply: 'Step-by-Step Application Steps',
    officialWebsite: 'Apply on Official Website',
    saveToWallet: 'Save to Wallet',
    savedInWallet: 'Saved in Wallet',

    walletTitle: 'My Support Wallet',
    walletSubtitle: 'Keep track of saved welfare opportunities, nearby public facilities, readiness checklists, and personal application notes securely stored on your local device.',
    savedSchemesTab: 'Saved Schemes',
    savedFacilitiesTab: 'Saved Facilities',
    readinessTrackerTab: 'Readiness Tracker',
    notesTab: 'Personal Notes',
    compareTab: 'Compare Schemes',
    clearAllWalletData: 'Delete All Wallet Data',

    footerMission: 'LifeBridge connects citizens with authentic government entitlements, public healthcare facilities, and educational scholarships across Karnataka and India.',
    independentNotice: 'Independent public initiative. No commercial or political affiliation.',
    privacyNotice: '100% Client-Side Privacy: All profile answers and saved items remain in your browser storage. Zero personal data uploaded to servers.'
  },
  kn: {
    brandName: 'ಲೈಫ್‌ಬ್ರಿಡ್ಜ್',
    tagline: 'ಒಂದು ಸೇತು. ಅಪಾರ ಸಾಧ್ಯತೆಗಳು.',
    heroHeadline: 'ನಿಮಗೆ ಬೇಕಾದ ನೆರವು. ನೀವು ಅರ್ಹವಾದ ಅವಕಾಶಗಳು.',
    heroSubheadline: 'ಕರ್ನಾಟಕ ಮತ್ತು ಭಾರತದ ನಾಗರಿಕರಿಗೆ ಸರ್ಕಾರದ ಜನಕಲ್ಯಾಣ ಯೋಜನೆಗಳು, ವಿದ್ಯಾರ್ಥಿವೇತನಗಳು, ಉಚಿತ ಆರೋಗ್ಯ ಚಿಕಿತ್ಸೆ, ಪಡಿತರ ಸೇವೆಗಳು ಮತ್ತು ಸಾರ್ವಜನಿಕ ಆಸ್ಪತ್ರೆಗಳನ್ನು ಮಧ್ಯವರ್ತಿಗಳಿಲ್ಲದೆ ನೇರವಾಗಿ ಕಂಡುಕೊಳ್ಳಲು ನೆರವಾಗುವ ಸ್ವತಂತ್ರ ತಾಣ.',
    disclaimerShort: 'ಸ್ವತಂತ್ರ ಸಾರ್ವಜನಿಕ ಸೇವಾ ತಾಣ. ಇದು ಅಧಿಕೃತ ಸರ್ಕಾರಿ ವೆಬ್‌ಸೈಟ್ ಅಲ್ಲ.',
    disclaimerFull: 'ಲೈಫ್‌ಬ್ರಿಡ್ಜ್ ಒಂದು ಸ್ವತಂತ್ರ ನಾಗರಿಕ ಮಾರ್ಗದರ್ಶನ ವೇದಿಕೆಯಾಗಿದೆ. ನಾವು ಸರ್ಕಾರಿ ಸೌಲಭ್ಯಗಳನ್ನು ಮಂಜೂರು ಮಾಡುವುದಿಲ್ಲ ಅಥವಾ ಅಧಿಕೃತವಾಗಿ ಅರ್ಹತೆ ನಿರ್ಧರಿಸುವುದಿಲ್ಲ. ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಇಲಾಖೆಗಳಿಗೆ ಮಾತ್ರ ಅಂತಿಮ ಅನುಮೋದನೆಯ ಹಕ್ಕಿದೆ. ನಾವು ಎಂದಿಗೂ ಆಧಾರ್ ಸಂಖ್ಯೆ, ಒಟಿಪಿ ಅಥವಾ ಬ್ಯಾಂಕ್ ವಿವರಗಳನ್ನು ಕೇಳುವುದಿಲ್ಲ.',
    findMySchemes: 'ನನ್ನ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ',
    exploreDemo: 'ಮಾದರಿ ಪ್ರೊಫೈಲ್ ನೋಡಿ',
    exploreAllSchemes: 'ಎಲ್ಲಾ ಯೋಜನೆಗಳು',
    applicationGuides: 'ಅರ್ಜಿ ಮಾರ್ಗದರ್ಶಿ',
    healthcare: 'ಆರೋಗ್ಯ ಸೇವೆಗಳು',
    foodAndRation: 'ಆಹಾರ ಮತ್ತು ರೇಷನ್ ಸೇವೆಗಳು',
    educationAndScholarships: 'ಶಿಕ್ಷಣ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿವೇತನ',
    publicServiceMaps: 'ಸಾರ್ವಜನಿಕ ಸೇವಾ ನಕ್ಷೆ',
    lifeMap: 'ಲೈಫ್ ಮ್ಯಾಪ್ ಮತ್ತು ರೇಡಾರ್',
    askLifeBridge: 'ಲೈಫ್‌ಬ್ರಿಡ್ಜ್ ಕೇಳಿ',
    mySupportWallet: 'ನನ್ನ ನೆರವಿನ ವಾಲೆಟ್',
    aboutLifeBridge: 'ಲೈಫ್‌ಬ್ರಿಡ್ಜ್ ಬಗ್ಗೆ',
    officialPortals: 'ಅಧಿಕೃತ ಪೋರ್ಟಲ್‌ಗಳು',
    switchLanguage: 'English',

    questionnaireTitle: 'ನಿಮ್ಮ ವಿವರ ನೀಡಿ. ನಿಮ್ಮ ಅವಕಾಶಗಳನ್ನು ಕಂಡುಕೊಳ್ಳಿ.',
    questionnaireSubtitle: 'ಅಧಿಕೃತ ನಿಯಮಗಳ ಆಧಾರದ ಮೇಲೆ ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಯೋಜನಾ ಪಟ್ಟಿಯನ್ನು ಪಡೆಯಲು ಈ ಸರಳ ಪ್ರಶ್ನಾವಳಿಯನ್ನು ಭರ್ತಿ ಮಾಡಿ. ಯಾವುದೇ ಖಾತೆ ಸೃಷ್ಟಿಸುವ ಅಥವಾ ದಾಖಲೆ ಅಪ್‌ಲೋಡ್ ಮಾಡುವ ಅಗತ್ಯವಿಲ್ಲ.',
    step1Location: '1. ಸ್ಥಳ',
    step2BasicProfile: '2. ಮೂಲ ವಿವರ',
    step3Circumstances: '3. ವಿಶೇಷ ಪರಿಸ್ಥಿತಿಗಳು',
    step4Review: '4. ಪರಿಶೀಲನೆ',
    step5Results: '5. ಹೊಂದಾಣಿಕೆಯಾದ ಯೋಜನೆಗಳು',
    stateLabel: 'ವಾಸಿಸುವ ರಾಜ್ಯ',
    districtLabel: 'ಜಿಲ್ಲೆ',
    localityLabel: 'ಪ್ರದೇಶದ ವಿಧ',
    ageLabel: 'ವಯಸ್ಸು (ವರ್ಷಗಳಲ್ಲಿ)',
    genderLabel: 'ಲಿಂಗ',
    studentLabel: 'ನೀವು ಪ್ರಸ್ತುತ ವಿದ್ಯಾರ್ಥಿಯೇ?',
    educationLevelLabel: 'ಹಾಲಿ ಅಥವಾ ಗರಿಷ್ಠ ಶಿಕ್ಷಣ ಹಂತ',
    employmentLabel: 'ಉದ್ಯೋಗ ಸ್ಥಿತಿ',
    incomeLabel: 'ಕುಟುಂಬದ ವಾರ್ಷಿಕ ಆದಾಯ',
    rationCardLabel: 'ಪಡಿತರ ಚೀಟಿ ವಿಧ',
    circumstancesPrompt: 'ನಿಮಗೆ ಅಥವಾ ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೆ ಅಗತ್ಯವಿರುವ ನೆರವನ್ನು ಆಯ್ಕೆಮಾಡಿ:',
    nextStep: 'ಮುಂದಿನ ಹಂತಕ್ಕೆ ಸಾಗಿ',
    previousStep: 'ಹಿಂದಕ್ಕೆ ಹೋಗಿ',
    runMatchingEngine: 'ಹೊಂದಾಣಿಕೆಯ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ',
    editAnswers: 'ವಿವರಗಳನ್ನು ತಿದ್ದಿಕೊಳ್ಳಿ',
    resetProfile: 'ಹೊಸ ಹುಡುಕಾಟ ಪ್ರಾರಂಭಿಸಿ',

    potentialMatch: 'ಸಂಭಾವ್ಯ ಹೊಂದಾಣಿಕೆ',
    moreInfoNeeded: 'ಹೆಚ್ಚಿನ ಮಾಹಿತಿ ಅಗತ್ಯವಿದೆ',
    doesNotMatch: 'ಹೊಂದಾಣಿಕೆಯಾಗುವುದಿಲ್ಲ',
    whySeeingThis: 'ನಾನು ಈ ಯೋಜನೆಯನ್ನು ಏಕೆ ನೋಡುತ್ತಿದ್ದೇನೆ?',
    criteriaMatched: 'ಹೊಂದಾಣಿಕೆಯಾಗುವ ಮಾನದಂಡಗಳು',
    criteriaToConfirm: 'ದೃಢೀಕರಿಸಬೇಕಾದ ವಿವರಗಳು',
    disqualifyingNotes: 'ಅನರ್ಹಗೊಳಿಸುವ ಕಾರಣಗಳು',
    benefitsHeader: 'ದೃಢೀಕೃತ ಯೋಜನಾ ಪ್ರಯೋಜನಗಳು',
    documentsNeeded: 'ಸಿದ್ಧಪಡಿಸಿಕೊಳ್ಳಬೇಕಾದ ದಾಖಲೆಗಳು',
    howToApply: 'ಹಂತ-ಹಂತದ ಅರ್ಜಿ ಪ್ರಕ್ರಿಯೆ',
    officialWebsite: 'ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಅರ್ಜಿ ಹಾಕಿ',
    saveToWallet: 'ವಾಲೆಟ್‌ಗೆ ಉಳಿಸಿ',
    savedInWallet: 'ವಾಲೆಟ್‌ನಲ್ಲಿದೆ',

    walletTitle: 'ನನ್ನ ನೆರವಿನ ವಾಲೆಟ್',
    walletSubtitle: 'ಉಳಿಸಿದ ಯೋಜನೆಗಳು, ಆಸ್ಪತ್ರೆಗಳು, ಅರ್ಜಿ ಸಿದ್ಧತಾ ಚೆಕ್‌ಲಿಸ್ಟ್ ಮತ್ತು ವೈಯಕ್ತಿಕ ಟಿಪ್ಪಣಿಗಳನ್ನು ನಿಮ್ಮ ಸಾಧನದಲ್ಲಿ ಸುರಕ್ಷಿತವಾಗಿ ಇರಿಸಿಕೊಳ್ಳಿ.',
    savedSchemesTab: 'ಉಳಿಸಿದ ಯೋಜನೆಗಳು',
    savedFacilitiesTab: 'ಉಳಿಸಿದ ಸೌಲಭ್ಯಗಳು',
    readinessTrackerTab: 'ಸಿದ್ಧತಾ ಟ್ರ್ಯಾಕರ್',
    notesTab: 'ವೈಯಕ್ತಿಕ ಟಿಪ್ಪಣಿಗಳು',
    compareTab: 'ಯೋಜನೆಗಳ ಹೋಲಿಕೆ',
    clearAllWalletData: 'ಎಲ್ಲಾ ವಾಲೆಟ್ ಮಾಹಿತಿ ಅಳಿಸಿ',

    footerMission: 'ಲೈಫ್‌ಬ್ರಿಡ್ಜ್ ನಾಗರಿಕರನ್ನು ಕರ್ನಾಟಕ ಮತ್ತು ಭಾರತ ಸರ್ಕಾರದ ನೈಜ ಸವಲತ್ತುಗಳು, ಆಸ್ಪತ್ರೆಗಳು ಮತ್ತು ವಿದ್ಯಾರ್ಥಿವೇತನಗಳೊಂದಿಗೆ ಜೋಡಿಸುತ್ತದೆ.',
    independentNotice: 'ಸ್ವತಂತ್ರ ಸಾರ್ವಜನಿಕ ಉಪಕ್ರಮ. ಯಾವುದೇ ವಾಣಿಜ್ಯ ಅಥವಾ ರಾಜಕೀಯ ಸಂಬಂಧವಿಲ್ಲ.',
    privacyNotice: '100% ಬ್ರೌಸರ್ ಗೌಪ್ಯತೆ: ನಿಮ್ಮ ಎಲ್ಲಾ ವಿವರಗಳು ನಿಮ್ಮ ಮೊಬೈಲ್ ಅಥವಾ ಕಂಪ್ಯೂಟರ್‌ನಲ್ಲಿ ಮಾತ್ರ ಉಳಿಯುತ್ತವೆ. ಯಾವುದೇ ಸರ್ವರ್‌ಗೆ ಹೋಗುವುದಿಲ್ಲ.'
  }
};
