import { Component, inject, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '@shared/ui/icon/icon.component';
import { ToastService } from '@core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {
  toast = inject(ToastService);
  columns = [
    { h: 'Company', links: ['About', 'Careers', 'Contact', 'Press'] },
    { h: 'Services', links: ['Airport', 'Local', 'Outstation', 'Chauffeur'] },
    { h: 'Explore', links: ['Destinations', 'Packages', 'Travel guide', 'Rewards'] },
    { h: 'Support', links: ['Help center', 'FAQs', 'Cancellation', 'Privacy'] },
  ];
}
