import { CareProgram, ResidenceSuite, DailyActivitySlot, GalleryItem, AccreditationStandard } from '../types';

export const BUSINESS_INFO = {
  name: 'Hi Haven Manor',
  shortName: 'Hi Haven',
  legalName: "Condon's Home for Special Care Inc. o/a Hi Haven Manor",
  capacity: '17-Bed Residential Home',
  bedCount: 17,
  foundedYear: '2004',
  yearsOfCare: '20+',
  owners: 'Lori & Rob Condon',
  tagline: 'A Place to Feel at Home',
  subTagline: '17-Bed Community Care Home • Holyrood, Newfoundland',
  location: {
    address: '36 Butter Pot Road',
    town: 'Holyrood',
    province: 'Newfoundland and Labrador',
    postalCode: 'A0A 2R0',
    country: 'Canada',
    region: 'Conception Bay South / Avalon Peninsula',
    landmarks: 'Located in tranquil Holyrood near Butter Pot hills, 30 minutes from St. John\'s'
  },
  contact: {
    phone: '(709) 229-7992',
    alternatePhone: '(236) 239-2909',
    email: 'info@hihaven.ca',
    admissionsEmail: 'admissions@hihaven.ca',
    hours: '24/7 Caring Staff On-Site | Admissions Inquiries: Mon–Fri 8:30 AM – 5:00 PM',
    visitingHours: 'Daily 9:00 AM – 8:00 PM (Family & support networks warmly welcomed)'
  },
  emergencyNote: '24/7 on-site personal care attendants, certified medication management, and close liaison with NL Health Services.'
};

export const CORE_PILLARS = [
  {
    number: '01',
    title: '17-Bed Intimate Community',
    description: 'A small, close-knit home where every resident is known personally by name, story, and daily preferences.'
  },
  {
    number: '02',
    title: 'Mental Health & Recovery Focus',
    description: 'Compassionate, trauma-informed support for adults living with mental health and addiction-related challenges.'
  },
  {
    number: '03',
    title: '24/7 Dedicated Staff Presence',
    description: 'Trained, certified personal care attendants on-duty around the clock providing stability, safety, and encouragement.'
  },
  {
    number: '04',
    title: '20+ Years in Holyrood',
    description: 'Rooted in Newfoundland hospitality under the continuous guidance of Lori & Rob Condon since 2004.'
  }
];

export const CARE_PROGRAMS: CareProgram[] = [
  {
    id: 'mental-health-recovery',
    category: 'mental-health',
    title: 'Supportive Mental Health & Recovery Living',
    careLevel: 'Mental Health & Recovery Support',
    shortDescription: 'A trauma-informed, peaceful home environment fostering emotional stability, daily routine, and personal dignity.',
    fullDescription: 'For over 20 years, Hi Haven Manor has provided a structured, non-judgmental residential home for adults living with mental health and addiction-related challenges. We believe in treating each person as a whole human being rather than a diagnosis. Our supportive environment builds a steady foundation through predictable daily rhythms, emotional safety, and respectful encouragement.',
    eligibility: 'Adults requiring structured daily stability, supportive housing, and recovery-oriented residential living.',
    highlights: [
      'Trauma-informed, compassionate caregiver approach',
      'Peaceful, low-stress residential setting in Holyrood',
      'Daily routine harmony, emotional grounding & encouragement',
      'Coordination with community mental health workers & physicians'
    ],
    keyFeatures: [
      'Individualized Resident Support Plans',
      'Safe, Respectful, Non-Institutional Environment',
      'Relapse-Sensitive Recovery Support & Stability',
      'Active Coordination with NL Health Services Case Teams'
    ],
    staffingRatio: 'High staff-to-resident presence with continuous 24/7 supervision',
    image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Peaceful garden seating with natural forest views in Holyrood'
  },
  {
    id: 'personal-care-services',
    category: 'personal-care',
    title: 'Level 1 & Level 2 Personal Care',
    careLevel: 'Level 1 & 2 Personal Care',
    shortDescription: 'Attentive, dignified daily support with dressing, personal hygiene, grooming, and mobility.',
    fullDescription: 'Our certified personal care attendants provide gentle, respectful assistance with the activities of daily living. Operating in strict adherence to Provincial Personal Care Home Operational Standards, we help residents maintain optimal self-reliance while providing the steady helping hand they need.',
    eligibility: 'Individuals requiring non-acute assistance with personal hygiene, medication oversight, or mobility.',
    highlights: [
      '24/7 on-site Personal Care Attendants (PCAs)',
      'Assistance with bathing, grooming, and laundry',
      'Physician, pharmacy, and community nurse coordination',
      'Safe, single-level accessible living spaces'
    ],
    keyFeatures: [
      'Certified Medication Storage & Timely Administration',
      'Support with Morning & Evening Routines',
      'Hydration & Well-Being Monitoring',
      'Private, Respectful Hygiene Assistance'
    ],
    staffingRatio: 'Continuous day and night attendants on-site 365 days a year',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Caregiver warmly assisting resident in a bright, sunlit room'
  },
  {
    id: 'nutrition-culinary',
    category: 'living-support',
    title: 'Home-Cooked Nutrition & Family Dining',
    careLevel: 'Nutrition & Wellness',
    shortDescription: 'Three hot, nutritious home-cooked meals prepared daily, served family-style with fresh baking and tea times.',
    fullDescription: 'At Hi Haven, mealtimes are the heartbeat of our home. Prepared fresh daily in our country kitchen, meals honor hearty Newfoundland comfort food alongside balanced nutrition reviewed by registered dietitians. We accommodate diabetic, low-sodium, and special dietary needs while creating a warm, social gathering place around the table.',
    eligibility: 'Included for all residents, customized for individual health and dietary requirements.',
    highlights: [
      '3 hot nutritious meals daily plus morning and evening snacks',
      'Freshly baked breads, hearty soups, and traditional comfort favorites',
      'Dietitian-approved menu cycles and diabetic-friendly alternatives',
      'Warm communal dining table encouraging genuine conversation'
    ],
    keyFeatures: [
      'Family-Style Dining Experience in Warm Hearth Setting',
      'Special Holiday Dinners & Resident Birthday Celebrations',
      'Continuous Access to Herbal Teas, Coffee & Fresh Fruit',
      'Dietary Accommodations for Allergies & Health Needs'
    ],
    staffingRatio: 'Dedicated kitchen staff trained in safe food handling and therapeutic diets',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Wholesome, home-cooked meal served in a warm residential dining setting'
  },
  {
    id: 'life-skills-community',
    category: 'recovery-support',
    title: 'Life Skills, Social Connection & Routine',
    careLevel: 'Life Skills & Respite',
    shortDescription: 'Fostering self-esteem, healthy daily routines, creative expression, and community belonging.',
    fullDescription: 'Recovery and stability flourish when individuals have a sense of purpose and connection. We encourage residents to participate in daily household rhythms, personalized hobbies, walks in the fresh Holyrood air, board games, music afternoons, and supervised community outings.',
    eligibility: 'Open to all residents to participate at their own comfortable pace.',
    highlights: [
      'Gentle daily routine building self-reliance and peace of mind',
      'Outdoor walks along quiet Butter Pot country roads',
      'Art, puzzles, acoustic music, and social recreation',
      'Respect for personal quiet time and individual space'
    ],
    keyFeatures: [
      'Support with Personal Organization & Room Care',
      'Safe, Inclusive Social Spaces Without Pressure',
      'Supervised Community Outings & Local Shopping Trips',
      'Short-Term Respite Stays for Caregiver Relief'
    ],
    staffingRatio: 'Attendants actively engaged in recreational and social support',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Comfortable living room with warm light, armchairs, and books'
  }
];

export const RESIDENCE_SPACES: ResidenceSuite[] = [
  {
    id: 'private-bedroom',
    name: 'Private Resident Bedroom',
    tier: 'Private Bedroom',
    tagline: 'A quiet, personal haven with natural light and personalized comfort.',
    view: 'Windows overlooking Holyrood woodlands & surrounding hills',
    description: 'Our private bedrooms provide a calm, peaceful personal sanctuary where residents can rest, read, and recharge. Residents are encouraged to personalize their room with family photos, cherished keepsakes, and favorite beddings to make it truly their own.',
    amenities: [
      'Comfortable twin or full bed with fresh linens and pillows',
      'Solid wood dresser, wardrobe closet, and comfortable armchair',
      'Large picture window bringing in soft natural daylight',
      'Individual baseboard heat control for personal comfort',
      'Emergency call system within arm\'s reach of the bed',
      'Regular housekeeping, laundry, and linen services'
    ],
    safetyFeatures: [
      'Accessible doorway widths accommodating mobility aids',
      'Bedside call-bell alert system for 24/7 staff support',
      'Non-slip flooring and ground-level safety egress',
      'Integrated smoke and heat detection systems'
    ],
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Warm, cozy private bedroom with soft natural light, wooden nightstand, and clean linens'
  },
  {
    id: 'semi-private-bedroom',
    name: 'Semi-Private Shared Bedroom',
    tier: 'Semi-Private Room',
    tagline: 'Spacious shared accommodations fostering companionship and connection.',
    view: 'Quiet garden courtyard views and sunrise exposure',
    description: 'Designed for residents who thrive with friendly companionship. Our semi-private rooms are arranged with ample personal territory, divided storage, and individual privacy considerations.',
    amenities: [
      'Individual comfortable beds with personal reading lamps',
      'Dedicated double wardrobes and private dresser drawers',
      'Shared adjacent accessible bathroom with walk-in shower',
      'Bedside emergency call stations for each resident',
      'Bright windows welcoming daylight throughout the day',
      'Weekly linen changes and daily tidy service'
    ],
    safetyFeatures: [
      'Clear individual zones for easy personal orientation',
      'Dual emergency call pull cords with quick attendant response',
      'Slip-resistant bathroom surfaces and sturdy support grab bars'
    ],
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Bright, clean shared room with comfortable wooden beds and soft neutral tones'
  },
  {
    id: 'hearth-living-room',
    name: 'The Communal Hearth & Living Room',
    tier: 'Communal Living Space',
    tagline: 'The heart of our home for conversation, relaxation, music, and quiet reading.',
    view: 'Central gathering hub with views of the front garden',
    description: 'A welcoming, comfortable living area furnished with deep sofas, a fireplace mantel, bookshelves filled with novels and puzzles, a television, and quiet corners for conversation with family or fellow residents.',
    amenities: [
      'Plush sofas and supportive armchairs around the hearth',
      'Extensive library of books, board games, cards, and puzzles',
      'Television for movie nights, sports broadcasts, and news',
      'Piano/guitar area for impromptu Newfoundland music',
      'Open-door family visiting area throughout visiting hours'
    ],
    safetyFeatures: [
      'Open-concept layout allowing 24/7 gentle staff supervision',
      'Well-lit hallways and level, trip-free floor transitions',
      'Direct access to outdoor garden patio'
    ],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Cozy living room with fireplace, comfortable armchairs, and warm wooden accents'
  },
  {
    id: 'kitchen-dining-room',
    name: 'Country Kitchen & Dining Room',
    tier: 'Communal Living Space',
    tagline: 'Where hot meals are prepared fresh and shared together like a family.',
    view: 'Sunlit dining area overlooking the Holyrood grounds',
    description: 'Our dining room is where our community comes together three times a day. Filled with the comforting aromas of home cooking, fresh bread, and tea, it represents the warmth and hospitality of a genuine Newfoundland home.',
    amenities: [
      'Large dining tables for shared, family-style meals',
      'Hot home-cooked breakfast, lunch, and dinner served daily',
      'Continuous access to fresh hot tea, coffee, and fruit snacks',
      'Dietary accommodation for soft diets, diabetic, and low-sodium needs',
      'Special celebration table for birthdays and holiday feasts'
    ],
    safetyFeatures: [
      'Certified commercial kitchen meeting provincial food safety standards',
      'Supervised dining assistance for residents requiring mealtime support',
      'Non-slip flooring and accessible dining seating'
    ],
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Warm country kitchen and dining area with wooden tables and welcoming atmosphere'
  }
];

export const DAILY_SCHEDULE: DailyActivitySlot[] = [
  {
    time: '7:30 AM — 9:00 AM',
    period: 'Morning',
    title: 'Warm Breakfast & Morning Check-In',
    description: 'Hot porridge, eggs, toast, tea, and coffee in the dining room. Staff administer morning medications and greet each resident individually to begin the day on a calm, positive note.',
    category: 'Morning Routine & Wellness',
    iconName: 'Coffee'
  },
  {
    time: '9:30 AM — 11:30 AM',
    period: 'Morning',
    title: 'Fresh Air Walks & Daily Rhythms',
    description: 'Strolls around the quiet Butter Pot grounds, tending to the garden, personal tidying, or relaxing in the living room with the morning paper and radio.',
    category: 'Life Skills & Community',
    iconName: 'Trees'
  },
  {
    time: '12:00 PM — 1:30 PM',
    period: 'Midday',
    title: 'Home-Cooked Midday Dinner',
    description: 'A hearty hot meal—soups, roast meats, vegetables, and fresh rolls—served family-style. Midday medications administered with care.',
    category: 'Home-Cooked Meals',
    iconName: 'Utensils'
  },
  {
    time: '2:00 PM — 3:30 PM',
    period: 'Afternoon',
    title: 'Creative Activities & Social Connection',
    description: 'Board games, card matches, puzzles, craft projects, music listening, or simply resting quietly in private rooms.',
    category: 'Life Skills & Community',
    iconName: 'Palette'
  },
  {
    time: '3:30 PM — 4:30 PM',
    period: 'Afternoon',
    title: 'Afternoon Tea & Family Visiting',
    description: 'Fresh baked treats, tea, and coffee. Family members and friends are warmly welcomed to visit, sit in the living room, or enjoy the patio.',
    category: 'Rest & Social Connection',
    iconName: 'HeartHandshake'
  },
  {
    time: '5:00 PM — 6:30 PM',
    period: 'Evening',
    title: 'Comfort Evening Supper',
    description: 'A lighter, comforting evening meal followed by tea. Evening medications are administered and staff assist with nighttime preparations.',
    category: 'Home-Cooked Meals',
    iconName: 'Utensils'
  },
  {
    time: '7:00 PM — 9:00 PM',
    period: 'Evening',
    title: 'Fireside Relaxation & Wind-Down',
    description: 'Watching an evening movie, listening to music, reading by the hearth, or relaxing before a peaceful night\'s sleep under 24/7 staff supervision.',
    category: 'Rest & Social Connection',
    iconName: 'Tv'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Hi Haven Manor in Holyrood, NL',
    category: 'home',
    categoryLabel: 'Our 17-Bed Home',
    caption: 'Our peaceful residential home in Holyrood, surrounded by natural evergreen trees and Butter Pot hills.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape'
  },
  {
    id: 'g-2',
    title: 'The Hearth & Communal Living Room',
    category: 'home',
    categoryLabel: 'Living Spaces',
    caption: 'Comfortable living room with warm fireplace, sofas, book library, and peaceful gathering nooks.',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape'
  },
  {
    id: 'g-3',
    title: 'Sunlit Private Resident Bedroom',
    category: 'rooms',
    categoryLabel: 'Bedrooms',
    caption: 'Clean, warm private room with natural wood furnishings, daylight windows, and personal touches.',
    imageUrl: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'portrait'
  },
  {
    id: 'g-4',
    title: 'Country Kitchen & Shared Dining',
    category: 'dining',
    categoryLabel: 'Nutritious Meals',
    caption: 'Where three wholesome, home-cooked meals and afternoon tea are prepared and shared every day.',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape'
  },
  {
    id: 'g-5',
    title: '24/7 Compassionate Care Attendants',
    category: 'care',
    categoryLabel: 'Caring Staff',
    caption: 'Attentive, certified staff on-duty around the clock providing respect, support, and medication management.',
    imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'portrait'
  },
  {
    id: 'g-6',
    title: 'Quiet Garden & Walking Grounds',
    category: 'grounds',
    categoryLabel: 'Tranquil Grounds',
    caption: 'Peaceful outdoor grounds along Butter Pot Road with fresh coastal forest air and seating areas.',
    imageUrl: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape'
  },
  {
    id: 'g-7',
    title: 'Home-Cooked Nutritious Dining',
    category: 'dining',
    categoryLabel: 'Nutritious Meals',
    caption: 'Hearty, balanced meals prepared fresh daily accommodating diabetic and special dietary guidelines.',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape'
  },
  {
    id: 'g-8',
    title: 'Reading Nook & Quiet Reflection',
    category: 'home',
    categoryLabel: 'Living Spaces',
    caption: 'Quiet spaces for reading, reflection, puzzle-solving, or chatting with visiting loved ones.',
    imageUrl: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'portrait'
  }
];

export const ACCREDITATION_STANDARDS: AccreditationStandard[] = [
  {
    id: 'provincial-licensing',
    title: 'Provincial Personal Care Home Standards',
    authority: 'Government of Newfoundland & Labrador (NL Health Services)',
    description: 'Officially licensed residential personal care home meeting all provincial operating standards, safety inspections, staff ratios, and hygiene protocols.',
    status: 'Fully Licensed & Active',
    details: [
      'Regular provincial health and life-safety inspections',
      'Routine fire safety, emergency plans, and evacuation protocols',
      'Standardized medication storage, administration, and logging'
    ]
  },
  {
    id: 'staff-qualification',
    title: 'Certified Personal Care Attendants (PCAs)',
    authority: 'Provincial Health Standards & Vulnerable Sector Clearance',
    description: 'Our caregivers hold verified credentials, mandatory vulnerable sector screening, First Aid/CPR, and specialized mental health support training.',
    status: '100% Screened Personnel',
    details: [
      'Mandatory criminal record & vulnerable sector checks for all staff',
      'Trauma-informed care and de-escalation training',
      'Certified medication administration competency verification'
    ]
  },
  {
    id: 'nutrition-safety',
    title: 'Dietary & Food Safety Compliance',
    authority: 'Service NL & Public Health Inspection Division',
    description: 'Our kitchen meets all public health inspection standards, offering balanced, dietitian-reviewed meal planning with fresh ingredients.',
    status: 'Inspected & Approved',
    details: [
      'Certified Food Handler oversight on kitchen operations',
      'Specialized texture and diabetic protocol adherence',
      'Continuous fresh drinking water and emergency food reserves'
    ]
  },
  {
    id: 'legacy-reputation',
    title: '20+ Year Dedicated Family-Led Care',
    authority: "Condon's Home for Special Care Inc.",
    description: 'Operated by Lori and Rob Condon in Holyrood since 2004, providing consistent, trustworthy community care rooted in human kindness.',
    status: 'Established 2004',
    details: [
      'Over 2 decades of continuous service to Newfoundland families',
      'Strong collaboration with NL Health Services case managers & social workers',
      'Direct owner involvement in daily operations and resident well-being'
    ]
  }
];

export const ADMISSION_STEPS = [
  {
    step: '01',
    title: 'Initial Conversation & Inquiry',
    description: 'Call or message us. We listen compassionately to your situation, discuss care needs, and explain how our home operates.'
  },
  {
    step: '02',
    title: 'Warm In-Person Visit',
    description: 'Come see the home, meet Lori & Rob and our caring staff, view available rooms, and get a real feel for our calm community.'
  },
  {
    step: '03',
    title: 'Care Review & Subsidy Coordination',
    description: 'We collaborate with NL Health Services case managers, social workers, or family physicians to ensure proper medical and subsidy paperwork is arranged.'
  },
  {
    step: '04',
    title: 'Welcoming Move-In & Settling In',
    description: 'We help set up the room with personal belongings, establish comfortable daily routines, and welcome the resident warmly into the Hi Haven family.'
  }
];

export const FAQS = [
  {
    question: 'What kind of home is Hi Haven Manor?',
    answer: 'Hi Haven Manor is a 17-bed community care home in Holyrood, Newfoundland & Labrador. We provide a supportive, family-style residential environment for individuals living with mental health and addiction-related challenges, as well as those needing Level 1 and Level 2 personal care. We are a home and a community first—not an institution or a hospital.'
  },
  {
    question: 'Who lives at Hi Haven and what care do you provide?',
    answer: 'Our residents are adults and seniors who benefit from structured daily routines, 24/7 staff presence, medication management, home-cooked meals, and a calm, supportive environment. We treat every resident with respect and dignity as an individual person.'
  },
  {
    question: 'How do admissions and NL Health Services subsidies work?',
    answer: 'Placements can be arranged privately or through Newfoundland & Labrador Health Services (NLHS) personal care home subsidies. We regularly work with regional health case managers, social workers, and families to help navigate assessments and subsidy approvals smoothly.'
  },
  {
    question: 'Who owns and runs Hi Haven Manor?',
    answer: 'Hi Haven Manor is owned and operated by Lori and Rob Condon under Condon\'s Home for Special Care Inc. They have provided dedicated, hands-on community care in Holyrood for over 20 years.'
  },
  {
    question: 'Can family and friends visit?',
    answer: 'Absolutely. Maintaining close connections with family and loved ones is vital to well-being. Our visiting hours are daily from 9:00 AM to 8:00 PM, and we warmly welcome family members to spend time in our living room, garden, or private suites.'
  },
  {
    question: 'How is medication managed?',
    answer: 'All medications are securely stored and administered by trained, certified personal care attendants according to precise physician orders and provincial personal care home standards, in close partnership with local pharmacies.'
  },
  {
    question: 'How can I schedule a visit or ask questions?',
    answer: 'You can arrange a visit using our online visit scheduling form on this page or by calling us directly at (709) 229-7992. We are always happy to speak with you openly and answer any questions.'
  }
];
