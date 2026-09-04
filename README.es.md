# Maker Planet

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Figma](https://img.shields.io/badge/Dise%C3%B1o_en_Figma-F24E1E?style=flat-square&logo=figma&logoColor=white)](https://www.figma.com/design/ixcKn5POi257WDCrwFVoz2/trrabajo-sass?node-id=0-1&t=Lwu2lKvQxJA6K5rZ-1)
[![Estado](https://img.shields.io/badge/Estado-Completado-success?style=flat-square)](#)

Interfaz web estática para "Maker Planet", desarrollada para exhibir arquitectura Sass avanzada, HTML5 semántico y gestión de estado mediante CSS puro bajo una restricción de cero JavaScript.

[Demo en Vivo](https://delopser8.github.io/maker-planet) | [Diseño en Figma](https://www.figma.com/design/ixcKn5POi257WDCrwFVoz2/trrabajo-sass?node-id=0-1&t=Lwu2lKvQxJA6K5rZ-1) | [Read in English 🇬🇧](README.md)

---

## Visión General

Maker Planet es un concepto de plataforma de comercio electrónico que unifica en una sola interfaz las principales marcas de juguetes de bloques de construcción.

El objetivo principal de este proyecto es demostrar los fundamentos clave del Frontend, aprovechando las capacidades nativas de CSS y HTML5 semántico para ofrecer una interfaz rica y adaptable (responsive) sin dependencias de JavaScript.

---

## Tecnologías y Restricciones

- **HTML5:** Arquitectura semántica orientada a la accesibilidad (A11y) y a la estructura para SEO.
- **Sass (SCSS):** Arquitectura modular estructurada con mixins y utilidades de maquetación.
- **Gestión de Estado con CSS Puro:** Componentes interactivos desarrollados mediante selectores nativos (`:checked`, `:target` y pseudoclases de estado).

---

## Arquitectura y Características

- **Arquitectura Centrada en CSS:** Componentes dinámicos impulsados exclusivamente por el motor de renderizado de CSS y selectores avanzados.
- **Diseño Adaptable (Responsive):** Enfoque *mobile-first* construido sobre CSS Grid y Flexbox.
- **Rendimiento Optimizado:** Cero sobrecarga de ejecución en tiempo de JS, garantizando un despliegue veloz del primer renderizado de contenido (FCP).

---

## Guía del Proyecto

### Requisitos Previos

- Node.js (v18+ recomendado) o el compilador Dart Sass.

### Instalación y Ejecución Local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/delopser8/maker-planet.git
   cd maker-planet
   ```
