import { Component, Input } from '@angular/core';
import { ICONS } from '@core';

/** Thin-line SVG icon. Usage: <app-icon n="plane" [s]="20" [sw]="1.6" /> */
@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',
})
export class IconComponent {
  @Input() n = '';
  @Input() s = 20;
  @Input() sw = 1.6;
  @Input() fill = false;
  get path(): string { return ICONS[this.n] ?? ''; }
}
