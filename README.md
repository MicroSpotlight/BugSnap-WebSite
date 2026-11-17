# BugSnap Website

Official marketing website for BugSnap, a mobile GitHub bug-reporting tool.

## Local preview

The site is intentionally static and has no build-time or runtime dependencies:

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173`.

The header language switch covers English and Simplified Chinese, follows the
browser language on first visit, and persists the user's choice locally.

The header, hero, and release section link to the public App Store listing
(`6804155816`). Release copy follows the verified public version in
`product-facts.md`; updates still in review are not advertised as available.
Support, privacy, and terms remain available in the footer.

## Design variations

The production default is the **Evidence first** direction. Open
`http://localhost:4173/?tweaks=1` or press `T` to compare all three Claude Design
directions:

- **A · Evidence** — product-forward, with the report handoff as the hero.
- **B · Issue** — a darker developer-facing treatment centered on the final Issue.
- **C · Field note** — a more editorial, capture-first statement.

The variation and density settings persist in local storage. They do not send
analytics or user data.

## Structure

```text
.
├── assets/          First-party BugSnap icon and App Store screenshots
├── index.html       Semantic page structure and design-system declaration
├── styles.css       Core visual system and desktop variants
├── sections.css     Section layouts, motion, and design variations
├── responsive.css   Tablet and mobile adaptations
└── script.js        Navigation, screenshot tabs, reveals, and design tweaks
```

## Deployment

GitHub Pages deploys the repository root through
`.github/workflows/deploy-pages.yml` on every push to `main`. No build command
is required. The public site is:

`https://bugsnap.microspotlight.team/`

## Source assets

All product imagery is copied from the first-party BugSnap app repository. See
[`brand-spec.md`](brand-spec.md) for provenance and usage rules.
