var isShorthand = require('is-css-shorthand')
var shorthandExpand = require('css-shorthand-expand')

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

  function warnOnAuto(decl, result) {
    if (opts.skipAutoWarn) return;

    if (decl.value == 'auto') {
      decl.warn(result, 'The auto keyword is not supported in Unity 2018')
    }
  }

  function expandDecls(decl) {

    function isSupportedShorthand (shorthand) {
      return ['padding', 'margin', 'border-width'].indexOf(shorthand) >= 0
    }

    if (isShorthand(decl.prop) && isSupportedShorthand(decl.prop)) {
      var expandedDecls = shorthandExpand(decl.prop, decl.value)

      Object.keys(expandedDecls).forEach(function (prop) {
        decl.after(prop +':' + expandedDecls[prop] + ';')
      })

      decl.remove()
    }
  }

  return {
    postcssPlugin: 'postcss-unity3d',

    Rule (rule) {
      addUnityButtonClass(rule)
    },
    Declaration(decl, {result}) {
      warnOnAuto(decl, result)
      expandDecls(decl)
    }

  }
}

module.exports.postcss = true
