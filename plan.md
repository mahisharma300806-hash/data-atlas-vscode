# Data Atlas — implementation plan

## Product scope

A single-page beginner learning site explaining data warehousing and data mining in plain English. The content will cover an overview, warehouse architecture and lifecycle, OLTP versus OLAP, mining methods and process, a side-by-side comparison, real-world examples, takeaways, and a searchable-by-section glossary/FAQ.

## Implementation approach

- Use a small static web app served by a Node HTTP server on the managed Preview port (3000).
- Keep content semantic and accessible in `public/index.html`; keep layout, motion, and responsive behavior in `public/styles.css`; keep section navigation, accordion behavior, scroll reveal, and progress state in `public/script.js`.
- Serve `public/manus-routes.json` as the route manifest required by Webdev.
- No login, database, server API, or external image assets are needed; diagrams are CSS/SVG-like HTML so the site remains fast and self-contained.

## Design direction

- **Design movement:** editorial data-journalism / modern learning atlas — a calm, print-inspired study guide with crisp information design.
- **Core principles:** explain before decorating; make relationships visible; use contrast to separate warehouse vs mining; reward scanning with strong hierarchy and short chunks.
- **Color philosophy:** deep ink navy gives the page an analytical foundation; warm paper keeps the experience approachable; mint signals trustworthy systems and “stored” knowledge; tangerine marks action and discovery; cobalt is the ownable accent for data pathways.
- **Layout paradigm:** a long-form “field guide” with a slim vertical chapter rail, staggered content blocks, and diagrammatic pathways instead of a centered grid of identical cards.
- **Signature elements:** route-line connectors, small numbered chapter markers, and pill-shaped “signal” labels that behave like annotations in a technical notebook.
- **Interaction philosophy:** navigation feels like moving through a field guide; accordions reveal definitions without clutter; hover/focus states highlight relationships rather than adding noise.
- **Animation:** use short, ease-out reveal transitions on scroll; animate the architecture flow line and card elevation subtly; respect `prefers-reduced-motion`.
- **Typography system:** Space Grotesk for headlines and labels; DM Sans for body copy; use tight display sizes, generous line height, and monospace numerals for process labels.
- **Brand essence:** “A clear field guide to the systems behind smarter decisions.” Personality: curious, grounded, generous.
- **Brand voice:** plain-spoken, visual, and specific. Example lines: “Store the signal. Find the pattern.” and “Two jobs, one decision loop.”
- **Wordmark & logo:** `Data Atlas` paired with a compact compass-stack mark: three layered blocks with a north-point dot, suggesting organized data and direction.
- **Signature brand color:** cobalt `#355CDE`, used sparingly for pathways, active chapter state, and key links.

## Project structure

- `server.js` — minimal static file server with safe path handling and `/manus-routes.json` support.
- `package.json` — start script and runtime metadata.
- `app.config.ts` — project logo metadata.
- `public/index.html` — page content and semantic structure.
- `public/styles.css` — visual system, responsive layout, diagrams, and motion.
- `public/script.js` — nav state, accordion, scroll reveal, and progress indicator.
- `public/manus-routes.json` — complete route manifest for the single-page route.
