import { Component, ViewEncapsulation } from '@angular/core';
import { HeadComponent } from '@shared/ui/head/head.component';
import { IconComponent } from '@shared/ui/icon/icon.component';
import { FAQS } from '@core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [HeadComponent, IconComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class FaqComponent {
  faqs = FAQS;
  openIndex = -1;
  toggle(i: number): void { this.openIndex = this.openIndex === i ? -1 : i; }
}
