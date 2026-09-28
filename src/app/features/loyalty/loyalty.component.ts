import { Component, inject, ViewEncapsulation } from '@angular/core';
import { HeadComponent } from '@shared/ui/head/head.component';
import { IconComponent } from '@shared/ui/icon/icon.component';
import { ToastService } from '@core';

@Component({
  selector: 'app-loyalty',
  standalone: true,
  imports: [HeadComponent, IconComponent],
  templateUrl: './loyalty.component.html',
  styleUrl: './loyalty.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class LoyaltyComponent {
  toast = inject(ToastService);
  tiers = [
    { name: 'Silver', pts: '500+', perk: '5% back on trips' },
    { name: 'Gold', pts: '2,000+', perk: 'Upgrades + 10% back' },
    { name: 'Platinum', pts: '5,000+', perk: 'Priority + 15% + lounge' },
  ];
}
