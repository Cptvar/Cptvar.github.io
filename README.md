# Jahvar Edwards — Systems, Evidence & Operations

[Visit the portfolio](https://cptvar.github.io/) · [Read the engineering field guide](https://cptvar.github.io/engineering.html)

This repository contains my public portfolio website, curated architecture notes and recorded dashboard images. It does **not** contain the private NBA, NHL, NFL or MLB platform source code.

I direct and operate an AI-assisted sports-data platform on a Windows workstation. The portfolio explains the connections between its inputs, sport-specific calculations, retained evidence, dashboards and operating practices. It pairs this independent work with my professional enterprise integration-support experience.

## Choose a starting point

| Interest | Read |
| --- | --- |
| A short, plain-language introduction | [Quick tour](https://cptvar.github.io/#what) |
| How the pieces connect | [Interactive architecture](https://cptvar.github.io/#how) |
| Four sport-specific implementations | [Systems overview](https://cptvar.github.io/#sports) |
| What the dashboards actually show | [Recorded evidence gallery](https://cptvar.github.io/#see) |
| Troubleshooting and recovery | [Incident cases](https://cptvar.github.io/#broke) |
| Design detail and terminology | [Engineering field guide](https://cptvar.github.io/engineering.html) |
| A text architecture reference | [ARCHITECTURE.md](ARCHITECTURE.md) |

## Website implementation

The site is buildless HTML, CSS and JavaScript hosted on GitHub Pages. It has no framework dependency, analytics, account system or backend. Its interactive architecture tour and image selector operate entirely in the visitor's browser. They do not connect to or control my workstation.

| File | Responsibility |
| --- | --- |
| `index.html` | Overview, architecture tour, gallery, incidents and professional context |
| `engineering.html` | Detailed explanations, source basis and glossary |
| `styles.css` | Responsive layout, dark/light themes, keyboard focus and print styling |
| `site.js` | Architecture selection, dashboard selection and print action |
| `img_*.jpg` | Original recorded dashboard captures |

Open `index.html` directly or serve the folder with a local static HTTP server. No package installation or build step is required. Core descriptions, incidents, image links and the complete engineering guide remain available without JavaScript.

## Evidence boundaries

- I use AI heavily for implementation. My role includes direction, architecture decisions, operating rules, investigation and verification.
- Recorded dashboard images are not live telemetry. The image named `img_mlb.jpg` shows the multi-sport research desk with NBA inputs, rather than a baseball game.
- Replay supports reproducibility; it does not establish predictive calibration or profitability.
- Models have not demonstrated a reliable advantage over closing betting markets. No sealed prospective outcomes are published here.
- Detailed descriptions were reviewed against retained project records on 27 November 2026. Specific historical measurements retain their original scope.
- Search-engine indexing remains disabled through page metadata. The website and repository are public to anyone with access to their URLs; `noindex` is not access control.

The [guide's source-basis section](https://cptvar.github.io/engineering.html#references) explains which kinds of records informed the public descriptions.
