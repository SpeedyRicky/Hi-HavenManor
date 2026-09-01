export interface CareProgram {
  id: string;
  category: 'mental-health' | 'personal-care' | 'recovery-support' | 'living-support';
  title: string;
  shortDescription: string;
  fullDescription: string;
  eligibility: string;
  careLevel: string;
  highlights: string[];
  keyFeatures: string[];
  staffingRatio: string;
  image: string;
  imageAlt: string;
}

export interface ResidenceSuite {
  id: string;
  name: string;
  tier: string;
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
  category: string;
  iconName: string;
}


export interface GalleryItem {
  id: string;
  title: string;
  category: 'home' | 'rooms' | 'dining' | 'grounds' | 'care' | 'scenic';
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

