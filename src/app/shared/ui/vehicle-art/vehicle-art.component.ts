import { Component, Input } from '@angular/core';

/** Side-profile vehicle artwork drawn over the card's gradient, keyed by `Vehicle.scene`. */
@Component({
  selector: 'app-vehicle-art',
  standalone: true,
  templateUrl: './vehicle-art.component.html',
  styleUrl: './vehicle-art.component.css',
})
export class VehicleArtComponent {
  @Input() grad: string[] = ['#333', '#222', '#111'];
  /** Body-type key: econ | sedan | suv | suv2 | lux | van. */
  @Input() kind = 'sedan';
  @Input() h = 120;

  get bg(): string {
    return `linear-gradient(160deg, ${this.grad[0]} 0%, ${this.grad[1]} 48%, ${this.grad[2]} 100%)`;
  }

  /** Body outline. Drawn in a 280x120 viewBox sitting on a road at y=96. */
  get body(): string {
    const shapes: Record<string, string> = {
      // compact hatchback-ish saloon: short bonnet, stubby boot
      econ: 'M52 96 L52 84 Q52 78 58 77 L84 73 L104 57 Q107 54 112 54 L164 54 Q169 54 172 57 L189 73 L219 78 Q226 79 226 86 L226 96 Z',
      // three-box sedan: longer bonnet and boot, lower roof
      sedan: 'M44 96 L44 83 Q44 76 51 75 L80 70 L103 54 Q106 51 111 51 L171 51 Q176 51 179 54 L200 71 L232 77 Q239 78 239 86 L239 96 Z',
      // tall MPV/SUV: high flat roof running most of the length, boxy squared-off rear
      suv: 'M48 96 L48 78 Q48 71 55 70 L74 66 L92 44 Q95 41 100 41 L214 41 Q222 41 224 47 L232 70 Q238 72 238 80 L238 96 Z',
      // premium SUV: even taller and squarer, raised ride height, upright nose
      suv2: 'M46 96 L46 74 Q46 67 54 66 L70 62 L88 38 Q91 35 97 35 L218 35 Q227 35 229 42 L237 66 Q244 68 244 77 L244 96 Z',
      // luxury saloon: long low bonnet, sweeping roofline
      lux: 'M40 96 L40 82 Q40 74 48 73 L78 67 L106 50 Q110 47 116 47 L174 47 Q180 47 184 51 L206 69 L238 75 Q246 76 246 85 L246 96 Z',
      // van / tempo traveller: tall slab side, flat front
      van: 'M40 96 L40 54 Q40 46 49 46 L196 46 Q203 46 207 51 L228 74 Q234 79 234 86 L234 96 Z',
    };
    return shapes[this.kind] ?? shapes['sedan'];
  }

  /** Glasshouse (windows) matching the body. */
  get glass(): string {
    const shapes: Record<string, string> = {
      econ: 'M108 59 L124 59 L124 73 L98 73 Z M130 59 L162 59 L177 73 L130 73 Z',
      sedan: 'M107 56 L125 56 L125 70 L96 70 Z M131 56 L169 56 L187 70 L131 70 Z',
      suv: 'M99 46 L120 46 L120 65 L88 65 Z M126 46 L158 46 L158 65 L126 65 Z M164 46 L212 46 L219 65 L164 65 Z',
      suv2: 'M95 40 L118 40 L118 61 L84 61 Z M124 40 L158 40 L158 61 L124 61 Z M164 40 L216 40 L224 61 L164 61 Z',
      lux: 'M111 52 L130 52 L130 67 L100 67 Z M136 52 L172 52 L192 67 L136 67 Z',
      van: 'M50 54 L92 54 L92 72 L50 72 Z M98 54 L140 54 L140 72 L98 72 Z M146 54 L188 54 L188 72 L146 72 Z M194 54 L200 54 L214 72 L194 72 Z',
    };
    return shapes[this.kind] ?? shapes['sedan'];
  }

  /** Wheel centres [frontX, rearX] and radius. */
  get wheels(): { x: number; r: number }[] {
    const sets: Record<string, [number, number, number]> = {
      econ: [80, 198, 15],
      sedan: [76, 205, 15],
      suv: [80, 208, 17],
      suv2: [78, 212, 18],
      lux: [78, 212, 16],
      van: [72, 202, 16],
    };
    const [a, b, r] = sets[this.kind] ?? sets['sedan'];
    return [{ x: a, r }, { x: b, r }];
  }
}
