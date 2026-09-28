import { Component, inject, ViewEncapsulation } from '@angular/core';
import { HeadComponent } from '@shared/ui/head/head.component';
import { IconComponent } from '@shared/ui/icon/icon.component';
import { SceneComponent } from '@shared/ui/scene/scene.component';
import { StepperComponent } from '@shared/ui/stepper/stepper.component';
import { DESTINATIONS, money, SIGHT_OPTS, STAY_OPTS, ToastService, TRAVEL_OPTS, TripStore } from '@core';

@Component({
  selector: 'app-tour-builder',
  standalone: true,
  imports: [HeadComponent, IconComponent, SceneComponent, StepperComponent],
  templateUrl: './tour-builder.component.html',
  styleUrl: './tour-builder.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class TourBuilderComponent {
  store = inject(TripStore);
  toast = inject(ToastService);
  destinations = DESTINATIONS;
  travelOpts = TRAVEL_OPTS;
  stayOpts = STAY_OPTS;
  sightOpts = SIGHT_OPTS;
  money = money;

  perPerson(): number { return Math.round(this.store.pkg().total / this.store.tTrav()); }

  reserve(): void {
    this.toast.show(`${this.store.tDest().name} package reserved — ${money(this.store.pkg().total)}`);
  }
}
