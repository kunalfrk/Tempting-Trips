import { Component, inject, ViewEncapsulation } from '@angular/core';
import { HeadComponent } from '@shared/ui/head/head.component';
import { IconComponent } from '@shared/ui/icon/icon.component';
import { ToastService } from '@core';

@Component({
  selector: 'app-drive',
  standalone: true,
  imports: [HeadComponent, IconComponent],
  templateUrl: './drive.component.html',
  styleUrl: './drive.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class DriveComponent {
  toast = inject(ToastService);
  benefits = [
    { icon: 'wallet', t: 'Weekly payouts', d: 'Transparent commission' },
    { icon: 'clock', t: 'Flexible hours', d: 'Drive on your schedule' },
    { icon: 'shield', t: 'Insurance cover', d: 'Comprehensive protection' },
    { icon: 'sparkle', t: 'Grow tiers', d: 'Move up to luxury' },
  ];
}
