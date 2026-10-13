import { Scheme, UserProfile, SchemeEvaluation, MatchStatus, Language } from '../types';
import { SCHEMES_DATABASE } from '../data/schemes';

export function evaluateSchemeEligibility(
  scheme: Scheme,
  profile: UserProfile,
  lang: Language = 'en'
): SchemeEvaluation {
  const matchingCriteria: string[] = [];
  const missingCriteria: string[] = [];
  const disqualifyingNotes: string[] = [];

  const { knownCriteria } = scheme;
  const isEn = lang === 'en';

  // 1. Karnataka Resident Check
  if (knownCriteria.karnatakaResidentOnly) {
    if (profile.state.toLowerCase() === 'karnataka') {
      matchingCriteria.push(
        isEn
          ? `Resident of Karnataka (${profile.district || 'Karnataka'})`
          : `ಕರ್ನಾಟಕದ ನಿವಾಸಿ (${profile.district || 'ಕರ್ನಾಟಕ'})`
      );
    } else {
      disqualifyingNotes.push(
        isEn
          ? `Requires Karnataka state domicile/residence. Selected state is ${profile.state}.`
          : `ಕರ್ನಾಟಕದ ಕಡ್ಡಾಯ ನಿವಾಸಿಯಿರಬೇಕು. ನೀವು ಆಯ್ಕೆಮಾಡಿದ ರಾಜ್ಯ: ${profile.state}.`
      );
    }
  }

  // 2. Gender Check
  if (knownCriteria.gender && knownCriteria.gender !== 'all') {
    if (profile.gender) {
      if (profile.gender === knownCriteria.gender || (knownCriteria.gender === 'female' && profile.gender === 'female')) {
        matchingCriteria.push(
          isEn
            ? `Target gender requirement met: ${knownCriteria.gender}`
            : `ಅರ್ಹ ಲಿಂಗ ಹೊಂದಾಣಿಕೆ: ${knownCriteria.gender === 'female' ? 'ಮಹಿಳೆಯರು' : knownCriteria.gender}`
        );
      } else {
        disqualifyingNotes.push(
          isEn
            ? `Scheme is specifically designed for ${knownCriteria.gender} beneficiaries.`
            : `ಈ ಯೋಜನೆಯು ನಿರ್ದಿಷ್ಟವಾಗಿ ${knownCriteria.gender === 'female' ? 'ಮಹಿಳಾ' : knownCriteria.gender} ಫಲಾನುಭವಿಗಳಿಗೆ ಮಾತ್ರ ಮೀಸಲಾಗಿದೆ.`
        );
      }
    } else {
      missingCriteria.push(
        isEn ? `Gender not specified in profile (Requires ${knownCriteria.gender})` : `ಲಿಂಗ ಮಾಹಿತಿ ನಮೂದಿಸಿಲ್ಲ (${knownCriteria.gender === 'female' ? 'ಮಹಿಳೆ' : knownCriteria.gender} ಅಗತ್ಯವಿದೆ)`
      );
    }
  }

  // 3. Age Bounds
  if (profile.age !== undefined && profile.age !== null) {
    if (knownCriteria.minAge !== undefined && profile.age < knownCriteria.minAge) {
      disqualifyingNotes.push(
        isEn
          ? `Minimum age required is ${knownCriteria.minAge} years (Your age: ${profile.age})`
          : `ಕನಿಷ್ಠ ವಯಸ್ಸು ${knownCriteria.minAge} ವರ್ಷ (ನಿಮ್ಮ ವಯಸ್ಸು: ${profile.age})`
      );
    } else if (knownCriteria.minAge !== undefined) {
      matchingCriteria.push(
        isEn ? `Meets minimum age criterion (≥ ${knownCriteria.minAge} years)` : `ಕನಿಷ್ಠ ವಯಸ್ಸಿನ ಮಿತಿ ಪೂರೈಸಲಾಗಿದೆ (≥ ${knownCriteria.minAge} ವರ್ಷ)`
      );
    }

    if (knownCriteria.maxAge !== undefined && profile.age > knownCriteria.maxAge) {
      disqualifyingNotes.push(
        isEn
          ? `Maximum age limit is ${knownCriteria.maxAge} years (Your age: ${profile.age})`
          : `ಗರಿಷ್ಠ ವಯಸ್ಸಿನ ಮಿತಿ ${knownCriteria.maxAge} ವರ್ಷ (ನಿಮ್ಮ ವಯಸ್ಸು: ${profile.age})`
      );
    } else if (knownCriteria.maxAge !== undefined && profile.age >= (knownCriteria.minAge || 0)) {
      matchingCriteria.push(
        isEn ? `Within age threshold (≤ ${knownCriteria.maxAge} years)` : `ವಯಸ್ಸಿನ ಮಿತಿಯೊಳಗಿದೆ (≤ ${knownCriteria.maxAge} ವರ್ಷ)`
      );
    }
  } else if (knownCriteria.minAge !== undefined || knownCriteria.maxAge !== undefined) {
    missingCriteria.push(
      isEn
        ? `Age was skipped (Scheme applies to ${knownCriteria.minAge ? 'min ' + knownCriteria.minAge : ''} ${knownCriteria.maxAge ? 'max ' + knownCriteria.maxAge : ''} yrs)`
        : `ವಯಸ್ಸು ನಮೂದಿಸಿಲ್ಲ (${knownCriteria.minAge || ''} ರಿಂದ ${knownCriteria.maxAge || ''} ವರ್ಷಕ್ಕೆ ಅನ್ವಯ)`
    );
  }

  // 4. Student Status & Education
  if (knownCriteria.studentStatus) {
    if (profile.isStudent === true) {
      matchingCriteria.push(isEn ? 'Currently enrolled student' : 'ಪ್ರಸ್ತುತ ವ್ಯಾಸಂಗ ಮಾಡುತ್ತಿರುವ ವಿದ್ಯಾರ್ಥಿ');
      if (knownCriteria.educationLevels && profile.educationLevel) {
        if (knownCriteria.educationLevels.includes(profile.educationLevel)) {
          matchingCriteria.push(
            isEn
              ? `Education stream (${profile.educationLevel.toUpperCase()}) is supported`
              : `ಶಿಕ್ಷಣ ಹಂತ (${profile.educationLevel.toUpperCase()}) ಅರ್ಹವಾಗಿದೆ`
          );
        } else {
          disqualifyingNotes.push(
            isEn
              ? `Course level (${profile.educationLevel}) does not match covered tiers: ${knownCriteria.educationLevels.join(', ')}`
              : `ಕೋರ್ಸ್ ಹಂತ (${profile.educationLevel}) ಈ ಯೋಜನೆಗೆ ಅನ್ವಯಿಸುವುದಿಲ್ಲ`
          );
        }
      } else if (knownCriteria.educationLevels) {
        missingCriteria.push(
          isEn ? 'Current education level / course not specified' : 'ಪ್ರಸ್ತುತ ಶಿಕ್ಷಣ ಹಂತ ಅಥವಾ ಕೋರ್ಸ್ ನಮೂದಿಸಿಲ್ಲ'
        );
      }
    } else if (profile.isStudent === false) {
      disqualifyingNotes.push(
        isEn ? 'Scheme strictly requires currently enrolled student status' : 'ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಮಾತ್ರ ಮೀಸಲಾದ ಯೋಜನೆ'
      );
    } else {
      missingCriteria.push(isEn ? 'Student status not specified' : 'ವಿದ್ಯಾರ್ಥಿ ಹೌದೇ ಅಲ್ಲವೇ ಎಂದು ತಿಳಿಸಿಲ್ಲ');
    }
  }

  // 5. Ration Card Category Check
  if (knownCriteria.rationCards && knownCriteria.rationCards.length > 0) {
    if (profile.rationCardCategory && profile.rationCardCategory !== 'unknown') {
      if (profile.rationCardCategory === 'none') {
        if (!knownCriteria.rationCards.includes('any')) {
          missingCriteria.push(
            isEn
              ? `Requires ration card (${knownCriteria.rationCards.join('/')}), currently marked as None`
              : `ಪಡಿತರ ಚೀಟಿ ಅಗತ್ಯವಿದೆ (${knownCriteria.rationCards.join('/')})`
          );
        }
      } else if (knownCriteria.rationCards.includes(profile.rationCardCategory) || knownCriteria.rationCards.includes('any')) {
        matchingCriteria.push(
          isEn
            ? `Ration Card category (${profile.rationCardCategory}) qualifies`
            : `ಪಡಿತರ ಚೀಟಿ ವರ್ಗ (${profile.rationCardCategory}) ಅರ್ಹವಾಗಿದೆ`
        );
      } else {
        disqualifyingNotes.push(
          isEn
            ? `Requires ${knownCriteria.rationCards.join(' or ')} card, but profile has ${profile.rationCardCategory}`
            : `${knownCriteria.rationCards.join(' ಅಥವಾ ')} ಕಾರ್ಡ್ ಅಗತ್ಯವಿದೆ, ನಿಮ್ಮ ಕಾರ್ಡ್: ${profile.rationCardCategory}`
        );
      }
    } else {
      missingCriteria.push(
        isEn
          ? `Ration card category not provided (Scheme expects ${knownCriteria.rationCards.join('/')})`
          : `ಪಡಿತರ ಚೀಟಿ ವಿವರ ನಮೂದಿಸಿಲ್ಲ (${knownCriteria.rationCards.join('/')} ಅಗತ್ಯ)`
      );
    }
  }

  // 6. Farmer Check
  if (knownCriteria.isFarmer || knownCriteria.farmerSupport) {
    if (profile.isFarmer === true || profile.employmentStatus === 'farmer') {
      matchingCriteria.push(isEn ? 'Identified as farmer / agricultural landholder' : 'ರೈತ / ಕೃಷಿ ಭೂಮಾಲೀಕರಾಗಿ ಗುರುತಿಸಲಾಗಿದೆ');
    } else if (profile.isFarmer === false) {
      disqualifyingNotes.push(isEn ? 'Scheme is exclusively for agricultural landholders / farmers' : 'ಕೃಷಿ ಭೂಮಿ ಹೊಂದಿರುವ ರೈತರಿಗೆ ಮಾತ್ರ ಮೀಸಲು');
    } else {
      missingCriteria.push(isEn ? 'Farmer / agricultural status not indicated' : 'ರೈತ ಹೌದೇ ಅಲ್ಲವೇ ಎಂದು ಸೂಚಿಸಿಲ್ಲ');
    }
  }

  // 7. Disability Check
  if (knownCriteria.disabilityAssistance) {
    if (profile.hasDisability === true) {
      matchingCriteria.push(isEn ? 'Indicated benchmark disability assistance interest' : 'ವಿಶೇಷ ಚೇತನರ ನೆರವಿನ ಆಸಕ್ತಿ ಗುರುತಿಸಲಾಗಿದೆ');
    } else if (profile.hasDisability === false) {
      disqualifyingNotes.push(isEn ? 'Scheme is exclusively for persons with benchmark disabilities' : 'ವಿಶೇಷ ಚೇತನರಿಗೆ ಮಾತ್ರ ಮೀಸಲಾದ ಯೋಜನೆ');
    } else {
      missingCriteria.push(isEn ? 'Disability assistance circumstance not specified' : 'ಅಂಗವೈಕಲ್ಯ ನೆರವಿನ ವಿವರ ನಮೂದಿಸಿಲ್ಲ');
    }
  }

  // 8. Maternal Check
  if (knownCriteria.maternalSupport) {
    if (profile.seekingWomenChildWelfare === true) {
      matchingCriteria.push(isEn ? 'Seeking maternal & child welfare assistance' : 'ತಾಯಿ ಮತ್ತು ಮಕ್ಕಳ ಕಲ್ಯಾಣ ಸಹಾಯ ಬಯಸಲಾಗಿದೆ');
    } else {
      missingCriteria.push(isEn ? 'Maternal or child welfare circumstance not indicated' : 'ಗರ್ಭಿಣಿ/ಬಾಣಂತಿ ಕಲ್ಯಾಣ ವಿವರ ನಮೂದಿಸಿಲ್ಲ');
    }
  }

  // 9. Senior Citizen Check
  if (knownCriteria.seniorCitizen) {
    if (profile.exploringPension === true || (profile.age && profile.age >= 60)) {
      matchingCriteria.push(isEn ? 'Exploring senior citizen social security' : 'ಹಿರಿಯ ನಾಗರಿಕರ ಸಾಮಾಜಿಕ ಭದ್ರತೆ ಪರಿಶೀಲನೆ');
    }
  }

  // 10. Healthcare Check
  if (scheme.category === 'healthcare' && profile.needsHealthcareHelp) {
    matchingCriteria.push(isEn ? 'Profile marked healthcare & medical coverage support' : 'ಆರೋಗ್ಯ ಮತ್ತು ವೈದ್ಯಕೀಯ ಚಿಕಿತ್ಸಾ ನೆರವು ಬಯಸಲಾಗಿದೆ');
  }

  // 11. Employment status for Yuva Nidhi / SVANidhi
  if (knownCriteria.employmentStatus) {
    if (profile.employmentStatus) {
      if (knownCriteria.employmentStatus.includes(profile.employmentStatus) || knownCriteria.employmentStatus.includes('any')) {
        matchingCriteria.push(isEn ? `Employment state matches: ${profile.employmentStatus}` : `ಉದ್ಯೋಗ ಸ್ಥಿತಿ ಹೊಂದಾಣಿಕೆ: ${profile.employmentStatus}`);
      } else {
        disqualifyingNotes.push(
          isEn
            ? `Requires employment status: ${knownCriteria.employmentStatus.join(', ')} (profile: ${profile.employmentStatus})`
            : `ಅಗತ್ಯವಿರುವ ಉದ್ಯೋಗ ಸ್ಥಿತಿ: ${knownCriteria.employmentStatus.join(', ')}`
        );
      }
    } else {
      missingCriteria.push(isEn ? 'Employment status not indicated' : 'ಉದ್ಯೋಗ ಸ್ಥಿತಿ ನಮೂದಿಸಿಲ್ಲ');
    }
  }

  // Determine Overall Match Status
  let status: MatchStatus = 'potential_match';

  if (disqualifyingNotes.length > 0) {
    status = 'does_not_match';
  } else if (missingCriteria.length > 0) {
    // If has some strong matches but missing some fields
    status = 'more_info_needed';
  } else {
    status = 'potential_match';
  }

  // Generate plain-language Why You See This summary
  let whyYouSeeThis = '';
  if (status === 'potential_match') {
    whyYouSeeThis = isEn
      ? `Based on your provided details (${matchingCriteria.slice(0, 3).join(', ')}), you appear to satisfy all known baseline eligibility criteria for this scheme.`
      : `ನಿಮ್ಮ ವಿವರಗಳ ಆಧಾರದ ಮೇಲೆ (${matchingCriteria.slice(0, 2).join(', ')}), ನೀವು ಈ ಯೋಜನೆಯ ಪ್ರಾಥಮಿಕ ಅರ್ಹತಾ ನಿಯಮಗಳನ್ನು ಪೂರೈಸುವಂತೆ ಕಂಡುಬರುತ್ತೀರಿ.`;
  } else if (status === 'more_info_needed') {
    whyYouSeeThis = isEn
      ? `This scheme appears relevant to your category, but ${missingCriteria.length} criteria could not be confirmed because they were skipped or unselected.`
      : `ಈ ಯೋಜನೆಯು ನಿಮಗೆ ಪ್ರಸ್ತುತವಾಗಬಹುದು, ಆದರೆ ${missingCriteria.length} ನಿಯಮಗಳನ್ನು ಖಚಿತಪಡಿಸಲು ಹೆಚ್ಚಿನ ವಿವರಗಳು ಬೇಕಾಗುತ್ತವೆ.`;
  } else {
    whyYouSeeThis = isEn
      ? `One or more mandatory requirements (${disqualifyingNotes[0]}) appear inconsistent with your entered profile.`
      : `ಒಂದು ಅಥವಾ ಹೆಚ್ಚಿನ ಕಡ್ಡಾಯ ನಿಯಮಗಳು (${disqualifyingNotes[0]}) ನಿಮ್ಮ ಪ್ರೊಫೈಲ್‌ನೊಂದಿಗೆ ಹೊಂದಿಕೆಯಾಗುವುದಿಲ್ಲ.`;
  }

  return {
    scheme,
    status,
    matchingCriteria,
    missingCriteria,
    disqualifyingNotes,
    whyYouSeeThis
  };
}

export function evaluateAllSchemes(profile: UserProfile, lang: Language = 'en'): SchemeEvaluation[] {
  return SCHEMES_DATABASE.map(scheme => evaluateSchemeEligibility(scheme, profile, lang));
}
