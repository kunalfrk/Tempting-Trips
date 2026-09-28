import { Component, computed, inject, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '@shared/ui/icon/icon.component';
import { PackageArtComponent } from '@shared/ui/package-art/package-art.component';
import { SelectComponent } from '@shared/ui/select/select.component';
import { money, PackageSort, ToastService, TourPackage, TripStore } from '@core';

@Component({
  selector: 'app-rides',
  standalone: true,
  imports: [IconComponent, PackageArtComponent, SelectComponent],
  templateUrl: './rides.component.html',
  styleUrl: './rides.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class RidesComponent {
  store = inject(TripStore);
  toast = inject(ToastService);
  money = money;

  sortOpts: { k: PackageSort; l: string }[] = [
    { k: 'popular', l: 'Most popular' },
    { k: 'low', l: 'Price: low → high' },
    { k: 'high', l: 'Price: high → low' },
    { k: 'rating', l: 'Top rated' },
  ];

  destLabel = computed(() => this.store.drop() || this.store.destPackages()[0]?.destination || 'your destination');

  discount(p: TourPackage): number {
    return Math.round(((p.origPrice - p.price) / p.origPrice) * 100);
  }

  choose(p: TourPackage): void {
    this.store.choosePackage(p);
    this.toast.show(`${p.title} added — pick your vehicle next`);
  }
}
