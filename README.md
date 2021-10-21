<img src="/meta/phosphor-mark-tight-yellow.png" width="128" align="right" />

# Phosphor Icons

Phosphor is a flexible icon family for interfaces, diagrams, presentations — whatever, really.

- 894 icons and counting
- 6 weights: **Thin**, **Light**, **Regular**, **Bold**, **Fill**, and **Duotone**
- Designed at 16 x 16px to read well small and scale up big
- Raw stroke information retained to fine-tune the style

More ways to use at [phosphoricons.com](https://phosphoricons.com).

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
    <ph-horse />
    <ph-heart :size="32" color="hotpink" weight="fill" />
    <ph-cube />
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

> **Note:** Due to possible namespace collisions with built-in HTML elements, compononent names in the Vue library are prefixed with `Ph`, but otherwise follow the same naming conventions. Both Pascal and kebab-case conventions can be used in templates.

## Our Related Projects

- [phosphor-react](https://github.com/phosphor-icons/phosphor-react) ▲ Phosphor icon component library for React
- [phosphor-vue](https://github.com/phosphor-icons/phosphor-vue) ▲ Phosphor icon component library for Vue
- [phosphor-icons](https://github.com/phosphor-icons/phosphor-icons) ▲ Phosphor icons for Vanilla JS
- [phosphor-flutter](https://github.com/phosphor-icons/phosphor-flutter) ▲ Phosphor IconData library for Flutter
- [phosphor-webcomponents](https://github.com/phosphor-icons/phosphor-webcomponents) ▲ Phosphor icons as Web Components
- [phosphor-figma](https://github.com/phosphor-icons/phosphor-figma) ▲ Phosphor icons Figma plugin
- [phosphor-sketch](https://github.com/phosphor-icons/phosphor-sketch) ▲ Phosphor icons Sketch plugin

## Community Projects

- [phosphor-react-native](https://github.com/duongdev/phosphor-react-native) ▲ Phosphor icon component library for React Native
- [phosphor-svelte](https://github.com/haruaki07/phosphor-svelte) ▲ Phosphor icons for Svelte apps
- [phosphor-r](https://github.com/dreamRs/phosphoricons) ▲ Phosphor icon wrapper for R documents and applications
- [blade-phosphor-icons](https://github.com/codeat3/blade-phosphor-icons) ▲ Phosphor icons in your Laravel Blade views

If you've made a port of Phosphor and you want to see it here, just open a PR [here](https://github.com/phosphor-icons/phosphor-home)!

## License

MIT © [Phosphor Icons](https://github.com/phosphor-icons)
