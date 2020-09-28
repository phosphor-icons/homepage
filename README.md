# Phosphor Icons

Phosphor Icons is a flexible icon family in 6 weights. We aim to provide consistency, variety, and above all, ease-of-use for creators of all kinds. Browse the library on [our website](https://phosphoricons.com).

## For developers

Phosphor is available as a [one-liner](https://github.com/phosphor-icons/phosphor-icons) script, [React package](https://github.com/phosphor-icons/phosphor-react), and [Vue package](https://github.com/phosphor-icons/phosphor-vue), all of which can be sourced from NPM or from a CDN.

### HTML/CSS

- **Simple to use** – We use a similar approach as many other icon sets out there, providing icons as a webfont that uses Unicode's Private Use Area character codes to map normally non-rendering characters to icons. But you don't need to know that. All you need to do is add the script to the document `<head>`, and drop in icons with an `<i/>` tag and the appropriate class:

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/phosphor-icons"></script>
  </head>
  <body>
    <i class="ph-smiley"></i>
    <i class="ph-heart-fill" style="color: hotpink"></i>
    <i class="ph-cube-thin"></i>
  </body>
</html>
```

Check out the full documentation on the [phosphor-icons](https://github.com/phosphor-icons/phosphor-icons) repo page.

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
    <PhHeart :size="32" color="hotpink" weight="fill" />
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

> **Note:** Due to possible namespace collisions with built-in HTML elements, compononent names in the Vue library are prefixed with `Ph`, but otherwise follow the same naming conventions.

## For designers

### Raw Assets

Download our [asset kit](https://www.phosphoricons.com/assets/phosphor.zip) to start working with Phosphor Icons in your designs.

- **SVGs** – Individual icon SVGs, in both minified and original formats retaining design-time detail.
- **Icon Font** – Use the icons as you would text, in print and other applications where full-fledged graphical elements are undesirable.

<!-- ### Source Files
- **Sketch**
- **Illustrator**
- **Figma** -->

## Related Projects

- [phosphor-react](https://github.com/phosphor-icons/phosphor-react) ▲ Phosphor icon component library for React
- [phosphor-vue](https://github.com/phosphor-icons/phosphor-vue) ▲ Phosphor icon component library for Vue
- [phosphor-icons](https://github.com/phosphor-icons/phosphor-icons) ▲ Phosphor icons for Vanilla JS

## License

GPL-3.0 © [Phosphor Icons](https://github.com/phosphor-icons)
