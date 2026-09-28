import { Component, inject, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '@shared/ui/icon/icon.component';
import { ToastService } from '@core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ToastComponent {
  toast = inject(ToastService);
}
