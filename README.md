# postcss-unity3d

[PostCSS] plugin helps fix common mistakes for Unity 3d `.uss` files meant to be used across Unity 2018, 2019, and 2020.
The plugin is meant to be used with the [PostUSS] package for Unity3d.

[PostCSS]: https://github.com/postcss/postcss
[PostUSS]: https://github.com/cdhanna/postuss

This plugin supports the following features.
- Automatically add `Button.unity-button` selector to rules that target `Button`. In Unity 2018, you can select a `UnityEngine:Button` component with the `Button` selector, but in 2020, they added a `unity-button` class to their buttons, making your `Button` based declarations less specific than the default Unity style sheets. By automatically adding the `Button.unity-button` selector, your declarations become relevant again, and you actually override the default Unity styles.
- Warn against declarations that use the `auto` keyword  
- Expands `padding`, `margin`, and `border-width` properties. 

```css
Button {
  /* any styles... */
}
```

```css
Button.unity-button,
Button {
  /* same styles */
}
```


## Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss postcss-unity3d
```

**Step 2:** Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-unity3d'),
    require('autoprefixer')
  ]
}
```

## TODO
- Disallow `active`, `activeColor`, and `activeBorder` 
- Warn when declarations don't specify units
- automatically change `background-color: none` to `background-color: rgba(0,0,0,0)`

[official docs]: https://github.com/postcss/postcss#usage
