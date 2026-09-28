import { Component, inject, ViewEncapsulation } from '@angular/core';
import { HeadComponent } from '@shared/ui/head/head.component';
import { SceneComponent } from '@shared/ui/scene/scene.component';
import { IconComponent } from '@shared/ui/icon/icon.component';
import { Destination, DESTINATIONS, money, TripStore } from '@core';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [HeadComponent, SceneComponent, IconComponent],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class DestinationsComponent {
  store = inject(TripStore);
  destinations = DESTINATIONS;
  money = money;
  pick(d: Destination): void { this.store.tDest.set(d); this.store.scrollTo('builder'); }
}
