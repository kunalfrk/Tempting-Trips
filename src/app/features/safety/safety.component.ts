import { Component, ViewEncapsulation } from '@angular/core';
import { HeadComponent } from '@shared/ui/head/head.component';
import { IconComponent } from '@shared/ui/icon/icon.component';
import { SAFETY } from '@core';

@Component({
  selector: 'app-safety',
  standalone: true,
  imports: [HeadComponent, IconComponent],
  templateUrl: './safety.component.html',
  styleUrl: './safety.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SafetyComponent { items = SAFETY; }
