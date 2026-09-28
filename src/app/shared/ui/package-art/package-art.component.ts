import { Component, Input } from '@angular/core';

/** Palette per scenery theme: [sky-top, sky-bottom, land]. */
const THEME_GRADIENTS: Record<string, [string, string, string]> = {
  beach: ['#FBBF77', '#F472B6', '#6D5AE0'],
  backwater: ['#7BE0B0', '#2A9D8F', '#134E5E'],
  mountain: ['#A5C8FF', '#7EA9E8', '#2C3E66'],
  heritage: ['#F6C57A', '#E08A54', '#8B3A2E'],
  wildlife: ['#BFE08A', '#5C9E5A', '#1E4A32'],
  city: ['#F4A88C', '#B5568E', '#3A2C6B'],
  lake: ['#8FD3F4', '#5B8DEF', '#243B7A'],
};

/**
 * Scenery artwork for a tour package card — a horizon with a theme-specific
 * landscape, so the image reflects the trip rather than a vehicle gradient.
 */
@Component({
  selector: 'app-package-art',
  standalone: true,
  templateUrl: './package-art.component.html',
  styleUrl: './package-art.component.css',
})
export class PackageArtComponent {
  /** Scenery key: beach | backwater | mountain | heritage | wildlife | city | lake. */
  @Input() theme = 'beach';
  @Input() h = 150;

  get grad(): [string, string, string] {
    return THEME_GRADIENTS[this.theme] ?? THEME_GRADIENTS['beach'];
  }

  get bg(): string {
    const [a, b, c] = this.grad;
    return `linear-gradient(160deg, ${a} 0%, ${b} 52%, ${c} 100%)`;
  }

  /** Far layer — distant hills, skyline or treeline, in a 280x150 viewBox. */
  get far(): string {
    const shapes: Record<string, string> = {
      beach: 'M0 96 Q40 88 78 94 T150 92 T222 96 T280 92 L280 150 L0 150 Z',
      backwater: 'M0 92 Q34 80 66 90 Q92 98 118 88 Q150 76 182 88 Q214 98 246 86 Q264 80 280 86 L280 150 L0 150 Z',
      mountain: 'M0 104 L44 60 L72 86 L104 44 L146 88 L178 64 L214 96 L248 72 L280 102 L280 150 L0 150 Z',
      heritage: 'M0 106 L26 106 L26 88 L40 78 L54 88 L54 106 L92 106 L92 70 L108 58 L124 70 L124 106 L168 106 L168 84 L182 74 L196 84 L196 106 L232 106 L232 92 L246 82 L260 92 L260 106 L280 106 L280 150 L0 150 Z',
      wildlife: 'M0 100 Q36 86 72 98 Q104 108 138 94 Q172 80 206 96 Q242 110 280 94 L280 150 L0 150 Z',
      city: 'M0 108 L0 76 L22 76 L22 52 L44 52 L44 76 L64 76 L64 38 L92 38 L92 76 L118 76 L118 58 L138 58 L138 30 L160 30 L160 58 L186 58 L186 76 L214 76 L214 62 L240 62 L240 76 L280 76 L280 150 L0 150 Z',
      lake: 'M0 98 L38 66 L68 92 L98 58 L134 94 L168 70 L206 98 L244 76 L280 100 L280 150 L0 150 Z',
    };
    return shapes[this.theme] ?? shapes['beach'];
  }

  /** Mid layer — nearer silhouettes that give the scene depth. */
  get mid(): string {
    const shapes: Record<string, string> = {
      beach: 'M0 116 Q42 108 84 114 T168 112 T252 116 L280 114 L280 150 L0 150 Z',
      backwater: 'M0 112 Q40 104 78 110 Q116 116 154 108 Q196 100 236 110 Q260 116 280 110 L280 150 L0 150 Z',
      mountain: 'M0 122 L36 92 L66 112 L100 84 L138 114 L172 96 L210 118 L246 100 L280 120 L280 150 L0 150 Z',
      heritage: 'M0 124 L34 124 L34 110 L48 102 L62 110 L62 124 L118 124 L118 104 L134 96 L150 104 L150 124 L206 124 L206 112 L220 104 L234 112 L234 124 L280 124 L280 150 L0 150 Z',
      wildlife: 'M0 118 Q34 106 68 116 Q100 124 132 112 Q168 100 202 114 Q240 128 280 112 L280 150 L0 150 Z',
      city: 'M0 126 L0 104 L26 104 L26 88 L50 88 L50 104 L78 104 L78 82 L104 82 L104 104 L134 104 L134 92 L158 92 L158 104 L188 104 L188 86 L214 86 L214 104 L246 104 L246 96 L280 96 L280 150 L0 150 Z',
      lake: 'M0 120 L34 98 L64 116 L96 92 L132 118 L166 100 L204 120 L242 104 L280 122 L280 150 L0 150 Z',
    };
    return shapes[this.theme] ?? shapes['beach'];
  }

  /** Whether the lower half is water (gets a shimmer band) or land. */
  get water(): boolean {
    return this.theme === 'beach' || this.theme === 'backwater' || this.theme === 'lake';
  }

  /** A single motif drawn on the horizon, distinguishing similar themes. */
  get motif(): string {
    const shapes: Record<string, string> = {
      // palm tree
      beach: 'M223 116 L226 92 M226 92 Q214 84 206 90 M226 92 Q238 82 247 88 M226 92 Q218 78 222 70 M226 92 Q234 78 232 68',
      // houseboat with curved roof
      backwater: 'M196 116 L252 116 L248 124 L200 124 Z M202 116 L202 106 Q224 96 246 106 L246 116',
      // pine trees
      mountain: 'M212 120 L220 96 L228 120 Z M232 120 L239 102 L246 120 Z',
      // palace dome with finial
      heritage: 'M206 118 L206 104 Q206 90 220 90 Q234 90 234 104 L234 118 Z M220 90 L220 82',
      // elephant silhouette
      wildlife: 'M200 122 Q200 104 216 104 Q236 104 240 116 L240 122 M204 122 L204 114 M214 122 L214 114 M228 122 L228 114 M238 122 L238 114 M240 110 Q248 108 248 118',
      // ferris-wheel-ish city marker / tower
      city: 'M222 118 L222 84 M214 118 L230 118 M216 96 L228 96 M218 88 L226 88',
      // island palace on the water
      lake: 'M204 118 L204 100 L212 92 L220 100 L220 118 Z M224 118 L224 104 L232 96 L240 104 L240 118 Z',
    };
    return shapes[this.theme] ?? shapes['beach'];
  }
}
