import { Vehicle } from '../models';

export const VEHICLES: Vehicle[] = [
  { id: 1, name: 'Swift Dzire', cat: 'Economy', pax: 4, bags: 2, trans: 'Auto', fare: 1849, time: '4h 20m', feats: ['GPS', 'Water'], scene: 'econ' },
  { id: 2, name: 'Honda City', cat: 'Premium Sedan', pax: 4, bags: 3, trans: 'Auto', fare: 2899, time: '4h 10m', feats: ['WiFi', 'Leather'], scene: 'sedan' },
  { id: 3, name: 'Toyota Innova', cat: 'SUV', pax: 7, bags: 4, trans: 'Auto', fare: 3499, time: '4h 25m', feats: ['Spacious', 'Charger'], scene: 'suv' },
  { id: 4, name: 'Fortuner', cat: 'Premium SUV', pax: 7, bags: 5, trans: 'Auto', fare: 4999, time: '4h 15m', feats: ['4x4', 'Audio'], scene: 'suv2' },
  { id: 5, name: 'Mercedes E-Class', cat: 'Luxury', pax: 4, bags: 3, trans: 'Auto', fare: 6999, time: '4h 05m', feats: ['Chauffeur', 'Minibar'], scene: 'lux' },
  { id: 6, name: 'Tempo Traveller', cat: 'Van', pax: 12, bags: 12, trans: 'Manual', fare: 5999, time: '4h 30m', feats: ['Recliners', 'PA'], scene: 'van' },
];
