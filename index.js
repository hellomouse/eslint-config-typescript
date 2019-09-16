module.exports = {
  extends: [
    'eslint:recommended',
    'eslint-config-google',
    'plugin:jsdoc/recommended'
  ],
  // use new jsdoc comment as jsdoc functionality in core eslint is deprecated
  plugins: ['jsdoc'],
  rules: {
    // highly subjective: dangling commas feel weird,
    'comma-dangle': ['error', 'never'],

    // so you can do n => +n instead of (n) => +n
    'arrow-parens': ['error', 'as-needed'],

    // 2 spaces for indent
    'indent': ['error', 2, { SwitchCase: 1 }],

    // console.log() is often used in node.js
    'no-console': 'off',

    // spaces after curly brackets look cleaner ({a: 4} vs { a: 4 })
    // also done by util.inspect
    'object-curly-spacing': ['error', 'always'],

    // a + b rather than a+b, but allow integer hints to not have spaces (eg. b|0)
    'space-infix-ops': ['error', { int32Hint: true }],

    // lines should generally be kept short but definitely shouldn't be over 120 characters
    // allow long strings and regexes though
    'max-len': ['error', {
      code: 120,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true
    }],

    // == has weird behavior with types, always use === instead
    'eqeqeq': ['error', 'always'],

    // errors due to unintentional reassigning generally are quite rare, in addition,
    // changing from const to let is a bit annoying
    'prefer-const': 'off',

    // use jsdoc/require-jsdoc instead
    'require-jsdoc': 'off',

    // allow while (true)
    'no-constant-condition': ['error', { checkLoops: false }],

    // descriptions on params and return is often redundant
    // for example:
    /*
     * Adds given numbers
     *
     * @param {Number} a First number
     * @param {Number} b Second number
     * @return {Number} The result of the operation
     */
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-returns-description': 'off',

    // not everything needs to be a complete sentence
    'jsdoc/require-description-complete-sentence': 'off',

    // most things explain themselves
    'jsdoc/require-example': 'off',

    // don't worry about whether a newline exists after jsdoc description
    'jsdoc/newline-after-description': 'off'
  },
  settings: {
    jsdoc: {
      tagNamePreference: {
        // keep the ones currently in use
        returns: { replacement: 'return' },
        yields: { replacement: 'yield' },
        augments: { replacement: 'extends' }
      }
    }
  }
};
