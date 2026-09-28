/** A bookable vehicle offered in the ride flow. */
export interface Vehicle {
  id: number;
  name: string;
  cat: string;
  pax: number;
  bags: number;
  trans: string;
  fare: number;
  time: string;
  feats: string[];
  /** Key into `SCENE_GRADIENTS` selecting the card's gradient artwork. */
  scene: string;
}

/** Ordering applied to the vehicle results list. */
export type VehicleSort = 'recommended' | 'low' | 'high' | 'cap';
