export type ActiveView = 
  | 'home'
  | 'b2c'
  | 'b2b'
  | 'nursery'
  | 'how-it-works'
  | 'calculators'
  | 'faq';

export interface B2CTierOption {
  id: '5-tier' | '7-tier' | '11-tier';
  name: string;
  subtitle: string;
  growSites: number;
  heightCm: number;
  heightMeter: number;
  baseDiameterCm: number;
  clearFloorSpace: string;
  basePrice: number; // AUD GST inclusive
  completeKitPrice: number; // AUD GST inclusive
  popular?: boolean;
  idealFor: string;
  footprint: string;
  image?: string;
  badge?: string;
}

export interface B2CPackageAddon {
  id: string;
  name: string;
  price: number;
  description: string;
  selectedByDefault?: boolean;
  image?: string;
}

export interface B2BOffer {
  id: string;
  name: string;
  priceTag: string;
  weeklyPrice?: number;
  totalServiceFee?: number;
  buyoutPrice?: number;
  directPrice?: number;
  returnFee?: number;
  badge?: string;
  description: string;
  features: string[];
}

export interface NurseryItem {
  id: string;
  name: string;
  category: 'Cocktail Herbs' | 'Kitchen Herbs' | 'Salad Greens' | 'Microgreens' | 'Edible Flowers' | 'Family Favourites';
  price: number;
  description: string;
  growthDays: number;
  tags: string[];
  inStock: boolean;
  image: string;
}

export interface B2BIntakeFormData {
  businessName: string;
  abn: string;
  venueAddress: string;
  contactName: string;
  email: string;
  phone: string;
  venueType: 'Cafe' | 'Cocktail Bar' | 'Restaurant' | 'Hotel' | 'Catering' | 'Other';
  plantMix: 'Cocktail Herbs' | 'Brunch Microgreens' | 'Edible Flowers' | 'Kitchen Herbs' | 'Mixed';
  weeklySpend: '$25/week' | '$50/week' | '$75/week' | '$100/week' | '$150+/week';
  deliveryWindow: 'Morning' | 'Midday' | 'Afternoon' | 'Other';
  operatingDays: number;
  coversPerWeek: string;
  spaceEnvironment: string;
  lightingEnvironment: string;
  notes: string;
}

export interface AnalyticsEvent {
  eventName: string;
  payload: Record<string, any>;
  timestamp: string;
}
