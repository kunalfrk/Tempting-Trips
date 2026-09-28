# Tempting Trips — Angular

Premium travel & mobility platform: rides, airport transfers, and a modular
**tour builder** (travel + stay + sightseeing) with live pricing. Built with
**Angular 18** using standalone components, signals, and the new control-flow
syntax (`@if` / `@for`). Glassmorphism UI over an animated aurora backdrop.

---

## Quick start

```bash
npm install
npm start          # runs `ng serve --open` → http://localhost:4200
```

Other scripts:

```bash
npm run build      # production build → dist/tempting-trips
npm run watch      # rebuild on change (development config)
```

> Requires Node.js 18.19+ or 20.11+ (Angular 18 requirement).

---

## Opening in VS Code

```bash
code .
```

Recommended extensions are pre-listed in `.vscode/extensions.json`
(Angular Language Service + Prettier). VS Code will offer to install them.

---

## Working with Claude Code

Everything is split into small, single-responsibility files so an agent can
find and edit exactly the right place. Point Claude Code at a task, e.g.:

- *"Change the brand accent from aqua to violet"* → edit the `--acc` / `--acc-2`
  variables at the top of `src/styles.css`.
- *"Add a new destination"* → append to `DESTINATIONS` in `src/app/data/data.ts`.
- *"Add a payment method"* → edit `payMethods` in
  `src/app/sections/booking-flow.component.ts`.
- *"Make sightseeing options depend on the selected destination"* → the data
  lives in `src/app/data/data.ts` (`SIGHT_OPTS`) and is read in
  `tour-builder.component.ts`; wire it through `TripStore`.

Run `npm run build` after changes to type-check the whole project.

---

## Project structure

```
src/
├── index.html                 # fonts + <app-root>
├── main.ts                    # bootstrap
├── styles.css                 # ALL global styles + design tokens (:root vars)
└── app/
    ├── app.component.ts        # shell: aurora + nav + page switch + toast
    ├── data/
    │   ├── data.ts             # types + every content array (edit content here)
    │   └── icons.ts            # SVG icon path map (add icons here)
    ├── services/
    │   ├── trip-store.service.ts   # signals: all shared state + package pricing
    │   └── toast.service.ts        # toast notifications
    ├── shared/                 # reusable building blocks
    │   ├── icon.component.ts        # <app-icon n="plane" [s]="20" />
    │   ├── scene.component.ts       # gradient "photo" with line silhouette
    │   ├── field.component.ts       # labelled input
    │   ├── stepper.component.ts     # numeric +/- control
    │   └── head.component.ts        # section heading block
    └── sections/               # one file per page section
        ├── aurora.component.ts
        ├── nav.component.ts
        ├── hero.component.ts        # dual-mode booking widget
        ├── home.component.ts        # composes the homepage
        ├── services.component.ts
        ├── tour-builder.component.ts   # ★ the signature feature
        ├── destinations.component.ts
        ├── why.component.ts
        ├── testimonials.component.ts
        ├── safety.component.ts
        ├── drive.component.ts
        ├── loyalty.component.ts
        ├── blog.component.ts
        ├── faq.component.ts
        ├── footer.component.ts
        ├── booking-flow.component.ts   # 5-step ride booking
        └── toast.component.ts
```

## Design tokens

All colours, radii, blur, and shadows are CSS variables in the `:root` block of
`src/styles.css`. Change them once to re-theme the entire app:

```css
--bg:#080B14;  --acc:#5EEAD4;  --acc-2:#38BDF8;   /* etc. */
```

## State

`TripStore` (in `src/app/services/`) is a signals-based store. The hero widget,
tour builder, and booking flow all read/write the same signals, and the tour
package price is a `computed()` that recalculates automatically.
