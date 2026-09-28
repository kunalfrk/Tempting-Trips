import { Component, ViewEncapsulation } from '@angular/core';

/** Fixed animated aurora backdrop that the glass panels refract. */
@Component({
  selector: 'app-aurora',
  standalone: true,
  templateUrl: './aurora.component.html',
  styleUrl: './aurora.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AuroraComponent {}
