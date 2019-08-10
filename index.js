module.exports = {
  extends: [
    'eslint:recommended',
    'eslint-config-google'
  ],
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
    'prefer-const': 'off'
  }
};
