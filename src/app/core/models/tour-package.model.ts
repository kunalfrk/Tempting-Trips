/** A bookable multi-day tour package shown in the ride search results. */
export interface TourPackage {
  id: number;
  destination: string;
  title: string;
  category: string;
  days: number;
  nights: number;
  price: number;
  origPrice: number;
  rating: number;
  reviews: number;
  cities: string[];
  highlights: string[];
  inclusions: string[];
  /** Scenery key for the card artwork: beach | backwater | mountain | heritage | wildlife | city | lake. */
  theme: string;
  tag?: string;
}

/** Ordering applied to the tour package results list. */
export type PackageSort = 'popular' | 'low' | 'high' | 'rating';
