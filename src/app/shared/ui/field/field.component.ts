import { Component, ElementRef, EventEmitter, HostListener, Input, Output, signal, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

/** Labelled input with optional leading icon and autocomplete suggestions. Two-way via [value]/(valueChange). */
@Component({
  selector: 'app-field',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './field.component.html',
  styleUrl: './field.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class FieldComponent {
  @Input() label = '';
  @Input() value = '';
  @Input() ph = '';
  @Input() type = 'text';
  @Input() icon = '';
  @Input() err = '';
  /** Optional suggestion list; when set, typing shows a matching dropdown below the input. */
  @Input() opts: string[] = [];
  @Output() valueChange = new EventEmitter<string>();

  open = signal(false);
  active = signal(-1);

  constructor(private host: ElementRef<HTMLElement>) {}

  get matches(): string[] {
    const q = this.value.trim().toLowerCase();
    const list = q ? this.opts.filter((o) => o.toLowerCase().includes(q)) : this.opts;
    return list.slice(0, 8);
  }

  onInput(v: string): void {
    this.valueChange.emit(v);
    this.active.set(-1);
    if (this.opts.length) this.open.set(true);
  }

  onFocus(): void {
    if (this.opts.length) this.open.set(true);
  }

  pick(v: string): void {
    this.valueChange.emit(v);
    this.open.set(false);
    this.active.set(-1);
  }

  onKeydown(e: KeyboardEvent): void {
    if (!this.opts.length || !this.open() || !this.matches.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      this.active.set((this.active() + 1) % this.matches.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      this.active.set((this.active() - 1 + this.matches.length) % this.matches.length);
    } else if (e.key === 'Enter' && this.active() >= 0) {
      e.preventDefault();
      this.pick(this.matches[this.active()]);
    } else if (e.key === 'Escape') {
      this.open.set(false);
    }
  }

  @HostListener('document:click', ['$event'])
  onDocClick(e: MouseEvent): void {
    if (!this.host.nativeElement.contains(e.target as Node)) this.open.set(false);
  }
}
