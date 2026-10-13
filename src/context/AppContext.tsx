import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, UserProfile, WalletState, Scheme, PublicFacility } from '../types';
import { TRANSLATIONS } from '../data/translations';

export type ViewType =
  | 'home'
  | 'dashboard'
  | 'find_schemes'
  | 'explore_schemes'
  | 'categories'
  | 'compare'
  | 'skill_training'
  | 'widow_pension'
  | 'cyber_police_helplines'
  | 'sc_st_obc_welfare'
  | 'public_money_accountability'
  | 'guides'
  | 'healthcare'
  | 'food_ration'
  | 'education'
  | 'maps'
  | 'lifemap'
  | 'ask_lifebridge'
  | 'wallet'
  | 'portals'
  | 'about'
  | 'presentation';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: typeof TRANSLATIONS['en'];
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
  profile: UserProfile;
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
  updateProfile: (fields: Partial<UserProfile>) => void;
  questionnaireStep: number;
  setQuestionnaireStep: (step: number) => void;
  loadDemoProfile: () => void;
  resetProfile: () => void;
  wallet: WalletState;
  toggleSaveScheme: (schemeId: string) => void;
  isSchemeSaved: (schemeId: string) => boolean;
  toggleSaveFacility: (facilityId: string) => void;
  isFacilitySaved: (facilityId: string) => boolean;
  updateChecklist: (schemeId: string, key: string, value: boolean) => void;
  updateNote: (schemeId: string, note: string) => void;
  addRecentlyViewed: (schemeId: string) => void;
  clearWallet: () => void;
  selectedSchemeForDetail: Scheme | null;
  setSelectedSchemeForDetail: (scheme: Scheme | null) => void;
  selectedFacilityForDetail: PublicFacility | null;
  setSelectedFacilityForDetail: (facility: PublicFacility | null) => void;
  // Comparison tool
  comparisonSchemeIds: string[];
  toggleCompareScheme: (schemeId: string) => void;
  isInComparison: (schemeId: string) => boolean;
  clearComparison: () => void;
  isComparisonModalOpen: boolean;
  setIsComparisonModalOpen: (open: boolean) => void;
  // Category browsing
  selectedCategoryForView: string | null;
  setSelectedCategoryForView: (category: string | null) => void;
}

const DEFAULT_PROFILE: UserProfile = {
  state: 'Karnataka',
  district: 'Bengaluru Urban',
  localityType: 'urban'
};

const DEMO_PROFILE: UserProfile = {
  state: 'Karnataka',
  district: 'Bengaluru Urban',
  localityType: 'urban',
  age: 21,
  gender: 'female',
  isStudent: true,
  educationLevel: 'degree',
  employmentStatus: 'student',
  annualIncomeRange: '50k-1L',
  rationCardCategory: 'BPL',
  seekingScholarship: true,
  needsHealthcareHelp: true,
  seekingWomenChildWelfare: true,
  seekingHousingUtilityHelp: true,
  isFarmer: false,
  hasDisability: false,
  exploringPension: false
};

const STORAGE_KEY_WALLET = 'lifebridge_wallet_v1';
const STORAGE_KEY_PROFILE = 'lifebridge_profile_v1';
const STORAGE_KEY_LANG = 'lifebridge_lang_v1';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_LANG);
      return (saved === 'kn' ? 'kn' : 'en') as Language;
    } catch {
      return 'en';
    }
  });

  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [questionnaireStep, setQuestionnaireStep] = useState<number>(1);

  const [profile, setProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROFILE);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return DEFAULT_PROFILE;
  });

  const [wallet, setWallet] = useState<WalletState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_WALLET);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return {
      savedSchemeIds: [],
      savedFacilityIds: [],
      checklistProgress: {},
      notes: {},
      recentlyViewedIds: []
    };
  });

  const [selectedSchemeForDetail, setSelectedSchemeForDetail] = useState<Scheme | null>(null);
  const [selectedFacilityForDetail, setSelectedFacilityForDetail] = useState<PublicFacility | null>(null);

  // Sync state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_LANG, language);
    } catch {
      // ignore
    }
  }, [language]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_WALLET, JSON.stringify(wallet));
    } catch {
      // ignore
    }
  }, [wallet]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState(prev => (prev === 'en' ? 'kn' : 'en'));
  };

  const updateProfile = (fields: Partial<UserProfile>) => {
    setProfile(prev => {
      const next = { ...prev, ...fields };
      try {
        localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const loadDemoProfile = () => {
    setProfile(DEMO_PROFILE);
    setQuestionnaireStep(5);
    try {
      localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(DEMO_PROFILE));
    } catch {
      // ignore
    }
    setCurrentView('dashboard');
  };

  const resetProfile = () => {
    setProfile(DEFAULT_PROFILE);
    setQuestionnaireStep(1);
    try {
      localStorage.removeItem(STORAGE_KEY_PROFILE);
    } catch {
      // ignore
    }
  };

  const toggleSaveScheme = (schemeId: string) => {
    setWallet(prev => {
      const exists = prev.savedSchemeIds.includes(schemeId);
      const nextIds = exists
        ? prev.savedSchemeIds.filter(id => id !== schemeId)
        : [...prev.savedSchemeIds, schemeId];
      return { ...prev, savedSchemeIds: nextIds };
    });
  };

  const isSchemeSaved = (schemeId: string) => {
    return wallet.savedSchemeIds.includes(schemeId);
  };

  const toggleSaveFacility = (facilityId: string) => {
    setWallet(prev => {
      const exists = prev.savedFacilityIds.includes(facilityId);
      const nextIds = exists
        ? prev.savedFacilityIds.filter(id => id !== facilityId)
        : [...prev.savedFacilityIds, facilityId];
      return { ...prev, savedFacilityIds: nextIds };
    });
  };

  const isFacilitySaved = (facilityId: string) => {
    return wallet.savedFacilityIds.includes(facilityId);
  };

  const updateChecklist = (schemeId: string, key: string, value: boolean) => {
    setWallet(prev => {
      const current = prev.checklistProgress[schemeId] || {};
      return {
        ...prev,
        checklistProgress: {
          ...prev.checklistProgress,
          [schemeId]: { ...current, [key]: value }
        }
      };
    });
  };

  const updateNote = (schemeId: string, note: string) => {
    setWallet(prev => ({
      ...prev,
      notes: { ...prev.notes, [schemeId]: note }
    }));
  };

  const addRecentlyViewed = (schemeId: string) => {
    setWallet(prev => {
      const filtered = prev.recentlyViewedIds.filter(id => id !== schemeId);
      return {
        ...prev,
        recentlyViewedIds: [schemeId, ...filtered].slice(0, 10)
      };
    });
  };

  const [comparisonSchemeIds, setComparisonSchemeIds] = useState<string[]>([]);
  const [isComparisonModalOpen, setIsComparisonModalOpen] = useState<boolean>(false);
  const [selectedCategoryForView, setSelectedCategoryForView] = useState<string | null>(null);

  const toggleCompareScheme = (schemeId: string) => {
    setComparisonSchemeIds(prev => {
      if (prev.includes(schemeId)) {
        return prev.filter(id => id !== schemeId);
      }
      if (prev.length >= 3) {
        // limit to 3 max
        return [...prev.slice(1), schemeId];
      }
      return [...prev, schemeId];
    });
  };

  const isInComparison = (schemeId: string) => {
    return comparisonSchemeIds.includes(schemeId);
  };

  const clearComparison = () => {
    setComparisonSchemeIds([]);
  };

  const clearWallet = () => {
    setWallet({
      savedSchemeIds: [],
      savedFacilityIds: [],
      checklistProgress: {},
      notes: {},
      recentlyViewedIds: []
    });
    try {
      localStorage.removeItem(STORAGE_KEY_WALLET);
    } catch {
      // ignore
    }
  };

  const t = TRANSLATIONS[language];

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        currentView,
        setCurrentView,
        profile,
        setProfile,
        updateProfile,
        questionnaireStep,
        setQuestionnaireStep,
        loadDemoProfile,
        resetProfile,
        wallet,
        toggleSaveScheme,
        isSchemeSaved,
        toggleSaveFacility,
        isFacilitySaved,
        updateChecklist,
        updateNote,
        addRecentlyViewed,
        clearWallet,
        selectedSchemeForDetail,
        setSelectedSchemeForDetail,
        selectedFacilityForDetail,
        setSelectedFacilityForDetail,
        comparisonSchemeIds,
        toggleCompareScheme,
        isInComparison,
        clearComparison,
        isComparisonModalOpen,
        setIsComparisonModalOpen,
        selectedCategoryForView,
        setSelectedCategoryForView
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
