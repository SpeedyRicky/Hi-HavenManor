export interface CareProgram {
  id: string;
  category: 'personal-care' | 'mental-health' | 'respite' | 'living-support';
  title: string;
  shortDescription: string;
  fullDescription: string;
  eligibility: string;
  careLevel: 'Level 1' | 'Level 2' | 'Specialized Supportive Care' | 'Short-Term Respite';
  highlights: string[];
  keyFeatures: string[];
  staffingRatio: string;
  image: string;
  imageAlt: string;
}

export interface ResidenceSuite {
  id: string;
  name: string;
  tier: 'Private Sanctuary Suite' | 'Comfort Single Suite' | 'Companion Shared Suite';
  tagline: string;
  squareFeet: string;
  view: string;
  description: string;
  amenities: string[];
  safetyFeatures: string[];
  image: string;
  imageAlt: string;
  floorPlanDetails: string;
}

export interface DailyActivitySlot {
  time: string;
  period: 'Morning' | 'Midday' | 'Afternoon' | 'Evening';
  title: string;
  description: string;
  category: 'Wellness & Movement' | 'Culinary Gathering' | 'Cognitive & Creative' | 'Social & Leisure';
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'grounds' | 'suites' | 'dining' | 'lifestyle' | 'care';
  categoryLabel: string;
  caption: string;
  imageUrl: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
}

export interface AccreditationStandard {
  id: string;
  title: string;
  authority: string;
  description: string;
  status: string;
  details: string[];
}

export interface CareAssessmentAnswer {
  careTypeNeeded: string;
  mobilityLevel: string;
  medicationSupport: string;
  preferredTimeline: string;
  lovedOneName: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  notes: string;
}

export interface TourBookingRequest {
  visitType: 'in-person' | 'phone-consultation';
  preferredDate: string;
  preferredTime: string;
  fullName: string;
  email: string;
  phone: string;
  relationshipToResident: string;
  interestedCareProgram: string;
  specificQuestions: string;
}
