import { Component, ElementRef, EventEmitter, HostListener, Input, Output, signal, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

export interface SelectOpt {
  k: string;
  l: string;
}

/**
 * Dropdown built from regular elements rather than a native <select>, because
 * Windows renders the native option list through the OS and ignores our theme.
 */
@Component({
  selector: 'app-select',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SelectComponent {
  @Input() opts: SelectOpt[] = [];
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();

  open = signal(false);

  constructor(private host: ElementRef<HTMLElement>) {}

  get label(): string {
    return this.opts.find((o) => o.k === this.value)?.l ?? '';
  }

  toggle(): void {
    this.open.update((v) => !v);
  }

  pick(o: SelectOpt): void {
    this.valueChange.emit(o.k);
    this.open.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocClick(e: MouseEvent): void {
    if (!this.host.nativeElement.contains(e.target as Node)) this.open.set(false);
  }

  @HostListener('document:keydown.escape')
  onEsc(): void {
    this.open.set(false);
  }
}
