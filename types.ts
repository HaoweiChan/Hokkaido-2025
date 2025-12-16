export enum LocationType {
  TRANSPORT = '交通',
  FOOD = '美食',
  HOTEL = '住宿',
  SHOPPING = '購物',
  ACTIVITY = '活動',
  SIGHTSEEING = '景點'
}

export interface ItineraryEvent {
  time: string;
  title: string;
  type: LocationType;
  description?: string;
  location?: string;
  notes?: string;
  transportInfo?: string; // e.g., "JR Rapid Airport (37min)"
  
  // New rich fields
  tips?: string[]; // Pro tips like "Queue early"
  transportDetail?: string; // Detailed instructions like "Exit 4, walk 5 mins"
  cost?: string; // Estimated cost
  bookingRequired?: boolean;
  websiteUrl?: string;
  
  // For Taxi Card
  japaneseAddress?: string; // Full address in Japanese for driver
  japaneseName?: string; // Name in Japanese
}

export interface DaySchedule {
  id: string;
  date: string;
  weekday: string;
  title: string;
  locationCoords?: { lat: number; lng: number }; // For live weather
  weatherForecast?: string; // Fallback text
  events: ItineraryEvent[];
}

export interface SavedPlace {
  id: string;
  name: string;
  jpName?: string;
  type: LocationType;
  address: string;
  googleMapsUrl?: string;
  notes?: string;
}
