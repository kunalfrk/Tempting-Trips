import { Destination } from '../models';

export const DESTINATIONS: Destination[] = [
  { name: 'Goa', region: 'Beaches', desc: 'Sun-warmed sand and slow coastal evenings.', price: 4999, grad: ['#FBBF77', '#F472B6', '#6D5AE0'], line: 'wave', spots: ['Baga', 'Aguada', 'Dudhsagar'] },
  { name: 'Manali', region: 'Hill Stations', desc: 'Alpine air and snow-fed valleys.', price: 6499, grad: ['#A5C8FF', '#7EA9E8', '#2C3E66'], line: 'mountain', spots: ['Solang', 'Rohtang', 'Old Manali'] },
  { name: 'Jaipur', region: 'Heritage', desc: 'Rose-stone forts and royal courtyards.', price: 3999, grad: ['#F6C57A', '#E08A54', '#8B3A2E'], line: 'fort', spots: ['Amber', 'Hawa Mahal', 'Nahargarh'] },
  { name: 'Kerala', region: 'Popular', desc: 'Palm-lined backwaters and quiet houseboats.', price: 7999, grad: ['#7BE0B0', '#2A9D8F', '#134E5E'], line: 'wave', spots: ['Alleppey', 'Munnar', 'Thekkady'] },
  { name: 'Udaipur', region: 'Heritage', desc: 'Mirror lakes and marble palaces.', price: 5499, grad: ['#8FD3F4', '#5B8DEF', '#243B7A'], line: 'fort', spots: ['Pichola', 'City Palace', 'Jag Mandir'] },
  { name: 'Rishikesh', region: 'Weekend', desc: 'River rapids and mountain stillness.', price: 3499, grad: ['#8AE6C1', '#3AA6A0', '#1E4A6B'], line: 'mountain', spots: ['Laxman Jhula', 'Rafting', 'Ashrams'] },
  { name: 'Shimla', region: 'Hill Stations', desc: 'Misted deodar ridges and colonial lanes.', price: 5999, grad: ['#B8C3D9', '#6B7A99', '#33405C'], line: 'mountain', spots: ['Mall Road', 'Jakhu', 'Kufri'] },
  { name: 'Mumbai', region: 'Popular', desc: 'Sea-facing promenades and endless energy.', price: 2499, grad: ['#F4A88C', '#B5568E', '#3A2C6B'], line: 'city', spots: ['Marine Drive', 'Gateway', 'Elephanta'] },
];
