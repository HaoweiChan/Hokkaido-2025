export enum LocationType {
  HOTEL = 'HOTEL',
  FOOD = 'FOOD',
  SIGHTSEEING = 'SIGHTSEEING',
  TRANSPORT = 'TRANSPORT',
  SHOPPING = 'SHOPPING',
  ACTIVITY = 'ACTIVITY'
}

export interface ItineraryItem {
  time: string;
  title: string;
  description?: string;
  location?: string;
  type: LocationType;
  transportInfo?: string; // For bus/train numbers
  notes?: string;
}

export interface DaySchedule {
  id: string;
  date: string;
  weekday: string;
  title: string;
  events: ItineraryItem[];
}

export interface SavedPlace {
  id: string;
  name: string;
  jpName?: string;
  type: LocationType;
  googleMapsUrl?: string; // Specific URL if available, otherwise search query
  address?: string;
}