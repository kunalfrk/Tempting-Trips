import { Component, inject, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '@shared/ui/icon/icon.component';
import { HeroComponent } from '@features/hero/hero.component';
import { ServicesComponent } from '@features/services/services.component';
import { TourBuilderComponent } from '@features/tour-builder/tour-builder.component';
import { DestinationsComponent } from '@features/destinations/destinations.component';
import { WhyComponent } from '@features/why/why.component';
import { TestimonialsComponent } from '@features/testimonials/testimonials.component';
import { SafetyComponent } from '@features/safety/safety.component';
import { DriveComponent } from '@features/drive/drive.component';
import { LoyaltyComponent } from '@features/loyalty/loyalty.component';
import { BlogComponent } from '@features/blog/blog.component';
import { FaqComponent } from '@features/faq/faq.component';
import { FooterComponent } from '@layout/footer/footer.component';
import { TripStore } from '@core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    IconComponent, HeroComponent, ServicesComponent, TourBuilderComponent,
    DestinationsComponent, WhyComponent, TestimonialsComponent, SafetyComponent,
    DriveComponent, LoyaltyComponent, BlogComponent, FaqComponent, FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  store = inject(TripStore);
  quickCats = [
    { ic: 'plane', l: 'Airport', target: 'services' },
    { ic: 'car', l: 'Local', target: 'services' },
    { ic: 'route', l: 'Outstation', target: 'services' },
    { ic: 'sparkle', l: 'Chauffeur', target: 'services' },
    { ic: 'bag', l: 'Packages', target: 'builder' },
    { ic: 'shield', l: 'Corporate', target: 'services' },
  ];
  scrollTop(): void { window.scrollTo({ top: 0, behavior: 'smooth' }); }
}
