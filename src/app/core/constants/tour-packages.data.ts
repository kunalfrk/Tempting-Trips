import { TourPackage } from '../models';

/** Bookable tour packages shown in the ride search results, grouped by destination. */
export const TOUR_PACKAGES: TourPackage[] = [
  // ── Goa ──
  {
    id: 1, destination: 'Goa', title: 'Goa Beach Bliss', category: 'Honeymoon', days: 4, nights: 3,
    price: 12499, origPrice: 15999, rating: 4.6, reviews: 812, cities: ['North Goa', 'South Goa'],
    highlights: ['Baga & Calangute beach walk', 'Sunset cruise on Mandovi river', 'Old Goa churches tour', 'Free time for water sports'],
    inclusions: ['Stay', 'Breakfast', 'Airport transfers', 'Sightseeing cab'], theme: 'beach', tag: 'Best seller',
  },
  {
    id: 2, destination: 'Goa', title: 'Goa Party & Chill', category: 'Friends', days: 3, nights: 2,
    price: 8999, origPrice: 10999, rating: 4.4, reviews: 540, cities: ['North Goa'],
    highlights: ['Anjuna flea market', 'Beach shack hopping', 'Water sports at Baga', 'Nightlife at Tito’s Lane'],
    inclusions: ['Stay', 'Breakfast', 'Sightseeing cab'], theme: 'beach',
  },
  {
    id: 3, destination: 'Goa', title: 'Luxury Goa Retreat', category: 'Luxury', days: 5, nights: 4,
    price: 28999, origPrice: 34999, rating: 4.9, reviews: 265, cities: ['North Goa', 'South Goa'],
    highlights: ['5-star beachfront resort', 'Private yacht cruise', 'Spa & wellness sessions', 'Candlelight beach dinner'],
    inclusions: ['Stay', 'All meals', 'Airport transfers', 'Private cab'], theme: 'beach', tag: 'Premium',
  },

  // ── Manali ──
  {
    id: 4, destination: 'Manali', title: 'Manali Snow Escape', category: 'Adventure', days: 5, nights: 4,
    price: 14999, origPrice: 18499, rating: 4.7, reviews: 934, cities: ['Manali', 'Solang', 'Rohtang'],
    highlights: ['Rohtang Pass snow point', 'Solang Valley adventure sports', 'Old Manali café walk', 'Hidimba Temple visit'],
    inclusions: ['Stay', 'Breakfast & dinner', 'Airport transfers', 'Sightseeing cab'], theme: 'mountain', tag: 'Best seller',
  },
  {
    id: 5, destination: 'Manali', title: 'Manali-Kasol Backpacking', category: 'Friends', days: 6, nights: 5,
    price: 16999, origPrice: 20999, rating: 4.5, reviews: 421, cities: ['Manali', 'Kasol', 'Kheerganga'],
    highlights: ['Kheerganga trek', 'Parvati Valley café hopping', 'Riverside camping', 'Naggar Castle visit'],
    inclusions: ['Stay', 'Breakfast', 'Trek guide', 'Sightseeing cab'], theme: 'mountain',
  },

  // ── Jaipur ──
  {
    id: 6, destination: 'Jaipur', title: 'Royal Jaipur Heritage', category: 'Heritage', days: 3, nights: 2,
    price: 8499, origPrice: 10499, rating: 4.6, reviews: 703, cities: ['Jaipur'],
    highlights: ['Amber Fort with elephant ride', 'Hawa Mahal & City Palace', 'Nahargarh sunset point', 'Local bazaar shopping'],
    inclusions: ['Stay', 'Breakfast', 'Airport transfers', 'Sightseeing cab'], theme: 'heritage', tag: 'Best seller',
  },
  {
    id: 7, destination: 'Jaipur', title: 'Jaipur with Family', category: 'Family', days: 4, nights: 3,
    price: 10999, origPrice: 13499, rating: 4.5, reviews: 388, cities: ['Jaipur'],
    highlights: ['Chokhi Dhani cultural evening', 'Jal Mahal photo stop', 'Albert Hall Museum', 'Kid-friendly puppet show'],
    inclusions: ['Stay', 'Breakfast & dinner', 'Sightseeing cab'], theme: 'heritage',
  },

  // ── Kerala ──
  {
    id: 8, destination: 'Kerala', title: 'Kerala Backwater Bliss', category: 'Honeymoon', days: 5, nights: 4,
    price: 19999, origPrice: 24999, rating: 4.8, reviews: 1120, cities: ['Alleppey', 'Munnar', 'Thekkady'],
    highlights: ['Overnight houseboat stay in Alleppey', 'Tea gardens of Munnar', 'Spice plantation tour in Thekkady', 'Ayurvedic spa session'],
    inclusions: ['Stay', 'All meals', 'Houseboat cruise', 'Airport transfers', 'Sightseeing cab'], theme: 'backwater', tag: 'Best seller',
  },
  {
    id: 9, destination: 'Kerala', title: 'Kerala Wildlife & Hills', category: 'Adventure', days: 6, nights: 5,
    price: 21999, origPrice: 26999, rating: 4.6, reviews: 456, cities: ['Munnar', 'Thekkady', 'Kumarakom'],
    highlights: ['Periyar Wildlife Sanctuary safari', 'Munnar tea trail trek', 'Kumarakom backwater birding', 'Bamboo rafting'],
    inclusions: ['Stay', 'Breakfast & dinner', 'Safari tickets', 'Sightseeing cab'], theme: 'wildlife', tag: 'Trending',
  },
  {
    id: 10, destination: 'Kerala', title: 'Budget Kerala Getaway', category: 'Budget', days: 4, nights: 3,
    price: 13499, origPrice: 16499, rating: 4.3, reviews: 289, cities: ['Alleppey', 'Kochi'],
    highlights: ['Day houseboat cruise', 'Fort Kochi heritage walk', 'Chinese fishing nets sunset', 'Local seafood trail'],
    inclusions: ['Stay', 'Breakfast', 'Sightseeing cab'], theme: 'backwater',
  },
  {
    id: 11, destination: 'Kerala', title: 'Luxury Kerala Escape', category: 'Luxury', days: 6, nights: 5,
    price: 42999, origPrice: 51999, rating: 4.9, reviews: 198, cities: ['Munnar', 'Alleppey', 'Kovalam'],
    highlights: ['Private premium houseboat', 'Luxury tree-house stay in Munnar', 'Beachfront resort in Kovalam', 'Personal butler service'],
    inclusions: ['Stay', 'All meals', 'Private cab', 'Airport transfers'], theme: 'backwater', tag: 'Premium',
  },

  // ── Udaipur ──
  {
    id: 12, destination: 'Udaipur', title: 'Udaipur Lake Romance', category: 'Honeymoon', days: 3, nights: 2,
    price: 11999, origPrice: 14999, rating: 4.7, reviews: 612, cities: ['Udaipur'],
    highlights: ['Lake Pichola sunset cruise', 'City Palace guided tour', 'Jag Mandir island visit', 'Candlelight rooftop dinner'],
    inclusions: ['Stay', 'Breakfast', 'Boat ride', 'Airport transfers'], theme: 'lake', tag: 'Best seller',
  },

  // ── Rishikesh ──
  {
    id: 13, destination: 'Rishikesh', title: 'Rishikesh Rapids & Yoga', category: 'Adventure', days: 3, nights: 2,
    price: 7499, origPrice: 9499, rating: 4.5, reviews: 501, cities: ['Rishikesh'],
    highlights: ['White-water rafting on the Ganges', 'Sunrise yoga session', 'Laxman Jhula & ashram walk', 'Riverside camping bonfire'],
    inclusions: ['Camp stay', 'Breakfast & dinner', 'Rafting gear', 'Sightseeing cab'], theme: 'mountain', tag: 'Trending',
  },

  // ── Shimla ──
  {
    id: 14, destination: 'Shimla', title: 'Shimla Colonial Trail', category: 'Family', days: 4, nights: 3,
    price: 10999, origPrice: 13999, rating: 4.4, reviews: 344, cities: ['Shimla', 'Kufri'],
    highlights: ['Mall Road & Ridge walk', 'Kufri adventure park', 'Jakhu Temple ropeway', 'Toy train ride'],
    inclusions: ['Stay', 'Breakfast', 'Sightseeing cab'], theme: 'mountain',
  },

  // ── Mumbai ──
  {
    id: 15, destination: 'Mumbai', title: 'Mumbai City Highlights', category: 'City break', days: 2, nights: 1,
    price: 6499, origPrice: 7999, rating: 4.3, reviews: 276, cities: ['Mumbai'],
    highlights: ['Gateway of India & Marine Drive', 'Elephanta Caves ferry', 'Bollywood studio tour', 'Street food trail at Mohammed Ali Road'],
    inclusions: ['Stay', 'Breakfast', 'Airport transfers', 'Sightseeing cab'], theme: 'city',
  },
];
