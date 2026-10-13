import { PublicFacility } from '../types';

export const PUBLIC_FACILITIES_DATABASE: PublicFacility[] = [
  // 1. Government Hospitals
  {
    id: 'fac-victoria-hospital',
    name: {
      en: 'Victoria Hospital (BMCRI Medical College)',
      kn: 'ವಿಕ್ಟೋರಿಯಾ ಆಸ್ಪತ್ರೆ (ಬಿಎಂಸಿಆರ್‌ಐ)'
    },
    category: 'hospital',
    district: 'Bengaluru Urban',
    locality: 'Kalasipalya / Fort Area',
    address: {
      en: 'Fort Road, Near City Market, Kalasipalya, Bengaluru, Karnataka 560002',
      kn: 'ಕೋಟೆ ರಸ್ತೆ, ಸಿಟಿ ಮಾರ್ಕೆಟ್ ಹತ್ತಿರ, ಕಲಾಸಿಪಾಳ್ಯ, ಬೆಂಗಳೂರು 560002'
    },
    latitude: 12.9628,
    longitude: 77.5753,
    contactNumber: '080-26701150',
    timings: '24/7 Emergency & Inpatient; OPD 8:30 AM – 1:00 PM',
    servicesProvided: {
      en: ['24/7 Trauma & Emergency', 'Ayushman Bharat AB-ArK Arogya Mitra Desk', 'Surgical & Orthopedic Specialities', 'Free Generic Pharmacy', 'CT / MRI / Blood Bank'],
      kn: ['24/7 ತುರ್ತು ಚಿಕಿತ್ಸೆ ಮತ್ತು ಟ್ರಾಮಾ ಕೇರ್', 'ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ಆರೋಗ್ಯ ಮಿತ್ರ ಡೆಸ್ಕ್', 'ಉಚಿತ ಜನರಿಕ್ ಔಷಧಿ ವಿತರಣೆ', 'ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಮತ್ತು ರಕ್ತನಿಧಿ']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Victoria+Hospital+Bangalore',
    verifiedSource: 'Bangalore Medical College and Research Institute (BMCRI)'
  },
  {
    id: 'fac-kc-general-hospital',
    name: {
      en: 'KC General Hospital Malleshwaram',
      kn: 'ಕೆ.ಸಿ. ಜನರಲ್ ಆಸ್ಪತ್ರೆ ಮಲ್ಲೇಶ್ವರಂ'
    },
    category: 'hospital',
    district: 'Bengaluru Urban',
    locality: 'Malleshwaram',
    address: {
      en: '5th Cross, Malleshwaram, Bengaluru, Karnataka 560003',
      kn: '5ನೇ ಕ್ರಾಸ್, ಮಲ್ಲೇಶ್ವರಂ, ಬೆಂಗಳೂರು 560003'
    },
    latitude: 12.9989,
    longitude: 77.5714,
    contactNumber: '080-23341771',
    timings: '24/7 Emergency; OPD 9:00 AM – 2:00 PM',
    servicesProvided: {
      en: ['Maternal & Child Health Care', 'AB-PMJAY Cashless Desk', 'Dialysis Centre', 'Pediatric ICU', 'Diagnostic Lab'],
      kn: ['ತಾಯಿ ಮತ್ತು ಮಕ್ಕಳ ಆರೈಕೆ', 'ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ನಗದು ರಹಿತ ಡೆಸ್ಕ್', 'ಡಯಾಲಿಸಿಸ್ ಕೇಂದ್ರ', 'ಶಿಶು ತೀವ್ರ ನಿಗಾ ಘಟಕ']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=KC+General+Hospital+Malleshwaram+Bengaluru',
    verifiedSource: 'Department of Health & Family Welfare, Karnataka'
  },
  {
    id: 'fac-bowring-hospital',
    name: {
      en: 'Bowring & Lady Curzon Hospital',
      kn: 'ಬೌರಿಂಗ್ ಮತ್ತು ಲೇಡಿ ಕರ್ಜನ್ ಆಸ್ಪತ್ರೆ'
    },
    category: 'hospital',
    district: 'Bengaluru Urban',
    locality: 'Shivajinagar',
    address: {
      en: 'Lady Curzon Road, Tasker Town, Shivajinagar, Bengaluru 560001',
      kn: 'ಲೇಡಿ ಕರ್ಜನ್ ರಸ್ತೆ, ಶಿವಾಜಿನಗರ, ಬೆಂಗಳೂರು 560001'
    },
    latitude: 12.9829,
    longitude: 77.6033,
    contactNumber: '080-25591325',
    timings: '24/7 Emergency; OPD 9:00 AM – 1:30 PM',
    servicesProvided: {
      en: ['Super-Speciality Tertiary Care', 'PM-JAY Arogya Mitra Helpdesk', 'Cardiology & Neurology', 'NICU & PICU'],
      kn: ['ತೃತೀಯ ಹಂತದ ತುರ್ತು ಆರೈಕೆ', 'ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ಆರೋಗ್ಯ ಮಿತ್ರ ಡೆಸ್ಕ್', 'ಹೃದ್ರೋಗ ಮತ್ತು ನರರೋಗ ವಿಭಾಗ']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Bowring+Hospital+Shivajinagar+Bengaluru',
    verifiedSource: 'Govt of Karnataka Health Directory'
  },

  // 2. Primary Health Centres (PHC)
  {
    id: 'fac-phc-malleshwaram',
    name: {
      en: 'Namma Clinic & Urban PHC Malleshwaram',
      kn: 'ನಮ್ಮ ಕ್ಲಿನಿಕ್ ಮತ್ತು ನಗರ ಪ್ರಾಥಮಿಕ ಆರೋಗ್ಯ ಕೇಂದ್ರ ಮಲ್ಲೇಶ್ವರಂ'
    },
    category: 'phc',
    district: 'Bengaluru Urban',
    locality: 'Malleshwaram',
    address: {
      en: 'Near 15th Cross, Margosa Road, Malleshwaram, Bengaluru 560003',
      kn: '15ನೇ ಕ್ರಾಸ್ ಹತ್ತಿರ, ಮಾರ್ಗೋಸಾ ರಸ್ತೆ, ಮಲ್ಲೇಶ್ವರಂ, ಬೆಂಗಳೂರು 560003'
    },
    latitude: 13.0071,
    longitude: 77.5689,
    contactNumber: '080-22660000',
    timings: 'Monday – Saturday: 9:00 AM – 4:30 PM',
    servicesProvided: {
      en: ['Free General OPD Consultations', 'Free Essential Medicines', 'Childhood Immunization (Universal Immunization)', 'Ante-natal Checkups for Expecting Mothers', 'Blood Sugar & BP Screening'],
      kn: ['ಉಚಿತ ಸಾಮಾನ್ಯ ತಪಾಸಣೆ', 'ಉಚಿತ ಅಗತ್ಯ ಔಷಧಿಗಳು', 'ಮಕ್ಕಳ ಲಸಿಕಾ ಕಾರ್ಯಕ್ರಮ', 'ಗರ್ಭಿಣಿಯರ ತಪಾಸಣೆ', 'ಮಧುಮೇಹ ಮತ್ತು ರಕ್ತದೊತ್ತಡ ತಪಾಸಣೆ']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Namma+Clinic+Malleshwaram+Bengaluru',
    verifiedSource: 'BBMP Health & Namma Clinic Initiative'
  },
  {
    id: 'fac-phc-ulsoor',
    name: {
      en: 'Urban Primary Health Centre Ulsoor',
      kn: 'ನಗರ ಪ್ರಾಥಮಿಕ ಆರೋಗ್ಯ ಕೇಂದ್ರ ಹಲಸೂರು'
    },
    category: 'phc',
    district: 'Bengaluru Urban',
    locality: 'Ulsoor',
    address: {
      en: 'Old Madras Road, Near Ulsoor Police Station, Bengaluru 560008',
      kn: 'ಹಳೇ ಮದ್ರಾಸ್ ರಸ್ತೆ, ಹಲಸೂರು ಪೊಲೀಸ್ ಠಾಣೆ ಹತ್ತಿರ, ಬೆಂಗಳೂರು 560008'
    },
    latitude: 12.9774,
    longitude: 77.6258,
    contactNumber: '080-25365512',
    timings: 'Monday – Saturday: 9:00 AM – 4:00 PM',
    servicesProvided: {
      en: ['Namma Clinic Free Consultations', 'Thayi Card Maternal Registrations', 'Direct TB DOTS Centre', 'Dengue & Malaria Diagnostics'],
      kn: ['ತಾಯಿ ಕಾರ್ಡ್ ನೋಂದಣಿ', 'ಕ್ಷಯರೋಗ (ಡಾಟ್ಸ್) ಚಿಕಿತ್ಸೆ', 'ಉಚಿತ ಜ್ವರ ಮತ್ತು ರಕ್ತ ತಪಾಸಣೆ']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Urban+Primary+Health+Centre+Ulsoor+Bangalore',
    verifiedSource: 'BBMP Public Health Department'
  },

  // 3. Community Health Centres (CHC)
  {
    id: 'fac-chc-kr-puram',
    name: {
      en: 'Community Health Centre (CHC) K.R. Puram',
      kn: 'ಸಮುದಾಯ ಆರೋಗ್ಯ ಕೇಂದ್ರ (ಸಿಎಚ್‌ಸಿ) ಕೆ.ಆರ್. ಪುರಂ'
    },
    category: 'chc',
    district: 'Bengaluru Urban',
    locality: 'K.R. Puram',
    address: {
      en: 'Old Madras Road, Near K.R. Puram Police Station, Bengaluru 560036',
      kn: 'ಹಳೇ ಮದ್ರಾಸ್ ರಸ್ತೆ, ಕೆ.ಆರ್. ಪುರಂ, ಬೆಂಗಳೂರು 560036'
    },
    latitude: 13.0076,
    longitude: 77.6961,
    contactNumber: '080-25610234',
    timings: '24/7 Delivery & Inpatient; OPD 9:00 AM – 3:00 PM',
    servicesProvided: {
      en: ['30-Bed Inpatient Care', '24/7 Normal Deliveries & Maternity Ward', 'Ayushman Bharat Portal Referral', 'Minor Surgery Theatre', 'Government Laboratory'],
      kn: ['30 ಹಾಸಿಗೆಗಳ ಒಳರೋಗಿ ವಿಭಾಗ', '24/7 ಸುರಕ್ಷಿತ ಹೆರಿಗೆ ಸೌಲಭ್ಯ', 'ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ರೆಫರಲ್ ಸೇವೆ', 'ಪ್ರಯೋಗಾಲಯ']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Government+Hospital+KR+Puram+Bengaluru',
    verifiedSource: 'Directorate of Health & Family Welfare, Karnataka'
  },

  // 4. Government Schools
  {
    id: 'fac-school-malleshwaram',
    name: {
      en: 'Government High School 18th Cross Malleshwaram',
      kn: 'ಸರ್ಕಾರಿ ಪ್ರೌಢಶಾಲೆ 18ನೇ ಕ್ರಾಸ್ ಮಲ್ಲೇಶ್ವರಂ'
    },
    category: 'school',
    district: 'Bengaluru Urban',
    locality: 'Malleshwaram',
    address: {
      en: '18th Cross, Margosa Road, Malleshwaram, Bengaluru 560055',
      kn: '18ನೇ ಕ್ರಾಸ್, ಮಾರ್ಗೋಸಾ ರಸ್ತೆ, ಮಲ್ಲೇಶ್ವರಂ, ಬೆಂಗಳೂರು 560055'
    },
    latitude: 13.0118,
    longitude: 77.5681,
    contactNumber: '080-23348821',
    timings: 'Monday – Friday: 9:30 AM – 4:30 PM, Saturday: 9:30 AM – 1:30 PM',
    servicesProvided: {
      en: ['Free Education (Kannada & English Medium)', 'Free Mid-Day Meal (Akshaya Patra / PM POSHAN)', 'Free Textbooks & Uniforms', 'SSP Pre-Matric Scholarship Guidance', 'Computer Lab & Science Kits'],
      kn: ['ಉಚಿತ ಶಿಕ್ಷಣ (ಕನ್ನಡ ಮತ್ತು ಇಂಗ್ಲಿಷ್ ಮಾಧ್ಯಮ)', 'ಬಿಸಿಯೂಟ ಯೋಜನೆ (ಪಿಎಂ ಪೋಷಣ್)', 'ಉಚಿತ ಪಠ್ಯಪುಸ್ತಕ ಮತ್ತು ಸಮವಸ್ತ್ರ', 'ಎಸ್‌ಎಸ್‌ಪಿ ವಿದ್ಯಾರ್ಥಿವೇತನ ಮಾರ್ಗದರ್ಶನ']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Government+High+School+18th+Cross+Malleshwaram',
    verifiedSource: 'Department of School Education and Literacy, Karnataka'
  },
  {
    id: 'fac-school-jayanagar',
    name: {
      en: 'Government Model Primary & High School Jayanagar',
      kn: 'ಸರ್ಕಾರಿ ಮಾದರಿ ಪ್ರಾಥಮಿಕ ಮತ್ತು ಪ್ರೌಢಶಾಲೆ ಜಯನಗರ'
    },
    category: 'school',
    district: 'Bengaluru Urban',
    locality: 'Jayanagar',
    address: {
      en: '9th Main Road, 4th Block, Jayanagar, Bengaluru 560011',
      kn: '9ನೇ ಮುಖ್ಯ ರಸ್ತೆ, 4ನೇ ಬ್ಲಾಕ್, ಜಯನಗರ, ಬೆಂಗಳೂರು 560011'
    },
    latitude: 12.9298,
    longitude: 77.5841,
    contactNumber: '080-22441920',
    timings: 'Monday – Friday: 9:30 AM – 4:30 PM',
    servicesProvided: {
      en: ['KPS Karnataka Public School Stream', 'Free Textbooks & Shoes', 'Mid-Day Meals & Ksheera Bhagya Milk', 'Pre-Matric Scholarship Desk'],
      kn: ['ಕರ್ನಾಟಕ ಪಬ್ಲಿಕ್ ಶಾಲೆ (ಕೆಪಿಎಸ್)', 'ಉಚಿತ ಸಮವಸ್ತ್ರ ಮತ್ತು ಪಾದರಕ್ಷೆ', 'ಕ್ಷೀರಭಾಗ್ಯ ಹಾಲು ಮತ್ತು ಬಿಸಿಯೂಟ']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Government+School+Jayanagar+4th+Block+Bangalore',
    verifiedSource: 'DSEL Karnataka SATS Portal'
  },

  // 5. Government Colleges and Universities
  {
    id: 'fac-govt-science-college',
    name: {
      en: 'Government Science College (Autonomous)',
      kn: 'ಸರ್ಕಾರಿ ವಿಜ್ಞಾನ ಕಾಲೇಜು (ಸ್ವಾಯತ್ತ)'
    },
    category: 'college',
    district: 'Bengaluru Urban',
    locality: 'Nrupathunga Road / City Centre',
    address: {
      en: 'Nrupathunga Road, Near KR Circle, Bengaluru 560001',
      kn: 'ನೃಪತುಂಗ ರಸ್ತೆ, ಕೆ.ಆರ್. ವೃತ್ತದ ಹತ್ತಿರ, ಬೆಂಗಳೂರು 560001'
    },
    latitude: 12.9739,
    longitude: 77.5898,
    contactNumber: '080-22212924',
    timings: 'Monday – Friday: 9:00 AM – 5:00 PM',
    servicesProvided: {
      en: ['Subsidized Higher Education in BSc, BCA, MSc', 'SSP Post-Matric Scholarship Processing Cell', 'Hostel Allotment Coordination (BCWD / SWD)', 'Free Library & Digital Reference Hub'],
      kn: ['ಬಿ.ಎಸ್ಸಿ, ಬಿಸಿಎ, ಎಂ.ಎಸ್ಸಿ ಪದವಿ ಶಿಕ್ಷಣ', 'ಎಸ್‌ಎಸ್‌ಪಿ ಮೆಟ್ರಿಕ್ ನಂತರದ ವಿದ್ಯಾರ್ಥಿವೇತನ ಕೌಂಟರ್', 'ಹಾಸ್ಟೆಲ್ ಪ್ರವೇಶ ಮಾರ್ಗದರ್ಶನ (ಬಿಸಿಎಂ)']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Government+Science+College+Nrupathunga+Road+Bangalore',
    verifiedSource: 'Department of Collegiate Education, Karnataka'
  },
  {
    id: 'fac-rc-college',
    name: {
      en: 'RC College of Commerce & Management',
      kn: 'ಆರ್.ಸಿ. ವಾಣಿಜ್ಯ ಮತ್ತು ನಿರ್ವಹಣಾ ಕಾಲೇಜು'
    },
    category: 'college',
    district: 'Bengaluru Urban',
    locality: 'Race Course Road',
    address: {
      en: 'Race Course Road, Near Basaveshwara Circle, Bengaluru 560001',
      kn: 'ರೇಸ್ ಕೋರ್ಸ್ ರಸ್ತೆ, ಬಸವೇಶ್ವರ ವೃತ್ತದ ಹತ್ತಿರ, ಬೆಂಗಳೂರು 560001'
    },
    latitude: 12.9835,
    longitude: 77.5843,
    contactNumber: '080-22262589',
    timings: 'Monday – Friday: 9:00 AM – 4:30 PM',
    servicesProvided: {
      en: ['BCom, BBA, MCom Degree Programmes', 'Full Fee Concessions for Eligible Categories', 'Yuva Nidhi Job Placement Cell', 'Vidyasiri Stipend Endorsement'],
      kn: ['ಬಿಕಾಂ, ಬಿಬಿಎ, ಎಂಕಾಂ ಪದವಿ ತರಗತಿಗಳು', 'ಶುಲ್ಕ ವಿನಾಯಿತಿ ಮತ್ತು ರಿಯಾಯಿತಿ ಸೌಲಭ್ಯ', 'ಯುವನಿಧಿ ಉದ್ಯೋಗ ಮಾಹಿತಿ ಕೋಶ']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=RC+College+Commerce+Race+Course+Road+Bangalore',
    verifiedSource: 'Department of Collegiate Education, Karnataka'
  },

  // 6. ITIs and Vocational Institutes
  {
    id: 'fac-iti-peenya',
    name: {
      en: 'Government Industrial Training Institute (ITI) Peenya',
      kn: 'ಸರ್ಕಾರಿ ಕೈಗಾರಿಕಾ ತರಬೇತಿ ಸಂಸ್ಥೆ (ಐಟಿಐ) ಪೀಣ್ಯ'
    },
    category: 'iti',
    district: 'Bengaluru Urban',
    locality: 'Peenya Industrial Area',
    address: {
      en: 'Peenya Industrial Area 2nd Stage, Tumkur Road, Bengaluru 560058',
      kn: 'ಪೀಣ್ಯ 2ನೇ ಹಂತ, ತುಮಕೂರು ರಸ್ತೆ, ಬೆಂಗಳೂರು 560058'
    },
    latitude: 13.0298,
    longitude: 77.5255,
    contactNumber: '080-28394562',
    timings: 'Monday – Friday: 8:30 AM – 4:30 PM',
    servicesProvided: {
      en: ['NCVT Certified Trades (Electrician, Fitter, CNC, Electronics)', 'Free Tool Kit & Uniform Stipend', 'Apprenticeship Placement Linkage with Peenya Industries', 'SSP Student Scholarship Support'],
      kn: ['ಎಲೆಕ್ಟ್ರಿಷಿಯನ್, ಫಿಟ್ಟರ್, ಸಿಎನ್‌ಸಿ ಪ್ರಮಾಣೀಕೃತ ಕೋರ್ಸ್‌ಗಳು', 'ಉಚಿತ ಟೂಲ್‌ಕಿಟ್ ಮತ್ತು ಸಮವಸ್ತ್ರ ಭತ್ಯೆ', 'ಪೀಣ್ಯ ಕೈಗಾರಿಕೆಗಳಲ್ಲಿ ಅಪ್ರೆಂಟಿಸ್‌ಶಿಪ್']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Government+ITI+Peenya+Bengaluru',
    verifiedSource: 'Directorate of Industrial Training and Employment, Karnataka'
  },

  // 7. Fair-Price Ration Shops (PDS FPS)
  {
    id: 'fac-fps-malleshwaram',
    name: {
      en: 'Fair Price Shop #104 (PDS Food Distribution)',
      kn: 'ನ್ಯಾಯಬೆಲೆ ರೇಷನ್ ಅಂಗಡಿ #104 (ಆಹಾರ ಇಲಾಖೆ)'
    },
    category: 'fair_price_shop',
    district: 'Bengaluru Urban',
    locality: 'Malleshwaram 7th Cross',
    address: {
      en: 'Shop #104, 7th Cross Road, Near East Park, Malleshwaram, Bengaluru 560003',
      kn: 'ಅಂಗಡಿ #104, 7ನೇ ಕ್ರಾಸ್ ರಸ್ತೆ, ಈಸ್ಟ್ ಪಾರ್ಕ್ ಹತ್ತಿರ, ಮಲ್ಲೇಶ್ವರಂ, ಬೆಂಗಳೂರು 560003'
    },
    latitude: 12.9997,
    longitude: 77.5702,
    contactNumber: '080-22210111',
    timings: '1st – 20th of every month: 8:00 AM – 12:00 PM & 4:00 PM – 8:00 PM (Closed Tuesdays)',
    servicesProvided: {
      en: ['Free Rice Distribution under NFSA / Anna Bhagya', 'Biometric e-POS Ration Dispensing', 'Ration Card e-KYC Fingerprint Updation', 'Grievance Register for Fair-Price Consumers'],
      kn: ['ಅನ್ನಭಾಗ್ಯ ಅಡಿ ಉಚಿತ ಅಕ್ಕಿ ವಿತರಣೆ', 'ಇ-ಪಿಒಎಸ್ ಯಂತ್ರದಲ್ಲಿ ಬಯೋಮೆಟ್ರಿಕ್ ವಿತರಣೆ', 'ಪಡಿತರ ಚೀಟಿ ಇ-ಕೆವೈಸಿ ಅಪ್ಡೇಟ್']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Fair+Price+Ration+Shop+Malleshwaram+Bengaluru',
    verifiedSource: 'Dept of Food, Civil Supplies & Consumer Affairs (Ahara)'
  },
  {
    id: 'fac-fps-jayanagar',
    name: {
      en: 'Fair Price Shop #215 (PDS Food Distribution)',
      kn: 'ನ್ಯಾಯಬೆಲೆ ರೇಷನ್ ಅಂಗಡಿ #215 (ಆಹಾರ ಇಲಾಖೆ)'
    },
    category: 'fair_price_shop',
    district: 'Bengaluru Urban',
    locality: 'Jayanagar 4th Block',
    address: {
      en: 'PDS Depot #215, 32nd Cross Road, Jayanagar 4th Block, Bengaluru 560011',
      kn: 'ಪಿಡಿಎಸ್ ಡಿಪೋ #215, 32ನೇ ಕ್ರಾಸ್ ರಸ್ತೆ, 4ನೇ ಬ್ಲಾಕ್ ಜಯನಗರ, ಬೆಂಗಳೂರು 560011'
    },
    latitude: 12.9261,
    longitude: 77.5819,
    contactNumber: '080-22442200',
    timings: 'Monthly Ration Distribution: 8:00 AM – 1:00 PM & 4:00 PM – 7:30 PM',
    servicesProvided: {
      en: ['PDS Rice & Fortified Grains for BPL/AAY', 'Aadhaar Biometric e-POS Verification', 'Family Member Count Verification on POS'],
      kn: ['ಬಿಪಿಎಲ್/ಅಂತ್ಯೋದಯ ಪಡಿತರ ಅಕ್ಕಿ ವಿತರಣೆ', 'ಆಧಾರ್ ಬಯೋಮೆಟ್ರಿಕ್ ದೃಢೀಕರಣ']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=PDS+Ration+Shop+Jayanagar+4th+Block+Bangalore',
    verifiedSource: 'Ahara Karnataka FPS Directory'
  },

  // 8. Government Citizen Service Centres
  {
    id: 'fac-b1-jayanagar',
    name: {
      en: 'Bangalore One Centre Jayanagar',
      kn: 'ಬೆಂಗಳೂರು ಒನ್ ಕೇಂದ್ರ ಜಯನಗರ'
    },
    category: 'service_centre',
    district: 'Bengaluru Urban',
    locality: 'Jayanagar 4th Block',
    address: {
      en: 'BDA Complex, 2nd Floor, 4th Block, Jayanagar, Bengaluru 560011',
      kn: 'ಬಿಡಿಎ ಕಾಂಪ್ಲೆಕ್ಸ್, 2ನೇ ಮಹಡಿ, 4ನೇ ಬ್ಲಾಕ್, ಜಯನಗರ, ಬೆಂಗಳೂರು 560011'
    },
    latitude: 12.9292,
    longitude: 77.5828,
    contactNumber: '080-22441010',
    timings: 'Monday – Sunday: 8:00 AM – 7:00 PM (All 365 Days)',
    servicesProvided: {
      en: ['Gruha Lakshmi Scheme Free Registration', 'Gruha Jyothi ESCOM Application', 'Seva Sindhu Caste & Income Certificates', 'Utility Bills (BESCOM, BWSSB) Payment', 'Ration Card Application & Correction Status'],
      kn: ['ಗೃಹಲಕ್ಷ್ಮಿ ಯೋಜನೆ ಉಚಿತ ನೋಂದಣಿ', 'ಗೃಹಜ್ಯೋತಿ ವಿದ್ಯುತ್ ಅರ್ಜಿ ಸಲ್ಲಿಕೆ', 'ಸೇವಾ ಸಿಂಧು ಜಾತಿ ಮತ್ತು ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ', 'ವಿದ್ಯುತ್ ಮತ್ತು ನೀರಿನ ಬಿಲ್ ಪಾವತಿ', 'ರೇಷನ್ ಕಾರ್ಡ್ ತಿದ್ದುಪಡಿ ಅರ್ಜಿ']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Bangalore+One+BDA+Complex+Jayanagar',
    verifiedSource: 'Directorate of Electronic Delivery of Citizen Services (EDCS)'
  },
  {
    id: 'fac-b1-malleshwaram',
    name: {
      en: 'Bangalore One Centre Malleshwaram',
      kn: 'ಬೆಂಗಳೂರು ಒನ್ ಕೇಂದ್ರ ಮಲ್ಲೇಶ್ವರಂ'
    },
    category: 'service_centre',
    district: 'Bengaluru Urban',
    locality: 'Malleshwaram 8th Cross',
    address: {
      en: 'Near Malleshwaram Market, 8th Cross Road, Bengaluru 560003',
      kn: 'ಮಲ್ಲೇಶ್ವರಂ ಮಾರ್ಕೆಟ್ ಹತ್ತಿರ, 8ನೇ ಕ್ರಾಸ್ ರಸ್ತೆ, ಬೆಂಗಳೂರು 560003'
    },
    latitude: 13.0034,
    longitude: 77.5709,
    contactNumber: '080-23314411',
    timings: 'Monday – Sunday: 8:00 AM – 7:00 PM',
    servicesProvided: {
      en: ['Seva Sindhu Citizen Services', 'Gruha Lakshmi & Gruha Jyothi Support', 'Senior Citizen ID Card Issuance', 'Police Verification Clearance Applications', 'Nadakacheri Revenue Service Certificates'],
      kn: ['ಸೇವಾ ಸಿಂಧು ನಾಗರಿಕ ಸೇವೆಗಳು', 'ಗೃಹಲಕ್ಷ್ಮಿ ಮತ್ತು ಗೃಹಜ್ಯೋತಿ ನೆರವು', 'ಹಿರಿಯ ನಾಗರಿಕರ ಗುರುತಿನ ಚೀಟಿ', 'ನಾಡಕಚೇರಿ ಪ್ರಮಾಣಪತ್ರಗಳು']
    },
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Bangalore+One+Malleshwaram',
    verifiedSource: 'Karnataka EDCS Portal'
  }
];
