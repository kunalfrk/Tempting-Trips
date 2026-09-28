import { Component, HostListener, inject, signal, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '@shared/ui/icon/icon.component';
import { AuthModalService, ToastService, TripStore } from '@core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class NavComponent {
  store = inject(TripStore);
  auth = inject(AuthModalService);
  toast = inject(ToastService);
  scrolled = signal(false);
  menu = signal(false);
  links = [
    { label: 'Services', id: 'services' },
    { label: 'Tour Builder', id: 'builder' },
    { label: 'Destinations', id: 'destinations' },
    { label: 'Safety', id: 'safety' },
    { label: 'Drive with us', id: 'drive' },
  ];

  @HostListener('window:scroll')
  onScroll(): void { this.scrolled.set(window.scrollY > 30); }

  go(id: string): void { this.menu.set(false); this.store.scrollTo(id); }
}
