import { Component, Input } from '@angular/core';

/** Section heading block (eyebrow + title + optional description). */
@Component({
  selector: 'app-head',
  standalone: true,
  templateUrl: './head.component.html',
})
export class HeadComponent {
  @Input() label = '';
  @Input() title = '';
  @Input() desc = '';
  @Input() center = false;
}
