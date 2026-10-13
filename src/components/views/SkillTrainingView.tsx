import React, { useState } from 'react';
import { 
  GraduationCap, Briefcase, Search, Filter, CheckCircle2, 
  ExternalLink, Clock, Award, BookOpen, Users, Sparkles, 
  HelpCircle, ChevronRight, ShieldCheck, Banknote, ArrowRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { SKILL_COURSES_DATABASE, SkillCourse } from '../../data/skillsCourses';

export const SkillTrainingView: React.FC = () => {
  const { language, setCurrentView } = useApp();
  const isEn = language === 'en';

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCourse, setActiveCourse] = useState<SkillCourse | null>(null);

  const categories = [
    { id: 'all', labelEn: 'All Skill Courses (12)', labelKn: 'ಎಲ್ಲಾ ಕೌಶಲ್ಯ ಕೋರ್ಸ್‌ಗಳು (೧೨)' },
    { id: 'technical_iti', labelEn: 'ITI & Technical Trades', labelKn: 'ಐಟಿಐ & ತಾಂತ್ರಿಕ ವೃತ್ತಿ' },
    { id: 'digital_it', labelEn: 'Digital, Computers & English', labelKn: 'ಕಂಪ್ಯೂಟರ್ & ಇಂಗ್ಲಿಷ್' },
    { id: 'women_exclusive', labelEn: 'Women-Only Training', labelKn: 'ಮಹಿಳೆಯರಿಗೆ ಪ್ರತ್ಯೇಕ' },
    { id: 'trade_craft', labelEn: 'Plumbing, Mechanic & Driver', labelKn: 'ಪ್ಲಂಬಿಂಗ್, ಡ್ರೈವಿಂಗ್, ಮೆಕ್ಯಾನಿಕ್' },
    { id: 'exam_coaching', labelEn: 'Free Govt Exam Coaching', labelKn: 'ಉಚಿತ ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷೆ' },
    { id: 'rural_youth', labelEn: 'Apprenticeship & Stipend', labelKn: 'ಅಪ್ರೆಂಟಿಸ್ & ಶಿಷ್ಯವೇತನ' },
    { id: 'self_employment', labelEn: 'Mobile Repair & Self-Employment', labelKn: 'ಮೊಬೈಲ್ ರಿಪೇರಿ & ಸ್ವಯಂ ಉದ್ಯೋಗ' },
    { id: 'dropouts_bridge', labelEn: 'Courses for School Dropouts', labelKn: 'ಶಾಲೆ ಬಿಟ್ಟ ಯುವಕರಿಗೆ' }
  ];

  const filteredCourses = SKILL_COURSES_DATABASE.filter(course => {
    const matchesCat = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = 
      course.title.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.title.kn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.provider.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.en.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900/50 via-slate-900 to-indigo-950/60 border border-blue-800/40 rounded-2xl p-6 lg:p-8 mb-8 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-400/30 rounded-full text-xs font-semibold text-[#42DCC5] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isEn ? 'Government-Sponsored Vocational Training' : 'ಸರ್ಕಾರಿ ಪ್ರಾಯೋಜಿತ ವೃತ್ತಿ ಕೌಶಲ್ಯ ತರಬೇತಿ'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              {isEn ? 'Skill Training & Vocational Courses Hub' : 'ಉಚಿತ ಕೌಶಲ್ಯ ತರಬೇತಿ ಮತ್ತು ವೃತ್ತಿಪರ ಕೋರ್ಸ್‌ಗಳ ಕೇಂದ್ರ'}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {isEn 
                ? 'Discover 100% free government skill programs, ITI admissions, PMKVY 4.0 courses, stipend-backed apprenticeships, women-only residential centers, and competitive exam coaching.'
                : 'ಸರ್ಕಾರಿ ಉಚಿತ ಐಟಿಐ ಪ್ರವೇಶ, ಪಿಎಂಕೆವಿವೈ ಕಂಪ್ಯೂಟರ್ ಕೋರ್ಸ್, ಮಹಿಳೆಯರಿಗೆ ಉಚಿತ ವಸತಿ ಹೊಲಿಗೆ/ಬ್ಯೂಟಿಷಿಯನ್ ತರಬೇತಿ, ಉಚಿತ ಪರೀಕ್ಷಾ ಕೋಚಿಂಗ್ ಮತ್ತು ಶಿಷ್ಯವೇತನ ಸಹಿತ ಅಪ್ರೆಂಟಿಸ್ ಮಾಹಿತಿ.'}
            </p>
          </div>
          <div className="flex flex-col gap-2 shrink-0">
            <button
              onClick={() => setCurrentView('dashboard')}
              className="px-4 py-2.5 bg-[#3678F6] hover:bg-blue-600 text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-blue-500/20"
            >
              <span>{isEn ? 'Check My Eligibility' : 'ನನ್ನ ಅರ್ಹತೆ ಪರಿಶೀಲಿಸಿ'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-[11px] text-slate-400 text-center">
              {isEn ? 'Zero Fees • Recognized Certifications' : 'ಉಚಿತ ತರಬೇತಿ • ಅಧಿಕೃತ ಪ್ರಮಾಣಪತ್ರ'}
            </span>
          </div>
        </div>

        {/* Quick Highlights Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-800/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-[#42DCC5]">
              <Banknote className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-slate-400">{isEn ? 'Monthly Stipend' : 'ಮಾಸಿಕ ಭತ್ಯೆ'}</p>
              <p className="text-xs sm:text-sm font-bold text-white">₹1,500 – ₹14,000</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-slate-400">{isEn ? 'Certification' : 'ಪ್ರಮಾಣಪತ್ರ'}</p>
              <p className="text-xs sm:text-sm font-bold text-white">NCVT / NSQF QR</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-slate-400">{isEn ? 'Women Quota' : 'ಮಹಿಳಾ ಮೀಸಲಾತಿ'}</p>
              <p className="text-xs sm:text-sm font-bold text-white">Free Food & Hostel</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-slate-400">{isEn ? 'Job Linkage' : 'ಉದ್ಯೋಗಾವಕಾಶ'}</p>
              <p className="text-xs sm:text-sm font-bold text-white">Govt Job Melas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Category Filters */}
      <div className="space-y-4 mb-6">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isEn ? "Search courses (e.g. Electrician, Tailoring, Computer, Driving, Coaching, PMKVY)..." : "ಕೋರ್ಸ್ ಹುಡುಕಿ (ಉದಾ: ಎಲೆಕ್ಟ್ರಿಷಿಯನ್, ಹೊಲಿಗೆ, ಕಂಪ್ಯೂಟರ್, ಡ್ರೈವಿಂಗ್)..."}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#42DCC5] transition-colors"
            />
          </div>
        </div>

        {/* Categories Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#3678F6] text-white shadow-md shadow-blue-500/20 font-semibold'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700/60'
              }`}
            >
              {isEn ? cat.labelEn : cat.labelKn}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCourses.map((course) => (
          <div 
            key={course.id}
            className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-900/10 transition-all group"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-2.5">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-blue-500/10 text-[#42DCC5] border border-blue-500/20">
                  {course.category.replace('_', ' ').toUpperCase()}
                </span>
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded-md">
                  {isEn ? '100% Free' : 'ಉಚಿತ'}
                </span>
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-[#42DCC5] transition-colors line-clamp-2 mb-1.5">
                {isEn ? course.title.en : course.title.kn}
              </h3>

              <p className="text-xs text-slate-400 mb-3 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="line-clamp-1">{isEn ? course.provider.en : course.provider.kn}</span>
              </p>

              <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                {isEn ? course.description.en : course.description.kn}
              </p>

              <div className="space-y-2 py-3 border-y border-slate-800/80 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {isEn ? 'Duration' : 'ಅವಧಿ'}:
                  </span>
                  <span className="font-medium text-white">{isEn ? course.duration.en : course.duration.kn}</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400 flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                    {isEn ? 'Eligibility' : 'ಅರ್ಹತೆ'}:
                  </span>
                  <span className="font-medium text-white line-clamp-1 text-right">{isEn ? course.eligibility.en : course.eligibility.kn}</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400 flex items-center gap-1">
                    <Banknote className="w-3.5 h-3.5 text-emerald-400" />
                    {isEn ? 'Stipend / Cost' : 'ಶಿಷ್ಯವೇತನ'}:
                  </span>
                  <span className="font-semibold text-emerald-300 line-clamp-1 text-right">{isEn ? course.stipendOrCost.en : course.stipendOrCost.kn}</span>
                </div>
              </div>

              {/* Syllabus pills */}
              <div className="mt-3">
                <p className="text-[11px] font-semibold text-slate-400 mb-1.5">
                  {isEn ? 'Key Topics:' : 'ಪ್ರಮುಖ ವಿಷಯಗಳು:'}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {(isEn ? course.syllabusHighlights.en : course.syllabusHighlights.kn).slice(0, 3).map((item, idx) => (
                    <span key={idx} className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-md border border-slate-700/60">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between gap-2">
              <button
                onClick={() => setActiveCourse(course)}
                className="text-xs font-semibold text-blue-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span>{isEn ? 'View Syllabus' : 'ವಿವರ ನೋಡಿ'}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={course.officialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-blue-600/20 hover:bg-blue-600 border border-blue-500/40 text-blue-300 hover:text-white text-xs font-medium rounded-lg flex items-center gap-1.5 transition-all"
              >
                <span>{isEn ? 'Official Portal' : 'ಅಧಿಕೃತ ಪೋರ್ಟಲ್'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Course Detail Modal */}
      {activeCourse && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full p-6 text-white max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-semibold text-[#42DCC5] bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/30">
                  {activeCourse.category.replace('_', ' ').toUpperCase()}
                </span>
                <h2 className="text-xl font-bold mt-2 text-white">
                  {isEn ? activeCourse.title.en : activeCourse.title.kn}
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  {isEn ? activeCourse.provider.en : activeCourse.provider.kn}
                </p>
              </div>
              <button
                onClick={() => setActiveCourse(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              {isEn ? activeCourse.description.en : activeCourse.description.kn}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-slate-800/60 rounded-xl border border-slate-700/60 mb-5 text-xs">
              <div>
                <p className="text-slate-400">{isEn ? 'Duration' : 'ಅವಧಿ'}</p>
                <p className="font-semibold text-white mt-0.5">{isEn ? activeCourse.duration.en : activeCourse.duration.kn}</p>
              </div>
              <div>
                <p className="text-slate-400">{isEn ? 'Eligibility' : 'ಅರ್ಹತೆ'}</p>
                <p className="font-semibold text-white mt-0.5">{isEn ? activeCourse.eligibility.en : activeCourse.eligibility.kn}</p>
              </div>
              <div>
                <p className="text-slate-400">{isEn ? 'Stipend / Fee' : 'ಶಿಷ್ಯವೇತನ / ಶುಲ್ಕ'}</p>
                <p className="font-semibold text-emerald-400 mt-0.5">{isEn ? activeCourse.stipendOrCost.en : activeCourse.stipendOrCost.kn}</p>
              </div>
              <div>
                <p className="text-slate-400">{isEn ? 'Certification' : 'ಪ್ರಮಾಣಪತ್ರ'}</p>
                <p className="font-semibold text-blue-300 mt-0.5">{isEn ? activeCourse.certification.en : activeCourse.certification.kn}</p>
              </div>
            </div>

            {/* Job Placement & Placement Linkage */}
            <div className="mb-5 p-3.5 bg-blue-950/30 border border-blue-800/40 rounded-xl">
              <h4 className="text-xs font-bold text-[#42DCC5] mb-1 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" />
                {isEn ? 'Job Placement & Livelihood Opportunities:' : 'ಉದ್ಯೋಗ ಮತ್ತು ಜೀವನೋಪಾಯದ ಅವಕಾಶಗಳು:'}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isEn ? activeCourse.jobLinkage.en : activeCourse.jobLinkage.kn}
              </p>
            </div>

            {/* Syllabus breakdown */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-300 mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                {isEn ? 'Curriculum & Practical Syllabus Modules:' : 'ಪಠ್ಯಕ್ರಮ ಮತ್ತು ಪ್ರಾಯೋಗಿಕ ತರಬೇತಿ ವಿಷಯಗಳು:'}
              </h4>
              <ul className="space-y-1.5">
                {(isEn ? activeCourse.syllabusHighlights.en : activeCourse.syllabusHighlights.kn).map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-start gap-2 bg-slate-800/40 px-3 py-2 rounded-lg border border-slate-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {activeCourse.admissionProcedure && (
              <div className="mb-6 p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-200">
                <p className="font-bold mb-1">{isEn ? 'Admission Procedure:' : 'ಪ್ರವೇಶ ಪ್ರಕ್ರಿಯೆ:'}</p>
                <p>{isEn ? activeCourse.admissionProcedure.en : activeCourse.admissionProcedure.kn}</p>
              </div>
            )}

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
              <button
                onClick={() => setActiveCourse(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                {isEn ? 'Close' : 'ಮುಚ್ಚಿ'}
              </button>
              <a
                href={activeCourse.officialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#3678F6] hover:bg-blue-600 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all"
              >
                <span>{isEn ? 'Apply on Official Portal' : 'ಅಧಿಕೃತ ತಾಣದಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
