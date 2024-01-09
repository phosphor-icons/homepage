<img src="/meta/phosphor-mark-tight-black.png" width="96" align="right" />

# Phosphor Icons

Phosphor is a flexible icon family for interfaces, diagrams, presentations — whatever, really.

- 1,248 icons and counting
- 6 weights: **Thin**, **Light**, **Regular**, **Bold**, **Fill**, and **Duotone**
- Designed at 16 x 16px to read well small and scale up big
- Raw stroke information retained to fine-tune the style

More ways to use at [phosphoricons.com](https://phosphoricons.com).

## For developers

Phosphor is available for [web](https://github.com/phosphor-icons/web), [React](https://github.com/phosphor-icons/react), [Vue](https://github.com/phosphor-icons/vue), [Flutter](https://github.com/phosphor-icons/flutter), [Elm](https://github.com/phosphor-icons/phosphor-elm), and other frameworks and platforms.

### Vanilla Web

- **Simple to use** – We use a similar approach as many other icon sets out there, providing icons as a webfont that uses Unicode's Private Use Area character codes to map normally non-rendering characters to icons. But you don't need to know that. All you need to do is add the script to the document `<head>`, and drop in icons with an `<i/>` tag and the appropriate class:

```html
<!doctype html>
<html>
  <head>
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
  </head>
  <body>
    <i class="ph-smiley"></i>
    <i class="ph-fill ph-heart" style="color: hotpink"></i>
    <i class="ph-thin ph-cube"></i>
  </body>
</html>
```

Check out the full documentation on the [@phosphor-icons/web](https://github.com/phosphor-icons/web) repo page.

### React

- **Powerful** – Phosphor's intuitive but powerful API can style the `color`, `size`, and `weight` of an icon with a few keystrokes, provide default styles to all icons via the Context API, or directly manipulate the SVG at runtime through render props to do some amazing things! Check out the full documentation on the [@phosphor-icons/react](https://github.com/phosphor-icons/react) repo page.

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Smiley, Heart, Horse } from "@phosphor-icons/react";

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

- **Parity** – As with React, you can manipulate the `color`, `size`, and `weight` of an icon with a few keystrokes, or provide default styles to all icons via the `provide/inject` API. It is fully tree-shakable and ready to use right away. Check out the full documentation on the [@phosphor-icons/vue](https://github.com/phosphor-icons/vue) repo page.

```html
<template>
  <div>
    <PhHorse />
    <PhHeart :size="32" color="hotpink" weight="fill" />
    <PhCube />
  </div>
</template>

<script>
  import { PhHorse, PhHeart, PhCube } from "@phosphor-icons/vue";
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

- [@phosphor-icons/core](https://github.com/phosphor-icons/core) ▲ Phosphor icon assets and catalog
- [@phosphor-icons/react](https://github.com/phosphor-icons/react) ▲ Phosphor icon component library for React
- [@phosphor-icons/web](https://github.com/phosphor-icons/web) ▲ Phosphor icons for Vanilla JS
- [@phosphor-icons/vue](https://github.com/phosphor-icons/vue) ▲ Phosphor icon component library for Vue
- [@phosphor-icons/elm](https://github.com/phosphor-icons/phosphor-elm) ▲ Phosphor icons for Elm
- [@phosphor-icons/flutter](https://github.com/phosphor-icons/flutter) ▲ Phosphor IconData library for Flutter
- [@phosphor-icons/webcomponents](https://github.com/phosphor-icons/webcomponents) ▲ Phosphor icons as Web Components
- [@phosphor-icons/figma](https://github.com/phosphor-icons/figma) ▲ Phosphor icons Figma plugin
- [@phosphor-icons/sketch](https://github.com/phosphor-icons/sketch) ▲ Phosphor icons Sketch plugin

## Community Projects

- [phosphor-react-native](https://github.com/duongdev/phosphor-react-native) ▲ Phosphor icon component library for React Native
- [phosphor-svelte](https://github.com/haruaki07/phosphor-svelte) ▲ Phosphor icons for Svelte apps
- [phosphor-r](https://github.com/dreamRs/phosphoricons) ▲ Phosphor icon wrapper for R documents and applications
- [blade-phosphor-icons](https://github.com/codeat3/blade-phosphor-icons) ▲ Phosphor icons in your Laravel Blade views
- [wireui/phosphoricons](https://github.com/wireui/phosphoricons) ▲ Phosphor icons for Laravel
- [phosphor-css](https://github.com/lucagoslar/phosphor-css) ▲ CSS wrapper for Phosphor SVG icons
- [ruby-phosphor-icons](https://github.com/maful/ruby-phosphor-icons) ▲ Phosphor icons for Ruby and Rails applications
- [eleventy-plugin-phosphoricons](https://github.com/reatlat/eleventy-plugin-phosphoricons) ▲ An Eleventy plugin for add shortcode, allows Phosphor icons to be embedded as inline svg into templates
- [phosphor-leptos](https://github.com/SorenHolstHansen/phosphor-leptos) ▲ Phosphor icon component library for Leptos apps (rust)

If you've made a port of Phosphor and you want to see it here, just open a PR [here](https://github.com/phosphor-icons/homepage)!

## License

MIT © [Phosphor Icons](https://github.com/phosphor-icons)
