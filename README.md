# Phosphor Icons

Phosphor is a kickass and dead-simple set of open-source icons for web and digital media. We aim to provide variety, consistency, and above all, ease-of-use for digital content creators of all kinds.

## For developers

Phosphor is available as an icon font, [React package](https://github.com/phosphor-icons/phosphor-react), and [Vue package](https://github.com/phosphor-icons/phosphor-vue), all of which can be sourced from NPM or from a CDN.

### HTML/CSS

- **Simple to use** – We use a similar approach as many other icon sets out there, providing icons as a webfont that uses Unicode's Private Use Area character codes to map normally non-rendering characters to icons. But you don't need to know that. All you need to do is source the stylesheet, and drop in an icon with an `<i/>` tag and the appropriate class:

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/phosphor-icons@latest"></script>
  </head>
  <body>
    <i class="ph-smiley"></i>
    <i class="ph-heart-fill" style="color: hotpink"></i>
    <i class="ph-cube-duotone"></i>
  </body>
</html>
```

- **Styleable** – Since the icons are just text under the hood, they can be colored and styled with CSS like any other font, including `font-size`, `color`, etc. We include several helper classes to provide easy sizing if you need it:

```css
.ph-xxs { font-size: 0.5em; }
.ph-xs { font-size: 0.75em; }
.ph-sm { font-size: 0.875em; }
.ph-lg { font-size: 1.3333em; line-height: 0.75em; vertical-align: -0.0667em; }
.ph-xl { font-size: 1.5em; line-height: 0.6666em; vertical-align: -0.075em; }
.ph-1x { font-size: 1em; }
.ph-2x { font-size: 2em; }
.ph-3x { font-size: 3em; }
.ph-4x { font-size: 4em; }
.ph-5x { font-size: 5em; }
.ph-6x { font-size: 6em; }
.ph-7x { font-size: 7em; }
.ph-8x { font-size: 8em; }
.ph-9x { font-size: 9em; }
.ph-10x { font-size: 10em; }
.ph-fw { text-align: center; width: 1.25em; }
```

> **Note:** Overriding the `font-family`, `font-style`, `font-weight`, `font-variant`, or `text-transform` may break the icons and render unprintable characters. Don't do it.

### React

- **Powerful** – Phosphor's intuitive but powerful API can style the `color`, `size`, and `weight` of an icon with a few keystrokes, provide default styles to all icons via the Context API, or directly manipulate the SVG at runtime through render props to do some amazing things! Check out the full documentation on the [phosphor-react](https://github.com/phosphor-icons/phosphor-react) repo page.

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Smiley, Heart, Horse } from "phosphor-react";

const App = () => {
  return (
    <div>
      <Smiley />
      <Heart size={32} color="hotpink" weight="fill" />
      <Horse weight="duotone" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

- **Lightweight** – Supports tree-shaking, so your bundle only includes code for the icons you use.
- **Flexible** – Icon Components are a transparent wrapper around SVG elements, so feel free to add your own inline `style` objects, `onClick` handler functions, and a multitude of other props you're used to using on SVGs.

### Vue

- **Parity** – As with React, you can manipulate the `color`, `size`, and `weight` of an icon with a few keystrokes, or provide default styles to all icons via the `provide/inject` API. It is fully tree-shakable and ready to use right away. Check out the full documentation on the [phosphor-vue](https://github.com/phosphor-icons/phosphor-vue) repo page.

```html
<template>
  <div>
    <PhHorse />
    <PhHeart />
    <PhCube />
  </div>
</template>

<script>
  import { PhHorse, PhHeart, PhCube } from "phosphor-vue";
  export default {
    name: "App",
    components: {
      PhHorse,
      PhHeart,
      PhCube,
    },
  };
</script>
```

> **Note:** Due to possible namespace collisions with built-in html elements, compononent names in the Vue library are prefixed with `Ph`, but otherwise follow the same naming conventions.

## For designers

### Raw Assets

Download our [asset kit](https://www.phosphoricons.com/assets/phosphor.zip) to start working with Phosphor Icons in your designs.

- **SVGs** – Individual icon SVGs, in both minified and original formats retaining design-time detail.
- **Icon Font** – Use the icons as you would text, in print and other applications where full-fledged graphical elements are undesirable.

<!-- ### Source Files
- **Sketch**
- **Illustrator**
- **Figma** -->
