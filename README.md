<p align="center">
  <b>English</b> · <a href="README.es.md">Español</a>
</p>

# Maker Planet

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white)](https://sass-lang.com/)
[![AEO Ready](https://img.shields.io/badge/AEO-llms.txt-000000?style=flat-square&logo=markdown&logoColor=white)](llms.txt)
[![Figma](https://img.shields.io/badge/Figma_Design-F24E1E?style=flat-square&logo=figma&logoColor=white)](https://www.figma.com/design/ixcKn5POi257WDCrwFVoz2/trrabajo-sass?node-id=0-1&t=Lwu2lKvQxJA6K5rZ-1)
[![Status](https://img.shields.io/badge/Status-Completed-success?style=flat-square)](#)

Static e-commerce interface for "Maker Planet", built to showcase advanced Sass architecture, semantic HTML5, and CSS-only state management under a zero-JavaScript constraint.

[Live Demo](https://delopser.github.io/maker-planet) | [Figma Design](https://www.figma.com/design/ixcKn5POi257WDCrwFVoz2/trrabajo-sass?node-id=0-1&t=Lwu2lKvQxJA6K5rZ-1)


## Overview

Maker Planet is a concept e-commerce platform unifying leading building-block toy brands into a single cohesive interface.

The primary objective of this project is to demonstrate core Frontend fundamentals, leveraging modern CSS and semantic HTML5 to deliver a rich, responsive UI without JavaScript dependencies.


## Tech Stack & Constraints

- **HTML5:** Semantic architecture focusing on accessibility (A11y) and SEO structure.
- **Sass (SCSS):** Modular architecture utilizing mixins and layout utilities.
- **Pure CSS State Management:** Primary UI interactive elements engineered using native selectors (`:checked`, `:target`, and state pseudo-classes).
- **AEO (Answer Engine Optimization):** Compatibility with AI agents and LLM crawlers via the [`llms.txt`](llms.txt) standard (with multilingual support in [`llms-es.txt`](llms-es.txt)).


## Architecture & Features

- **CSS-First Architecture:** Dynamic layout components driven entirely by CSS layout engines and modern pseudo-selectors.
- **Responsive Layout:** Mobile-first architecture built with CSS Grid and Flexbox.
- **Performance Optimized:** Zero JavaScript execution overhead ensuring fast First Contentful Paint (FCP).
- **Answer Engine Optimization (AEO):** Root Markdown manifest implementation designed for efficient semantic indexing by LLMs and conversational agents.


## Getting Started

### Prerequisites

- Node.js (v18+ recommended) or Dart Sass compiler.

### Installation & Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/delopser/maker-planet.git
   cd maker-planet
   ```


## Known Limitations

- **Simultaneous Overlay Controls (Search & Menu):** Without JavaScript to manipulate DOM state, the search bar and the hamburger menu toggle visibility via independent native `checkbox` elements. Opting for `checkbox` rather than `radio` inputs preserves the native multi-click toggle behavior (allowing a component to be closed by clicking it again). Consequently, this introduces a minor, visually managed UI overlap if both toggles are triggered at the same time.


## License

[MIT](LICENSE) - free to use, modify and distribute.
