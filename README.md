# Phosphor Icons

Phosphor is a kickass and dead-simple set of open-source icons for web and digital media. We aim to provide variety, consistency, and above all, ease-of-use for digital content creators of all kinds.

## For developers

Phosphor is available as an icon font and a React package, which can be sourced from NPM or from a CDN.

### Vanilla JS

- **This seems familiar...** – Using Phosphor in your web project might seem familiar. We use a similar approach as many other icon sets out there, providing icons as a webfont that uses Unicode's Private Use Area character codes to map normally non-rendering characters to icons. But you don't need to know that. All you need to do is source the stylesheet, and drop in an icon:

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/phosphor-web@latest"></script>
  </head>
  <body>
    <i class="ph-smiley"></i>
    <i class="ph-heart-fill" style="color: hotpink"></i>
    <i class="ph-cube-duotone"></i>
  </body>
</html>
```

- **Whatchacallit?** – We use a straightforward and semantic naming scheme that may mean only changing a few letters when switching from other icon sets. But don't switch on our account, there are some excellent sets out there!
- **That's it?** – Yep. That's it.

### React

- **Flex or flow** – Phosphor's intuitive but powerful API can style the `color`, `size`, and `weight` of an icon with a few keystrokes, or directly manipulate the SVG at runtime through render props to do some amazing things! Check out some examples on [Github](https://github.com/rektdeckard/phosphor-react).

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

- **Light as a Feather** – Supports tree-shaking, so your bundle only includes code for the icons you use.
- **Familiar** – Icon Components are a thin wrapper around SVG elements, so feel free to add your own inline `style` objects, `onClick` handler functions, and a multitude of other props you're used to using on React Elements.

## For designers

### Raw Assets
- **SVGs** – Grab our individual icon SVGs, in both minified and original formats retaining design-time detail.
- **Icon Font** – Use the icons as you would text, in applications where full-fledged graphical elements are undesirable.

### Source Files
- **Sketch**
- **Illustrator**
- **Figma**
