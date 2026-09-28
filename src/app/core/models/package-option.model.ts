/** A way of travelling to the destination. */
export interface TravelOpt {
  id: string;
  name: string;
  sub: string;
  icon: string;
  price: number;
  note: string;
}

/** An accommodation tier. */
export interface StayOpt {
  id: string;
  name: string;
  tier: string;
  price: number;
  rating: number;
  amen: string[];
}

/** An optional sightseeing experience. */
export interface SightOpt {
  id: string;
  name: string;
  icon: string;
  price: number;
  dur: string;
}
