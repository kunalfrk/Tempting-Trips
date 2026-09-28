import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

/** Numeric +/- stepper. Two-way via [value]/(valueChange). */
@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class StepperComponent {
  @Input() value = 0;
  @Input() min = 0;
  @Input() max = 99;
  @Output() valueChange = new EventEmitter<number>();
  dec(): void { this.valueChange.emit(Math.max(this.min, this.value - 1)); }
  inc(): void { this.valueChange.emit(Math.min(this.max, this.value + 1)); }
}
