import { Component, inject, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '@shared/ui/icon/icon.component';
import { FieldComponent } from '@shared/ui/field/field.component';
import { SelectComponent } from '@shared/ui/select/select.component';
import { VehicleArtComponent } from '@shared/ui/vehicle-art/vehicle-art.component';
import { money, SCENE_GRADIENTS, ToastService, TripStore, Vehicle, VehicleSort } from '@core';

@Component({
  selector: 'app-booking-flow',
  standalone: true,
  imports: [IconComponent, FieldComponent, SelectComponent, VehicleArtComponent],
  templateUrl: './booking-flow.component.html',
  styleUrl: './booking-flow.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class BookingFlowComponent {
  store = inject(TripStore);
  toast = inject(ToastService);
  sceneGrad = SCENE_GRADIENTS;
  money = money;
  steps = ['Search', 'Vehicle', 'Details', 'Payment', 'Done'];
  sortOpts: { k: VehicleSort; l: string }[] = [
    { k: 'recommended', l: 'Recommended' },
    { k: 'low', l: 'Price: low → high' },
    { k: 'high', l: 'Price: high → low' },
    { k: 'cap', l: 'Capacity' },
  ];
  payMethods = [
    { k: 'upi', l: 'UPI' }, { k: 'card', l: 'Card' }, { k: 'net', l: 'Net banking' },
    { k: 'wallet', l: 'Wallet' }, { k: 'later', l: 'Pay later' }, { k: 'corp', l: 'Corporate' },
  ];
  bookingId = 'TT-' + Math.random().toString(36).slice(2, 8).toUpperCase();

  round(n: number): number { return Math.round(n); }

  total(v: Vehicle): number {
    const discount = this.store.form().coupon ? Math.round(v.fare * 0.08) : 0;
    return v.fare + 250 + Math.round(v.fare * 0.09) - discount;
  }

  go(step: number): void { this.store.step.set(step); window.scrollTo(0, 0); }

  backFromVehicles(): void {
    if (this.store.selectedPkg()) {
      this.store.selectedPkg.set(null);
      this.store.page.set('rides');
      window.scrollTo(0, 0);
      return;
    }
    this.store.goHome();
  }

  selectVeh(e: Event, v: Vehicle): void {
    e.stopPropagation();
    this.store.veh.set(v);
    this.go(3);
  }

  toPayment(): void {
    const f = this.store.form();
    if (!f.name || !f.phone) { this.toast.show('Add your name and mobile number'); return; }
    this.go(4);
  }

  pay(): void {
    this.go(5);
    this.toast.show('Payment successful');
  }
}
