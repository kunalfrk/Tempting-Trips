import { BlogPost, Faq, Service, Testimonial, Trust } from '../models';

export const SERVICES: Service[] = [
  { icon: 'plane', title: 'Airport Transfers', desc: 'Flight tracking, meet & greet, and complimentary waiting.', feats: ['Live tracking', 'Meet & greet', 'Fixed pricing'] },
  { icon: 'route', title: 'Outstation Travel', desc: 'One-way and round-trip intercity rides with flexible stops.', feats: ['One-way', 'Round trip', 'Multi-city'] },
  { icon: 'car', title: 'Local Rides', desc: 'Point-to-point, hourly, and full-day city rentals.', feats: ['Hourly', 'Full-day', 'Metered'] },
  { icon: 'badgeCheck', title: 'Chauffeur Service', desc: 'Trained chauffeurs and a luxury fleet for events and VIP travel.', feats: ['Weddings', 'Corporate', 'VIP'] },
  { icon: 'luggage', title: 'Tour Packages', desc: 'Assemble travel, stays, and sightseeing into one itinerary.', feats: ['Custom', 'All-inclusive', 'Curated'] },
  { icon: 'briefcase', title: 'Corporate Travel', desc: 'Central billing, account managers, and monthly reporting.', feats: ['Billing', 'Analytics', '24/7'] },
];

export const TRUST: Trust[] = [
  { icon: 'check', t: 'Verified drivers', d: 'Background-checked, professionally trained.' },
  { icon: 'wallet', t: 'Transparent pricing', d: 'Every charge shown upfront. No surprises.' },
  { icon: 'headset', t: '24/7 support', d: 'Real people, any hour, any city.' },
  { icon: 'pin', t: 'Live tracking', d: 'Follow every trip in real time.' },
  { icon: 'shield', t: 'Safe & inspected', d: '60-point vehicle audits before dispatch.' },
  { icon: 'clock', t: 'On-time promise', d: 'Punctuality you can plan around.' },
];

export const SAFETY: Trust[] = [
  { icon: 'shield', t: 'Driver verification', d: 'Multi-point background checks.' },
  { icon: 'car', t: 'Vehicle inspection', d: '60-point safety audits.' },
  { icon: 'pin', t: 'GPS tracking', d: 'Live location, every trip.' },
  { icon: 'phone', t: 'Emergency SOS', d: 'One-tap emergency alert.' },
  { icon: 'users', t: 'Trip sharing', d: 'Share status with family.' },
  { icon: 'wallet', t: 'Secure payments', d: 'PCI-DSS compliant gateway.' },
];

export const TESTIMONIALS: Testimonial[] = [
  { name: 'Priya Sharma', role: 'Frequent traveller', trips: 48, r: 5, text: 'The corporate account and seamless airport transfers save me hours every week. Impeccable vehicles, genuinely professional drivers.' },
  { name: 'Rahul Mehra', role: 'Family traveller', trips: 12, r: 5, text: 'Our Manali package came together in minutes — travel, stay, and sightseeing in one place, with zero pricing surprises at the end.' },
  { name: 'Ananya Patel', role: 'Business executive', trips: 85, r: 5, text: 'The luxury fleet and punctuality are unmatched. The car for client meetings always makes the right first impression.' },
];

export const BLOG: BlogPost[] = [
  { title: '10 scenic road trips from Bangalore', cat: 'Road Trips', time: '6 min', author: 'Meera Iyer', grad: ['#7BE0B0', '#2A9D8F'] },
  { title: 'The complete Mumbai airport transfer guide', cat: 'Airport', time: '4 min', author: 'Arjun Nair', grad: ['#8FD3F4', '#5B8DEF'] },
  { title: 'Planning a Rajasthan heritage circuit', cat: 'Guide', time: '8 min', author: 'Kavya Shah', grad: ['#F6C57A', '#E08A54'] },
];

export const FAQS: Faq[] = [
  { q: 'How do I modify or cancel a booking?', a: 'Modify or cancel from your dashboard up to 2 hours before pickup. Cancellations 4+ hours ahead are fully refunded; between 2–4 hours a 20% fee applies.' },
  { q: "What's included in a tour package price?", a: "Your selected travel, accommodation for the chosen nights, and every sightseeing experience you add — plus taxes. Tolls and personal spending are separate and always shown before you reserve." },
  { q: 'Are your drivers verified?', a: 'Every driver clears a background check, driving-record review, and in-person assessment, and completes our safety training program.' },
  { q: 'What if my flight is delayed?', a: 'We track your flight in real time. Your driver’s arrival adjusts automatically — no extra charge for flight delays on airport transfers.' },
];
