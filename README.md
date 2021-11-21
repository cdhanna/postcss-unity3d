# postcss-unity3d

[PostCSS] plugin helps fix common mistakes for uss files.

[PostCSS]: https://github.com/postcss/postcss

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

[official docs]: https://github.com/postcss/postcss#usage
