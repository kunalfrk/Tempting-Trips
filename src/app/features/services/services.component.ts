import { Component, ViewEncapsulation } from '@angular/core';
import { HeadComponent } from '@shared/ui/head/head.component';
import { IconComponent } from '@shared/ui/icon/icon.component';
import { SERVICES } from '@core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [HeadComponent, IconComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ServicesComponent { services = SERVICES; }
