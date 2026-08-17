import { CareProgram, ResidenceSuite, DailyActivitySlot, GalleryItem, AccreditationStandard } from '../types';

export const BUSINESS_INFO = {
  name: 'Hi Haven',
  legalName: "Condon's Home for Special Care Inc. o/a Hi Haven Manor",
  foundedYear: '2004',
  yearsOfCare: '20+',
  owners: 'Lori & Rob Condon',
  tagline: 'Personal Care & Supportive Living Sanctuary',
  location: {
    address: '36 Butter Pot Road',
    town: 'Holyrood',
    province: 'Newfoundland and Labrador',
    postalCode: 'A0A 2R0',
    country: 'Canada',
    region: 'Conception Bay South / Avalon Peninsula',
    landmarks: 'Adjacent to Butter Pot Provincial Park corridor, 30 minutes from St. John\'s'
  },
  contact: {
    phone: '(709) 229-7992',
    alternatePhone: '(236) 239-2909',
    admissionsDirect: '(709) 229-7992',
    email: 'info@hihaven.ca',
    admissionsEmail: 'admissions@hihaven.ca',
    hours: '24/7 Attendants On-Duty | Administrative Office: Mon–Fri 8:30 AM – 5:00 PM',
    visitingHours: 'Daily 9:00 AM – 8:00 PM (Family & loved ones warmly welcomed)'
  },
  emergencyNote: 'Licensed 24/7 residential personal care attendants and supervised medication administration.'
};

export const CARE_PROGRAMS: CareProgram[] = [
  {
    id: 'personal-care-l1-l2',
    category: 'personal-care',
    title: 'Level 1 & Level 2 Personal Care',
    careLevel: 'Level 1',
    shortDescription: 'Attentive, dignified daily support with activities of daily living, personal hygiene, grooming, and mobility.',
    fullDescription: 'Our foundational personal care program is tailored to residents who cherish independence yet require warm, reliable assistance with everyday routines. Operating under strict Provincial Personal Care Home Operational Standards, our dedicated attendants provide individualized care plans.',
    eligibility: 'Seniors and adults needing non-acute assistance with dressing, bathing, mobility, or nutrition.',
    highlights: [
      '24/7 on-site Personal Care Attendants (PCAs)',
      'Assistance with bathing, dressing & daily grooming',
      'Physician & community nursing liaison coordination',
      'Assisted wheelchair & walker friendly environments'
    ],
    keyFeatures: [
      'Personalized Morning & Evening Care Routines',
      'Secure Medication Storage & Timely Administration',
      'Hydration & Nutrition Health Tracking',
      'Dignified, Private En-Suite Hygiene Assistance'
    ],
    staffingRatio: 'High caregiver-to-resident presence with continuous night supervision',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Caregiver warmly assisting resident in a sunlit room'
  },
  {
    id: 'supportive-mental-health',
    category: 'mental-health',
    title: 'Specialized Mental Health & Recovery Living',
    careLevel: 'Specialized Supportive Care',
    shortDescription: 'A trauma-informed, peaceful home environment specializing in adult mental health stability and personal well-being.',
    fullDescription: 'With over two decades of recognized specialized care in Newfoundland and Labrador, Hi Haven provides a structured, tranquil sanctuary for adults living with mental health challenges. We foster emotional security, daily routine harmony, and meaningful social connection in a compassionate, non-institutional atmosphere.',
    eligibility: 'Adults requiring structured psychosocial stability, medication oversight, and supportive residential care.',
    highlights: [
      'Specialized, experienced mental wellness support staff',
      'Calm, low-stress rural natural setting in Holyrood',
      'Structured daily life routines and emotional grounding',
      'Community outings, skill-building, and social inclusion'
    ],
    keyFeatures: [
      'Individualized Emotional Wellness Planning',
      'Coordination with Regional Mental Health Case Workers',
      'Therapeutic Recreational Engagement',
      'Conflict-Free, Dignified Community Atmosphere'
    ],
    staffingRatio: 'Trained mental wellness attendants with ongoing provincial standard certifications',
    image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Peaceful garden seating with natural forest views for quiet contemplation'
  },
  {
    id: 'respite-care',
    category: 'respite',
    title: 'Short-Term Respite & Transitional Stays',
    careLevel: 'Short-Term Respite',
    shortDescription: 'Temporary, fully furnished sanctuary stays providing family caregivers essential relief and peace of mind.',
    fullDescription: 'Whether recovering from a medical procedure or allowing primary family caregivers time to rest and travel, our respite program welcomes guests into the full Hi Haven experience with open arms, home-cooked dining, and 24-hour attentive oversight.',
    eligibility: 'Short-term stays ranging from several days to several weeks, subject to assessment.',
    highlights: [
      'Fully furnished private suites with fresh linens',
      'Seamless onboarding with pre-admission assessment',
      'Full inclusion in all meals, activities, and outings',
      '24/7 care attendant presence and medication support'
    ],
    keyFeatures: [
      'Caregiver Burnout Relief for Newfoundland Families',
      'Post-Hospital Discharge Reconditioning Stays',
      'Trial Stay Opportunity Before Permanent Placement',
      'Complete Laundry, Housekeeping & Dining Included'
    ],
    staffingRatio: 'Immediate integration into our full 24/7 care network',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Welcoming furnished room with fresh flowers and warm natural light'
  },
  {
    id: 'culinary-wellness',
    category: 'living-support',
    title: 'Wholesome Culinary & Dietary Program',
    careLevel: 'Level 1',
    shortDescription: 'Three daily home-cooked, dietitian-approved meals celebrating fresh ingredients and traditional Newfoundland comfort.',
    fullDescription: 'Dining at Hi Haven is a cherished social centerpiece. Prepared fresh daily in our country kitchen, meals accommodate diabetic, low-sodium, and soft dietary needs while honoring beloved local tastes, warm soups, fresh baked breads, and seasonal flavors.',
    eligibility: 'Included with all residential stays and tailored to individual dietary guidelines.',
    highlights: [
      '3 hot nutritious meals daily plus morning/evening tea & snacks',
      'Customized textures, diabetic & allergen-safe preparations',
      'Bright, convivial dining hall with family-style hospitality',
      'Celebration dinners on holidays, birthdays & special occasions'
    ],
    keyFeatures: [
      'Locally Sourced Seasonal Ingredients Where Feasible',
      'Registered Dietitian Reviewed Menu Cycles',
      'Hydration Bars with Herbal Teas & Infused Waters',
      'Room Tray Service When Medically Necessary'
    ],
    staffingRatio: 'Dedicated culinary staff trained in food safety and dietary care',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Beautiful fresh wholesome meal served with rustic elegance'
  }
];

export const RESIDENCE_SUITES: ResidenceSuite[] = [
  {
    id: 'butter-pot-private',
    name: 'The Butter Pot Private Suite',
    tier: 'Private Sanctuary Suite',
    tagline: 'Quiet seclusion with expansive natural forest views and dedicated en-suite bath.',
    squareFeet: '320 sq. ft.',
    view: 'Panoramic views of Holyrood Valley & Butter Pot woodlands',
    description: 'Our premier private suite offers a serene personal retreat with large picture windows that capture Newfoundland\'s soft northern light. Designed with safety, comfort, and peaceful independence at its core.',
    amenities: [
      'Generous walk-in barrier-free washroom with safety handrails',
      'Individually controlled climate & heating zone',
      'Emergency call-bell response system at bedside & bath',
      'Solid oak wardrobe, dresser, and reading armchair',
      'High-definition cable TV hookup & high-speed Wi-Fi',
      'Daily housekeeping and weekly linen service'
    ],
    safetyFeatures: [
      'Non-slip engineered flooring throughout',
      'Bedside call pendant with instant attendant alert',
      'Wide door frames accommodating mobility aids',
      'Direct ground-level emergency egress'
    ],
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Bright, warmly furnished luxury private bedroom with large window and reading chair',
    floorPlanDetails: 'Includes private bath, spacious closet, sitting alcove, and panoramic forest window.'
  },
  {
    id: 'holyrood-comfort-single',
    name: 'The Holyrood Comfort Suite',
    tier: 'Comfort Single Suite',
    tagline: 'Sunlit personal room located steps from the central hearth lounge and dining hall.',
    squareFeet: '250 sq. ft.',
    view: 'Landscaped garden courtyard & sunrise exposure',
    description: 'Perfect for residents who enjoy quick, effortless access to social living areas while maintaining an intimate, cozy personal haven. Features warm earth-tone finishes and generous storage.',
    amenities: [
      'Private half-bath or shared adjacent accessible shower suite',
      'Natural pine furnishings and comfortable plush bedding',
      'Emergency alert pull stations reachable from any point',
      'Customizable display shelving for cherished family photographs',
      'Complimentary laundry and fresh towel replenishment'
    ],
    safetyFeatures: [
      'Smooth threshold transitions throughout',
      'Night-light illuminated hallway pathway',
      'Monitored smoke and heat sensor systems'
    ],
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Cozy single suite with soft textiles, gentle sunlight, and elegant wooden side tables',
    floorPlanDetails: 'Optimized single living with direct hallway access and courtyard window.'
  },
  {
    id: 'conception-companion-suite',
    name: 'The Conception Companion Suite',
    tier: 'Companion Shared Suite',
    tagline: 'Spacious shared accommodations fostering companionship and affordable peace of mind.',
    squareFeet: '420 sq. ft.',
    view: 'Rolling evergreen trees and mountain ridge line',
    description: 'Designed for couples, siblings, or residents who thrive with friendly company. Provides ample personal territory, divided privacy screens, and dual wardrobe systems.',
    amenities: [
      'Dual adjustable comfort beds with personal nightstands',
      'Two oversized closets with personal locking storage',
      'Double vanity bathroom with accessible seated shower stall',
      'Dual emergency call stations at each resident\'s bedside',
      'Shared sitting area with two comfortable armchairs'
    ],
    safetyFeatures: [
      'Color-differentiated personal zones for easy orientation',
      'Dual call cords with audible and visual indicator alerts',
      'Full ADA accessible wide bathroom doorways'
    ],
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Spacious room with dual beds, tasteful interior design, and soft neutral tones',
    floorPlanDetails: 'Generous square footage with dual closet wings and central shared lounge area.'
  }
];

export const DAILY_SCHEDULE: DailyActivitySlot[] = [
  {
    time: '8:00 AM — 9:30 AM',
    period: 'Morning',
    title: 'Sunrise Breakfast & Gentle Vitality',
    description: 'Fresh brewed coffee, farm-fresh eggs, oatmeal with berries, and morning medication administration followed by gentle seated mobility exercises.',
    category: 'Culinary Gathering',
    iconName: 'Coffee'
  },
  {
    time: '10:00 AM — 11:30 AM',
    period: 'Morning',
    title: 'Nature Walks & Garden Therapy',
    description: 'Supervised strolls along the Butter Pot fresh air grounds, bird watching, seasonal flower gardening, and mindfulness relaxation circles.',
    category: 'Wellness & Movement',
    iconName: 'Trees'
  },
  {
    time: '12:00 PM — 1:30 PM',
    period: 'Midday',
    title: 'Midday Hearth Feast & Social Lunch',
    description: 'Hearty three-course lunch in the communal dining room with warm breads, savory entrées, and lively conversation.',
    category: 'Culinary Gathering',
    iconName: 'Utensils'
  },
  {
    time: '2:00 PM — 3:30 PM',
    period: 'Afternoon',
    title: 'Creative Arts, Music & Cognitive Games',
    description: 'Acoustic Newfoundland folk music sessions, watercolor painting, trivia, bingo, and intergenerational storytelling.',
    category: 'Cognitive & Creative',
    iconName: 'Palette'
  },
  {
    time: '3:30 PM — 4:30 PM',
    period: 'Afternoon',
    title: 'Afternoon Tea & Family Visiting Hour',
    description: 'Fresh herbal teas, homemade baked goods, and warm reception for visiting family members, friends, and pastoral visitors.',
    category: 'Social & Leisure',
    iconName: 'HeartHandshake'
  },
  {
    time: '5:00 PM — 6:30 PM',
    period: 'Evening',
    title: 'Evening Comfort Dinner',
    description: 'A comforting, lighter evening meal tailored to restful digestion, followed by personal care routines and medication distribution.',
    category: 'Culinary Gathering',
    iconName: 'Sparkles'
  },
  {
    time: '7:00 PM — 8:30 PM',
    period: 'Evening',
    title: 'Fireside Gathering & Film Screening',
    description: 'Relaxation in the main hearth lounge with classic cinema, audiobooks, cards, and warm chamomile tea before tranquil night rest.',
    category: 'Social & Leisure',
    iconName: 'Tv'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Butter Pot Forest Sanctuary Grounds',
    category: 'grounds',
    categoryLabel: 'Sanctuary Grounds',
    caption: 'Serene coastal forest surroundings offering fresh Atlantic air and peaceful mountain ridge views in Holyrood, NL.',
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape'
  },
  {
    id: 'g-2',
    title: 'The Hearth Gathering Lounge',
    category: 'lifestyle',
    categoryLabel: 'Living Spaces',
    caption: 'Our central stone fireplace lounge where residents read, socialize, and enjoy acoustic music afternoons.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape'
  },
  {
    id: 'g-3',
    title: 'Sunlit Private Suite Bedroom',
    category: 'suites',
    categoryLabel: 'Accommodations',
    caption: 'Spacious, barrier-free private suite featuring warm neutral tones, comfortable armchairs, and safety call systems.',
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'portrait'
  },
  {
    id: 'g-4',
    title: 'Country Kitchen & Dining Room',
    category: 'dining',
    categoryLabel: 'Dining & Nutrition',
    caption: 'Warm communal dining where three nutritious home-cooked meals and afternoon tea are served daily.',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape'
  },
  {
    id: 'g-5',
    title: '24/7 Compassionate Care Attendants',
    category: 'care',
    categoryLabel: 'Dedicated Care',
    caption: 'Trained, caring personal care attendants providing continuous assistance with dignity and genuine warmth.',
    imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'portrait'
  },
  {
    id: 'g-6',
    title: 'Gardening & Outdoor Courtyard',
    category: 'grounds',
    categoryLabel: 'Sanctuary Grounds',
    caption: 'Raised flower beds and secure outdoor walking pathways overlooking the Holyrood hills.',
    imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape'
  },
  {
    id: 'g-7',
    title: 'Nutritious Hearth Dining Service',
    category: 'dining',
    categoryLabel: 'Dining & Nutrition',
    caption: 'Freshly prepared meals meeting certified provincial dietary guidelines and individual preferences.',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape'
  },
  {
    id: 'g-8',
    title: 'Quiet Reflection & Library Reading Corner',
    category: 'lifestyle',
    categoryLabel: 'Living Spaces',
    caption: 'Comfortable reading nooks stocked with large-print books, audiobooks, and cozy daylight windows.',
    imageUrl: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'portrait'
  }
];

export const ACCREDITATION_STANDARDS: AccreditationStandard[] = [
  {
    id: 'provincial-licensing',
    title: 'Provincial Personal Care Home Operational Standards',
    authority: 'Government of Newfoundland & Labrador (NL Health Services)',
    description: 'Officially licensed institutional facility meeting and exceeding provincial care ratios, safety inspections, staff credentialing, and sanitary guidelines.',
    status: 'Fully Licensed & Active',
    details: [
      'Regular provincial health & life-safety inspections',
      'Mandatory annual fire marshal & emergency evacuation drills',
      'Standardized medication storage, administration, and logging'
    ]
  },
  {
    id: 'staff-qualification',
    title: 'Certified Personal Care Attendants & Background Clearances',
    authority: 'Provincial Health Standards & Vulnerable Sector Screening',
    description: 'Every caregiver undergoes thorough vulnerable sector background checks, CPR/First Aid certification, dementia sensitivity, and ongoing mental health training.',
    status: '100% Certified Personnel',
    details: [
      'Comprehensive vulnerable sector criminal record screening',
      'Trauma-informed care and de-escalation certifications',
      'Medication administration competency verification'
    ]
  },
  {
    id: 'nutrition-safety',
    title: 'Certified Dietary & Food Safety Compliance',
    authority: 'Service NL & Public Health Inspection Division',
    description: 'Commercial-grade kitchen operation adhering to strict temperature controls, sanitary storage, and dietitian-reviewed nutritional balance for seniors and adults.',
    status: 'Inspected & Approved',
    details: [
      'Certified Food Handler oversight on all culinary staff',
      'Specialized texture (pureed/minced) and diabetic protocol adherence',
      'Fresh potable water and continuous emergency backup food supply'
    ]
  },
  {
    id: 'legacy-reputation',
    title: '20+ Year Dedicated Family-Operated Legacy',
    authority: "Condon's Home for Special Care Inc.",
    description: 'Deeply rooted in the Holyrood community under the leadership of Lori and Rob Condon, prioritizing human warmth over corporate impersonality.',
    status: 'Established 2004',
    details: [
      'Over 2 decades of continuous service in Newfoundland',
      'Strong collaborative relationships with regional hospitals & case workers',
      'Direct owner involvement in daily care operations'
    ]
  }
];

export const FAQS = [
  {
    question: 'Where is Hi Haven located and what communities do you serve?',
    answer: 'Hi Haven (Hi-Haven Manor) is located at 36 Butter Pot Road in Holyrood, Newfoundland & Labrador (A0A 2R0). We are conveniently located just off the Trans-Canada Highway near Butter Pot Provincial Park, approximately 30 minutes from St. John\'s and Conception Bay South. We welcome residents from across the Avalon Peninsula and all regions of Newfoundland.'
  },
  {
    question: 'What levels of care are provided at Hi Haven?',
    answer: 'We provide Level 1 and Level 2 Personal Care, specialized residential support for individuals with mental health needs, short-term respite stays, and supervised adult living. Our 24/7 personal care attendants assist with medication management, bathing, dressing, nutritious meals, and daily activities.'
  },
  {
    question: 'Who owns and operates Hi Haven Manor?',
    answer: 'Hi Haven Manor is owned and operated by Lori and Rob Condon under Condon\'s Home for Special Care Inc., providing continuous, compassionate care to Newfoundland families for over 20 years.'
  },
  {
    question: 'How do admissions and government subsidies work in Newfoundland?',
    answer: 'Individuals can be admitted privately or through Newfoundland & Labrador Health Services (NLHS) personal care home subsidies. We work closely with regional health case managers, social workers, and families to streamline the clinical assessment and admission paperwork.'
  },
  {
    question: 'Can families visit their loved ones at any time?',
    answer: 'Yes. We consider family and friends essential partners in our residents\' well-being. General visiting hours run daily from 9:00 AM to 8:00 PM, and we accommodate special family circumstances and celebrations.'
  },
  {
    question: 'How do I arrange a private tour or care consultation?',
    answer: 'You can schedule an in-person tour or telephone consultation using our online tour booking tool on this website, or by calling our direct office line at (709) 229-7992.'
  }
];
