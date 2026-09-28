import { Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '@shared/ui/icon/icon.component';
import { FieldComponent } from '@shared/ui/field/field.component';
import { StepperComponent } from '@shared/ui/stepper/stepper.component';
import { Destination, DESTINATIONS, INDIAN_CITIES, money, ToastService, TripStore } from '@core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [IconComponent, FieldComponent, StepperComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class HeroComponent {
  store = inject(TripStore);
  toast = inject(ToastService);
  destinations: Destination[] = DESTINATIONS;
  cities = INDIAN_CITIES;
  money = money;
  stats = [
    { n: '2.5M+', l: 'Trips' }, { n: '120+', l: 'Cities' },
    { n: '4.8★', l: 'Rating' }, { n: '15K', l: 'Drivers' },
  ];
  tripTypes = [
    { k: 'one-way', l: 'One way' }, { k: 'round', l: 'Round trip' },
    { k: 'airport', l: 'Airport' }, { k: 'outstation', l: 'Outstation' }, { k: 'hourly', l: 'Hourly' },
  ];

  pickupErr = signal('');
  dropErr = signal('');

  setPickup(v: string): void {
    this.store.pickup.set(v);
    if (v.trim()) this.pickupErr.set('');
  }

  setDrop(v: string): void {
    this.store.drop.set(v);
    if (v.trim()) this.dropErr.set('');
  }

  swap(): void {
    this.store.swap();
    const p = this.pickupErr();
    this.pickupErr.set(this.dropErr());
    this.dropErr.set(p);
  }

  startRide(): void {
    const pickup = this.store.pickup().trim();
    const drop = this.store.drop().trim();
    this.pickupErr.set(pickup ? '' : 'Enter a pickup location');
    this.dropErr.set(drop ? '' : 'Enter where you want to go');

    if (!pickup || !drop) {
      this.toast.show('Add a pickup and destination first');
      const sel = !pickup ? 'Enter pickup location' : 'Where to?';
      document.querySelector<HTMLInputElement>(`input[placeholder="${sel}"]`)?.focus();
      return;
    }
    this.store.searchRides();
  }
}
