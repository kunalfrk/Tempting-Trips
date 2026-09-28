/** Which booking product the hero widget is composing. */
export type Mode = 'ride' | 'tour';

/** Top-level view the shell is rendering. */
export type Page = 'home' | 'rides' | 'booking';

/** Traveller details captured during the ride checkout. */
export interface BookingForm {
  name: string;
  phone: string;
  email: string;
  notes: string;
  coupon: string;
}
