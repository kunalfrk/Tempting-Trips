import { Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '@shared/ui/icon/icon.component';
import { FieldComponent } from '@shared/ui/field/field.component';
import { AuthModalService, ToastService } from '@core';

type AuthMode = 'email' | 'phone';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [IconComponent, FieldComponent],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AuthModalComponent {
  auth = inject(AuthModalService);
  toast = inject(ToastService);

  mode = signal<AuthMode>('email');
  email = signal('');
  phone = signal('');

  setMode(m: AuthMode): void { this.mode.set(m); }

  close(): void { this.auth.hide(); }

  submit(): void {
    const via = this.mode() === 'email' ? this.email() : this.phone();
    if (!via.trim()) return;
    this.close();
    this.toast.show('Sign in coming soon');
  }
}
