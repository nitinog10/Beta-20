export interface Itinerary {
  title: string;
  dailyPlan: DayPlan[];
  heroImageUrl?: string;
}

export interface DayPlan {
  day: number;
  title: string;
  activities: Activity[];
}

export interface Activity {
  name: string;
  description: string;
  reason: string;
}

export interface PlanRequest {
  destination: string;
  interests: string[];
  startDate: string;
  endDate: string;
  budget: 'Low' | 'Medium' | 'Premium';
  travelMode: 'Train' | 'Flight' | 'Bus' | 'Self-Drive';
}