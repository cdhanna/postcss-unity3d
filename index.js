/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = (opts = {}) => {
  function addUnityButtonClass(rule){
    if (opts.skipUnityButton) return;

    const hasButton = rule.selectors.filter(s => s == 'Button').length > 0;

    if (!hasButton) return;

    const hasUnityButton = rule.selectors.filter(s => s == 'Button.unity-button').length > 0;
    if (hasUnityButton) return;

    rule.selectors = [...rule.selectors, 'Button.unity-button']
  }

  return {
    postcssPlugin: 'postcss-unity3d',

    Rule (rule) {
      addUnityButtonClass(rule)
    }
  }
}

module.exports.postcss = true
