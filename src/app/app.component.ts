import { Component, inject } from '@angular/core';
import { AuroraComponent, AuthModalComponent, NavComponent, ToastComponent } from '@layout';
import { BookingFlowComponent, HomeComponent, RidesComponent } from '@features';
import { TripStore } from '@core';

/** Application shell: persistent chrome plus the currently selected page. */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AuroraComponent, NavComponent, HomeComponent, RidesComponent, BookingFlowComponent, ToastComponent, AuthModalComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly store = inject(TripStore);
}
