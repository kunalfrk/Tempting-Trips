import { Component, Input } from '@angular/core';

/** Gradient "scene" with a line silhouette + sun glow, replaces stock photos. */
@Component({
  selector: 'app-scene',
  standalone: true,
  templateUrl: './scene.component.html',
  styleUrl: './scene.component.css',
})
export class SceneComponent {
  @Input() grad: string[] = ['#333', '#222', '#111'];
  @Input() line = '';
  @Input() h = 170;

  get bg(): string {
    return `linear-gradient(160deg, ${this.grad[0]} 0%, ${this.grad[1]} 48%, ${this.grad[2]} 100%)`;
  }

  get silPath(): string {
    const paths: Record<string, string> = {
      mountain: 'M0 120 L60 55 L100 85 L150 30 L210 90 L280 120 Z',
      wave: 'M0 100 Q40 80 70 100 T140 100 T210 100 T280 100 L280 120 L0 120 Z',
      city: 'M0 120 L0 80 L25 80 L25 55 L45 55 L45 80 L65 80 L65 40 L90 40 L90 80 L120 80 L120 60 L140 60 L140 30 L160 30 L160 60 L185 60 L185 80 L215 80 L215 65 L240 65 L240 80 L280 80 L280 120 Z',
      fort: 'M0 120 L0 90 L15 90 L15 75 L30 75 L30 90 L60 90 L60 55 L75 40 L90 55 L90 90 L120 90 L120 70 L135 70 L135 55 L150 70 L150 90 L200 90 L200 78 L215 78 L215 90 L280 90 L280 120 Z',
    };
    return paths[this.line] ?? paths['mountain'];
  }
}
