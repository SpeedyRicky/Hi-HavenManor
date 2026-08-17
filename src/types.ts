export interface CareProgram {
  id: string;
  category: 'mental-health' | 'personal-care' | 'recovery-support' | 'living-support';
  title: string;
  shortDescription: string;
  fullDescription: string;
  eligibility: string;
  careLevel: 'Mental Health & Recovery Support' | 'Level 1 & 2 Personal Care' | 'Life Skills & Respite' | 'Nutrition & Wellness';
  highlights: string[];
  keyFeatures: string[];
  staffingRatio: string;
  image: string;
  imageAlt: string;
}

export interface ResidenceSuite {
  id: string;
  name: string;
  tier: 'Private Bedroom' | 'Semi-Private Room' | 'Communal Living Space';
  tagline: string;
  view: string;
  description: string;
  amenities: string[];
  safetyFeatures: string[];
  image: string;
  imageAlt: string;
}

export interface DailyActivitySlot {
  time: string;
  period: 'Morning' | 'Midday' | 'Afternoon' | 'Evening';
  title: string;
  description: string;
  category: 'Morning Routine & Wellness' | 'Home-Cooked Meals' | 'Life Skills & Community' | 'Rest & Social Connection';
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'home' | 'rooms' | 'dining' | 'grounds' | 'care';
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

