export type Language = 'en' | 'kn';

export type SchemeCategory = 
  | 'healthcare'
  | 'food_ration'
  | 'education_scholarship'
  | 'women_child'
  | 'senior_pension'
  | 'disability'
  | 'agriculture'
  | 'employment_skills'
  | 'housing_utility'
  | 'certificates_general';

export type MatchStatus = 'potential_match' | 'more_info_needed' | 'does_not_match';

export interface Scheme {
  id: string;
  name: {
    en: string;
    kn: string;
  };
  shortName?: string;
  authority: {
    en: string;
    kn: string;
  };
  level: 'central' | 'karnataka' | 'both';
  category: SchemeCategory;
  tagline: {
    en: string;
    kn: string;
  };
  description: {
    en: string;
    kn: string;
  };
  benefits: {
    en: string[];
    kn: string[];
  };
  knownCriteria: {
    minAge?: number;
    maxAge?: number;
    gender?: 'all' | 'female' | 'transgender';
    studentStatus?: boolean;
    educationLevels?: string[]; // 'school' | 'puc' | 'degree' | 'diploma' | 'postgrad'
    employmentStatus?: string[]; // 'unemployed' | 'farmer' | 'informal' | 'any'
    maxAnnualIncome?: number; // In INR
    rationCards?: ('AAY' | 'BPL' | 'APL' | 'any')[];
    karnatakaResidentOnly?: boolean;
    disabilityAssistance?: boolean;
    hasDisability?: boolean;
    farmerSupport?: boolean;
    isFarmer?: boolean;
    seniorCitizen?: boolean;
    exploringPension?: boolean;
    needsHealthcareHelp?: boolean;
    maternalSupport?: boolean;
  };
  disqualifyingConditions: {
    en: string[];
    kn: string[];
  };
  requiredDocuments: {
    mandatory: {
      en: string[];
      kn: string[];
    };
    conditional: {
      en: string[];
      kn: string[];
    };
    toConfirm: {
      en: string[];
      kn: string[];
    };
  };
  applicationSteps: {
    stepNumber: number;
    title: {
      en: string;
      kn: string;
    };
    description: {
      en: string;
      kn: string;
    };
  }[];
  officialPortalUrl: string;
  officialGuidelineUrl?: string;
  officialStatusCheckUrl?: string;
  responsibleDepartment: {
    en: string;
    kn: string;
  };
  verificationStatus: 'verified_official' | 'pending_verification' | 'official_source_referenced';
  lastVerifiedDate: string; // YYYY-MM-DD
  deadlineNote?: {
    en: string;
    kn: string;
  };
}

export interface UserProfile {
  // Step 1: Location
  state: string; // Defaults to Karnataka
  district: string;
  localityType: 'urban' | 'rural' | 'semi-urban';
  pincode?: string;

  // Step 2: Basic Profile
  age?: number;
  gender?: 'all' | 'female' | 'male' | 'transgender';
  isStudent?: boolean;
  educationLevel?: 'none' | 'school' | 'puc' | 'degree' | 'diploma' | 'postgrad';
  employmentStatus?: 'student' | 'unemployed' | 'farmer' | 'daily_wage' | 'salaried' | 'retired' | 'self_employed';
  annualIncomeRange?: '<50k' | '50k-1L' | '1L-2.5L' | '2.5L-5L' | '>5L';

  // Step 3: Relevant Circumstances
  rationCardCategory?: 'AAY' | 'BPL' | 'APL' | 'none' | 'unknown';
  seekingScholarship?: boolean;
  needsHealthcareHelp?: boolean;
  exploringPension?: boolean;
  hasDisability?: boolean;
  isFarmer?: boolean;
  seekingWomenChildWelfare?: boolean;
  seekingHousingUtilityHelp?: boolean;
  seekingJobTrainingHelp?: boolean;
}

export interface SchemeEvaluation {
  scheme: Scheme;
  status: MatchStatus;
  matchingCriteria: string[];
  missingCriteria: string[];
  disqualifyingNotes: string[];
  whyYouSeeThis: string;
}

export interface PublicFacility {
  id: string;
  name: {
    en: string;
    kn: string;
  };
  category: 
    | 'hospital' 
    | 'phc' 
    | 'chc' 
    | 'janaushadhi_kendra'
    | 'canteen'
    | 'school' 
    | 'college' 
    | 'iti' 
    | 'fair_price_shop' 
    | 'service_centre';
  district: string;
  locality: string;
  address: {
    en: string;
    kn: string;
  };
  latitude: number;
  longitude: number;
  contactNumber?: string;
  timings?: string;
  servicesProvided: {
    en: string[];
    kn: string[];
  };
  directionsUrl: string;
  verifiedSource: string;
}

export interface GovernmentPortal {
  id: string;
  name: {
    en: string;
    kn: string;
  };
  department: {
    en: string;
    kn: string;
  };
  purpose: {
    en: string;
    kn: string;
  };
  servicesAvailable: {
    en: string[];
    kn: string[];
  };
  geographicCoverage: {
    en: string;
    kn: string;
  };
  url: string;
  verificationStatus: 'verified_active' | 'official_gateway';
  lastChecked: string;
}

export interface WalletState {
  savedSchemeIds: string[];
  savedFacilityIds: string[];
  checklistProgress: Record<string, {
    eligibilityReviewed?: boolean;
    documentsChecked?: boolean;
    portalRead?: boolean;
    applicationStarted?: boolean;
    submittedRefSaved?: boolean;
    statusReminderSet?: boolean;
  }>;
  notes: Record<string, string>;
  recentlyViewedIds: string[];
}
