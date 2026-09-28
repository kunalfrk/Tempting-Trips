import { Component, ViewEncapsulation } from '@angular/core';
import { HeadComponent } from '@shared/ui/head/head.component';
import { IconComponent } from '@shared/ui/icon/icon.component';
import { TESTIMONIALS } from '@core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [HeadComponent, IconComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class TestimonialsComponent {
  items = TESTIMONIALS;
  stars(n: number): number[] { return Array.from({ length: n }, (_, i) => i); }
}
