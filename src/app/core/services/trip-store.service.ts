import { Injectable, computed, signal } from '@angular/core';
import {
  BookingForm, Destination, Mode, Page, PackageSort, TourPackage, Vehicle, VehicleSort,
} from '../models';
import {
  DESTINATIONS, SIGHT_OPTS, STAY_OPTS, TOUR_PACKAGES, TRAVEL_OPTS, VEHICLES,
} from '../constants';

@Injectable({ providedIn: 'root' })
export class TripStore {
  // ── page / flow ──
  page = signal<Page>('home');
  step = signal<number>(2);

  // ── hero widget ──
  mode = signal<Mode>('ride');
  pickup = signal('');
  drop = signal('');
  date = signal('');
  time = signal('');
  pax = signal(2);
  tripType = signal('one-way');

  // ── ride flow ──
  veh = signal<Vehicle | null>(null);
  sort = signal<VehicleSort>('recommended');
  pay = signal('upi');
  form = signal<BookingForm>({ name: '', phone: '', email: '', notes: '', coupon: '' });

  // ── ride results (tour package cards) ──
  pkgSort = signal<PackageSort>('popular');
  pkgCategory = signal<string>('all');
  selectedPkg = signal<TourPackage | null>(null);

  // ── tour builder ──
  tDest = signal<Destination>(DESTINATIONS[0]);
  tDays = signal(4);
  tTrav = signal(2);
  tTravel = signal('sedan');
  tStay = signal('boutique');
  tSights = signal<string[]>(['heritage', 'cruise']);

  // ── derived: sorted vehicles ──
  vehicles = computed<Vehicle[]>(() => {
    const s = this.sort();
    return [...VEHICLES].sort((a, b) =>
      s === 'low' ? a.fare - b.fare :
      s === 'high' ? b.fare - a.fare :
      s === 'cap' ? b.pax - a.pax : a.id - b.id);
  });

  // ── derived: packages available for the searched destination ──
  destPackages = computed<TourPackage[]>(() => {
    const drop = this.drop().trim().toLowerCase();
    const matched = TOUR_PACKAGES.filter((p) => p.destination.toLowerCase() === drop
      || drop.includes(p.destination.toLowerCase()));
    return matched.length ? matched : TOUR_PACKAGES;
  });

  // ── derived: categories present in the searched destination's packages ──
  pkgCategories = computed<string[]>(() => {
    const cats = new Set(this.destPackages().map((p) => p.category));
    return ['all', ...cats];
  });

  // ── derived: filtered + sorted package results ──
  packages = computed<TourPackage[]>(() => {
    const cat = this.pkgCategory();
    const s = this.pkgSort();
    const list = this.destPackages().filter((p) => cat === 'all' || p.category === cat);
    return [...list].sort((a, b) =>
      s === 'low' ? a.price - b.price :
      s === 'high' ? b.price - a.price :
      s === 'rating' ? b.rating - a.rating : b.reviews - a.reviews);
  });

  // ── derived: tour package price breakdown ──
  pkg = computed(() => {
    const nights = Math.max(1, this.tDays() - 1);
    const rooms = Math.ceil(this.tTrav() / 2);
    const travel = TRAVEL_OPTS.find((x) => x.id === this.tTravel())!;
    const stay = STAY_OPTS.find((x) => x.id === this.tStay())!;
    const sights = SIGHT_OPTS.filter((x) => this.tSights().includes(x.id));
    const travelC = travel.price * this.tTrav();
    const stayC = stay.price * nights * rooms;
    const sightC = sights.reduce((s, x) => s + x.price, 0) * this.tTrav();
    const sub = travelC + stayC + sightC;
    const tax = Math.round(sub * 0.05);
    return { nights, rooms, travel, stay, sights, travelC, stayC, sightC, sub, tax, total: sub + tax };
  });

  // ── actions ──
  goHome(): void {
    this.page.set('home');
    this.step.set(2);
    this.veh.set(null);
    this.selectedPkg.set(null);
    window.scrollTo(0, 0);
  }

  searchRides(): void {
    this.page.set('rides');
    this.pkgCategory.set('all');
    this.pkgSort.set('popular');
    window.scrollTo(0, 0);
  }

  choosePackage(p: TourPackage): void {
    this.selectedPkg.set(p);
    this.page.set('booking');
    this.step.set(2);
    window.scrollTo(0, 0);
  }

  scrollTo(id: string): void {
    this.page.set('home');
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 40);
  }

  toggleSight(id: string): void {
    const cur = this.tSights();
    this.tSights.set(cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]);
  }

  patchForm(part: Partial<BookingForm>): void {
    this.form.set({ ...this.form(), ...part });
  }

  swap(): void {
    const p = this.pickup();
    this.pickup.set(this.drop());
    this.drop.set(p);
  }
}
