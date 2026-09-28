import { SightOpt, StayOpt, TravelOpt } from '../models';

export const TRAVEL_OPTS: TravelOpt[] = [
  { id: 'sedan', name: 'Sedan', sub: '4-seater · AC', icon: 'car', price: 2400, note: 'door to door' },
  { id: 'suv', name: 'SUV', sub: '6-seater · AC', icon: 'car', price: 3200, note: 'flexible stops' },
  { id: 'traveller', name: 'Tempo Traveller', sub: '12-seater · AC', icon: 'car', price: 4600, note: 'group friendly' },
  { id: 'van', name: 'Luxury Van', sub: '16-seater · AC', icon: 'car', price: 6200, note: 'large groups' },
];

export const STAY_OPTS: StayOpt[] = [
  { id: 'comfort', name: 'Comfort Inn', tier: '3★', price: 2400, rating: 4.2, amen: ['Breakfast', 'WiFi', 'AC'] },
  { id: 'boutique', name: 'Boutique Resort', tier: '4★', price: 4600, rating: 4.6, amen: ['Pool', 'Breakfast', 'Spa'] },
  { id: 'luxury', name: 'Luxury Retreat', tier: '5★', price: 8900, rating: 4.9, amen: ['Suite', 'Butler', 'Fine Dining'] },
];

export const SIGHT_OPTS: SightOpt[] = [
  { id: 'heritage', name: 'Heritage Walk', icon: 'route', price: 900, dur: '3h' },
  { id: 'cruise', name: 'Sunset Cruise', icon: 'wave', price: 1600, dur: '2h' },
  { id: 'trek', name: 'Guided Trek', icon: 'mountain', price: 1400, dur: 'half-day' },
  { id: 'food', name: 'Local Food Trail', icon: 'tag', price: 1100, dur: '3h' },
  { id: 'safari', name: 'Wildlife Safari', icon: 'leaf', price: 2200, dur: 'half-day' },
  { id: 'spa', name: 'Spa & Wellness', icon: 'sparkle', price: 2800, dur: 'half-day' },
];
