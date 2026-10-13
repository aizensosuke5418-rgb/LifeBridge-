import React, { useState } from 'react';
import { 
  Sparkles, CheckCircle2, AlertTriangle, XCircle, ArrowRight, ArrowLeft, RotateCcw, 
  ExternalLink, Bookmark, ShieldCheck, ChevronDown, ChevronUp, Edit3, HelpCircle,
  FileText, Info, Building2, MapPin, User, Check
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { evaluateAllSchemes } from '../../utils/matchingEngine';
import { SchemeEvaluation, MatchStatus } from '../../types';

export const DashboardView: React.FC = () => {
  const { 
    language, 
    profile, 
    updateProfile, 
    questionnaireStep, 
    setQuestionnaireStep, 
    resetProfile, 
    loadDemoProfile, 
    toggleSaveScheme, 
    isSchemeSaved, 
    setSelectedSchemeForDetail,
    t,
    setCurrentView
  } = useApp();

  const isEn = language === 'en';
  const [filterStatus, setFilterStatus] = useState<'all' | MatchStatus>('all');
  const [expandedSchemeId, setExpandedSchemeId] = useState<string | null>(null);

  // Run the rule-based matching engine
  const evaluatedSchemes = evaluateAllSchemes(profile, language);

  const potentialMatches = evaluatedSchemes.filter(s => s.status === 'potential_match');
  const moreInfoNeeded = evaluatedSchemes.filter(s => s.status === 'more_info_needed');
  const doesNotMatch = evaluatedSchemes.filter(s => s.status === 'does_not_match');

  const displayedSchemes = filterStatus === 'all'
    ? evaluatedSchemes
    : evaluatedSchemes.filter(s => s.status === filterStatus);

  // District options for Karnataka
  const karnatakaDistricts = [
    'Bengaluru Urban', 'Bengaluru Rural', 'Mysuru', 'Belagavi', 'Dharwad', 
    'Dakshina Kannada (Mangaluru)', 'Kalaburagi', 'Ballari', 'Shivamogga', 
    'Tumakuru', 'Udupi', 'Vijayapura', 'Chikkamagaluru', 'Hassan', 'Mandya'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 space-y-8">
      {/* Page Title & Context */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#42DCC5] font-semibold">
            {isEn ? 'Two-Column Experience' : 'ದ್ವಿ-ಸ್ತಂಭ ಅನುಭವ'}
          </span>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight mt-1">
            {isEn ? 'My LifeBridge Dashboard' : 'ನನ್ನ ಲೈಫ್‌ಬ್ರಿಡ್ಜ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್'}
          </h1>
          <p className="text-xs md:text-sm text-slate-300 mt-1 max-w-2xl">
            {isEn
              ? 'Real-time rule-based scheme matching on the left. Verified platform methodology and civic safeguards on the right.'
              : 'ಎಡಭಾಗದಲ್ಲಿ ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಮತ್ತು ನೈಜ ಯೋಜನಾ ಹೊಂದಾಣಿಕೆ. ಬಲಭಾಗದಲ್ಲಿ ಲೈಫ್‌ಬ್ರಿಡ್ಜ್ ಕಾರ್ಯವಿಧಾನ ಮತ್ತು ನಾಗರಿಕ ರಕ್ಷಣೆಗಳು.'}
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={loadDemoProfile}
            className="px-3.5 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.exploreDemo}</span>
          </button>
          <button
            onClick={resetProfile}
            className="px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t.resetProfile}</span>
          </button>
        </div>
      </div>

      {/* Two-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* ================= COLUMN A: MY PROFILE AND MY GOVERNMENT BENEFITS (Left - 7 cols) ================= */}
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-2xl bg-[#0F1E36] border border-slate-800 p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-blue-400 font-semibold">
                  {isEn ? 'Column A' : 'ಭಾಗ ಎ'}
                </span>
                <h2 className="text-lg md:text-xl font-bold text-white">
                  {isEn ? 'Your Profile. Your Opportunities.' : 'ನಿಮ್ಮ ವಿವರ. ನಿಮ್ಮ ಸವಲತ್ತುಗಳು.'}
                </h2>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                {isEn ? `Step ${questionnaireStep} of 5` : `ಹಂತ ${questionnaireStep} / ೫`}
              </span>
            </div>

            {/* Stepper Navigation Indicator */}
            <div className="grid grid-cols-5 gap-1.5">
              {[1, 2, 3, 4, 5].map((step) => (
                <button
                  key={step}
                  onClick={() => setQuestionnaireStep(step)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    questionnaireStep === step
                      ? 'bg-[#42DCC5]'
                      : questionnaireStep > step
                      ? 'bg-blue-600'
                      : 'bg-slate-800'
                  }`}
                  title={`Step ${step}`}
                  aria-label={`Jump to Step ${step}`}
                />
              ))}
            </div>

            {/* STEP 1: Location */}
            {questionnaireStep === 1 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white">{t.step1Location}</h3>
                  <p className="text-xs text-slate-400">
                    {isEn
                      ? 'Select your residence location. Defaults to Karnataka as our primary verified region.'
                      : 'ನೀವು ವಾಸಿಸುವ ರಾಜ್ಯ ಮತ್ತು ಜಿಲ್ಲೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ.'}
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">{t.stateLabel}</label>
                    <select
                      value={profile.state}
                      onChange={(e) => updateProfile({ state: e.target.value })}
                      className="w-full p-2.5 rounded-lg bg-[#0B1526] border border-slate-700 text-white text-xs focus:outline-none focus:border-blue-500"
                    >
                      <option value="Karnataka">Karnataka (ಕರ್ನಾಟಕ)</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Other">Other States of India</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">{t.districtLabel}</label>
                    <select
                      value={profile.district}
                      onChange={(e) => updateProfile({ district: e.target.value })}
                      className="w-full p-2.5 rounded-lg bg-[#0B1526] border border-slate-700 text-white text-xs focus:outline-none focus:border-blue-500"
                    >
                      {karnatakaDistricts.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">{t.localityLabel}</label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['urban', 'rural', 'semi-urban'] as const).map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => updateProfile({ localityType: type })}
                          className={`p-2.5 rounded-lg border text-xs capitalize font-medium transition-colors cursor-pointer ${
                            profile.localityType === type
                              ? 'bg-blue-600/20 text-[#42DCC5] border-blue-500/50'
                              : 'bg-[#0B1526] border-slate-700 text-slate-300 hover:text-white'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 font-medium mb-1">
                      {isEn ? 'PIN Code (Optional - for local facility mapping)' : 'ಪಿನ್ ಕೋಡ್ (ಐಚ್ಛಿಕ)'}
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      placeholder="e.g. 560001"
                      value={profile.pincode || ''}
                      onChange={(e) => updateProfile({ pincode: e.target.value })}
                      className="w-full p-2.5 rounded-lg bg-[#0B1526] border border-slate-700 text-white text-xs font-mono focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setQuestionnaireStep(2)}
                    className="px-4 py-2.5 text-xs font-semibold text-white bg-[#3678F6] hover:bg-blue-600 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>{t.nextStep}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Basic Profile */}
            {questionnaireStep === 2 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white">{t.step2BasicProfile}</h3>
                  <p className="text-xs text-slate-400">
                    {isEn
                      ? 'Only enter what is relevant. You can skip questions you prefer not to answer.'
                      : 'ಕೇವಲ ಅಗತ್ಯ ಮಾಹಿತಿಯನ್ನು ಮಾತ್ರ ನಮೂದಿಸಿ. ಬೇಡವಾದ ಪ್ರಶ್ನೆಗಳನ್ನು ಬಿಟ್ಟುಬಿಡಬಹುದು.'}
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1.5">{t.ageLabel}</label>
                      <input
                        type="number"
                        min={0}
                        max={110}
                        placeholder="e.g. 21"
                        value={profile.age ?? ''}
                        onChange={(e) => updateProfile({ age: e.target.value ? parseInt(e.target.value) : undefined })}
                        className="w-full p-2.5 rounded-lg bg-[#0B1526] border border-slate-700 text-white text-xs font-mono focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-1.5">{t.genderLabel}</label>
                      <select
                        value={profile.gender || 'all'}
                        onChange={(e) => updateProfile({ gender: e.target.value as any })}
                        className="w-full p-2.5 rounded-lg bg-[#0B1526] border border-slate-700 text-white text-xs focus:outline-none focus:border-blue-500"
                      >
                        <option value="all">{isEn ? 'Prefer not to say / Any' : 'ಯಾವುದಾದರೂ / ತಿಳಿಸಲು ಇಚ್ಛಿಸುವುದಿಲ್ಲ'}</option>
                        <option value="female">{isEn ? 'Female (ಮಹಿಳೆ)' : 'ಮಹಿಳೆ'}</option>
                        <option value="male">{isEn ? 'Male (ಪುರುಷ)' : 'ಪುರುಷ'}</option>
                        <option value="transgender">{isEn ? 'Transgender (ಲಿಂಗತ್ವ ಅಲ್ಪಸಂಖ್ಯಾತ)' : 'ಲಿಂಗತ್ವ ಅಲ್ಪಸಂಖ್ಯಾತ'}</option>
                      </select>
                    </div>
                  </div>

                  {/* Student Status */}
                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">{t.studentLabel}</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => updateProfile({ isStudent: true })}
                        className={`p-2.5 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
                          profile.isStudent === true
                            ? 'bg-blue-600/20 text-[#42DCC5] border-blue-500/50'
                            : 'bg-[#0B1526] border-slate-700 text-slate-300'
                        }`}
                      >
                        {isEn ? 'Yes, I am a student' : 'ಹೌದು, ನಾನು ವಿದ್ಯಾರ್ಥಿ'}
                      </button>
                      <button
                        type="button"
                        onClick={() => updateProfile({ isStudent: false })}
                        className={`p-2.5 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
                          profile.isStudent === false
                            ? 'bg-blue-600/20 text-[#42DCC5] border-blue-500/50'
                            : 'bg-[#0B1526] border-slate-700 text-slate-300'
                        }`}
                      >
                        {isEn ? 'No, not a student' : 'ಇಲ್ಲ, ವಿದ್ಯಾರ್ಥಿಯಲ್ಲ'}
                      </button>
                    </div>
                  </div>

                  {/* Education Level */}
                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">{t.educationLevelLabel}</label>
                    <select
                      value={profile.educationLevel || 'degree'}
                      onChange={(e) => updateProfile({ educationLevel: e.target.value as any })}
                      className="w-full p-2.5 rounded-lg bg-[#0B1526] border border-slate-700 text-white text-xs focus:outline-none focus:border-blue-500"
                    >
                      <option value="school">{isEn ? 'Primary / High School (1st - 10th)' : 'ಪ್ರಾಥಮಿಕ / ಪ್ರೌಢಶಾಲೆ (೧ - ೧೦ನೇ ತರಗತಿ)'}</option>
                      <option value="puc">{isEn ? 'Pre-University (PUC / 11th - 12th)' : 'ಪಿಯುಸಿ (೧೧ - ೧೨ನೇ ತರಗತಿ)'}</option>
                      <option value="diploma">{isEn ? 'Polytechnic Diploma / ITI' : 'ಡಿಪ್ಲೋಮಾ / ಐಟಿಐ'}</option>
                      <option value="degree">{isEn ? 'Undergraduate Degree (BA, BSc, BCom, BE, etc.)' : 'ಪದವಿ (ಬಿ.ಎ, ಬಿ.ಎಸ್ಸಿ, ಬಿಕಾಂ, ಇಂಜಿನಿಯರಿಂಗ್)'}</option>
                      <option value="postgrad">{isEn ? 'Postgraduate / Masters / PhD' : 'ಸ್ನಾತಕೋತ್ತರ / ಎಂ.ಎಸ್ಸಿ / ಪಿಎಚ್‌ಡಿ'}</option>
                      <option value="none">{isEn ? 'No formal education' : 'ಶಿಕ್ಷಣವಿಲ್ಲ'}</option>
                    </select>
                  </div>

                  {/* Employment Status */}
                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">{t.employmentLabel}</label>
                    <select
                      value={profile.employmentStatus || 'student'}
                      onChange={(e) => updateProfile({ employmentStatus: e.target.value as any })}
                      className="w-full p-2.5 rounded-lg bg-[#0B1526] border border-slate-700 text-white text-xs focus:outline-none focus:border-blue-500"
                    >
                      <option value="student">{isEn ? 'Full-Time Student' : 'ವಿದ್ಯಾರ್ಥಿ'}</option>
                      <option value="unemployed">{isEn ? 'Unemployed Graduate / Job Seeker' : 'ನಿರುದ್ಯೋಗಿ ಪದವೀಧರ'}</option>
                      <option value="farmer">{isEn ? 'Farmer / Agricultural Landholder' : 'ರೈತ / ಕೃಷಿಕ'}</option>
                      <option value="informal">{isEn ? 'Informal Sector / Street Vendor / Daily Wage' : 'ಬೀದಿ ಬದಿ ವ್ಯಾಪಾರಿ / ದಿನಗೂಲಿ ನೌಕರ'}</option>
                      <option value="salaried">{isEn ? 'Private / Regular Salaried Employee' : 'ವೇತನ ಪಡೆಯುವ ನೌಕರ'}</option>
                      <option value="self_employed">{isEn ? 'Self-Employed / Small Shopkeeper' : 'ಸ್ವಯಂ ಉದ್ಯೋಗಿ / ವ್ಯಾಪಾರಿ'}</option>
                      <option value="retired">{isEn ? 'Retired / Senior' : 'ನಿವೃತ್ತ / ಹಿರಿಯ ನಾಗರಿಕ'}</option>
                    </select>
                  </div>

                  {/* Income Range */}
                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">{t.incomeLabel}</label>
                    <select
                      value={profile.annualIncomeRange || '<50k'}
                      onChange={(e) => updateProfile({ annualIncomeRange: e.target.value as any })}
                      className="w-full p-2.5 rounded-lg bg-[#0B1526] border border-slate-700 text-white text-xs focus:outline-none focus:border-blue-500"
                    >
                      <option value="<50k">{isEn ? 'Below ₹50,000 per year (Destitute / Low income)' : 'ವಾರ್ಷಿಕ ₹50,000 ಗಿಂತ ಕಡಿಮೆ'}</option>
                      <option value="50k-1L">{isEn ? '₹50,000 – ₹1,00,000 per year' : '₹50,000 ರಿಂದ ₹1,00,000'}</option>
                      <option value="1L-2.5L">{isEn ? '₹1,00,000 – ₹2,50,000 per year (Eligible for most OBC scholarships)' : '₹1,00,000 ರಿಂದ ₹2,50,000'}</option>
                      <option value="2.5L-5L">{isEn ? '₹2,50,000 – ₹5,00,000 per year' : '₹2,50,000 ರಿಂದ ₹5,00,000'}</option>
                      <option value=">5L">{isEn ? 'Above ₹5,00,000 per year' : '₹5,00,000 ಕ್ಕಿಂತ ಹೆಚ್ಚು'}</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={() => setQuestionnaireStep(1)}
                    className="px-4 py-2 text-xs text-slate-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>{t.previousStep}</span>
                  </button>
                  <button
                    onClick={() => setQuestionnaireStep(3)}
                    className="px-4 py-2.5 text-xs font-semibold text-white bg-[#3678F6] hover:bg-blue-600 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>{t.nextStep}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Relevant Circumstances */}
            {questionnaireStep === 3 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white">{t.step3Circumstances}</h3>
                  <p className="text-xs text-slate-400">
                    {isEn
                      ? 'Select circumstances that apply to you or your family members. Never enter sensitive passwords or IDs.'
                      : 'ನಿಮಗೆ ಅನ್ವಯಿಸುವ ಸನ್ನಿವೇಶಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ.'}
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  {/* Ration Card Category */}
                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">{t.rationCardLabel}</label>
                    <select
                      value={profile.rationCardCategory || 'BPL'}
                      onChange={(e) => updateProfile({ rationCardCategory: e.target.value as any })}
                      className="w-full p-2.5 rounded-lg bg-[#0B1526] border border-slate-700 text-white text-xs focus:outline-none focus:border-blue-500"
                    >
                      <option value="BPL">{isEn ? 'BPL / PHH (Priority Household - Green/Yellow Card)' : 'ಬಿಪಿಎಲ್ (ಬಡತನ ರೇಖೆಗಿಂತ ಕೆಳಗೆ)'}</option>
                      <option value="AAY">{isEn ? 'Antyodaya Anna Yojana (AAY - Poorest of poor)' : 'ಅಂತ್ಯೋದಯ ಅನ್ನ ಯೋಜನೆ (ಎಎವೈ)'}</option>
                      <option value="APL">{isEn ? 'APL / Non-Priority (White Card)' : 'ಎಪಿಎಲ್ (ಬಡತನ ರೇಖೆಗಿಂತ ಮೇಲೆ)'}</option>
                      <option value="none">{isEn ? 'No Ration Card currently' : 'ಯಾವುದೇ ಪಡಿತರ ಚೀಟಿ ಇಲ್ಲ'}</option>
                      <option value="unknown">{isEn ? 'Do not know / Need assistance' : 'ಗೊತ್ತಿಲ್ಲ'}</option>
                    </select>
                  </div>

                  {/* Circumstance Toggles */}
                  <div className="space-y-2 pt-1">
                    <label className="block text-slate-300 font-medium">{t.circumstancesPrompt}</label>
                    
                    {[
                      { key: 'seekingScholarship', labelEn: 'Seeking student scholarships, hostels, or fee assistance', labelKn: 'ವಿದ್ಯಾರ್ಥಿವೇತನ, ಹಾಸ್ಟೆಲ್ ಅಥವಾ ಶುಲ್ಕ ವಿನಾಯಿತಿ ಅಗತ್ಯವಿದೆ' },
                      { key: 'needsHealthcareHelp', labelEn: 'Seeking healthcare, hospital surgery, or medicine support', labelKn: 'ಆಸ್ಪತ್ರೆ ಚಿಕಿತ್ಸೆ ಅಥವಾ ಆರೋಗ್ಯ ವಿಮೆ ನೆರವು ಬೇಕು' },
                      { key: 'seekingWomenChildWelfare', labelEn: 'Maternal care, women empowerment, or Gruha Lakshmi support', labelKn: 'ತಾಯಿ-ಮಕ್ಕಳ ಆರೈಕೆ ಅಥವಾ ಗೃಹಲಕ್ಷ್ಮಿ ನೆರವು' },
                      { key: 'seekingHousingUtilityHelp', labelEn: 'Gruha Jyothi free electricity or housing welfare assistance', labelKn: 'ಗೃಹಜ್ಯೋತಿ ಉಚಿತ ವಿದ್ಯುತ್ ಅಥವಾ ವಸತಿ ಸಹಾಯ' },
                      { key: 'isFarmer', labelEn: 'Farmer / agricultural landholder (PM-KISAN / Raita Siri)', labelKn: 'ರೈತ / ಕೃಷಿ ಭೂಮಾಲೀಕ (ಪಿಎಂ-ಕಿಸಾನ್)' },
                      { key: 'hasDisability', labelEn: 'Person with benchmark disability (Pension, UDID, free assistive aids)', labelKn: 'ವಿಶೇಷ ಚೇತನರು (ಮಾಸಿಕ ಪಿಂಚಣಿ, ಸಹಾಯಕ ಉಪಕರಣ)' },
                      { key: 'exploringPension', labelEn: 'Senior citizen pension (Sandhya Suraksha ₹1,200/mo)', labelKn: 'ಹಿರಿಯ ನಾಗರಿಕರ ಪಿಂಚಣಿ (ಸಂಧ್ಯಾ ಸುರಕ್ಷಾ)' }
                    ].map((item) => {
                      const isChecked = Boolean((profile as any)[item.key]);
                      return (
                        <button
                          key={item.key}
                          type="button"
                          onClick={() => updateProfile({ [item.key]: !isChecked })}
                          className={`w-full p-3 rounded-xl border text-left flex items-start gap-3 transition-colors cursor-pointer ${
                            isChecked
                              ? 'bg-blue-600/20 text-white border-blue-500/50'
                              : 'bg-[#0B1526] border-slate-800 text-slate-400 hover:text-slate-300'
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 ${
                              isChecked ? 'bg-[#42DCC5] border-[#42DCC5] text-slate-950' : 'border-slate-600'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="text-xs font-medium">
                            {isEn ? item.labelEn : item.labelKn}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={() => setQuestionnaireStep(2)}
                    className="px-4 py-2 text-xs text-slate-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>{t.previousStep}</span>
                  </button>
                  <button
                    onClick={() => setQuestionnaireStep(4)}
                    className="px-4 py-2.5 text-xs font-semibold text-white bg-[#3678F6] hover:bg-blue-600 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>{isEn ? 'Review Profile Summary' : 'ಪ್ರೊಫೈಲ್ ಸಾರಾಂಶ ಪರಿಶೀಲಿಸಿ'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Review Profile */}
            {questionnaireStep === 4 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white">{t.step4Review}</h3>
                  <p className="text-xs text-slate-400">
                    {isEn
                      ? 'Review your entered parameters before running the evaluation engine. You can change any parameter without restarting.'
                      : 'ಹೊಂದಾಣಿಕೆ ಪರೀಕ್ಷೆ ಮಾಡುವ ಮುನ್ನ ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಒಮ್ಮೆ ಪರಿಶೀಲಿಸಿ.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0B1526] border border-slate-800 space-y-3 text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                    <span className="text-slate-400">{t.stateLabel} & {t.districtLabel}:</span>
                    <span className="font-semibold text-white">{profile.state} · {profile.district} ({profile.localityType})</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                    <span className="text-slate-400">{t.ageLabel} / {t.genderLabel}:</span>
                    <span className="font-semibold text-white">
                      {profile.age ? `${profile.age} yrs` : 'Not specified'} · {profile.gender || 'Any'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                    <span className="text-slate-400">{t.educationLevelLabel}:</span>
                    <span className="font-semibold text-white capitalize">{profile.educationLevel || 'None'}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                    <span className="text-slate-400">{t.employmentLabel}:</span>
                    <span className="font-semibold text-white capitalize">{profile.employmentStatus || 'Not specified'}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                    <span className="text-slate-400">{t.rationCardLabel}:</span>
                    <span className="font-semibold text-white">{profile.rationCardCategory || 'BPL'}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-slate-400">{isEn ? 'Selected Needs:' : 'ಆಯ್ಕೆಮಾಡಿದ ಅಗತ್ಯಗಳು:'}</span>
                    <div className="text-right space-y-0.5">
                      {profile.seekingScholarship && <div className="text-emerald-400">Scholarships & Education</div>}
                      {profile.needsHealthcareHelp && <div className="text-blue-400">Healthcare & Hospital</div>}
                      {profile.seekingWomenChildWelfare && <div className="text-rose-400">Gruha Lakshmi & Women</div>}
                      {profile.seekingHousingUtilityHelp && <div className="text-amber-400">Gruha Jyothi Electricity</div>}
                      {profile.isFarmer && <div className="text-emerald-400">Farmer Welfare (PM-KISAN)</div>}
                      {profile.hasDisability && <div className="text-purple-400">Disability Assistance</div>}
                      {profile.exploringPension && <div className="text-blue-400">Senior Pension</div>}
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={() => setQuestionnaireStep(3)}
                    className="px-4 py-2 text-xs text-slate-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>{isEn ? 'Edit Circumstances' : 'ತಿದ್ದುಪಡಿ'}</span>
                  </button>
                  <button
                    onClick={() => setQuestionnaireStep(5)}
                    className="px-5 py-2.5 text-xs md:text-sm font-semibold text-white bg-[#3678F6] hover:bg-blue-600 rounded-lg flex items-center gap-2 shadow-md transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>{t.runMatchingEngine}</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 5: Results Dashboard */}
            {questionnaireStep === 5 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#0B1526] p-4 rounded-xl border border-slate-800">
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span>{t.step5Results}</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {isEn
                        ? `Found ${potentialMatches.length} potential matches for your profile.`
                        : `ನಿಮ್ಮ ಪ್ರೊಫೈಲ್‌ಗೆ ${potentialMatches.length} ಸಂಭಾವ್ಯ ಹೊಂದಾಣಿಕೆಗಳು ದೊರೆತಿವೆ.`}
                    </p>
                  </div>
                  <button
                    onClick={() => setQuestionnaireStep(1)}
                    className="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 cursor-pointer"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>{t.editAnswers}</span>
                  </button>
                </div>

                {/* Filter Tabs (Functional segmented control) */}
                <div className="flex flex-wrap gap-1.5 p-1 bg-[#09111E] rounded-xl border border-slate-800 text-xs">
                  <button
                    onClick={() => setFilterStatus('all')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                      filterStatus === 'all'
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isEn ? 'All Evaluated' : 'ಎಲ್ಲಾ'} ({evaluatedSchemes.length})
                  </button>
                  <button
                    onClick={() => setFilterStatus('potential_match')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                      filterStatus === 'potential_match'
                        ? 'bg-emerald-600 text-white'
                        : 'text-emerald-400 hover:text-white'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{t.potentialMatch} ({potentialMatches.length})</span>
                  </button>
                  <button
                    onClick={() => setFilterStatus('more_info_needed')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                      filterStatus === 'more_info_needed'
                        ? 'bg-amber-600 text-white'
                        : 'text-amber-400 hover:text-white'
                    }`}
                  >
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>{t.moreInfoNeeded} ({moreInfoNeeded.length})</span>
                  </button>
                  <button
                    onClick={() => setFilterStatus('does_not_match')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                      filterStatus === 'does_not_match'
                        ? 'bg-slate-700 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <XCircle className="w-3.5 h-3.5" />
                    <span>{t.doesNotMatch} ({doesNotMatch.length})</span>
                  </button>
                </div>

                {/* Schemes Cards List */}
                <div className="space-y-4">
                  {displayedSchemes.map((evaluation) => {
                    const { scheme } = evaluation;
                    const isExpanded = expandedSchemeId === scheme.id;
                    const saved = isSchemeSaved(scheme.id);

                    return (
                      <div
                        key={scheme.id}
                        className={`rounded-xl border transition-all ${
                          evaluation.status === 'potential_match'
                            ? 'bg-[#0E1E38] border-emerald-500/30'
                            : evaluation.status === 'more_info_needed'
                            ? 'bg-[#121E33] border-amber-500/30'
                            : 'bg-[#0B1526] border-slate-800 opacity-80'
                        }`}
                      >
                        <div className="p-4 space-y-3">
                          {/* Top Tag & Status */}
                          <div className="flex items-center justify-between gap-2 text-xs">
                            <div className="flex items-center gap-2">
                              {evaluation.status === 'potential_match' ? (
                                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                  <span>{t.potentialMatch}</span>
                                </span>
                              ) : evaluation.status === 'more_info_needed' ? (
                                <span className="text-amber-400 font-semibold flex items-center gap-1">
                                  <AlertTriangle className="w-3.5 h-3.5" />
                                  <span>{t.moreInfoNeeded}</span>
                                </span>
                              ) : (
                                <span className="text-slate-400 font-semibold flex items-center gap-1">
                                  <XCircle className="w-3.5 h-3.5" />
                                  <span>{t.doesNotMatch}</span>
                                </span>
                              )}
                              <span className="text-slate-500" aria-hidden="true">·</span>
                              <span className="text-slate-400 capitalize">{scheme.category.replace('_', ' ')}</span>
                            </div>

                            <button
                              onClick={() => toggleSaveScheme(scheme.id)}
                              className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                                saved
                                  ? 'bg-blue-600/20 text-[#42DCC5] border-blue-500/40'
                                  : 'border-slate-700 text-slate-400 hover:text-white'
                              }`}
                              title={saved ? t.savedInWallet : t.saveToWallet}
                            >
                              <Bookmark className={`w-3.5 h-3.5 ${saved ? 'fill-current' : ''}`} />
                            </button>
                          </div>

                          {/* Scheme Title & Authority */}
                          <div>
                            <h4 className="text-base font-bold text-white">
                              {isEn ? scheme.name.en : scheme.name.kn}
                            </h4>
                            <p className="text-xs text-slate-400 mt-0.5">
                              {isEn ? scheme.authority.en : scheme.authority.kn}
                            </p>
                          </div>

                          {/* Why you see this scheme */}
                          <div className="p-2.5 rounded-lg bg-[#081220] border border-slate-800 text-xs text-slate-300">
                            <span className="font-semibold text-[#42DCC5]">{t.whySeeingThis}: </span>
                            <span>{evaluation.whyYouSeeThis}</span>
                          </div>

                          {/* Key Benefits Preview */}
                          <div className="space-y-1 text-xs">
                            {(isEn ? scheme.benefits.en : scheme.benefits.kn).slice(0, 2).map((benefit, bIdx) => (
                              <div key={bIdx} className="flex items-start gap-1.5 text-slate-300">
                                <span className="text-[#42DCC5]">★</span>
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>

                          {/* Action Bar */}
                          <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-800/80">
                            <button
                              onClick={() => setExpandedSchemeId(isExpanded ? null : scheme.id)}
                              className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 font-medium cursor-pointer"
                            >
                              <span>{isExpanded ? (isEn ? 'Hide Details' : 'ವಿವರ ಮರೆಸಿ') : (isEn ? 'View Criteria Breakdown' : 'ಮಾನದಂಡ ವಿವರ ನೋಡಿ')}</span>
                              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                            </button>

                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => setSelectedSchemeForDetail(scheme)}
                                className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 cursor-pointer"
                              >
                                {isEn ? 'Full Guide' : 'ಸಂಪೂರ್ಣ ಮಾಹಿತಿ'}
                              </button>
                              <a
                                href={scheme.officialPortalUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="px-3 py-1.5 rounded-lg bg-[#3678F6] hover:bg-blue-600 text-white text-xs font-semibold flex items-center gap-1 transition-colors"
                              >
                                <span>{t.officialWebsite}</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* Expandable Criteria Checklist */}
                        {isExpanded && (
                          <div className="p-4 border-t border-slate-800 bg-[#081220] space-y-3 text-xs">
                            {evaluation.matchingCriteria.length > 0 && (
                              <div>
                                <h5 className="font-semibold text-emerald-400 mb-1 flex items-center gap-1">
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                  <span>{t.criteriaMatched}:</span>
                                </h5>
                                <ul className="space-y-0.5 text-slate-300 pl-4 list-disc">
                                  {evaluation.matchingCriteria.map((c, i) => (
                                    <li key={i}>{c}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {evaluation.missingCriteria.length > 0 && (
                              <div>
                                <h5 className="font-semibold text-amber-400 mb-1 flex items-center gap-1">
                                  <AlertTriangle className="w-3.5 h-3.5" />
                                  <span>{t.criteriaToConfirm}:</span>
                                </h5>
                                <ul className="space-y-0.5 text-slate-300 pl-4 list-disc">
                                  {evaluation.missingCriteria.map((c, i) => (
                                    <li key={i}>{c}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {evaluation.disqualifyingNotes.length > 0 && (
                              <div>
                                <h5 className="font-semibold text-rose-400 mb-1 flex items-center gap-1">
                                  <XCircle className="w-3.5 h-3.5" />
                                  <span>{t.disqualifyingNotes}:</span>
                                </h5>
                                <ul className="space-y-0.5 text-slate-300 pl-4 list-disc">
                                  {evaluation.disqualifyingNotes.map((c, i) => (
                                    <li key={i}>{c}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ================= COLUMN B: EVERYTHING ABOUT LIFEBRIDGE (Right - 5 cols) ================= */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl bg-[#0F1E36] border border-slate-800 p-6 space-y-6 text-slate-300">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-[11px] uppercase tracking-wider text-[#42DCC5] font-semibold">
                {isEn ? 'Column B' : 'ಭಾಗ ಬಿ'}
              </span>
              <h2 className="text-lg md:text-xl font-bold text-white mt-0.5">
                {isEn ? 'Everything About LifeBridge' : 'ಲೈಫ್‌ಬ್ರಿಡ್ಜ್ ಕಾರ್ಯವಿಧಾನ ಮತ್ತು ಭದ್ರತೆ'}
              </h2>
            </div>

            {/* Visual Process Flow */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                {isEn ? 'How the Platform Works' : 'ಕಾರ್ಯನಿರ್ವಹಣೆಯ ಹಂತಗಳು'}
              </h4>
              <div className="p-3.5 rounded-xl bg-[#0B1526] border border-slate-800 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#42DCC5] font-semibold">
                  <span>Discover</span>
                  <span>→</span>
                  <span>Check</span>
                  <span>→</span>
                  <span>Understand</span>
                  <span>→</span>
                  <span>Prepare</span>
                  <span>→</span>
                  <span className="text-amber-400">Apply</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {isEn
                    ? '1. Discover available public schemes. 2. Check criteria against your profile. 3. Understand verified benefits. 4. Prepare required documents. 5. Apply directly through the official government department portal.'
                    : 'ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ, ನಿಯಮಗಳನ್ನು ಪರಿಶೀಲಿಸಿ, ದಾಖಲೆ ಸಿದ್ಧಪಡಿಸಿ ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಮಾತ್ರ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.'}
                </p>
              </div>
            </div>

            {/* Core Mission & The Problem It Solves */}
            <div className="space-y-2 text-xs">
              <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                {isEn ? 'The Public Problem LifeBridge Solves' : 'ಲೈಫ್‌ಬ್ರಿಡ್ಜ್ ಪರಿಹರಿಸುವ ಸಮಸ್ಯೆ'}
              </h4>
              <p className="text-slate-300 leading-relaxed">
                {isEn
                  ? 'Millions of eligible citizens miss out on scholarships, food rations, and medical coverage because information is scattered across hundreds of departmental websites, often leading people to costly middlemen.'
                  : 'ಸರ್ಕಾರದ ನೂರಾರು ಜನಪರ ಯೋಜನೆಗಳ ಮಾಹಿತಿ ಚದುರಿಹೋಗಿರುವುದರಿಂದ ಅರ್ಹ ನಾಗರಿಕರು ಮತ್ತು ವಿದ್ಯಾರ್ಥಿಗಳು ಸೌಲಭ್ಯಗಳಿಂದ ವಂಚಿತರಾಗುತ್ತಾರೆ. ಲೈಫ್‌ಬ್ರಿಡ್ಜ್ ಯಾವುದೇ ಮಧ್ಯವರ್ತಿಗಳಿಲ್ಲದೆ ನೇರ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತದೆ.'}
              </p>
            </div>

            {/* What LifeBridge CANNOT Do (Crucial Trust Statement) */}
            <div className="p-4 rounded-xl bg-[#171322] border border-rose-900/50 space-y-2 text-xs">
              <h4 className="font-semibold text-rose-300 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-rose-400" />
                <span>{isEn ? 'What LifeBridge Cannot Do' : 'ಲೈಫ್‌ಬ್ರಿಡ್ಜ್ ಏನು ಮಾಡುವುದಿಲ್ಲ?'}</span>
              </h4>
              <ul className="space-y-1 text-slate-300 pl-4 list-disc text-[11px] leading-relaxed">
                <li>
                  {isEn
                    ? 'Cannot approve applications or grant benefits (only official government authorities determine eligibility).'
                    : 'ಅರ್ಜಿಗಳನ್ನು ಮಂಜೂರು ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ (ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಇಲಾಖೆಗಳಿಗೆ ಮಾತ್ರ ಹಕ್ಕಿದೆ).'}
                </li>
                <li>
                  {isEn
                    ? 'Does not accept Aadhaar numbers, OTPs, or passwords.'
                    : 'ಆಧಾರ್ ಸಂಖ್ಯೆ, ಒಟಿಪಿ ಅಥವಾ ಬ್ಯಾಂಕ್ ವಿವರಗಳನ್ನು ಸಂಗ್ರಹಿಸುವುದಿಲ್ಲ.'}
                </li>
                <li>
                  {isEn
                    ? 'Does not act as an agent or financial broker.'
                    : 'ಯಾವುದೇ ಮಧ್ಯವರ್ತಿ ಅಥವಾ ಏಜೆಂಟ್ ಆಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುವುದಿಲ್ಲ.'}
                </li>
              </ul>
            </div>

            {/* Privacy Protections */}
            <div className="p-4 rounded-xl bg-[#0B1526] border border-slate-800 space-y-2 text-xs">
              <h4 className="font-semibold text-emerald-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>{isEn ? '100% Client-Side Privacy' : '೧೦೦% ಬ್ರೌಸರ್ ಗೌಪ್ಯತೆ'}</span>
              </h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {isEn
                  ? 'Your profile information and wallet remain strictly within your device’s local browser storage. You can delete all data at any moment with one click.'
                  : 'ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಮತ್ತು ಉಳಿಸಿದ ಮಾಹಿತಿ ಕೇವಲ ನಿಮ್ಮ ಮೊಬೈಲ್ ಅಥವಾ ಕಂಪ್ಯೂಟರ್‌ನಲ್ಲಿ ಮಾತ್ರ ಉಳಿಯುತ್ತದೆ.'}
              </p>
            </div>

            {/* Quick Section Shortcuts */}
            <div className="space-y-2 pt-1 text-xs">
              <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                {isEn ? 'Direct Civic Sections' : 'ನೇರ ಸೇವಾ ವಿಭಾಗಗಳು'}
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setCurrentView('healthcare')}
                  className="p-2.5 rounded-lg bg-[#0B1526] border border-slate-800 hover:border-blue-500/50 text-left text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <p className="font-bold text-white">{isEn ? 'Healthcare' : 'ಆರೋಗ್ಯ'}</p>
                  <p className="text-[10px] text-slate-400">PM-JAY & Hospitals</p>
                </button>
                <button
                  onClick={() => setCurrentView('food_ration')}
                  className="p-2.5 rounded-lg bg-[#0B1526] border border-slate-800 hover:border-amber-500/50 text-left text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <p className="font-bold text-white">{isEn ? 'Ration Services' : 'ಪಡಿತರ ಸೇವೆ'}</p>
                  <p className="text-[10px] text-slate-400">Anna Bhagya & FPS</p>
                </button>
                <button
                  onClick={() => setCurrentView('education')}
                  className="p-2.5 rounded-lg bg-[#0B1526] border border-slate-800 hover:border-teal-500/50 text-left text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <p className="font-bold text-white">{isEn ? 'Scholarships' : 'ವಿದ್ಯಾರ್ಥಿವೇತನ'}</p>
                  <p className="text-[10px] text-slate-400">SSP & Colleges</p>
                </button>
                <button
                  onClick={() => setCurrentView('maps')}
                  className="p-2.5 rounded-lg bg-[#0B1526] border border-slate-800 hover:border-blue-500/50 text-left text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <p className="font-bold text-white">{isEn ? 'Public Maps' : 'ಸೇವಾ ನಕ್ಷೆ'}</p>
                  <p className="text-[10px] text-slate-400">8 Public Layers</p>
                </button>
              </div>
            </div>

            {/* Mini FAQ */}
            <div className="space-y-3 pt-2 border-t border-slate-800">
              <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                {isEn ? 'Frequently Asked Questions' : 'ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೋತ್ತರಗಳು'}
              </h4>
              <details className="text-xs text-slate-300 group cursor-pointer">
                <summary className="font-medium text-white hover:text-[#42DCC5] transition-colors py-1">
                  {isEn ? 'Is LifeBridge an official government agency?' : 'ಲೈಫ್‌ಬ್ರಿಡ್ಜ್ ಸರ್ಕಾರಿ ಸಂಸ್ಥೆಯೇ?'}
                </summary>
                <p className="text-[11px] text-slate-400 pt-1 leading-relaxed">
                  {isEn
                    ? 'No. LifeBridge is an independent civic information platform created to assist citizens in discovering and navigating official public services.'
                    : 'ಇಲ್ಲ. ಲೈಫ್‌ಬ್ರಿಡ್ಜ್ ನಾಗರಿಕರಿಗೆ ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಸೇವೆಗಳನ್ನು ಸುಲಭವಾಗಿ ಕಂಡುಕೊಳ್ಳಲು ನೆರವಾಗುವ ಸ್ವತಂತ್ರ ಮಾರ್ಗದರ್ಶನ ವೇದಿಕೆಯಾಗಿದೆ.'}
                </p>
              </details>

              <details className="text-xs text-slate-300 group cursor-pointer">
                <summary className="font-medium text-white hover:text-[#42DCC5] transition-colors py-1">
                  {isEn ? 'Why does LifeBridge not ask for Aadhaar numbers?' : 'ಲೈಫ್‌ಬ್ರಿಡ್ಜ್ ಆಧಾರ್ ಸಂಖ್ಯೆ ಏಕೆ ಕೇಳುವುದಿಲ್ಲ?'}
                </summary>
                <p className="text-[11px] text-slate-400 pt-1 leading-relaxed">
                  {isEn
                    ? 'To safeguard citizen privacy and eliminate identity theft risks. You only need Aadhaar when applying directly on official government gateways.'
                    : 'ನಾಗರಿಕರ ಗೌಪ್ಯತೆಯನ್ನು ರಕ್ಷಿಸಲು. ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್‌ಗಳಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸುವಾಗ ಮಾತ್ರ ಆಧಾರ್ ಅಗತ್ಯವಿರುತ್ತದೆ.'}
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
