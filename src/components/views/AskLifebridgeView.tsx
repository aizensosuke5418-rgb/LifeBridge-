import React, { useState } from 'react';
import { 
  MessageSquare, Send, Sparkles, HelpCircle, CheckCircle2, 
  ExternalLink, ArrowRight, ShieldCheck, RefreshCw, Bookmark 
} from 'lucide-react';
import { SCHEMES_DATABASE } from '../../data/schemes';
import { PUBLIC_FACILITIES_DATABASE } from '../../data/facilities';
import { useApp } from '../../context/AppContext';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  textEn: string;
  textKn: string;
  relatedSchemeId?: string;
  portalLink?: string;
  portalLabel?: string;
}

export const AskLifebridgeView: React.FC = () => {
  const { language, setSelectedSchemeForDetail, setCurrentView, t } = useApp();
  const isEn = language === 'en';

  const defaultPrompts = [
    {
      qEn: 'Which scholarships should I explore as a college student?',
      qKn: 'ಕಾಲೇಜು ವಿದ್ಯಾರ್ಥಿಯಾಗಿ ನಾನು ಯಾವ ವಿದ್ಯಾರ್ಥಿವೇತನಗಳನ್ನು ಪಡೆಯಬಹುದು?',
      ansEn: 'In Karnataka, college students should explore: 1) Karnataka State Scholarship Portal (SSP) for Post-Matric fee reimbursement and maintenance allowance; 2) Vidyasiri for ₹1,500/month food & hostel stipend if government hostel seats were not allotted; 3) National Scholarship Portal (NSP) for Central Sector scholarships. All require Nadakacheri RD numbers.',
      ansKn: 'ಕರ್ನಾಟಕದಲ್ಲಿ ಕಾಲೇಜು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ: ೧) ಎಸ್‌ಎಸ್‌ಪಿ ಪೋಸ್ಟ್-ಮೆಟ್ರಿಕ್ ವಿದ್ಯಾರ್ಥಿವೇತನ ಮತ್ತು ಶುಲ್ಕ ಮರುಪಾವತಿ; ೨) ಹಾಸ್ಟೆಲ್ ಸಿಗದ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ವಿದ್ಯಾಸಿರಿ ಮಾಸಿಕ ₹1,500 ಊಟ-ವಸತಿ ಭತ್ಯೆ; ೩) ರಾಷ್ಟ್ರೀಯ ವಿದ್ಯಾರ್ಥಿವೇತನ (ಎನ್‌ಎಸ್‌ಪಿ). ನಾಡಕಚೇರಿ ಆರ್‌ಡಿ ಜಾತಿ-ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ ಕಡ್ಡಾಯ.',
      schemeId: 'karnataka-ssp-scholarship',
      portalLink: 'https://ssp.postmatric.karnataka.gov.in/',
      portalLabel: 'SSP Karnataka Portal'
    },
    {
      qEn: 'How do I apply for Gruha Lakshmi ₹2,000 monthly allowance?',
      qKn: 'ಗೃಹಲಕ್ಷ್ಮಿ ₹2,000 ಮಾಸಿಕ ನೆರವಿಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸುವುದು ಹೇಗೆ?',
      ansEn: 'To apply for Gruha Lakshmi: 1) Verify that the woman is designated as head of family in your BPL/AAY/APL ration card; 2) Visit your nearest Grama One, Karnataka One, or Bangalore One centre with original Aadhaar and RC number; 3) Registration is completely free; 4) Ensure the woman bank account has active Aadhaar-DBT/NPCI seeding to receive the ₹2,000 transfer.',
      ansKn: 'ಗೃಹಲಕ್ಷ್ಮಿ ಯೋಜನೆಗೆ: ೧) ರೇಷನ್ ಕಾರ್ಡ್‌ನಲ್ಲಿ ಮಹಿಳೆ ಕುಟುಂಬದ ಯಜಮಾನಿ ಎಂದು ದಾಖಲಾಗಿರಬೇಕು; ೨) ಬೆಂಗಳೂರು ಒನ್, ಗ್ರಾಮ ಒನ್ ಕೇಂದ್ರಕ್ಕೆ ಮೂಲ ಆಧಾರ್ ಮತ್ತು ರೇಷನ್ ಕಾರ್ಡ್ ತೆಗೆದುಕೊಂಡು ಹೋಗಿ ಉಚಿತವಾಗಿ ನೋಂದಾಯಿಸಿ; ೩) ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಆಧಾರ್-ಡಿಬಿಟಿ ಸಕ್ರಿಯವಾಗಿರಬೇಕು.',
      schemeId: 'karnataka-gruha-lakshmi',
      portalLink: 'https://sevasindhugs.karnataka.gov.in/',
      portalLabel: 'Seva Sindhu GS Portal'
    },
    {
      qEn: 'What documents are needed for Ayushman Bharat hospital care?',
      qKn: 'ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ಆಸ್ಪತ್ರೆ ಚಿಕಿತ್ಸೆಗೆ ಯಾವ ದಾಖಲೆಗಳು ಬೇಕು?',
      ansEn: 'For cashless hospitalization up to ₹5 Lakhs: 1) Valid BPL / Antyodaya Ration Card; 2) Patient Aadhaar Card; 3) Ayushman / ABHA Health Card (can be generated instantly at the hospital Arogya Mitra desk); 4) For admission to private empaneled hospitals, an official referral letter/code from a government public hospital is required.',
      ansKn: 'ವರ್ಷಕ್ಕೆ ₹5 ಲಕ್ಷದವರೆಗೆ ನಗದು ರಹಿತ ಚಿಕಿತ್ಸೆಗಾಗಿ: ೧) ಚಾಲ್ತಿಯಲ್ಲಿರುವ ಬಿಪಿಎಲ್ ಅಥವಾ ಅಂತ್ಯೋದಯ ಪಡಿತರ ಚೀಟಿ; ೨) ರೋಗಿಯ ಆಧಾರ್ ಕಾರ್ಡ್; ೩) ಆಸ್ಪತ್ರೆಯಲ್ಲಿರುವ ಆರೋಗ್ಯ ಮಿತ್ರ ಡೆಸ್ಕ್‌ನಲ್ಲಿ ಆಭಾ ಕಾರ್ಡ್; ೪) ಖಾಸಗಿ ಆಸ್ಪತ್ರೆಗೆ ದಾಖಲಾಗಲು ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಯಿಂದ ರೆಫರಲ್ ಕೋಡ್ ಕಡ್ಡಾಯ.',
      schemeId: 'ayushman-bharat-pmjay',
      portalLink: 'https://beneficiary.nha.gov.in/',
      portalLabel: 'NHA Beneficiary Portal'
    },
    {
      qEn: 'How can I check Anna Bhagya ration DBT cash status online?',
      qKn: 'ಅನ್ನಭಾಗ್ಯ ನಗದು ಡಿಬಿಟಿ ಜಮೆ ವಿವರವನ್ನು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ನೋಡುವುದು ಹೇಗೆ?',
      ansEn: 'Visit the official Ahara Karnataka DBT Status page at ahara.karnataka.gov.in/status_dbt. Select your district, taluk, year, and month, and enter your 10-digit Ration Card number. The portal shows the exact ₹170 per member amount credited to the head of family bank account.',
      ansKn: 'ahara.karnataka.gov.in/status_dbt ವೆಬ್‌ಸೈಟ್‌ಗೆ ತೆರಳಿ. ನಿಮ್ಮ ಜಿಲ್ಲೆ, ತಾಲೂಕು, ವರ್ಷ, ತಿಂಗಳು ಆಯ್ಕೆಮಾಡಿ 10 ಅಂಕಿಯ ರೇಷನ್ ಕಾರ್ಡ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ. ಪ್ರತಿ ಸದಸ್ಯರಿಗೆ ಜಮೆಯಾಗಿರುವ ₹170 ನಗದು ವಿವರ ತಿಳಿಯುತ್ತದೆ.',
      schemeId: 'karnataka-anna-bhagya',
      portalLink: 'https://ahara.karnataka.gov.in/status_dbt',
      portalLabel: 'Ahara DBT Status'
    },
    {
      qEn: 'Who is eligible for Gruha Jyothi free electricity?',
      qKn: 'ಗೃಹಜ್ಯೋತಿ ಉಚಿತ ವಿದ್ಯುತ್ ಯೋಜನೆಗೆ ಯಾರು ಅರ್ಹರು?',
      ansEn: 'Domestic household electricity consumers in Karnataka consuming within 200 monthly units are eligible. The entitlement is calculated based on your prior 12-month average monthly consumption plus 10%. Apply online with your ESCOM Account ID and Aadhaar card on sevasindhugs.karnataka.gov.in.',
      ansKn: 'ತಿಂಗಳಿಗೆ 200 ಯೂನಿಟ್‌ವರೆಗೆ ಬಳಸುವ ಕರ್ನಾಟಕದ ಎಲ್ಲಾ ಗೃಹಬಳಕೆದಾರರಿಗೆ ಅನ್ವಯ. ಹಿಂದಿನ 12 ತಿಂಗಳ ಸರಾಸರಿ ಬಳಕೆಯ ಮೇಲೆ ಶೇ.10 ಹೆಚ್ಚುವರಿ ನೀಡಲಾಗುತ್ತದೆ. ಬೆಸ್ಕಾಂ ಖಾತೆ ಐಡಿ ಮತ್ತು ಆಧಾರ್ ಮೂಲಕ ಸೇವಾ ಸಿಂಧು ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.',
      schemeId: 'karnataka-gruha-jyothi',
      portalLink: 'https://sevasindhugs.karnataka.gov.in/',
      portalLabel: 'Gruha Jyothi Apply'
    }
  ];

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'assistant',
      textEn: 'Namaskara! I am Ask LifeBridge, your civic navigator. I can answer questions about verified Karnataka and Central welfare schemes, required documents, application portals, and hospital referral processes. Select a common prompt below or ask any question.',
      textKn: 'ನಮಸ್ಕಾರ! ನಾನು ಲೈಫ್‌ಬ್ರಿಡ್ಜ್ ನಾಗರಿಕ ಮಾರ್ಗದರ್ಶಿ. ಕರ್ನಾಟಕ ಮತ್ತು ಕೇಂದ್ರ ಸರ್ಕಾರದ ಯೋಜನೆಗಳು, ದಾಖಲೆಗಳು, ಅರ್ಜಿ ಸಲ್ಲಿಸುವ ವಿಧಾನ ಮತ್ತು ಆಸ್ಪತ್ರೆ ಸೇವೆಗಳ ಬಗ್ಗೆ ಮಾಹಿತಿ ನೀಡಬಲ್ಲೆ. ಕೆಳಗಿನ ಪ್ರಶ್ನೆಗಳನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ ಅಥವಾ ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ.'
    }
  ]);

  const [inputVal, setInputVal] = useState('');

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      textEn: text,
      textKn: text
    };

    setMessages(prev => [...prev, userMsg]);
    setInputVal('');

    // Match against our structured civic knowledge base
    const qLower = text.toLowerCase();
    let matchedScheme = SCHEMES_DATABASE.find(s => 
      s.name.en.toLowerCase().includes(qLower) || 
      (s.shortName && s.shortName.toLowerCase().includes(qLower)) ||
      qLower.includes(s.category)
    );

    let replyEn = '';
    let replyKn = '';
    let linkUrl = '';
    let linkLabel = '';
    let schemeRefId: string | undefined = undefined;

    if (qLower.includes('scholarship') || qLower.includes('ssp') || qLower.includes('college') || qLower.includes('fee')) {
      replyEn = defaultPrompts[0].ansEn;
      replyKn = defaultPrompts[0].ansKn;
      schemeRefId = 'karnataka-ssp-scholarship';
      linkUrl = 'https://ssp.postmatric.karnataka.gov.in/';
      linkLabel = 'SSP Portal';
    } else if (qLower.includes('lakshmi') || qLower.includes('women') || qLower.includes('2000') || qLower.includes('female')) {
      replyEn = defaultPrompts[1].ansEn;
      replyKn = defaultPrompts[1].ansKn;
      schemeRefId = 'karnataka-gruha-lakshmi';
      linkUrl = 'https://sevasindhugs.karnataka.gov.in/';
      linkLabel = 'Seva Sindhu';
    } else if (qLower.includes('health') || qLower.includes('hospital') || qLower.includes('ayushman') || qLower.includes('doctor') || qLower.includes('pmjay')) {
      replyEn = defaultPrompts[2].ansEn;
      replyKn = defaultPrompts[2].ansKn;
      schemeRefId = 'ayushman-bharat-pmjay';
      linkUrl = 'https://beneficiary.nha.gov.in/';
      linkLabel = 'NHA Beneficiary Portal';
    } else if (qLower.includes('ration') || qLower.includes('rice') || qLower.includes('food') || qLower.includes('anna') || qLower.includes('bhagya') || qLower.includes('bpl')) {
      replyEn = defaultPrompts[3].ansEn;
      replyKn = defaultPrompts[3].ansKn;
      schemeRefId = 'karnataka-anna-bhagya';
      linkUrl = 'https://ahara.karnataka.gov.in/status_dbt';
      linkLabel = 'Ahara DBT';
    } else if (qLower.includes('electricity') || qLower.includes('current') || qLower.includes('power') || qLower.includes('jyothi') || qLower.includes('bescom')) {
      replyEn = defaultPrompts[4].ansEn;
      replyKn = defaultPrompts[4].ansKn;
      schemeRefId = 'karnataka-gruha-jyothi';
      linkUrl = 'https://sevasindhugs.karnataka.gov.in/';
      linkLabel = 'Gruha Jyothi Portal';
    } else if (matchedScheme) {
      replyEn = `For ${matchedScheme.name.en}: ${matchedScheme.description.en} Key benefits include: ${matchedScheme.benefits.en.join('; ')}. Mandatory documents: ${matchedScheme.requiredDocuments.mandatory.en.join(', ')}.`;
      replyKn = `${matchedScheme.name.kn} ಕುರಿತು: ${matchedScheme.description.kn} ಪ್ರಮುಖ ಸವಲತ್ತುಗಳು: ${matchedScheme.benefits.kn.join('; ')}. ಕಡ್ಡಾಯ ದಾಖಲೆಗಳು: ${matchedScheme.requiredDocuments.mandatory.kn.join(', ')}.`;
      schemeRefId = matchedScheme.id;
      linkUrl = matchedScheme.officialPortalUrl;
      linkLabel = 'Official Portal';
    } else {
      replyEn = 'I looked through the verified government scheme database. For this specific query, please check the official myScheme.gov.in portal or Seva Sindhu (sevasindhu.karnataka.gov.in). Remember, LifeBridge never asks for passwords, Aadhaar, or OTPs.';
      replyKn = 'ನಮ್ಮ ಪರಿಶೀಲಿಸಿದ ಡೇಟಾಬೇಸ್‌ನಲ್ಲಿ ಮಾಹಿತಿ ಹುಡುಕಲಾಯಿತು. ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗೆ ಅಧಿಕೃತ ಸೇವಾ ಸಿಂಧು (sevasindhu.karnataka.gov.in) ಅಥವಾ ಮೈಸ್ಕೀಮ್ ಪೋರ್ಟಲ್‌ಗೆ ಭೇಟಿ ನೀಡಿ. ಲೈಫ್‌ಬ್ರಿಡ್ಜ್ ಯಾವುದೇ ಪಾಸ್‌ವರ್ಡ್ ಅಥವಾ ಒಟಿಪಿ ಕೇಳುವುದಿಲ್ಲ.';
      linkUrl = 'https://www.myscheme.gov.in/';
      linkLabel = 'myScheme India';
    }

    setTimeout(() => {
      const assistantMsg: ChatMessage = {
        id: `a-${Date.now()}`,
        sender: 'assistant',
        textEn: replyEn,
        textKn: replyKn,
        relatedSchemeId: schemeRefId,
        portalLink: linkUrl,
        portalLabel: linkLabel
      };
      setMessages(prev => [...prev, assistantMsg]);
    }, 250);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-6 py-8 space-y-6">
      {/* Header */}
      <div className="border-b border-slate-800 pb-5 space-y-2">
        <span className="text-xs uppercase tracking-widest text-[#42DCC5] font-semibold">
          {isEn ? 'Civic Knowledge Engine' : 'ನಾಗರಿಕ ಮಾಹಿತಿ ಸಹಾಯಕ'}
        </span>
        <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
          {isEn ? 'Ask LifeBridge' : 'ಲೈಫ್‌ಬ್ರಿಡ್ಜ್ ಕೇಳಿ'}
        </h1>
        <p className="text-xs md:text-sm text-slate-300">
          {isEn
            ? 'A guided civic navigation assistant powered by structured official government records. Works completely offline without paid APIs.'
            : 'ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಮಾಹಿತಿಯ ಆಧಾರದ ಮೇಲೆ ತಕ್ಷಣ ಉತ್ತರಿಸುವ ಉಚಿತ ಮಾರ್ಗದರ್ಶಿ. ಯಾವುದೇ ಪಾವತಿಸಿದ ಎಪಿಐ ಅಗತ್ಯವಿಲ್ಲ.'}
        </p>
      </div>

      {/* Suggested Quick Question Chips */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-slate-400">
          {isEn ? 'Frequently Asked Civic Questions:' : 'ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು:'}
        </span>
        <div className="flex flex-wrap gap-2">
          {defaultPrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(isEn ? p.qEn : p.qKn)}
              className="text-xs p-2.5 rounded-xl bg-[#0F1E36] hover:bg-[#132746] border border-slate-800 hover:border-slate-700 text-slate-200 text-left transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <HelpCircle className="w-3.5 h-3.5 text-[#42DCC5] shrink-0" />
              <span>{isEn ? p.qEn : p.qKn}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Thread */}
      <div className="rounded-2xl bg-[#0F1E36] border border-slate-800 p-5 min-h-[420px] max-h-[550px] overflow-y-auto space-y-4">
        {messages.map((m) => {
          const isAssistant = m.sender === 'assistant';
          const relatedScheme = m.relatedSchemeId ? SCHEMES_DATABASE.find(s => s.id === m.relatedSchemeId) : null;

          return (
            <div
              key={m.id}
              className={`flex flex-col ${isAssistant ? 'items-start' : 'items-end'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-4 text-xs md:text-sm leading-relaxed ${
                  isAssistant
                    ? 'bg-[#0B1526] border border-slate-800 text-slate-200'
                    : 'bg-[#3678F6] text-white font-medium shadow-md'
                }`}
              >
                <p>{isEn ? m.textEn : m.textKn}</p>

                {isAssistant && (relatedScheme || m.portalLink) && (
                  <div className="mt-3 pt-3 border-t border-slate-800 flex flex-wrap items-center gap-2 text-xs">
                    {relatedScheme && (
                      <button
                        onClick={() => setSelectedSchemeForDetail(relatedScheme)}
                        className="text-[#42DCC5] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>{isEn ? 'View Complete Scheme Guide' : 'ಸಂಪೂರ್ಣ ಮಾರ್ಗದರ್ಶಿ ನೋಡಿ'}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                    {m.portalLink && (
                      <a
                        href={m.portalLink}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1 rounded bg-slate-800 text-blue-400 hover:text-white flex items-center gap-1 text-[11px]"
                      >
                        <span>{m.portalLabel || 'Official Portal'}</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Input Box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend(inputVal);
        }}
        className="flex gap-2"
      >
        <input
          type="text"
          placeholder={isEn ? 'Ask a question about scholarships, hospitals, ration cards, or Gruha Lakshmi...' : 'ವಿದ್ಯಾರ್ಥಿವೇತನ, ಆಸ್ಪತ್ರೆ, ಪಡಿತರ ಅಥವಾ ಗೃಹಲಕ್ಷ್ಮಿ ಬಗ್ಗೆ ಪ್ರಶ್ನೆ ಕೇಳಿ...'}
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="flex-1 p-3 rounded-xl bg-[#0F1E36] border border-slate-700 text-xs md:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="px-5 py-3 rounded-xl bg-[#3678F6] hover:bg-blue-600 text-white font-semibold text-xs md:text-sm flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <span>{isEn ? 'Send' : 'ಕಳುಹಿಸಿ'}</span>
          <Send className="w-4 h-4" />
        </button>
      </form>

      {/* Honest AI & Integrity Disclosure */}
      <div className="p-3.5 rounded-xl bg-[#09111E] border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
        <span>
          {isEn
            ? 'Transparent Civic Guarantee: Responses are compiled strictly from verified government circulars. No live integration or paid models are falsely simulated.'
            : 'ಪಾರದರ್ಶಕ ನಾಗರಿಕ ಭರವಸೆ: ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಸುತ್ತೋಲೆಗಳ ಮಾಹಿತಿಯ ಆಧಾರದ ಮೇಲೆ ಮಾತ್ರ ಉತ್ತರಿಸಲಾಗುತ್ತದೆ.'}
        </span>
      </div>
    </div>
  );
};
