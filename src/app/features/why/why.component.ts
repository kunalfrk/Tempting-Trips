import { Component, ViewEncapsulation } from '@angular/core';
import { HeadComponent } from '@shared/ui/head/head.component';
import { IconComponent } from '@shared/ui/icon/icon.component';
import { TRUST } from '@core';

@Component({
  selector: 'app-why',
  standalone: true,
  imports: [HeadComponent, IconComponent],
  templateUrl: './why.component.html',
  styleUrl: './why.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class WhyComponent { items = TRUST; }
