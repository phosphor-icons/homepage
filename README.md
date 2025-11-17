# Phosphor Icons

<!-- BEGIN_LOGO -->
<img src="/.github/logo.png" width="128" align="right" />
<!-- END_LOGO -->

<!-- BEGIN_OVERVIEW -->

Phosphor is a flexible icon family for interfaces, diagrams, presentations — whatever, really.

- 1,248 icons and counting
- 6 weights: **Thin**, **Light**, **Regular**, **Bold**, **Fill**, and **Duotone**
- Designed at 16 x 16px to read well small and scale up big
- Raw stroke information retained to fine-tune the style

More ways to use at [phosphoricons.com](https://phosphoricons.com).

<!-- END_OVERVIEW -->

## For developers

Phosphor is available for [web](https://github.com/phosphor-icons/web), [React](https://github.com/phosphor-icons/react), [Vue](https://github.com/phosphor-icons/vue), [Flutter](https://github.com/phosphor-icons/flutter), [Elm](https://github.com/phosphor-icons/phosphor-elm), and other frameworks and platforms.

### Vanilla Web

- **Simple to use** – We use a similar approach as many other icon sets out there, providing icons as a webfont that uses Unicode's Private Use Area character codes to map normally non-rendering characters to icons. But you don't need to know that. All you need to do is add the stylesheet for each weight you need to the document `<head>`, and drop in icons with an `<i/>` tag and the appropriate class:

```html
<!doctype html>
<html>
  <head>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/regular/style.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/fill/style.css"
    />
  </head>
  <body>
    <i class="ph ph-smiley"></i>
    <i class="ph-fill ph-heart" style="color: hotpink"></i>
    <i class="ph ph-cube"></i>
  </body>
</html>
```

Check out the full documentation on the [@phosphor-icons/web](https://github.com/phosphor-icons/web) repo page.

### React

- **Powerful** – Phosphor's intuitive but powerful API can style the `color`, `size`, and `weight` of an icon with a few keystrokes, provide default styles to all icons via the Context API, or directly manipulate the SVG at runtime through render props to do some amazing things! Check out the full documentation on the [@phosphor-icons/react](https://github.com/phosphor-icons/react) repo page.

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { SmileyIcon, HeartIcon, HorseIcon } from "@phosphor-icons/react";

const App = () => {
  return (
    <div>
      <SmileyIcon />
      <HeartIcon size={32} color="hotpink" weight="fill" />
      <HorseIcon weight="duotone" />
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

> [!NOTE]
> Due to possible namespace collisions with built-in HTML elements, compononent names in the Vue library are prefixed with `Ph`, but otherwise follow the same naming conventions. Both Pascal and kebab-case conventions can be used in templates.

<!-- BEGIN_LINKS -->

## Our Projects

- [@phosphor-icons/homepage](https://github.com/phosphor-icons/homepage) ▲ Phosphor homepage and general info
- [@phosphor-icons/core](https://github.com/phosphor-icons/core) ▲ Phosphor icon assets and catalog
- [@phosphor-icons/elm](https://github.com/phosphor-icons/phosphor-elm) ▲ Phosphor icons for Elm
- [@phosphor-icons/figma](https://github.com/phosphor-icons/figma) ▲ Phosphor icons Figma plugin
- [@phosphor-icons/flutter](https://github.com/phosphor-icons/flutter) ▲ Phosphor IconData library for Flutter
- [@phosphor-icons/pack](https://github.com/phosphor-icons/pack) ▲ Phosphor web font stripper to generate minimal icon bundles
- [@phosphor-icons/penpot](https://github.com/phosphor-icons/penpot) ▲ Phosphor icons Penpot plugin
- [@phosphor-icons/react](https://github.com/phosphor-icons/react) ▲ Phosphor icon component library for React
- [@phosphor-icons/sketch](https://github.com/phosphor-icons/sketch) ▲ Phosphor icons Sketch plugin
- [@phosphor-icons/swift](https://github.com/phosphor-icons/swift) ▲ Phosphor icon component library for SwiftUI
- [@phosphor-icons/theme](https://github.com/phosphor-icons/theme) ▲ A VS Code (and other IDE) theme with the Phosphor color palette
- [@phosphor-icons/unplugin](https://github.com/phosphor-icons/unplugin) ▲ A multi-framework bundler plugin for generating Phosphor sprite sheets
- [@phosphor-icons/vue](https://github.com/phosphor-icons/vue) ▲ Phosphor icon component library for Vue
- [@phosphor-icons/web](https://github.com/phosphor-icons/web) ▲ Phosphor icons for Vanilla JS
- [@phosphor-icons/webcomponents](https://github.com/phosphor-icons/webcomponents) ▲ Phosphor icons as Web Components

## Community Projects

- [adamglin0/compose-phosphor-icons](https://github.com/adamglin0/compose-phosphor-icon) ▲ Phosphor icons for Compose Multiplatform
- [altdsoy/phosphor_icons](https://github.com/altdsoy/phosphor_icons) ▲ Phosphor icons for Phoenix and TailwindCSS
- [amPerl/egui-phosphor](https://github.com/amperl/egui-phosphor) ▲ Phosphor icons for egui apps (Rust)
- [babakfp/phosphor-icons-svelte](https://github.com/babakfp/phosphor-icons-svelte) ▲ Phosphor icons for Svelte apps
- [brettkolodny/phosphor-lustre](https://github.com/brettkolodny/phosphor-lustre) ▲ Phosphor icons for Lustre
- [cellularmitosis/phosphor-uikit](https://github.com/cellularmitosis/phosphor-uikit) ▲ XCode asset catalog generator for Phosphor icons (Swift/UIKit)
- [cjohansen/phosphor-clj](https://github.com/cjohansen/phosphor-clj) ▲ Phosphor icons as Hiccup for Clojure and ClojureScript
- [codeat3/blade-phosphor-icons](https://github.com/codeat3/blade-phosphor-icons) ▲ Phosphor icons in your Laravel Blade views
- [dreamRs/phosphor-r](https://github.com/dreamRs/phosphoricons) ▲ Phosphor icon wrapper for R documents and applications
- [duongdev/phosphor-react-native](https://github.com/duongdev/phosphor-react-native) ▲ Phosphor icon component library for React Native
- [haruaki07/phosphor-svelte](https://github.com/haruaki07/phosphor-svelte) ▲ Phosphor icons for Svelte apps
- [IgnaceMaes/ember-phosphor-icons](https://github.com/IgnaceMaes/ember-phosphor-icons) ▲ Phosphor icons for Ember apps
- [iota-uz/icons](https://github.com/iota-uz/icons) ▲ Phosphor icons as Templ components (Go)
- [jajuma/phosphorhyva](https://github.com/JaJuMa-GmbH/phosphor-hyva) ▲ Phosphor icons for Magento 2 & Mage-OS with Hyvä Theme
- [Kitten](https://kitten.small-web.org/reference/#icons) ▲ Phosphor icons integrated by default in Kitten
- [lucagoslar/phosphor-css](https://github.com/lucagoslar/phosphor-css) ▲ CSS wrapper for Phosphor SVG icons
- [maful/ruby-phosphor-icons](https://github.com/maful/ruby-phosphor-icons) ▲ Phosphor icons for Ruby and Rails applications
- [meadowsys/phosphor-svgs](https://github.com/meadowsys/phosphor-svgs) ▲ Phosphor icons as Rust string constants
- [mwood/tamagui-phosphor-icons](https://github.com/mwood23/tamagui-phosphor-icons) ▲ Phosphor icons for Tamagui
- [noozo/phosphoricons_elixir](https://github.com/noozo/phosphoricons_elixir) ▲ Phosphor icons as SVG strings for Elixir/Phoenix
- [oyedejioyewole/nuxt-phosphor-icons](https://github.com/oyedejioyewole/nuxt-phosphor-icons) ▲ Phosphor icons integration for Nuxt
- [pepaslabs/phosphor-uikit](https://github.com/pepaslabs/phosphor-uikit) ▲ Xcode asset catalog generator for Swift/UIKit
- [raycast/phosphor-icons](https://www.raycast.com/marinsokol/phosphor-icons) ▲ Phosphor icons Raycast extension
- [reatlat/eleventy-plugin-phosphoricons](https://github.com/reatlat/eleventy-plugin-phosphoricons) ▲ An Eleventy shortcode plugin to embed icons as inline SVGs
- [robruiz/wordpress-phosphor-icons-block](https://github.com/robruiz/phosphor-icons-block) ▲ Phosphor icon block for use in WordPress v5.8+
- [sachaw/solid-phosphor](https://github.com/sachaw/solid-phosphor) ▲ Phosphor icons for SolidJS
- [SeanMcP/phosphor-astro](https://github.com/SeanMcP/phosphor-astro) ▲ Phosphor icons as Astro components
- [SorenHolstHansen/phosphor-leptos](https://github.com/SorenHolstHansen/phosphor-leptos) ▲ Phosphor icon component library for Leptos apps (Rust)
- [vnphanquang/phosphor-icons-tailwindcss](https://github.com/vnphanquang/phosphor-icons-tailwindcss) ▲ TailwindCSS plugin for Phosphor icons
- [wireui/phosphoricons](https://github.com/wireui/phosphoricons) ▲ Phosphor icons for Laravel

If you've made a port of Phosphor and you want to see it here, just open a PR [here](https://github.com/phosphor-icons/homepage)!

## License

MIT © [Phosphor Icons](https://github.com/phosphor-icons)

<!-- END_LINKS -->
