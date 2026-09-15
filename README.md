<h1 align="center">3D Forest Parallax</h1>

<p align="center">
  An immersive 3D forest scene with parallax depth effect and animated rain, built with vanilla HTML, CSS, and JavaScript.
</p>

<p align="center">
  <b>Live Demos:</b>
  <a href="https://3d-forest-parallax.vercel.app/">Vercel</a> ·
  <a href="https://onlydisco.github.io/3d-forest-parallax/">GitHub Pages</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

---

## Overview

A purely aesthetic demo that creates a layered 3D forest scene with depth-based parallax. Moving your mouse rotates the scene in 3D space using CSS `perspective` and `transform-style: preserve-3d`, creating an immersive depth illusion. A canvas-based rain animation plays over the scene for added atmosphere.

## Features

- **3D Parallax Effect** -- 6 visual layers at different Z-depths respond to mouse movement
- **Animated Rain** -- Canvas-based rain with randomized speed, height, and opacity
- **Custom Fonts** -- Self-hosted Kamerik 205 Heavy for bold typography
- **No Dependencies** -- Pure vanilla JS, no frameworks or build tools required

## Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Semantic markup, Canvas API |
| CSS3 | Custom properties, 3D transforms, `@font-face` |
| Vanilla JavaScript | Mouse tracking, canvas animation |
| Vercel | Static hosting & deployment |

## Getting Started

Clone the repository and open `index.html` in a browser:

```bash
git clone https://github.com/onlydisco/3d-forest-parallax.git
cd 3d-forest-parallax
open index.html
```

No build step required.

## Project Structure

```
.
├── css/
│   └── style.css
├── fonts/
│   └── kamerik205-heavy.woff2
├── img/
│   ├── favicon.svg
│   ├── layer-1.jpg
│   ├── layer-2.png
│   ├── layer-5.png
│   └── layer-6.png
├── js/
│   ├── main.js
│   └── rain.js
└── index.html
```

## How It Works

1. **Parallax Layers** -- Each `.layers__item` has a `translateZ()` and `scale()` transform that positions it at a different depth in 3D space
2. **Mouse Tracking** -- `main.js` listens for `mousemove` events and updates CSS custom properties (`--move-x`, `--move-y`) that rotate the container
3. **3D Perspective** -- The `.layers` wrapper applies `perspective: 1000px`, and `transform-style: preserve-3d` on the container makes child layers render at their Z-depth
4. **Rain Animation** -- `rain.js` creates 500 rain drops, each with randomized properties, and animates them on a full-screen canvas using `requestAnimationFrame`
