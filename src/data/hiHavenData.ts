import { CareProgram, ResidenceSuite, DailyActivitySlot, GalleryItem, AccreditationStandard } from '../types';
import hiHavenMainExterior from '../assets/images/hi_haven_exact_screenshot.png';
import hiHavenInteriorDining from '../assets/images/hi_haven_interior_dining_1788296951606.jpg';
import hiHavenLawnChairs from '../assets/images/hi_haven_lawn_chairs_1788296978599.jpg';
import hiHavenPicnicExterior from '../assets/images/hi_haven_exterior_picnic_1788296990761.jpg';
import hiHavenSign from '../assets/images/hi_haven_entrance_sign_1788296965816.jpg';
import hiHavenParkGrounds from '../assets/images/hi_haven_park_grounds_1788297005216.jpg';
import hiHavenDriveway from '../assets/images/hi_haven_driveway_approach_1788297049806.jpg';
import hiHavenLakeSummer from '../assets/images/hi_haven_lake_summer_1788297023231.jpg';
import hiHavenLakeWinter from '../assets/images/hi_haven_lake_winter_1788297036501.jpg';

export const BUSINESS_INFO = {
  name: 'Hi Haven Manor',
  shortName: 'Hi Haven',
  legalName: "Hi Haven Manor",
  capacity: '15 Adult Residents Maximum',
  bedCount: 15,
  foundedYear: '40+ Years of History',
  renovationYear: '2015 (Modernized Under New Management)',
  yearsOfCare: '40+',
  tagline: 'A Place to Feel at Home',
  subTagline: 'Personalized Residential Care Home • Holyrood, Newfoundland & Labrador',
  location: {
    address: '36 Butterpot Road',
    town: 'Holyrood',
    province: 'Newfoundland and Labrador',
    postalCode: 'A0A 2R0',
    country: 'Canada',
    region: 'Conception Bay / Avalon Peninsula',
    landmarks: 'Nestled in a peaceful, park-like environment in Holyrood, only 30 minutes from downtown St. John’s'
  },
  contact: {
    phone: '709-229-7992',
    phoneDisplay: '709-229-7992',
    email: 'info@hihaven.ca',
    admissionsEmail: 'info@hihaven.ca',
    hours: '24/7 Supervised Living Accommodations | Inquiries: Mon–Fri 8:30 AM – 5:00 PM',
    visitingHours: 'Daily visiting encouraged — We actively maintain strong bonds with family & friends'
  },
  emergencyNote: '24/7 staff supervision, certified Personal Care Attendants (PCAs), weekly doctor visits, and access to psychiatric specialists.'
};

export const CORE_PILLARS = [
  {
    number: '01',
    title: '15 Adult Residents Maximum',
    description: 'A small, personalized home environment that feels like a real family rather than an institution.'
  },
  {
    number: '02',
    title: 'Mental Health & Addiction Program',
    description: 'Supervised residential living, clinical support, therapeutic recreation, and leisure under Eastern Health.'
  },
  {
    number: '03',
    title: 'Certified PCA Staff & Weekly Doctor',
    description: 'Trained Personal Care Attendants, visiting General Practitioner, and access to medical and psychiatric specialists.'
  },
  {
    number: '04',
    title: 'Over 40 Years of Heritage',
    description: 'A cherished Holyrood property with over 4 decades of history, fully renovated and updated in 2015.'
  }
];

export const AMENITIES_SERVICES_LIST = [
  {
    title: 'Home Cooked Meals',
    description: 'Nutritious, delicious meals prepared fresh daily in a warm family dining atmosphere.',
    category: 'Nutrition'
  },
  {
    title: 'Furnished Resident Accommodations',
    description: 'Comfortable, personalized rooms in an intimate 15-resident maximum setting.',
    category: 'Accommodations'
  },
  {
    title: 'Complimentary Housekeeping & Laundry',
    description: 'Complete daily housekeeping and laundry services included at no additional charge.',
    category: 'Living Services'
  },
  {
    title: 'Assistance with Personal Care as Required',
    description: 'Certified Personal Care Attendants providing respectful assistance tailored to each resident.',
    category: 'Personal Care'
  },
  {
    title: 'Weekly Doctor Visits',
    description: 'Ongoing medical attention from a local General Practitioner right at our home.',
    category: 'Medical Care'
  },
  {
    title: 'Access to Psychiatric Services',
    description: 'Clinical support and specialist coordination under the Mental Health & Addiction program.',
    category: 'Medical Care'
  },
  {
    title: 'Hair Stylist & Foot Care Services',
    description: 'On-site professional hair styling and specialized foot care for comfort and well-being.',
    category: 'Personal Wellness'
  },
  {
    title: 'In-House Canteen',
    description: 'A convenient on-site canteen for snacks, treats, and personal daily items.',
    category: 'Convenience'
  },
  {
    title: 'Transportation to Medical Appointments',
    description: 'Safe, coordinated transportation to healthcare clinics and specialist visits.',
    category: 'Transportation'
  },
  {
    title: 'Recreation & Leisure Program',
    description: 'Therapeutic recreation, games, social activities, crafts, and outdoor walks.',
    category: 'Recreation'
  },
  {
    title: 'Library & Free WiFi',
    description: 'Quiet reading corners with a collection of books, plus high-speed WiFi throughout.',
    category: 'Leisure'
  },
  {
    title: 'Near Holyrood Community Amenities',
    description: 'Conveniently located near town shops, churches, boardwalk, and recreational spots.',
    category: 'Community'
  },
  {
    title: '30 Minutes from Downtown St. John’s',
    description: 'Tranquil, park-like woodland setting with quick access to major provincial health centres.',
    category: 'Location'
  }
];

export const ABOUT_US_STORY = {
  headline: 'Our History & Heart: Over 40 Years in Holyrood',
  subheading: 'From Historic Woodland Motel & Cabins to a Cherished Community Care Home',
  paragraphs: [
    'Hi Haven Manor has been a family-run establishment in Holyrood for over 40 years. Originally, our property served the community as a beloved tavern and motel, complete with cabins for travellers and wooded grounds for camping. Following the closure of the local refinery, the property began its meaningful new chapter, transforming into a dedicated residential care home for adults in need of supportive living.',
    'In 2015, Hi Haven Manor came under new ownership and management who embarked on comprehensive renovations and structural updates, modernizing the building, accommodations, and communal facilities while preserving its warm, down-home Newfoundland charm.',
    'Today, Hi Haven Manor operates under the Mental Health and Addiction program of Eastern Health (Newfoundland and Labrador Health Services). Because our program is government-subsidized, potential residents and their families can readily apply for provincial financial assistance.',
    'Our philosophy is simple: we provide a surrogate family setting where every resident is treated with dignity, kindness, and personal respect. We assist each individual to reach their maximum potential for growth and self-determination through individualized care planning, recreational programming, and clinical support.',
    'We are proud that our dedicated staff have completed their certified PCA (Personal Care Attendant) training, ensuring professional, compassionate care around the clock. We also place great value on keeping families close, actively encouraging visits and staying in constant communication with loved ones.'
  ],
  homeEnvironmentHighlights: [
    'Intimate scale: 15 adult residents maximum for a true home feel vs. an institution',
    'Park-like environment beautifully nestled among the evergreens of Holyrood',
    'Self-determined care: Supervision provided is no greater than necessary, encouraging community integration',
    'Weekly community General Practitioner visits and access to psychiatric specialists',
    'Government-subsidized placement options through NL Health Services'
  ]
};

export const CARE_PROGRAMS: CareProgram[] = [
  {
    id: 'mental-health-recovery',
    category: 'mental-health',
    title: 'Mental Health & Addiction Residential Program',
    careLevel: 'Supervised Living & Clinical Support',
    shortDescription: 'Supervised accommodations, clinical support, therapeutic recreation, and a leisure program in a calm park-like setting.',
    fullDescription: 'Under the Mental Health and Addiction program of Eastern Health (NL Health Services), Hi Haven Manor provides supervised living accommodations for adults experiencing severe and persistent mental illness or recovery challenges. Our supportive team provides steady clinical liaison, structured daily routines, and encouragement, ensuring residents retain their independence and autonomy.',
    eligibility: 'Adults requiring supportive housing, psychiatric specialist coordination, and structured community living (Government subsidized).',
    highlights: [
      'Residential services under Eastern Health / NLHS Mental Health & Addiction program',
      'Clinical support, therapeutic recreation, and customized leisure activities',
      'Encouraging self-determination: residents determine how to meet their own goals',
      'Supervision no greater than necessary to foster active community integration'
    ],
    keyFeatures: [
      'Comprehensive Individualized Care Plans',
      'Weekly Doctor Visits & Access to Psychiatric Specialists',
      'Structured Yet Flexible Daily Living Routines',
      'Subsidized Placements Through NL Health Services'
    ],
    staffingRatio: '24/7 supervision with certified Personal Care Attendants (PCAs)',
    image: hiHavenPicnicExterior,
    imageAlt: 'Hi Haven Manor peaceful residential care home exterior and picnic grounds in Holyrood'
  },
  {
    id: 'personal-care-services',
    category: 'personal-care',
    title: 'Daily Living & Personal Care Support',
    careLevel: 'Level 1 & Level 2 Personal Care',
    shortDescription: 'Attentive, dignified assistance with personal hygiene, bathing, dressing, medication, and mobility.',
    fullDescription: 'Our certified Personal Care Attendants provide respectful, compassionate support with the activities of daily living. We assist residents with hygiene, grooming, and medication administration while actively promoting their self-reliance in an intimate 15-resident household.',
    eligibility: 'Individuals needing support with daily living activities, medication oversight, or mobility in a supportive setting.',
    highlights: [
      'Certified Personal Care Attendants (PCAs) on duty 24/7',
      'Supervised medication storage and scheduled administration',
      'Complimentary housekeeping, linen changes, and personal laundry',
      'Regular on-site visits from visiting General Practitioner'
    ],
    keyFeatures: [
      'Safe, Barrier-Free Single-Level Accommodations',
      'Assistance with Bathing, Dressing & Grooming',
      'Hair Stylist & Specialized Foot Care Services',
      'Transportation Arranged to Medical Appointments'
    ],
    staffingRatio: 'Continuous 24/7 on-site attendant care',
    image: hiHavenMainExterior,
    imageAlt: 'Hi Haven Manor home care setting in Holyrood, NL'
  },
  {
    id: 'nutrition-culinary',
    category: 'living-support',
    title: 'Fresh Home Cooked Meals & Dining',
    careLevel: 'Home-Cooked Nutrition',
    shortDescription: 'Three hot home-cooked meals prepared daily, plus tea times, snacks, and an in-house canteen.',
    fullDescription: 'At Hi Haven Manor, home-cooked food is at the heart of our surrogate family setting. Prepared fresh daily, our meals offer wholesome Newfoundland comfort food and balanced nutrition, accommodating special diets, diabetic needs, and individual tastes.',
    eligibility: 'Included for all 15 residents, with dietary accommodations.',
    highlights: [
      '3 hot nutritious home-cooked meals served daily',
      'Fresh baking, evening snacks, and continuous tea & coffee',
      'In-house canteen for favorite treats and personal items',
      'Warm family dining table encouraging companionship'
    ],
    keyFeatures: [
      'Family-Style Dining in a Relaxed Setting',
      'Holiday Dinners & Resident Birthday Celebrations',
      'Special Diet & Texture Modifications as Needed',
      'Dietary Balance in a Welcoming Kitchen Atmosphere'
    ],
    staffingRatio: 'Dedicated kitchen staff and PCA support during all mealtimes',
    image: hiHavenInteriorDining,
    imageAlt: 'Hi Haven Manor home-cooked meals and dining room in Holyrood'
  },
  {
    id: 'recreation-community',
    category: 'recovery-support',
    title: 'Therapeutic Recreation, Leisure & Community',
    careLevel: 'Recreation & Life Skills',
    shortDescription: 'Fostering social connection, leisure, library time, outdoor walks, and Holyrood community life.',
    fullDescription: 'Residents are supported to live active, meaningful lives. We provide a therapeutic recreation program, a library corner, free WiFi, social games, and outings into Holyrood, all while giving residents the space to determine how they spend their own time.',
    eligibility: 'All residents participate at their own comfort level and preference.',
    highlights: [
      'Therapeutic recreation and leisure activities',
      'Park-like outdoor grounds with colorful lawn seating and trees',
      'In-house library, board games, crafts, and free WiFi',
      'Convenient access to Holyrood town directory and amenities'
    ],
    keyFeatures: [
      'Close Bonds with Family & Friends (Visits Encouraged)',
      'Community Integration & Local Town Excursions',
      'Respect for Quiet Time and Individual Independence',
      'Surrogate Family Atmosphere Full of Warmth'
    ],
    staffingRatio: 'Attendants actively engaged in recreational support',
    image: hiHavenLawnChairs,
    imageAlt: 'Hi Haven Manor park-like grounds and colorful Adirondack lawn seating'
  }
];


export interface ServiceAmenityItem {
  title: string;
  description: string;
  icon: string;
  category: 'core' | 'health' | 'living' | 'location';
}

export const SERVICES_AND_AMENITIES: ServiceAmenityItem[] = [
  {
    title: 'Home Cooked Meals',
    description: '3 wholesome, delicious home-cooked meals prepared fresh daily, plus snacks and continuous tea/coffee.',
    icon: 'Utensils',
    category: 'core'
  },
  {
    title: 'Furnished Resident Accommodations',
    description: 'Comfortable, sunlit bedrooms with personal furnishings, wardrobes, and window views of Holyrood.',
    icon: 'Bed',
    category: 'living'
  },
  {
    title: 'Complimentary Housekeeping & Laundry Services',
    description: 'Full laundry, linen changes, and daily room and common-area cleaning provided at no extra charge.',
    icon: 'Sparkles',
    category: 'living'
  },
  {
    title: 'Assistance with Personal Care as Required',
    description: 'Trained Personal Care Attendants (PCAs) ready to help with hygiene, bathing, dressing, and daily routines.',
    icon: 'HeartPulse',
    category: 'health'
  },
  {
    title: 'Weekly Doctor Visits',
    description: 'Scheduled on-site physician visits and regular health monitoring right at Hi Haven Manor.',
    icon: 'Stethoscope',
    category: 'health'
  },
  {
    title: 'Hair Stylist',
    description: 'Visiting hair care services so residents can look and feel their absolute best without travel.',
    icon: 'Scissors',
    category: 'living'
  },
  {
    title: 'Foot Care Services',
    description: 'Specialized foot care appointments provided on-site for comfort, mobility, and diabetic health.',
    icon: 'Footprints',
    category: 'health'
  },
  {
    title: 'In-house Canteen',
    description: 'Convenient canteen on-site for purchasing favorite snacks, beverages, and personal sundries.',
    icon: 'ShoppingBag',
    category: 'living'
  },
  {
    title: 'Transportation to Medical Appointments',
    description: 'Coordinated transportation ensuring residents safely attend specialist and clinic appointments.',
    icon: 'Car',
    category: 'health'
  },
  {
    title: 'Recreation Program',
    description: 'Engaging therapeutic recreation, social games, holiday celebrations, crafts, and music.',
    icon: 'Palette',
    category: 'living'
  },
  {
    title: 'Library',
    description: 'Cozy book corner filled with novels, magazines, puzzles, and quiet reading areas.',
    icon: 'BookOpen',
    category: 'living'
  },
  {
    title: 'Free WiFi',
    description: 'Complimentary high-speed internet throughout the residence to stay connected with family & friends.',
    icon: 'Wifi',
    category: 'living'
  },
  {
    title: 'Access to Psychiatric Services',
    description: 'Integrated support under the Mental Health and Addiction program of Eastern Health (NL Health Services).',
    icon: 'Brain',
    category: 'health'
  },
  {
    title: 'Conveniently located near many Community Amenities',
    description: 'Close to Holyrood shops, post office, churches, pharmacy, and coastal walking trails.',
    icon: 'MapPin',
    category: 'location'
  },
  {
    title: 'Only 30 minutes from downtown St. John’s',
    description: 'Peaceful Avalon Peninsula countryside retreat with quick direct highway access to the capital.',
    icon: 'Compass',
    category: 'location'
  },
  {
    title: '... and Much More!',
    description: 'A genuine surrogate family setting where every resident is respected, valued, and cared for.',
    icon: 'Plus',
    category: 'core'
  }
];

export const RESIDENCE_SPACES: ResidenceSuite[] = [
  {
    id: 'resident-accommodations',
    name: 'Resident Accommodations & Bedrooms',
    tier: 'Resident Bedroom',
    tagline: 'Quiet, comfortable personal bedrooms with natural light, heating, and personalized touches.',
    view: 'Windows looking onto peaceful Holyrood trees and park-like grounds',
    description: 'Our resident accommodations provide a calm, peaceful personal sanctuary within our 15-resident home. Residents are encouraged to personalize their room with family photos, cherished keepsakes, and favorite bedding.',
    amenities: [
      'Comfortable bed with fresh linens and pillows',
      'Dresser, wardrobe storage, and cozy armchair',
      'Bright window welcoming daylight throughout the day',
      'Complimentary housekeeping and laundry services included',
      'Free high-speed WiFi access throughout',
      'Easy single-level access to living, dining, and outdoor spaces'
    ],
    safetyFeatures: [
      '24/7 PCA staff presence and rapid assistance',
      'Single-level accessible floor plan',
      'Integrated smoke and heat detection',
      'Supervised medication administration'
    ],
    image: hiHavenInteriorDining,
    imageAlt: 'Hi Haven Manor resident accommodation and living spaces'
  },
  {
    id: 'kitchen-dining-room',
    name: 'Home Kitchen & Family Dining Room',
    tier: 'Communal Dining',
    tagline: 'Where 3 hot, home-cooked meals are prepared and shared family-style every day.',
    view: 'Sunlit dining area overlooking the Holyrood grounds',
    description: 'Our dining room is where our 15-resident family gathers three times a day for wholesome, home-cooked meals, fresh baking, tea, and warm conversation.',
    amenities: [
      'Family-style dining tables with wood-look flooring',
      'Hot home-cooked breakfast, lunch, and supper daily',
      'Fresh tea, coffee, fruit, and snacks throughout the day',
      'Dietary accommodations for individual health requirements',
      'Birthday celebrations and holiday dinners'
    ],
    safetyFeatures: [
      'Commercial grade clean kitchen adhering to public health guidelines',
      'Assistance provided for residents requiring mealtime support'
    ],
    image: hiHavenInteriorDining,
    imageAlt: 'Hi Haven Manor dining and kitchen area'
  },
  {
    id: 'hearth-living-room',
    name: 'Communal Living Room & Lounge',
    tier: 'Living & Social Area',
    tagline: 'The heart of our home for conversation, television, reading, and family visits.',
    view: 'Central living area with park-like outdoor views',
    description: 'A welcoming, comfortable living area furnished with leather sofas, recliners, bookshelves, television, board games, and quiet corners for relaxing or visiting with family and friends.',
    amenities: [
      'Comfortable leather couches and recliners for group relaxation',
      'Library collection of novels, puzzles, and magazines',
      'Television and radio for news, movies, and music',
      'In-house canteen nearby for snacks and drinks',
      'Family visiting area warmly welcoming guests anytime'
    ],
    safetyFeatures: [
      'Open layout allowing respectful 24/7 staff supervision',
      'Bright lighting and level, trip-free flooring'
    ],
    image: hiHavenInteriorDining,
    imageAlt: 'Hi Haven Manor communal living and library space'
  },
  {
    id: 'park-grounds',
    name: 'Park-Like Grounds & Outdoor Living',
    tier: 'Outdoor Grounds',
    tagline: 'Vibrant Adirondack chairs, picnic tables, pine trees, and fresh coastal air.',
    view: 'Spacious green lawns framed by evergreen spruce and birch forest',
    description: 'Our property features extensive landscaped grounds where residents can sit in colorful lawn chairs, enjoy outdoor picnic meals on sunny days, or take peaceful walks in the fresh Holyrood air.',
    amenities: [
      'Colorful Adirondack lawn chairs in yellow, red, blue, and green',
      'Outdoor wooden picnic tables for meals and gatherings',
      'Rustic garden bench surrounded by seasonal flowers and stones',
      'Lush green lawns bordered by peaceful spruce forest',
      'Direct access to fresh Avalon Peninsula coastal breezes'
    ],
    safetyFeatures: [
      'Secure, level grounds with easy visibility from the main home',
      'Gentle paved access walkways'
    ],
    image: hiHavenLawnChairs,
    imageAlt: 'Hi Haven Manor colorful outdoor lawn chairs on green grass'
  }
];


export const DAILY_SCHEDULE: DailyActivitySlot[] = [
  {
    time: '7:30 AM — 9:00 AM',
    period: 'Morning',
    title: 'Home-Cooked Breakfast & Morning Check-In',
    description: 'Hot breakfast, eggs, toast, tea, and coffee in the dining room. Staff administer morning medications and greet each resident individually.',
    category: 'Home Cooked Meals',
    iconName: 'Coffee'
  },
  {
    time: '9:30 AM — 11:30 AM',
    period: 'Morning',
    title: 'Fresh Air Walks & Leisure Time',
    description: 'Relaxing on the colorful lawn chairs, walks on our park-like grounds, tending personal spaces, or reading in the library.',
    category: 'Recreation & Leisure',
    iconName: 'Trees'
  },
  {
    time: '12:00 PM — 1:30 PM',
    period: 'Midday',
    title: 'Home-Cooked Midday Dinner',
    description: 'A hearty hot meal served family-style. Midday medications and clinical check-ins handled with care.',
    category: 'Home Cooked Meals',
    iconName: 'Utensils'
  },
  {
    time: '2:00 PM — 3:30 PM',
    period: 'Afternoon',
    title: 'Recreation Program & Canteen Time',
    description: 'Board games, puzzles, craft projects, visits to the in-house canteen, or weekly visiting doctor appointments.',
    category: 'Recreation & Leisure',
    iconName: 'Palette'
  },
  {
    time: '3:30 PM — 4:30 PM',
    period: 'Afternoon',
    title: 'Afternoon Tea & Family Visits',
    description: 'Fresh baked treats, tea, and coffee. Family and friends are warmly welcomed to visit and spend time together.',
    category: 'Family & Social',
    iconName: 'HeartHandshake'
  },
  {
    time: '5:00 PM — 6:30 PM',
    period: 'Evening',
    title: 'Comfort Home-Cooked Supper',
    description: 'A comforting evening meal followed by tea. Evening medications administered by certified PCAs.',
    category: 'Home Cooked Meals',
    iconName: 'Utensils'
  },
  {
    time: '7:00 PM — 9:00 PM',
    period: 'Evening',
    title: 'Living Room Wind-Down & Movies',
    description: 'Watching television, reading in the library, or chatting with friends before a peaceful night under 24/7 supervision.',
    category: 'Recreation & Leisure',
    iconName: 'Tv'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Hi Haven Manor Blue Exterior & Lawn Chairs',
    category: 'home',
    categoryLabel: 'Our 15-Resident Home',
    caption: 'Our peaceful blue home in Holyrood with colorful Adirondack chairs on the green lawn under Newfoundland skies.',
    imageUrl: hiHavenMainExterior,
    aspectRatio: 'landscape'
  },
  {
    id: 'g-2',
    title: 'Home Dining Room & Living Lounge Interior',
    category: 'rooms',
    categoryLabel: 'Interior Spaces',
    caption: 'Bright dining room with family tables, wood-look flooring, holiday decor, and comfortable leather armchairs in the living area.',
    imageUrl: hiHavenInteriorDining,
    aspectRatio: 'portrait'
  },
  {
    id: 'g-3',
    title: 'Vibrant Adirondack Lawn Chairs',
    category: 'grounds',
    categoryLabel: 'Park-Like Grounds',
    caption: 'Row of yellow, red, and blue lawn chairs set on our expansive green lawn with granite rocks and spruce forest.',
    imageUrl: hiHavenLawnChairs,
    aspectRatio: 'landscape'
  },
  {
    id: 'g-4',
    title: 'Building Exterior & Outdoor Picnic Grounds',
    category: 'home',
    categoryLabel: 'Exterior & Grounds',
    caption: 'Single-level blue residence with wooden picnic tables for outdoor dining, visits, and sunny afternoons.',
    imageUrl: hiHavenPicnicExterior,
    aspectRatio: 'landscape'
  },
  {
    id: 'g-5',
    title: '36 Butterpot Road Entrance Road Sign',
    category: 'grounds',
    categoryLabel: 'Location & Signage',
    caption: 'Our welcoming road sign along Butterpot Road nestled among evergreen spruce and birch trees in Holyrood.',
    imageUrl: hiHavenSign,
    aspectRatio: 'portrait'
  },
  {
    id: 'g-6',
    title: 'Park-Like Property with Pine Tree & Flower Bench',
    category: 'grounds',
    categoryLabel: 'Park-Like Grounds',
    caption: 'Lawn grounds featuring a pine tree, flower-lined park bench, and quiet spots for fresh air and conversation.',
    imageUrl: hiHavenParkGrounds,
    aspectRatio: 'landscape'
  },
  {
    id: 'g-7',
    title: 'Paved Driveway Approach & Surrounding Forest',
    category: 'home',
    categoryLabel: 'Our 15-Resident Home',
    caption: 'Convenient driveway approach leading to Hi Haven Manor with ample parking and peaceful forest backdrop.',
    imageUrl: hiHavenDriveway,
    aspectRatio: 'landscape'
  },
  {
    id: 'g-8',
    title: 'Tranquil Holyrood Pond & Mountain Hills (Summer)',
    category: 'scenic',
    categoryLabel: 'Holyrood Landscape',
    caption: 'Scenic freshwater pond with wild grasses and rolling forested mountain hills in peaceful Holyrood.',
    imageUrl: hiHavenLakeSummer,
    aspectRatio: 'landscape'
  },
  {
    id: 'g-9',
    title: 'Scenic Holyrood Lake & Snow Landscape (Winter)',
    category: 'scenic',
    categoryLabel: 'Holyrood Landscape',
    caption: 'Crisp winter view of the frozen Holyrood lake, dock, and snow-capped mountain ridge under clear blue skies.',
    imageUrl: hiHavenLakeWinter,
    aspectRatio: 'landscape'
  }
];



export const ACCREDITATION_STANDARDS: AccreditationStandard[] = [
  {
    id: 'eastern-health-program',
    title: 'Mental Health & Addiction Program',
    authority: 'Eastern Health / Newfoundland and Labrador Health Services',
    description: 'Providing supervised residential living accommodations, clinical support, therapeutic recreation, and a leisure program for adults living with severe and persistent mental illness.',
    status: 'Government Subsidized Program',
    details: [
      'Provincial financial subsidy eligibility for qualifying residents',
      'Clinical coordination with regional mental health case teams',
      'Promotion of self-determination and community integration'
    ]
  },
  {
    id: 'staff-qualification',
    title: 'Certified Personal Care Attendants (PCAs)',
    authority: 'Personal Care Attendant Certification Standards',
    description: 'Several staff members have completed certified PCA training courses, providing 24/7 medication management, personal care, and emotional support.',
    status: 'Certified PCA Personnel',
    details: [
      'Certified medication administration and logging protocols',
      'Compassionate surrogate family care approach',
      'Trained in respectful assistance with daily living'
    ]
  },
  {
    id: 'medical-supervision',
    title: 'Weekly Doctor Visits & Specialist Access',
    authority: 'Community General Practitioner & Psychiatric Specialists',
    description: 'Regular ongoing medical attention from a local General Practitioner who visits our home weekly, with access to psychiatric specialists.',
    status: 'Weekly Medical Attention',
    details: [
      'Weekly in-home General Practitioner visits',
      'Direct coordination with psychiatric and clinical specialists',
      'Coordinated transport to outside medical appointments'
    ]
  },
  {
    id: 'legacy-reputation',
    title: '40+ Year Heritage in Holyrood',
    authority: 'Family-Run Business Since the 1970s / Updated 2015',
    description: 'A historic Holyrood property with over 40 years of service, thoroughly renovated in 2015 to offer modern comfort in a 15-resident maximum home.',
    status: 'Renovated 2015',
    details: [
      'Over 4 decades of community presence in Holyrood, NL',
      'Complete renovations and facility updates in 2015',
      'Strong family and community relationships encouraged'
    ]
  }
];

export const ADMISSION_STEPS = [
  {
    step: '01',
    title: 'Initial Contact & Conversation',
    description: 'Reach out by phone or our online form. We discuss care needs, our 15-bed home setting, and answer all initial questions.'
  },
  {
    step: '02',
    title: 'Come Visit Hi Haven in Holyrood',
    description: 'Visit our home at 36 Butterpot Road, meet our staff, tour the rooms, and see our park-like grounds firsthand.'
  },
  {
    step: '03',
    title: 'Care Plan & Subsidy Application',
    description: 'Because our program is government subsidized through Eastern Health (NL Health Services), we assist with financing applications and case worker coordination.'
  },
  {
    step: '04',
    title: 'Welcoming Move-In to the Family',
    description: 'We welcome the resident into our surrogate family setting, establish a personalized care plan, and support their growth and comfort.'
  }
];

export const FAQS = [
  {
    question: 'What is Hi Haven Manor and who does it serve?',
    answer: 'Hi Haven Manor is a small residential care home accommodating a maximum of 15 adult residents in Holyrood, NL. Nestled in a park-like environment among the trees, we provide a personalized home environment (rather than an institution) offering supervised living accommodations, clinical support, therapeutic recreation, and a leisure program under the Mental Health and Addiction program of Eastern Health (NL Health Services).'
  },
  {
    question: 'How long has Hi Haven Manor been operating?',
    answer: 'Hi Haven Manor has been a family-run business in Holyrood for over 40 years. Originally a motel, tavern, and cabins, it transitioned into a care home when the local refinery shut down. In 2015, new owners and management took over and completed extensive updates and modern renovations throughout the facilities.'
  },
  {
    question: 'Is Hi Haven Manor government subsidized?',
    answer: 'Yes. Our program operates under the Mental Health and Addiction program of Eastern Health / NL Health Services and is government subsidized. Potential residents and their families can apply for provincial financing/subsidies.'
  },
  {
    question: 'What medical and doctor services are available?',
    answer: 'Our residents benefit from weekly visits by a community General Practitioner right at our home, as well as access to psychiatric specialists and other medical doctors who provide ongoing attention. In addition, we coordinate transportation to medical appointments.'
  },
  {
    question: 'What qualifications do your staff have?',
    answer: 'We are delighted that several of our dedicated staff members have completed their certified PCA (Personal Care Attendant) training course, ensuring skilled, compassionate care and safe medication administration.'
  },
  {
    question: 'What is the philosophy around supervision and independence?',
    answer: 'Our supervision provided is no greater than the degree necessary, with the explicit goal of having residents integrated into the community. Our care plans center around individual needs where residents determine for themselves how they wish to meet their own goals.'
  },
  {
    question: 'Can family and friends visit?',
    answer: 'Yes, absolutely! We actively establish and maintain close relationships with our residents’ families and friends, and warmly encourage visits.'
  },
  {
    question: 'How do I contact Hi Haven Manor or arrange a visit?',
    answer: 'You can contact us at 709-229-7992, email info@hihaven.ca, or fill out the contact form on this website. Our address is 36 Butterpot Road, Holyrood, NL A0A 2R0.'
  }
];
